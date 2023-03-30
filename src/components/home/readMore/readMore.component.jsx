import { FaCaretDown, FaCaretRight } from "react-icons/fa";

function ReadMore({ children, onPress, readMore }) {
  return (
    <div onClick={onPress} className='text-container'>
      {readMore && <p className='game-text guess-eleven-text'>{children}</p>}
      <p className={`read-more-btn ${readMore ? "margin-up" : ""}`}>
        Read More
        {readMore ? (
          <FaCaretDown className='read-more-icon-btn hide-icon-title' />
        ) : (
          <FaCaretRight className='read-more-icon-btn hide-icon-title' />
        )}
      </p>
    </div>
  );
}

export default ReadMore;
