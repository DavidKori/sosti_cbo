import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import './styles/global.css';
import './styles/icomoon.css';

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import PageProvider from './context/pageContext';
import MenuProvider from './context/menuContext.jsx';

import Layout from './components/layout/layout';

import Home from './pages/Home/home';
import ContactPage from './pages/Contact/contact';
import Events from './pages/Events/event.jsx';
import Blogs from './pages/Blog/blogs.jsx';
import About from './pages/About/about.jsx';

function App() {

  return (
    <>
    <HelmetProvider>
      <Router>
        
        <PageProvider>
          <MenuProvider>
            <Layout>
              <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path='/' element={<Navigate to='/home' replace/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/contact' element={<ContactPage />}/>
                <Route path='/events' element={<Events/>}/>
                <Route path='/blogs' element={<Blogs/>}/>
                <Route path='/about' element={<About/>}/>
              </Routes>
            </Layout>
          </MenuProvider>
        </PageProvider>
      </Router>
    </HelmetProvider>
   </>
  )
}

export default App
