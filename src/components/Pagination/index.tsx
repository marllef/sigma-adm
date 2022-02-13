import styles from "./Pagination.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

interface PaginationProps {
  count: number;
  totalItems: number;
  currentPage: number;
  paginate: { (number: number): void };
}

export const Pagination = ({
  totalItems,
  count,
  currentPage,
  paginate,
}: PaginationProps) => {
  const pageSize = count;
  const maxPages = 5;

  const totalPages = Math.ceil(totalItems / pageSize);

  let startPage: number, endPage: number;

  if (totalPages <= maxPages) {
    startPage = 1;
    endPage = totalPages;
  } else {
    let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
    let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

    if (currentPage <= maxPagesBeforeCurrentPage) {
      startPage = 1;
      endPage = maxPages;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      startPage = totalPages - maxPages + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  function handleArrowClick(value: number = 0) {
    if (currentPage + value > 0 && currentPage + value <= totalPages) {
      paginate(currentPage + value);
    }
  }

  if (totalPages > 1) {
    return (
      <>
        <nav className={styles.container}>
          <ul className={styles.numberAlign}>
            <li
              className={`${styles.numbers} ${
                currentPage === 1 && styles.active
              }`}
              key={1}
            >
              <button onClick={() => paginate(1)}>{1}</button>
            </li>

            <li
              className={`${styles.numbers} ${styles.arrow}`}
              onClick={() => handleArrowClick(-1)}
            >
              <FaArrowLeft size={12} />
            </li>

            {pages.map((number) => {
              if (number !== 1 && number !== totalPages)
                return (
                  <li
                    className={`${styles.numbers} ${
                      currentPage === number && styles.active
                    }`}
                    key={number}
                  >
                    <button onClick={() => paginate(number)}>{number}</button>
                  </li>
                );
            })}

            <li
              className={`${styles.numbers} ${styles.arrow}`}
              onClick={() => handleArrowClick(+1)}
            >
              <FaArrowRight size={12} />
            </li>

            <li
              className={`${styles.numbers} ${
                currentPage === totalPages && styles.active
              }`}
              key={totalPages + Math.random()}
            >
              <button onClick={() => paginate(totalPages)}>{totalPages}</button>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return null;
};
