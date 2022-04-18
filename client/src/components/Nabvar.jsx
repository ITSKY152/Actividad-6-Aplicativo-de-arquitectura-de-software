import React, { useState } from 'react'

function nabvar({ GetUsersByEmail }) {
    const [id, setid] = useState("")

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-danger">
                <a className="navbar-brand" href="#">Actividad 6</a>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Lista de Notas <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="modal" data-target="#staticBackdrop">Crear Nota</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="INGRESA UN ID" aria-label="Search" value={id} onChange={(e) => setid(e.target.value)} />
                    <button class="btn btn-success my-2 my-sm-0" type="button" onClick={() => GetUsersByEmail(id)}>BUSCAR NOTA</button>
                </form>
            </nav>
        </div>
    )
}

export default nabvar