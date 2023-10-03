class MyComponent extends React.Component {     
    constructor(props) {       
        super(props);       
        this.state = {         
            count: 0 
      }; 
    }        
    
    plus = () => {       
        this.setState(setState => ({         
            count: setState.count + 1 
      })); 
    };        
    
    min = () => {       
        this.setState(setState => ({         
            count: setState.count - 1 
      })); 
    };        
    
    reset = () => {       
        this.setState({         
            count: 0 
      }); 
    };        
    
    render() {       
        return ( 
        <div> 
          <h2> Counter </h2> 
          <h1>{this.state.count}</h1> 
          <div> 
            <button onClick={this.min} style={{ marginRight: '10px', fontSize: '25px' }}>-1</button> 
            <button onClick={this.plus} style={{ marginRight: '10px', fontSize: '25px' }}>+1</button> 
          </div> 
          <button onClick={this.reset} style={{ marginRight: '10px', fontSize: '25px' }}>Reset</button> 
        </div> 
      ); 
    } 
} 
   
ReactDOM.createRoot(document.getElementById('classcomponent')).render(<MyCom ponent />); 
   
