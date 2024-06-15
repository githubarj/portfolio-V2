import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOpenKeys } from '../../redux/slices/navSlice';

const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addOpenKeys('projects'));
  }, []);

  return <div>Hi</div>;
};

export default Projects;
