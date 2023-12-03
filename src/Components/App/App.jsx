import { useEffect, useState } from 'react';
import { Routes,Route, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import About from '../About/About';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import People from '../People/People';
import Register from '../Register/Register';
import Tvshows from '../Tvshows/Tvshows';
import jwtDecode from 'jwt-decode'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { MediaContextProvider } from '../MediaContext/MediaContext';
import Details from '../Deatils/Deatils';
import TvDetails from '../TvDetails/TvDetails';
import PeopleDetails from '../PeopleDetails/PeopleDetails';










function App() {
  // let[loginData,setLoginData]=useState(null)
  // function setUserData(){
  // let token=localStorage.getItem("token")
  // let decode= jwtDecode(token)
  // setLoginData(decode)
  // }
  //  useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     setUserData()
  //   }
  //  },[])

  //  let navigate=useNavigate();
  //   function logOut(){
  //     localStorage.removeItem("token");
  //     setLoginData(null)
  //     navigate('/login')

  //   }
  return (
    <div>
      <Navbar />
      <div className="container">
      <MediaContextProvider>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='home' element={<Home/>} ></Route>
            <Route path='movies' element={<Movies/>} ></Route>
            <Route path='tvshows' element={<Tvshows/>} ></Route>
            <Route path='people' element={<People/>} ></Route>
            <Route path='details' element={<Details/>} ></Route>
            <Route path='tvdetails' element={<TvDetails/>} ></Route>
            <Route path='peopledetails' element={<PeopleDetails/>} ></Route>
          </Route>

          <Route path='about' element={<About/>} ></Route>
          {/* <Route path='login'
          element={<Login setUserData={setUserData}/>}>
          </Route> */}
          {/* <Route path='register' element={<Register/>} ></Route> */}
          <Route path='*' element={<Notfound/>} ></Route>
        </Routes>
      </MediaContextProvider>
      </div>
      
    
    </div>
  )
}

export default App;
