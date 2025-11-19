import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import RecetasListPage from './pages/RecetasListPage';
import RecetaDetallePage from './pages/RecetaDetallePage';
import InicioPage from './pages/InicioPage';
import Footer from './components/layout/Footer';   // 👈 IMPORTANTE

function App() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Navbar />

      <Box component="main" sx={{ py: { xs: 3, md: 4 } }}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/recetas" element={<RecetasListPage />} />
          <Route path="/recetas/:id" element={<RecetaDetallePage />} />
          <Route path="*" element={<InicioPage />} />
        </Routes>
      </Box>

      <Footer /> {/* 👈 LO AGREGÁS ACA */}
    </Box>
  );
}

export default App;