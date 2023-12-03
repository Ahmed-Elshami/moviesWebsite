import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MediaContext } from '../MediaContext/MediaContext'
import style from './Tv.module.css'



export default function Tvshows() {
  let baseImgUrl='https://image.tmdb.org/t/p/original/'

  let {trendingTvShows}=useContext(MediaContext)

  let navigateTv=useNavigate();
  function goToTvDetails(id){
    navigateTv({
      pathname:'/tvdetails',
      search:`?id=${id}`
    }) 
  }

  return (
    <div className="row">
    <div className="col-md-4 d-flex align-items-center">
      <div className='w-100'>
      <div className={`w-25 ${style.brdr} mb-3`}></div>
      <h2>Trending</h2>
      <h2>Tv shows</h2>
      <h2>To watch now</h2>
      <p className='secondColor mb-3'>most watched tv shows by day</p>
      <div className={style.brdr}></div>
      </div>
    </div>
    
    {trendingTvShows.map((tv,index)=> 
      <div onClick={()=>goToTvDetails(tv.id)} key={index} className="col-md-2 my-3">
        <div>
          <div className={`receipe ${style.receipe}`}  >
            <img className='w-100' src={baseImgUrl+tv.poster_path}></img>
            <div className={`slider ${style.slider}`}></div>
          </div>
          <h5 className='text-center m-0'>{tv.name}</h5>
        </div>

      </div>
    )}
  </div>
  )
}
