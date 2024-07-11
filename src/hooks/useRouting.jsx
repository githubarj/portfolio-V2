import { useLocation, useNavigate } from 'react-router-dom';

const useRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathArray = location.pathname.split('/').filter(Boolean);

  const navigateTo = (path) => {
    navigate(path);
  };

  return { pathArray, navigateTo };
};

export default useRouting;
