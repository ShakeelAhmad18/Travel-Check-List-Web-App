import Checklist from "./components/Checklist";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import './App.css'
import { useState } from "react";

function App() {
  const [items,setItems]=useState([])
  const numItem=items.length;
  function handleItems(item){
      setItems((items)=>[...items,item])
  }
  //write toggle function because handle the packed item 
 function handletoggle(id){
    setItems((items)=>items.map((item)=>item.id === id ? {...item,packed: !item.packed} : item))
 }
 
function handleDelete(id){
  setItems((items)=>items.filter((item)=>item.id !== id))
}

  return (
    <div className="app">
      <Logo/>
      <Form onAddItem={handleItems}/>
      <Checklist items={items} onDeleteItem={handleDelete} ontoggle={handletoggle} />
      <Stats num={numItem}/>
    </div>
  );
}

export default App;
