import './App.css';
import { Route, Routes } from "react-router-dom";
import Menu from './components/menu/menu';
import Rewards from './components/rewards/rewards';
import Navbar from './components/navbar/navbar';
import OrderButton  from './components/ordernow/orderNow';


function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Routes>
            <Route index element = {<Menu/>}/>
            <Route path="/Rewards" element={<Rewards/>}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
