import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const PostListingPage = () => {
    const [postListingData, setPostListingData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response => setPostListingData(response))
        },[]
    )
   
    createNewPost(){
        console.log('ssssssssssss');
    }

    if(postListingData==''){
        return (<div>Loading....</div>)
    }

    return (<div>
        <button onClick={createNewPost}>Create New Post</button>
        <div>&nbsp;</div>
        <table>
        <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Action</th>
        </tr>
        </thead>
        <tbody>
        {
             postListingData.map((numList,i) =>(          
                <tr key={i}>                        
                     <td>{numList.id}</td>
                      <td>{numList.userId}</td>
                      <td>{numList.title}</td>
                      <td><Link to={'detailPage/'+numList.id}>View</Link> / <Link to={'editPage/'+numList.id}>Edit</Link></td>
                </tr>
             ))
        }
      </tbody>
    </table></div>);
}

export default PostListingPage;
