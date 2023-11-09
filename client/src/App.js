import { Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserDashboard from './components/UserDashboard';
import CourseDetailsPage from './components/CourseDetailsPage';
import Header from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Courses/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='user-dashboard' element={<UserDashboard/>}/>
      <Route path='/course/:id' element={<CourseDetailsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
