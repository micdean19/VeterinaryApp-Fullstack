import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

// This receives the props and each sub component is simply use for add more div/formatting.
function Comment(props) {
    return (
        <div className="Comment">
            {/* This is for image + text Hello Kity*/}
            <UserInfo user={props.author} />
            {/* This is for Texxt data "I hope you enjoy react" */}
            <div className="Comment-text">{props.text}</div>
            {/* This is for the date */}
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

// Props/Object
const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
        name: "Hello Kitty",
        avatarUrl: "https://placekitten.com/g/64/64",
    },
};
ReactDOM.render(
    // Comment is a Component
    // This calls the component Comment and Send 3 Props (named as datae, text, and author)
    // The probs themselves are global variables usign teh "Const comment above."
    <Comment
        // We are sending elements as Props
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById("root")
);
