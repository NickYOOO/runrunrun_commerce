//src/stores/useUserStore.ts
import create from 'zustand';

interface UserState {
  id: string;
  name: string;
  email: string;
  setUser: (user: { id: string; name: string; email: string }) => void;
}

const UserStore = create<UserState>((set) => ({
  id: '',
  name: '',
  email: '',
  setUser: (user) => set(user),
}));

export default UserStore;
