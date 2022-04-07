
import { useReducer, useState } from 'react';
import './App.css';

// react funcation component

let reduserfuncation = (a,b)=>{
  //console.log(a)
  if(b.type === "click" ){
    return  a+1;
  }else if(b.type === "onclick" ){
    return  a-1;

  }
 
  if (b.type="into") {
    return a*7
    
  }
  else{
    return  a+1;

  }
  

  

}

function App() {

  //state/hooks

  const [mydata,setMydata]=useState(150)
  const [data, dispatch] = useReducer(reduserfuncation,mydata)


  //funcation functions
 let clickMe = ()=>{
   dispatch({type: "click"});
     
 }
 let clickMe2 = ()=>{
   dispatch({type: "onclick"});
     
 }
 let clickMe3 = ()=>{
   dispatch({type: "into"});
     
 }


  //return statment
  return (
    <div >
      <h1>UseReducer</h1>

      <h4 >{mydata}</h4>

      <h4>{data}</h4>

      <button  onClick={()=>{clickMe()}}>Incriment</button>
      <br/>
      <br/>
      <br/>
      <button onClick={()=>{clickMe2()}}>Decriment</button>
      <br/>
      <br/>
      <button onClick={()=>{clickMe3()}}>multiply</button>
    </div>
    
    
  );
}

export default App;
