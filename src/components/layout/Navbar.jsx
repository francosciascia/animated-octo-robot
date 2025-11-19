import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useThemeMode } from '../../contexts/ThemeContext';

const pages = [
  { label: 'Inicio', path: '/' },
  { label: 'Recetas', path: '/recetas' },
];

function Navbar() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const location = useLocation();
  const { mode, toggleMode } = useThemeMode();

  const openMenu = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="sticky" color="primary" sx={{ bgcolor: 'primary.main' }}>
      <Toolbar sx={{ gap: 2 }}>
        <RestaurantMenuIcon fontSize="large" />

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: { xs: 1, md: 0 },
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          Recetas Franco
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 1,
            ml: 'auto',
            alignItems: 'center',
          }}
        >
          {pages.map(({ label, path }) => (
            <Button
              key={path}
              color="inherit"
              component={RouterLink}
              to={path}
              sx={{
                textTransform: 'none',
                fontWeight: location.pathname === path ? 700 : 500,
                borderBottom:
                  location.pathname === path
                    ? '2px solid currentColor'
                    : '2px solid transparent',
                borderRadius: 0,
              }}
            >
              {label}
            </Button>
          ))}

          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>

        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            ml: 'auto',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>

          <IconButton color="inherit" edge="end" onClick={openMenu}>
            <MenuIcon />
          </IconButton>

          <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={closeMenu}>
            {pages.map(({ label, path }) => (
              <MenuItem
                key={path}
                component={RouterLink}
                to={path}
                onClick={closeMenu}
                selected={location.pathname === path}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;