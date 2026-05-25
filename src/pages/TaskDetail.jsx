import { useParams, Link } from 'react-router-dom';

export const TaskDetail = () => {
    const { id } = useParams();
    const storedTasks = typeof window !== 'undefined'
        ? JSON.parse(window.localStorage.getItem('taskflow_data') || '[]')
        : [];

    const task = storedTasks.find((item) => item.id === id);

    if (!task) {
        return (
            <section className="task-detail page-center">
                <h2>Tâche introuvable</h2>
                <p>Aucune tâche ne correspond à l’identifiant donné.</p>
                <Link to="/" className="button-link">Retour au tableau de bord</Link>
            </section>
        );
    }

    return (
        <section className="task-detail">
            <header className="task-detail__header">
                <h2>Détails de la tâche</h2>
                <Link to="/" className="button-link">Retour au tableau de bord</Link>
            </header>

            <article className="task-detail__card">
                <p><strong>ID :</strong> {task.id}</p>
                <p><strong>Titre :</strong> {task.titre}</p>
                <p><strong>Description :</strong> {task.description || 'Aucune description fournie.'}</p>
                <p><strong>Statut :</strong> {task.statut}</p>
            </article>
        </section>
    );
};