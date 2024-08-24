import React from "react";
import { Navbar } from "./navbar";
import { Drawer } from "./sidebar";

const Layout: React.FC<any> = ({ props }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
        <header>
            { <Navbar/> }
        </header>
        <body>
            { <Drawer props={props}/> }
        </body>
        </div>
    )
}

export default Layout