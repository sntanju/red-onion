import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './pages/Home/Banner/Banner';
import Breackfast from './pages/Home/Breackfast/Breackfast';
import Food from './pages/Home/Food/Food';
import Footer from './pages/Home/Footer/Footer';
import Lunch from './pages/Home/Lunch/Lunch';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      
      <BrowserRouter>
      <Switch>
        <Route>
          <Food></Food>
          </Route>
        
      </Switch>
      </BrowserRouter>
      <Breackfast></Breackfast>
      <Lunch></Lunch>
      <Footer></Footer>
    </div>
  );
}

export default App;











/*
https://red-onion-restaurant-41dbe.web.app/
Code :
https://github.com/19smabtahinoor/Red-Onion-ReactJS
Github:
https://github.com/19smabtahinoor

*/