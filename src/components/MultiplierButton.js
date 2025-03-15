import React from 'react';
import { motion } from 'framer-motion';
import './MultiplierButton.css';

function MultiplierButton({ multiplier, onClick, disabled }) {
    return (
        <div className="multiplier-container">
            <motion.button
                className="multiplier-button"
                onClick={onClick}
                disabled={disabled}
                whileTap={{ scale: 0.95 }}
                whileHover={disabled ? {} : { scale: 1.05 }}
            >
                Upgrade Multiplier (x{multiplier})
            </motion.button>
            <p className="multiplier-info">Cost: 10 points</p>
        </div>
    );
}

export default MultiplierButton;