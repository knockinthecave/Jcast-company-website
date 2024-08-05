import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/layouts/Main';
import Jmes from './components/pages/products/Jmes';
import AiSolution from './components/pages/products/AiSolution';
import DataCollect from './components/pages/products/DataCollect';
import Dashboard from './components/pages/products/Dashboard';
import ProductPrice from './components/pages/products/ProductPrice';
import CodeOfConduct from './components/pages/sustainable-manage/CodeOfConduct';
import CompanyHistory from './components/pages/introduction/CompanyHistory';
import CeoMessage from './components/pages/introduction/CeoMessage';
import MainView from './components/MainView';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Main>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/jmes" element={<Jmes />} />
              <Route path="/ai-solution" element={<AiSolution />} />
              <Route path="/data-collect" element={<DataCollect />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/product-price' element={<ProductPrice />} />
              <Route path='/code-of-conduct' element={<CodeOfConduct />} />
              <Route path='/company-history' element={<CompanyHistory />} />
              <Route path='/ceo-message' element={<CeoMessage />} />
              <Route path="/" element={<MainView />} />
            </Routes>
          </Container>
        </Main>
        <Footer />
      </React.Fragment>
    </Router>
  );
};

export default App;
