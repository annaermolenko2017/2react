import React, { useState } from 'react';

const EmojiVotingApp = () => {
    const [emojis, setEmojis] = useState([
        { id: 1, emoji: "😊", count: 0 },
        { id: 2, emoji: "😍", count: 0 },
        { id: 3, emoji: "😂", count: 0 },
        { id: 4, emoji: "🥳", count: 0 },
        { id: 5, emoji: "😔", count: 0 },
        { id: 6, emoji: "🚀", count: 0 }
    ]);
    const [showResult, setShowResult] = useState(false);
    const [winner, setWinner] = useState('');

    const handleVote = (id) => {
        const updatedEmojis = emojis.map(emoji => {
            if (emoji.id === id) {
                return { ...emoji, count: emoji.count + 1 };
            }
            return emoji;
        });
        setEmojis(updatedEmojis);
    };

    const handleShowResult = () => {
        const maxVotes = Math.max(...emojis.map(emoji => emoji.count));
        const winningEmoji = emojis.find(emoji => emoji.count === maxVotes);
        setWinner(winningEmoji.emoji);
        setShowResult(true);
    };

    return (
        <div>
            <h1>Голосування за найкращий смайлик</h1>
            <ul>
                {emojis.map(emoji => (
                    <li key={emoji.id}>
                        {emoji.emoji} - {emoji.count}
                        <button onClick={() => handleVote(emoji.id)}>Голосувати</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleShowResult}>Показати результат</button>
            {showResult && <p>Переможець: {winner}</p>}
        </div>
    );
};

export default EmojiVotingApp;
