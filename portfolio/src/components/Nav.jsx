import { Link } from "react-router-dom";

export default function Nav(){

    return (
        <div className="">
            <div>
                <nav className="">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/experience">Experience</Link></div>
                    <div><Link to="/projects">projects</Link></div>
                    <div><Link to="/contact">Contact</Link></div>
                </nav>
            </div>
        </div>
    )
}