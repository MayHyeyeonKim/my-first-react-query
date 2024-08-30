import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { usePostQuery } from "./hooks/usePosts";

const ReactQueryPage = () => {
    const ids = [1,2,3,4,5];

    const fetchPostDetail = (id) => {
        return axios.get(`http://localhost:3004/posts/${id}`);
    }

    const results = useQueries({
        queries: ids.map((id)=>{
            return {
                queryKey: ["posts", id],
                queryFn: ()=> fetchPostDetail(id)
            }
        }),
        combine: (results)=>{
            return {data: results.map((result)=>results.data?.data)}
        }
    })
console.log("results:", results)
    return (
    <div>
    </div>
    )
}

export default ReactQueryPage