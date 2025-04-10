// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import HeaderNav from '../Components/HeaderNav';
import SideMenu from '../SideMenu';
import PageLayout from '../Components/PageLayout';
import { useState } from "react";



const AppRoutes = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
    <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
   
    
    <Routes>
      <Route path="/" element={
     <PageLayout>
         <Home />
     </PageLayout>
        } />
      <Route path="/about" element={
    <PageLayout>
          <About/>
    </PageLayout>
        } />
      <Route path="/headerNav" element={
       <PageLayout>
         <HeaderNav/>
       </PageLayout>
        } />
      <Route path="/sideMenu" element={
        <PageLayout>
          <SideMenu/>
        </PageLayout>
        } />

    

    </Routes>
    </>
  );
};

export default AppRoutes;
