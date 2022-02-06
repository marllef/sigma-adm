import styles from "./Pagination.module.css";

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
  const pages = [];
  const counters = Math.ceil(totalItems / count);

  for (let i = 1; i <= Math.ceil(totalItems / count); i++) {
    pages.push(i);
  }

  if (counters / 2 > 5) {
    if (currentPage - Math.round(counters / 2) === 0) {
      pages.splice(currentPage - 1 - (counters % count), (counters % 10) - 1, 0);
    } else if (currentPage - counters / 2 < 0) {
      pages.splice(currentPage + 1, counters % 10, 0);
    } else {
      pages.splice(currentPage - 2 - (counters % 10), counters % 10, 0);
    }
  }

  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.numberAlign}>
          {pages.map((number, index) => {
            if (number === 0) {
              return (
                <li
                  className={`${styles.numbers} ${
                    currentPage === number && styles.active
                  }`}
                  key={number}
                >
                  <a href={`#${number}`} onClick={() => paginate(number)}>
                    ...
                  </a>
                </li>
              );
            }

            return (
              <li
                className={`${styles.numbers} ${
                  currentPage === number && styles.active
                }`}
                key={number}
              >
                <a href={`#${number}`} onClick={() => paginate(number)}>
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
