import { Box, Container, Typography, Stack } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={1} textAlign="center">
          <Typography variant="h6" fontWeight={600}>
            Recetas Franco
          </Typography>

          <Typography variant="body2">
            © {new Date().getFullYear()} Franco Sciascia — Todos los derechos reservados.
          </Typography>

          <Typography variant="body2">
            Contacto: recetasfranco@gmail.com · Instagram: @recetasfranco
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;