import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.jsx";
import User from "./components/User.jsx";
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/users' element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App;