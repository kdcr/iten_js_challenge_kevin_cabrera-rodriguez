import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/layout/App';

import './index.css';
import './i18n';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App theme="light">IteNlearning-Challenge</App>);
