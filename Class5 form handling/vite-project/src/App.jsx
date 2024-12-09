// import React from 'react'

import {useState}  from 'react'
const App = () => {
  // const SubmitHandler = (e) => {
    // e.preventDefault()
    // const { fullname, username } = e.target;
    const { fullname, setfullname } = useState("");
    const { username, setusername } = useState("");
    
    const SubmitHandler = (e) => {
      e.preventDeafault();
      const data = {
        fullname,
        username,
      }
      console.log(data);
    }
  //   const data = {
  //     fullname: fullname.value,
  //     username: username.value,
  //   };
  //   console.log(data);
  //   // send the data to database.
  //   console.log(data);
  // };
  // npm i --
  return (
    // <div>App</div>
    <div className="mt-10 w-[80%] mx-auto p-10 rounded bg-zinc-100">
      <h1 className= "font-bold text-4xl underline mb-3">Form Handling</h1>
      <form onSubmit={SubmitHandler}>
        <input 
        className='p-2 rounded mr-4'
        type="text"
        placeholder='full name'
      onChange={(e) => e.target.value}
        value={fullname}
        // name='fullname'
         /> <div>
        <input 
        className='p-2 rounded mr-4'
        type="text"
        placeholder='user name'
        name='username'
         />
         <input type="radio"
         value= "male"
         onChange={(e) => setgender(e.target.value)}
         checked={gender == "male" ? true : false} />
         male <br />
         <input type="radio"
         onChange={() => setgender("female")
          checked={gender == "femlale" ? true : false}
         } /> female </div>
         <select 
         value={city}
         onChange={(e) => setcity(e.target.value)}
         className='block my-3'>
          <option value="">city</option>
          <option value="bhopal">bhopal</option>
          <option value="indore">indore</option>
          
         </select>
         <button className='font-normal text-3xl border rounded'>Submit</button>

      </form>
    </div>
  )
}

export default App