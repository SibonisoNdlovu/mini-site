import React  from 'react';

// card component used to display each row of the table
export const Card = ({ data }) => {
  return (
    <section>
      <body className="card">
        <h1>Full Name: {data.first_name + " " + data.last_name }</h1>
        <p>DOB: {data.date_of_birth}</p>
        <p>Address: {data.address}</p>
        <p>City: {data.city}</p>        
        <p>Country: {data.country}</p>        
        <p>Zip Code: {data.zip_code}</p>
        <p>Email:  {data.email_address}</p>
        </body>
    </section>
  )
}
