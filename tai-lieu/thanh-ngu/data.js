// Kho thành ngữ, tục ngữ & 文言文. Mỗi dòng một câu, các cột ngăn bằng dấu |:
// nhóm | chữ Hán | pinyin | cột phụ 1 | nghĩa | cột phụ 2 | cột phụ 3
// Tên nhóm và tên các cột phụ của từng nhóm nằm ở NHOM (bên dưới).
// Thêm câu: chép một dòng cùng nhóm rồi sửa, giữ đủ 7 cột (cột trống thì để trống giữa hai dấu |), không dùng dấu | trong nội dung.
// Pinyin ghi theo cách đọc chuẩn Đài Loan; chữ 一 và 不 ghi thanh gốc (yī, bù).

window.TL_NHOM = [
  // mã, phần, tên nhóm, tên cột phụ 1, tên cột phụ 2, tên cột phụ 3, ghi chú dưới nhóm
  ["A", "A", "Cụm 4 chữ thường gặp", "", "Ví dụ", "Cấp", "Mẹo: nhiều cụm có dạng AABB (多多少少、家家戶戶、吞吞吐吐) hoặc 各X各Y / 或X或Y (各式各樣、各行各業、或多或少) — học theo khuôn sẽ nhớ nhanh hơn."],
  ["B1", "B", "Thành ngữ: Chúc tụng", "Hán Việt", "Ví dụ", "", ""],
  ["B2", "B", "Thành ngữ: Cảm xúc, trạng thái", "Hán Việt", "Ví dụ", "", ""],
  ["B3", "B", "Thành ngữ: Mô tả sự vật, số lượng", "Hán Việt", "Ví dụ", "", ""],
  ["B4", "B", "Thành ngữ: Học tập, công việc, xã hội", "Hán Việt", "Ví dụ", "", ""],
  ["B5", "B", "Thành ngữ có điển cố, ngụ ngôn", "Hán Việt", "", "Tiếng Việt tương đương", ""],
  ["C1", "C", "Tục ngữ 俗語 / 諺語", "", "", "Tiếng Việt tương đương", ""],
  ["C2", "C", "Quán dụng ngữ 慣用語", "Nghĩa đen", "", "", ""],
  ["C3", "C", "歇後語 (vế sau mới là nghĩa)", "", "", "", ""],
  ["D", "D", "Câu 文言文 và danh ngôn", "", "Hư từ cần chú ý", "Xuất xứ", "Hư từ cuối câu 乎、矣、焉 và 也 (khẳng định) chỉ cần nhận biết khi đọc."],
  ["E1", "E", "Hư từ 文言 / 書面語", "= Bạch thoại", "Ví dụ", "Cấp", ""],
  ["E2", "E", "Cấu trúc câu 書面語", "", "Ví dụ", "", ""]
];

window.TL_PHAN = {
  A: "Cụm 4 chữ",
  B: "Thành ngữ 成語",
  C: "Tục ngữ, quán dụng ngữ",
  D: "Câu 文言文",
  E: "Hư từ 文言"
};

