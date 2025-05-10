import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('');
    const [loggedInAs, setLoggedInAs] = useState(null);

    function handleChange(event) {
        setEmail(event.target.value);
    }

    function changeStatus() {
        if (loggedInAs){
            setLoggedInAs(null);
            setEmail('');
        }
        else {
            setLoggedInAs(email)
        }
    }

    let content;
    if (loggedInAs) {
        content = <div>
            <h2>Witaj {loggedInAs}</h2>
            <a onClick={changeStatus}> Wyloguj</a>
        </div>
    }
    else {
        content = <div>Zaloguj się e-mailem
            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={() => setLoggedInAs(email)}>
                Wchodzę
            </button>
        </div>
    }

    return (

        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {content}
        </div>
    );
}

export default App;
