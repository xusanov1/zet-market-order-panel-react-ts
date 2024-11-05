import { FC, useEffect } from 'react';
import { Outlet } from 'react-router';
import { Aside, Header } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/stores/store';
import { useLocation } from 'react-router';
import { setSearchAction } from '@/stores/search-slice';
import './_style.scss';

export const Dashboard: FC = () => {
  const {isOpen} =  useSelector((state:RootState) => state.toggle)
  const wrapperStyle = {
    minWidth: isOpen ? 'calc(100vw - 320px)' : '100vw',
    transform: isOpen ? 'translateX(0)' : 'translateX(-320px)',
    transition: 'all 0.02s ease-in',
  }

  const {pathname}:{pathname:any} = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchAction(pathname))
  },[pathname])
  console.log(pathname)
  return (
    <>
      <main>
        <Aside />
        <section className="wrapper" style={wrapperStyle}>
          <Header />
          <section className="route" >
            <Outlet />
          </section>
        </section>
      </main>
    </>
  );
};
