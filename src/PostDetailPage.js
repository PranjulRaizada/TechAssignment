import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

const PostDetailPage = () => {
    const [detailedInformation, setDetailedInformation] = useState([]);
    const { num } = useParams();
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?id='+num)
        .then(res => res.json())
        .then(response => setDetailedInformation(response))
        },[]
    );
        
    if(detailedInformation==''){
        return (<div>Loading....</div>)
    }

    return (<div>
        {
            detailedInformation.map((numList,i) => (          
            <div key={i}>{numList.body}</div>      
             ))
            }
    </div>);
}

export default PostDetailPage;
