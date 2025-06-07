import logo from './logo.svg'
import logo1 from './logo1.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import BedDouble from './bedDouble.svg'
import CleanIcon from './brushCleaning.svg'
import ElectricIcon from './Electric.svg'
import FoodIcon from './Food.svg'
import MaintainanceIcon from './Maintainance.svg'
import ToiletIcon from './toilet.svg'
import UserIcon from './user.svg'

export const assets = {
    logo,
    logo1,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
    BedDouble,
    CleanIcon,
    ElectricIcon,
    FoodIcon,
    MaintainanceIcon,
    ToiletIcon,
    UserIcon,
}

export const cities = [
    "Kolkata",
    "Delhi",
    "Mumbai",
    "Chennai",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Aman Raj", address: "Muzaffarpur, Bihar", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Onkar Hui", address: "Kolkata, West Bengal", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the rooms were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Prerona Sarkar", address: "Kolkata, West Bengal", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "WiFi Included": assets.freeWifiIcon,
    "Electric Bill Included": assets.ElectricIcon,
    "Food Included": assets.FoodIcon,
    "Maintainance Included": assets.MaintainanceIcon,
    "Toilet Attached": assets.ToiletIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.BedDouble, title: "Comfortable Rooms", description: "Spacious and cozy rooms designed for your relaxation." },
    { icon: assets.CleanIcon, title: "Regular Cleaning", description: "Rooms are cleaned daily for a fresh and pleasant stay." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of customer rated the location 5 stars." },
    { icon: assets.freeWifiIcon, title: "High-Speed Wi-Fi", description: "Stay connected with fast and reliable internet access." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Onkar Hui",
    "email": "user.onkar@gmail.com",
    "image": "data:image/png;base64,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" /*"https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9"*/,
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "Kolkata"
    ]
}

// Property Dummy Data
export const propertyDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "Kolkata",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "property": propertyDummyData,
        "roomType": "Mess - Double Bed",
        "pricePerMonth": 399,
        "amenities": ["Electric Bill Included", "Maintainance Included", "Toilet Attached"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "property": propertyDummyData,
        "roomType": "Flat - 2BHK",
        "pricePerMonth": 299,
        "amenities": ["Electric Bill Included", "Maintainance Included"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "property": propertyDummyData,
        "roomType": "PG - Double Bed",
        "pricePerMonth": 249,
        "amenities": ["WiFi Included", "Food Included", "Electric Bill Included", "Toilet Attached"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "property": propertyDummyData,
        "roomType": "Mess - Single Bed",
        "pricePerMonth": 199,
        "amenities": ["WiFi Included", "Electric Bill Included"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "property": propertyDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "property": propertyDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "property": propertyDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/