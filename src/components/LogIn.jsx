import { BroeserRouter as Router, Routes, Route} from 'react-router-dom';
import { SignIn,SignUp } from '@clerk/clerk-react';
import { LogIn } from 'lucide-react';

function logIn() {
  return (
    <Router>
        <Routes>
            <Route path="logIn" element={<LogIn/>}/>
            <Route path="signup" element={<SignUp/>}/>
        </Routes>
    </Router>
  )
}

export default logIn