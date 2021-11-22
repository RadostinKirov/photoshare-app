import { useState } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Photo/Create/Create';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Profile from './components/User/Profile/Profile';
import Details from './components/Photo/Details/Details';
import Footer from './components/Footer/Footer';
import Page404 from './components/Page404/Page404';


function App() {

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  }

  const [page, setPage] = useState('/home');

  const router = (path) => {
    let pathnames = path.split('/');
    console.log('pathnames -> ', pathnames)
    let rootPath = pathnames[1];
    let argument = pathnames[2];

    const routes = {
      'home': < Home navigationChangeHandler={navigationChangeHandler} />,
      'create': < Create />,
      'login': < Login />,
      'register': < Register />,
      'catalog': < Home navigationChangeHandler={navigationChangeHandler} />,
      'profile': < Profile />,
      'details': < Details id={argument}/>,
    }
    return routes[rootPath]
  }



  return (

    <div className="main-container">

      <Header navigationChangeHandler={navigationChangeHandler} />

      {router(page) || <Page404 />}

      <Footer />

    </div>

  );
}

export default App;
