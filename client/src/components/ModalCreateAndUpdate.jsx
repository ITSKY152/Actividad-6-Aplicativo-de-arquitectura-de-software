import React, { useState } from 'react'

const FormValues = {
    titulo: '',
    descripcion: '',
    FechaInicio: '',
    FechaFin: ''
}

function ModalCreateAndUpdate({ GetUsers, isupdate, formdata, setformdata, setisupdate }) {

    const [form, setform] = useState(FormValues)

    console.log(form)


    const Submit = (e) => {
        e.preventDefault()
        if (isupdate) {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formdata)
            };
            fetch(`http://localhost:4000/notas/${formdata.id}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log({ message: "correcto", data })
                    alert("usuario Actualizado correctamente")
                    setform(FormValues)
                    GetUsers()
                });
        }
        else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            };
            fetch('http://localhost:4000/notas', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log({ message: "correcto", data })
                    alert("usuario agregado correctamente puedes cerrar esta ventana o crear otro")
                    setform(FormValues)
                    GetUsers()
                });
        }
    }

    const onFormControlChange = (event) => {
        const { name, value } = event.target
        if (isupdate) {
            setformdata({ ...formdata, [name]: value })
        }
        else {
            setform({ ...form, [name]: value });
        }
    }

    return (
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
                            setform({ titulo: "", descripcion: "", FechaFin: "",FechaInicio: "" })
                            setisupdate(false)
                        }}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={Submit}>
                            {
                                isupdate
                                    ?
                                    <>
                                        <div className="form-group">
                                            <label >Titulo</label>
                                            <input type="text" className="form-control" name='titulo' required={true} onChange={onFormControlChange} value={formdata.titulo} />
                                        </div>
                                        <div className="form-group">
                                            <label >Descipcion</label>
                                            <textarea class="form-control" name='descripcion' required={true} onChange={onFormControlChange} value={formdata.descripcion} rows="5"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha Inicio</label>
                                            <input class="form-control" type="date" required={true} onChange={onFormControlChange} value={formdata.FechaInicio} />
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha Fin</label>
                                            <input class="form-control" type="date" required={true} onChange={onFormControlChange} value={formdata.FechaFin} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => {
                                                setform({ email: "", first_name: "", last_name: "" })
                                                setisupdate(false)
                                            }} data-dismiss="modal">Cerrar</button>
                                            <button type="submit" className="btn btn-primary">{isupdate ? 'Actualizar' : 'Guardar'}</button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="form-group">
                                            <label >Titulo</label>
                                            <input type="text" className="form-control" name='titulo' required={true} onChange={onFormControlChange} value={form.titulo} />
                                        </div>
                                        <div className="form-group">
                                            <label >Descipcion</label>
                                            <textarea class="form-control" name='descripcion' required={true} onChange={onFormControlChange} value={form.descripcion} rows="5"></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha Inicio</label>
                                            <input class="form-control" type="date" required={true} name="FechaInicio" onChange={onFormControlChange} value={form.FechaInicio} />
                                        </div>
                                        <div className="form-group">
                                            <label>Fecha Fin</label>
                                            <input class="form-control" type="date" required={true} name="FechaFin" onChange={onFormControlChange} value={form.FechaFin} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => {
                                                setform({ titulo: "", descripcion: "", FechaFin: "",FechaInicio: "" })
                                                setisupdate(false)
                                            }} data-dismiss="modal">Cerrar</button>
                                            <button type="submit" className="btn btn-primary">{isupdate ? 'Actualizar' : 'Guardar'}</button>
                                        </div>
                                    </>
                            }

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalCreateAndUpdate