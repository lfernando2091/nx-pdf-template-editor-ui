import '@radix-ui/themes/styles.css';
import './index.css'
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Theme } from '@radix-ui/themes';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);
root.render(
  <Theme
      appearance="dark" 
      accentColor="jade" 
      grayColor="slate" 
      radius="small">
    <StrictMode>
      <App />
    </StrictMode>
  </Theme>
);
