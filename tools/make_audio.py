"""Tạo file âm thanh giọng thật (giọng nữ / giọng nam Đài Loan) cho tất cả câu Nghe.

Chạy trên máy tính có Internet (dùng dịch vụ đọc của Microsoft Edge, miễn phí):
    pip install edge-tts
    python tools/make_audio.py

Kết quả: thư mục audio/ có file <id>.mp3 cho từng câu Nghe và audio/index.js để trang web biết câu nào đã có file.
Chạy lại sau khi thêm/sửa câu: chỉ những câu mới hoặc đã sửa lời mới được tạo lại.
Câu chưa có file vẫn dùng giọng đọc của trình duyệt, nên không bắt buộc phải chạy script này.
"""
import asyncio, hashlib, json, re, sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "audio"
VOICE = {"女": "zh-TW-HsiaoChenNeural", "男": "zh-TW-YunJheNeural", "": "zh-TW-HsiaoChenNeural"}


def load_items():
    items = []
    for f in ["novice", "a", "b", "c"]:
        src = (ROOT / "bank" / f"{f}.js").read_text(encoding="utf-8")
        m = re.search(r"^TOCFL\.add\(([\s\S]*)\);\s*$", src, re.M)
        items += json.loads(m.group(1))
    return [x for x in items if x["s"] == "L"]


def digest(it):
    return hashlib.sha1(json.dumps(it["a"], ensure_ascii=False).encode()).hexdigest()[:12]


async def speak(text, voice, rate):
    out = b""
    async for chunk in edge_tts.Communicate(text, voice, rate=rate).stream():
        if chunk["type"] == "audio":
            out += chunk["data"]
    return out


async def main():
    AUDIO.mkdir(exist_ok=True)
    hashes_file = AUDIO / "hashes.json"
    hashes = json.loads(hashes_file.read_text()) if hashes_file.exists() else {}
    items, force = load_items(), "--force" in sys.argv
    for i, it in enumerate(items, 1):
        mp3, h = AUDIO / f"{it['id']}.mp3", digest(it)
        if mp3.exists() and hashes.get(it["id"]) == h and not force:
            continue
        rate = "-10%" if it["lv"] <= 4 else "+0%"   # cấp thấp đọc chậm hơn một chút
        data = b"".join([await speak(t, VOICE[sp], rate) for sp, t in it["a"]])
        mp3.write_bytes(data)
        hashes[it["id"]] = h
        print(f"[{i}/{len(items)}] {it['id']}")
    ids = sorted(x["id"] for x in items if (AUDIO / f"{x['id']}.mp3").exists())
    hashes_file.write_text(json.dumps(hashes, indent=1))
    (AUDIO / "index.js").write_text(
        "// Tạo tự động bởi tools/make_audio.py — danh sách câu Nghe đã có file thu âm.\n"
        f"TOCFL.audio=new Set({json.dumps(ids)});\n", encoding="utf-8")
    print(f"Xong: {len(ids)}/{len(items)} câu Nghe có file âm thanh.")


asyncio.run(main())
