import {Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component'
import SignIn from './routes/sign-in/sign-in.component'

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="*" element={<div>Error kocak</div>} />
    </Routes>
  );
}

export default App;
