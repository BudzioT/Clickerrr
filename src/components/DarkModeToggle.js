import React from 'react';
import { motion } from 'framer-motion';
import './DarkModeToggle.css';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
    return (
        <motion.div
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {darkMode ? '☀️' : '🌙'}
        </motion.div>
    );
}

export default DarkModeToggle;