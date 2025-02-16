import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    //setIsEditing(!isEditing) (NOT LIKE THIS, )
    setIsEditing((editing) => !editing);
  }
 
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);

    //to target einai auto pou poy kanei initiante to event , pou stin prokeimeni einai to input , kai metq paei kai koitaei to value sto input. Etsi exoume access sto ti tha valei o user kai meta auto to vazoyme san neo state
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //let btnCaption = "EDIT" (ENALAKTIKOS TROPOS GIA NA ALLAZW APO EDIT SE SAVE)
  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //to value ousiastika einai build in prop pou dinei value kapou
    // btnCaption ="SAVE" (AN YPARXEI INPUT ALLAZEI SE SAVE)
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}> {isEditing ? "SAVE" : "EDIT"} </button>
    </li>
  );
}
