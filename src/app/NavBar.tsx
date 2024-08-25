'use client'

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Image from 'next/image'
import logo from '../../public/NameBlack.png'
import styles from './styles.module.css'

import { useRouter } from 'next/navigation'
import { PaddingOutlined } from '@mui/icons-material';
import { red } from '@mui/material/colors';

const pages = ['About us', 'News', 'Sponsors', 'Projects', 'Contacts'];

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter()

  const convertPageNameURL = (pageName: string) => {
    switch (true) {
      case pageName.includes('News'):
        return "/news";
      case pageName.includes('Projects'):
        return "/projects";
      default:
        return "/news"

    }
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return <AppBar position="static" className={styles.navbar} >
    <Container disableGutters maxWidth="xl" >
      <Toolbar disableGutters>
        <Image
          src={logo}
          style={{
            width: '10%',
            height: 'auto',
            marginRight: '3%',
            marginLeft: '1%',
            cursor: 'pointer'
          }}
          //width={100}
          //height={50}
          alt="Taurus Space logo"

              onClick={() => router.push("/")}
        />

          {/* When is on a phone */}
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  justifyContent: 'flex-end' }}>
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

        </Box>

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
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'black', display: 'block' }}
              onClick={() => router.push(convertPageNameURL(page))}
            >
              {page}
            </Button>

          ))}
        </Menu>
          {/* When is on a computer */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{ my: 2, color: 'black', display: 'block' }}
              onClick={() => router.push(convertPageNameURL(page))}
            >
              {page}
            </Button>
          ))}
        </Box>

      </Toolbar>
    </Container>
  </AppBar>;
}