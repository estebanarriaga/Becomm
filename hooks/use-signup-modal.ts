import { create } from 'zustand';

interface SignUpModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useStreamerSignUpModal = create<SignUpModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

const useUserSignUpModal = create<SignUpModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export { useStreamerSignUpModal, useUserSignUpModal };
