import React from 'react';
import warehouseImg from '../assets/Warehouse.jpeg'; 
import {
    CreditCard,
    Truck,
    HandCoins,
    Percent,
    Package,
    Headphones,
    CheckCircle,
  } from 'lucide-react';
  
  const features = [
    { icon: CreditCard, label: 'Payment Options' },
    { icon: Truck, label: 'Reliable & Fast Delivery' },
    { icon: HandCoins, label: 'Purchase Financing' },
    { icon: Percent, label: 'Competitive Pricing' },
    { icon: Package, label: 'Supplier Management' },
    { icon: Headphones, label: 'Dedicated Support' },
  ];
const blogCards = [
    {
      title: "Tradeling: Tips for Safe and Smart Bulk Buying",
      subtitle: "Optimise costs while improving procurement efficiency",
      date: "JAN 28, 2025",
      tags: ["Sourcing", "Budgeting", "Fulfillment"]
    },
    {
      title: "Beyond Retail: Selling and Pricing for B2B Wholesale",
      subtitle: "Complexities of B2B wholesale pricing",
      date: "JAN 27, 2025",
      tags: ["Sourcing", "Budgeting", "Fulfillment"]
    },
    {
      title: "Small Business Owners - Buy In Bulk To Save",
      subtitle: "Lower costs through bulk buying",
      date: "JAN 22, 2025",
      tags: ["Sourcing", "Budgeting"]
    },
    {
      title: "Tradeling Excels - One Of The Best Bulk Wholesalers Of Consumer Electronics",
      subtitle: "Successful procurement requires reliable sources",
      date: "JAN 22, 2025",
      tags: ["Sourcing"]
    },
    {
      title: "The Benefits Of Buying From Wholesale Marketplaces",
      subtitle: "A smart choice for small retailers",
      date: "DEC 17, 2024",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "The Go-To Online Wholesale Marketplace For B2B Buyers And Sellers",
      subtitle: "Transforming procurement in the UAE",
      date: "DEC 17, 2024",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "The 8 Main Steps In The Procurement Process",
      subtitle: "Procurement processes vary greatly depending on business needs.",
      date: "JAN 17, 2023",
      tags: ["B2B", "Business Advisor"]
    },
    {
      title: "5 Ways For Resellers To Spot Category and Product Trends",
      subtitle: "How to master the art of product demand prediction",
      date: "NOV 30, 2022",
      tags: ["B2B", "Business Advisor"]
    },
    {
      title: "Opportunities, Advantages Of Reselling",
      subtitle: "Insights on how to stay ahead of your competitors",
      date: "NOV 30, 2022",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    },
    {
      title: "5 Steps - Creating a Strategic Procurement Process",
      subtitle: "Minimize risk with a strategic procurement plan",
      date: "NOV 29, 2022",
      tags: ["B2B", "Sourcing", "Business Advisor"]
    }
  ];
