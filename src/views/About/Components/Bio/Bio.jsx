import Overview from './mdx/Overview.mdx';
import Interests from './mdx/Interests.mdx';
import { useParams } from 'react-router-dom';
const Bio = () => {
  const { file } = useParams();
  return (
    <div>
      {file === 'overview' ? (
        <Overview />
      ) : file === 'interests' ? (
        <Interests />
      ) : null}
    </div>
  );
};

export default Bio;
