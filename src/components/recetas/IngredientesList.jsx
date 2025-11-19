import { List, ListItem, ListItemText, Typography } from '@mui/material';

function IngredientesList({ ingredientes }) {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Ingredientes
      </Typography>
      <List dense disablePadding>
        {ingredientes.map((ingrediente, index) => (
          <ListItem
            key={`${ingrediente.nombre}-${index}`}
            sx={{ px: 0, py: 0.5 }}
            divider={index !== ingredientes.length - 1}
          >
            <ListItemText
              primary={`${ingrediente.cantidad} ${ingrediente.unidad}`}
              secondary={ingrediente.nombre}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default IngredientesList;

