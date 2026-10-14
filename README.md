# Tiếng Trung Phồn Thể TOCFL

Website học và luyện thi TOCFL cho học viên du học Đài Loan, gồm 5 phần dùng chung một thanh menu và một bộ màu (theo màu web IEC duhociec.site):

| Địa chỉ | Phần |
|---|---|
| `/` | Trang chủ: lộ trình 4 bước, dẫn vào các phần |
| `/kiem-tra/` | Kiểm tra đầu vào Mini-CAT (當代中文 Quyển 1, bài 1–5), chép từ repo `tocfl-l1-5` |
| `/bo-thu/` | 214 bộ thủ: Tra cứu, Thẻ ghi nhớ, Kiểm tra nhanh |
| `/luyen-thi/` | Kho đề TOCFL CAT (thi thử + luyện dạng bài) |
| `/tai-lieu/` | Tài liệu học tiếng Trung: danh sách tài liệu đọc thêm |
| `/tai-lieu/thanh-ngu/` | Kho thành ngữ, tục ngữ & 文言文 (tìm kiếm, lọc theo phần) |

Chạy hoàn toàn trên trình duyệt, đăng lên GitHub Pages là dùng được.

## Phần dùng chung

- `assets/site.css`: màu sắc, font, kiểu thanh menu và chân trang. **Đổi màu ở đây là mọi trang đổi theo.**
- `assets/site.js`: vẽ thanh menu và chân trang. Thêm hoặc đổi tên mục menu ở mảng `NAV`.
- Mỗi trang nạp `site.css` ở đầu và `site.js` ở cuối `<body>`.
- Trang `luyen-thi/` có dòng `<base href="../">` để vẫn đọc được `bank/`, `audio/`, `pics.js` ở thư mục gốc. Đừng xóa dòng này.

## Bộ thủ

Dữ liệu 214 bộ nằm ở `bo-thu/data.js`, mỗi dòng một bộ (hướng dẫn các cột ở đầu file). Tiến độ thẻ ghi nhớ lưu trên máy của từng học sinh.

## Tài liệu học tiếng Trung

Mỗi tài liệu là một thư mục trong `tai-lieu/`. Thêm tài liệu mới: tạo thư mục, rồi chép thêm một thẻ `<article class="card">` trong `tai-lieu/index.html`.

Kho thành ngữ: nội dung nằm ở `tai-lieu/thanh-ngu/data.js`, mỗi dòng một câu (hướng dẫn các cột ở đầu file). Tên nhóm và tên cột của từng nhóm nằm ở `TL_NHOM` trong cùng file.

## Kho đề: hai chế độ

- **Thi thử CAT**: mô phỏng bài thi thích ứng thật. Nghe khoảng 35 câu trong 50 phút, Đọc khoảng 35 câu trong 60 phút (có bản rút gọn 20+20 câu). Máy chọn câu theo trình độ, câu Nghe chỉ phát 1 lần và có 10 giây để chọn, không quay lại được. Cuối bài ra điểm ước tính thang 700 và cấp đạt theo mốc chính thức của 華測會, rồi tự gửi kết quả về Google Sheet.
- **Luyện theo dạng bài**: chọn cấp (Novice / A / B / C), kỹ năng và dạng bài; không tính giờ; chọn xong có đáp án và giải thích tiếng Việt.

## Cấu trúc thư mục

```
luyen-thi/index.html  giao diện + cách chấm (cấu hình ở đầu phần <script>)
pics.js           hình minh họa vẽ bằng SVG
bank/novice.js    câu hỏi 準備級 (lv 1–2)
bank/a.js         câu hỏi Band A (lv 3–4)
bank/b.js         câu hỏi Band B (lv 5–6)
bank/c.js         câu hỏi Band C (lv 7–8)
audio/            file thu âm (không bắt buộc) + audio/index.js
tools/check.js    kiểm tra ngân hàng câu hỏi
tools/make_audio.py  tạo file thu âm giọng thật
```

## Đưa lên GitHub Pages

1. Tạo repo mới trên GitHub (ví dụ `tocfl-cat`), tải toàn bộ thư mục này lên.
2. Vào **Settings → Pages**, mục *Source* chọn nhánh `main`, thư mục `/ (root)`, bấm *Save*.
3. Sau 1–2 phút, trang có địa chỉ dạng `https://<tên-tài-khoản>.github.io/tocfl-cat/`.

