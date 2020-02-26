import React, { useState } from "react";
import ReactDOM from "react-dom";
import Teams from "./Team/Teams";
import TeamForm from "./Team/TeamForm"

function App() {
    const [teams, setTeams] = useState([{
        id: 1,
        title: "Team Member 1",
        body: "Default place holder text"
    }]);

    const addNewTeam = team => {
        const newTeam = {
            id: Date.now(),
            title: team.title,
            body: team.body
        };
        setTeams([...teams, newTeam]);
    }

    return (
        <div className="App">
            <h1>My Team</h1>
            <TeamForm addNewTeam={addNewTeam}/>
            <Teams teams={teams} />
        </div>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);