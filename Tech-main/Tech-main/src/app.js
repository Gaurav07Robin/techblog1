"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./Home");
var Login_1 = require("./Login");
var AdminPanel_1 = require("./AdminPanel"); // Import Admin Panel
var App = function () {
    return (<react_router_dom_1.BrowserRouter>
            <div>
                {/* Navigation Bar */}
                <nav style={{
            display: "flex",
            gap: "20px",
            padding: "15px",
            background: "#007BFF",
            color: "white",
            justifyContent: "center"
        }}>
                    <react_router_dom_1.Link to="/" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Home</react_router_dom_1.Link>
                    <react_router_dom_1.Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Admin Login</react_router_dom_1.Link>
                </nav>

                {/* Routes */}
                <react_router_dom_1.Routes>
                    <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
                    <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
                    <react_router_dom_1.Route path="/admin" element={<AdminPanel_1.default />}/>
                </react_router_dom_1.Routes>
            </div>
        </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
