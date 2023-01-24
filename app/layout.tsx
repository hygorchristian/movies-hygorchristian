'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import 'styles/global.scss';
import { darkTheme } from 'styles/theme';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
