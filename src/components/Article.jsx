function Article(props) {
  return (
    <>
      <div>{props.title}</div>
      <small>Date : {props.date}, tags {props.tags.join(", ")}</small>
      {/* <div>

        index ini seperti js lenght 0, 1 ,2 untuk id atau panjangnya
        {props.title.map((title, index) => (
          <div key={index}>{title}</div>
        ))}
      </div> */}
    </>
  );
}

export default Article;
