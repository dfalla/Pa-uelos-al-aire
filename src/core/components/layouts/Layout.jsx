import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import Navigation from '../Navigation';

const Layout = () => {
  const { token } = useSelector(state => state.auth);

  if(!token) return <Navigate to={'/auth'} replace/>;

  return (
    <>
      <Navigation/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout