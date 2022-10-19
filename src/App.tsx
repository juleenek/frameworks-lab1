import { FC } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from './components/Routes/Home/home';
import { Posts } from './components/Routes/Posts/posts';
import { GlobalStyle } from './styledHelpers/global';
import { Layout } from './components/Common/Layout';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='posts' element={<Posts />} />
            <Route index element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
