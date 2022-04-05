import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {MdLocalPostOffice} from 'react-icons/md';
import {BsPhoneVibrateFill} from 'react-icons/bs'
import {FaMapMarkedAlt} from 'react-icons/fa';



function App() { 

  const [user, setUser] = useState({});

  const api = () => {
    axios.get('https://randomuser.me/api/').then(res => setUser(res.data.results[0]));
  }

  useEffect(() => {
    api();
  },[]);

  const clickHandler = () => {
    api();
  }
  

  return (
    <div className='container'>
      <div className='row'>
        <img src={user.picture?.large} alt="user-img"/>
        <h3>{user.name?.title} {user.name?.first} {user.name?.last}</h3>
      </div>

      <div className='row'>
      <MdLocalPostOffice className='icon'/>
      <p>{user.email}</p>
      </div>

      <div className='row'>
        <BsPhoneVibrateFill className='icon'/>
      <p>{user.phone}</p>
      </div>

      <div className='row'>
        <FaMapMarkedAlt className='icon'/>
        <p>{user.location?.city} - {user.location?.country}</p>
      </div>

      <div className='column'>
        <p>Age: {user.dob?.age}</p>
        <p>Register Date: {user.registered?.date.slice(0, 10)}</p>
        <button className='random-user' onClick={clickHandler}>Random User</button>
      </div>
      
    </div>
    
  );

}

export default App;
