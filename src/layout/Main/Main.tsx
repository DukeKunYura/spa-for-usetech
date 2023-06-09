import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Person from "../../pages/Person/Person";
import NoMatch from "../../pages/NoMatch/NoMatch";
import TestSkip from "../../pages/TestSkip/TestSkip";
import Privat from "../../hoc/Privat";
import Login from "../../pages/Login/Login";

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="person" element={<Person />} />
                <Route path="test" element={
                    <Privat>
                        <TestSkip />
                    </Privat>
                } />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>

    )
}

export default Main;
