import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Photo/Create/Create';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Profile from './components/User/Profile/Profile';
import Details from './components/Photo/Details/Details';
import Footer from './components/Footer/Footer';


function App() {
  return (
  
<body>
    <div className="main-container">

    <Header /> 

    <Home />    

    <Create />    

    <Login />    

    <Register />    

    <Profile />    

    <Details />

    <Footer />
    
    </div>
</body>
  );
}

export default App;
