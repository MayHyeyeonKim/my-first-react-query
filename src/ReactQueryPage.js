import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const ReactQueryPage = () => {
    const fetchPost = ()=>{return axios.get('http://localhost:3004/posts')}
    //ReactQueryPage가 마운트되자마자 useQuery()가 실행이 되는구나.
    const { isLoading, data, isError, error, refetch } = useQuery({
        queryKey:['posts'],
        queryFn: fetchPost,
        retry: 1,
        select: (data)=>{
            return data.data //data객체안에 뭐가 잔뜩 들어있잖아? 그 중에서 data.data만 리턴하는 것임
        },
        enabled: false //초기에 호출되지 않음 기본값 true
        // refetchInterval: 3000, //3초마다 api호출
        // refetchOnMount: false, //컴포넌트가 마운트될 때 자동으로 데이터를 다시 가져올지 여부를 결정, 기본값 true
        // refetchOnWindowFocus: true, //브라우저 창에 초점이 돌아올 때 데이터를 다시 가져올지 여부를 결정, 기본값 true
        // staleTime:10000, // stale < gcTime 캐시가 더 길게 살아있어야 말이된다!! staleTime이 아무리 길어도 cache가 없으면 다시 부른다.
        // gcTime: 5000, //가비지컬렉터타임 inactive 캐쉬 5초뒤에 비워짐 v5이상에서는 gc, 이전은 캐쉬타임, 옵션임(디폴트는 5분)
    })

    // staleTime은 API호출을 언제할 지가 포커스인거고, gcTime은 캐시를 얼마나 오래 홀딩할지

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
    return <div>{data?.map((item)=>(
        <div>{item.title}</div>
    ))}
    <button onClick={refetch}>post리스트 다시 들고오기</button>
    </div>

}

export default ReactQueryPage