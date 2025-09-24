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

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image'
import leftLogo from '../../../../public/NameWhite.png';
import logo from '../../../../public/Icon_logo_azul_dourado.png';
import styles from './styles.module.css'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import path from 'path';

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  //const trigger = useScrollTrigger({
  //  target: window ? window() : undefined,
  //});

  return (
    <Slide appear={false} direction="down" in={true}>
      {children ?? <div />}
    </Slide>
  );
}




export default function NavBar(props: Props) {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter()
  const pathname = usePathname()

  const pageNameToURL: { [pageName: string]: string; } = {
    "Projects": "/projects2",
    "Partners": "/partners",
    "About us": "/about-us",
  }

  const convertPageNameURL = (pageName: string) => {

    if (pageNameToURL[pageName] !== undefined) {
      return pageNameToURL[pageName]
    }
    return "/coming-soon"

  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const isUnderlined = (btnText: string) => {
    if (pathname === "/coming-soon") return 'none'
    if (pageNameToURL[btnText] === pathname) return 'underline'
    return 'none'
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={styles.navbar} >
          <Toolbar className={styles.toolbar}>
            <Box sx={{ flex: "1" }} className={styles.logosLeft}>
              <div onClick={() => window.location.replace("https://www.linkedin.com/company/taurus-space/")} style={{ cursor: 'pointer' }}>
                <LinkedInIcon sx={{ color: 'white', fontSize: { xs: 'medium', sm: '150%' } }} />
              </div>
              <div onClick={() => window.location.replace("https://www.instagram.com/taurusspaceprojects/")} style={{ cursor: 'pointer' }}>
                <InstagramIcon sx={{ color: 'white', fontSize: { xs: 'medium', sm: '150%' } }} />
              </div>
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
                    width: '25%',
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
            <Box sx={{ flex: "1", display: { md: 'none' } }}>
              <div className={styles.debug}>
                <IconButton
                  size="medium"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon style={{ color: 'white' }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                  }}
                  marginThreshold={0}
                  PaperProps={{
                    style: {
                      width: "100%",
                      maxWidth: "100%",
                      left: 0,
                      right: 0,
                      backgroundColor: 'black',
                    }
                  }}
                >
                  {Object.keys(pageNameToURL).map((page) => (
                    <Button
                      key={page}
                      sx={{ my: 2, margin: 'auto', width: '50%', color: 'white', display: 'block', textDecoration: isUnderlined(page) }}
                      onClick={() => router.push(convertPageNameURL(page))}
                    >
                      {page}
                    </Button>

                  ))}
                </Menu>
              </div>
            </Box>
            <Box sx={{ flex: "1", display: { xs: 'none', md: 'flex' }, gap: "3%", justifyContent: "flex-end" }}>
              {Object.keys(pageNameToURL).map((page) => (
                <Button
                  key={page}

                  sx={{ my: 2, color: 'white', display: 'block', textDecoration: isUnderlined(page) }}
                  onClick={() => router.push(convertPageNameURL(page))}
                >
                  {page}
                </Button>
              ))}
            </Box>



          </Toolbar>
        </AppBar>
      </HideOnScroll>

          <Toolbar/>
    </React.Fragment>
  );

}