import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import NoPage from "./NoPage";

function App(){
    return(
        <>
        <BrowserRouter>
        <Routes>
           <Route path="login" element={<Login/>} />
           <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>} />   
                <Route path="*" element={<NoPage/>}/>
           </Route>
            
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;