function CareerDetail({ info, style }) {
  return (
    <div className='career-detail-box'>
      <h2 className={`career-detail-info${style}`}>{info ? info : "-"}</h2>
    </div>
  );
}

export default CareerDetail;
