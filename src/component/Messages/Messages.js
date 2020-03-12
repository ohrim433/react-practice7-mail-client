import React, {useState} from 'react';

function Messages({post, readMessage})
{
    const [isReaded, setIsReaded] = useState(false);

    const setReaded = () => {
        if (isReaded = false) {
            setIsReaded(true);
            console.log(isReaded);
        }
    };

    const iReadAMessage = (i) => {
    readMessage(i)
};

    return (
        <div id="all-messages"
             style={{width: "45wv", backgroundColor: "gray", borderWidth: 1, borderStyle: "solid", borderColor: "black"}}
        key={post.id} onDoubleClick={iReadAMessage.bind(null, post)} onClick={setReaded}>
            <p>{`Message ${post.id} from ${post.userId}`}</p>
            <p>{`Title: ${post.title}`}</p>
        </div>
    );
}

export default Messages;