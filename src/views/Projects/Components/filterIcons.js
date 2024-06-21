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
    color: '#61DAFB',
  },
  {
    key: 'javascript',
    label: 'JavaScript',
    icon: SiJavascript,
    color: '#c6b313',
  },

  // {
  //   key: 'typescript',
  //   label: 'TypeScript',
  //   icon: SiTypescript,
  //   color: '#3178C6',
  // },
  {
    key: 'ant-design',
    label: 'Ant-Design',
    icon: AiOutlineAntDesign,
    color: '#1890FF',
  },
  {
    key: 'material-ui',
    label: 'Material Ui',
    icon: SiMui,
    color: '#1976d2',
  },

  {
    key: 'sass',
    label: 'Sass',
    icon: FaSass,
    color: '#CC6699',
  },

  {
    key: 'solidity',
    label: 'Solidity',
    icon: SiSolidity,
    color: '#565656',
  },
  // {
  //   key: 'bash',
  //   label: 'Bash',
  //   icon: SiGnubash,
  //   color: '#4EAA25',
  // },
  {
    key: 'firebase',
    label: 'Firebase',
    icon: IoLogoFirebase,
    color: '#E6B31A',
  },
];
