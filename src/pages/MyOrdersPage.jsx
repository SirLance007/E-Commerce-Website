import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const MyOrdersPage = () => {
    const [orders , setOrders] = useState([]);
    useState(() => {
        setTimeout( () => {
            const mockOrders = [
                {
                    id : "12345",
                    createdAt : "2023-10-01",
                    status : "delivered",
                    shippingAddress : {city : "New York",country : "USA",},
                    orderItems : [
                        {
                            name : "Product 1",
                            image : "https://picsum.photos/200/300?random=4",
                        },
                        {
                            name : "Product 2",
                            image : "https://picsum.photos/200/300?random=5",
                        },
                    ],
                    totalPrice : 250,
                    isPid : true,
                },
                {
                    id : "12346",
                    createdAt : "2023-10-01",
                    status : "delivered",
                    shippingAddress : {city : "New York",country : "USA",},
                    orderItems : [
                        {
                            name : "Product 1",
                            image : "https://picsum.photos/200/300?random=6",
                        },
                        {
                            name : "Product 2",
                            image : "https://picsum.photos/200/300?random=7",
                        },
                    ],
                    totalPrice : 250,
                    isPaid : true,
                },
            ];

            setOrders(mockOrders);
        } , 1000)
    } , [])
    
    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
                My Orders
            </h2>
            <div className="relative rounded-lg shadow-md sm:rounded-lg overflow-hidden">
                <div className='no-scrollbar overflow-x-auto w-full'>
                    <table className='min-w-full text-left text-gray-500'>
                        <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                            <tr>
                                <th className='py-2 px-4 sm:py-3'>Image</th>
                                <th className='py-2 px-4 sm:py-3'>Oder Id</th>
                                <th className='py-2 px-4 sm:py-3'>Created</th>
                                <th className='py-2 px-4 sm:py-3'>Shipping Address</th>
                                <th className='py-2 px-4 sm:py-3'>Items</th>
                                <th className='py-2 px-4 sm:py-3'>Price</th>
                                <th className='py-2 px-4 sm:py-3'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key = {order.id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                            <img className='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg' src= {order.orderItems[0].image} alt="" />
                                        </td>
                                        <td className='font-medium text-gray-900 whitespace-nowrap  py-2 px-2 sm:py-4 m:px-4'>
                                            #{order.id}
                                        </td>
                                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                            {new Date(order.createdAt).toLocaleDateString()}{" "}
                                            {new Date(order.createdAt).toLocaleTimeString()}
                                        </td>
                                        <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                            {order.shippingAddress.city}, {order.shippingAddress.country}
                                        </td>
                                        <td className='py-2 px-4 sm:py-4 sm:px-4'>
                                            {order.orderItems.length}
                                        </td>
                                        <td className='py-2 px-4 sm:py-4 sm:px-4'>
                                            {order.totalPrice}
                                        </td>
                                        <td className='py-2 px-4 sm:py-4 sm:px-4'>
                                            <span className={`${order.isPaid ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>
                                                {order.isPaid ? "Paid" : "Pending"}
                                            </span>

                                        </td>
                                    </tr> 
                                ))
                            ) : (
                                <tr>
                                    <td className=''>

                                    </td>
                                    <td colSpan="7" className='py-4 text-center'>
                                        <p className='text-gray-500'>No orders found.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default MyOrdersPage