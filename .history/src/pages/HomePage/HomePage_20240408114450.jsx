import React, { useRef } from 'react'

export default function HomePage() {

  const audioRef = useRef();
  
  return (
    <div>
      <audio src="dragon.mp3"></audio>

      <button>Play</button>
    </div>
  )
}
