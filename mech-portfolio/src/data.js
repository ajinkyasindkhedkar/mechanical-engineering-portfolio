// Edit the portfolio content here. All featured artwork is illustrative placeholder artwork.
export const profile = {
  name: 'Ajinkya Sindkhedkar',
  initials: 'AS',
  eyebrow: 'MECHANICAL ENGINEER  /  DESIGN & RESEARCH',
  headline: 'Engineering ideas into physical reality.',
  description: 'I design, analyze, and prototype mechanical systems at the intersection of robotics, medical devices, and product engineering.',
  school: 'M.S. Mechanical Engineering · Carnegie Mellon University',
  location: 'Pittsburgh, Pennsylvania',
  // Replace null with your actual links to enable them in the footer.
  email: null,
  linkedin: null,
  github: null,
  resume: null,
};

export const projects = [
  {
    id: 'gripper', number: '01', title: 'Compliant Prosthetic Gripper',
    subtitle: 'A tendon-driven anthropomorphic hand with passive compliant grasping.',
    category: 'Biomedical', tags: ['Compliant mechanisms', 'ANSYS', '3D printing'],
    image: '/gripper.svg',
    overview: 'Designed and prototyped a lightweight, low-cost hand gripper with compliant fingers, passive curled gripping, and tendon-driven opening. Work included flexure development, mechanical analysis, and actuation integration.',
    contribution: 'Finger and palm design, FEA, material selection, fabrication, integration and testing.',
    status: 'Prototype completed · Indian patent application published',
  },
  {
    id: 'baja', number: '02', title: 'Electric BAJA Vehicle',
    subtitle: 'Structural design and simulation for an off-road electric racing vehicle.',
    category: 'Mechanical', tags: ['SolidWorks', 'Structural FEA', 'Vehicle dynamics'],
    image: '/baja.svg',
    overview: 'Worked on the vehicle roll cage, battery enclosure, CAE validation and overall vehicle integration for the student eBAJA team.',
    contribution: 'Chassis and battery team member; virtual simulation lead; vehicle integration co-lead.',
    status: 'Student competition project',
  },
  {
    id: 'guidewire', number: '03', title: 'Guidewire Sensing & Actuation',
    subtitle: 'Exploring microscale sensing and control for a biomedical guidewire.',
    category: 'Biomedical', tags: ['Microrobotics', 'Sensors', 'Concept development'],
    image: '/guidewire.svg',
    overview: 'Early-stage research in Carnegie Mellon’s Microrobotics Lab into minimally instrumented guidewire sensing and motion control. Current work examines design constraints and sensing approaches.',
    contribution: 'Literature review and early concept exploration; analysis, fabrication and testing are planned.',
    status: 'Ongoing research · Public-safe summary',
  },
  {
    id: 'dna', number: '04', title: 'Programmable DNA Origami Switches',
    subtitle: 'A two-hinge concept exploring multiple stable configurations at the nanoscale.',
    category: 'Robotics', tags: ['Mechanisms', 'scadnano', 'oxView'],
    image: '/dna.svg',
    overview: 'Extending a bistable DNA-origami switch concept with a second hinge and switch to explore a system with four proposed stable-state combinations.',
    contribution: 'Geometry adaptation, model development and planned computational simulation.',
    status: 'Course project · Concept / simulation stage',
  },
  {
    id: 'thermal', number: '05', title: 'Automotive Thermal Systems',
    subtitle: 'Research internship involving CFD-based heat-exchanger engineering.',
    category: 'Mechanical', tags: ['CFD', 'Thermal engineering', 'Automotive'],
    image: '/thermal.svg',
    overview: 'Contributed to automotive thermal engineering research in the Engineering Research Center at Tata Motors. Public portfolio details are intentionally limited.',
    contribution: 'Research internship on heat-exchanger systems for passenger vehicles.',
    status: 'Industry internship · Non-confidential overview',
  },
];
