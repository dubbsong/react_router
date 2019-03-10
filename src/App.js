import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/about/:name" component={About} />
    </div>
  )
}

export default App;