// import axios from 'axios';
// import Joi from 'joi';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';



// export default function Login({setUserData}) {

//   let[errorMsg,setErrorMsg]=useState('');
//   let[errorList,setErrorList]=useState([])
//   let[loading,setLoading]=useState(false)

//   const navigate=useNavigate();
//   function goToHome(){
//     let path='/home'
//     navigate(path)
//   }

//   let[user,setUser]=useState({
//     email:'',
//     password:''
//   })

//   async function submitFormData(e){
//     e.preventDefault();
//     setLoading(true)

//     let validationResult=validateForm();

//     if(validationResult.error){
//       setErrorList(validationResult.error.details)
//       setLoading(false)
//     }else{
      
//       let {data}= await axios.post('https://ecommrce-mern.onrender.com/api/users/signin',user)
      
//       if(data.isAdmin== false){
//           localStorage.setItem('token',data.token)
//           setUserData()
//           goToHome()
//         }
//         else{
//           setErrorMsg(data.message)
//         }
//         setLoading(false)

//     }

    
//   }
//   function getFormValue(e){
//     let myUser={ ...user}
//     myUser[e.target.name]=e.target.value;
//     setUser(myUser)
//   }

//   function validateForm(){
//     const schema=Joi.object({
//       email:Joi.string().required().email({tlds:{allow:['com','net']}}),
//       password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{3}'))
//     })

//      return schema.validate(user,{abortEarly:false})

//   }

//   return (
//     <div className=' my-5 w-75 m-auto'>
//     <h1 className='my-3'>Login Form</h1>
//     {errorMsg?<div className='alert alert-danger'>{errorMsg}</div>:''}
//     {errorList.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>)}
    
    
//     <form onSubmit={submitFormData}>
//       <div className='input-gp my-3'>
//         <label  htmlFor='email' >Email: </label>
//         <input onChange={getFormValue}  type="email" className='form-control my-2'  name='email' ></input>
//       </div>
//       <div className='input-gp my-3'>
//         <label  htmlFor='password' >Password: </label>
//         <input onChange={getFormValue}  type="password" className='form-control my-2'  name='password' ></input>
//       </div>
//       <button className='btn btn-dark text-white border 1px solid #fff  float-end mt-3' type='submit'>
//         {loading?<i className='fa fa-spinner fa-spin'></i>:"Login"}
//         </button>
//       <div className='clearfix'></div>
//     </form>

//   </div>
//   )
// }
