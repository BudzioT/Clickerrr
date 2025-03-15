import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import NameInput from './components/NameInput';
import ClickerButton from './components/ClickerButton';
import MultiplierButton from './components/MultiplierButton';
import GameControls from './components/GameControls';
import ScoreDisplay from './components/ScoreDisplay';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleClick = () => {
    if (gameActive) {
      setScore(prevScore => prevScore + multiplier);
    }
  };

  const handleMultiplierIncrease = () => {
    if (score >= 10 && multiplier < 5) {
      setScore(prevScore => prevScore - 10);
      setMultiplier(prevMultiplier => prevMultiplier + 1);
    }
  };

  const startGame = () => {
    setScore(0);
    setMultiplier(1);
    setGameActive(true);
    setGameOver(false);

    setTimeout(() => {
      setGameActive(false);
      setGameOver(true);
    }, 10000);
  };

  const restartGame = () => {
    startGame();
  };

  return (
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <NameInput name={name} setName={setName} />
        <h1>Hello, {name || 'Player'}!</h1>

        <ScoreDisplay score={score} />

        <AnimatePresence>
          <ClickerButton onClick={handleClick} disabled={!gameActive} />
        </AnimatePresence>

        <MultiplierButton
            multiplier={multiplier}
            onClick={handleMultiplierIncrease}
            disabled={!gameActive || score < 10 || multiplier >= 5}
        />

        <GameControls
            gameActive={gameActive}
            gameOver={gameOver}
            score={score}
            startGame={startGame}
            restartGame={restartGame}
        />
      </div>
  );
}

export default App;