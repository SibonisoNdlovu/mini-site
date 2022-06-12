import React  from 'react';

export const Card = ({ data }) => {
  return (
    <section>
      <body className="card">
        <h1>Full Name: {data.first_name + " " + data.last_name }</h1>
        <p className="title">Address: {data.address}</p>
        <p className="title">City: {data.city}</p>        
        <p className="title">Country: {data.country}</p>        
        <p className="title">Zip Code: {data.zip_code}</p>
        <p>Email:  {data.email_address}</p>
        </body>
    </section>
  )
}
