import React, { useEffect } from 'react'

function TrendingGames({gameList}) {
  useEffect(()=>{
    console.log(gameList)
  })
  return (
    <div class="hidden md:block mt-20">
      <h1 class="text-4xl font-bold mb-8 dark:text-white">Trending games</h1>
    <div class="md:grid md:grid-cols-3 lg:grid-cols-4 gap-3">
      {
        gameList.map((game,index)=>index<4 && (
          <div key={gameList.id} class="bg-gray-800 rounded-xl transition-transform hover:scale-110 ease-out cursor-pointer">
            <img src={game.background_image} alt="" class="h-[270px] rounded-t-lg object-cover"></img>
            <h2 class="text-white text-lg font-bold mt-2 p-2">{game.name}</h2>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default TrendingGames