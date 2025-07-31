import { useContext } from "react"
import { GlobalContext } from "../context"

const ArticleStatus = ({isNew}) =>{
  return isNew && <span>-- baru !!!</span>
}

const NewArticle = () => {
  return <span>-- Baru!?!</span>
}

function Article(props) {
  const user = useContext(GlobalContext)
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")} , {' '}
        {/* ex 1 */}
        {/* {props.isNew ? ' --Baru' : ' --Lama'}, */}
        {/* example 2 */}
        {props.isNew && "--Baru"}
        {/* exmple dengan components */}
        <ArticleStatus isNew={props.isNew} />
        {props.isNew && <NewArticle/>}

      </small>
      <div>
        <small>Ditulis oleh Kouch</small>
      </div>
      <br />
      <br />

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
