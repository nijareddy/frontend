// import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserSubmissionForm from './components/UserSubmissionForm';
import AdminDashboard from './components/AdminDashboard';
import SocialMediaPostPage from './components/SocialMediaPostPage';

import './App.css';

     

function App() {
  // const [submissions, setSubmissions] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('');
  //       const data = await response.json();
  //       setSubmissions(data);
  //     } catch (error) {
  //       console.error('Error fetching submissions:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' element={<UserSubmissionForm/>}/>
        <Route exact path='/admin-dashboard' element={<AdminDashboard/>}/>
        <Route exact path='/social-media-page/:id' element={<SocialMediaPostPage/>}/>
       
      </Routes>
      </Router>
    </div>
  );
}

export default App;
 


