import { useParams } from 'react-router-dom';
import SoftwareDeveloper from './mdx/SoftwareDeveloper.mdx';
import TechSupport from './mdx/TechSupport.mdx';
import VolunteeLibrarian from './mdx/VolunteeLibrarian.mdx';
import TechAttachee from './mdx/TechAttachee.mdx';
import StemTeacher from './mdx/StemTeacher.mdx';

function Experience() {
  const { file } = useParams();

  return (
    <div>
      {file === 'software-developer' ? (
        <SoftwareDeveloper />
      ) : file === 'tech-support' ? (
        <TechSupport />
      ) : file === 'voluntee-librarian' ? (
        <VolunteeLibrarian />
      ) : file === 'tech-attachee' ? (
        <TechAttachee />
      ) : file === 'stem-teacher' ? (
        <StemTeacher />
      ) : null}
    </div>
  );
}

export default Experience;