## Thêm hoặc sửa câu hỏi

Mỗi câu là một dòng trong file `bank/*.js`. Phần giữa `TOCFL.add([` và `]);` phải là JSON hợp lệ: dùng dấu nháy kép, không có dấu phẩy sau câu cuối cùng.

```json
{"id":"A-R-041","s":"R","lv":4,"ty":"選詞填空","t":"我＿＿＿朋友去看電影。","q":"Chọn từ phù hợp điền vào chỗ trống.","o":["跟","給","對","從"],"ex":"跟 + người + động từ = cùng ai làm gì."}
```

| Trường | Ý nghĩa |
|---|---|
| `id` | Mã câu: chữ cấp (N/A/B/C) - kỹ năng (L/R) - số 3 chữ số. Không trùng. |
| `s` | `L` Nghe, `R` Đọc |
| `lv` | Bậc 1–8: 1 準備一級, 2 準備二級, 3 入門級, 4 基礎級, 5 進階級, 6 高階級, 7 流利級, 8 精通級 |
| `ty` | Nghe: 看圖回答, 問答理解, 對話, 段落 · Đọc: 單句理解, 看圖釋義, 選詞填空, 完成段落, 閱讀理解 |
| `a` | (Nghe) lời đọc, mỗi lượt một cặp `["男" hoặc "女", "câu nói"]` |
| `t` | (Đọc) đoạn văn. Chỗ trống viết `＿＿＿`. Phần gạch chân viết `[[...]]`. Xuống dòng viết `\n`. |
| `img` | Hình kèm câu, ví dụ `clock:7:30`, `tag:$80`, `board:營業時間\|9:00–21:00` (danh sách hình xem trong `pics.js`) |
| `po` | Đặt `1` nếu các phương án là hình |
| `q` | Câu hỏi hoặc lời hướng dẫn |
| `o` | Các phương án. **Phương án đúng luôn viết đầu tiên**, trang web tự xáo thứ tự. Cấp 1–2 dùng 3 phương án, cấp 3–8 dùng 4. |
| `ex` | Giải thích tiếng Việt, hiện ở chế độ Luyện tập và phần xem lại |
| `g` | Mã nhóm khi nhiều câu dùng chung một đoạn văn/bài nghe. Thi thử chỉ lấy 1 câu mỗi nhóm. |

Sau khi sửa, chạy kiểm tra (cần Node.js):

```
node tools/check.js
```

Script báo **LỖI** (phải sửa: sai JSON, trùng id, thiếu trường…) và **CẢNH BÁO** (nên xem: thiếu giải thích, đáp án đúng thường dài nhất…), kèm bảng số câu theo cấp và dạng bài.

## Âm thanh

Mặc định trang dùng giọng đọc tiếng Trung có sẵn trên máy học viên (tốt nhất là Chrome hoặc Edge trên Windows). Muốn giọng thật đồng đều cho mọi máy, chạy trên máy tính có Internet:

```
pip install edge-tts
python tools/make_audio.py
```

Script tạo `audio/<id>.mp3` (giọng nữ HsiaoChen, giọng nam YunJhe) và cập nhật `audio/index.js`. Chạy lại sau khi thêm/sửa câu Nghe; chỉ câu mới hoặc đã đổi lời mới được tạo lại. Tải thư mục `audio/` lên cùng repo.

## Gửi kết quả về Google Sheet

`SHEET_URL` trong `luyen-thi/index.html` đang dùng chung Apps Script với Mini-CAT, gửi vào trang tính tên `Thi thử TOCFL` (sửa ở `SHEET_NAME`). Mỗi lần thi thử thêm một dòng: họ tên, điểm và cấp từng phần, tỉ lệ đúng theo dạng bài, danh sách câu sai (có mã câu để tra lại). Để trống `SHEET_URL` nếu không muốn gửi.

## Lưu ý

- Toàn bộ câu hỏi do giáo viên tự biên soạn theo **dạng bài** của TOCFL, không sao chép đề của 華測會. Ngân hàng mô phỏng chính thức của 華測會 chỉ cho phép dùng để học, không dùng cho mục đích thương mại.
- Điểm thang 700 là **ước tính để luyện tập**: độ khó từng câu do giáo viên gán, chưa được hiệu chỉnh bằng dữ liệu thí sinh như đề thật.
- Số liệu trong các bài đọc/nghe (thống kê, giá cả…) là giả định để luyện tập.
