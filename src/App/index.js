import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*Componente App*/
function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
