import { useState } from 'react';

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick() {
    setIsEdit((edit) => !edit);
    if (isEdit) {
      onChangeName(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            value={playerName}
            onChange={handleInputChange}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEdit ? 'Edit' : 'Save'}</button>
    </li>
  );
}
