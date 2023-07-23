function LoadingScreen({ text }) {
  return (
    <div className='loading-screen'>
      {text && (
        <div className='loading-screen-text'>
          <p>{text}</p>
        </div>
      )}
      <div id='loader'></div>
    </div>
  );
}

export default LoadingScreen;
