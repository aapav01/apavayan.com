"use client";
import { createContext, useContext, useRef, ReactNode } from 'react';
import { Group } from 'three';

interface SceneContextType {
  sceneRef: React.RefObject<Group | null>;
}

const SceneContext = createContext<SceneContextType | null>(null);

export const useScene = () => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
};

interface SceneProviderProps {
  children: ReactNode;
}

export const SceneProvider = ({ children }: SceneProviderProps) => {
  const sceneRef = useRef<Group>(null);

  return (
    <SceneContext.Provider value={{ sceneRef }}>
      {children}
    </SceneContext.Provider>
  );
}; 