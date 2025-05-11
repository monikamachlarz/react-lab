import MeetingsPage from "./meetings/MeetingPage";


export function UserPanel(props) {

    return (
        <div>
            <h2>Witaj {props.username}</h2>
            <button onClick={() => props.onLogout()}> Wyloguj</button>
            <MeetingsPage/>
        </div>
    )
}