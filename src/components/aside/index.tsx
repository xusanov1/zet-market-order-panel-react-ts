import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { checkRole } from '@/utils/index';
import { navigation } from '@/constants/index.data';
import type { TnavigationType } from '@/types';
import { PopConfirm } from '../ui';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import './_style.scss';

let role = localStorage.getItem('role') || 'admin';

const index: FC = () => {
  const { isOpen } = useSelector((state: RootState) => state.toggle);

  const SlideAside = {
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'all 0.02s ease-in',
  };

  return (
    <aside style={SlideAside}>
      <div className="logo">
        <img width={24} src="/z-logo.png" alt="logo" />
        <span className="logo-text">ZET MARKET B2B</span>
      </div>

      <ul className="list">
        {checkRole(navigation, role).map((item: TnavigationType, i: number) => (
          <li key={i}>
            <NavLink className="list-item" to={item.path}>
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="settings">
        <img className="avatar" src="/avatar.png" alt="me" />
        <p className="full-name">Izzatillo Khusanov</p>
        <PopConfirm />
      </div>
    </aside>
  );
};

export default index;
