import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { IDataType } from '@/types';
import { PartnerLogo } from '../ui';

const columns: TableColumnsType<IDataType> = [
  {
    title: '№',
    dataIndex: 'id',
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Full Name',
    dataIndex: 'fullName',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Product Name',
    dataIndex: 'productName',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    render: (_, record) => {
      return <PartnerLogo type={record.paymentMethod} />
    }
  },
  {
    title: 'Total Price',
    dataIndex: 'totalPrice',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const data: IDataType[] = [
  {
    key: '1',
    fullName: 'John Brown',
    id: 1,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'UZUM',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '2',
    fullName: 'John Brown',
    id: 2,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'ALIF',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '3',
    fullName: 'John Brown',
    id: 3,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'ZOOD',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '4',
    fullName: 'John Brown',
    id: 4,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'INTEND',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '5',
    fullName: 'John Brown',
    id: 5,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'PAYZEE',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '6',
    fullName: 'John Brown',
    id: 6,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'OPENCARD',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '7',
    fullName: 'John Brown',
    id: 7,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'PAYME',
    totalPrice: 100,
    status: 'Pending',
  },
  {
    key: '8',
    fullName: 'John Brown',
    id: 8,
    date: '2022-01-01',
    phoneNumber: '+998990000000',
    address: 'New York No. 1 Lake Park',
    productName: 'Bike',
    quantity: 1,
    paymentMethod: 'CLICK',
    totalPrice: 100,
    status: 'Pending',
  },
];

const DataTable: React.FC = () => (
  <>
    <Table<IDataType> 
    columns={columns} 
    dataSource={data} 
    size="middle" 
    pagination={{ pageSize: 5 }}
    />

  </>
);

export default DataTable;
