
import React, {useEffect} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import StudentList from './componets/StudentList';

function App() {
  useEffect(() => {
    document.title = 'Enrollment System';
  });
  return (
    <div className="container">
      <StudentList/>
    </div>
  );
}

export default App;
