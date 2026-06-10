import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme, type CSSVariablesResolver } from "@mantine/core";
import App from './App.tsx'

const theme = createTheme({
  headings: { fontFamily: "Outfit, sans-serif" },
});

const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: { "--mantine-color-body": "#F8F8F6" },
  dark: {},
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver} defaultColorScheme="auto">
      <App />
    </MantineProvider>
  </StrictMode>,
)
