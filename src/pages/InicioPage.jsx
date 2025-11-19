import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function InicioPage() {
  return (
    <Box
      sx={{
        minHeight: "80vh",          // 👈 más altura general
        display: "flex",
        alignItems: "center",
        bgcolor: "background.default",
        py: 4,
        pb: 10,                     // 👈 margen inferior extra para esconder footer
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} textAlign="center">

          {/* Imagen */}
          <Box
            component="img"
            src="/images/cocinero.jpg"
            alt="Recetas Franco"
            sx={{
              width: "100%",
              maxWidth: 1100,  
              height: "auto",
              maxHeight: 450,     
              objectFit: "cover",
              borderRadius: 3,
              mx: "auto",
              display: "block",
            }}
          />

     
          <Typography variant="h3" fontWeight={700}>
            Bienvenido a Recetas Franco 👨‍🍳
          </Typography>


          <Typography variant="h6" color="text.secondary">
            Una aplicación simple y moderna donde podés explorar recetas argentinas,
            ver el paso a paso, los ingredientes y mucho más. Navegá, aprendé y animate
            a preparar tus platos favoritos.
          </Typography>


          <Box>
            <Button
              component={RouterLink}
              to="/recetas"
              variant="contained"
              size="large"
            >
              Ver recetas
            </Button>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}

export default InicioPage;