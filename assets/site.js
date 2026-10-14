// Thanh menu, đăng nhập Google và chân trang dùng chung. Thêm vào cuối <body> của mỗi trang:
//   <script src="(đường dẫn tới)/assets/site.js" data-page="bo-thu"></script>
// data-page:  home | kiem-tra | bo-thu | luyen-thi | tai-lieu (để tô sáng mục đang xem)
// data-foot="0":         không hiện chân trang (trang làm bài)
// data-login="required": phải đăng nhập Google mới xem được nội dung trang
// Link tải file có thuộc tính data-need-login (vd. <a href="x.xlsx" download data-need-login>):
//   chưa đăng nhập thì bấm vào sẽ hiện hộp đăng nhập, đăng nhập xong file tự tải về.
//
// ĐĂNG NHẬP GOOGLE: dán Client ID (lấy ở Google Cloud Console) vào GOOGLE_CLIENT_ID.
// Để trống thì web chạy như cũ: không có nút đăng nhập, không khóa trang nào.
var GOOGLE_CLIENT_ID = "791697607611-n8s3otagtr7d9cosse03rsc9r2fj3bvn.apps.googleusercontent.com";

(function () {
  var me = document.currentScript;
  var root = new URL("../", me.src).href; // thư mục gốc của web
  var page = me.getAttribute("data-page") || "";
  var mustLogin = me.getAttribute("data-login") === "required" && !!GOOGLE_CLIENT_ID;
  var KEY = "site-user";
  var KEEP_DAYS = 30; // giữ đăng nhập trên máy này trong 30 ngày

  // ---------- Người dùng (lưu trên máy học sinh) ----------
  function readUser() {
    try {
      var u = JSON.parse(localStorage.getItem(KEY) || "null");
      if (u && u.until > Date.now()) return u;
    } catch (e) {}
    return null;
  }
  function saveUser(u) { try { u ? localStorage.setItem(KEY, JSON.stringify(u)) : localStorage.removeItem(KEY); } catch (e) {} }
  var user = GOOGLE_CLIENT_ID ? readUser() : null;
  // Các trang làm bài đọc tên + email ở đây để gửi kèm kết quả
  window.SiteUser = { get: function () { return user; } };

  // ---------- Thanh menu ----------
  var NAV = [
    ["home", "", "Trang chủ"],
    ["kiem-tra", "kiem-tra/", "Kiểm tra đầu vào"],
    ["bo-thu", "bo-thu/", "Học bộ thủ"],
    ["luyen-thi", "luyen-thi/", "Luyện thi TOCFL"],
    ["tai-lieu", "tai-lieu/", "Tài liệu học tiếng Trung"]
  ];
  var links = NAV.map(function (n) {
    return '<a href="' + root + n[1] + '"' + (n[0] === page ? ' aria-current="page"' : "") + ">" + n[2] + "</a>";
  }).join("");
  var head = document.createElement("header");
  head.className = "site-head";
  head.innerHTML =
    '<div class="in">' +
    '<a class="site-logo" href="' + root + '"><span class="mk" aria-hidden="true">學</span>' +
    "<span><b>Tiếng Trung Phồn Thể TOCFL</b></span></a>" +
    '<nav class="site-nav" aria-label="Menu chính">' + links + "</nav>" +
    (GOOGLE_CLIENT_ID ? '<div class="site-user" id="site-user"></div>' : "") +
    "</div>";
  document.body.prepend(head);

  // ---------- Khóa trang khi chưa đăng nhập ----------
  var gate = null;
  if (mustLogin) {
    gate = document.createElement("section");
    gate.className = "login-gate";
    gate.innerHTML =
      '<div class="card"><span class="mk" aria-hidden="true">學</span>' +
      "<h1>Đăng nhập để làm bài</h1>" +
      "<p>Em đăng nhập bằng tài khoản Gmail để giáo viên biết bài này của ai. Không cần tạo tài khoản mới.</p>" +
      '<div id="gate-btn" class="gbtn"></div>' +
      '<p class="small">Chưa có Gmail? Tạo miễn phí tại <a href="https://accounts.google.com/signup" target="_blank" rel="noopener">accounts.google.com/signup</a></p></div>';
    head.after(gate);
  }

  // ---------- Chân trang ----------
  if (me.getAttribute("data-foot") !== "0") {
    var foot = document.createElement("footer");
    foot.className = "site-foot";
    foot.innerHTML =
      '<div class="in"><span>Tiếng Trung Phồn Thể TOCFL · <a href="' + root + 'chinh-sach/">Chính sách &amp; Điều khoản</a></span>' +
      '<span>Liên hệ: <a href="tel:+886965120883">+886 965 120 883</a> · <a href="https://zaloapp.com/qr/p/fwe9543sjn08" target="_blank" rel="noopener">Zalo</a></span>' +
      '<span>Tư vấn du học Đài Loan: <a href="https://www.duhociec.site/" target="_blank" rel="noopener">duhociec.site</a></span></div>';
    document.body.append(foot);
  }

  if (!GOOGLE_CLIENT_ID) return;

  // ---------- Tự điền họ tên vào ô “Họ tên học viên” ----------
  function fillName() {
    var nm = document.getElementById("nm");
    if (user && nm && !nm.value) nm.value = user.name;
  }
  new MutationObserver(fillName).observe(document.body, { childList: true, subtree: true });

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function render() {
    document.documentElement.classList.toggle("need-login", mustLogin && !user);
    document.documentElement.classList.toggle("signed-out", !user);
    var box = document.getElementById("site-user");
    if (user) {
      box.innerHTML =
        (user.picture ? '<img src="' + esc(user.picture) + '" alt="" referrerpolicy="no-referrer">' : "") +
        '<span class="who" title="' + esc(user.email) + '">' + esc(user.name) + "</span>" +
        '<button type="button" id="site-out">Đăng xuất</button>';
      document.getElementById("site-out").onclick = signOut;
      fillName();
    } else {
      box.innerHTML = '<div id="site-in"></div>';
      drawButtons();
    }
  }

  // Giải mã phần thông tin trong mã đăng nhập Google (tên, email, ảnh)
  function decode(jwt) {
    var b = jwt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    var bin = atob(b), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(bytes));
  }
  function onSignIn(resp) {
    var p = decode(resp.credential);
    user = { name: p.name || p.email, email: p.email, picture: p.picture || "", until: Date.now() + KEEP_DAYS * 864e5 };
    saveUser(user);
    render();
    if (pending) { // đang chờ tải file: đóng hộp đăng nhập rồi tải luôn
      var a = pending;
      pending = null;
      if (pop) pop.close();
      a.click();
    }
  }
  function signOut() {
    if (window.google && google.accounts) google.accounts.id.disableAutoSelect();
    user = null;
    saveUser(null);
    var nm = document.getElementById("nm");
    if (nm) nm.value = "";
    render();
  }

  // ---------- Tải tài liệu phải đăng nhập ----------
  var pending = null, pop = null;
  function askLogin(a) {
    pending = a;
    if (!pop) {
      pop = document.createElement("dialog");
      pop.className = "login-pop";
      pop.setAttribute("aria-labelledby", "pop-title");
      pop.innerHTML =
        '<div class="card"><span class="mk" aria-hidden="true">學</span>' +
        '<h1 id="pop-title">Đăng nhập để tải tài liệu</h1>' +
        "<p>Em đăng nhập bằng tài khoản Gmail để tải file về. Không cần tạo tài khoản mới.</p>" +
        '<div id="pop-btn" class="gbtn"></div>' +
        '<p class="small">Chưa có Gmail? Tạo miễn phí tại <a href="https://accounts.google.com/signup" target="_blank" rel="noopener">accounts.google.com/signup</a></p>' +
        '<button type="button" class="later">Để sau</button></div>';
      document.body.append(pop);
      pop.querySelector(".later").onclick = function () { pop.close(); };
      pop.addEventListener("click", function (e) { if (e.target === pop) pop.close(); }); // bấm ra ngoài để đóng
      pop.addEventListener("close", function () { pending = null; });
    }
    pop.showModal();
    drawPop();
  }
  function drawPop() {
    var b = document.getElementById("pop-btn");
    if (gsiReady && b && pop.open) google.accounts.id.renderButton(b, { type: "standard", theme: "filled_blue", size: "large", text: "signin_with", shape: "pill", locale: "vi", width: 280 });
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-need-login]");
    if (!a || user) return;
    e.preventDefault();
    askLogin(a);
  });

  var gsiReady = false;
  function drawButtons() {
    if (!gsiReady) return;
    var small = document.getElementById("site-in");
    if (small) google.accounts.id.renderButton(small, { type: "standard", theme: "outline", size: "medium", text: "signin", shape: "pill", locale: "vi" });
    var big = document.getElementById("gate-btn");
    if (big && !user) google.accounts.id.renderButton(big, { type: "standard", theme: "filled_blue", size: "large", text: "signin_with", shape: "pill", locale: "vi", width: 280 });
  }

  render();
  var s = document.createElement("script");
  s.src = "https://accounts.google.com/gsi/client";
  s.async = true;
  s.onload = function () {
    google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: onSignIn, auto_select: false, ux_mode: "popup" });
    gsiReady = true;
    drawButtons();
    if (pop) drawPop();
  };
  s.onerror = function () {
    var b = document.getElementById("gate-btn") || document.getElementById("pop-btn");
    if (b) b.innerHTML = '<p class="small">Không tải được nút đăng nhập Google. Em kiểm tra mạng rồi tải lại trang.</p>';
  };
  document.head.append(s);
})();
