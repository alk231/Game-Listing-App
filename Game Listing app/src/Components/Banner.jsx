import React, { useEffect } from 'react'

function Banner({gameBanner}) {
  useEffect(()=>{
    console.log(gameBanner)
  })
  return (
    <div class="relative">
      <div class="absolute bottom-0 p-5 bg-gradient-to-t from-black to-transparent w-full flex flex-col gap-1">
      <h2 class="font-bold text-white text-lg">{gameBanner.name}</h2>
      <button class="bg-blue-800 w-fit p-2 rounded-xl font-semibold text-white">Get Now</button>
      </div>
      <img src={gameBanner.background_image} alt="" class="md:h-[320px] object-cover rounded-xl w-full"></img>
    </div>
  )
}

export default Banner