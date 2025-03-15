import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GameControls.css';

function GameControls({ gameActive, gameOver, score, startGame, restartGame }) {
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        let timer;
        if (gameActive) {
            setTimeLeft(10);
            timer = setInterval(() => {
                setTimeLeft(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [gameActive]);

    return (
        <div className="game-controls">
            {!gameActive && !gameOver && (
                <motion.button
                    className="start-button"
                    onClick={startGame}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Start Game
                </motion.button>
            )}

            {gameActive && (
                <motion.div
                    className="timer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Time left: {timeLeft}s
                </motion.div>
            )}

            {gameOver && (
                <motion.div
                    className="game-over"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2>Game Over!</h2>
                    <p className="final-score">Your final score: {score}</p>
                    <motion.button
                        className="restart-button"
                        onClick={restartGame}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Play Again
                    </motion.button>
                </motion.div>
            )}
        </div>
    );
}

export default GameControls;