import React from 'react'

function ListUsers({ usuarios, updateUser, deleteUser }) {
    return (
        <div className="container">
            <div className="row">
                {
                    usuarios.map((usuario, i) => (
                        <div key={i} className="col-12 col-md-4 my-3">
                            <div className="card" >
                                <div className="card-body text-center">
                                    <h5 className="card-title">{usuario.titulo}</h5>
                                    <p className="card-text">{usuario.descripcion}</p>
                                    <div class="form-group">
                                        <label>Fecha Inicio</label>
                                        <input class="form-control" type="date" value={usuario.FechaInicio} disabled />
                                    </div>
                                    <div class="form-group">
                                        <label>Fecha Fin</label>
                                        <input class="form-control" type="date" value={usuario.FechaFin} disabled />
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">
                                            <button
                                                className='btn btn-primary'
                                                onClick={() => updateUser(usuario)}
                                                data-toggle="modal"
                                                data-target="#staticBackdrop"
                                            >EDITAR</button>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                className='btn btn-danger'
                                                onClick={() => deleteUser(usuario)}
                                            >DETETE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
}

export default ListUsers