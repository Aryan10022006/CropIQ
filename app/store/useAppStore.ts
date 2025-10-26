import create from 'zustand';

interface AppState {
  selectedPlot?: string | null;
  setSelectedPlot: (id?: string | null) => void;
  darkMode: boolean;
  toggleDark: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedPlot: null,
  setSelectedPlot: (id) => set({ selectedPlot: id ?? null }),
  darkMode: true,
  toggleDark: () => set((s) => ({ darkMode: !s.darkMode })),
}));

export default useAppStore;
