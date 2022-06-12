import React  from 'react';

export const Card = ({ data }) => {
  return (
    <div>
      <div className="card">
        <h1>{data.first_name + " " + data.last_name}</h1>
        
        <p className="title">{data.address}</p>
        <p className="title">{data.city}</p>        
        <p className="title">{data.country}</p>        
        <p className="title">{data.zip_code}</p>
        <p>{data.email_address}</p>
        </div>
    </div>
  )
}
