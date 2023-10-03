const FunctionalCount = () => {     
    const [count, setCount] = React.useState(0); 
    
    const plus = () => {         
        setCount(count + 1); 
   };  

    const min = () => {         
        setCount(count - 1); 
   };      
    
    const reset = () => {         
        setCount(0); 
   };     

    return ( 
       <div> 
           <h2>Counter</h2> 
           <h1>{count}</h1> 
           <div> 
               <button onClick={min} style={{ marginRight: '10px', fontSize: '25px' }}>-1</button> 
               <button onClick={plus} style={{ marginRight: '10px', fontSize: '25px' }}>+1</button> 
           </div> 
           <button onClick={reset} style={{ marginRight: '10px', fontSize: '25px' }}>Reset</button> 
       </div> 
   ); 
}

const myApp = <FunctionalCount/> 

ReactDOM.createRoot(document.getElementById('functional')).render(myApp);  
