import React from 'react';

function ReadMessage({post}) {
    return (
        <div id="read-message"
             style={{backgroundColor: "green", borderWidth: 1, borderStyle: "solid", borderColor: "black"}} key={post.id}>
            {post.id ? <p>{`Message ${post.id} from ${post.userId}`}</p> : null}
            {post.title ? <p>{`Title: ${post.title}`}</p> : null}
            {post.body ? <p>{`Message: ${post.body}`}</p> : null}
        </div>
    );
}

export default ReadMessage;