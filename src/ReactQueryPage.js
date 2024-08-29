import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const ReactQueryPage = () => {
    const fetchPost = ()=>{return axios.get('http://localhost:3004/posts')}
    //ReactQueryPage가 마운트되자마자 useQuery()가 실행이 되는구나.
    const { isLoading, data, isError, error } = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost,
        retry: 1,
        select: (data)=>{
            return data.data //data객체안에 뭐가 잔뜩 들어있잖아? 그 중에서 data.data만 리턴하는 것임
        },
        gcTime: 5000, //가비지컬렉터타임 inactive 캐쉬 5초뒤에 비워짐 v5이상에서는 gc, 이전은 캐쉬타임, 옵션임(디폴트는 5분)
    })
    console.log("isLoading: ", isLoading)
    console.log("data: ", data)
    console.log("isError: ", isError) // default: 총 1번(원래)  + 3번 더 시도함 (retry라는 기능)
    console.log("error: ", error)
    
    if(isLoading){
        return <h1>
            Loading...
        </h1>
    }
    if(isError){
        return <h1>
            {error.message}
        </h1>
    }
    return <div>{data.map((item)=>(
        <div>{item.title}</div>
    ))}</div>

}


export default ReactQueryPage