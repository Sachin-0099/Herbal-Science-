import React, { useState } from 'react';

const prohibitedItems = [
  'Listing of services and jobs',
  'Counterfeit goods or items of any type',
  'Any goods or items that violate the intellectual property rights of any company or individual',
  'Stocks, bonds, investment interests and other securities',
  'Currencies (including digital currencies) and negotiable instruments (for example, cheques)',
  'Items that promote hatred, violence, ethnic, racial or religious intolerance',
  'Artifacts, antiquities and art treasures',
  'Pornographic materials or items',
  'Medical drugs (including over-the-counter)',
  'Medical devices',
  'Drug paraphernalia (for example, marijuana pipes/bongs and grow lights)',
  'E-cigarettes and electronic hookah',
  'Tobacco products, nicotine and e-liquids',
  'Flammable, explosive, hazardous and radioactive chemicals and substances',
  'Fireworks and firecrackers',
  'Firearms and ammunition (or items/toys that look like firearms or ammunition)',
  'Weapons (for example, crossbows and switchblade knives)',
  'Descramblers',
  'Devices designed to intentionally block, jam or interfere with authorized communications',
  'Spy equipment and devices',
  'Bank card readers or “skimmers”',
  'Used SIM cards',
  'Live animals',
  'Animal parts that have been restricted by applicable laws (for example, ivory)',
  'Alcohol for consumption, or food products containing alcohol',
  'Pork products',
  'Any other items prohibited by laws, regulations, sanctions and trade restrictions in any relevant jurisdiction',
  'Residential properties such as houses, villas, and apartments',
  'Automotive items such as motorcycles, cars, and scooters',
  'Medical sexual, fertility or hormonal enhancers and boosters (with the exception of natural supplements)'
];

const ProductListingPolicy = () => {
  const [openSections, setOpenSections] = useState({
    uaeProhibitedItems: false,
    tradelingProhibitedItems: false,
    fullPolicy: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-4">Product Listing Policy</h1>
      <h2 className="text-xl text-gray-600 text-center mb-6">Effective February 15, 2020</h2>

      <div className="mb-6">
        <p className="text-base mb-4">
          This Product Listing Policy applies to the Tradeling.com website and any mobile applications operated by Blink Technologies FZCO and its affiliates <strong>(“Tradeling”)</strong>.
        </p>
        <p className="text-base mb-4">
          You may not post or sell any item that is restricted or prohibited by a federal, state or local law in any jurisdiction. Below, we have listed categories of prohibited or restricted items, but there may be some that are not covered here. You, as the Seller, are responsible for ensuring that you are not posting an item that is prohibited by law in any jurisdiction.
        </p>
        <p className="text-base mb-4">
          Tradeling may impose additional restrictions and prohibitions that may not be required by law. Tradeling may update this policy at any time, it is your responsibility to review the policy on a regular basis to ensure compliance.
        </p>
        <p className="text-base mb-4">
          Tradeling, in its sole discretion, reserves the right to determine whether an item is in violation of this policy and to demand that you remove an item immediately or terminate your account for violation of this policy, per the User Terms And Conditions.
        </p>
      </div>

      <div className="mb-6">
        <h2
          onClick={() => toggleSection('uaeProhibitedItems')}
          className="text-2xl font-semibold cursor-pointer text-[#3087d1] mb-2 flex justify-between items-center"
        >
          UAE-SPECIFIC PROHIBITED ITEMS
          <span>{openSections.uaeProhibitedItems ? '▲' : '▼'}</span>
        </h2>
        {openSections.uaeProhibitedItems && (
          <ul className="list-disc pl-6 text-base space-y-2">
            <li>All kinds of narcotic or recreational drugs</li>
            <li>Gambling tools, machineries and devices of all kinds</li>
            <li>Pirated content</li>
            <li>Counterfeit currencies</li>
            <li>Radiation and nuclear fallout contaminated substances</li>
            <li>Items that contradict Islamic faith and public morals</li>
            <li>Items used in black magic, witchcraft or sorcery</li>
            <li>Poppy seeds, or any items containing poppy seeds</li>
            <li>Nylon fishing nets</li>
            <li>Any other goods or items, prohibited under the GCC Common Customs Law or any other law or regulation applicable in the UAE</li>
          </ul>
        )}
      </div>

      <div className="mb-6">
        <h2
          onClick={() => toggleSection('tradelingProhibitedItems')}
          className="text-2xl font-semibold cursor-pointer text-[#3087d1] mb-2 flex justify-between items-center"
        >
          OTHER THINGS PROHIBITED BY TRADELING
          <span>{openSections.tradelingProhibitedItems ? '▲' : '▼'}</span>
        </h2>
        {openSections.tradelingProhibitedItems && (
          <ul className="list-disc pl-6 text-base space-y-2">
            <li>All kinds of narcotic or recreational drugs</li>
            <li>Gambling tools, machineries and devices of all kinds</li>
            <li>Pirated content</li>
            <li>Counterfeit currencies</li>
            <li>Radiation and nuclear fallout contaminated substances</li>
            <li>Items that contradict Islamic faith and public morals</li>
            <li>Items used in black magic, witchcraft or sorcery</li>
            <li>Poppy seeds, or any items containing poppy seeds</li>
            <li>Nylon fishing nets</li>
            <li>Any other goods or items, prohibited under the GCC Common Customs Law or any other law or regulation applicable in the UAE</li>
          </ul>
        )}
      </div>

      <div className="mb-6">
        <h2
          onClick={() => toggleSection('fullPolicy')}
          className="text-2xl font-semibold cursor-pointer text-[#3087d1] mb-2 flex justify-between items-center"
        >
          Prohibited Items List
          <span>{openSections.fullPolicy ? '▲' : '▼'}</span>
        </h2>
        {openSections.fullPolicy && (
          <ul className="list-disc pl-6 text-base space-y-2">
            {prohibitedItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <h2 className="text-xl text-center mt-6">
        If you have any questions regarding the Product Listing Policy, please{' '}
        <a href="contact-us" className="text-blue-600 hover:underline">
          Contact Us
        </a>.
      </h2>
    </div>
  );
};

export default ProductListingPolicy;
