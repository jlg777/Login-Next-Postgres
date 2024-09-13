// app/page.tsx (o el archivo de tu nivel superior donde envuelves los componentes)
import React, { Suspense } from 'react';
import SuccessPage from '../ui/Success';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
}

export default App;
