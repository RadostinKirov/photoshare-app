import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Create from './components/Photo/Create/Create';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Logout from './components/User/Logout/Logout';
import Details from './components/Photo/Details/Details';
import Edit from './components/Photo/Edit/Edit';
import Footer from './components/Footer/Footer';
import Profile from './components/User/Profile/Profile';
import Page404 from './components/Page404/Page404';

const initialAuthInfo = {
  username: '',
  id: '',
  token: ''
}

const initialPhotoInfo = {
  title: '',
  description: '',
  imageUrl: ''
}

function App() {

  const [userInfo, setUserInfo] = useLocalStorage('userInfo', initialAuthInfo);
  const [photoInfo, setPhotoInfo] = useState(initialPhotoInfo);
  const [allPhotos, setAllphotos] = useLocalStorage('allPhotos', [])
  const logout = () => {
    setUserInfo(initialAuthInfo);
  }

  const addPhotoInfo = (info) => {
    setPhotoInfo({
      title: info.title,
      description: info.description,
      imageUrl: info.imageUrl
    });
  }

  const addUserInfo = (info) => {
    console.log('received info in App -> ', info)
    setUserInfo({
      username: info.userInfo.username,
      id: info.userInfo._id,
      token: info.token
    });
  }

  const addAllPhotosInfo = (info) => {
    setAllphotos(info);
  }


  return (

    <div className="main-container">

      <AuthContext.Provider value={{
        userInfo, addUserInfo,
        photoInfo, addPhotoInfo,
        allPhotos, addAllPhotosInfo,
        logout
      }}>
       
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="logout" element={<Logout />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

        <Footer />
      </AuthContext.Provider>
    </div>

  );
}

export default App;
