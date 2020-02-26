import React, { useState } from "react";
import ReactDOM from "react-dom";
import Teams from "./Team/Teams";
import TeamForm from "./Team/TeamForm"

function App() {
    const [teams, setTeams] = useState([{
        id: 1,
        name: "Tyler Kummer",
        email: "tylerkummer96@gmail.com",
        role: "Student"
    }]);

    const addNewTeam = team => {
        const newTeam = {
            id: Date.now(),
            name: team.name,
            email: team.email,
            role: team.role
        };
        setTeams([...teams, newTeam]);
    }

    return (
        <div className="App" style={{width: "25%", margin: "0 auto"}}>
            <h1>My Team</h1>
            <TeamForm addNewTeam={addNewTeam}/>
            <Teams teams={teams} />
        </div>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);