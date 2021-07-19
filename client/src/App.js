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
      location.pathname === "/admin/dashboard" ||
      location.pathname === "/admin"
      ?
      <></>:
      <Navbar />
    }
		<Routes />
	</div>
  )
}

export default App;
