import { useParams } from 'react-router-dom';
import SoftwareDeveloper from './mdx/SoftwareDeveloper';
import TechSupport from './mdx/TechSupport';
import VolunteeLibrarian from './mdx/VolunteeLibrarian';
import TechAttachee from './mdx/TechAttachee';
import StemTeacher from './mdx/StemTeacher';

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
