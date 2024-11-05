import { FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import { ToggleButton } from '../ui';
import './_style.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';

const index: FC = () => {
 const {placeholder} = useSelector((state:RootState) => state.search)
  return (
    <header>
      <ToggleButton />
      <div className="search">
        <input
          id="search"
          className="input"
          type="text"
          placeholder={placeholder}
        />
        <label htmlFor="search">
          <CiSearch />
        </label>
      </div>
    </header>
  );
};

export default index;
