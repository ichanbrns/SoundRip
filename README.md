# SoundRip 🎵

SoundRip is a free, browser-based MP3 downloader. Paste any URL, choose your audio quality, and download your file in seconds — no account needed.

## Features

- Paste a URL and convert to MP3 instantly
- Choose audio quality (128 / 192 / 320 kbps)
- Embeds cover art and metadata automatically
- Clean, mobile-friendly interface

## Tech Stack

- **Frontend** — HTML, CSS, JavaScript
- **Backend** — Node.js, Express
- **Audio** — yt-dlp, FFmpeg

## Getting Started

### Prerequisites
- Node.js v18+
- Python 3.8+
- yt-dlp (`pip install yt-dlp`)
- FFmpeg (`brew install ffmpeg` or `apt install ffmpeg`)

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/soundrip.git
cd soundrip/backend
npm install
node server.js
```

Then open `frontend/index.html` in your browser.

## Roadmap

- [ ] Playlist support
- [ ] Download queue
- [ ] MP4 video downloads
- [ ] Dark mode
- [ ] PWA / mobile install
## License

MIT
