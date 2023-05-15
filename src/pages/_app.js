import '@/styles/globals.css';
import { Provider } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import { DndProvider } from 'react-dnd';
import { TouchBackend } from 'react-dnd-touch-backend';
import { store } from '@/store';
import { Fragment } from 'react';
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <DndProvider backend={TouchBackend}>
          <Component {...pageProps} />
          <Toaster />
        </DndProvider>
      </Provider>
    </Fragment>
  );
}
