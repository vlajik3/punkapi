import { HashRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Home from "./components/AppRouter";

function App() {

    return (
            <HashRouter>
                <Navbar />
                <Home />
            </HashRouter>
    );
}

export default App;
