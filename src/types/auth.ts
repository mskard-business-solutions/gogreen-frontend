export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
