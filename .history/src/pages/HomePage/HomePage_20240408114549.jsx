import React, { useRef } from 'react'

export default function HomePage() {

  const audioRef = useRef();

  const onPlay = ()=> {
    audioRef.current
  }

  return (
    <div>
      <audio src="dragon.mp3" ref={audioRef}></audio>

      <button onClick={onPlay}>Play</button>
    </div>
  )
}
