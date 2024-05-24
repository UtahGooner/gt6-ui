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
if (!window.gt6Params) {
    window.gt6Params = {};
}

try {
    if (dataElement && !window.gt6Params.user && !!dataElement.dataset.gt6UserName) {
        window.gt6Params.user = JSON.parse(dataElement.dataset.gt6UserName);
    }
} catch(err:unknown) {
}
const root = createRoot(document.getElementById('gt6-app')!);
root.render(<GutenTag />);
