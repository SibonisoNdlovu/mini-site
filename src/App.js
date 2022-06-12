import React  from 'react';

import { useState, useEffect } from 'react'
import './styles.css'

import { Table } from './Pages/Table/index'

export default function App() {
  const [rows, setRows] = useState({})

  const columns = [
    { accessor: 'first_name', label: 'First Name' },
    { accessor: 'last_name', label: 'Last Name' },
    { accessor: 'date_of_birth', label: 'Date Of Birth'},
    { accessor: 'email_address', label: 'Email Address' },    
    { accessor: 'address', label: 'Address' },
    { accessor: 'city', label: 'City' },
    { accessor: 'country', label: 'Country'},
    { accessor: 'zip_code', label: 'Zip Code' },
  ]

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => setRows(res));
  }, []);
  return (
    <section className="App">
      {rows.length>0 ? (<Table columns={columns}  rows={rows}/>): (<section class="loader4"></section>)}
    </section>
  )
}