import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle the button click for Option 1
  const handleOption1 = () => {
    setSelectedOption('Option 1');
  };

  // Function to handle the button click for Option 2
  const handleOption2 = () => {
    setSelectedOption('Option 2');
  };

  return (
    <div style={{backgroundColor:'#37eb34', padding:'10px', alignItems:'center' }}>
       <h1>Parent Component</h1>
       <div style={{backgroundColor:'orange', padding:'0px'}}>
        <h1 style={{padding:'5px'}}>Child Component 1</h1>
        <button style={{width:'150px',height:'30px', margin:'5px', borderRadius:'10px'}} onClick={handleOption1} >Option 1</button>
       </div>
       <div style={{backgroundColor:'yellow'}}>
        <h1 style={{padding:'5px'}}>Child Component 2</h1>
        <button style={{width:'150px',height:'30px', margin:'5px', borderRadius:'10px'}} onClick={handleOption2} >Option 2</button>
       </div>
       <p>Selected Option: {selectedOption} </p>
    </div>
  )
}

export default App