window.TL_RAW = `
A|吃喝玩樂|chī hē wán lè||ăn chơi hưởng lạc|他每天只知道吃喝玩樂。|進階
A|多多少少|duō duo shǎo shǎo||ít nhiều|我多多少少懂一點台語。|進階
A|各式各樣|gè shì gè yàng||đủ kiểu đủ loại|夜市有各式各樣的小吃。|進階
A|話說回來|huà shuō huí lái||nói đi cũng phải nói lại|話說回來，他也是為了你好。|進階
A|無論如何|wú lùn rú hé||dù thế nào đi nữa|無論如何你都要來。|進階
A|一般來說|yī bān lái shuō||nói chung|一般來說，台灣夏天很熱。|進階
A|總而言之|zǒng ér yán zhī||tóm lại|總而言之，這個計畫不行。|進階
A|各行各業|gè háng gè yè||mọi ngành nghề|各行各業都需要人才。|高階
A|或多或少|huò duō huò shǎo||ít nhiều|每個人或多或少都有壓力。|高階
A|絕大部分|jué dà bù fèn||tuyệt đại bộ phận|絕大部分的學生都通過了。|高階
A|無可奈何|wú kě nài hé||đành chịu, bất lực|他無可奈何地笑了笑。|高階
A|相親相愛|xiāng qīn xiāng ài||thương yêu nhau|他們一家人相親相愛。|高階
A|一般而言|yī bān ér yán||nói chung (văn viết)|一般而言，這種病不危險。|高階
A|一天到晚|yī tiān dào wǎn||từ sáng đến tối, suốt ngày|他一天到晚都在打電動。|高階
A|不知不覺|bù zhī bù jué||bất giác, lúc nào không hay|不知不覺就天亮了。|流利
A|誠心誠意|chéng xīn chéng yì||thành tâm thành ý|我誠心誠意地向你道歉。|流利
A|除此之外|chú cǐ zhī wài||ngoài ra|除此之外，還要繳報名費。|流利
A|轟轟烈烈|hōng hōng liè liè||rầm rộ, oanh liệt|他們談了一場轟轟烈烈的戀愛。|流利
A|家家戶戶|jiā jiā hù hù||nhà nhà|過年時家家戶戶都貼春聯。|流利
A|絕大多數|jué dà duō shù||tuyệt đại đa số|絕大多數人贊成這個方案。|流利
A|理所當然|lǐ suǒ dāng rán||lẽ đương nhiên|他認為父母幫他是理所當然的。|流利
A|吞吞吐吐|tūn tūn tǔ tǔ||ấp úng, nói không rõ|他吞吞吐吐地不肯說實話。|流利
A|形形色色|xíng xíng sè sè||muôn hình muôn vẻ|都市裡有形形色色的人。|流利
A|戰戰兢兢|zhàn zhàn jīng jīng||nơm nớp lo sợ, thận trọng|新員工戰戰兢兢地工作。|流利
B1|一路平安|yī lù píng ān|nhất lộ bình an|thượng lộ bình an|祝你一路平安！|
B1|一帆風順|yī fán fēng shùn|nhất phàm phong thuận|thuận buồm xuôi gió|祝你工作一帆風順。|
B1|萬事如意|wàn shì rú yì|vạn sự như ý|vạn sự như ý|新年快樂，萬事如意！|
B1|心想事成|xīn xiǎng shì chéng|tâm tưởng sự thành|cầu được ước thấy|祝大家心想事成。|
B1|馬到成功|mǎ dào chéng gōng|mã đáo thành công|mã đáo thành công|祝你考試馬到成功。|
B1|恭喜發財|gōng xǐ fā cái|cung hỷ phát tài|chúc phát tài (Tết)|恭喜發財，紅包拿來！|
B1|年年有餘|nián nián yǒu yú|niên niên hữu dư|năm nào cũng dư dả|年夕飯要吃魚，表示年年有餘。|
B1|身體健康|shēn tǐ jiàn kāng|thân thể kiện khang|mạnh khỏe|祝您身體健康。|
B2|興高采烈|xìng gāo cǎi liè|hưng cao thái liệt|hớn hở, phấn khởi|孩子們興高采烈地去郊遊。|
B2|歡天喜地|huān tiān xǐ dì|hoan thiên hỷ địa|vui mừng hớn hở|他歡天喜地地回家了。|
B2|七上八下|qī shàng bā xià|thất thượng bát hạ|thấp thỏm không yên|等成績時，我心裡七上八下。|
B2|手忙腳亂|shǒu máng jiǎo luàn|thủ mang cước loạn|luống cuống tay chân|客人突然來了，她手忙腳亂。|
B2|迫不及待|pò bù jí dài|bách bất cập đãi|nóng lòng không đợi được|他迫不及待地打開禮物。|
B2|莫名其妙|mò míng qí miào|mạc danh kỳ diệu|chẳng hiểu ra sao|他莫名其妙地生氣了。|
B2|恍然大悟|huǎng rán dà wù|hoảng nhiên đại ngộ|chợt hiểu ra|聽了老師的解釋，我恍然大悟。|
B2|三心二意|sān xīn èr yì|tam tâm nhị ý|không chuyên tâm, lưỡng lự|做事不能三心二意。|
B2|一心一意|yī xīn yī yì|nhất tâm nhất ý|một lòng một dạ|她一心一意想到台灣留學。|
B2|自由自在|zì yóu zì zài|tự do tự tại|tự do thoải mái|放假時我想自由自在地旅行。|
B2|自言自語|zì yán zì yǔ|tự ngôn tự ngữ|lẩm bẩm một mình|他一邊走一邊自言自語。|
B2|一見鍾情|yī jiàn zhōng qíng|nhất kiến chung tình|yêu từ cái nhìn đầu tiên|他們是一見鍾情。|
B3|人山人海|rén shān rén hǎi|nhân sơn nhân hải|biển người|跨年晚會人山人海。|
B3|五顏六色|wǔ yán liù sè|ngũ nhan lục sắc|sặc sỡ nhiều màu|花園裡開滿了五顏六色的花。|
B3|亂七八糟|luàn qī bā zāo|loạn thất bát tao|lộn xộn, bừa bãi|他的房間亂七八糟。|
B3|馬馬虎虎|mǎ mǎ hǔ hǔ|mã mã hổ hổ|tàm tạm; qua loa|我的中文馬馬虎虎。|
B3|一模一樣|yī mú yī yàng|nhất mô nhất dạng|giống hệt|雙胞胎長得一模一樣。|
B3|大同小異|dà tóng xiǎo yì|đại đồng tiểu dị|na ná, khác chút ít|這兩個方法大同小異。|
B3|與眾不同|yǔ zhòng bù tóng|dữ chúng bất đồng|khác người, độc đáo|她的穿著與眾不同。|
B3|獨一無二|dú yī wú èr|độc nhất vô nhị|độc nhất vô nhị|每個人都是獨一無二的。|
B3|一目了然|yī mù liǎo rán|nhất mục liễu nhiên|nhìn là hiểu ngay|這張圖表一目了然。|
B3|物美價廉|wù měi jià lián|vật mỹ giá liêm|hàng tốt giá rẻ|這家店的東西物美價廉。|
B3|一乾二淨|yī gān èr jìng|nhất can nhị tịnh|sạch trơn|他把飯吃得一乾二淨。|
B3|津津有味|jīn jīn yǒu wèi|tân tân hữu vị|say sưa, ngon lành|孩子們聽得津津有味。|
B3|異口同聲|yì kǒu tóng shēng|dị khẩu đồng thanh|đồng thanh|大家異口同聲地說：「好！」|
B3|不約而同|bù yuē ér tóng|bất ước nhi đồng|không hẹn mà cùng (làm)|大家不約而同地笑了。|
B4|一舉兩得|yī jǔ liǎng dé|nhất cử lưỡng đắc|một công đôi việc|騎腳踏車上班既運動又省錢，一舉兩得。|
B4|半途而廢|bàn tú ér fèi|bán đồ nhi phế|bỏ dở giữa chừng|學語言不能半途而廢。|
B4|千方百計|qiān fāng bǎi jì|thiên phương bách kế|trăm phương nghìn kế|他千方百計地想賺錢。|
B4|全力以赴|quán lì yǐ fù|toàn lực dĩ phó|dốc toàn lực|我們會全力以赴。|
B4|一言為定|yī yán wéi dìng|nhất ngôn vi định|nói là giữ lời, chốt vậy|明天七點見，一言為定！|
B4|實事求是|shí shì qiú shì|thực sự cầu thị|tôn trọng sự thật|做研究要實事求是。|
B4|學以致用|xué yǐ zhì yòng|học dĩ trí dụng|học để áp dụng|學以致用才有意義。|
B4|熟能生巧|shú néng shēng qiǎo|thục năng sinh xảo|quen tay hóa khéo|寫漢字沒有捷徑，熟能生巧。|
B4|溫故知新|wēn gù zhī xīn|ôn cố tri tân|ôn cũ biết mới|複習可以溫故知新。|
B4|供不應求|gōng bù yìng qiú|cung bất ứng cầu|cung không đủ cầu|這款手機供不應求。|
B4|日新月異|rì xīn yuè yì|nhật tân nguyệt dị|thay đổi từng ngày|科技發展日新月異。|
B4|層出不窮|céng chū bù qióng|tặng xuất bất cùng|liên tục xuất hiện|詐騙手法層出不窮。|
B4|舉世聞名|jǔ shì wén míng|cử thế văn danh|nổi tiếng thế giới|台北101舉世聞名。|
B4|名不虛傳|míng bù xū chuán|danh bất hư truyền|danh bất hư truyền|這家牛肉麵果然名不虛傳。|
B4|有目共睹|yǒu mù gòng dǔ|hữu mục cộng đổ|ai cũng thấy rõ|他的進步是有目共睹的。|
B4|不可思議|bù kě sī yì|bất khả tư nghị|khó tin, kỳ lạ|這件事真不可思議。|
B4|無微不至|wú wéi bù zhì|vô vi bất chí|chu đáo từng li|媽媽對我的照顧無微不至。|
B4|小題大作|xiǎo tí dà zuò|tiểu đề đại tác|chuyện bé xé ra to|這點小事不必小題大作。|
B4|入鄉隨俗|rù xiāng suí sú|nhập hương tùy tục|nhập gia tùy tục|到了台灣就要入鄉隨俗。|
B4|自相矛盾|zì xiāng máo dùn|tự tương mâu thuẫn|tự mâu thuẫn|他的說法自相矛盾。|
B4|雪中送炭|xuě zhōng sòng tàn|tuyết trung tống thán|giúp người lúc hoạn nạn|朋友的幫助就像雪中送炭。|
B4|錦上添花|jǐn shàng tiān huā|cẩm thượng thiêm hoa|thêu hoa trên gấm|這份獎金是錦上添花。|
B4|青出於藍|qīng chū yú lán|thanh xuất ư lam|trò giỏi hơn thầy|學生青出於藍，老師很高興。|
B5|守株待兔|shǒu zhū dài tù|thủ chu đãi thố|ôm gốc cây đợi thỏ, ăn may không chịu làm||ôm cây đợi thỏ
B5|亡羊補牢|wáng yáng bǔ láo|vong dương bổ lao|mất cừu mới sửa chuồng — vẫn chưa muộn||mất bò mới lo làm chuồng
B5|井底之蛙|jǐng dǐ zhī wā|tỉnh để chi oa|người hiểu biết hẹp||ếch ngồi đáy giếng
B5|對牛彈琴|duì niú tán qín|đối ngưu đàn cầm|nói với người không hiểu||nước đổ đầu vịt
B5|畫蛇添足|huà shé tiān zú|họa xà thiêm túc|làm thừa thành hỏng||vẽ rắn thêm chân
B5|刻舟求劍|kè zhōu qiú jiàn|khắc chu cầu kiếm|cố chấp, không biết tình hình đã đổi||khắc thuyền tìm gươm
B5|塞翁失馬|sài wēng shī mǎ|tái ông thất mã|họa phúc khôn lường||tái ông mất ngựa
B5|半斤八兩|bàn jīn bā liǎng|bán cân bát lạng|hai bên ngang nhau (thường nghĩa xấu)||kẻ tám lạng người nửa cân
B5|一石二鳥|yī shí èr niǎo|nhất thạch nhị điểu|một việc được hai lợi||một mũi tên trúng hai đích
B5|臥薪嘗膽|wò xīn cháng dǎn|ngọa tân thường đởm|chịu khổ để chờ ngày vùng lên||nằm gai nếm mật
C1|天塌下來，都有人撐著|tiān tā xià lái, dōu yǒu rén chēng zhe||việc lớn đã có người gánh, đừng lo (có trong đề mẫu Band B)||trời sập đã có người cao chống
C1|萬事起頭難|wàn shì qǐ tóu nán||bắt đầu lúc nào cũng khó||vạn sự khởi đầu nan
C1|有志者事竟成|yǒu zhì zhě shì jìng chéng||có ý chí thì sẽ thành||có chí thì nên
C1|失敗為成功之母|shī bài wéi chéng gōng zhī mǔ||thất bại là mẹ thành công||thất bại là mẹ thành công
C1|活到老，學到老|huó dào lǎo, xué dào lǎo||học suốt đời||học, học nữa, học mãi
C1|一寸光陰一寸金|yī cùn guāng yīn yī cùn jīn||thời gian quý như vàng||thời gian là vàng
C1|一日之計在於晨|yī rì zhī jì zài yú chén||việc cả ngày quyết định từ buổi sáng||kế hoạch một ngày nằm ở buổi sáng
C1|百聞不如一見|bǎi wén bù rú yī jiàn||nghe nhiều không bằng tận mắt thấy||trăm nghe không bằng một thấy
C1|一分錢一分貨|yī fēn qián yī fēn huò||giá nào hàng nấy||tiền nào của nấy
C1|三個臭皮匠，勝過一個諸葛亮|sān ge chòu pí jiàng, shèng guò yī ge zhū gě liàng||nhiều người cùng nghĩ hơn một người giỏi||một cây làm chẳng nên non
C1|遠親不如近鄰|yuǎn qīn bù rú jìn lín||hàng xóm gần giúp được nhiều hơn họ hàng xa||bán anh em xa mua láng giềng gần
C1|近水樓台先得月|jìn shuǐ lóu tái xiān dé yuè||ở gần thì được lợi trước||gần quan được ăn lộc
C1|家家有本難念的經|jiā jiā yǒu běn nán niàn de jīng||nhà nào cũng có chuyện khó||nhà nào cũng có chuyện riêng
C1|知人知面不知心|zhī rén zhī miàn bù zhī xīn||biết người không biết lòng||biết người biết mặt không biết lòng
C1|人不可貌相|rén bù kě mào xiàng||đừng đánh giá qua vẻ ngoài||đừng trông mặt mà bắt hình dong
C1|情人眼裡出西施|qíng rén yǎn lǐ chū xī shī||yêu ai thì thấy người đó đẹp||trong mắt người tình hóa Tây Thi
C1|病從口入，禍從口出|bìng cóng kǒu rù, huò cóng kǒu chū||ăn uống và nói năng đều phải cẩn thận||bệnh từ miệng vào, họa từ miệng ra
C1|船到橋頭自然直|chuán dào qiáo tóu zì rán zhí||việc gì rồi cũng có cách giải quyết||đến đâu hay đến đó
C1|臨時抱佛腳|lín shí bào fó jiǎo||nước đến chân mới lo (học dồn trước thi)||nước đến chân mới nhảy
C1|不入虎穴，焉得虎子|bù rù hǔ xuè, yān dé hǔ zǐ||không liều thì không được (焉 = 怎麼, 文言)||không vào hang cọp sao bắt được cọp con
C2|開夜車|kāi yè chē|lái xe đêm|thức khuya học/làm||
C2|炒魷魚|chǎo yóu yú|xào mực|bị đuổi việc||
C2|吃醋|chī cù|ăn giấm|ghen||
C2|拍馬屁|pāi mǎ pì|vỗ mông ngựa|nịnh bợ (có trong 流利級)||
C2|吹牛|chuī niú|thổi bò|khoác lác (có trong 流利級)||
C2|走後門|zǒu hòu mén|đi cửa sau|đi cửa sau, nhờ quan hệ||
C2|碰釘子|pèng dīng zi|đụng đinh|bị từ chối, vấp váp||
C2|放鴿子|fàng gē zi|thả bồ câu|cho leo cây, thất hẹn||
C2|打退堂鼓|dǎ tuì táng gǔ|đánh trống lui triều|bỏ cuộc giữa chừng||
C2|背黑鍋|bēi hēi guō|cõng nồi đen|gánh tội thay||
C2|馬後炮|mǎ hòu pào|pháo bắn sau ngựa|nói khi đã muộn||
C2|夜貓子|yè māo zi|mèo đêm|cú đêm, người hay thức khuya||
C3|丈二金剛 — 摸不著頭腦|zhàng èr jīn gāng — mō bù zháo tóu nǎo||chẳng hiểu đầu đuôi ra sao||
C3|啞巴吃黃連 — 有苦說不出|yǎ ba chī huáng lián — yǒu kǔ shuō bù chū||có nỗi khổ không nói ra được||
C3|竹籃打水 — 一場空|zhú lán dǎ shuǐ — yī chǎng kōng||công cốc, công dã tràng||
C3|老鼠過街 — 人人喊打|lǎo shǔ guò jiē — rén rén hǎn dǎ||ai cũng ghét||
C3|外甥打燈籠 — 照舅（舊）|wài shēng dǎ dēng lóng — zhào jiù||vẫn như cũ (chơi chữ 舅/舊, cùng đọc jiù)||
D|學而時習之，不亦說乎|xué ér shí xí zhī, bù yì yuè hū||học mà thường xuyên ôn luyện, chẳng vui sao|而、之、亦、乎; 說 = 悅 (đọc yuè)|《論語》
D|有朋自遠方來，不亦樂乎|yǒu péng zì yuǎn fāng lái, bù yì lè hū||có bạn từ phương xa đến, chẳng vui sao|自 = 從|《論語》
D|三人行，必有我師焉|sān rén xíng, bì yǒu wǒ shī yān||ba người cùng đi, ắt có người là thầy ta|焉 = 於此|《論語》
D|己所不欲，勿施於人|jǐ suǒ bù yù, wù shī yú rén||điều mình không muốn, chớ làm cho người|所、勿、於|《論語》
D|知之為知之，不知為不知，是知也|zhī zhī wéi zhī zhī, bù zhī wéi bù zhī, shì zhī yě||biết thì nói biết, không biết thì nói không biết, thế mới là biết|為 = 是; 也 (cuối câu khẳng định)|《論語》
D|溫故而知新，可以為師矣|wēn gù ér zhī xīn, kě yǐ wéi shī yǐ||ôn cũ biết mới thì có thể làm thầy|而、矣 (= 了)|《論語》
D|學而不思則罔，思而不學則殆|xué ér bù sī zé wǎng, sī ér bù xué zé dài||học mà không nghĩ thì mù mờ, nghĩ mà không học thì nguy|則 = 就|《論語》
D|千里之行，始於足下|qiān lǐ zhī xíng, shǐ yú zú xià||đường nghìn dặm bắt đầu từ một bước chân|之、於|《老子》
D|少壯不努力，老大徒傷悲|shào zhuàng bù nǔ lì, lǎo dà tú shāng bēi||trẻ không cố gắng, già chỉ buồn suông|徒 = 白白地|漢樂府《長歌行》
D|誰知盤中飧，粒粒皆辛苦|shéi zhī pán zhōng sūn, lì lì jiē xīn kǔ||ai biết cơm trong đĩa, mỗi hạt đều vất vả|皆 = 都|李紳《憫農》
D|海內存知己，天涯若比鄰|hǎi nèi cún zhī jǐ, tiān yá ruò bǐ lín||có tri kỷ thì chân trời cũng như hàng xóm|若 = 像|王勃
D|每逢佳節倍思親|měi féng jiā jié bèi sī qīn||mỗi dịp lễ lại càng nhớ người thân|逢 = 遇到|王維
D|但願人長久，千里共嬋娟|dàn yuàn rén cháng jiǔ, qiān lǐ gòng chán juān||chỉ mong người mãi bên nhau, nghìn dặm cùng ngắm trăng (Trung thu)|嬋娟 = trăng|蘇軾
D|讀萬卷書，行萬里路|dú wàn juàn shū, xíng wàn lǐ lù||đọc vạn quyển sách, đi vạn dặm đường||danh ngôn
D|塞翁失馬，焉知非福|sài wēng shī mǎ, yān zhī fēi fú||tái ông mất ngựa, biết đâu lại là phúc|焉 = 怎麼|《淮南子》 (truyện)
E1|此|cǐ|這|này, đây|此外、從此、因此|進階
E1|而|ér|可是 / 而且|mà, nhưng, và|他很聰明，而且很努力。|進階
E1|以|yǐ|用 / 為了|bằng; để|以活動來學習；以免、以便|進階
E1|所|suǒ||(所 + động từ = cái mà…)|我所知道的事|進階
E1|與|yǔ|和 / 跟|và, với|老師與學生|進階
E1|及|jí|和|và|姓名及地址|進階
E1|無|wú|沒有|không có|無法、無論、無所謂|進階
E1|如此|rú cǐ|這樣|như vậy|既然如此，就算了。|進階
E1|之|zhī|的|của|台灣之美；之前、之後、之間|高階
E1|其|qí|他的 / 那個|của nó, đó|其中、其他、各盡其職|高階
E1|則|zé|就|thì|如有問題，則請聯絡。|高階
E1|者|zhě|…的人|người…|讀者、作者、過路者|高階
E1|未|wèi|沒（有）|chưa|未滿十八歲者|高階
E1|勿|wù|不要|đừng, chớ|請勿吸菸。|高階
E1|便|biàn|就|liền, thì|他一到家便睡了。|高階
E1|該|gāi|那個|đó, này (cái đã nhắc đến)|該公司、該學生|高階
E1|為何|wèi hé|為什麼|tại sao|他為何沒來？|高階
E1|乃|nǎi|就是|là, chính là|教育乃國家之本。|流利
E1|亦|yì|也|cũng|我亦有同感。|流利
E1|皆|jiē|都|đều|人人皆知|流利
E1|均|jūn|都|đều|各組均需繳交報告。|流利
E1|甚|shèn|很|rất|甚好、甚至|流利
E1|於|yú|在 / 從 / 對|ở; từ; đối với|生於台北；由於、關於|流利
E1|若 / 倘若|ruò / tǎng ruò|如果|nếu|若有疑問，請發問。|流利
E1|故|gù|所以|vì vậy|天氣不佳，故活動取消。|流利
E1|即|jí|就是 / 馬上|tức là; ngay|報名即日起開始|流利
E1|尚|shàng|還|còn, vẫn|尚未完成|流利
E1|須|xū|必須|phải|須帶護照。|流利
E1|何|hé|什麼|gì, nào|有何問題；何必、何況|流利
E1|凡 / 凡是|fán / fán shì|只要是|phàm là|凡是學生均可參加。|流利
E1|逾|yú|超過|vượt quá|逾期不候|流利
E1|暨|jì|和|và (rất trang trọng)|校長暨全體教師|流利
E1|予以|yǔ yǐ|給|dành cho, tiến hành|予以獎勵|流利
E1|屆時|jiè shí|到時候|đến lúc đó|屆時請準時出席。|流利
E1|據悉|jù xī|聽說|được biết|據悉，該店將關閉。|流利
E1|特此|tè cǐ||nay đặc biệt (cuối thông báo)|特此通知。|流利
E2|之所以…是因為…|zhī suǒ yǐ … shì yīn wèi …||sở dĩ… là vì…|他之所以成功，是因為他很努力。|
E2|以…為…|yǐ … wéi …||lấy… làm…|以學生為中心|
E2|為…所…|wéi … suǒ …||bị/được…|為世人所知 = được người đời biết đến|
E2|與其…不如…|yǔ qí … bù rú …||thà… còn hơn|與其等車，不如走路。|
E2|既…又/亦…|jì … yòu/yì …||vừa… vừa…||
E2|非…不可|fēi … bù kě||nhất định phải|這件事非你不可。|
`;
