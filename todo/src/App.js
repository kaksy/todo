// import logo from './logo.svg';
import './App.css';
import { Fragment } from "react";
import {Todowrapper} from './Components/Todowrapper';
import {Todoform} from './Components/Todoform';
import Boss from './Components/Todo';
function App() {
   return(
     <Fragment >
        <div className='App'>
        <Todowrapper/>
        </div>
        {/* <Todoform/>
        <Boss/> */}
     </Fragment>
   )
}

export default App;
