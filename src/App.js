import { Route, Routes } from "react-router-dom";
import Main from "./zomato-india/mainpage/main";
import AddtoReastaurant from "./zomato-india/AddtoRestaurent/hii";
import Error from "./component/error/error";
import Login from "./component/login/loginn";
import Advertise from "./zomato-india/Advertise/Advertise";
import SignIn from "./component/Sign/SignIn";
import PrivacyPolicy from "./component/privecy/privacyPolecy";
import FssaiLicenseCopy from "./component/FassailicenseCopy/FassaiLicenseCopy";
import RegulaeGstin from "./component/RegularGstin/regulaeGstin";
import { ContactUs } from "./component/contactUs/ContactUs";





function App() {
  return (

    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/partner-with-us" element={<AddtoReastaurant/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/business/advertise" element={<Advertise/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/Fssai-Test" element={<FssaiLicenseCopy/>}/>
      <Route path="/viewform" element={<RegulaeGstin/>}/>
      <Route path="/Contact" element={<ContactUs/>}/>







      <Route path="/*" element={<Error/>}/>


    </Routes>


   
  );
}

export default App;
