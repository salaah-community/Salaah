import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import MasonryGallery from './pages/MasonryGallery';
import Opportunity from './pages/Opportunity';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Team from './pages/Team/Team'

import SinglePost from "./pages/SinglePost.js";
import PageNotFound from "./pages/PageNotFound.jsx";

import Hackathon from "./components/hackathon/Hackathon"
import Hackathon_Page from "./components/hackathon/Hackathon_Page"

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
          <Route path='/opportunities' element={<Opportunity/>} />
        </Routes>
        <Routes>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq />} />
        </Routes>        
        <Routes>
        <Route path='/company/:slug' element={<SinglePost/>} />
        </Routes>
        <Routes>
        <Route path='/defence/:slug' element={<SinglePost/>} />
        </Routes>
        <Routes>
        <Route path='/hr/:slug' element={<SinglePost/>} />
        </Routes>
        <Routes>
        <Route path='/startup/:slug' element={<SinglePost/>} />
        </Routes>
        <Routes>
        <Route path='/culture/:slug' element={<SinglePost/>} />
        </Routes>
        <Routes>
        <Route path='/hackathon' element={<Hackathon/>}/>
        </Routes>
        <Routes>
        <Route path='/hackathon/:id' element={<Hackathon_Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
