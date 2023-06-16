import React, { useState } from "react"
// import Axios from 'axios'

export const Welcome=()=> {
    return (
        <>
            Login auth works
        </>
    )
}


// const handleSubmit = async (event) => {
//     event.preventDefault();

//     const email = event.target.elements.email.value;
//     const password = event.target.elements.password.value;

//     try {
//       const response = await axios.post("http://localhost:5000/users/login", {
//         email,
//         password,
//       });

//       if (response.data.status === 200) {
//         setRedirectLogin(true);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   if (redirectLogin) {
//     // return <Link to="/welcome" components={<Welcome />} />;
//     return <Navigate to='/welcome' />
//   }
