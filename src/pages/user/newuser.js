import { Component } from "react";
import NewUserForm from "./newuserForm";

class NewUser extends Component {
    render(){
        return (
            <div>
                <p>
                    New User registration
                </p>
                <NewUserForm />
            </div>
        );
    };
}

export default NewUser;