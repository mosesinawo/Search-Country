import React, { useState } from 'react';

const Input = () => {
  const [Username, setUsername] = useState({
    name:'Moses',
    pass: 'Pass'
  });
   const [Password, setPassword] = useState("");


  const valueUser = (e) => {
    setUsername(e.target.value
)
  }
  const valuePass = (e) =>{
    setUsername ( e.target.value )
  }
  const Show = (e) => {
    e.preventDefault();
    console.log(Username);
    // console.log(Password);
   
  }



  return (
    <div style={{ marginBottom: '20px' }}>
      <form onSubmit={Show}>

        <label>Username</label>
        <input 
        onChange={valueUser} 
        type="text"
        value={Username.name}
         />
        <div>

          <label>Password</label>

          <input 
          onChange={valuePass}
          type="text" 
          value={Username.pass}
          />
        </div>
        <button type='submit'  >Submit</button>
      </form>
    </div>
  )
}

export default Input