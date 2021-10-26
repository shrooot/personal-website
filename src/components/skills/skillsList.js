import React from 'react';
import { FaBootstrap, FaFlask, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import {
  DiGit,
  DiJava,
  DiJavascript,
  DiJqueryLogo,
  DiMongodb,
  DiMysql,
  DiPython,
} from 'react-icons/di';
import { AiFillApi } from 'react-icons/ai';
import {
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiScikitlearn,
  SiSelenium,
  SiSequelize,
  SiTensorflow,
} from 'react-icons/si';
import { FcScatterPlot } from 'react-icons/fc';

const SkillsList = [
  {
    domain_name: 'Programming',
    description: 'I can code in ...',
    skill_name: [
      { name: 'C & C++', img: <SiCplusplus /> },
      { name: 'Python', img: <DiPython /> },
      { name: 'JavaScript', img: <DiJavascript /> },
      { name: 'Java', img: <DiJava /> },
    ],
  },
  {
    domain_name: 'Web Development',
    description: 'I am profoundly interested in Web Dev technologies',
    skill_name: [
      { name: 'HTML', img: <FaHtml5 /> },
      { name: 'CSS', img: <FaCss3 /> },
      { name: 'Bootstrap', img: <FaBootstrap /> },
      { name: 'React.js', img: <FaReact /> },
      { name: 'Node.js', img: <FaNodeJs /> },
      { name: 'MongoDB', img: <DiMongodb /> },
      { name: 'MySQL', img: <DiMysql /> },
      { name: 'Flask', img: <FaFlask /> },
      { name: 'API Design', img: <AiFillApi /> },
    ],
  },
  {
    domain_name: 'Machine Learning',
    description: 'The Tech Field that fascinates me the most',
    skill_name: [
      { name: 'Tensorflow', img: <SiTensorflow /> },
      { name: 'OpenCV', img: <SiOpencv /> },
      { name: 'Scikit-Learn', img: <SiScikitlearn /> },
      { name: 'Pandas', img: <SiPandas /> },
      { name: 'Numpy', img: <SiNumpy /> },
      { name: 'Matplotlib', img: <FcScatterPlot /> },
    ],
  },
  {
    //jQuery, Selenium, Express.js, Mongoose, Sequelize, Git
    domain_name: 'Other Skills',
    description: 'Well learning something extra never hurt anyone ;)',
    skill_name: [
      { name: 'jQuery', img: <DiJqueryLogo /> },
      { name: 'Selenium', img: <SiSelenium /> },
      { name: 'Express.js', img: <SiExpress /> },
      { name: 'Mongoose', img: <SiMongodb /> },
      { name: 'Sequelize', img: <SiSequelize /> },
      { name: 'Git', img: <DiGit /> },
    ],
  },
];

export default SkillsList;
