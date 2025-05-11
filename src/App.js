import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import {LoginForm} from "./LoginForm";
import {UserPanel} from "./UserPanel";
import NewMeetingForm from "./meetings/NewMeetingForm";

function App() {

    const [loggedInAs, setLoggedInAs] = useState(null);

    function login(email) {
        if (email) {
            setLoggedInAs(email);
        }
    }

    function logout() {
        setLoggedInAs(false);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {
                loggedInAs
                    ? <UserPanel username={loggedInAs} onLogout={logout}/>
                    : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
