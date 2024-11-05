import { FC } from 'react';
import { StatCard } from '@/components/ui';
import { StatData } from '@constants/index.data';
import { BarChart } from '@/charts/index';
import './_style.scss';

const index: FC = () => {
  return (
    <>
      <div className="stat_cards">
        {StatData.map((item, index) => {
          return <StatCard key={index} {...item} />;
        })}
      </div>
      <div className='chart'>
        <BarChart />
      </div>
    </>
  );
};

export default index;
