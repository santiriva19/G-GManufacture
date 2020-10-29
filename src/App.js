import React from 'react';
import './assets/App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Bienvenido from './components/Bienvenido'
import Opciones from './components/Opciones'
import LaminadoDatos from './components/LaminadoDatos'
import ForjadoDatos from './components/ForjadoDatos'


function App() 
{
  
    return (
      <div className="backgroundImage">
        <Router>
          <Route exact path='/bienvenido' component={Bienvenido}/>
          <Route exact path='/opciones' component={Opciones}/>
          <Route exact path='/laminado' component={LaminadoDatos}/>
          <Route exact path='/forjado' component={ForjadoDatos}/>
        </Router>
      </div>
    );
  

}
export default App;
