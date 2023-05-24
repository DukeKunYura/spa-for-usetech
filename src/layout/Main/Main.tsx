import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import Person from "../../pages/Person/Person";
import NoMatch from "../../pages/NoMatch/NoMatch";

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="person" element={<Person />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>

    )
}

export default Main;
