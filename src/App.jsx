import { Routes, Route } from 'react-router-dom'
import Index from './pages/index.jsx'
import AlaAlhamesh from './pages/ala-alhamesh.jsx'
import Alaaqa from './pages/alaaqa.jsx'
import BaraAlkahka from './pages/bara-alkahka.jsx'
import BaraAlkahkaTopic from './pages/bara-alkahka-topic.jsx'
import BaynAlbaytWalshoghl from './pages/bayn-albayt-walshoghl.jsx'
import BaynAlZahmWalkarama from './pages/bayn-alzahm-walkarama.jsx'
import GowaAlkahka from './pages/gowa-alkahka.jsx'
import HikayatSettat from './pages/hikayat-settat.jsx'
import KalamQanun from './pages/kalam-qanun.jsx'
import OmEltiflDhawiAlEaahaq from './pages/om-eltifl-dhawi-al-eaahaq.jsx'
import HousEltagmeel from './pages/hous-eltagmeel.jsx'
import MahwElOmya from './pages/mahw-el-omya.jsx'
import RoTeenTanzeefAlManzel from './pages/roteen-tanzeef-almanzel.jsx'
import SanaOlaOmoma from './pages/sana-ola-omoma.jsx'
import SawtohaMasmoua from './pages/sawtoha-masmoua.jsx'
import Infographic from './pages/infographic.jsx'
import VideoPortal from './pages/video-portal.jsx'
import TeamPage from './pages/TeamPage.jsx'
import './App.css'

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ala-alhamesh" element={<AlaAlhamesh />} />
        <Route path="/alaaqa" element={<Alaaqa />} />
        <Route path="/bara-alkahka" element={<BaraAlkahka />} />
        <Route path="/bara-alkahka/:id" element={<BaraAlkahkaTopic />} />
        <Route path="/bayn-albayt-walshoghl" element={<BaynAlbaytWalshoghl />} />
        <Route path="/bayn-alzahm-walkarama" element={<BaynAlZahmWalkarama />} />
        <Route path="/gowa-alkahka" element={<GowaAlkahka />} />
        <Route path="/hikayat-settat" element={<HikayatSettat />} />
        <Route path="/kalam-qanun" element={<KalamQanun />} />
        <Route path="/om-eltifl-dhawi-al-eaahaq" element={<OmEltiflDhawiAlEaahaq />} />
        <Route path="/hous-eltagmeel" element={<HousEltagmeel />} />
        <Route path="/mahw-el-omya" element={<MahwElOmya />} />
        <Route path="/roteen-tanzeef-almanzel" element={<RoTeenTanzeefAlManzel />} />
        <Route path="/sana-ola-omoma" element={<SanaOlaOmoma />} />
        <Route path="/sawtoha-masmoua" element={<SawtohaMasmoua />} />
        <Route path="/infographic" element={<Infographic />} />
        <Route path="/horayat-sahafiya" element={<VideoPortal />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </div>
  )
}

export default App





