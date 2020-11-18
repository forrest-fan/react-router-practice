import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import NewPosts from './NewPosts/NewPosts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/' exact  component={Home}/>
        <Route path='/new-posts' exact component={NewPosts}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
