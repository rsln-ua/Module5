import React, { FC } from 'react';
import {
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { appRoutes } from '../routes';
import { NavLink } from 'react-router-dom';
import { SignButtons } from './SignButtons';

const routes = appRoutes.filter((el) => Boolean(el.title));

interface INavbar {
  isAuthorized: boolean;
  onSignIn: () => void;
  onSignUp: () => void;
  onSignOut: () => void;
}

const Navbar: FC<INavbar> = ({
  isAuthorized,
  onSignUp,
  onSignIn,
  onSignOut,
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            A-LEVEL CURSE
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.link}
                  color="black"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <SignButtons
                isAuthorized={isAuthorized}
                onSignIn={onSignIn}
                onSignOut={onSignOut}
                onSignUp={onSignUp}
              />
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            A-LEVEL CURSE
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: '1rem',
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.link}
                  color="black"
                  underline="none"
                  variant="button"
                  sx={{
                    fontSize: 'large',
                    marginLeft: '2rem',
                  }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
            <SignButtons
              isAuthorized={isAuthorized}
              onSignIn={onSignIn}
              onSignOut={onSignOut}
              onSignUp={onSignUp}
            />
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
