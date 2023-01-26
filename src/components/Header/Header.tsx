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

type HeaderRoute = {
  path: `/${string}`;
  label: string;
};

const routes: HeaderRoute[] = [
  {
    label: 'Movies',
    path: '/movies'
  },
  {
    label: 'TV Shows',
    path: '/shows'
  },
  {
    label: 'Animes',
    path: '/animes'
  },
  {
    label: 'Recomendations',
    path: '/recomendations'
  }
];

export default function Header(props: HeaderProps = {}): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(isOpen => !isOpen);

  return (
    <header>
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
            {routes.map(({ path, label }) => (
              <MenuItem
                key={path}
                label={label}
                path={path}
                onNavigate={toggleMenu}
              />
            ))}
            <Separator />
          </div>
        </div>
      </Drawer>
      <div id="header-desktop">
        <nav>
          {routes.map(({ path, label }) => (
            <MenuItem key={path} label={label} path={path} variant="vertical" />
          ))}
        </nav>
      </div>
    </header>
  );
}
