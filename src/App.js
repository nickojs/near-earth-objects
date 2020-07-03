import React from 'react';
import Theme from './Theme';
import Search from './components/search/search';

function App() {
  return (
    <Theme>
      <div style={{ width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
        <Search />
      </div>
    </Theme>
  );
}

export default App;
