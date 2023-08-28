export interface LayoutProps {
  children: React.ReactNode;
}

export interface navOptionsType {
  id: string;
  label: string;
  path: string;
}

export interface RegistrationFormControlType {
  id: string;
  type: string;
  placeholder: string;
  label: string;
  componentType: string;
  options?: RoleOption[]; // Only for componentType "select"
}

interface RoleOption {
  id: string;
  label: string;
}

export interface userLoginType {
  email: string;
  password: string;
}

export interface userRegisterType {
  name: string;
  email: string;
  password: string;
  role: string;
}

export type configOptionsType = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};
