import {useParams,useSearchParams} from "react-router-dom"
const Post = () => {
    let {category,id}=useParams()
  // eslint-disable-next-line no-unused-vars
  let [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams.get('price'));
    
  return (
   <>
   <div>
    <h1>Welcome to Post {category}</h1>
    <h2>With given id:{id}</h2>
   </div>
   </>
  )
}

export default Post