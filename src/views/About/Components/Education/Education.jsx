import { useParams } from 'react-router-dom';
import Alliance from './mdx/Alliance.mdx';
import Strathmore from './mdx/Strathmore.mdx';
const Education = () => {
  let { file } = useParams();
  return (
    <div>
      {file === 'alliance-hs' ? (
        <Alliance />
      ) : file === 'strathmore-uni' ? (
        <Strathmore />
      ) : null}
    </div>
  );
};

export default Education;
