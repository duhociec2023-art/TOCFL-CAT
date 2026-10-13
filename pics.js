/* Hình minh họa vẽ bằng SVG (tự vẽ, không dùng ảnh có bản quyền).
   Trong ngân hàng câu hỏi, hình được gọi bằng chuỗi "tên:tham_số", ví dụ "clock:7:30", "coffee:2", "board:營業時間|9:00–21:00".
   Mỗi hình có khung 120×90. Lớp màu: f = nền nhạt, a = màu chính, g = vàng, r = đỏ, w = nền thẻ. */
(function(){
const ZN=["","一","兩","三","四","五","六"];
const mug=(x,y)=>`<path class="f" d="M${x} ${y}h28v24a8 8 0 0 1-8 8h-12a8 8 0 0 1-8-8z"/><path d="M${x+28} ${y+6}a7 7 0 0 1 0 14"/><path d="M${x+9} ${y-5}q-4-5 0-10M${x+19} ${y-5}q-4-5 0-10"/>`;
const bowl=cx=>`<path class="f" d="M${cx-22} 46h44a22 22 0 0 1-44 0z"/><path d="M${cx-8} 72h16"/><path d="M${cx-15} 44q4-8 8 0q4-8 8 0q4-8 8 0"/><path d="M${cx+2} 42l18-26M${cx+8} 44l18-24"/>`;
const fig=(x,h)=>{const t=82-h;return `<circle class="f" cx="${x}" cy="${t}" r="6"/><path d="M${x} ${t+6}V68M${x} ${t+13}l-8 8M${x} ${t+13}l8 8M${x} 68l-6 14M${x} 68l6 14"/>`};
const phoneAt=x=>`<rect class="f" x="${x}" y="12" width="32" height="66" rx="6"/><rect class="w" x="${x+5}" y="20" width="22" height="44" rx="2"/><circle class="a" cx="${x+16}" cy="71" r="2.5"/>`;
const row=(n,w,f)=>{n=+n||1;const s=60-(n-1)*w/2;return Array.from({length:n},(_,i)=>f(s+i*w)).join("")};
const cloud=(x,y)=>`<path class="w" d="M${x} ${y}a12 12 0 0 1 4-23a16 16 0 0 1 30-4a13 13 0 0 1 14 27z"/>`;
const wheel=(x,y)=>`<circle class="w" cx="${x}" cy="${y}" r="7"/><circle class="a" cx="${x}" cy="${y}" r="2"/>`;
const hand=(deg,len)=>{const r=(deg-90)*Math.PI/180;return `M60 45L${(60+len*Math.cos(r)).toFixed(1)} ${(45+len*Math.sin(r)).toFixed(1)}`};
const zt=(x,y,t,sz,anchor)=>`<text class="z" x="${x}" y="${y}" text-anchor="${anchor||"middle"}" style="font-size:${sz||13}px">${t}</text>`;

const DRAW={
  coffee:n=>{n=+n||1;const s=60-n*22+6;return Array.from({length:n},(_,i)=>mug(s+i*44,38)).join("")},
  bun:n=>{n=+n||1;const k=n>2?.75:1;return row(n,48*k,x=>`<g transform="translate(${x} 64) scale(${k})"><path class="w" d="M-22 0q0-30 22-30q22 0 22 30z"/><path d="M-8 -23q8 6 16 0M0 -29v7"/><path d="M-28 0h56"/></g>`)},
  tea:()=>`<ellipse class="f" cx="58" cy="56" rx="26" ry="19"/><path d="M33 52q-14-2-16-16"/><path d="M83 46q14 0 12 16q-2 10-12 10"/><path class="f" d="M46 38q12-10 24 0z"/><circle class="a" cx="58" cy="30" r="3"/>`,
  noodle:n=>row(n,52,x=>bowl(x)),
  spicy:()=>bowl(46)+`<path class="r" d="M92 28q12 2 8 20q-4 14-14 20q6-14 2-38z"/><path d="M94 28q2-7 7-9"/>`,
  apple:n=>row(n,34,x=>`<path class="r" d="M${x} 40q-14-8-16 10q-1 18 16 22q17-4 16-22q-2-18-16-10z"/><path d="M${x} 40q0-8 4-12M${x+2} 33q8-4 10 2"/>`),
  bottle:n=>row(n,30,x=>`<path class="f" d="M${x-8} 34q0-6 4-8v-8h8v8q4 2 4 8v42a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4z"/><path class="a" d="M${x-4} 14h8v6h-8z"/><path d="M${x-8} 50h16"/>`),
  cake:()=>`<rect class="f" x="30" y="48" width="60" height="28" rx="3"/><path class="w" d="M30 56q7 6 15 0t15 0t15 0t15 0"/><path d="M45 48v-12M60 48v-12M75 48v-12"/><path class="g" d="M45 36q-3-5 0-9q3 4 0 9zM60 36q-3-5 0-9q3 4 0 9zM75 36q-3-5 0-9q3 4 0 9z"/><path d="M24 76h72"/>`,
  bball:()=>`<circle class="g" cx="60" cy="45" r="28"/><path d="M60 17v56M32 45h56M41 25q14 20 0 40M79 25q-14 20 0 40"/>`,
  tennis:()=>`<ellipse class="f" cx="50" cy="36" rx="17" ry="23" transform="rotate(-25 50 36)"/><path d="M60 57l14 24M43 20l12 30M36 34l26-10"/><circle class="g" cx="90" cy="30" r="8"/><path d="M83 26q7 4 14 0"/>`,
  swim:()=>`<path d="M10 58q10-8 20 0t20 0t20 0t20 0t20 0"/><path d="M10 74q10-8 20 0t20 0t20 0t20 0t20 0"/><circle class="f" cx="50" cy="44" r="8"/><path d="M60 44q16-18 30-4"/>`,
  run:()=>`<circle class="f" cx="66" cy="18" r="7"/><path d="M63 26l-8 22l14 10l-6 20M55 48l-14 14M60 32l-14 4M61 32l14 8l8-6"/><path d="M14 82h92" style="stroke-dasharray:4 6"/>`,
  movie:()=>`<rect class="f" x="26" y="40" width="68" height="38" rx="3"/><path class="a" d="M26 40l62-18l3 11l-62 18z"/><path d="M42 36l-2-7M58 31l-2-7M74 27l-2-7"/><path d="M50 52l14 8l-14 8z"/>`,
  music:()=>`<path d="M34 58v-10a26 26 0 0 1 52 0v10"/><rect class="a" x="26" y="52" width="14" height="22" rx="5"/><rect class="a" x="80" y="52" width="14" height="22" rx="5"/>`,
  book:()=>`<path class="w" d="M60 28q-18-10-40-6v50q22-4 40 6z"/><path class="w" d="M60 28q18-10 40-6v50q-22-4-40 6z"/><path d="M28 34q12-2 24 4M28 44q12-2 24 4M28 54q12-2 24 4M68 38q12-6 24-4M68 48q12-6 24-4M68 58q12-6 24-4"/>`,
  sleep:()=>`<path d="M14 74V40M106 74V54M14 60h92"/><rect class="f" x="18" y="48" width="18" height="12" rx="5"/><path class="w" d="M36 50h66v10h-66z"/><text x="58" y="34">Z</text><text x="70" y="24">Z</text><text x="82" y="16">z</text>`,
  computer:()=>`<rect class="f" x="24" y="14" width="72" height="46" rx="4"/><rect class="w" x="30" y="20" width="60" height="34" rx="2"/><path d="M52 60l-4 12h24l-4-12M38 76h44"/>`,
  tv:()=>`<rect class="f" x="18" y="18" width="84" height="52" rx="5"/><rect class="w" x="25" y="24" width="70" height="40" rx="2"/><path d="M50 8l10 10l10-10M44 78h32"/><path class="a" d="M52 36l14 8l-14 8z"/>`,
  cook:()=>`<path class="f" d="M30 46h60v20a10 10 0 0 1-10 10h-40a10 10 0 0 1-10-10z"/><path d="M22 46h76M90 50h14M16 50h14"/><path d="M48 38q-4-8 0-14M60 38q-4-8 0-14M72 38q-4-8 0-14"/>`,
  phone:()=>phoneAt(44),
  family:n=>{n=+n||4;const hs=[50,46,36,32,28,24];return Array.from({length:n},(_,i)=>fig(10+(i+.5)*100/n,hs[i])).join("")},
  people:n=>{n=+n||2;return Array.from({length:n},(_,i)=>fig(10+(i+.5)*100/n,44)).join("")},
  dog:()=>`<ellipse class="w" cx="60" cy="48" rx="24" ry="22"/><path class="a" d="M38 34q-12 4-8 26q8 0 12-14zM82 34q12 4 8 26q-8 0-12-14z"/><circle class="a" cx="52" cy="44" r="2.5"/><circle class="a" cx="68" cy="44" r="2.5"/><ellipse class="a" cx="60" cy="56" rx="5" ry="3.5"/><path d="M60 60v5M54 66q6 4 12 0"/>`,
  cat:()=>`<path class="w" d="M38 30l4-18l14 12h8l14-12l4 18q8 10 4 24q-6 18-26 18q-20 0-26-18q-4-14 4-24z"/><circle class="a" cx="51" cy="44" r="2.5"/><circle class="a" cx="69" cy="44" r="2.5"/><path d="M57 52h6l-3 4z"/><path d="M60 56v4M36 52l14 2M36 60l14-2M84 52l-14 2M84 60l-14-2"/>`,
  sun:()=>`<circle class="g" cx="60" cy="45" r="16"/><path d="M60 15v10M60 65v10M30 45h10M80 45h10M39 24l7 7M74 59l7 7M81 24l-7 7M46 59l-7 7"/>`,
  rain:()=>cloud(30,52)+`<path d="M42 62l-4 10M56 62l-4 10M70 62l-4 10M84 62l-4 10"/>`,
  cloudy:()=>`<circle class="g" cx="78" cy="30" r="12"/>`+cloud(28,62),
  umbrella:()=>`<path class="a" d="M18 46a42 30 0 0 1 84 0q-7-6-14 0q-7-6-14 0q-7-6-14 0q-7-6-14 0q-7-6-14 0q-7-6-14 0z"/><path d="M60 16v-4M60 46v24q0 8 8 8q6 0 6-6"/>`,
  thermo:t=>`<path class="w" d="M32 14a8 8 0 0 1 16 0v40a14 14 0 1 1-16 0z"/><path class="r" d="M36 30h8v28h-8z"/><circle class="r" cx="40" cy="64" r="9"/><text x="54" y="50" style="font-size:19px">${t||"30°C"}</text>`,
  bus:()=>`<rect class="f" x="16" y="16" width="88" height="52" rx="8"/><rect class="w" x="24" y="24" width="20" height="18" rx="2"/><rect class="w" x="50" y="24" width="20" height="18" rx="2"/><rect class="w" x="76" y="24" width="20" height="18" rx="2"/><path d="M16 52h88"/>`+wheel(36,70)+wheel(84,70),
  mrt:()=>`<path class="f" d="M24 20q0-8 8-8h56q8 0 8 8v46h-72z"/><rect class="w" x="32" y="20" width="56" height="22" rx="3"/><circle class="g" cx="38" cy="54" r="4"/><circle class="g" cx="82" cy="54" r="4"/><path d="M34 66l-10 14M86 66l10 14M18 80h84"/>`,
  car:()=>`<path class="f" d="M14 62v-14q0-6 6-8l12-4l12-14h36l14 14q12 2 12 12v14z"/><path class="w" d="M48 26h14v12h-24zM68 26h10l10 12h-20z"/>`+wheel(36,64)+wheel(86,64),
  bike:()=>`<circle cx="32" cy="58" r="18"/><circle cx="88" cy="58" r="18"/><path d="M32 58l18-26h30l8 26M50 32l14 26h24M46 24h12M80 32l-4-10h10"/>`,
  plane:()=>`<path class="f" d="M14 50l70-10q18-2 22 4q-4 6-22 6l-70 2z"/><path class="a" d="M54 44l-14-24h10l22 22zM56 50l-12 20h10l20-20zM20 46l-6-12h7l10 12z"/>`,
  hospital:()=>`<rect class="w" x="26" y="20" width="68" height="60" rx="3"/><path class="r" d="M54 30h12v10h10v12h-10v10h-12v-10h-10v-12h10z"/><path d="M50 80v-12h20v12"/>`,
  shoes:()=>`<path class="f" d="M14 64v-20q8 4 16 0l10 10q18 4 26 12v6h-52z"/><path class="a" d="M58 64v-20q8 4 16 0l10 10q18 4 26 12v6h-52z"/>`,
  shirt:()=>`<path class="f" d="M42 14l-26 14l8 16l10-4v40h52v-40l10 4l8-16l-26-14q-6 10-18 10t-18-10z"/>`,
  gift:()=>`<rect class="f" x="26" y="38" width="68" height="40" rx="2"/><rect class="g" x="22" y="28" width="76" height="12" rx="2"/><path class="a" d="M55 28h10v50h-10z"/><path d="M60 28q-16-18-22-6q-2 6 22 6q24 0 22-6q-6-12-22 6"/>`,
  key:()=>`<circle class="g" cx="36" cy="45" r="16"/><circle class="w" cx="36" cy="45" r="6"/><path d="M52 45h48v10M88 45v10"/>`,
  money:t=>`<rect class="f" x="14" y="24" width="92" height="44" rx="4"/><ellipse class="w" cx="60" cy="46" rx="28" ry="14"/><text x="60" y="51" text-anchor="middle">${t||"$"}</text>`,
  tag:t=>`<path class="g" d="M14 30h66l22 15l-22 15h-66z"/><circle class="w" cx="88" cy="45" r="3"/><text x="47" y="50" text-anchor="middle">${t}</text>`,
  phonetag:t=>phoneAt(8)+`<path class="g" d="M46 34h52l16 12l-16 12h-52z"/><text x="74" y="51" text-anchor="middle">${t}</text>`,
  clock:t=>{const[h,m]=String(t||"12:00").split(".").join(":").split(":").map(Number);
    const ticks=Array.from({length:12},(_,i)=>{const r=i*30*Math.PI/180,a=30,b=i%3?27:24;
      return `M${(60+a*Math.sin(r)).toFixed(1)} ${(45-a*Math.cos(r)).toFixed(1)}L${(60+b*Math.sin(r)).toFixed(1)} ${(45-b*Math.cos(r)).toFixed(1)}`}).join("");
    return `<circle class="w" cx="60" cy="45" r="36"/><path d="${ticks}"/><path class="hh" d="${hand(((h%12)+(m||0)/60)*30,16)}" style="stroke-width:4"/><path d="${hand((m||0)*6,26)}" style="stroke-width:2.5"/><circle class="a" cx="60" cy="45" r="3"/>`},
  cal:s=>{const[mo,d,wd]=String(s||"5月|12|星期三").split("|");
    return `<rect class="w" x="30" y="12" width="60" height="70" rx="4"/><path class="a" d="M30 16a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4v14h-60z"/><path d="M44 6v12M76 6v12"/>`+
      `<text class="z lt" x="60" y="26" text-anchor="middle">${mo}</text><text x="60" y="60" text-anchor="middle" style="font-size:26px">${d}</text>`+(wd?zt(60,76,wd,11):"")},
  chart:s=>{const[lb,vs]=String(s).split("|"),L=lb.split(","),V=vs.split(",").map(Number),mx=Math.max(...V),w=Math.min(26,84/L.length);
    const gap=(96-w*L.length)/(L.length+1);
    return `<path d="M12 72h100M12 72V8"/>`+L.map((l,i)=>{const x=12+gap+i*(w+gap),h=V[i]/mx*54;
      return `<rect class="${["a","g","f","r"][i%4]}" x="${x.toFixed(1)}" y="${(72-h).toFixed(1)}" width="${w}" height="${h.toFixed(1)}"/>`+
        `<text x="${(x+w/2).toFixed(1)}" y="${(68-h).toFixed(1)}" text-anchor="middle" style="font-size:10px">${V[i]}</text>`+zt(x+w/2,86,l,10)}).join("")},
  board:s=>{const L=String(s).split("|"),n=L.length,lh=Math.min(17,70/n),y0=45-(n-1)*lh/2+4;
    return `<rect class="w" x="6" y="6" width="108" height="78" rx="4"/><rect x="10" y="10" width="100" height="70" rx="2" style="stroke-width:1"/>`+
      L.map((t,i)=>zt(60,y0+i*lh,t,i===0?13:11)).join("")},
};
const ALT={coffee:n=>`${ZN[+n||1]}杯咖啡`,bun:n=>`${ZN[+n||1]}個包子`,tea:()=>"茶",noodle:n=>`${ZN[+n||1]}碗麵`,spicy:()=>"很辣的麵",
  apple:n=>`${ZN[+n||1]}個蘋果`,bottle:n=>`${ZN[+n||1]}瓶水`,cake:()=>"生日蛋糕",bball:()=>"籃球",tennis:()=>"網球",swim:()=>"游泳",run:()=>"跑步",
  movie:()=>"電影",music:()=>"聽音樂",book:()=>"看書",sleep:()=>"睡覺",computer:()=>"電腦",tv:()=>"電視",cook:()=>"做飯",phone:()=>"手機",
  family:n=>`${ZN[+n||4]}個人`,people:n=>`${ZN[+n||2]}個人`,dog:()=>"狗",cat:()=>"貓",sun:()=>"晴天",rain:()=>"下雨",cloudy:()=>"陰天",umbrella:()=>"雨傘",
  thermo:t=>`溫度 ${t}`,bus:()=>"公車",mrt:()=>"捷運",car:()=>"汽車",bike:()=>"腳踏車",plane:()=>"飛機",hospital:()=>"醫院",shoes:()=>"鞋子",shirt:()=>"衣服",
  gift:()=>"禮物",key:()=>"鑰匙",money:t=>`錢 ${t||""}`,tag:t=>`價錢 ${t}`,phonetag:t=>`手機 ${t}`,clock:t=>`時鐘 ${t}`,
  cal:s=>`日曆 ${String(s).split("|").join(" ")}`,chart:s=>`圖表 ${s}`,board:s=>String(s).split("|").join(" ")};
const split=s=>{const i=s.indexOf(":");return i<0?[s,""]:[s.slice(0,i),s.slice(i+1)]};
window.PICS={
  has:s=>!!DRAW[split(s)[0]],
  names:Object.keys(DRAW),
  svg:(s,lbl)=>{const[n,a]=split(s);return `<svg class="pic" viewBox="0 0 120 90" role="img" aria-label="${lbl||ALT[n](a)}">${DRAW[n](a)}</svg>`},
  alt:s=>{const[n,a]=split(s);return ALT[n](a)},
};
})();
