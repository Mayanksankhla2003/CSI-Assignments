import "./App.css";
import Signup from "./components/Signup";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Answers from "./components/Answers";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/main" element={<Main />} />
                <Route path="/answers" element={<Answers />} />
            </Routes>
        </>
    );
}

export default App;
