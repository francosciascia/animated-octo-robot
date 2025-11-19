import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import recetasData from '../data/recetas.json';

const RecetasContext = createContext(null);

export const RecetasProvider = ({ children }) => {
  const [recetas, setRecetas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRecetas = async () => {
      try {
        setIsLoading(true);
        const data = await Promise.resolve(recetasData);
        setRecetas(data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar recetas:', err);
        setError('Hubo un problema al cargar las recetas. Intenta nuevamente.');
      } finally {
        setIsLoading(false);
      }
    };

    loadRecetas();
  }, []);

  const getRecetaById = (id) => recetas.find((receta) => receta.id === Number(id));

  const value = useMemo(
    () => ({
      recetas,
      isLoading,
      error,
      getRecetaById,
    }),
    [recetas, isLoading, error]
  );

  return <RecetasContext.Provider value={value}>{children}</RecetasContext.Provider>;
};

export const useRecetas = () => {
  const context = useContext(RecetasContext);
  if (!context) {
    throw new Error('useRecetas debe utilizarse dentro de un RecetasProvider');
  }
  return context;
};

