import Posting from "./Posting";

function Gallery(props) {
  return (
    <div className="gallery">
      {/* 4 use the .map to iterate the props posting array */}
      {props.postings.map((p, i) => {
        return <Posting posting={p} key={i} />;
      })}
    </div>
  );
}

export default Gallery;