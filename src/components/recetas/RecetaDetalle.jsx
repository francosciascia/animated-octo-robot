import { useState } from 'react';
import {
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import IngredientesList from './IngredientesList';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80';

function RecetaDetalle({ receta }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Paper sx={{ p: { xs: 2, md: 4 }, mb: 4 }} elevation={4}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box
            component="img"
            src={imageError ? PLACEHOLDER_IMAGE : receta.imagen}
            alt={receta.titulo}
            onError={handleImageError}
            sx={{
              width: '100%',
              borderRadius: 2,
              objectFit: 'cover',
              height: { xs: 300, sm: 400, md: 500 },
            }}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            {receta.titulo}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            {receta.descripcion}
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
            <Chip icon={<AccessTimeIcon />} label={receta.tiempoPreparacion} variant="outlined" />
            <Chip
              icon={<WhatshotIcon />}
              label={receta.dificultad}
              color={
                receta.dificultad === 'Fácil'
                  ? 'success'
                  : receta.dificultad === 'Media'
                  ? 'warning'
                  : 'error'
              }
            />
            <Chip icon={<PeopleAltIcon />} label={`${receta.porciones} porciones`} variant="outlined" />
            <Chip label={receta.categoria} variant="outlined" />
          </Stack>
          <IngredientesList ingredientes={receta.ingredientes} />
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom display="flex" alignItems="center" gap={1}>
        <FormatListNumberedIcon />
        Proceso de preparación
      </Typography>

      <List sx={{ width: '100%' }}>
        {receta.pasos.map((paso, index) => (
          <ListItem
            key={`paso-${index}`}
            alignItems="center"
            sx={{
              borderLeft: '4px solid',
              borderColor: 'primary.main',
              borderRadius: 2,
              mb: 2,
              backgroundColor: 'action.hover',
            }}
          >
            <ListItemAvatar>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </Box>
            </ListItemAvatar>
            <ListItemText primary={paso} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default RecetaDetalle;

