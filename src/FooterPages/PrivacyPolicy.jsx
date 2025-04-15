import React from "react";
import Footer from "../Components/Footer";
import SEOHelmet from "../Components/SEO/SeoHelmet";

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold text-green-800 mb-2">{title}</h2>
    <div className="text-gray-700 text-sm leading-relaxed">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  return (
    
    <>
   <SEOHelmet
  title="Privacy Policy | Herbal Science"
  description="Read the Privacy Policy of Herbal Science to understand how we collect, use, and protect your personal data."
/>

    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 mb-20">
      <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">Privacy Policy</h1>
      <p className="py-4">Welcome to the Privacy Notice of Herbal Science, a part of the Marico Group (which includes Marico Limited and its subsidiaries in India and abroad). At Herbal Science, we are committed to protecting your privacy. This notice explains how we collect, use, and safeguard your personal information to ensure transparency and trust in all our interactions.</p>
      <p className="py-4">We respect your privacy and value our relationship; therefore, we handle your personal data responsibly. By using the platform and consenting to personal data collection, you confirm that you have read and agree to be bound by this Privacy Notice.

</p>


      <Section title="Applicability">
        <p>
          This Privacy Notice applies to all personal data we collect in connection with various products and services offered by companies within the Marico Group, directly or indirectly through a third party acting on our behalf.
        </p>
      </Section>

      <Section title="Personal Data That We Collect">
        <ul className="list-disc list-inside space-y-1">
          <li>Personal identifiable information: name, email, postal address, phone number.</li>
          <li>Demographic details: date of birth, postal code, interests, hobbies, etc.</li>
          <li>Login information: username and password.</li>
          <li>Service history: order history and purchase patterns.</li>
          <li>Platform usage info: IP address, browser type, device ID, location, etc.</li>
          <li>Product usage experience and complaints.</li>
        </ul>
      </Section>

      <Section title="Collection & Processing for Identified Purposes">
        <p>
          We collect personal data through our online platforms, offline events, from third-party sources, and automatically via cookies and similar technologies. Some entities may collect sensitive data with your consent.
        </p>
      </Section>

      <Section title="Use of Your Personal Data">
        <ul className="list-disc list-inside space-y-1">
          <li>Order processing, shipping, returns.</li>
          <li>Support for product inquiries, personalization.</li>
          <li>Events, campaigns, contests, promotions.</li>
          <li>Research, internal training, quality assurance.</li>
          <li>Targeted marketing via third-party consented data.</li>
        </ul>
      </Section>

      <Section title="Data Sharing and Disclosure">
        <p>
          We may share your data within Marico Group and with third-party service providers for business operations and promotional activities. Data may also be shared for legal or regulatory purposes, or during business transfers.
        </p>
      </Section>

      <Section title="Security Safeguards">
        <p>
          We take all reasonable measures to protect your data from unauthorized access, misuse, and loss. Suspected breaches are dealt with using strict protocols.
        </p>
      </Section>

      <Section title="Links to Third-Party Sites">
        <p>
          Our website may contain links to external sites. We do not take responsibility for the privacy practices of these third-party platforms.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          Personal data is retained as long as necessary to meet legal, contractual, and business obligations. Even after deletion, data may be archived for audit and compliance purposes.
        </p>
      </Section>

      <Section title="Your Privacy Rights">
        <ul className="list-disc list-inside space-y-1">
          <li>Right to access, correction, and update.</li>
          <li>Right to erasure and grievance redressal.</li>
          <li>Right to nominate someone on your behalf.</li>
          <li>Right to withdraw consent.</li>
        </ul>
        <p>Please contact our Grievance Officer to exercise any of these rights.</p>
      </Section>

      <Section title="Contact - Grievance Officer">
        <p><strong>Name:</strong> Manish Kumar</p>
        <p><strong>Address:</strong> Herbal Science PVT. LTD. Plot No. 202, Industrial Focal Point, Phase – 9, Mohali, 160062 Punjab, India.Corporate add-A-1/197,HASTSAL ROAD ,UTTAM NAGAR 
        DELHI -110059</p>
        <p><strong>Phone:</strong> +91-9599896554</p>
        <p><strong>Timings:</strong> 9:30 AM to 5:30 PM, Monday to Friday</p>
      </Section>

      <Section title="Changes to Privacy Notice">
        <p>
          We may update this notice periodically. Continued use of our platform implies acceptance of the changes. You will be notified if the data is used for any new purpose.
        </p>
        <p className="text-sm text-gray-500 mt-2">Last updated: April 15, 2025</p>
      </Section>
    </div>
    <Footer/>
  
    </>
  );
}
