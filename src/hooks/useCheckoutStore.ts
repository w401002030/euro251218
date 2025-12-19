import { create } from 'zustand';
interface CheckoutState {
  isOpen: boolean;
  selectedPlan: string | null;
  open: (plan?: string) => void;
  close: () => void;
}
export const useCheckoutStore = create<CheckoutState>((set) => ({
  isOpen: false,
  selectedPlan: null,
  open: (plan) => set({ isOpen: true, selectedPlan: plan || null }),
  close: () => set({ isOpen: false, selectedPlan: null }),
}));