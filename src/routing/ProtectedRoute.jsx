//ProtectedRoute
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import LogoutImage from '../assets/img/Onboarding/getStarted.png';

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
      {userInfo ? (
        <Outlet />
      ) : (
        <div className="onboarding">
          <div className="notify-section">
            <div>
              <img src={LogoutImage} alt="Logged Out" />
            </div>
          </div>
          <div className="bottom-section">
            <span className="content">
              <p>
                {' '}
                You are currently logged out. You will need to log in again to access the
                application.
              </p>
            </span>
          </div>
          <div>
            <NavLink to="/login">
              <button className="o-btn">Click here to Login</button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
