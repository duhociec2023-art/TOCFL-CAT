// Dữ liệu 214 bộ thủ Khang Hy (phồn thể). Mỗi dòng một bộ, theo thứ tự số 1 → 214.
// Các cột, ngăn bằng dấu |:
// chữ | biến thể (cách nhau dấu cách) | pinyin | chú âm | Hán Việt | nghĩa | emoji minh họa | giải thích | chữ ví dụ | thường gặp (1 hoặc 0)
// Sửa nội dung: sửa đúng dòng của bộ đó, giữ đủ 10 cột, không thêm dấu | trong chữ.
window.BOTHU_RAW = `
一||yī|ㄧ|Nhất|một|1️⃣|Một nét ngang nằm ngang: số một. Cũng tượng trưng cho mặt đất hay đường chân trời.|三 上 下|1
丨||gǔn|ㄍㄨㄣˇ|Cổn|nét sổ thẳng|↕️|Một nét thẳng từ trên xuống, chỉ sự xuyên suốt, nối trên với dưới.|中 串|0
丶||zhǔ|ㄓㄨˇ|Chủ|điểm, chấm|🕯️|Một chấm nhỏ, giống đốm lửa trên ngọn đèn. Chữ 主 (chủ) có chấm này ở trên.|主 丸|0
丿||piě|ㄆㄧㄝˇ|Phiệt|nét phẩy|↙️|Nét viết xiên từ phải trên xuống trái dưới.|乃 久|0
乙|乚|yǐ|ㄧˇ|Ất|can Ất (thứ hai)|〰️|Giống mầm cây cong queo cố nhú lên khỏi mặt đất.|九 也 乾|0
亅||jué|ㄐㄩㄝˊ|Quyết|nét sổ móc|🪝|Nét sổ có móc ở cuối, giống cái móc câu.|了 事|0
二||èr|ㄦˋ|Nhị|hai|2️⃣|Hai nét ngang: số hai.|五 井 云|1
亠||tóu|ㄊㄡˊ|Đầu|phần đầu, nắp|🎩|Một chấm trên một nét ngang, như cái nắp đội trên đầu chữ.|京 交 亮|1
人|亻|rén|ㄖㄣˊ|Nhân|người|🧑|Hình người đứng nhìn nghiêng, thấy rõ hai chân. Đứng bên trái chữ thì viết thành 亻.|你 他 們 休|1
儿||ér|ㄦˊ|Nhân (đi)|người (phần chân)|🚶|Hai chân người đang bước đi, thường nằm ở dưới chữ.|兄 先 光|0
入||rù|ㄖㄨˋ|Nhập|vào|📥|Hai nét chụm lại như mũi tên chui vào trong.|內 全|0
八|丷|bā|ㄅㄚ|Bát|tám; tách ra|8️⃣|Hai nét quay lưng tách ra hai bên. Nghĩa gốc là chia ra, sau mượn làm số tám.|公 六 共|0
冂||jiōng|ㄐㄩㄥ|Quynh|vùng biên xa|🖼️|Một cái khung chỉ có ba cạnh, như vòng biên giới bao quanh.|再 冊|0
冖||mì|ㄇㄧˋ|Mịch|trùm, che phủ|⛺|Tấm vải trùm lên che vật bên dưới. Khác 宀 vì không có chấm trên đầu.|冠 冥|0
冫||bīng|ㄅㄧㄥ|Băng|nước đá|🧊|Hai nét giống vân băng đá. So với 氵 (3 nét, nước) thì 冫 chỉ có 2 nét: nước đông lại.|冰 冷 冬|1
几||jī|ㄐㄧ|Kỷ|ghế nhỏ, bàn thấp|🪑|Hình cái ghế thấp có chân.|凡 凳|0
凵||kǎn|ㄎㄢˇ|Khảm|hố, miệng há|⛳|Một cái hố hở miệng phía trên.|出 凶|0
刀|刂|dāo|ㄉㄠ|Đao|con dao|🔪|Hình con dao có lưỡi và cán. Đứng bên phải chữ thì viết thành 刂.|分 別 到 刻|1
力||lì|ㄌㄧˋ|Lực|sức mạnh|💪|Hình cái cày xưa, phải dùng sức mới kéo được. Chữ 男 = 田 ruộng + 力 sức: người đàn ông.|男 助 動|1
勹||bāo|ㄅㄠ|Bao|bao bọc|🤗|Người cúi lưng ôm trọn một vật vào lòng.|包 勻|0
匕||bǐ|ㄅㄧˇ|Chủy|cái thìa|🥄|Hình cái thìa cán dài.|北 化|0
匚||fāng|ㄈㄤ|Phương|cái hộp|📦|Cái hộp vuông mở một bên.|匠 匪|0
匸||xì|ㄒㄧˋ|Hệ|che giấu|🙈|Giống 匚 nhưng nét ngang trên thò ra, ý là che đậy, giấu đi.|區 匹|0
十||shí|ㄕˊ|Thập|mười|🔟|Một ngang, một sổ cắt nhau: đủ cả bốn phương, là số mười.|千 半 南|1
卜||bǔ|ㄅㄨˇ|Bốc|bói|🔮|Vết nứt trên mai rùa khi đốt để xem bói.|占 卦|0
卩|㔾|jié|ㄐㄧㄝˊ|Tiết|đốt tre; người quỳ|🧎|Hình người quỳ gối. Còn dùng với nghĩa đốt, khớp.|印 危 即|0
厂||hàn|ㄏㄢˋ|Hán|sườn núi|🧗|Mỏm đá nhô ra, dưới có chỗ trú được.|原 厚|0
厶||sī|ㄙ|Khư|riêng tư|🤫|Vòng tay cuộn về phía mình: của riêng mình.|去 參|0
又||yòu|ㄧㄡˋ|Hựu|lại; tay phải|🤚|Hình bàn tay phải. Nhiều chữ có 又 liên quan đến tay: 取 lấy, 友 bạn (hai tay nắm nhau).|友 反 取|1
口||kǒu|ㄎㄡˇ|Khẩu|miệng|👄|Hình cái miệng mở. Chữ có 口 thường liên quan đến ăn, nói, kêu.|吃 喝 叫 名|1
囗||wéi|ㄨㄟˊ|Vi|vây quanh|⭕|Khung vuông bao kín bốn phía, to hơn 口. Như bức tường quanh một nước.|國 回 圖|1
土||tǔ|ㄊㄨˇ|Thổ|đất|🟫|Mầm cây nhô lên khỏi mặt đất.|地 在 坐|1
士||shì|ㄕˋ|Sĩ|kẻ sĩ, người có học|🎓|Giống 土 nhưng nét ngang trên dài hơn nét dưới. Chỉ người đàn ông có học, có tài.|壯 聲|0
夂||zhǐ|ㄓˇ|Truy|đến sau|👣|Hình bàn chân úp xuống, đi tới sau.|冬 各|0
夊||suī|ㄙㄨㄟ|Tuy|đi chậm|🐌|Bàn chân bước chậm, kéo lê. Thường nằm dưới chữ.|夏|0
夕||xī|ㄒㄧ|Tịch|chiều tối|🌆|Vầng trăng mới mọc lúc chiều tối. Giống 月 nhưng thiếu một nét.|多 夜 外|1
大||dà|ㄉㄚˋ|Đại|to lớn|🙆|Người đứng dang rộng hai tay hai chân: to lớn.|天 太 夫|1
女||nǚ|ㄋㄩˇ|Nữ|phụ nữ|👩|Người phụ nữ ngồi quỳ, hai tay đan trước ngực.|好 媽 姐|1
子||zǐ|ㄗˇ|Tử|con|👶|Em bé quấn tã: đầu to, hai tay giơ ra.|字 學 孩|1
宀||mián|ㄇㄧㄢˊ|Miên|mái nhà|🏠|Hình mái nhà nhìn từ bên hông. Chữ 家 = mái nhà + heo (豕): nhà có nuôi heo.|家 室 安|1
寸||cùn|ㄘㄨㄣˋ|Thốn|tấc|📏|Bàn tay, chấm nhỏ chỉ chỗ bắt mạch cách cổ tay một tấc.|對 封|0
小||xiǎo|ㄒㄧㄠˇ|Tiểu|nhỏ|🤏|Ba chấm nhỏ như hạt cát: nhỏ bé.|少 尖|1
尢|尣|wāng|ㄨㄤ|Uông|yếu, què|🦿|Người có một chân bị cong, đi khập khiễng.|就 尤|0
尸||shī|ㄕ|Thi|thân người; xác|🛌|Người nằm hoặc ngồi xổm. Nhiều chữ có 尸 liên quan đến thân người hoặc nhà ở.|屋 局 層|0
屮||chè|ㄔㄜˋ|Triệt|mầm cỏ|🍀|Một cây cỏ non mới nhú, có lá hai bên.|屯|0
山||shān|ㄕㄢ|Sơn|núi|🏔️|Ba đỉnh núi nhọn nhô lên.|岸 島 峰|1
巛|川|chuān|ㄔㄨㄢ|Xuyên|sông|🌊|Ba dòng nước chảy song song.|州 巡|0
工||gōng|ㄍㄨㄥ|Công|công việc; thước thợ|📐|Hình cây thước của người thợ: làm việc, công việc.|左 巧 差|0
己||jǐ|ㄐㄧˇ|Kỷ|bản thân|🙋|Sợi dây quấn khúc. Mượn nghĩa: chính mình. Đừng nhầm với 已 (đã) và 巳.|已 巷|0
巾||jīn|ㄐㄧㄣ|Cân|khăn|🧣|Tấm khăn vải treo rủ xuống. Chữ có 巾 thường liên quan đến vải.|布 帶 帽 師|1
干||gān|ㄍㄢ|Can|cái khiên; can dự|🛡️|Hình cái khiên hoặc cây chạc dùng để chống đỡ.|平 年 幸|0
幺||yāo|ㄧㄠ|Yêu|nhỏ bé|🧶|Một lọn tơ nhỏ xoắn lại: nhỏ, non.|幼 幾|0
广||yǎn|ㄧㄢˇ|Nghiễm|nhà dựa vách|🏚️|Mái nhà dựa vào vách đá, chỉ có một bên tường. Chữ có 广 thường là nhà cửa, cửa hàng.|店 床 廣|1
廴||yǐn|ㄧㄣˇ|Dẫn|bước dài|➰|Bước chân kéo dài ra. Luôn bọc ở bên trái và dưới chữ.|建 延|0
廾||gǒng|ㄍㄨㄥˇ|Củng|chắp hai tay|🙌|Hai bàn tay cùng nâng một vật lên.|弄 弊|0
弋||yì|ㄧˋ|Dặc|cọc; bắn|📍|Cây cọc gỗ cắm xuống đất, hoặc mũi tên có buộc dây.|式|0
弓||gōng|ㄍㄨㄥ|Cung|cái cung|🏹|Hình cây cung cong.|張 弟 強|0
彐|彑|jì|ㄐㄧˋ|Kệ|đầu con heo|🐗|Hình cái đầu heo nhìn nghiêng.|彗 彙|0
彡||shān|ㄕㄢ|Sam|lông; hoa văn|✨|Ba nét xiên như sợi lông, tia sáng hay hoa văn trang trí.|形 影 彩|0
彳||chì|ㄔˋ|Xích|bước ngắn|🚸|Nửa bên trái của chữ 行 (ngã tư): đi, bước. Có thể gọi là “người kép”.|很 往 得|1
心|忄 ⺗|xīn|ㄒㄧㄣ|Tâm|tim, lòng|❤️|Hình quả tim. Đứng bên trái viết thành 忄. Chữ có 心 thường nói về cảm xúc, suy nghĩ.|想 快 忙|1
戈||gē|ㄍㄜ|Qua|cây giáo|🗡️|Vũ khí cán dài có lưỡi ngang. Chữ có 戈 thường liên quan đến chiến đấu.|我 戰 成|0
戶|户|hù|ㄏㄨˋ|Hộ|cửa một cánh|🛖|Một cánh cửa, bằng nửa chữ 門. Nghĩa rộng: hộ gia đình.|房 所|0
手|扌|shǒu|ㄕㄡˇ|Thủ|tay|✋|Bàn tay có năm ngón. Đứng bên trái viết thành 扌. Chữ có 扌 thường là động tác của tay.|打 拿 找|1
支||zhī|ㄓ|Chi|cành; chống đỡ|🥢|Bàn tay cầm một cành tre.|技 枝|0
攴|攵|pū|ㄆㄨ|Phộc|đánh nhẹ|👊|Bàn tay cầm roi gõ nhẹ. Đứng bên phải viết thành 攵, chỉ hành động.|教 放 收|1
文||wén|ㄨㄣˊ|Văn|văn chương; hoa văn|📜|Người có hình vẽ trên ngực. Từ hoa văn mà ra nghĩa chữ viết, văn chương.|斑 斌|0
斗||dǒu|ㄉㄡˇ|Đẩu|cái đấu đong|🪣|Cái gáo có cán dài dùng để đong gạo.|料 斜|0
斤||jīn|ㄐㄧㄣ|Cân|cái rìu; cân|🪓|Hình cái rìu. Sau mượn làm đơn vị cân (khoảng 600g ở Đài Loan).|新 斷 近|0
方||fāng|ㄈㄤ|Phương|vuông; hướng|🧭|Hai chiếc thuyền buộc song song. Nghĩa thường dùng: hình vuông, phương hướng.|旅 族 旁|0
无|旡|wú|ㄨˊ|Vô|không có|🚫|Dạng cổ của chữ 無 (không). Biến thể 旡 là người há miệng nghẹn.|既|0
日||rì|ㄖˋ|Nhật|mặt trời; ngày|☀️|Mặt trời tròn có chấm ở giữa. Chữ có 日 thường liên quan đến ánh sáng, thời gian.|明 時 早|1
曰||yuē|ㄩㄝ|Viết|nói rằng|💬|Cái miệng có nét ngang là hơi lời nói phát ra. Dẹt hơn chữ 日.|書 最 會|0
月||yuè|ㄩㄝˋ|Nguyệt|mặt trăng; tháng|🌙|Vầng trăng khuyết. Chú ý: 月 bên trái chữ chỉ cơ thể thường là bộ 肉 (thịt).|朋 有 期|1
木||mù|ㄇㄨˋ|Mộc|cây, gỗ|🌳|Cái cây có cành phía trên và rễ phía dưới. 2 cây = 林 rừng, 3 cây = 森 rừng rậm.|林 桌 樹|1
欠||qiàn|ㄑㄧㄢˋ|Khiếm|thiếu; ngáp|🥱|Người há to miệng ngáp. Chữ có 欠 thường liên quan đến miệng, hơi thở.|歌 歡 次|0
止||zhǐ|ㄓˇ|Chỉ|dừng lại|🛑|Hình bàn chân. Chân đứng yên một chỗ là dừng lại.|正 步 歲|0
歹|歺|dǎi|ㄉㄞˇ|Ngạt|xấu; xương tàn|💀|Mảnh xương vụn. Chữ có 歹 thường liên quan đến chết chóc.|死 殘|0
殳||shū|ㄕㄨ|Thù|binh khí; đánh|🔨|Bàn tay cầm gậy để đánh.|段 殺|0
毋|母|wú|ㄨˊ|Vô|chớ, đừng|⛔|Hình người mẹ (母). Mượn nghĩa: chớ, đừng.|母 每 毒|0
比||bǐ|ㄅㄧˇ|Tỷ|so sánh|👥|Hai người đứng cạnh nhau để so.|皆 毗|0
毛||máo|ㄇㄠˊ|Mao|lông|🪶|Sợi lông có nhiều nhánh.|毯 毫|0
氏||shì|ㄕˋ|Thị|họ|👪|Họ của một dòng tộc. Ví dụ: 王氏 họ Vương.|民 紙|0
气||qì|ㄑㄧˋ|Khí|hơi, khí|💨|Những làn hơi bay ngang.|氣 氧|0
水|氵|shuǐ|ㄕㄨㄟˇ|Thủy|nước|💧|Dòng nước chảy ở giữa, giọt nước hai bên. Bên trái chữ viết thành 氵 (3 chấm).|河 海 洗|1
火|灬|huǒ|ㄏㄨㄛˇ|Hỏa|lửa|🔥|Ngọn lửa bốc lên. Nằm dưới chữ viết thành 灬 (4 chấm).|炒 熱 點|1
爪|爫|zhǎo|ㄓㄠˇ|Trảo|móng vuốt|🦅|Bàn tay hoặc móng vuốt úp xuống để chộp.|爬 爭|0
父||fù|ㄈㄨˋ|Phụ|cha|👨|Bàn tay cầm rìu, gậy: người cha lao động.|爸 爺|0
爻||yáo|ㄧㄠˊ|Hào|đan chéo|❌|Hai dấu chéo chồng lên nhau, là hào trong Kinh Dịch.|爽|0
爿||qiáng|ㄑㄧㄤˊ|Tường|mảnh gỗ|🪵|Nửa bên trái của thân cây bổ đôi.|牆 壯|0
片||piàn|ㄆㄧㄢˋ|Phiến|tấm, mảnh|🪚|Nửa bên phải của thân cây bổ đôi: tấm gỗ.|版 牌|0
牙||yá|ㄧㄚˊ|Nha|răng|🦷|Hai chiếc răng hàm cài vào nhau.|穿 呀|0
牛|牜|niú|ㄋㄧㄡˊ|Ngưu|trâu, bò|🐂|Đầu bò nhìn từ phía trước, có hai sừng.|物 特|0
犬|犭|quǎn|ㄑㄩㄢˇ|Khuyển|chó|🐕|Con chó đứng. Bên trái viết thành 犭, chỉ nhiều loài thú.|狗 狼 獨|1
玄||xuán|ㄒㄩㄢˊ|Huyền|đen huyền; sâu xa|🌌|Sợi tơ được nhuộm màu sẫm.|率 畜|0
玉|王|yù|ㄩˋ|Ngọc|ngọc|💎|Ba viên ngọc xâu bằng một sợi dây. Bên trái viết giống 王, gọi là “vương ngọc”.|玩 現 球|1
瓜||guā|ㄍㄨㄚ|Qua|dưa|🍈|Quả dưa treo trên dây leo.|瓣 孤|0
瓦||wǎ|ㄨㄚˇ|Ngõa|ngói; đồ đất nung|🧱|Viên ngói cong úp lên nhau.|瓶 甕|0
甘||gān|ㄍㄢ|Cam|ngọt|🍯|Cái miệng đang ngậm một miếng ăn ngon.|甜 甚|0
生||shēng|ㄕㄥ|Sinh|sinh ra, sống|🌱|Mầm cây vừa mọc lên khỏi đất (土).|產 星|0
用||yòng|ㄩㄥˋ|Dụng|dùng|🛠️|Hình cái thùng gỗ đóng đai, đồ vật để dùng.|甩|0
田||tián|ㄊㄧㄢˊ|Điền|ruộng|🚜|Thửa ruộng được chia ô bằng các bờ.|男 界 畫|1
疋|⺪|pǐ|ㄆㄧˇ|Thất|cái chân; tấm vải|🦵|Hình bắp chân và bàn chân. Còn là đơn vị đếm vải.|疑 蛋|0
疒||nè|ㄋㄜˋ|Nạch|bệnh tật|🤒|Người nằm trên giường bệnh. Chữ có 疒 hầu như đều về bệnh.|病 痛 瘦|1
癶||bō|ㄅㄛ|Bát|đạp ra|👟|Hai bàn chân dang ra hai bên.|登 發|0
白||bái|ㄅㄞˊ|Bạch|trắng|⚪|Ánh sáng đầu tiên của mặt trời: màu trắng, sáng.|百 的|0
皮||pí|ㄆㄧˊ|Bì|da|🐄|Bàn tay lột lớp da thú.|皺 波|0
皿||mǐn|ㄇㄧㄣˇ|Mãnh|bát, đĩa|🥣|Cái bát có chân đế. Chữ có 皿 thường là đồ đựng.|盤 盒 盛|0
目||mù|ㄇㄨˋ|Mục|mắt|👁️|Con mắt dựng đứng lên. Chữ 看 = tay (手) che trên mắt (目): nhìn xa.|看 眼 睡|1
矛||máo|ㄇㄠˊ|Mâu|cây giáo dài|🔱|Cây giáo cán dài có mũi nhọn.|矜 務|0
矢||shǐ|ㄕˇ|Thỉ|mũi tên|🎯|Mũi tên có đầu nhọn và đuôi lông.|知 短|0
石||shí|ㄕˊ|Thạch|đá|🪨|Hòn đá (口) dưới vách núi (厂).|破 碗 研|0
示|礻|shì|ㄕˋ|Thị|thần; bày tỏ|🙏|Bàn thờ cúng thần. Bên trái viết thành 礻, chữ thường liên quan đến thần linh, lễ nghi.|神 禮 祝|1
禸||róu|ㄖㄡˊ|Nhựu|vết chân thú|🐾|Dấu chân thú in trên mặt đất.|禽 禹|0
禾||hé|ㄏㄜˊ|Hòa|cây lúa|🌾|Cây lúa có bông trĩu xuống. Khác 木 ở nét phẩy trên đầu.|秋 種 科|1
穴||xué|ㄒㄩㄝˊ|Huyệt|hang|🕳️|Mái hang có lỗ. Chữ có 穴 thường là lỗ, khoảng trống.|空 窗 穿|0
立||lì|ㄌㄧˋ|Lập|đứng|🧍|Người đứng thẳng trên mặt đất.|站 童 端|0
竹|⺮|zhú|ㄓㄨˊ|Trúc|tre|🎋|Hai cành tre có lá rủ xuống. Trên đầu chữ viết thành ⺮. Đồ làm từ tre như bút 筆.|筆 第 等|1
米||mǐ|ㄇㄧˇ|Mễ|gạo|🍚|Những hạt gạo rơi quanh thân lúa.|粉 糖 精|0
糸|糹 纟|mì|ㄇㄧˋ|Mịch|sợi tơ|🧵|Một cuộn tơ xoắn. Chữ có 糹 thường là sợi, vải, màu sắc.|紅 給 經|1
缶||fǒu|ㄈㄡˇ|Phẫu|đồ sành|🏺|Cái chum, vò bằng đất nung.|缺 罐|0
网|罒 ⺳|wǎng|ㄨㄤˇ|Võng|lưới|🕸️|Tấm lưới đánh cá. Trên đầu chữ viết thành 罒.|罪 置 罵|0
羊||yáng|ㄧㄤˊ|Dương|dê, cừu|🐑|Đầu con dê có hai sừng cong. 羊 to = 美 đẹp.|美 群|0
羽||yǔ|ㄩˇ|Vũ|lông vũ, cánh|🪽|Hai chiếc lông chim đặt cạnh nhau.|習 翻|0
老|耂|lǎo|ㄌㄠˇ|Lão|già|👴|Người già tóc dài chống gậy.|考 者|0
而||ér|ㄦˊ|Nhi|mà; râu|🧔|Hình bộ râu dưới cằm. Sau mượn làm hư từ “mà”.|耐 需|0
耒||lěi|ㄌㄟˇ|Lỗi|cái cày|⛏️|Cái cày bằng gỗ để xới đất.|耕|0
耳||ěr|ㄦˇ|Nhĩ|tai|👂|Hình cái tai. Chữ có 耳 thường liên quan đến nghe.|聽 聞 聯|1
聿||yù|ㄩˋ|Duật|cây bút|🖌️|Bàn tay cầm cây bút lông.|肅 書|0
肉|月|ròu|ㄖㄡˋ|Nhục|thịt|🥩|Miếng thịt có thớ. Bên trái chữ viết giống 月, chỉ bộ phận cơ thể.|腦 臉 肚|1
臣||chén|ㄔㄣˊ|Thần|bề tôi|🙇|Con mắt dựng đứng của người đang cúi đầu trước vua.|臨 臥|0
自||zì|ㄗˋ|Tự|tự mình; mũi|☝️|Hình cái mũi. Người Hoa chỉ vào mũi khi nói “tôi”, nên có nghĩa “tự mình”.|臭 息|0
至||zhì|ㄓˋ|Chí|đến|🏁|Mũi tên bay tới cắm xuống đất: đã đến nơi.|致 臺 到|0
臼||jiù|ㄐㄧㄡˋ|Cữu|cái cối giã|🫙|Cái cối có rãnh bên trong để giã gạo.|舊 興|0
舌||shé|ㄕㄜˊ|Thiệt|lưỡi|👅|Cái lưỡi thè ra khỏi miệng (口).|舒 甜|0
舛||chuǎn|ㄔㄨㄢˇ|Suyễn|trái ngược|🔀|Hai bàn chân quay ngược chiều nhau.|舞 舜|0
舟||zhōu|ㄓㄡ|Chu|thuyền|🛶|Hình chiếc thuyền nhỏ. Chữ có 舟 thường liên quan đến tàu thuyền.|船 般|0
艮||gèn|ㄍㄣˋ|Cấn|bền cứng; dừng|🚧|Người quay đầu lại trừng mắt, không chịu đi tiếp.|良 根 很|0
色||sè|ㄙㄜˋ|Sắc|màu sắc|🎨|Hai người đứng gần nhau, sắc mặt thay đổi. Nghĩa thường dùng: màu sắc.|艷|0
艸|艹|cǎo|ㄘㄠˇ|Thảo|cỏ|🌿|Hai khóm cỏ mọc cạnh nhau. Trên đầu chữ viết thành 艹. Chữ có 艹 thường là cây cỏ, hoa.|花 茶 草|1
虍||hū|ㄏㄨ|Hô|vằn hổ|🐅|Phần đầu con hổ với vằn lông.|虎 號 處|0
虫||chóng|ㄔㄨㄥˊ|Trùng|sâu bọ|🐛|Con rắn hoặc con sâu. Chữ có 虫 là côn trùng, cả tôm cua.|蚊 蝦 蛋|0
血||xiě|ㄒㄧㄝˇ|Huyết|máu|🩸|Cái bát (皿) có giọt máu bên trên, dùng khi cúng tế.|衆|0
行||xíng|ㄒㄧㄥˊ|Hành|đi; ngã tư|🛣️|Hình ngã tư đường phố nhìn từ trên xuống.|街 衛 術|0
衣|衤|yī|ㄧ|Y|áo|👕|Cái áo có cổ và hai vạt. Bên trái chữ viết thành 衤 (có 2 chấm, khác 礻).|衫 褲 裡|1
襾|西 覀|yà|ㄧㄚˋ|Á|che đậy|🗃️|Cái nắp đậy lên trên. Trên đầu chữ thường viết thành 覀.|要 覆 西|0
見||jiàn|ㄐㄧㄢˋ|Kiến|thấy|👀|Con mắt to (目) đặt trên người (儿): người đang nhìn.|覺 親 視|0
角||jiǎo|ㄐㄧㄠˇ|Giác|sừng; góc|🦏|Cái sừng thú có vân. Nghĩa rộng: góc.|解 觸|0
言|訁|yán|ㄧㄢˊ|Ngôn|lời nói|🗣️|Lời nói thoát ra từ miệng. Chữ có 訁 thường liên quan đến nói, viết.|說 話 請|1
谷||gǔ|ㄍㄨˇ|Cốc|thung lũng|🏞️|Dòng nước chảy ra từ khe núi.|豁 欲|0
豆||dòu|ㄉㄡˋ|Đậu|hạt đậu; bát có chân|🫘|Cái bát có chân cao dùng đựng đồ cúng. Sau mượn chỉ hạt đậu.|豐 豎 頭|0
豕||shǐ|ㄕˇ|Thỉ|con heo|🐖|Con heo bụng to, chân ngắn, có đuôi.|豬 象 家|0
豸||zhì|ㄓˋ|Trãi|thú lưng dài|🐆|Con thú lưng dài đang rình mồi, như mèo, báo.|貓 豹|0
貝||bèi|ㄅㄟˋ|Bối|vỏ sò; tiền|🐚|Vỏ sò. Ngày xưa dùng vỏ sò làm tiền, nên chữ có 貝 thường liên quan đến tiền bạc.|買 賣 貴|1
赤||chì|ㄔˋ|Xích|màu đỏ|🟥|Người đứng (大) trên lửa (火): sáng đỏ rực.|赦 赫|0
走||zǒu|ㄗㄡˇ|Tẩu|chạy, đi|🏃|Người vung tay chạy (trên), bàn chân (dưới).|起 趕 超|0
足|⻊|zú|ㄗㄨˊ|Túc|chân|🦶|Đầu gối (口) và bàn chân (止). Bên trái viết thành ⻊.|跑 路 跳|1
身||shēn|ㄕㄣ|Thân|thân thể|🤰|Người có cái bụng to nhìn nghiêng.|躲 射|0
車||chē|ㄔㄜ|Xa|xe|🛞|Chiếc xe ngựa nhìn từ trên xuống: thùng xe, trục và hai bánh.|輛 輸 軍|1
辛||xīn|ㄒㄧㄣ|Tân|cay; vất vả|🌶️|Con dao khắc chữ lên mặt tội nhân. Nghĩa: cay đắng, vất vả.|辣 辦|0
辰||chén|ㄔㄣˊ|Thần|Thìn; thời gian|⏰|Hình cái vỏ sò dùng làm dụng cụ cắt cỏ. Mượn làm chi Thìn, thời gian.|農 晨|0
辵|辶|chuò|ㄔㄨㄛˋ|Sước|đi, bước|🛤️|Bước đi trên đường. Viết thành 辶 bọc dưới chữ, thường liên quan đến di chuyển.|這 進 還|1
邑|阝(phải)|yì|ㄧˋ|Ấp|làng ấp, vùng đất|🏘️|Người quỳ (巴) dưới vùng đất (口). Khi là 阝 đứng BÊN PHẢI chữ thì là bộ này.|都 部 郵|1
酉||yǒu|ㄧㄡˇ|Dậu|bình rượu|🍶|Cái vò rượu. Chữ có 酉 thường liên quan đến rượu, lên men.|酒 醫 醒|0
釆||biàn|ㄅㄧㄢˋ|Biện|phân biệt|🔍|Dấu chân thú, nhìn vào để phân biệt con gì. Khác 采 vì không có nét phẩy trên đầu.|釋 番|0
里||lǐ|ㄌㄧˇ|Lý|làng; dặm|🏡|Ruộng (田) và đất (土): nơi người ta sinh sống.|重 野 量|0
金|釒 钅|jīn|ㄐㄧㄣ|Kim|kim loại; vàng|🪙|Quặng kim loại nằm trong đất. Chữ có 釒 thường là đồ kim loại.|錢 銀 鐘|1
長|镸|cháng|ㄔㄤˊ|Trường|dài|🧓|Người già có mái tóc dài bay. Nghĩa: dài.|張 帳|0
門||mén|ㄇㄣˊ|Môn|cửa hai cánh|🚪|Cổng có hai cánh mở. Chữ có 門 thường liên quan đến cửa, ra vào.|開 間 關|1
阜|阝(trái)|fù|ㄈㄨˋ|Phụ|gò đất|⛰️|Sườn đồi có bậc. Khi là 阝 đứng BÊN TRÁI chữ thì là bộ này.|院 陽 附|1
隶||dài|ㄉㄞˋ|Đãi|kịp, bắt kịp|🤝|Bàn tay túm được đuôi con thú: bắt kịp.|隸|0
隹||zhuī|ㄓㄨㄟ|Chuy|chim đuôi ngắn|🐦|Con chim đuôi ngắn nhìn nghiêng.|雞 難 雖|0
雨||yǔ|ㄩˇ|Vũ|mưa|🌧️|Mây trên trời và hạt mưa rơi xuống. Chữ có 雨 thường là hiện tượng thời tiết.|雪 電 雲|1
青||qīng|ㄑㄧㄥ|Thanh|màu xanh|🟩|Cây non (生) mọc lên màu xanh.|靜 晴 請|0
非||fēi|ㄈㄟ|Phi|không phải; trái|❎|Hai cánh chim xòe ra quay lưng vào nhau: trái ngược.|靠 悲|0
面||miàn|ㄇㄧㄢˋ|Diện|mặt|😐|Khuôn mặt có con mắt ở giữa.|靦 麵|0
革||gé|ㄍㄜˊ|Cách|da thuộc; đổi mới|👢|Tấm da thú căng ra phơi khô. Chữ có 革 thường là đồ da.|鞋 靴|0
韋||wéi|ㄨㄟˊ|Vi|da đã thuộc|🎗️|Những bước chân đi vòng quanh một khu vực.|韓 偉|0
韭||jiǔ|ㄐㄧㄡˇ|Cửu|rau hẹ|🥬|Những cây hẹ mọc thành hàng trên mặt đất.|韭菜|0
音||yīn|ㄧㄣ|Âm|âm thanh|🎵|Chữ 言 (lời nói) có thêm nét trong miệng: âm thanh phát ra.|響 韻 意|0
頁||yè|ㄧㄝˋ|Hiệt|đầu; trang|📄|Hình cái đầu người. Chữ có 頁 thường liên quan đến đầu, mặt. Ngày nay còn nghĩa “trang”.|題 顏 頭|1
風||fēng|ㄈㄥ|Phong|gió|🌬️|Gió thổi làm cánh buồm căng, có con sâu (虫) bay theo gió.|颱 颳|0
飛||fēi|ㄈㄟ|Phi|bay|✈️|Con chim dang cánh bay lên.|飛機|0
食|飠|shí|ㄕˊ|Thực|ăn|🍲|Bát cơm có nắp đậy. Bên trái viết thành 飠, chữ thường liên quan đến ăn uống.|飯 餓 館|1
首||shǒu|ㄕㄡˇ|Thủ|đầu|👤|Cái đầu có tóc ở trên. Nghĩa rộng: đứng đầu.|道 馗|0
香||xiāng|ㄒㄧㄤ|Hương|thơm|🌸|Lúa (禾) và miệng nếm ngon (日 là chữ 甘 biến đổi): mùi thơm.|馨|0
馬||mǎ|ㄇㄚˇ|Mã|ngựa|🐎|Con ngựa nhìn nghiêng, có bờm và bốn chân (灬).|騎 驗 媽|0
骨||gǔ|ㄍㄨˇ|Cốt|xương|🦴|Khớp xương và thịt (月) bám quanh.|體 髒|0
高||gāo|ㄍㄠ|Cao|cao|🗼|Tòa lầu cao nhiều tầng.|高興|0
髟||biāo|ㄅㄧㄠ|Tiêu|tóc dài|💇‍♀️|Tóc dài (長) với những sợi lông rủ xuống (彡).|髮 鬍|0
鬥||dòu|ㄉㄡˋ|Đấu|đánh nhau|🤼|Hai người đứng đối mặt túm tóc nhau đánh.|鬧|0
鬯||chàng|ㄔㄤˋ|Sưởng|rượu cúng|🍷|Bình đựng rượu nếp thơm dùng để cúng tế.|鬱|0
鬲||lì|ㄌㄧˋ|Cách|nồi ba chân|🫕|Cái nồi nấu có ba chân rỗng.|融|0
鬼||guǐ|ㄍㄨㄟˇ|Quỷ|ma quỷ|👻|Người có cái đầu to dị dạng.|魂 魔|0
魚||yú|ㄩˊ|Ngư|cá|🐟|Con cá có đầu, vảy và đuôi (灬).|鮮 鯨|0
鳥||niǎo|ㄋㄧㄠˇ|Điểu|chim|🕊️|Con chim đuôi dài nhìn nghiêng. Khác 隹 là chim đuôi ngắn.|鴨 鳴|0
鹵||lǔ|ㄌㄨˇ|Lỗ|đất mặn|🧂|Cái túi đựng muối mỏ có hạt muối bên trong.|鹹 鹽|0
鹿||lù|ㄌㄨˋ|Lộc|hươu|🦌|Con hươu có sừng nhánh và bốn chân.|麗 麋|0
麥||mài|ㄇㄞˋ|Mạch|lúa mì|🍞|Cây lúa mì với rễ (夂). Chữ 麵 (mì) có bộ này.|麵|0
麻||má|ㄇㄚˊ|Ma|cây gai|🪢|Sợi gai phơi trong nhà (广). Ngày nay còn nghĩa “tê”.|麼|0
黃||huáng|ㄏㄨㄤˊ|Hoàng|màu vàng|🟨|Viên ngọc đeo ở thắt lưng. Mượn chỉ màu vàng.|黃色|0
黍||shǔ|ㄕㄨˇ|Thử|lúa nếp|🌽|Cây lúa (禾) và nước (水): loại lúa dẻo, nấu rượu.|黏|0
黑||hēi|ㄏㄟ|Hắc|màu đen|⚫|Ống khói bị lửa (灬) hun đen.|點 默|0
黹||zhǐ|ㄓˇ|Chỉ|may vá, thêu|🪡|Đường kim mũi chỉ thêu trên vải.|黻|0
黽||mǐn|ㄇㄧㄣˇ|Mãnh|con ếch|🐸|Con ếch có bụng to và bốn chân.|蠅|0
鼎||dǐng|ㄉㄧㄥˇ|Đỉnh|cái vạc|⚱️|Cái vạc ba chân, hai quai.|鼐|0
鼓||gǔ|ㄍㄨˇ|Cổ|cái trống|🥁|Tay cầm dùi (支) đánh vào cái trống đặt trên giá.|打鼓|0
鼠||shǔ|ㄕㄨˇ|Thử|chuột|🐭|Con chuột có răng nhọn, bốn chân và đuôi dài.|老鼠|0
鼻||bí|ㄅㄧˊ|Tỵ|mũi|👃|Cái mũi (自) thêm chữ 畀 chỉ âm đọc.|鼻子|0
齊||qí|ㄑㄧˊ|Tề|đều nhau|🟰|Những bông lúa trổ cao bằng nhau.|齋|0
齒||chǐ|ㄔˇ|Xỉ|răng|😁|Hàm răng trong miệng, có chữ 止 chỉ âm đọc.|齡|0
龍||lóng|ㄌㄨㄥˊ|Long|rồng|🐉|Con rồng có đầu, sừng và thân dài uốn lượn.|恐龍|0
龜||guī|ㄍㄨㄟ|Quy|rùa|🐢|Con rùa nhìn nghiêng, có mai, đầu và chân.|烏龜|0
龠||yuè|ㄩㄝˋ|Dược|ống sáo|🪈|Nhiều ống sáo tre ghép lại, có lỗ thổi.|龢|0
`;
