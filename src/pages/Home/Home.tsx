import { FC } from "react";
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setAuth } from "../../redux/slices/authSlice";

const Home: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const dispatch = useAppDispatch();


    return (
        <>
            <button onClick={() => { dispatch(setAuth("admin")) }}>Admin</button>
            {auth}
            <div>Home Page</div>
        </>
    )
}
export default Home;
