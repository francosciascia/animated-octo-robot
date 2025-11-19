import { useMemo, useState } from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RecetasList from '../components/recetas/RecetasList';
import { useRecetas } from '../contexts/RecetasContext';

function RecetasListPage() {
  const { recetas, isLoading, error } = useRecetas();
  const [search, setSearch] = useState('');

  // Filtrar recetas por título
  const filteredRecetas = useMemo(() => {
    if (!recetas) return [];

    const term = search.trim().toLowerCase();
    if (!term) return recetas;

    return recetas.filter((r) =>
      r.titulo.toLowerCase().includes(term)
    );
  }, [recetas, search]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      {/* Header de la página */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Recetas destacadas
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explora platos deliciosos con instrucciones claras y tips prácticos para que te animes a cocinar en casa.
        </Typography>
      </Box>

      {/* Buscador */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Buscar recetas por título..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Error de carga */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {error}
        </Alert>
      )}

      {/* Mensaje si no hay resultados por el filtro */}
      {!error && filteredRecetas.length === 0 && search.trim() && (
        <Typography variant="body1" color="text.secondary">
          No se encontraron recetas que coincidan con "{search}".
        </Typography>
      )}

      {/* Lista de recetas */}
      {!error && filteredRecetas.length > 0 && (
        <RecetasList recetas={filteredRecetas} />
      )}
    </Container>
  );
}

export default RecetasListPage;