import './App.css';
import About from './Components/About';
import Work from './Components/Work';
import Footer from './Components/Footer';
import GridExample from './Components/Codelanding';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Page from './homepageseq/page';
import AddLearn from './Components/addcode';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Page/>}/>
          <Route path="/codelandpage"  element={<GridExample/>}/>
          <Route path="/addcode"  element={<AddLearn/>}/>

         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
