import React  from 'react';
import axios from 'axios';

import { useState, useEffect } from 'react'
import './styles.scss'

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

  // fetch the data from the API
  useEffect(() => {
    axios.get(`http://localhost:3001/*`)
      .then((res) => setRows(res.data.data))
  }, []);
  return (
    <section className="App">
      {rows.length>0 ? (<Table columns={columns}  rows={rows}/>): (<section className="loader4"></section>)}
    </section>
  )
}