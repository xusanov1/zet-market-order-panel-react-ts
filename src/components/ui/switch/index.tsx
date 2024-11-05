import {FC} from 'react'
import { Space, Switch } from "antd";
import { useDispatch } from 'react-redux';
import { toggleAside } from '@/stores/toggle-slice';

export const ToggleButton:FC = () => {

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleAside());
  };

  return (
    <Space direction='vertical'>
      <Switch onChange={toggle} checkedChildren='opened menu' unCheckedChildren='closed menu' />
    </Space>
  );
};
