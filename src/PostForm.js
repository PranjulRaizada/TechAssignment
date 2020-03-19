import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";

export function MyForm(props) {
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [userId, setUserId] = useState('');
  const [errors, setErrors] = useState({userIdMsg:'',titleMsg:'',descriptionMsg:''});
  const [success, setSuccess] = useState('');

  const { num } = useParams();
  const editForm = (evt) => {
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
      .then(json => {setSuccess('Data is submitted successfully!!!');console.log(json)})
  }

  const validateForm = () =>{
    // eslint-disable-next-line no-unused-vars
    let errorFlag=true;
    let userIdMsg='';
    let titleMsg= '';
    let descriptionMsg = '';
    //setErrors({...errors,userIdMsg:'',titleMsg:'',descriptionMsg:''});
    console.log('userId====',typeof(userId));
    const n = Math.floor(Number(userId));
    if(userId=='' || parseInt(userId)==0 || n !== Infinity && String(n) === userId && n >= 0){
      errorFlag = false;
      userIdMsg='Please enter UserId';
    }
    
    if(postTitle.trim()==''){
      errorFlag = false;
      titleMsg= 'Please enter Title';
    }
    
    if(postBody.trim()==''){
      errorFlag = false;
      descriptionMsg = 'Please enter Description';
    }

    setErrors({userIdMsg,titleMsg,descriptionMsg});
    return errorFlag;
  }

  const postForm = (evt) =>{
    evt.preventDefault();
    if(!validateForm()){
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
      userId: userId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {setSuccess('Data is submitted successfully!!!');console.log(json)})
  }

  useEffect(()=>{
    if(!num){
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/posts?id='+num)
    .then(res => res.json())
    .then(response => {setPostBody(response[0].body);setPostTitle(response[0].title);setUserId(parseInt(response[0].userId))})
    .then(json => {console.log(json)})
    },[num]
  );

  return (
    <div>
    <div><Link className="buttonLook button--blue fLeft button--size" to={'/'}>&lt; Back</Link></div>
    <form>
      {typeof num=='undefined'?
      <label>
      UserId:
        <input
          type="text"
          value={userId}
          onChange={e => setUserId(e.target.value!=''?parseInt(e.target.value):e.target.value)}
  />       <div className="errorMsg">{errors.userIdMsg}</div>
      </label>
      :''}
      <label>
        Title:
        <input
          type="text"
          value={postTitle}
          onChange={e => setPostTitle(e.target.value)}
  />
      <div className="errorMsg">{errors.titleMsg}</div>
      </label>
      <label>
        Description:
        <textarea
          type="text"
          value={postBody}
          onChange={e => setPostBody(e.target.value)}
  />
      <div className="errorMsg">{errors.descriptionMsg}</div>
      </label>
      {typeof num=='undefined'?<input type="submit" value="Post" onClick={postForm}/>:''}
      {typeof num!='undefined'?<input type="submit" value="Update" onClick={editForm}/>:''}
      {success!=''?<div className="successMsg">{success}</div>:''}
    </form></div>
  );
}
export default MyForm;