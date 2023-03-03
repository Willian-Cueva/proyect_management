import React from 'react'
import img from "../assets/img/unl_0.png"

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Trabajo Final de Software <br /> Engeneering Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                    </div>
                </div>
            </nav>
        </header>
    )
}
