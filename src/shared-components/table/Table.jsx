import React from 'react';
import './table.css';
import Pagination from '../pagination/Pagination';
import SizeBar from '../size-bar/SizeBar';

const Table = ({ data, setLimit, handlePageChange, currentPage, totalPages, limit }) => {
  const headers = Object.keys(data[0]);

  const rows = data.map((item, index) => {
    const rowIndex = (currentPage - 1) * limit + index + 1; // Generate a sequential ID
    return { ...item, id: rowIndex }; // Replace ID with sequential row index
  });

  return (
    <div className="table-container">
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      <SizeBar setLimit={setLimit} />
      <div className="table-wrapper"> {/* New wrapper for horizontal scrolling */}
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header === 'id' ? 'ID' : header}</th> // Rename ID header
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
