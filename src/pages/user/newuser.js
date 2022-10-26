import { Component } from "react";
class NewUser extends Component {
    render(){
        return (
            <div>
                <p>
                    New User registration
                </p>
                <form>
                    <label>First Name</label>
                    <input type="text" name="first_name"></input><br />
                    <label>Last Name</label>
                    <input type="text" name="last_name"></input><br />
                    <label>Phone</label>
                    <input type="text" name="phone[]"></input><br />
                    <label>Mobile</label>
                    <input type="text" name="mobile[]"></input><br />
                    <label>Email</label>
                    <input type="text" name="email"></input><br />
                    <label>Country</label>
                    <select>
                        <option>India</option>
                        <option>Nepal</option>
                    </select><br />
                    <label>State</label>
                    <select>
                        <option>West Bengal</option>
                        <option>Bihar</option>
                    </select><br />
                    <label>City</label>
                    <select>
                        <option>Kolkata</option>
                        <option>Hooghly</option>
                    </select><br />
                    <label>Address Line 1</label>
                    <input type="text" name="add1"></input><br />
                    <label>Address Line 2</label>
                    <input type="text" name="add2"></input><br />
                    <label>Address Line 3</label>
                    <input type="text" name="add3"></input><br />
                    <input type="button" value="Submit"></input>
                </form>
            </div>
        );
    };
}

export default NewUser;