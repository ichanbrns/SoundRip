import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AudioLines, Link, X, ArrowDown, Download, Video, FolderDown, Save, Play, Music2 } from 'lucide-react';
import './styles.css';

const waveform = [30, 46, 70, 41, 82, 56, 66, 88, 52, 74, 42, 89, 35, 68, 56, 83, 38, 64, 49, 71, 35, 54, 77, 45, 62, 32, 50, 39, 59, 31, 45, 27];
const formats = [['MP3', '320k'], ['MP3', '256k'], ['MP3', '128k'], ['FLAC', 'Lossless'], ['MP4', 'Video']];

function Waveform() {
  return <div className="waveform">{waveform.map((height, i) => <span key={i} className={i < 14 ? 'played' : ''} style={{ height: `${height}%` }} />)}</div>;
}

function App() {
  const [url, setUrl] = useState('https://youtube.com/watch?v=5NV6Rdv1a3I');
  const [format, setFormat] = useState(0);
  const [notice, setNotice] = useState('');
  const convert = () => { setNotice('Track is ready for export.'); setTimeout(() => setNotice(''), 2600); };
  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#top"><span className="brand-icon"><AudioLines size={17}/></span><span><b>Sound<span>Rip</span></b><small>MP3 DOWNLOADER</small></span></a>
      <nav><a className="active" href="#converter">Converter</a><a href="#queue">Queue <em>2</em></a><a href="#history">History</a></nav>
      <div className="engine"><i /> 320kbps Hi-Fi Engine</div>
    </header>

    <main id="top">
      <section className="hero" id="converter">
        <div className="eyebrow"><AudioLines size={14}/> Lossless YouTube Demuxer</div>
        <h1>Convert YouTube to <span>MP3 &amp;<br/> Lossless Audio</span></h1>
        <p>Fast, clean 320kbps audio extraction with automatic high-res ID3 album metadata.</p>
        <div className="url-box">
          <Link size={19}/><input aria-label="YouTube URL" value={url} onChange={e => setUrl(e.target.value)} />
          {url && <button className="clear" aria-label="Clear URL" onClick={() => setUrl('')}><X size={18}/></button>}
          <button className="convert" onClick={convert}><ArrowDown size={18}/> Convert</button>
        </div>
        <div className="format-row"><span>FORMAT:</span>{formats.map(([kind, rate], i) => <button key={rate} className={format === i ? 'selected' : ''} onClick={() => setFormat(i)}>{kind}<small>{rate}</small></button>)}</div>
        {notice && <div className="toast">{notice}</div>}
      </section>

      <section className="export-card">
        <div className="track-head"><div className="album-art"><Music2 size={33}/><button><Play fill="currentColor" size={20}/></button></div><div className="track-meta"><div className="track-status">Ready for Export <span>•</span> 04:08</div><h2>Get Lucky (feat. Pharrell Williams)</h2><p>Daft Punk · Random Access Memories (2013)</p></div></div>
        <div className="preview"><div className="preview-top"><span><i/> Waveform Preview</span><b>01:24 / 04:08</b></div><Waveform /></div>
        <div className="downloads"><button className="primary"><Download size={15}/> Download MP3 (320K)</button><button className="secondary"><Video size={15}/> Download MP4</button></div>
      </section>

      <section className="features">
        <article><span className="feature-icon"><AudioLines size={20}/></span><h3>320kbps High Fidelity</h3><p>Clean demuxing directly preserves the original dynamic range without generational loss.</p></article>
        <article><span className="feature-icon"><Save size={19}/></span><h3>Instant ID3 Tags</h3><p>Embeds artist, track title, and high-resolution album covers ready for your media player.</p></article>
        <article><span className="feature-icon"><FolderDown size={19}/></span><h3>Batch Queue</h3><p>Convert full playlists or multiple tracks simultaneously with one-click bulk zip export.</p></article>
      </section>

      <section className="queue" id="queue"><div className="queue-title"><h2>Conversions Queue <span>2 active</span></h2><button><FolderDown size={15}/> Download All (.ZIP)</button></div><div className="queue-list">
        <div className="queue-item"><div className="mini-art orange">♪</div><div className="queue-info"><b>The Weeknd - Blinding Lights</b><span>03:45 · <i>MP3 320k</i> · 8.6 MB</span></div><button className="save"><Download size={14}/> Save</button><button className="remove"><X size={15}/></button></div>
        <div className="queue-item"><div className="mini-art blue">♫</div><div className="queue-info processing"><b>Hans Zimmer - Time (Live)</b><div><span className="progress"><i /></span><strong>74%</strong><em>Remuxing...</em></div></div><button className="remove"><X size={15}/></button></div>
      </div></section>
    </main>
    <footer><span>SoundRip Engine <b>•</b> Crafted by ichanbrns</span><div><a href="#terms">Terms &amp; Legal</a><a href="#codecs">Audio Codecs</a><a href="#api">API</a></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
