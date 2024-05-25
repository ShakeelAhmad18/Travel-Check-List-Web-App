import React, { useState } from 'react'

const Form = () => {
  const [description,setDescription]=useState('');
  const [quantity,setQuantity]=useState(1);
  const handleSubmit=(e)=>{
       e.preventDefault();
       if(!description) return;
      const setItems={description,quantity,packed:false,id:Date.now()}
       console.log(setItems)

       setDescription('');
       setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need 😍 for your trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}
      </select>
      <input type="text" value={description} placeholder='item...' onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
  )
}

export default Form
