import React, { useState } from 'react'
import SEOHelmet from '../Components/SEO/SeoHelmet'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Footer from '../Components/Footer'

const ToggleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left text-lg font-medium !bg-green-700 text-white px-4 py-3 rounded-md shadow hover:bg-green-600 transition-all"
      >
        {title}
        {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {open && (
        <div className="bg-green-50 text-green-900 px-4 py-3 rounded-b-md shadow-sm">
          {children}
        </div>
      )}
    </div>
  )
}

const Ingredients = () => {
  return (
    <>
      <SEOHelmet
        title="Ingredients | Herbal Science"
        description="Discover the philosophy behind Herbal Science — safe, honest, and effective beauty solutions."
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <img
            src="/Images/Ingredients.webp"
            alt="Ingredients image"
            loading="lazy"
            className="rounded-xl  w-full max-w-lg"
          />
        </div>

        <ToggleSection title="Why Our Ingredients Matter">
          <p className="mb-2">
            Your skin is your body’s largest organ. Most of what you put on it gets absorbed into your body. For this reason, we give priority to plant and mineral-based ingredients that are from natural and renewable resources.
          </p>
          <p>
            We focus on organics, minerals, and plant-derived products with therapeutic Ayurvedic value, backed by Vedic wisdom.
          </p>
        </ToggleSection>

        <ToggleSection title="Our Promise to You">
          <p>
            We work diligently to ensure none of our products contain ingredients that are harmful to you or the environment.
          </p>
        </ToggleSection>

        <ToggleSection title="The Just Herbs Ingredients Standard©">
          <p className="mb-2">
            Every ingredient is selected for long-lasting, natural results. We avoid ingredients that give fast results but damage skin over time.
          </p>
          <ul className="list-disc pl-5 text-green-800">
            <li>Free from petrochemicals</li>
            <li>Free from parabens and SLS/SLES</li>
            <li>GMO-free and synthetic-free</li>
          </ul>
        </ToggleSection>

        <ToggleSection title="What We Mean by ‘Natural Ingredient’">
          <ul className="list-decimal pl-5 text-green-800 space-y-1">
            <li>Certified Organic Herbs/Herbal extracts denoted by ‘*’ on product labels.</li>
            <li>Certified Organic cold pressed Plant/vegetable Oils denoted by ‘**’ on product labels.</li>
            <li>ECOCERT approved (Natural ingredient from renewable resources) denoted by ‘***’ on product labels.</li>
          </ul>
        </ToggleSection>

        <p className="text-sm text-gray-600 mt-6 italic">
          Just Herbs uses 100% Natural/herbal ingredients derived to the extent shown in the table below.
        </p>

        {/* Table Section */}
        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border border-gray-300 text-sm text-left text-gray-800">
            <thead className="bg-gray-100 text-black">
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-semibold">TYPE OF PRODUCT</th>
                <th className="border border-gray-300 px-4 py-2 font-semibold">PURITY OF KEY INGREDIENTS</th>
                <th className="border border-gray-300 px-4 py-2 font-semibold">PURITY OF BASE INGREDIENTS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Face packs in powder form</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">100% Natural (with no preservatives, Fragrance and color)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Hair Oils</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">100% Natural (with no preservatives and color)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Henna</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">100% Natural (with no preservatives and color)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Gel based products</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">98.2% Natural (Non-Natural 1.8%)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Creams</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">99.3% Natural (Non-Natural 0.7%)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Lotions</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">99.3% Natural (Non-Natural 0.7%)</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 px-4 py-2">Skin clays/ wet packs</td>
                <td className="border border-gray-300 px-4 py-2">100% Herbal (with varying %age of certified organic Ingredients)</td>
                <td className="border border-gray-300 px-4 py-2">99.3% Natural (Non-Natural 0.7%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Ingredients
