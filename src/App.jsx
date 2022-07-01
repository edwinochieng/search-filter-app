import React, { useState } from "react";
import contacts from "./contacts";

function App() {
 const [searchItem, setSearchItem] = useState("")

 function handleChange(event){

  setSearchItem(event.target.value)
 }

 function query(val){
  if(searchItem === ""){
    return val
  }else if(val.first_name.toLowerCase().includes(searchItem.toLocaleLowerCase())){
    return val
  }
 }

  return (
    <div className="flex flex-col justify-center items-center">

    <input type= "text" placeholder="Search..." onChange={handleChange} className = " hover:border-solid border-black mt-8 w-64 h-8 text-lg text-center"></input>
    
    <div className="pt-8">
    {contacts.filter(query).map((val, key) =>{
      return(
        <div key = {key} className= "flex-col text-lg">
          <p>{val.first_name}</p>
        </div>
      )
    })}
    </div>
       
    </div>
      
    
 )
}

export default App;
