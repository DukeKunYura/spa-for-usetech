import { FC } from "react";
import { Outlet } from "react-router-dom";
import HeaderField from "../Header/HeaderField";
import FooterField from "../Footer/FooterField";


const LayoutField: FC = () => {

    return (
        <>
            <HeaderField />
            <Outlet />
            <FooterField />

        </>



    )
}
export default LayoutField;

