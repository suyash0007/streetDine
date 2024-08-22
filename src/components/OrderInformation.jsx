import { X, Plus, Printer } from 'lucide-react'
import { useState,useEffect } from 'react'
function OrderInformation({ order, onShowOrderInformation }) {
    const [isVisible, setIsVisible] = useState(true)
    const [isDine, setIsDine]=useState(false)
    const [isTakeAway, setIsTakeAway]=useState(false)

    useEffect(() => {
        const checkStatus = () => {
            if (order.type === "Dine In") {
                setIsDine(true);
                setIsTakeAway(false);
            } else if (order.type === "Take Away") {
                setIsDine(false);
                setIsTakeAway(true);
            }
        }
        checkStatus();
    }, [order.type]);

     const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onShowOrderInformation()
        }, 300)

    
    }
    return (
        <div className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-lg border-black border-l-2 transform transition-transform duration-300 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end p-2">
                <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                    <X size={24} />
                </button>
            </div>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h2 className="text-lg font-bold">Ordered Information</h2>
                <div className='flex space-x-4'>
                    <div className={`border-2 border-[#3571F0] font-semibold px-3 py-1 rounded ${isDine?'bg-[#3571F0] text-white':'bg-white text-gray-500'}`}>
                        Dine In
                    </div>
                    <div className={` border-2 border-[#3571F0] font-semibold px-3 py-1 rounded ${isTakeAway?'bg-[#3571F0] text-white':'bg-white text-gray-500'}`}>
                        Take Away
                    </div>
                </div>

            </div>

            <div className="p-4">
                <div className="flex justify-between mb-2">
                    <h3 className="text-gray-700 font-medium">Order #{order.id}</h3>
                    <p className="text-gray-700 font-medium">Token - {order.token_number}</p>
                    <h3 className="text-gray-700 font-medium">Table No - {order.table_no}</h3>
                </div>

                <div className="mb-4">
                    <h4 className="text-gray-500 font-medium mb-5">Items</h4>
                    {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between mb-5">
                            <div className="flex">
                                <img src={item.image} alt={item.name} className="w-10 h-10 mr-2 rounded-full"
                                loading="lazy" />
                                <div>
                                    <p className="font-bold">{item.name}</p>
                                    <p className="text-sm text-gray-500">{item.instructions}</p>
                                </div>
                            </div>
                            <p className="font-bold">{item.price}</p>
                        </div>
                    ))}


                </div>

                <div className='flex space-x-4 mb-4'>
                    <button className='flex space-x-2 items-center bg-yellow-300 rounded px-2 py-1'> <Plus size={20} /><span>Add Item</span> </button>
                    <button className="bg-[#3772F0] text-white flex items-center justify-center space-x-2 rounded px-3 py-1">
                        <Printer size={18} />
                        <span>Print KOT</span>
                    </button>
                    <button className="bg-[#2C3E50] text-white flex items-center justify-center space-x-2 rounded px-3 py-1">
                        <Printer size={18} />
                        <span>Print Invoice</span>
                    </button>


                </div>
                <button className="bg-[#008001] text-white px-3 py-2 rounded mb-4">Pay Later</button>

                <h4 className="text-gray-500 font-bold mb-5">Write Instructions</h4>

                <div className='bg-[#ECF0F0] rounded-md w-full mb-4 p-3'>
                    <ul className='list-disc list-inside text-[#5083F0] space-y-2 mb-4 font-bold'>
                    {order.items.map((item,index)=>(
                        <li key={index}>
                            {item.instructions}
                    

                        </li>
                    ))}
                                
                    </ul>

                </div>

                <h4 className="text-gray-500 font-bold mb-5">Change Payment Options</h4>

                <div className="space-y-4">
                    <button className="bg-[#008001] text-white w-full py-2 rounded-md font-bold">Accept Cash Before</button>
                    <button className="bg-yellow-300 w-full py-2 rounded-md text-black font-bold">Update Order</button>
                </div>
            </div>
        </div>
    );
}

export default OrderInformation;
