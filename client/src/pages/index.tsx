import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Track from './track';
import Tracks from './tracks';
import Module from './module';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Tracks />} path='/' />
        <Route element={<Track />} path='/track/:trackId' />
        <Route element={<Module />} path='/track/:trackId/module/:moduleId' />
      </Routes>
    </BrowserRouter>
  );
}
