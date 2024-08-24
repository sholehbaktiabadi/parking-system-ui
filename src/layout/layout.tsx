import React from "react";
import { Navbar } from "./navbar";
import { Drawer } from "./sidebar";

const Layout: React.FC<any> = ({ props }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
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