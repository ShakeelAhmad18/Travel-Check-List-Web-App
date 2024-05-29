import Checklist from "./components/Checklist";
import Form from "./components/Form";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import './App.css'
import { useState } from "react";

function App() {
  const [items,setItems]=useState([])
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

function handleClear(){
   const confirm=window.confirm('Are You Sure to delete All the Items in the list')
   if(confirm){
    setItems([]);
   }
}
  return (
    <div className="app">
      <Logo/>
      <Form onAddItem={handleItems}/>
      <Checklist items={items} onDeleteItem={handleDelete} ontoggle={handletoggle} onClearitem={handleClear} />
      <Stats item={items}/>
    </div>
  );
}

export default App;
