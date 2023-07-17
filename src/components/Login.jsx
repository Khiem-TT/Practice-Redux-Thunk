import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fakeLogin} from '../redux/action.jsx';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const userLogined = useSelector(state => state.userLogined);
    const setValueForUser = (key, value) => {
        const newValue = {...user, [key]: value};
        setUser(newValue);
    }
    const login = () => {
        dispatch(fakeLogin(user));
    }
    useEffect(() => {
        if (userLogined.username) {
            navigate('/users');
        }
    }, [userLogined, navigate]);
    return (
        <form>
            <label>Username</label>
            <input type="text"
                   id='username'
                   onChange={e => setValueForUser('username', e.target.value)}
            />
            <label>Username</label>
            <input type="password"
                   id='password'
                   onChange={e => setValueForUser('password', e.target.value)}
            />
            <button
                type='button'
                onClick={() => {
                    login();
                }}
            >
                Login
            </button>
        </form>
    )
}

export default Login;