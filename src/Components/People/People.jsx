import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MediaContext } from '../MediaContext/MediaContext'
import style from './People.module.css'



export default function People() {
  let baseImgUrl='https://image.tmdb.org/t/p/original/'

  let {trendingPeople}=useContext(MediaContext)

  let navigatePeople=useNavigate();
  function goToPeopleDetails(id){
    navigatePeople({
      pathname:'/peopledetails',
      search:`?id=${id}`
    }) 
  }
  return (
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
  )
}
