import { create } from "zustand";

// نعرّف شكل الـ state + actions
interface TogglePasswordViewState {
  viewState: boolean;
  toggleState: () => void;
}

export const useTogglePasswordView = create<TogglePasswordViewState>((set) => ({
  viewState: false,
  toggleState: () => set((state) => ({ viewState: !state.viewState })),
}));