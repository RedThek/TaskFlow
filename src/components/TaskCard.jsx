/**
 * Composant d'affichage (Dumb Component). Ne possède pas de logique métier complexe.
 * @param {Object} props.task - L'objet contenant les métadonnées de la tâche.
 */
export const TaskCard = ({ task }) => {
    // 1. Déstructurer les propriétés de la tâche pour un accès facilité (titre, statut).
    const { titre, description, statut } = task;

    // 2. Définir des styles dynamiques basés sur le statut (ex: bordure rouge pour "À faire", verte pour "Terminé").
    const statusClass = statut === 'Terminé'
        ? 'task-card--done'
        : statut === 'En cours'
            ? 'task-card--in-progress'
            : 'task-card--todo';

    // 3. Retourner la structure JSX de la carte (HTML sémantique : article ou div).
    return (
        <article className={`task-card ${statusClass}`}>
            <header className="task-card__header">
                <h3 className="task-card__title">{titre}</h3>
                <span className="task-card__status">{statut}</span>
            </header>
            <p className="task-card__description">{description}</p>
        </article>
    );
};