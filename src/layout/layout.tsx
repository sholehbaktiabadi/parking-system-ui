import React from "react";
import { Navbar } from "./navbar";
import { Drawer } from "./sidebar";

const Layout: React.FC<any> = ({ props }) => {
    return (
        <div>
        <header>
            { <Navbar/> }
        </header>
        <div>
            { <Drawer props={props}/> }
        </div>
        </div>
    )
}

export default Layout