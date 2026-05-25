# 🚀 TaskFlow — Gestionnaire de Tâches d'Équipe

Ancré dans le cadre des Travaux Pratiques Évalués en **Architecture Front-End** à l'**École Nationale Supérieure Polytechnique de Maroua**, **TaskFlow** est une Single Page Application (SPA) moderne et performante. Développée en mode déclaratif avec **React** et propulsée par **Vite.js**, cette application permet d'optimiser le suivi des livrables et la collaboration au sein d'une équipe technique.

---

## 📋 Table des Matières
- [🚀 TaskFlow — Gestionnaire de Tâches d'Équipe](#-taskflow--gestionnaire-de-tâches-déquipe)
  - [📋 Table des Matières](#-table-des-matières)
  - [✨ Fonctionnalités Principales](#-fonctionnalités-principales)
  - [🚀 Installation](#-installation)
  - [▶️ Lancement du projet](#️-lancement-du-projet)
  - [📂 Architecture et Arborescence](#-architecture-et-arborescence)

---

## ✨ Fonctionnalités Principales

- ⚡ **Single Page Application (SPA)** : Navigation fluide, instantanée et sans aucun rechargement de page grâce à `react-router-dom`.
- 📊 **Tableau de Bord Dynamique** : Vue globale (Dashboard) listant les tâches sous forme de cartes élégantes et interactives.
- 📝 **Formulaires Contrôlés** : Ajout de tâches via une interface ergonomique dotée d'une gestion stricte de l'état local.
- 💾 **Persistance Locale** : Sauvegarde automatique et synchronisation en temps réel de vos données dans le `localStorage` du navigateur.
- 🔍 **Fiches Descriptives** : Routage dynamique (`/task/:id`) permettant de consulter les détails exhaustifs de chaque livrable en grand format.

---

## 🚀 Installation

Suivez ces étapes pour exécuter TaskFlow en local.

```bash
# Cloner le dépôt (si nécessaire)
git clone https://github.com/RedThek/TaskFlow.git
cd TaskFlow

# Installer les dépendances
enpm install
```

> Assurez-vous d'avoir une version récente de Node.js installée (Recommandé : 18.x ou supérieur).

---

## ▶️ Lancement du projet

Après installation, démarrez le serveur de développement Vite :

```bash
npm run dev
```

Une fois le serveur démarré, ouvrez votre navigateur sur l'adresse fournie par Vite, généralement :

```text
http://127.0.0.1:4173/
```

Pour prévisualiser une version de production locale, utilisez :

```bash
npm run preview
```

---

## 📂 Architecture et Arborescence

Le projet respecte scrupuleusement les standards professionnels de découpage architectural :

```text
taskflow/
├── 📁 .github/               # Configuration des workflows de CI/CD (optionnel)
├── 📁 node_modules/          # Dépendances du projet (exclues du dépôt)
├── 📁 public/                # Actifs statiques publics
├── 📁 src/
│   ├── 📁 components/        # Briques d'interface atomiques et réutilisables
│   │   ├── 📄 TaskCard.jsx   # Composant d'affichage d'une tâche
│   │   └── 📄 TaskForm.jsx   # Composant formulaire contrôlé
│   ├── 📁 hooks/             # Hooks personnalisés (Bonus)
│   │   └── 📄 useLocalStorage.js # Abstraction de la persistance locale
│   ├── 📁 layouts/           # Structures globales (ex: Barre de navigation)
│   ├── 📁 pages/             # Composants représentant des écrans complets
│   │   ├── 📄 Dashboard.jsx  # Vue principale de l'application
│   │   └── 📄 TaskDetail.jsx # Vue détaillée d'une tâche spécifique
│   ├── 📄 App.jsx            # Racine de l'application & Configuration du routage
│   └── 📄 main.jsx           # Point d'entrée de l'application
├── 📄 .gitignore             # Fichiers et dossiers à exclure du suivi Git
├── 📄 index.html             # Point d'entrée HTML
├── 📄 package.json           # Métadonnées et dépendances du projet
├── 📄 README.md              # Documentation du projet (Ce fichier)
└── 📄 vite.config.js         # Configuration du bundler Vite
```
