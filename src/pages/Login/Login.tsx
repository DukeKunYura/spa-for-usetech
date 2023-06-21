import { FC } from "react";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setAuth } from "../../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const Login: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();

    const fromPage = location.state?.from?.pathname || '/';

    const handleLogin = () => {
        navigate(fromPage);
    };


    return (
        <>
            <button onClick={() => { dispatch(setAuth("admin")) }}>Admin</button>
            <button onClick={() => { dispatch(setAuth("guest")) }}>Guest</button>
            <button onClick={handleLogin}>Login</button>
            <div>Login Page</div>
        </>
    )
}
export default Login;


