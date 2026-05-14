import { Routes, Route } from 'react-router-dom'
import Index from './pages/index.jsx'
import AlaAlhamesh from './pages/ala-alhamesh.jsx'
import Alaaqa from './pages/alaaqa.jsx'
import BaraAlkahka from './pages/bara-alkahka.jsx'
import BaynAlbaytWalshoghl from './pages/bayn-albayt-walshoghl.jsx'
import GowaAlkahka from './pages/gowa-alkahka.jsx'
import HikayatSettat from './pages/hikayat-settat.jsx'
import KalamQanun from './pages/kalam-qanun.jsx'
import SawtohaMasmoua from './pages/sawtoha-masmoua.jsx'
import './App.css'

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ala-alhamesh" element={<AlaAlhamesh />} />
        <Route path="/alaaqa" element={<Alaaqa />} />
        <Route path="/bara-alkahka" element={<BaraAlkahka />} />
        <Route path="/bayn-albayt-walshoghl" element={<BaynAlbaytWalshoghl />} />
        <Route path="/gowa-alkahka" element={<GowaAlkahka />} />
        <Route path="/hikayat-settat" element={<HikayatSettat />} />
        <Route path="/kalam-qanun" element={<KalamQanun />} />
        <Route path="/sawtoha-masmoua" element={<SawtohaMasmoua />} />
      </Routes>
    </div>
  )
}

export default App





