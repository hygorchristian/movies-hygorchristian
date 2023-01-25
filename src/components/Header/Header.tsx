'use client';

import Drawer from '@mui/material/Drawer';
import Button from 'components/Button';
import MenuItem from 'components/MenuItem';
import Separator from 'components/Separator';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import './styles.scss';

type HeaderProps = {
  //todo
};

function HeaderMobile(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(isOpen => !isOpen);

  return (
    <>
      <div id="header-mobile">
        <Button
          onClick={toggleMenu}
          rightComponent={<FiArrowRight size={24} />}
          sx={{
            bgcolor: '#fff',
            color: '#2AAD14',
            borderRadius: 100
          }}
        >
          menu
        </Button>
      </div>
      <Drawer open={menuOpen} onClose={toggleMenu}>
        <div id="menu">
          <div className="header">
            <Button
              onClick={toggleMenu}
              sx={{
                bgcolor: '#2AAD14',
                color: '#fff'
              }}
            >
              <FiArrowLeft size={24} />
            </Button>
          </div>
          <div className="content">
            <MenuItem label="Movies" path="/movies" onNavigate={toggleMenu} />
            <MenuItem label="TV Shows" path="/shows" onNavigate={toggleMenu} />
            <MenuItem label="Animes" path="/animes" onNavigate={toggleMenu} />
            <MenuItem
              label="My Recomendations"
              path="/recomendations"
              onNavigate={toggleMenu}
            />
            <Separator />
          </div>
        </div>
      </Drawer>
    </>
  );
}

function HeaderDesktop(): JSX.Element {
  return (
    <div id="header-desktop">
      <span>header </span>
    </div>
  );
}

export default function Header(props: HeaderProps = {}): JSX.Element {
  return (
    <header>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
