import { create } from 'zustand';

type ModalType = 'quiz';

export type QuizModal = {
  type: ModalType;
  action: () => void;
};

type ModalStoreType = {
  modal: QuizModal | null;
  openModal: (modal: QuizModal) => void;
  closeModal: () => void;
  open: boolean;
};

export const useModal = create<ModalStoreType>((set) => ({
  open: false,
  modal: null,
  openModal: (modal) => set({ modal, open: true }),
  closeModal: () => set({ modal: null, open: false }),
}));
