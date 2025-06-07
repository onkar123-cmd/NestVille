import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import PropertyReg from './components/PropertyReg'
import LayoutOwner from './pages/propertyOwner/Layout'
import Dashboard from './pages/propertyOwner/Dashboard'
import DashboardAdmin from './pages/admin/Dashboard'
import AddRoom from './pages/propertyOwner/AddRoom'
import ListRoom from './pages/propertyOwner/ListRoom'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import Loader from './components/Loader'
import AdminLogin from './components/admin/AdminLogin'
import LayoutAdmin from './pages/admin/Layout'
import UserList from './pages/admin/UserList'

const App = () => {
  const [showLoginAdmin, setShowLoginAdmin]=useState(false)
  const isOwnerPath=useLocation().pathname.includes("owner")
  const isAdminPath=useLocation().pathname.includes("admin")
  const {showPropertyReg, isAdmin}=useAppContext()
  return (
    <div>
      <Toaster/>
      {!isOwnerPath && !isAdminPath && <Navbar/>}
      {showPropertyReg && <PropertyReg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>
          <Route path='/loader/:nextUrl' element={<Loader/>}/>
          <Route path='/owner' element={<LayoutOwner/>}>
            <Route index element={<Dashboard/>} />
            <Route path='add-room' element={<AddRoom/>} />
            <Route path='list-room' element={<ListRoom/>} />
          </Route>
          <Route path='/admin' element={isAdmin ? <LayoutAdmin/> : <AdminLogin setShowLoginAdmin={setShowLoginAdmin}/>}>
            <Route index element={<DashboardAdmin/>} />
            <Route path='ulist' element={<UserList/>} />
          </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App