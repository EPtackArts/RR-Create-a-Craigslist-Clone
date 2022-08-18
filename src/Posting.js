const Posting = (props) => {
    return (
      <div className="posting">
        {/* 5. Props are passed as key-value pairs
            ex. props.posting.title props.<key>.<value>
        */}
        <h1>{props.posting.title}</h1>
        <p>{props.posting.description}</p>
        <img src={props.posting.imageURL} alt={props.posting.title} />
      </div>
    );
  };
  
  export default Posting;