import { FC } from "react";
import { Link } from "react-router-dom";

const HeaderField: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/person">Person</Link>
                </li>
                <li>
                    <Link to="/test">Test</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/nothing-here">Nothing Here</Link>
                </li>
            </ul>
        </nav>

    )
}

export default HeaderField;
