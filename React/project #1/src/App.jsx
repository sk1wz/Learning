/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatPage from './pages/ChatPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import './assets/App.scss'
import Notification from './components/Notification';
import AddUser from './components/AddUser';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';
import Loader from './components/Loader';


function App() {

  const {currentUser,isLoading,fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth,(user) =>{
      fetchUserInfo(user?.uid)
      return () => {
        unSub();
      }
    })
  }, [fetchUserInfo])


  if(isLoading) return <Loader />
  return (
    <div className="App">
      
        { currentUser ? (
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="*" element={  <NotFoundPage />}></Route>
              <Route path="/chats" element={<ChatPage />}></Route>
            </Routes>
          </div>


        ) : (
          <LoginPage />
        )}
       <Notification/>
       <AddUser />
      
    </div>
  );
}

export default App;
