import React, {useState} from "react";

const TeamForm = props => {
    console.log("Props", props);
    const [team, setTeam] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        console.log(team);
        setTeam({...team, [e.target.name]: e.target.value});
    };

    const submitForm = e => {
        e.preventDefault();

        if(team.name.length === 0 || team.email.length === 0 || team.role.length === 0){
            alert("Fill in all boxes");
        }

        else{
            props.addNewTeam(team);
            setTeam({name: "", email: "", role: ""});
        }

        
    };
    
    return(
        <form onSubmit={submitForm} style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Name" onChange={handleChanges} value={team.name}/>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="email" placeholder="Email" onChange={handleChanges} value={team.email}/>
            <label htmlFor="role">Role</label>
            <input id="role" type="text" name="role" placeholder="Role" onChange={handleChanges} value={team.role} />
            <button type="submit">Add Team</button>
        </form>
    ); 
};

export default TeamForm;