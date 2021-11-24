import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Preloader from './components/Common/Preloader';
import MenuOverlay from './components/Common/MenuOverlay';
import MenuWrapper from './components/Common/MenuWrapper';
import Home from './components/Home/Home';
import Blog from './components/Catalogs/Blog/Blog';
import CreateArticle from './components/Forms/Create/CreateArticle'
import { Route, Switch } from 'react-router-dom';
import Register from './components/Forms/Authentication/Register/Register';
import Login from './components/Forms/Authentication/Login/Login';
import Diets from './components/Catalogs/Diets/Diets';

function App() {
  return (
    <div>
      <Preloader/>
      <MenuOverlay />
      <MenuWrapper />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/create-article" component={CreateArticle} />
        <Route path="/diets" component={Diets} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;