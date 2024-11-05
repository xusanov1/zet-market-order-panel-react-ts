import React from 'react';
import type { PopconfirmProps } from 'antd';
import { Button, message, Popconfirm } from 'antd';
import { CoffeeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import './_style.scss';



export const PopConfirm: React.FC = () => {
  const confirm: PopconfirmProps['onConfirm'] = (e) => {
    console.log(e);
    message.success('Click on Yes');
    navigate('/login')
    localStorage.clear()
  };
  
  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  const navigate = useNavigate();
return (
  <Popconfirm
    title="Delete the task"
    description="Are you sure to delete this task?"
    onConfirm={confirm}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
    placement="bottomRight"
  >
    <Button className="pop-btn" type="primary">
      <CoffeeOutlined />
      <span>LOGOUT</span>
    </Button>
  </Popconfirm>)

};
