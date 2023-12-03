import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function PeopleDetails() {
    let baseImgUrl='https://image.tmdb.org/t/p/original/'
    let[searchParam,setUseSearch]=useSearchParams();
    let[details,setDetails]=useState({})
    let curentId=searchParam.get('id')
    
  
   async function goDetails(){
      let {data}=await axios.get(`https://api.themoviedb.org/3/person/${curentId}?api_key=c636ed7787cc302d96bf88ccf334e0d8`)
      setDetails(data)
      console.log(data)
    }
    
    useEffect(()=>{
      goDetails();
    },[])
  return (
    <div className="row">
        <div className="col-md-4 border 1px solid #fff p-0 ">
          <img className='w-100 h-100' src={baseImgUrl+details.profile_path}></img>
        </div>
        <div className="col-md-8 text-center">
        <h3 className='m-5'>{details.name}</h3>
        <p className=' ms-2  '>{details.biography}</p>

        </div>

    </div>
  )
}
