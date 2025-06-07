import React from 'react'
import RoomCard from './RoomCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext'

const FeaturedDestination = () => {
    const {rooms, navigate}=useAppContext()
  return rooms.length>0 && (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Featured Destination' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, natus voluptates deserunt, praesentium ad ullam assumenda esse quia, voluptatibus cumque at neque ipsam provident? Tenetur consequatur quisquam culpa quas omnis?'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {rooms.slice(0,4).map((room,index)=>(
                <RoomCard key={room._id} room={room} index={index}/>
            ))}
        </div>
        <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>View All Rooms</button>
    </div>
  )
}

export default FeaturedDestination