import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/home/index';
import ApartmentRegister from './pages/apartment/register';
import BuildingRegister from './pages/building/register';
import BuildingList from './pages/building/list';
import PersonRegister from './pages/person/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Instalações do Biopark</h1>
          <Link to="/">Home</Link>
          <Link to="/building/list">Instalações</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/apartment/register">
            <ApartmentRegister />
          </Route>
          <Route path="/building/register">
            <BuildingRegister />
          </Route>
          <Route path="/building/list">
            <BuildingList />
          </Route>
          <Route path="/person/register">
            <PersonRegister />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App