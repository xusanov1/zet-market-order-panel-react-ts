import { FC } from 'react';
import './_style.scss';
import { HeaderFilter } from '@/components/ui';
import { DataTable } from '@/components';

const index: FC = () => {
  return (
    <div>
      <HeaderFilter />
      <DataTable/>
    </div>
  );
};

export default index;
