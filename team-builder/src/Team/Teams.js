import React from "react";

const Teams = props => {
    return (
        <div className="team-list">
            {props.teams.map(team => (
                <div className="team" key={team.id}>
                    <h2>{team.title}</h2>
                    <p>{team.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Teams;