import { Switch, Route } from "react-router-dom";
import CataloguePage from "../views/CataloguePage";
import SearchPage from "../views/SearchPage";
import ProductPage from "../views/ProductPage";
import Categories from '../components/Categories/CategoriesOptions/CategoriesOptions';
import HomePage from "../views/HomePage";
import Admin from "../views/Admin";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products/search" component={SearchPage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/admin" component={Admin} />
    <Route path="/categories" component={Categories} />
  </Switch>
);

export default Routes;
