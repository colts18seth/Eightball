import React, { useState } from 'react';
import './EightBall.css';

const EightBall = () => {
    const answers = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" }
    ]

    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState('black');
    const [msg, setMsg] = useState('Think of a Question');
    const randAns = answers[Math.floor(Math.random() * answers.length)];

    const setBase = () => {
        setClicked(false);
        setColor("black");
        setMsg("Think of a Question");
    }

    const handleClick = () => {
        if (!clicked) {
            setClicked(true);
            setColor(randAns.color);
            setMsg(randAns.msg);
        }
    }

    return (
        <>
            <div className={`EightBall ${color}`} onClick={handleClick}>
                <h1>{msg}</h1>
            </div >
            {clicked && <button onClick={setBase}>Again?</button>}
        </>
    );
}

export default EightBall;