import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }

    let message;
    if (email.length < 5) {
        message = 'Twój email jest za krótki!';
    } else if (email.length < 15) {
        message = 'Twój adres e-mail jest w sam raz.';
    } else {
        message = 'Twój adres e-mail jest stanowczo za długi.';
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <div>{message}</div>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" value={email} onChange={handleChange}/>
        </div>
    );
}

export default App;
