import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let MediaContext=createContext([]);

export function MediaContextProvider(props){
    let[trendingMovies,setTrendingMovies]=useState([]);
    let[trendingTvShows,setTrendingTvShows]=useState([]);
    let[trendingPeople,setTrendingPeople]=useState([])



 async function getTrendingItem(mediaType,callback){
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
    callback(data.results)
  }
  useEffect(()=>{
    getTrendingItem('movie',setTrendingMovies);
    getTrendingItem('tv',setTrendingTvShows);
    getTrendingItem('person',setTrendingPeople);
    
  },[]) 
  return <MediaContext.Provider value={{trendingMovies,trendingTvShows,trendingPeople}}>

            {props.children}

        </MediaContext.Provider>
}