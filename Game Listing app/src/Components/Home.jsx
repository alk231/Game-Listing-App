import React, { useEffect, useState } from 'react';
import GenreList from './GenreList';
import GlobalApi from '../Services/GlobalApi';
import Banner from './Banner';
import TrendingGames from './TrendingGames';
import GamesByGenreId from './GamesByGenreId';

function Home() {
  const [allGameList, setAllGameList] = useState([]);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [gameListByGenreName,setGameListByGenreName]=useState("Action");

  useEffect(() => {
    getAllGames();
    getGameListByGenreId(4); // Default genre ID
  }, []);

  const getAllGames = async () => {
    try {
      const resp = await GlobalApi.getAllGames();
      console.log(resp.data.results);
      setAllGameList(resp.data.results);
    } catch (error) {
      console.error("Error fetching all games:", error);
    }
  };

  const getGameListByGenreId = async (id) => {
    try {
      console.log("GenreId",id)
      const resp = await GlobalApi.getGameListByGenreId(id);
      console.log(resp.data.results);
      setGameListByGenre(resp.data.results);
    } catch (error) {
      console.error("Error fetching games by genre ID:", error);
    }
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-7">
      <div className="hidden md:block">
        <GenreList setGenreId={(genreId) => getGameListByGenreId(genreId)}
                   setGenreName={(genreName)=> setGameListByGenreName(genreName)} />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenreId gameGenreList={gameListByGenre} genreName={gameListByGenreName}/>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
