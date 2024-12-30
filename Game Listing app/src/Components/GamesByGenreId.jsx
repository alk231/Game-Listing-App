import React, { useEffect } from 'react';

function GamesByGenreId({ gameGenreList, genreName }) {
  useEffect(() => {
    console.log(gameGenreList);
  }, [gameGenreList]);

  return (
    <div className="mt-20">
      <h1 className="text-4xl mb-8 font-bold dark:text-white">{genreName} Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameGenreList.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 p-4 rounded-xl transition-transform duration-300 hover:scale-110 cursor-pointer"
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="h-[270px] w-full rounded-xl object-cover"
            />
            <div className="flex gap-2 items-center mb-2">
              <h2 className="text-white font-semibold text-2xl">{item.name}</h2>
              {item.metacritic && (
                <span className="bg-green-200 text-sm p-1 text-green-600 mt-3">
                  {item.metacritic}
                </span>
              )}
            </div>
            <div className="flex gap-2 items-center text-gray-500">
              <h2>⭐{item.rating}</h2>
              <img src="comment.png" alt="Comments" className="h-5 w-5" /> {item.reviews_count}
              <img src="fire.png" alt="Suggestions" className="h-5 w-5" /> {item.suggestions_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenreId;
