import { useState } from 'react';

/**
 * Formulaire de création de tâche.
 * Design Pattern : Controlled Component.
 * @param {Function} onAddTask - Callback déclenché à la soumission valide du formulaire.
 */
export const TaskForm = ({ onAddTask }) => {
    // 1. Déclarer des états locaux (useState) pour chaque champ : titre, description, statut.
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [statut, setStatut] = useState('À faire');

    // 2. Créer une fonction de soumission (ex: handleSubmit) qui :
    //    a. Bloque le rechargement de page via event.preventDefault().
    const handleSubmit = (e) => {
        e.preventDefault();

        // Valider que le titre n'est pas vide
        if (!titre.trim()) {
            alert('Le titre de la tâche est obligatoire.');
            return;
        }

        //    b. Construit un nouvel objet tâche avec un ID unique (ex: Date.now() ou crypto.randomUUID()).
        const newTask = {
            id: Date.now().toString(),
            titre: titre.trim(),
            description: description.trim(),
            statut,
        };

        //    c. Invoque la fonction parent onAddTask(nouvelleTache).
        onAddTask(newTask);

        //    d. Réinitialise les états locaux pour vider le formulaire.
        setTitre('');
        setDescription('');
        setStatut('À faire');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <fieldset className="task-form__fieldset">
                <legend>Ajouter une nouvelle tâche</legend>

                <div className="form-group">
                    <label htmlFor="titre">Titre de la tâche *</label>
                    <input
                        id="titre"
                        type="text"
                        placeholder="Entrez le titre de la tâche"
                        value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="Entrez la description de la tâche (optionnel)"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="4"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="statut">Statut initial</label>
                    <select
                        id="statut"
                        value={statut}
                        onChange={(e) => setStatut(e.target.value)}
                    >
                        <option value="À faire">À faire</option>
                        <option value="En cours">En cours</option>
                        <option value="Terminé">Terminé</option>
                    </select>
                </div>

                <button type="submit" className="task-form__submit">Ajouter la tâche</button>
            </fieldset>
        </form>
    );
};