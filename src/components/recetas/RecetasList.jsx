import { Grid, Typography } from '@mui/material';
import RecetaCard from './RecetaCard';

function RecetasList({ recetas }) {
  if (!recetas?.length) {
    return (
      <Typography variant="body1" color="text.secondary">
        No hay recetas disponibles por el momento.
      </Typography>
    );
  }

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="stretch"
    >
      {recetas.map((receta) => (
        <Grid
          item
          key={receta.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <RecetaCard receta={receta} />
        </Grid>
      ))}
    </Grid>
  );
}

export default RecetasList;