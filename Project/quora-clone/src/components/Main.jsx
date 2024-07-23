import Home from "./Home";
import Navbar from "./Navbar";
import { useState } from "react";

const Main = () => {
    const [search, setSearch] = useState("");

    return (
        <>
            <div className="h-full w-full">
                <Navbar setSearch={setSearch} />
                <Home search={search} />
            </div>
        </>
    );
};

export default Main;
