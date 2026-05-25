import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour synchroniser un état React avec le LocalStorage.
 * @param {string} key - La clé de stockage (ex: "taskflow_data").
 * @param {any} initialValue - Valeur par défaut si rien n'est stocké.
 */
export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`useLocalStorage: impossible de lire la clé ${key}`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.warn(`useLocalStorage: impossible d'écrire la clé ${key}`, error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};