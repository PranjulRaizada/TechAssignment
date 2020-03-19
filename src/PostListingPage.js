import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const PostListingPage = () => {
    const [postListingData, setPostListingData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(response => setPostListingData(response))
        },[]);


    if(postListingData==''){
        return (<div>Loading....</div>)
    }

    return (<div>
        <Link className="buttonLook button--blue fRight" to={'postingForm'}>Create New Post</Link>
        <div>&nbsp;</div>
        <table className="TFtable"> 
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
                <tr key={i} className="extAlignLeft">                        
                     <td>{numList.id}</td>
                      <td>{numList.userId}</td>
                      <td>{numList.title}</td>
                      <td><Link className='buttonLook button--red' to={'detailPage/'+numList.id}>View</Link>  <Link className='buttonLook button--orange' to={'editPage/'+numList.id}>Edit</Link></td>
                </tr>
             ))
        }
      </tbody>
    </table></div>);
}

export default PostListingPage;
