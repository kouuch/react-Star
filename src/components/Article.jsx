function Article(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <div>
        {props.title.map((title) =>{
          return <div>{title}</div>
        })}
      </div>
    </>
  );
}

export default Article;
