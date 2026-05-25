import { useLocalStorage } from '/src/hooks/useLocalStorage';
import { TaskCard } from '../components/TaskCard';
import { TaskForm } from '../components/TaskForm';

/**
 * Composant conteneur principal de l'application.
 * Design Pattern : Container Component (gère la logique métier et l'état).
 */
export const Dashboard = () => {
    // 1. Initialiser l'état local avec une liste de tâches (structure demandée avec id, titre, description, statut).
    // => Utiliser useLocalStorage pour charger le tableau depuis le localStorage.
    const [tasks, setTasks] = useLocalStorage('taskflow_data', []);

    const handleAddTask = (newTask) => {
        // /!\ Interdit d'utiliser push().
        // Créer une nouvelle référence de tableau :
        setTasks([...tasks, newTask]);
    };

    return (
        <div className="dashboard-container">
            <section className="dashboard-intro">
                <h1>Tableau de bord TaskFlow</h1>
                <p>Gestion et suivi des livrables sans rechargement de page.</p>
            </section>

            <section className="dashboard-form-zone">
                <TaskForm onAddTask={handleAddTask} />
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