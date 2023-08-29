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

export interface userRegisterType extends userLoginType {
  name: string;
  role: string;
}

export interface responseLoginType {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface ComponentLevelLoaderType {
  text: string;
  color: string;
  loading: boolean;
  size?: number;
}

export interface adminAddProductType {
  name: string;
  price: number;
  description: string;
  category: string;
  sizes: any | null;
  deliveryInfo: string;
  onSale: string;
  imageUrl: string | null;
  priceDrop: number;
}

export type configOptionsType = {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
};
