import React from "react"
import { Link, useParams } from "react-router-dom"
import './style.css'

export default function Navbar({userId}) {
    //const{id: userId} = useParams()
    return (
        <nav className="navbar">
            <Link to={`/${userId}`}className="nav--links link--myblog"><h1>📓My Blog</h1></Link>
            <ul>
                {!userId ? <Link to="/login" className="nav--links ul-link">Login</Link> : <Link to={`/profile/${userId}`} className="nav--links ul-link">Profile</Link>}
                
            </ul>
        </nav>
    )
}