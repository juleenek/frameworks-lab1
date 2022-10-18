import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../src/stylesheets/App.scss';

import { Home } from './components/routes/home/home';
import { Posts } from './components/routes/posts/posts';
import { Navbar } from './components/common/Navbar';


export const App : FC = () => {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='posts'/>
          <Route path='home'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
