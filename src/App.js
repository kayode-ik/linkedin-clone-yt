import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    auth.onAuthStateChanged(userAuth => {

      if (userAuth) {
        //user is logged in 
        dispatch (login ({

          email:userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}

      {!user ? (
        <Login />
      ) : (
        
      <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
            <Feed />
          {/* Widgets */}
          <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
