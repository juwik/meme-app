import React from "react";
import Meme from './Meme.js'
import './App.css';

const MemeList = ({ memes, updateMeme, isHot }) => {

    let filteredMemes = []

    if (isHot) {
        filteredMemes = memes.filter((mem) => mem.upvotes - mem.downvotes >= 5);
    } else {
        filteredMemes = memes;
    }

    return (
        <div>
            {filteredMemes.map(meme =>
                <div className="App">
                    <Meme key={meme.id} updateMeme={updateMeme} meme={meme} />
                </div>
            )}
        </div >
    )
}

export default MemeList;