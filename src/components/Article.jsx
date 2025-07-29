function Article(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <div>

        {/* index ini seperti js lenght 0, 1 ,2 untuk id atau panjangnya */}
        {props.title.map((title, index) => (
          <div key={index}>{title}</div>
        ))}
      </div>
    </>
  );
}

export default Article;
