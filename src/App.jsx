
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';

import SideMenu from './Components/SideMenu';
import PageLayout from './Components/PageLayout';
import { useState } from "react";



const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
    <SideMenu
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
         <div style={styles.pageContainer}>
   
    
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
      
      <Route path="/sideMenu" element={
        <PageLayout>
          <SideMenu/>
        </PageLayout>
        } />

    

    </Routes>
    </div>
    </>
  );
};
const styles = {
  pageContainer: {
    width: "100vw",
    minHeight: "100vh",
    padding: 0, // Remove any extra padding
    margin: 0, // Remove any extra margin
    backgroundColor: "#f9f9f9",
  },
};

export default App;
