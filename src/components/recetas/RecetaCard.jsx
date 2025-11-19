import { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
  Button,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from 'react-router-dom';

const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80';

function RecetaCard({ receta }) {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleVerReceta = () => {
    navigate(`/recetas/${receta.id}`);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card
      sx={{
        height:480,
        width: 480,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
      elevation={4}
    >
      <CardMedia
        component="img"
        image={imageError ? PLACEHOLDER_IMAGE : receta.imagen}
        alt={receta.titulo}
        onError={handleImageError}
        sx={{
          height: 280, 
          width: '100%',
          objectFit: 'cover',
        }}
        loading="lazy"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {receta.titulo}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {receta.descripcion}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mb: 1 }}
          flexWrap="wrap"
          useFlexGap
        >
          <Chip
            icon={<AccessTimeIcon />}
            label={receta.tiempoPreparacion}
            size="small"
            variant="outlined"
          />

          <Chip
            label={receta.dificultad}
            size="small"
            color={
              receta.dificultad === 'Fácil'
                ? 'success'
                : receta.dificultad === 'Media'
                ? 'warning'
                : 'error'
            }
          />

          <Chip
            icon={<PeopleAltIcon />}
            label={`${receta.porciones} porciones`}
            size="small"
            variant="outlined"
          />

          <Chip
            icon={<RestaurantIcon />}
            label={receta.categoria}
            size="small"
            variant="outlined"
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ mt: 'auto', p: 2, pt: 0 }}>
        <Button variant="contained" fullWidth onClick={handleVerReceta}>
          VER RECETA
        </Button>
      </CardActions>
    </Card>
  );
}

export default RecetaCard;