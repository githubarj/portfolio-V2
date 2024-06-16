import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { FaRust, FaSass } from 'react-icons/fa6';
import { IoLogoFirebase } from 'react-icons/io5';
import {
  SiGnubash,
  SiJavascript,
  SiMui,
  SiSolidity,
  SiTypescript,
} from 'react-icons/si';

export const filterIcons = [
  {
    key: 'react',
    label: 'React',
    icon: FaReact,
  },
  {
    key: 'javascript',
    label: 'JavaScript',
    icon: SiJavascript,
  },
  {
    key: 'rust',
    label: 'Rust',
    icon: FaRust,
  },
  {
    key: 'typescript',
    label: 'TypeScript',
    icon: SiTypescript,
  },
  {
    key: 'ant-design',
    label: 'Ant-Design',
    icon: AiOutlineAntDesign,
  },
  {
    key: 'material-ui',
    label: 'Material Ui',
    icon: SiMui,
  },

  {
    key: 'sass',
    label: 'Sass',
    icon: FaSass,
  },

  {
    key: 'solidity',
    label: 'Solidity',
    icon: SiSolidity,
  },
  {
    key: 'bash',
    label: 'Bash',
    icon: SiGnubash,
  },
  {
    key: 'firebase',
    label: 'Firebase',
    icon: IoLogoFirebase,
  },
];
