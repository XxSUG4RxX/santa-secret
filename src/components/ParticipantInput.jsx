// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center space-x-8 px-4">
        <input
          type="text"
          className="input flex-grow px-4 font-bold outline-none"
          placeholder="nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          style={{ 
            backgroundImage: 'url(img/bginput.svg)', 
            backgroundSize: 'contain', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat',
          }}
        />
        <button className="button" onClick={addParticipant}>
          <img src="img/btnadd.svg" alt="" />
        </button>
      </div>
      <ul className="space-y-0 flex flex-col mt-10 items-center">
        {participants.map((name, index) => (
          <li key={index} className="flex items-center justify-between w-full px-12">
            <p 
              className="flex font-bold items-center justify-center w-3/4 h-12 bg-no-repeat bg-cover bg-center" 
              style={{ 
                backgroundImage: 'url(img/bgname.svg)', 
                backgroundSize: 'contain',
              }}
            >{name}</p>
              <button
                onClick={() => onRemoveParticipant(index)}
              >
                <img src="img/btnremove.svg" alt="" />
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
