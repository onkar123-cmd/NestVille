import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const UserList = () => {

  const { currency, getToken, toast, axios } = useAppContext()

  const [dashboardData, setDashboardData] = useState({
    bookings: [],
    totalBookings: 0,
    totalRevenue: 0,
  })

  const fetchDashboardData = async () => {
    try {
      const { data } = await axios.get('/api/bookings/property', { headers: { Authorization: `Bearer ${await getToken()}` } })
      if (data.success) {
        setDashboardData(data.dashboardData)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboardData()
  },[])

  return (
    <div>
      <h2 className='text-xl text-blue-950/70 font-medium md-5'>All Users's Booking</h2>
      <div className='mt-10'></div>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Email Id</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Booking Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  <img src={item.user.image} alt="user-image" className="w-10 h-10 rounded-full" />{item.user.username}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  {item.user.email}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.room.roomType}
                </td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  {currency} {item.totalPrice}
                </td>
                <td className='py-3 px-4 border-t border-gray-300 flex'>
                  <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                    {item.isPaid ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserList