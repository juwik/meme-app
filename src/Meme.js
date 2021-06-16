import React from "react";
import './Meme.css';

const Meme = ({ meme, updateMeme }) => {
    const upvoteHandler = () => {
        updateMeme({ ...meme, upvotes: meme.upvotes + 1 });
    }
    const downvoteHandler = () => {
        updateMeme({ ...meme, downvotes: meme.downvotes + 1 });
    }

    return (
        <div>
            <img className="meme" src={`../memes/${meme.id}.jpg`} alt="Coś się popsuło"></img>
            <div className="memeButtons">
                <button onClick={upvoteHandler} className="btn-upvote" type="button">▲ {meme.upvotes}</button>
                {meme.upvotes - meme.downvotes}
                <button onClick={downvoteHandler} className="btn-downvote" type="button">▼ {meme.downvotes}</button>
            </div>
        </div>
    )
}

export default Meme;