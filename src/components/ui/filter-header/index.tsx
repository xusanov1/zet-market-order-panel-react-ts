import { FC } from 'react';
import { FilterDate } from '../filter-date';
import { PartnerDropdown } from '../partner-dropdown';
import './_style.scss'
export const HeaderFilter: FC = () => {
  return (
    <div className="filter">
      <div>+</div>
      <div className='filter_actions'>
        <FilterDate />
        <PartnerDropdown />
      </div>
    </div>
  );
};
