// Kiểm tra ngân hàng câu hỏi trước khi đưa lên mạng.
// Cách chạy (cần Node.js):  node tools/check.js
// Báo LỖI (phải sửa) và CẢNH BÁO (nên xem lại), rồi in bảng số câu theo cấp / dạng bài.
const fs=require("fs"),path=require("path"),vm=require("vm");
const root=path.join(__dirname,"..");
const ctx={window:{},console};ctx.window.TOCFL={items:[],audio:new Set(),add(a){this.items.push(...a)}};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root,"pics.js"),"utf8"),ctx);
const PICS=ctx.window.PICS,errs=[],warns=[];
const FILES=["novice","a","b","c"];
for(const f of FILES){const src=fs.readFileSync(path.join(root,"bank",f+".js"),"utf8");
  // Mỗi file phải có dạng  TOCFL.add([ ...JSON... ]);  để công cụ tạo âm thanh đọc được
  const m=src.match(/^TOCFL\.add\(([\s\S]*)\);\s*$/m);
  if(!m){errs.push(`bank/${f}.js: không đúng dạng TOCFL.add([...]);`);continue}
  try{const arr=JSON.parse(m[1]);arr.forEach(x=>x._file=f);ctx.window.TOCFL.add(arr)}
  catch(e){errs.push(`bank/${f}.js: không phải JSON hợp lệ (${e.message})`)}}
const items=ctx.window.TOCFL.items;
const TYPES={L:["看圖回答","問答理解","對話","段落"],R:["單句理解","看圖釋義","選詞填空","完成段落","閱讀理解"]};
const BAND={1:"novice",2:"novice",3:"a",4:"a",5:"b",6:"b",7:"c",8:"c"};
const ids=new Set(),groups={};
for(const it of items){const id=it.id||"(không id)",E=m=>errs.push(`${id}: ${m}`),W=m=>warns.push(`${id}: ${m}`);
  if(!/^[NABC]-[LR]-\d{3}$/.test(id))E("id phải dạng A-L-001");
  if(ids.has(id))E("trùng id");ids.add(id);
  if(!["L","R"].includes(it.s))E("s phải là L hoặc R");
  if(!(it.lv>=1&&it.lv<=8&&Number.isInteger(it.lv)))E("lv phải là số 1–8");
  if(BAND[it.lv]!==it._file)E(`lv ${it.lv} không thuộc file bank/${it._file}.js`);
  if(id[0]!=={novice:"N",a:"A",b:"B",c:"C"}[it._file]||id[2]!==it.s)E("chữ đầu của id không khớp file hoặc kỹ năng");
  if(!(TYPES[it.s]||[]).includes(it.ty))E(`dạng bài "${it.ty}" không hợp lệ cho phần ${it.s}`);
  if(!it.q)E("thiếu câu hỏi q");
  if(!Array.isArray(it.o)||it.o.length<3||it.o.length>4)E("o phải có 3–4 phương án");
  else{if(new Set(it.o).size!==it.o.length)E("có phương án trùng nhau");
    if(it.o.some(x=>!String(x).trim()))E("có phương án rỗng");
    const want=it.lv<=2?3:4;if(it.o.length!==want)W(`nên có ${want} phương án (đang có ${it.o.length})`)}
  if(it.po)for(const p of it.o||[])if(!PICS.has(p))E(`không có hình "${p}"`);
  if(it.img&&!PICS.has(it.img))E(`không có hình "${it.img}"`);
  if(it.s==="L"){if(!Array.isArray(it.a)||!it.a.length)E("câu Nghe cần a (lời đọc)");
    else for(const l of it.a)if(!Array.isArray(l)||l.length!==2||!["男","女",""].includes(l[0])||!l[1])E("mỗi dòng a phải là [\"男\"|\"女\"|\"\", lời]");
    if(it.ty==="看圖回答"&&!it.img&&!it.po)E("看圖回答 cần hình img hoặc đáp án là hình (po)");
    if(it.t)W("câu Nghe không hiển thị t");}
  else{if(it.a)W("câu Đọc không dùng a");
    if(it.ty==="看圖釋義"&&!it.img)E("看圖釋義 cần hình img");
    if(it.ty!=="看圖釋義"&&!it.t)E(`${it.ty} cần đoạn văn t`);
    if(it.ty==="選詞填空"&&!/＿/.test(it.t||""))E("選詞填空 cần chỗ trống ＿＿ trong t");
    if(it.ty==="完成段落"&&!/＿/.test(it.t||""))E("完成段落 cần chỗ trống ＿＿ trong t");
    if(it.ty==="單句理解"&&!/\[\[.+?\]\]/.test(it.t||"")&&!/意思|是什麼|nghĩa|đúng/.test(it.q))W("單句理解 nên gạch chân [[...]] hoặc hỏi nghĩa cả câu");}
  if(!it.ex)W("thiếu giải thích ex");
  if(it.g){const key=JSON.stringify(it.s==="L"&&it.ty!=="看圖回答"?it.a:[it.t||"",it.img||""]);
    if(groups[it.g]&&groups[it.g]!==key)E(`nhóm ${it.g}: các câu cùng nhóm phải có cùng đoạn văn/lời đọc`);groups[it.g]=key}}
// đáp án đúng có hay dài nhất không (học sinh hay đoán "câu dài nhất")
const textItems=items.filter(x=>!x.po&&Array.isArray(x.o));
const longest=textItems.filter(x=>{const L=x.o.map(s=>String(s).length);return L[0]>Math.max(...L.slice(1))}).length;
const pct=Math.round(longest/textItems.length*100);
if(process.argv.includes("--long"))textItems.forEach(x=>{const L=x.o.map(s=>String(s).length);if(L[0]>Math.max(...L.slice(1)))console.log("  dài nhất:",x.id,L.join("/"))});
if(pct>35)warns.push(`Đáp án đúng dài nhất ở ${pct}% số câu: dễ bị đoán mẹo, nên cân lại độ dài phương án`);

console.log(`\nTổng: ${items.length} câu · đáp án đúng dài nhất ở ${pct}% số câu chữ\n`);
const tbl={};for(const it of items){const k=`${it.s} ${it.ty}`;tbl[k]=tbl[k]||{};tbl[k][it.lv]=(tbl[k][it.lv]||0)+1}
console.log("Dạng bài".padEnd(14)+[1,2,3,4,5,6,7,8].map(l=>("lv"+l).padStart(5)).join("")+"  tổng");
for(const s of ["L","R"])for(const ty of TYPES[s]){const r=tbl[`${s} ${ty}`]||{};
  console.log((s+" "+ty).padEnd(14-ty.length)+[1,2,3,4,5,6,7,8].map(l=>String(r[l]||"·").padStart(5)).join("")+String(Object.values(r).reduce((a,b)=>a+b,0)).padStart(6))}
for(const s of ["L","R"])console.log(`${s} theo cấp: `+[1,2,3,4,5,6,7,8].map(l=>`lv${l}=${items.filter(x=>x.s===s&&x.lv===l).length}`).join(" "));
if(warns.length){console.log(`\nCẢNH BÁO (${warns.length}):`);warns.forEach(w=>console.log("  · "+w))}
if(errs.length){console.log(`\nLỖI (${errs.length}):`);errs.forEach(e=>console.log("  ✗ "+e));process.exit(1)}
console.log("\n✓ Không có lỗi.");
