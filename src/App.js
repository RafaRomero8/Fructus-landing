import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));

const About = React.lazy(() => import("./components/pages/About"));

const TermsandConditions = React.lazy(() => import("./components/pages/TermsandConditions"));

const PersonalData = React.lazy(() => import("./components/pages/PersonalData"));


const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})

function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/TermsandConditions" component={TermsandConditions} />
          <Route path="/PersonalData" component={PersonalData} />
         
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
