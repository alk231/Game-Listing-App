import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({setGenreId,setGenreName}) {
  useEffect(() => {
    getGenreList(); // Call the function to fetch data on component mount
  }, []);
  
  const [genreList,setgenreList]=useState([])
  const [activeIndex,setActiveIndex]=useState(0)
  const getGenreList = async () => {
    try {
      const resp = await GlobalApi.getGenreList(); // Await the promise returned by the function
      console.log(resp.data.results);
      setgenreList(resp.data.results); // Log the response data
    } catch (error) {
      console.error("Error fetching genre list:", error); // Log errors
    }
  };

  return (
  <div class="">
    <h2 class="text-[30px] font-bold dark:text-white">Genre</h2>
    {genreList.map((item,index)=>
      (
        <div key={item.id} class={`flex p-2 gap-2 text-normal font-normal hover:font-bold items-center cursor-pointer hover:bg-gray-300 hover:rounded-xl group ${activeIndex === index?"bg-gray-300 rounded-xl dark:bg-gray-600":null}`} onClick={()=>{setActiveIndex(index)
          setGenreId(item.id)
          setGenreName(item.name)
        }}>
          <img src={item.image_background} alt="" class={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all duration-300 ease-out ${activeIndex === index?"scale-105 font-bold":null}`}></img>
          <h3 class={`dark:text-white group-hover:scale-105 transition-all duration-300 ease-out  ${activeIndex === index?"scale-105 font-bold":null}`}>{item.name}</h3>
        </div>
      )
    )
  }
  </div>
  );
}


export default GenreList;