const Enterprise = () => {
  return (
    <>
   
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#00527A', color: '#FFFFFF', padding: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', width: '100%', flexWrap: 'wrap' }}>
        <div style={{ maxWidth: '500px', width: '48%', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px', lineHeight: '1.2' }}>
            Your trusted <span style={{ color: '#F28705' }}>sourcing partner</span> <br />
            for all purchasing needs.
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
            Unique to the region and the first of its kind, <strong style={{ color: '#F28705' }}>Tradeling Enterprise</strong> is your go-to product sourcing partner. With over 7 million items in curated catalogues at competitive prices, we streamline sourcing, supplier management, and communication hassles. Serving all business departments, we take care of the heavy 'sourcing', so you don't have to.
          </p>
          <button
            style={{
              backgroundColor: '#F28705',
              color: '#FFFFFF',
              padding: '15px 30px',
              borderRadius: '5px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            REGISTER
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', width: '48%', maxWidth: '350px' }}>
          <div style={{ marginBottom: '20px', textAlign: 'right' }}>
            {/* */}
          </div>
          <div style={{ backgroundColor: '#FFFFFF', color: '#00527A', borderRadius: '5px', padding: '20px', marginBottom: '10px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list-check" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM10 3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3zm-3 0H7v3h-.5V3.5h-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z" />
                <path fillRule="evenodd" d="M15.854 2.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0L11 3.707l-1.5 1.5a.5.5 0 0 1-.708 0L8 3.707l-1.5 1.5a.5.5 0 0 1-.708 0L5 3.707l-3 3a.5.5 0 0 1-.708 0l3-3a.5.5 0 0 1 .708 0L3 5.293l1.5-1.5a.5.5 0 0 1 .708 0L5 5.293l1.5-1.5a.5.5 0 0 1 .708 0L8 5.293l1.5-1.5a.5.5 0 0 1 .708 0L10 5.293l1.5-1.5a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3-3z" />
              </svg>
              <span style={{ fontSize: '14px' }}>Manage RFQs, Price Negotiations & LPOs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center',  marginBottom: '15px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-file-earmark-text-fill" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a.5.5 0 0 1-.5-.5zm-2 2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2zm0 3a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4zm0 3a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
              </svg>
              <span style={{ fontSize: '14px' }}>Contractual Pricing & Curated Catalogues</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0L10 3.707l-1.5 1.5a.5.5 0 0 1-.708 0L8 3.707l-1.5 1.5a.5.5 0 0 1-.708 0L5 3.707l-3 3a.5.5 0 0 1-.708 0l3-3a.5.5 0 0 1 .708 0L3 5.293l1.5-1.5a.5.5 0 0 1 .708 0L5 5.293l1.5-1.5a.5.5 0 0 1 .708 0L8 5.293l1.5-1.5a.5.5 0 0 1 .708 0L10 5.293l1.5-1.5a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708z" />
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.854-2.854a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0L11 5.707l-1.5 1.5a.5.5 0 0 1-.708 0L8 5.707l-1.5 1.5a.5.5 0 0 1-.708 0L5 5.707l-3 3a.5.5 0 0 1-.708 0l3-3a.5.5 0 0 1 .708 0L3 7.293l1.5-1.5a.5.5 0 0 1 .708 0L5 7.293l1.5-1.5a.5.5 0 0 1 .708 0L8 7.293l1.5-1.5a.5.5 0 0 1 .708 0L10 7.293l1.5-1.5a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708z" />
              </svg>
              <span style={{ fontSize: '14px' }}>One Supplier, for all your purchasing needs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                <path fillRule="evenodd" d="M9.405 3.05c-.03-.04-.569-.265-.749-.115l-.97.517c-.155.083-.366.058-.542-.059l-.956-.956c-.111-.111-.29-.117-.494-.031l-.52.94c-.06.108-.124.216-.186.324-.03.058-.091.176-.058.286l.94.52c.134.072.346.07.516-.003l.956.956c.092.092.1.23.026.38l-.94.52c-.165.095-.328.198-.486.304-.047.03-.097.057-.138.058h-.002a.5.5 0 0 1-.5-.5v-.857c0-.17.09-.32.234-.414l.677-.677a1.1 1.1 0 0 1 .643-.307l.823-.164c.179-.035.358-.154.49-.291l.956-.956c.092-.092.23-.1.38-.026l.52.94c.108.06.216.124.324.186.058.03.176.091.286.058l.52-.94c.072-.134.07-.346-.003-.516l.956-.956c.092-.092.23-.1.38-.026l.94.52c.095.165.198.328.304.486.03.047.057.097.058.138v.002a.5.5 0 0 1 .5.5v.857c0 .17-.09.32-.234.414l-.677.677a1.1 1.1 0 0 1-.643.307l-.823.164c-.179.035-.358.154-.49.291l-.956.956c-.092.092-.23.1-.38.026l-.52-.94c-.108-.06-.216-.124-.324-.186-.058-.03-.176-.091-.286-.058l-.52.94c-.072.134-.07.346.003.516l-.956.956c-.092.092-.23.1-.38.026l-.94-.52c-.095-.165-.198-.328-.304-.486-.047-.03-.097-.057-.138-.058h.002a.5.5 0 0 1-.5-.5V3.203a.5.5 0 0 1 .5-.5h.002c.041-.001.081-.02.113-.047l.52-.94zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
              </svg>
              <span style={{ fontSize: '14px' }}>Integrates with SAP, Oracle, and other ERPs</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16" style={{ marginRight: '10px' }}>
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2z" />
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
              </svg>
              <span style={{ fontSize: '14px' }}>Flexible payment terms</span>
            </div>
          </div>
          <p style={{ fontSize: '12px', color: '#B3E5FC', textAlign: 'right' }}>*For business use only</p>
        </div>
      </div>
    </div>
    <div className='max-w-4xl px-20 text-left py-20'>
  <h1>
    <span className='text-orange-500'>Tailored sourcing solutions</span> for you and your business. One supplier, one contact.
  </h1>
</div>

<div className='relative w-full flex justify-center items-center flex-col lg:flex-row bg-[#0099cc] text-white py-12'>
  {/* Left Section */}
  <div className='lg:w-1/2 px-8'>
    <h1 className='text-4xl font-bold inline-block p-2 mb-6'>
      Streamline product sourcing with our<br /> comprehensive platform:
    </h1>
    <ul className='space-y-4 text-base'>
      {[
        'FREE registration & access to procurement platform',
        'One supplier, for all your purchasing needs',
        'Consolidate all orders & payments in one place',
        'Manage quotations, price negotiations, LPOs and more!',
        'Expertly managed supplier network & access to 7 mill+ items',
        'Contractual pricing & curated catalogues',
        'Multiple payment options + credit finance',
      ].map((text, index) => (
        <li key={index} className='border-b border-white/40 pb-2'>
          ✔️ {text}
        </li>
      ))}
    </ul>
    <button className='mt-6 px-6 py-2 bg-orange-500 text-white rounded'>Register</button>
  </div>

  {/* Right Section */}
  <div className='relative lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center'>
    <img
      src="/Images/warehouse.avif"
      alt="Main"
      className='w-90 h-60 object-cover rounded-lg'
    />
    <img
      src="/Images/warehouse.avif"
      alt="Overlay"
      className='absolute w-70 h-40 object-cover rounded-lg shadow-lg top-[-15px] left-40 transform -translate-x-1/2 -translate-y-1/2'
    />
  </div>
</div>
<div className='max-w-4xl px-20 text-left py-20'>
  <h1>
    <span className='text-orange-500'>Everything you need in one</span> integrated platform. It’s easier with Tradeling.
  </h1>
</div>
        
        <div style={{ marginTop: '60px', width: '100%', maxWidth: '1440px' }} className='bg-[#00527a] text-white p-8'>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '30px' }}>
            Latest Insights & Resources
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {blogCards.map((card, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                color: '#00527A',
                padding: '20px',
                borderRadius: '8px',
                transition: 'transform 0.3s',
                cursor: 'pointer'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', marginBottom: '10px' }}>{card.subtitle}</p>
                <small style={{ fontSize: '12px', color: '#888' }}>{card.date}</small>
                <div style={{ marginTop: '10px' }}>
                  {card.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '12px',
                      backgroundColor: '#F28705',
                      color: '#fff',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      marginRight: '5px',
                      display: 'inline-block',
                      marginBottom: '5px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='max-w-4xl px-20 text-left py-20'>
  <h1>We are committed to
    <span className='text-orange-500'> resolving the frustrations</span> faced in your business sourcing and buying operations.
  </h1>
</div>
<div className="flex justify-center gap-12 flex-wrap py-10">
      {features.map(({ icon: Icon, label }, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
          <div className="relative">
            <div className="w-24 h-24 flex items-center justify-center rounded-full border border-slate-500">
              <Icon className="w-10 h-10 text-slate-800" />
            </div>
            <CheckCircle className="w-6 h-6 text-green-500 absolute -top-2 -right-2 bg-white rounded-full" />
          </div>
          <p className="mt-3 text-slate-800 text-lg font-medium">{label}</p>
        </div>
      ))}
    </div>

<div className='relative w-full flex justify-center items-center flex-col lg:flex-row bg-gray-100  py-20'>
     {/* Right Section */}
  <div className='relative lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center'>
    <img
      src="/Images/warehouse.avif"
      alt="Main"
      className='w-90 h-60 object-cover rounded-lg'
    />
    <img
      src="/Images/warehouse.avif"
      alt="Overlay"
      className='absolute w-70 h-40 object-cover rounded-lg shadow-lg top-[-15px] left-40 transform -translate-x-1/2 -translate-y-1/2'
    />
  </div>
  {/* Left Section */}
  <div className='lg:w-1/2 px-8'>
    <h1 className='text-4xl font-bold inline-block p-2 mb-6'>
    Access an extensive <br /> inventory of
    in-demand products.
    </h1>
   <p>Choose from an extensive selection of products spanning over 14 categories, including Consumer Electronics, Beauty, Office Supplies, Food & Beverage, and more!</p>
    <button className='mt-6 px-6 py-2 bg-orange-500 text-white rounded'>Register</button>
  </div>

 
</div>
  <div
    className="relative flex justify-center items-center min-h-screen bg-cover bg-center text-white py-20"
    style={{ backgroundImage: `url(${warehouseImg})` }}>

        <div className="absolute inset-0 bg-opacity-50"></div> {/* Dark overlay for better text readability */}
        <div className="relative container mx-auto px-4 lg:px-8 z-10 flex flex-col lg:flex-row justify-between items-center">
          <div className="max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-5">

          <span className='text-orange-500'>Save time & money</span>   – there's no need to invest in a procurement solution!
            </h1>
            <p className='py-4'>Partner with us and unlock significant benefits. Enjoy enhanced sourcing capabilities and receive complimentary access to our procurement solution software and dashboards, absolutely free of charge.</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md shadow-md">
              Get in touch
            </button>
          </div>
          <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-6 lg:p-8">
            <div className="text-center">
              <div className="text-xl font-bold mb-2">
                <span className="text-blue-400 mr-1">♦</span> Ulinkit
              </div>
              <p className="text-sm text-gray-300">
                MENA's leading wholesale marketplace
              </p>
            </div>
            <div className="bg-gray-700 h-6 rounded-b-lg mt-4"></div> {/* Laptop body visual */}
          </div>
        </div>
      </div>
      <div className='bg-[#00527a] text-white flex items-center justify-center p-8'>
        <h2>

Have any question? Please reach out to a friendly customer service agent on: +971 44 910000 or business@tradeling.com</h2>
      </div>




    </>
  );
};

export default Enterprise;