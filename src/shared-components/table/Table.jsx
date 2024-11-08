import React from 'react';
import './table.css';
import Pagination from '../pagination/Pagination';
import SizeBar from '../size-bar/SizeBar';

const Table = ({ data, setLimit, handlePageChange, currentPage, totalPages, limit }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  // Mapping for display names
  const headerDisplayNames = {
    firstName: 'First Name',
    lastName: 'Last Name',
    fullName: 'Full Name',
    username: 'Username',
    password: 'Password',
    age: 'Age',
    isAdmin: 'Is Admin',
    id: 'ID'
  };

  // Filter out unwanted columns
  const filteredData = data.map(({ createdAt, updatedAt, deletedAt, ...rest }) => rest);
  const headers = Object.keys(filteredData[0]);

  const rows = filteredData.map((item, index) => {
    const rowIndex = (currentPage - 1) * limit + index + 1;
    return { ...item, id: rowIndex };
  });

  return (
    <div className="table-container">
      <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      <SizeBar setLimit={setLimit} />
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>
                  {headerDisplayNames[header] || header} {/* Use display name or fallback to header */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex}>
                    {typeof cell === 'boolean' ? (cell ? 'Yes' : 'No') : cell}
                  </td>
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
