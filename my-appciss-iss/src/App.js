import{Routes ,Route} from 'react-router-dom';
import './App.css';

const App=()=> {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    

   </Routes>
    </>
  );
}

export default App;
