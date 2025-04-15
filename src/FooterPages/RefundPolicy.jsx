import React from 'react'
import SEOHelmet from '../Components/SEO/SeoHelmet'
import Footer from '../Components/Footer'

const RefundPolicy = () => {
  return (
    <>
     <SEOHelmet
  title="Refund Policy | Herbal Science"
  description="Learn about Herbal Science's Refund Policy, including eligibility criteria, refund timelines, and how to request a return or exchange."
/>

  
<div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-20">
<h1 className="text-3xl font-bold text-green-900 mb-6 text-center">Refund Policy</h1>
<section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-900">Returns Policy</h2>
        <p className="mb-4">
          We do not offer refunds or exchanges for opened products due to hygiene concerns. However, we do offer replacements purely on a case-by-case basis and it is always our endeavour to help our customers to the best of our ability as the case may be. Genuine cases of damage, leakage, missing product(s), or wrong delivery of product(s) will be taken into consideration.
        </p>
        <p className="mb-4">
          The customer shall bring the same to our notice within 7 working days from the date of receiving the product(s).
        </p>
        <p className="mb-4">
          All claims for shortages or damages must be reported to customer service at{" "}
          <a href="mailto:customersupport@justherbs.in" className="text-blue-600 underline">
          support@herbaljivan.com
          </a>{" "}
          on the day of delivery.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-green-900">Cancellation Policy</h2>
        <p className="mb-4">
          Orders once placed through{" "}
          <a href="https://www.justherbs.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            www.herbalscience.in
          </a>{" "}
          cannot be cancelled and no refunds will be made once an order has been successfully placed.
        </p>
      </section>

      <section>
        <p className="mb-2">
          If you have any questions regarding these Terms and Conditions, please email us at{" "}
          <a href="mailto:info@justherbs.in" className="text-blue-600 underline">
            info@herbalscience.in
          </a>
        </p>
        <p className="text-sm text-gray-600 mt-4">
          Worldwide Copyright © Herbal Science Pvt. Ltd. (brand owners of Just Herbs®). All worldwide rights reserved.
        </p>
      </section>
    </div>
    <Footer/>
      
   
    </>
  )
}

export default RefundPolicy
