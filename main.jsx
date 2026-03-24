import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from "./Navigation";
import NewCollections from './NewCollections.jsx';
import Contact from './Contact.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ClubCollections from './ClubCollections.jsx';
import HalfSleeve from './HalfSleeve.jsx';
import FullSleeve from './FullSleeve.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Barcelona from './Barcelona.jsx';
import Aresnal from './Aresnal.jsx';
import RealMadrid from './RealMadrid.jsx';
import Bayern from './Bayern.jsx';
import Chelsea from './Chelsea.jsx';
import Psg from './Psg.jsx';
import Liverpool from './Liverpool.jsx';
import JerseyPage from './JerseyPage.jsx';
import Bayern2014 from './Bayern2014.jsx';
import RealMadrid2025 from './RealMadrid2025.jsx';
import RealMadrid2012 from './RealMadrid2012.jsx';
import Barcelona2009 from './Barcelona2009.jsx';
import Barcelona1999 from './Barcelona1999.jsx';
import PSG2025 from './PSG2025.jsx';
import Liverpool2008 from './Liverpool2008.jsx';
import Liverpool2015 from './Liverpool2015.jsx';
import Chelsea2009 from './Chelsea2009.jsx';
import Aresnal2024 from './Aresnal2024.jsx';
import Sporting2002 from './Sporting2002.jsx';
import AcMilan2009 from './AcMilan2009.jsx';
import { CartProvider } from "./CartContext";
import Cart from './Cart.jsx';
import OrderSummary from './OrderSummary.jsx';
import Payment from './Payment.jsx';
import Success from './Success.jsx';

const router= createBrowserRouter([
 {
  path:'/',
  element:<Navigation/>
 },
 
 {
  path:'/NewCollections',
  element:<NewCollections/>
 },
 {
  path:'/Contact',
  element:<Contact/>
 },
 {
  path:'/ClubCollections',
  element:<ClubCollections/>
 },
 {
  path:'/HalfSleeve',
  element:<HalfSleeve/>
 },
 {
  path:'/FullSleeve',
  element:<FullSleeve/>
 },
 {
  path:'/Login',
  element:<Login/>
 },
 {
  path:'/Signup',
  element:<Signup/>
 },
 {
  path:'/Barcelona',
  element:<Barcelona/>
 },
 {
  path:'/Aresnal',
  element:<Aresnal/>
 },
 {
  path:'/RealMadrid',
  element:<RealMadrid/>
 },
 {
  path:'/Bayern',
  element:<Bayern/>
 },
 {
  path:'/Chelsea',
  element:<Chelsea/>
 },
 {
  path:'/Psg',
  element:<Psg/>
 },
 {
  path:'/Liverpool',
  element:<Liverpool/>
 },
 {
  path:'/JerseyPage', 
  element:<JerseyPage/>
 },
 {
  path:'/Bayern2014', 
  element:<Bayern2014/>
 },
 {
  path:'/RealMadrid2025', 
  element:<RealMadrid2025/>
 },
 {
  path:'/RealMadrid2012', 
  element:<RealMadrid2012/>
 },
 {
  path:'/Barcelona2009', 
  element:<Barcelona2009/>
 },
 {
  path:'/Barcelona1999', 
  element:<Barcelona1999/>
 },
 {
  path:'/PSG2025', 
  element:<PSG2025/>
 },
 {
  path:'/Liverpool2008', 
  element:<Liverpool2008/>
 },
 {
  path:'/Liverpool2015', 
  element:<Liverpool2015/>
 },
 {
  path:'/Chelsea2009', 
  element:<Chelsea2009/>
 },
 {
  path:'/Aresnal2024', 
  element:<Aresnal2024/>
 },
 {
  path:'/Sporting2002', 
  element:<Sporting2002/>
 },
 {
  path:'/AcMilan2009', 
  element:<AcMilan2009/>
 },
 {
  path: '/cart',
  element: <Cart/>
},
{
  path: '/summary',
  element: <OrderSummary/>
},
{
  path: '/payment',
  element: <Payment/>
},
{
  path: '/success',
  element: <Success/>
}
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
