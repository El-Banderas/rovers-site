'use client'
import * as React from 'react';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import Image from 'next/image'
import logo from '../../public/NameBlack.png'
import styles from '@/app/styles.module.css'

import { useRouter } from 'next/navigation'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

const pages = ['About us', 'News', 'Sponsors', 'Projects', 'Contacts'];

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,

  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}




export default function NavBar(props: Props) {

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

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={styles.navbar} >
          <Toolbar>
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
        </AppBar>
      </HideOnScroll>
      
    </React.Fragment>
  );

}