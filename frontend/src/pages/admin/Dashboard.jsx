import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const Dashboard = () => {

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
      <Title align='left' font='outfit' title='Dashboard' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste quia autem animi eos odio rerum consequuntur at quidem tempore numquam, blanditiis laudantium dolorem odit suscipit sapiente cumque perferendis ratione.' />
      <div className='flex gap-4 my-8'>
        {/* Total Booking */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>
        {/* Total revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Admin Total Revenue</p>
            <p className='text-neutral-400 text-base'>{currency} {dashboardData.totalRevenue/2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard