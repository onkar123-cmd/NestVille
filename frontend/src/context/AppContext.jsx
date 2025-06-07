import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import {useUser, useAuth} from "@clerk/clerk-react"
import {toast} from "react-hot-toast"

axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL

const AppContext=createContext()

export const AppProvider=({children})=>{
    const currency=import.meta.env.VITE_CURRENCY || "Rs."
    const url=import.meta.env.VITE_BACKEND_URL || "http://localhost:4000"
    const navigate=useNavigate()
    const {user}=useUser()
    const {getToken}=useAuth()
    const [isOwner, setIsOwner]=useState(false)
    const [isAdmin, setIsAdmin]=useState(false)
    const [showPropertyReg, setShowPropertyReg]=useState(false)
    const [searchedCities, setSearchedCities]=useState([])
    const [rooms, setRooms]=useState([])

    const fetchRooms=async()=>{
        try {
            const {data}=await axios.get('/api/rooms')
            if(data.success){
                setRooms(data.rooms)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const fetchUser=async()=>{
        try {
            const {data}=await axios.get('/api/user', {headers: {Authorization: `Bearer ${await getToken()}`}})
            if(data.success){
                setIsOwner(data.role==="propertyOwner")
                setSearchedCities(data.recentSearchedCities)
            }else{
                // retry fetching user details after 5 sec
                setTimeout(()=>{
                    fetchUser()
                },5000)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(user){
            fetchUser()
        }
    },[user])

    useEffect(()=>{
        fetchRooms()
    },[])

    const value={
        currency, url, navigate, user, getToken, isOwner, setIsOwner, axios, showPropertyReg, setShowPropertyReg,
        searchedCities, setSearchedCities, rooms, setRooms, isAdmin, setIsAdmin
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext=()=>useContext(AppContext)