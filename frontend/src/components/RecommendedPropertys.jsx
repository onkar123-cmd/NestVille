import React, { useEffect, useState } from 'react'
import RoomCard from './RoomCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext'

const RecommendedPropertys = () => {
    const {rooms, searchedCities}=useAppContext()
    const [recommended,setRecommended]=useState([])

    const filterPropertys=()=>{
        const filteredPropertys=rooms.slice().filter(room=>searchedCities.includes(room.property.city))
        setRecommended(filteredPropertys)
    }

    useEffect(()=>{
        filterPropertys()
    },[rooms, searchedCities])

  return recommended.length>0 && (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
        <Title title='Recommened Properties' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, natus voluptates deserunt, praesentium ad ullam assumenda esse quia, voluptatibus cumque at neque ipsam provident? Tenetur consequatur quisquam culpa quas omnis?'/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
            {recommended.slice(0,4).map((room,index)=>(
                <RoomCard key={room._id} room={room} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default RecommendedPropertys