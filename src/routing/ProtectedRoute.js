//ProtectedRoute
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
      {userInfo ? (
        <Outlet />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="alert alert-danger">
                You are not authorized to access this page. Please{' '}
                <NavLink to="/login">login</NavLink> to continue.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
