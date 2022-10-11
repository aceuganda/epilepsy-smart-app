//ProtectedRoute
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
const styles = {
  button: {
    backgroundColor: '#8c3e79',
  }
};
const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
      {userInfo ? (
        <Outlet />
      ) : (
        <div className="onboarding">
          <div className="notify-section" >
            <div></div>
          </div>
          <div className="bottom-section">
            <span className="content">
              <p> You are not authorized to access this page</p>
            </span>
          </div>
          <div>
            <NavLink to="/login">
              <button className='o-btn'>Click here to Login/Register</button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
