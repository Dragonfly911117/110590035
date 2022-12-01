import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import MySidebar from "./components/mySidebar";
import MyMain from "./components/main";

function App() {
    return (
        <div className="App">
            <Title/>
            <MySidebar/>
            <MyMain/>
            {/*<header className="App-header">*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <p>*/}
            {/*        Hello class!*/}
            {/*    </p>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;