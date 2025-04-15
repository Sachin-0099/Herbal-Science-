import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingId, setTrackingId] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTrackOrder = () => {
    setLoading(true);
    setStatus('');

    // Simulate an API call to track the order
    setTimeout(() => {
      // In a real-world scenario, replace this with an actual API call
      if (orderId === '12345' || trackingId === 'AWB98765') {
        setStatus('Your order is on the way and will arrive soon!');
      } else {
        setStatus('Order not found. Please check the details and try again.');
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-semibold text-green-900 mb-4">Track Your Order</h1>
        <p className="text-gray-600 mb-6">Check the current status of your shipment.</p>

        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="order-id" className="text-sm font-medium text-gray-700">Order ID/No:</label>
            <input
              type="text"
              id="order-id"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID/No"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tracking-id" className="text-sm font-medium text-gray-700">Tracking ID/AWB:</label>
            <input
              type="text"
              id="tracking-id"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID/AWB"
              className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={handleTrackOrder}
          disabled={loading}
          className="mt-6 w-full !bg-[#228B22] text-white p-3 rounded-md disabled:bg-gray-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? 'Tracking...' : 'Track Order'}
        </button>

        {status && (
          <p className={`mt-4 text-center p-4 rounded-md ${status.includes('not found') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
