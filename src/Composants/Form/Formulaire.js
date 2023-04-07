import React from "react";

export default function Formulaire({
  addTask,
  addTxt,
  addForm,
  rmTask,
  rmTxt,
}) {
  return (
    <div className="container px-3">
      <h2 className="title mt-5">Rentrez Vos taches à faire</h2>
      <form onSubmit={addForm}>
        <div className="field">
          <div className="control">
            <label htmlFor="tache" className="label">
              Tache
            </label>
            <input
              value={rmTask}
              className="input"
              type="text"
              id="tache"
              placeholder="Une tache a faire"
              onChange={(e) => addTask(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label htmlFor="txt" className="label">
              Contenue de la Tache
            </label>
            <textarea
              value={rmTxt}
              className="textarea"
              type="text"
              id="txt"
              placeholder="Une tache a faire"
              onChange={(e) => addTxt(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Créer une Tache</button>
        </div>
      </form>
    </div>
  );
}
