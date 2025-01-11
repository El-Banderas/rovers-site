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
import Typography from "@mui/material/Typography";

import Image from 'next/image'
import logo from '../../../../public/NameBlack.png';
import leftLogo from '../../../../public/Icon_logo_branco_preto.png';
import styles from './styles.module.css'


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
        return "/coming-soon";
      case pageName.includes('About us'):
        return "/about-us";
      default:
        return "/coming-soon"

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
        <AppBar className={styles.navbar} color="transparent" sx={{ backdropFilter: "blur(3px)" }}>
          <Toolbar className={styles.toolbar}>
            <Box sx={{ flex: "1" }}>
              
              <Image
                src={logo}
                alt="Taurus Space Logo"
                

      className={styles.logoLeft}          

                onClick={() => router.push("/")}
              />
            </Box>
            <Box
              sx={{
                flex: "1",
              }}
              
            >
              <div className={styles.logoMiddle}>
              <Image
                src={leftLogo}
                style={{
                  width: '20%',
                  height: 'auto',
                  cursor: 'pointer',
                }}
                //width={100}
                //height={50}
                alt="Taurus Space logo"

                onClick={() => router.push("/")}
              />
</div>

                              </Box>
<Box sx={{ flex: "1",  display: {  md: 'none' }}}>
              <div className={styles.debug}>
   <IconButton
            size="medium"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon style={{ color: 'white' }}/>
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
        </div>
            </Box>
              <Box sx={{ flex: "1", display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ my: 2, color: 'white', display: 'block' }}
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