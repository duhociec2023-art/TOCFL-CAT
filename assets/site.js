// Thanh menu + chân trang dùng chung. Thêm vào cuối <body> của mỗi trang:
//   <script src="(đường dẫn tới)/assets/site.js" data-page="bo-thu"></script>
// data-page: home | kiem-tra | bo-thu | luyen-thi (để tô sáng mục đang xem)
// data-foot="0": không hiện chân trang (trang làm bài)
(function () {
  var me = document.currentScript;
  var root = new URL("../", me.src).href; // thư mục gốc của web
  var page = me.getAttribute("data-page") || "";
  var NAV = [
    ["home", "", "Trang chủ"],
    ["kiem-tra", "kiem-tra/", "Kiểm tra đầu vào"],
    ["bo-thu", "bo-thu/", "Học bộ thủ"],
    ["luyen-thi", "luyen-thi/", "Luyện thi TOCFL"]
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
    '<nav class="site-nav" aria-label="Menu chính">' + links + "</nav></div>";
  document.body.prepend(head);

  if (me.getAttribute("data-foot") !== "0") {
    var foot = document.createElement("footer");
    foot.className = "site-foot";
    foot.innerHTML =
      '<div class="in"><span>Tiếng Trung Phồn Thể TOCFL</span>' +
      '<span>Tư vấn du học Đài Loan: <a href="https://www.duhociec.site/" target="_blank" rel="noopener">duhociec.site</a></span></div>';
    document.body.append(foot);
  }
})();
