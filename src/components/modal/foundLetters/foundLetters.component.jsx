function FoundLetters({ letters }) {
  return (
    <div className='found-modal'>
      <h4>Found Letters</h4>
      <div className='found-letters-flex'>
        {letters?.map((obj) => {
          return Object.keys(obj).map((char) => (
            <p key={obj[char]}>{obj[char].toUpperCase()}</p>
          ));
        })}
      </div>
    </div>
  );
}

export default FoundLetters;
