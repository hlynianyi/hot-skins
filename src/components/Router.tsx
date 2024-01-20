import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './StartingPage/Home';
import Library from './Library/Home';
import Footer from './Footer';
import Contacts from './Contacts';
import Support from './Support';
import ApiPage from './ApiPage/ApiPage';
import Agents from './Categories/Agents';
import Stickers from './Categories/Stickers';
import Keys from './Categories/Keys';
import Crates from './Categories/Crates';
import Collections from './Categories/Collections';
import Patches from './Categories/Patches';
import Graffiti from './Categories/Graffiti';
import Skins from './Categories/Skins';
import MusicKits from './Categories/MusicKits';
import Login from './Login';
import AboutProject from './AboutProject';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/api/*" element={<ApiPage />} />
          <Route path="/about" element={<AboutProject />} />
          <Route path="/library/*" element={<Library />} />
          <Route path="/library/skins" element={<Skins />} />
          <Route path="/library/agents" element={<Agents />} />
          <Route path="/library/stickers" element={<Stickers />} />
          <Route path="/library/keys" element={<Keys />} />
          <Route path="/library/crates" element={<Crates />} />
          <Route path="/library/collections" element={<Collections />} />
          <Route path="/library/patches" element={<Patches />} />
          <Route path="/library/graffiti" element={<Graffiti />} />
          <Route path="/library/musickits" element={<MusicKits />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
