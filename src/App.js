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
            readedPosts: [],
            showPost: 10
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(result => {
                this.setState({posts: result});
                // console.log(this.state);
            })
    }

    readMessage = (isReaded) => {
        // const newReadedPost = [...this.state.readedPosts, isReaded];
        // console.log(newReadedPost);
        this.setState({readedPosts: isReaded});
    };

    showMore = () => {
        const newShowPost = this.state.showPost + 10;
        this.setState({showPost: newShowPost});
        console.log(this.state.showPost);
    };

    render () {
        const {posts, readedPosts, showPost} = this.state;
        return (
            <div className="App">
                <div className="all-messages">
                    { posts.map((el, i) => {
                        if (i < showPost) {
                            return <Messages key={el.id} post={el} readMessage={this.readMessage}/>
                        } else return null}) }
                        { (showPost < posts.length) ? <button onClick={this.showMore} style={{height: 100, width: 200}}>Show more</button> : null}
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
