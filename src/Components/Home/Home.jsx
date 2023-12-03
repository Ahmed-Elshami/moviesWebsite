
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MediaContext } from '../MediaContext/MediaContext'
import style from './Home.module.css'




export default function Home() {
  let baseImgUrl='https://image.tmdb.org/t/p/original/'
  let {trendingMovies}=useContext(MediaContext)
  let {trendingTvShows}=useContext(MediaContext)
  let {trendingPeople}=useContext(MediaContext)
  

  let navigate=useNavigate();
  function goToDetails(id){
    navigate({
      pathname:'/details',
      search:`?id=${id}`
    }) 
  }
  let navigateTv=useNavigate();
  function goToTvDetails(id){
    navigateTv({
      pathname:'/tvdetails',
      search:`?id=${id}`
    }) 
  }
  
  let navigatePeople=useNavigate();
  function goToPeopleDetails(id){
    navigatePeople({
      pathname:'/peopledetails',
      search:`?id=${id}`
    }) 
  }

  
  

  return (
   <>
    <div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div className='w-100'>
        <div className={`w-25 ${style.brdr} mb-3`}></div>
        <h2>Trending</h2>
        <h2>Movies</h2>
        <h2>To watch now</h2>
        <p className='secondColor mb-3'>most watched movies by day</p>
        <div className={style.brdr}></div>
        </div>
      </div>
      
      {trendingMovies.map((movie,index)=> 
        <div onClick={()=>goToDetails(movie.id)} key={index} className="col-md-2 my-3">
          <div>
            <div className={`receipe ${style.receipe}`}  >
              <img className='w-100 ' src={baseImgUrl+movie.poster_path}></img>
              <div className={`slider ${style.slider}`}></div>
            </div>
            <h5 className='text-center m-0'>{movie.title}</h5>
          </div>
        </div>
      )}
    </div>



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


    <div className="row">
      <div className="col-md-4 d-flex align-items-center">
        <div className='w-100'>
        <div className={`w-25 ${style.brdr} mb-3`}></div>
        <h2>Trending</h2>
        <h2>People</h2>
        <h2>To watch now</h2>
        <p className='secondColor mb-3'>most watched people by day</p>
        <div className={style.brdr}></div>
        </div>
      </div>
      
      {trendingPeople.map((person,index)=> 
        <div onClick={()=>goToPeopleDetails(person.id)} key={index} className="col-md-2 my-3">
          <div>
          <div className={`receipe ${style.receipe}`}  >
            <img className='w-100' src={baseImgUrl+person.profile_path}></img>
            <div className={`slider ${style.slider}`}></div>
          </div>
            <h5 className='text-center m-0'>{person.name}</h5>
          </div>

        </div>
      )}
    </div>


   </>
  )
}
