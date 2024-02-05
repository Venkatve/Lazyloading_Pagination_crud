import React from 'react';
import { useLocation } from 'react-router-dom';

const Pagination = ({ currentPage, changeCPage, prePage, nextPage, numbers }) => {
  const location = useLocation();
  const isHomePath = location.pathname === '/';

  if (!isHomePath) {
    return null; 
  }

  return (
    <nav class="col-12 d-flex align-items-center justify-content-center">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={prePage}>
            Previous
          </a>
        </li>
        {numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a onClick={() => changeCPage(n)} className="page-link" href="#">
              {n}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;