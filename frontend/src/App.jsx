import './App.css'
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/LoginPage'
import {SignUpPage} from './pages/SignUpPage'
import { Dashboard } from './pages/Dashboard'
import {ProfilePage} from './pages/ProfilePage'
import { AddBlog } from './pages/AddBlog'
import { AuthProvider, AuthContext } from './contexts/AuthContext'

function App() {

  const PrivateRoute = ({ children }) => {
  const { token } = React.useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};
  

  return (
  <AuthProvider>
     <Router>
     <Routes>
      <Route path='/' element={<LoginPage/>} />
      <Route path='/create' element={<SignUpPage/>} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
       <Route path='/blog-create' element={<AddBlog />}/>
     </Routes>
   </Router>
  </AuthProvider>
  
  )
}

export default App
