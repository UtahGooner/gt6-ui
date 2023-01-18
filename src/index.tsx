import React from 'react';
import { createRoot } from 'react-dom/client';
import GutenTag from "./components/GutenTag";
import {GT6Params} from "./types";

declare global {
    interface Window {
        gt6Params?: GT6Params,
    }
}


const dataElement = document.querySelector('#app-user') as HTMLDivElement;
window.gt6Params = {};
try {
    if (dataElement && dataElement.dataset.user) {
        window.gt6Params = JSON.parse(dataElement.dataset.user ?? '{}');
    }
} catch(err:unknown) {
}
const root = createRoot(document.getElementById('app')!);
root.render(<GutenTag />);
