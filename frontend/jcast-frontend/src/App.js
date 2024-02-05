import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layouts/Header';
// Other imports

function App() {
  return (
    <Router>
      <Header />
      {/* Other components like Routes */}
    </Router>
  );
}

export default App;