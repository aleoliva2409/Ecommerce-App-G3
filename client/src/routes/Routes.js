import { Switch, Route } from "react-router-dom";
import CataloguePage from "../views/CataloguePage";
import SearchPage from "../views/SearchPage";
import ProductPage from "../views/ProductPage";
import HomePage from "../views/HomePage";
import CartPage from "../views/CartPage";
import DashboardPage from "../views/DashboardPage";
import Me from "../views/Me"
import PasswordReset from "../views/PasswordReset";
import LoginPage from "../views/LoginPage";
import WishlistByUser from "../components/wishlistByUser/WishlistByUser";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/products/search" component={SearchPage} />
    <Route exact path="/products" component={CataloguePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route path="/products/:id" component={ProductPage} />
    <Route path="/admin/dashboard" component={DashboardPage} />
    <Route path="/users/me" component={Me} />
    <Route exact path="/users/password-reset" component={PasswordReset} />
    <Route exact path="/review" component={LoginPage} />
    <Route exact path="/render" component={WishlistByUser} />
  </Switch>
);

export default Routes;
