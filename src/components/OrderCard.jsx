import React from 'react';
import { ShoppingBasket, Printer, User, UsersRound } from 'lucide-react';

function OrderCard({ order, onClick }) {
    return (
        <div 
            className="bg-white shadow-md rounded-lg p-4 max-w-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={onClick}
        >
            
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                    <span className="bg-yellow-400 text-black rounded px-3 py-3 text-sm font-semibold">{order.token}</span>

                    <div>
                        <h2 className="text-lg font-bold">Token - {order.token_number}</h2>
                        <h4 className="text-gray-600 text-sm">Order# {order.id}</h4>
                    </div>
                </div>
                <div>
                    <p className="bg-[#97b4f5] text-[#384c63] rounded px-4 py-1 text-sm font-semibold">{order.type}</p>

                    <p className='text-sm p-1 text-center font-semibold text-[#696e71] items-center flex'>
                        <span className='inline-block w-2 h-2 bg-red-500 rounded-full mr-2'></span>
                        {order.status}
                    </p>
                </div>
            </div>

            <div className="mb-3 flex justify-between">
                <h3 className="text-gray-700 font-medium">Instructions</h3>
                <p className="text-sm text-gray-600">{order.instructions}</p>
            </div>

            <div className='grid grid-cols-3'>
                <div className='flex flex-col'>
                    <p className='mb-4 text-[rgb(161,169,176)] font-bold'>Items</p>
                    {order.items.map((item, index) => (
                        <p key={index} className='mb-4 font-bold'>{item.name}</p>
                    ))}
                </div>
                <div className='flex flex-col items-center'>
                    <p className='mb-4 text-[#A1A9B0] font-bold'>Qty</p>
                    {order.items.map((item, index) => (
                        <p key={index} className='mb-4 font-bold'>{item.quantity}</p>
                    ))}
                </div>
                <div className='flex flex-col items-end'>
                    <p className='mb-4 text-[#A1A9B0] font-bold'>Price</p>
                    {order.items.map((item, index) => (
                        <p key={index} className='mb-4 font-bold'>{item.price}</p>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-3'>
                <div className='flex flex-col'>
                    <p className='mb-4 text-sm font-semibold'>Total Amount</p>
                    <p className='mb-4 text-sm font-semibold'>Remaining Amount</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='mb-4 font-bold'>-</p>
                    <p className='mb-4 font-bold'>-</p>
                </div>
                <div className='flex flex-col items-end'>
                    <p className='mb-4 font-bold'>{order.totalAmount}</p>
                    <p className='mb-4 font-bold'>{order.remainingAmount}</p>
                </div>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <button className="bg-[#3772F0] text-white flex items-center justify-center space-x-2 rounded-md px-3 py-1">
                    <ShoppingBasket size={18} />
                    <span>View Items</span>
                </button>
                <button className="bg-[#2C3E50] text-white flex items-center justify-center space-x-2 rounded-md px-3 py-1">
                    <Printer size={18} />
                    <span>Print Invoice</span>
                </button>
            </div>

            <div className='flex justify-between items-center mb-4'>
                <button className="bg-[#3772F0] text-white  rounded-md flex items-center justify-center space-x-2 px-3 py-1">
                    <User size={18} />
                    <span>Enter Customer Info</span>
                </button>
                <button className="bg-[#2C3E50] text-white rounded-md flex justify-center items-center space-x-2 px-3 py-1">
                    <UsersRound size={18} />
                    <span>Assign Staff</span>
                </button>
            </div>

            <p className='font-semibold mb-4'>Payment Options</p>
            <div className="flex justify-between">
                <button className="bg-[#008001] text-white px-3 py-2 rounded-md">Accept Cash Before</button>
                <button className="bg-[#008001] text-white px-3 py-2 rounded-md">Pay Later</button>
            </div>
        </div>
    )
}

export default OrderCard;
