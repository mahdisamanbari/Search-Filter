import React,{useState} from 'react';
import Data from './MOCK_DATA.json'

const App = () => {
  const[searchTerm,setSearchTerm]=useState('')
  return (
    <div className='App'>
      <input type="text" placeholder='Search...'
      onChange={(event)=>{
        setSearchTerm(event.target.value)
      }} />
      {
        Data.filter((item)=>{
          if(item.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return item
            
          }
        }).map((item,key)=>{
          return(
           <div className='user' key={key}>
            <p>{item.first_name}</p>
          </div>
          )
        }
        )
      }
      
    </div>
  );
};

export default App;
//.map((item,key)=>{
 // return(
  //  <div className='user' key={key}>
    // <p>{item.first_name}</p>
   //</div>
   //)
 //}
 //)