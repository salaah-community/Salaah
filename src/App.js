import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import MasonryGallery from "./pages/MasonryGallery";
import Opportunity from "./pages/Opportunity";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";
import Team from "./pages/Team/Team";

import SinglePost from "./pages/SinglePost.js";
import PageNotFound from "./pages/PageNotFound.jsx";

import Hackathon from "./components/hackathon/Hackathon";
import Hackathon_Page from "./components/hackathon/Hackathon_Page";
import Updates from "./components/Updates.js";
import Events from "./pages/Events/Events.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/gallery" element={<MasonryGallery />} />
          <Route path='/team' element={<Team />} />
          <Route path="/opportunities" element={<Opportunity />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/company/:slug" element={<SinglePost />} />
          <Route path="/defence/:slug" element={<SinglePost />} />
          <Route path="/hr/:slug" element={<SinglePost />} />
          <Route path="/startup/:slug" element={<SinglePost />} />
          <Route path="/culture/:slug" element={<SinglePost />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/hackathon/:id" element={<Hackathon_Page />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
