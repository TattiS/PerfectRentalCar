import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.buttonWrapper}>
      <button onClick={onClick} className={css.loadMoreButton}>
        Load More
      </button>
    </div>
  );
}
