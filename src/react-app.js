import './LoadDepencies';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { base_url } from './config';


export default function App() {

  const [categorias, setCategorias] = useState([]);

  function getCategorias() {
    axios.get(`${base_url}/categorias`)
      .then(response => setCategorias(response.data))

  }

  function deleteCategoria(id) {
    axios.delete(`${base_url}/categorias/${id}`)
      .then(response => getCategorias())
  }

  useEffect(getCategorias, []);


  return (
    <div className="container">
      <div className="row">
        <h1> Pagina de Categorias </h1>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th> Id </th>
              <th> Nome </th>
              <th> DataInsert </th>
              <th> DataUpdate </th>
              <th> Ações </th>
            </tr>
          </thead>
          <tbody>

            {
              categorias.map(item => (
                <tr key={item.id}>
                  <td> {item.id} </td>
                  <td> {item.categoria} </td>
                  <td> {item.createdAt} </td>
                  <td> {item.updatedAt} </td>
                  <td>
                    <button onClick={() => deleteCategoria(item.id)}>Excluir</button>
                  </td>

                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}