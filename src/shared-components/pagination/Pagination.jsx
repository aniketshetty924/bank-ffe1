import React from 'react';

const Pagination = ({ handlePageChange, currentPage, totalPages }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); // Create an array of page numbers

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <button onClick={() => handlePageChange("prev")} className="page-link">
            Previous
          </button>
        </li>

        {/* Render page numbers */}
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? "active" : ""}`}>
            <button onClick={() => handlePageChange(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button onClick={() => handlePageChange("next")} className="page-link">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
