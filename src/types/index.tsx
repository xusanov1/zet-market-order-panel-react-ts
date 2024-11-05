export interface TnavigationType {
  path: string;
  title: string;
  icon: React.JSX.Element | string;
  role: string[];
}

export type TCardProps = {
  title: string;
  number: number;
  icon: React.JSX.Element;
  color: string
};

export interface IDataType {
  key: React.Key | string | number;
  id: number;
  date: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  productName: string;
  quantity: number;
  paymentMethod: string;
  totalPrice: number;
  status: string;
}