import React, { useState } from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const Home = (props) => {
    const [menu, setMenu] = useState("");

    return (
        <div className="h-full w-full bg-gray-100 grid grid-cols-6">
            <div>
                <Leftbar setMenu={setMenu} />
            </div>
            <div className="col-span-3">
                <Rightbar search={props?.search} menu={menu} />
            </div>
        </div>
    );
};

export default Home;
