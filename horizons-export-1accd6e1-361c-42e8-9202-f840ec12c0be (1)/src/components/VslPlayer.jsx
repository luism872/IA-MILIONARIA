
import React, { useEffect } from 'react';

const VslPlayer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-black rounded-xl overflow-hidden shadow-2xl border-2 border-gray-800">
      <div id="ifr_6900dffba43343dbf8a48c60_wrapper" style={{ margin: '0 auto', width: '100%' }}>
        <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id="ifr_6900dffba43343dbf8a48c60_aspect">
          <iframe
            frameBorder="0"
            allowFullScreen
            src="about:blank"
            id="ifr_6900dffba43343dbf8a48c60"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            referrerPolicy="origin"
            onLoad={(e) => {
              e.target.onload = null;
              e.target.src = 'https://scripts.converteai.net/dbbaa54a-d953-4f00-ad45-877f15818275/players/6900dffba43343dbf8a48c60/v4/embed.html' + (window.location.search || '?') + '&vl=' + encodeURIComponent(window.location.href);
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VslPlayer;
