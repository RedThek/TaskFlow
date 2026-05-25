import { useState } from 'react';
import { TaskCard } from '../components/TaskCard';

/**
 * Composant conteneur principal de l'application.
 * Design Pattern : Container Component (gère la logique métier et l'état).
 */
export const Dashboard = () => {
    // 1. Initialiser l'état local avec une liste de tâches (structure demandée avec id, titre, description, statut).
    // => Utiliser useState.
    const [tasks] = useState([
        {
            id: 'task-1',
            titre: 'Concevoir la maquette',
            description: 'Créer les écrans principaux et le parcours utilisateur pour TaskFlow.',
            statut: 'À faire',
        },
        {
            id: 'task-2',
            titre: 'Développer le tableau de bord',
            description: 'Implémenter l’affichage dynamique des tâches et les cartes de résumé.',
            statut: 'En cours',
        },
        {
            id: 'task-3',
            titre: 'Ajouter la persistance locale',
            description: 'Sauvegarder les tâches dans localStorage pour maintenir l’état entre les sessions.',
            statut: 'Terminé',
        },
    ]);

    return (
        <div className="dashboard-container">
            <section className="dashboard-intro">
                <h1>Tableau de bord TaskFlow</h1>
                <p>Gestion et suivi des livrables sans rechargement de page.</p>
            </section>

            <section className="dashboard-form-zone">
                <h2>Nouvelle tâche</h2>
                <p>Le formulaire d’ajout sera intégré ici dans l’étape suivante.</p>
            </section>

            <section className="dashboard-tasks-list">
                {tasks.length === 0 ? (
                    <p>Aucune tâche disponible pour le moment.</p>
                ) : (
                    tasks.map((task) => <TaskCard key={task.id} task={task} />)
                )}
            </section>
        </div>
    );
};