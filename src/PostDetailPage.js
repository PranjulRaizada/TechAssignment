import React, { useEffect, useState } from 'react';
import {useParams, Link} from "react-router-dom";

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
        <div><Link className="buttonLook button--blue fLeft button--size" to={'/'}>&lt; Back</Link></div>
        {
            detailedInformation.map((numList,i) => (          
            <div key={i}>
                <h1>{numList.title}</h1>
                <p>{numList.body}</p>
                </div>      
             ))
            }
    </div>);
}

export default PostDetailPage;
