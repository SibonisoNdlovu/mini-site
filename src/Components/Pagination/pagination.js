import React from 'react';

// pagination component, very simple component
export const Pagination = ({ activePage, count, rowsPerPage, totalPages, setActivePage }) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1

  return (
    <>
      <section className="pagination">
        <button disabled={activePage === 1} onClick={() => setActivePage(1)}>
          <span>⏮️ First</span>
        </button>
        <button disabled={activePage === 1} onClick={() => setActivePage(activePage - 1)}>
         <span>⬅️ Previous</span>  
        </button>
        <button disabled={activePage === totalPages} onClick={() => setActivePage(activePage + 1)}>
          <span>Next ➡️</span>
        </button>
        <button disabled={activePage === totalPages} onClick={() => setActivePage(totalPages)}>
          <span>Last ⏭️</span>
        </button>
      </section>
      <p>
        Page {activePage} of {totalPages}
      </p>
      <p>
        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {count}
      </p>
    </>
  )
}
