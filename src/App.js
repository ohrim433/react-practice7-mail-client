import React from 'react';
import './App.css';
import Messages from "./component/Messages/Messages";
import ReadMessage from "./component/ReadMessage/ReadMessage";

class App extends React.Component
{
    constructor (props) {
        super (props);
        this.state = {
            posts: [],
            readedPosts: []
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({posts: result});
                console.log(this.state);
            })
    }

    readMessage = (isReaded) => {
        // const newReadedPost = [...this.state.readedPosts, isReaded];
        // console.log(newReadedPost);
        this.setState({readedPosts: isReaded});
    }

    render () {
        const {posts, readedPosts} = this.state;
        return (
            <div className="App">
                <div className="all-messages">
                    { posts.map(el => {return <Messages key={el.id} post={el} readMessage={this.readMessage}/>}) }
                </div>
                <div className="read-message">
                    {/*{ readedPosts.map(el => {return <ReadMessage post={el}/>}) }*/}
                    <ReadMessage post={readedPosts}/>
                </div>
            </div>
        );
    };
}

export default App;
