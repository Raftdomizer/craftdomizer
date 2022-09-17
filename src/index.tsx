import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import App from './components/App';
import store from "./redux/store";

const container = document.getElementById("app") as Element;
const root = createRoot(container);

root.render(
<ReduxProvider store={store}>
    <App />
</ReduxProvider>
);
