import { Box, Button, CircularProgress, Container, Typography, Snackbar, Alert as MuiAlert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import RecetaDetalle from '../components/recetas/RecetaDetalle';
import { useRecetas } from '../contexts/RecetasContext';
import ShareIcon from "@mui/icons-material/Share";
import { useState } from 'react';

function RecetaDetallePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecetaById, isLoading, error } = useRecetas();
  const receta = getRecetaById(id);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleVolver = () => {
    navigate('/recetas');
  };

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      setSnackbarMessage("Link copiado al portapapeles");
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage("No se pudo copiar el enlace");
      setSnackbarOpen(true);
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Detalle de la receta
        </Typography>
        <Typography variant="body" color="text.secondary">
          Sigue cada paso y domina esta preparación como un profesional.
        </Typography>
      </Box>

      {error ? (
        <MuiAlert severity="error" sx={{ mb: 3 }}>
          {error}
        </MuiAlert>
      ) : receta ? (
        <RecetaDetalle receta={receta} />
      ) : (
        <MuiAlert severity="warning" sx={{ mb: 3 }}>
          No encontramos la receta solicitada.
        </MuiAlert>
      )}

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="outlined" onClick={handleVolver}>
          Volver al listado
        </Button>

        <Button
          variant="contained"
          startIcon={<ShareIcon />}
          onClick={handleShare}
          color="primary"
        >
          Compartir receta
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MuiAlert severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
}

export default RecetaDetallePage;