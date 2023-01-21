'use client';

import Drawer from '@mui/material/Drawer';
import Button from 'components/Button';
import SafeClientComponent from 'components/SafeClientComponent';
import { useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
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
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  if (isMobile)
    return (
      <SafeClientComponent>
        <HeaderMobile />
      </SafeClientComponent>
    );

  return (
    <SafeClientComponent>
      <HeaderDesktop />
    </SafeClientComponent>
  );
}
