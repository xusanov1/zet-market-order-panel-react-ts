import { TbAppsFilled } from 'react-icons/tb';
import { MdOutlineNewLabel } from 'react-icons/md';
import { AiOutlineFileDone } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { HiUsers } from 'react-icons/hi2';

import { TnavigationType } from '@ttypes/index';

export const navigation: TnavigationType[] = [
  {
    path: '/',
    title: 'Dashboard',
    icon: <TbAppsFilled />,
    role: ['admin', 'employee'],
  },
  {
    path: '/orders-new',
    title: 'New Orders',
    icon: <MdOutlineNewLabel />,
    role: ['admin', 'employee'],
  },
  {
    path: '/order-completed',
    title: 'Completed Orders',
    icon: <AiOutlineFileDone />,
    role: ['admin'],
  },
  {
    path: '/order-canceled',
    title: 'Canceled Orders',
    icon: <ImCancelCircle />,
    role: ['admin', 'employee'],
  },
  {
    path: '/leads',
    title: 'Leads',
    icon: <HiUsers />,
    role: ['admin', 'employee'],
  },
];

import { MdOutlineWidgets } from 'react-icons/md';
import { IoIosDoneAll } from 'react-icons/io';
import { MdFreeCancellation } from 'react-icons/md';
import { SiGoogleads } from 'react-icons/si';

export const StatData = [
  {
    title: 'New Orders',
    number: 234,
    icon: <MdOutlineWidgets />,
    color: '#4379F2',
  },
  {
    title: 'Completed Orders',
    number: 446,
    icon: <IoIosDoneAll />,
    color: '#06D001',
  },
  {
    title: 'Cancelled Orders',
    number: 26,
    icon: <MdFreeCancellation />,
    color: '#FF7777',
  },
  {
    title: 'Employees',
    number: 52,
    icon: <SiGoogleads />,
    color: '#6295A2',
  },
];

export const Bar_Chart = [
  {
    quarter: 'January',
    year: 2024,
    month: 1,
    totalPrice: 1000,
  },
  {
    quarter: 'February',
    year: 2024,
    month: 2,
    totalPrice: 2000,
  },
  {
    quarter: 'March',
    year: 2024,
    month: 3,
    totalPrice: 3000,
  },
  {
    quarter: 'April',
    year: 2024,
    month: 4,
    totalPrice: 3000,
  },
  {
    quarter: 'May',
    year: 2024,
    month: 5,
    totalPrice: 3000,
  },
  {
    quarter: 'June',
    year: 2024,
    month: 6,
    totalPrice: 6000,
  },
  {
    quarter: 'July',
    year: 2024,
    month: 7,
    totalPrice: 7000,
  },
  {
    quarter: 'August',
    year: 2024,
    month: 8,
    totalPrice: 9800,
  },
  {
    quarter: 'September',
    year: 2024,
    month: 9,
    totalPrice: 10000,
  },
  {
    quarter: 'October',
    year: 2024,
    month: 10,
    totalPrice: 11000,
  },
  {
    quarter: 'November',
    year: 2024,
    month: 11,
    totalPrice: 12000,
  },
  {
    quarter: 'December',
    year: 2024,
    month: 12,
    totalPrice: 13000,
  }

];

export const PartnerTypeDate = [

  {
    label: <a href="#">UZUM</a>,
    value: 'UZUM',
    key: 'UZUM'
  },
  {
    label: <a href="#">ALIF</a>,
    value: 'ALIF',
    key: 'ALIF'
  },
  {
    label: <a href="#">OPEN CARD</a>,
    value: 'OPEN CARD',
    key: 'OPEN CARD'
  },
  {
    label: <a href="#">ZOOD PAY</a>,
    value: 'ZOOD PAY',
    key: 'ZOOD PAY'
  },
]

