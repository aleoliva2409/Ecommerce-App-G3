import { Switch, Route } from "react-router-dom";
import CataloguePage from "../views/CataloguePage";
import SearchPage from "../views/SearchPage";
import ProductPage from "../views/ProductPage";
import Categories from '../components/Categories/CategoriesOptions/CategoriesOptions';
import HomePage from "../views/HomePage";
import CartPage from "../views/CartPage";
import Admin from "../views/Admin";
import DashboardPage from "../views/DashboardPage";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products/search" component={SearchPage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route exact path="/products" component={CataloguePage} />
    <Route path="/categories" component={Categories} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route exact path="/cart" component={CartPage} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Routes;
