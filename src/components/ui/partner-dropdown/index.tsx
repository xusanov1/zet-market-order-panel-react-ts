import { FC } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import './_style.scss'
import { PartnerTypeDate } from '@/constants/index.data';


const items = PartnerTypeDate as MenuProps['items']

export const PartnerDropdown:FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Select Partner
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
