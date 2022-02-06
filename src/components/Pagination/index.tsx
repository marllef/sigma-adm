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

  for (let i = 1; i <= Math.ceil(totalItems / count); i++) {
    pages.push(i);
  }

  return (
    <>
      <nav className={styles.container}>
        <ul className={styles.numberAlign}>
          {pages.map((number) => (
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
          ))}
        </ul>
      </nav>
    </>
  );
};
