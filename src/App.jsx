
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import productData from './Utils/ProductData';


import SideMenu from './Components/SideMenu';
import PageLayout from './Components/PageLayout';
import { useState } from "react";
import Ingredients from './FooterPages/Ingredients';
import OurStory from './FooterPages/OurStory';
import ContactForm from './FooterPages/Contactus';
import PrivacyPolicy from './FooterPages/PrivacyPolicy';
import RefundPolicy from './FooterPages/RefundPolicy';

import ShippingPolicy from './FooterPages/ShoppingPolicy';
import TermsOfService from './FooterPages/TermsService';
import TrackOrder from './FooterPages/TrackOrder';
import Hospitality from './FooterPages/Hospitality';
import HSBlog from './FooterPages/HSBlog';
import Product from './Components/Product';
import ProductDetailPage from './Components/ProductDetailPage';   






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


        
     
       
      
      <Route path="/sideMenu" element={
        <PageLayout>
          <SideMenu/>
        </PageLayout>
        } />

        {/* Routing for the Footer pages */}
        <Route path="/our-story" element={
        <PageLayout>
          <OurStory/>
    
        </PageLayout>
        } />
        <Route path="/about/ingredients" element={
        <PageLayout>
          <Ingredients/>
        </PageLayout>
        } />

<Route path="/help/contact" element={
        <PageLayout>
    <ContactForm/>
        </PageLayout>
        } />
        <Route path="/help/privacy-policy" element={
        <PageLayout>
<PrivacyPolicy/>
        </PageLayout>
        } />
          <Route path="/help/refund-policy" element={
        <PageLayout>
<RefundPolicy/>
        </PageLayout>
        } />
     
        <Route path="/help/shipping-policy" element={
        <PageLayout>
<ShippingPolicy/>
        </PageLayout>
        } />
       
        <Route path="/help/terms" element={
        <PageLayout>
<TermsOfService/>
        </PageLayout>
        } />
     
        <Route path="/help/track-order" element={
        <PageLayout>
             <TrackOrder/>
        </PageLayout>
        } />
        

        <Route path="/about/hotels" element={
        <PageLayout>
           <Hospitality/>
        </PageLayout>
        } />
      
        <Route path="/about/hs-blog" element={
        <PageLayout>
          <HSBlog/>
           
        </PageLayout>
        } />
         
         <Route path="/" element={<Home />} />
         <Route path="/product" element={
          <PageLayout>

         
          <Product/>
          </PageLayout>} />
         <Route
  path="/product/:id"
  element={
  <PageLayout>
    <ProductDetailPage products={productData} />
    </PageLayout>
    }
/>






    

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
