import mpegts from "mpegts.js"
import React, { useRef, useEffect } from "react";

function App() {
  const ref = useRef(null);

  useEffect(() => {
    if (mpegts.getFeatureList().mseLivePlayback) {
      var videoElement = ref.current;
      var player = mpegts.createPlayer({
        type: 'flv',  // could also be mpegts, m2ts, flv
        isLive: true,
        url: 'http://127.0.0.1:7001/live/rfBd56ti2SMtYvSgD5xAV0YU99zampta7Z7S575KLkIZ9PYk.flv'
      });
      player.attachMediaElement(videoElement);
      player.load();
      player.play();
    }
  }, []);

  return (
    <dir>
      <video id="videoElement" controls autoplay ref={ref} >
        Your browser is too old which doesn't support HTML5 video.
      </video>
    </dir>
  );
}

export default App;
