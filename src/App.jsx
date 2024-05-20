import React, { useState } from 'react';
import './App.css'
import BoxCard from './components/BoxCard'; 
import Form from './components/Form';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
  });

  const handleSubmit = (data) => {
    setFormData(data);
    //alert(JSON.stringify(data, null, 2));
  }
  return (
    <>
      <h1 className='title'>Business Card Generator</h1>

      <div className='container'>
        <Form onSubmit={handleSubmit}/>

        <BoxCard userData={formData}/>
      </div>
    </>
  )
}

export default App;
