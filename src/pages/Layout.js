import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();

    const checkIsLogin = () =>{
        let token = localStorage.getItem("token");
        if(token == null || token == undefined){
            navigate("/login");
        }
    }

    checkIsLogin();

    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
        </>
    )
}

export default Layout;