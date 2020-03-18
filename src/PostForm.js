import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

export function MyForm(props) {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [userId, setUserId] = useState("");
  const { num } = useParams();
  const handleSubmit = (evt) => {
      evt.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts/'+num, {
        method: 'PUT',
        body: JSON.stringify({
          id: num,
          title: postTitle,
          body: postBody,
          userId: userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
     // alert(`Submitting Name ${postBody}`)
  }

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?id='+num)
    .then(res => res.json())
    .then(response => {setPostBody(response[0].body);setPostTitle(response[0].title);setUserId(response[0].userId)})
    },[num]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
  />
      </label>
      <label>
        Description:
        <textarea
          type="text"
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
  />
      </label>
      <input type="submit" value="Update" />
    </form>
  );
}
export default MyForm;