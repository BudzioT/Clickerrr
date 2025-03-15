import React from 'react';
import { motion } from 'framer-motion';
import './ClickerButton.css';

function ClickerButton({ onClick, disabled }) {
    return (
        <motion.button
            className="clicker-button"
            onClick={onClick}
            disabled={disabled}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            CLICK ME!
        </motion.button>
    );
}

export default ClickerButton;