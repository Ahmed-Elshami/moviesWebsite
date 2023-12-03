// import axios from 'axios';
// import Joi, { allow } from 'joi';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';



// export default function Register() {

//   let[user,setUser]=useState({
//     name:'',
//     email:'',
//     password:''
//   })
//   let[errorMsg,setErrorMsg]=useState('')
//   let[errorList,setErrorList]=useState([])
//   let[loading,setLoading]=useState(false)
//   const navigation=useNavigate();
  
//   function goToLogin(){
//     let path='/login';
//     navigation(path)
//   }

//  async function submitFormData(e){
//       e.preventDefault();
//       setLoading(true)

//       let validationResult=validateForm();
//       console.log(validationResult)
      
//       if(validationResult.error){
//         setErrorList(validationResult.error.details)
//         setLoading(false)

//       }
//       else
//       { 

//         let{data}= await axios.post('https://ecommrce-mern.onrender.com/api/users/signup',user)
//         console.log(data)
//         if(data.isAdmin== false){
//           goToLogin()
//         }else
//         {
//          setErrorMsg(data.message)
//         }
//         setLoading(false)

//       }     
//   }

//   function getFormValue(e){
//     let myUser={ ...user };
//     myUser[e.target.name]= e.target.value;
//     setUser(myUser);
//     console.log(myUser)
//   }


//   function validateForm(){
//     const schema=Joi.object({
//       name:Joi.string().alphanum().required().min(3).max(10),
//       email:Joi.string().required().email({tlds:{allow:['com','net']}}),
//       password:Joi.string().required().pattern(new RegExp('^[a-z][0-9]{5}$'))
//     })

//      return schema.validate(user,{abortEarly:false});
//   }




//   return (
//     <div className=' my-5 w-75 m-auto'>
//       <h1 className='my-3'>Registeration Form</h1>
//       {errorMsg? <div className='alert alert-danger'>{errorMsg}</div>:''}
//       {errorList.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>)}

//       {/* {errorMsg?<div className='alert alert-danger'>{errorMsg}</div>:''} */}

//       <form onSubmit={submitFormData}>
//         <div className='input-gp my-3'>
//           <label  htmlFor='first_name' >Name: </label>
//           <input onChange={getFormValue} type="text" className='form-control my-2'  name='name' ></input>
//         </div>
//         {/* <div className='input-gp my-3'>
//           <label  htmlFor='last_name' >Last Name: </label>
//           <input onChange={getFormValue} type="text" className='form-control my-2'  name='last_name' ></input>
//         </div> */}
//         {/* <div className='input-gp my-3'>
//           <label  htmlFor='age' >Age: </label>
//           <input onChange={getFormValue} type="number" className='form-control my-2'  name='age' ></input>
//         </div> */}
//         <div className='input-gp my-3'>
//           <label  htmlFor='email' >Email: </label>
//           <input onChange={getFormValue} type="email" className='form-control my-2'  name='email' ></input>
//         </div>
//         <div className='input-gp my-3'>
//           <label  htmlFor='password' >Password: </label>
//           <input onChange={getFormValue} type="password" className='form-control my-2'  name='password' ></input>
//         </div>
//         <button className='btn btn-dark text-white border 1px solid #fff float-end mt-3' type='submit'>
//           {loading? <i className='fa fa-spinner fa-spin'></i> :'Register'}
//           </button>
//         <div className='clearfix'></div>
//       </form>

//     </div>
//   )
// }
