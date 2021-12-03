import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import useLocalStorage from './useLocalStorage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Photo/Create/Create';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Details from './components/Photo/Details/Details';
import Edit from './components/Photo/Edit/Edit';
import Footer from './components/Footer/Footer';
import Profile from './components/User/Profile/Profile';
import Page404 from './components/Page404/Page404';


function App() {

  const [userInfo, setUserInfo] = useLocalStorage('userInfo' ,{
    username: 'dummy name',
    id: '',
    token: ''
  })
  console.log('userInfo in App -> ', userInfo);

  const addInfo = (info) => {
    console.log('received info in App -> ', info)
    setUserInfo({
      username: info.userInfo.username,
      id: info.userInfo._id,
      token: info.token
    });
  }

  return (

    <div className="main-container">

      <AuthContext.Provider value={{ addInfo, userInfo }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </div>

  );
}

export default App;
