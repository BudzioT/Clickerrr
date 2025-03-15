import React from 'react';
import './NameInput.css';

function NameInput({ name, setName }) {
    return (
        <div className="name-input">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    );
}

export default NameInput;