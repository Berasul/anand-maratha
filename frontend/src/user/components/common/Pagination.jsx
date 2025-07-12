import React, { useState } from 'react';

const Pagination = ({ totalRecords, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / perPage);
  // Generate visible page numbers

  const getVisiblePages = () => {
    const maxPagesToShow = 3; // Maximum number of page buttons to display
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Handle ellipsis for skipped pages
    if (startPage > 1) {
      pages.unshift('...');
      // pages.unshift(1);
    }
    if (endPage < totalPages) {
      pages.push('...');
      // pages.push(totalPages);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  return (
    <>
        {totalPages > 1 && <ul className="pagination">
          {/* First page */}
          <li
              className={`page-li ${currentPage === 1 ? 'inactive' : ''}`}
              onClick={() => currentPage > 1 && onPageChange(1)}
              >
              <span>
              <i className="bi bi-chevron-double-left"></i>
              </span>
          </li>

          {/* Previous Button */}
          <li
              className={`page-li ${currentPage === 1 ? 'inactive' : ''}`}
              onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          >
              <span>
              <i className="bi bi-chevron-left"></i>
              </span>
          </li>

          {/* Page Numbers */}
          {visiblePages.map((page, index) => (
              <li
              key={index}
              className={`page-li ${page === currentPage ? 'active' : ''}`}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              >
              <span>{page}</span>
              </li>
          ))}

          {/* Next Button */}
          <li
              className={`page-li ${currentPage === totalPages ? 'inactive' : ''}`}
              onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          >
              <span>
              <i className="bi bi-chevron-right"></i>
              </span>
          </li>
          {/* Last page */}
          <li
              className={`page-li ${currentPage === totalPages ? 'inactive' : ''}`}
              onClick={() => currentPage < totalPages && onPageChange(totalPages)}
          >
              <span>
                <i className="bi bi-chevron-double-right"></i>
              </span>
          </li>
        </ul>}
        {/* <p>Current Page: {currentPage}</p> */}
    </>
  );
};

export default Pagination;
