function BlurScreen({ text }) {
  return (
    <div className='blur-screen'>
      {text && (
        <div className='loading-screen-text'>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}

export default BlurScreen;
