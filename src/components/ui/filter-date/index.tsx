import { FC } from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
import './_style.scss'

export const FilterDate:FC = () => {
    return (
        <Space direction="vertical" size={12}>
        <RangePicker />
      </Space>
    );
};


