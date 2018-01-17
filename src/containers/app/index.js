import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Item from '../item'
import Navigation from '../../components/Navigation'
import List from '../../components/List'
import Logo from '../../components/Logo'
import { Helmet } from 'react-helmet';


const App = () => (
  <div className="app">
      <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="AAA"
      >
          <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <header className="app-header">
        <Navigation className="main"
             wrp_class_name="main-nav-wrp"
             element_class_name="main-nav"
        >
            <Logo />
            <List wrp_class_name="main-list-wrp"
                element_class_name="main-list"
                >
                <Link to="/">הבית</Link>
                <Link to="/item">פריט</Link>
                <Link to="/about-us">אודות</Link>
            </List>
        </Navigation>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/item" component={Item} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
