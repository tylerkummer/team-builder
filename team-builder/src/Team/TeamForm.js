import React, {useState} from "react";

const TeamForm = props => {
    console.log("Props", props);
    const [team, setTeam] = useState({
        title: "",
        body: ""
    });

    const handleChanges = e => {
        console.log(team);
        setTeam({...team, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeam(team);
        setTeam({title: "", body: ""});
    };
    
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input id="title" type="text" name="title" onChange={handleChanges} value={team.title}/>
            <label htmlFor="team">Team</label>
            <textarea id="team" name="body" onChange={handleChanges} value={team.body}/>
            <button type="submit">Add Team</button>
        </form>
    ); 
};

export default TeamForm;