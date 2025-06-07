import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddRoom = () => {

    const {axios, getToken}=useAppContext()

    const [images,setImages]=useState({
        1: null,
        2: null,
        3: null,
        4: null
    })
    const [inputs,setInputs]=useState({
        roomType: '',
        pricePerMonth: 0,
        amenities: {
            'WiFi Included': false,
            'Electric Bill Included': false,
            'Food Included': false,
            'Maintainance Included': false,
            'Toilet Attached': false
        }
    })

    const [loading, setLoading]=useState(false)

    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        if(!inputs.roomType || !inputs.pricePerMonth || !inputs.amenities || !Object.values(images).some(image=>image)){
            toast.error("Please fill in all the details")
            return;
        }
        setLoading(true)
        try {
            const formData=new FormData()
            formData.append('roomType', inputs.roomType)
            formData.append('pricePerMonth', inputs.pricePerMonth)
            // Converting amenities to Array & keeping only enabled amenities
            const amenities=Object.keys(inputs.amenities).filter(key=>inputs.amenities[key])
            formData.append('amenities', JSON.stringify(amenities))
            // Adding images to formData
            Object.keys(images).forEach((key)=>{
                images[key] && formData.append('images', images[key])
            })
            const {data}=await axios.post('/api/rooms/', formData, {headers: {Authorization: `Bearer ${await getToken()}`}})
            if(data.success){
                toast.success(data.message)
                setInputs({
                    roomType: '',
                    pricePerMonth: 0,
                    amenities: {
                        'WiFi Included': false,
                        'Electric Bill Included': false,
                        'Food Included': false,
                        'Maintainance Included': false,
                        'Toilet Attached': false
                    }
                })
                setImages({1: null, 2: null, 3: null, 4: null})
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <form onSubmit={onSubmitHandler}>
        <Title align='left' font='outfit' title='Add Room' subTitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda omnis officia nemo dolorem consectetur fugit reprehenderit, soluta voluptates, libero quisquam aliquid eum in deserunt ratione voluptatum nisi exercitationem sed ea?' />
        {/* Upload Area */}
        <p className='text-gray-800 mt-10'>Images</p>
        <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
            {Object.keys(images).map((key)=>(
                <label htmlFor={`roomImage${key}`} key={key}>
                    <img src={images[key]?URL.createObjectURL(images[key]) :assets.uploadArea} alt="" className='max-h-13 cursor-pointer opacity-80'/>
                    <input type="file" accept='image/*' id={`roomImage${key}`} hidden onChange={e=>setImages({...images, [key]: e.target.files[0]})}/>
                </label>
            ))}
        </div>
        <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
            <div className='flex-1 max-w-48'>
                <p className='text-gray-800 mt-4'>Room Type</p>
                <select value={inputs.roomType} onChange={e=>setInputs({...inputs,roomType: e.target.value})} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
                    <option value="">Select Room Type</option>
                    <option value="Mess - Single Bed">Mess - Single Bed</option>
                    <option value="Mess - Double Bed">Mess - Double Bed</option>
                    <option value="PG - Single Bed">PG - Single Bed</option>
                    <option value="PG - Double Bed">PG - Double Bed</option>
                    <option value="Flat - 1BHK">Flat - 1BHK</option>
                    <option value="Flat - 2BHK">Flat - 2BHK</option>
                    <option value="Flat - 3BHK">Flat - 3BHK</option>
                </select>
            </div>
            <div>
                <p className='mt-4 text-gray-800'>
                    Price
                </p>
                <input type="number" placeholder='0' className='border border-gray-300 mt-1 rounded p-2 w-24' value={inputs.pricePerMonth} onChange={e=>setInputs({...inputs,pricePerMonth: e.target.value})}/>
            </div>
        </div>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
            {Object.keys(inputs.amenities).map((amenity,index)=>(
                <div key={index}>
                    <input type="checkbox" id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs,amenities: {...inputs.amenities, [amenity]:!inputs.amenities[amenity]}})}/>
                    <label htmlFor={`amenities${index+1}`}> {amenity}</label>
                </div>
            ))}
        </div>
        <div className='mt-7 text-gray-800'>
            <input type="checkbox" required/>
            <label> I have decleared that the information provided is true and accurate to the best of my knowledge</label>
        </div>
        <button className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer' disabled={loading}>
            {loading ? 'Adding...' : "Add Room"}
        </button>
    </form>
  )
}

export default AddRoom