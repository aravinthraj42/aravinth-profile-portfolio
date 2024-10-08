const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://aravinthraj42.github.io/aravinth-profile-portfolio/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aravinth Raj',
  role: 'Front End Developer',
  description:
    'Accomplished Front-End Developer with 3 years of experience at Infosys, specializing in creating robust and user-friendly web applications using React JS. Proficient in all stages of the software development lifecycle, from initial requirement gathering to deployment and support.',
  resume: 'https://drive.google.com/file/d/1cmnd6CQI03LPMe6s9384HuxgpWstg-kF/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/aravinth-raj-developer',
    github: 'https://github.com/aravinthraj42',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Infosys - Project: American Express - Card Service',
    description:
      'Worked for American Express Client, We developed and enhanced reusable react components, implemented new features, and contributed numerous pull requests to the clients Git repository.  deployed code via Jenkins, and handled version updates for security and feature upgrades. Additionally, we enhanced legacy applications, supported the production team, and provided knowledge transfer sessions to new joiners.',
    stack: ['React', 'JavaScript', 'Java' , 'JSP'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
//   {
//     name: 'Project 2',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },
//   {
//     name: 'Project 3',
//     description:
//       'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
//     stack: ['SASS', 'TypeScript', 'React'],
//     sourceCode: 'https://github.com',
//     livePreview: 'https://github.com',
//   },F:\Git\Profile\aravinthportfolio\public\Assests\image_left.jpg public\Assests\image_right.jpg
]
const image = {
  // leftImage: '../../public/Assests/image_left.jpg',
  // rightImage: '../../public/Assests/image_right.jpg',
}

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'Github',
  'Node JS',
  'JSP',
  'Prompt Engineering', 
  'MySQL', 
  'MongoDB',
  'Postman', 
  'Jenkins',
  'ChromeDevtools', 
  'NPM',
  'Jest',
  'Enzyme',

]
const education = {
  // education is optional - if left empty Contact section won't show up
  degree1: 'B.Sc. in Mathematics, Hindustan College of Arts and Science, Coimbatore, Bharathiar University (2018-2021)',
  degree2: 'MCA (Distance Education), Madras University (2023-2025)',
}

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'aravinthraj42@gmail.com',
}

export { header, about, projects,image, skills, education, contact }
