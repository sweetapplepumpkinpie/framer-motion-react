import create from "zustand"

interface IAppStore {
  isOpen: boolean
  isFrontCamera: boolean
  close: () => void
  setOpen: (value: boolean) => void
  switchCamera: () => void
}

export const useAppStore = create<IAppStore>((set) => ({
  isOpen: false,
  isFrontCamera: true,
  close: () => set((state) => ({ isOpen: false })),
  setOpen: (value: boolean) => set((state) => ({ isOpen: !state.isOpen })),
  switchCamera: () => set((state) => ({ isFrontCamera: !state.isFrontCamera })),
}))
