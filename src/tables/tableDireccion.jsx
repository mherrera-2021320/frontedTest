import React from 'react'

const tableDireccion = () => {
  return (
    <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Codigo</th>
                            <th scope="col">Numero de Casa</th>
                            <th scope="col">Calle</th>
                            <th scope="col">Ciudad</th>
                            <th scope="col">Codigo Postal</th>
                            <th scope='col'>Colonia</th>
                            <th scope='col'>Departamento</th>
                            <th scope='col'>Municipio</th>
                            <th scope='col'>Estado Actual</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>




            </div>

        </>
  )
}

export default tableDireccion