import './styles/index.css';
import Routes from './routes/Routes';
import Navbar from './components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();

	return (
    <div className="container">
    {
      location.pathname === "/admin/dashboard/products" ||
      location.pathname === "/admin/dashboard/orders" ||
      location.pathname === "/admin/dashboard/categories" ||
      location.pathname === "/admin/dashboard/promote" ||
      location.pathname === "/admin/dashboard" ||
      location.pathname === "/admin" ||
      location.pathname === "/users/me/products" ||
      location.pathname === "/users/me/orders" ||
      location.pathname === "/users/me/categories" ||
      location.pathname === "/users/me/promote" ||
      location.pathname === "/users/me" ||
      location.pathname === "/users"
      ?
      <></> :
      <Navbar />
    }
		<Routes />
	</div>
  )
}

export default App;
