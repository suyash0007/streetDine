import React, { useState, Suspense, lazy } from 'react'
import OrderCard from './OrderCard';
import orderData from '../assets/orderds.json'
const OrderInformation = lazy(() => import('./OrderInformation'))

function Dashboard() {
  const buttonLabels = ['All', 'New Orders', 'Dine In', 'Take Away', 'Payments'];
  const [selectedOrder, setSelectedOrder] = useState(null);
  const handleCardClick = (order) => {
    setSelectedOrder(order)
  };
  const handleCloseOrderInformation = () => {
    setSelectedOrder(null)
  };

  return (
    <div className='p-10 bg-[#ECF0F1] h-screen'>
      <h2 className='font-bold text-2xl mb-10'>Dashboard</h2>
      <div className="flex mb-5">
        {buttonLabels.map((label, index) => (
          <button className={` px-5 py-2 border-r-2 text-[#515F6E] text-center align-middle rounded-md mr-7 ${label === 'New Orders' ? "bg-[#FED700] font-bold" : "bg-white font-semibold"}`} key={index}>{label}</button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        {orderData.orders.map((order, index) => (
          <OrderCard key={index} order={order} onClick={() => handleCardClick(order)} />
        ))}
      </div>
      {selectedOrder && (
        <Suspense fallback={<div className='fixed right-0 top-0 p-5 font-bold text-xl'>Loading Order Information...</div>}>
          <OrderInformation
            order={selectedOrder}
            onShowOrderInformation={handleCloseOrderInformation}
            isVisible={true}
          />
        </Suspense>
      )}
    </div>
  )
}

export default Dashboard