import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Photo/Create/Create';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Profile from './components/User/Profile/Profile';
import Details from './components/Photo/Details/Details';
import Edit from './components/Photo/Edit/Edit';
import Footer from './components/Footer/Footer';
import Page404 from './components/Page404/Page404';


function App() {

  // const navigationChangeHandler = (path) => {
  //   console.log(path);
  //   setPage(path);
  // }

  // const [page, setPage] = useState('/home');

  // const router = (path) => {
  //   let pathnames = path.split('/');
  //   let rootPath = pathnames[1];
  //   let argument = pathnames[2];

  //   const routes = {
  //     'home': < Home navigationChangeHandler={navigationChangeHandler} />,
  //     'create': < Create />,
  //     'login': < Login />,
  //     'register': < Register />,
  //     'catalog': < Home navigationChangeHandler={navigationChangeHandler} />,
  //     'profile': < Profile />,
  //     'details': < Details id={argument}/>,
  //     'edit': < Edit id={argument} />,
  //   }


  //   return routes[rootPath]
  // }



  return (

    <div className="main-container">

      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="create" element={<Create/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="details/:id" element={<Details/>} />

        </Routes>

      <Footer />

    </div>

  );
}

export default App;
