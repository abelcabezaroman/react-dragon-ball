import React, { useRef } from 'react'

export default function HomePage() {

  const audioRef = useRef();

  const onPlay = ()=> {
    audioRef.current.play();
  }

  const onPause = ()=> {
    audioRef.current.pause();
  }

  return (
    <div>
      <audio src="dragon.mp3" ref={audioRef}></audio>

      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>

      <button onMouseEnter={onPlay} onMouseLeave={onPause}>Mouseame por encima</button>
    </div>
  )
}
