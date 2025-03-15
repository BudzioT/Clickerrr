import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ScoreDisplay.css';

function ScoreDisplay({ score }) {
    const getScoreClass = () => {
        if (score > 50) return 'score-high';
        if (score > 20) return 'score-medium';
        if (score > 10) return 'score-low';
        return '';
    };

    return (
        <div className="score-display">
            <p className="score-label">Score:</p>
            <motion.p
                className={`score-value ${getScoreClass()}`}
                animate={{
                    scale: [1, 1.2, 1],
                    color: ['inherit', '#ff6b6b', 'inherit']
                }}
                transition={{
                    duration: 0.5,
                    times: [0, 0.5, 1],
                    ease: "easeInOut"
                }}
                key={score}
            >
                {score}
            </motion.p>
        </div>
    );
}

export default ScoreDisplay;