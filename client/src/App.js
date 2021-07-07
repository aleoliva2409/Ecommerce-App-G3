import './styles/index.css';
import Routes from './routes/Routes';
import Navbar from './components/Navbar/Navbar';

const App = () => (
	<div className="container">
    <Navbar />
		<Routes />
	</div>
)

export default App;
