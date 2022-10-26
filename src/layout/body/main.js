import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NewUser from "../../pages/user/newuser";
import Home from "../../pages/home/home"
class MainBody extends Component {
    render() {
        return (
            <div className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/new" element={<NewUser />} />
                </Routes>
            </div>
        );
    }
}

export default MainBody;