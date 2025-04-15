import React from "react";

import SEOHelmet from "../Components/SEO/SeoHelmet";
import Footer from "../Components/Footer";
const ShippingPolicy = () => {
  return (
    <>
 <SEOHelmet
  title="Shipping Policy | Herbal Science"
  description="Find detailed information about Herbal Science's shipping process, delivery timelines, handling, and courier policies for your orders."
/>

    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-green-900">Shipping Policy</h1>

      <section className="mb-6">
        <p className="mb-4">
          <strong>Cash on Delivery:</strong> Available on select Indian pin-codes.
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-4">
          Purchases are shipped from our warehouse in Mohali, Punjab via courier. Please allow the following number of days from the receipt of your order:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>For domestic orders – 7 to 10 business days.</li>
        </ul>
        <p className="mb-4">
          Order deliveries will be made between <strong>9:00 AM – 5:00 PM, Monday to Friday</strong>.
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-4">
          Goods will need to be signed for upon delivery. If you are unavailable to sign, please suggest an alternative recipient such as a family member, colleague, or neighbor.
        </p>
        <p className="mb-4">
          Herbal science® takes no responsibility for goods signed by an alternative person.
        </p>
        <p className="mb-4">
        Herbal science® is not responsible for any damage after delivery.
        </p>
      </section>

      <section className="mb-6">
        <p className="mb-4">
          All claims for shortages or damages must be reported to customer service on the day of delivery at{" "}
          <a href="mailto:customersupport@justherbs.in" className="text-blue-600 underline">
          support@herbaljivan.com
          </a>.
        </p>
      </section>

      <section>
        <p className="mb-4">
          Shipping and handling rates may vary based on product, packaging, size, volume, type, and other considerations. These charges are provided at the time of checkout, and customers will be informed of the total cost before making payment.
        </p>
      </section>
    </div>
    <Footer/>

    </>
  );
};

export default ShippingPolicy;
