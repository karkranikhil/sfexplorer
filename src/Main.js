import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
import Converter from 'Converter.js';
import App from 'App';
   
class Main extends Component {  
  render() {  
    return (  
       <Router> 
           <Routes>  
                 <Route exact path='/' element={< App />}></Route>  
                 <Route exact path='/sfdx-to-sf-converter' element={< Converter />}></Route>  
                 <Route exact path='*' element={< App />}></Route>  
          </Routes>   
       </Router>  
   );  
  }  
}  
export default Main; 