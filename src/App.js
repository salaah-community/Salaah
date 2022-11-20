import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import MasonryGallery from './pages/MasonryGallery';
import Opportunity from './pages/Opportunity';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Page from './pages/Company/Page';
import DefencePg from './pages/Defence/DefencePg'
import Company from './pages/Company/Company';
import Defence from './pages/Defence/Defence';
import CulturePg from './pages/Culture/CulturePg'
import Culture from './pages/Culture/Culture';
import Team from './pages/Team/Team'
import Babbar from './components/Babbar'
import Hr from "./pages/hr/Hr";
import HrPage from "./pages/hr/HrPg.js";
import Startup from "./pages/startup/Startup";
import StartupPage from "./pages/startup/StartupPg.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/gallery' element={<MasonryGallery/>} />
        </Routes>
        <Routes>
          <Route path='/team' element={<Team/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities/company' element={<Company/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities/defence' element={<Defence/>} />
        </Routes>
        <Routes>
          <Route path='/Babbar' element={<Babbar/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities/culture' element={<Culture/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities/hr' element={<Hr/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities/startup' element={<Startup/>} />
        </Routes>
        <Routes>
          <Route path='/opportunities' element={<Opportunity/>} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq />} />
        </Routes>        
        <Routes>
        <Route path='/company/:id' element={<Page/>} />
        </Routes>
        <Routes>
        <Route path='/defence/1' element={<DefencePg/>} />
        </Routes>
        <Routes>
        <Route path='/hr/1' element={<HrPage/>} />
        </Routes>
        <Routes>
        <Route path='/startup/1' element={<StartupPage/>} />
        </Routes>
        <Routes>
        <Route path='/culture/1' element={<CulturePg/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
