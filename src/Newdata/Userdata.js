const userData = [
    {
      id: 1,
      firstName: 'Susan',
      lastName: 'Jordon',
      email: 'susan@example.com',
      address: '123 Main St, Mumbai, Maharashtra, India',
      photo: './Images/1.jpg',
      description: 'I am a software engineer with a passion for creating efficient and user-friendly applications.',
      hobbies: ['Reading', 'Hiking'],
      achievements: ['Employee of the Month', 'Best Project Award'],
      skills: ['JavaScript', 'React', 'Node.js'],
      contacts: {
        phone: '+91 1234567890'
      }
    },
    {
      id: 2,
      firstName: 'Adrienne',
      lastName: 'Doak',
      email: 'adrienne@example.com',
      address: '456 Elm St, Pune, Maharashtra, India',
      photo: './Images/2.jpg',
      description: 'I am a graphic designer who loves to create visually stunning designs that captivate the audience.',
      hobbies: ['Painting', 'Photography'],
      achievements: ['Design Excellence Award', 'Client Appreciation Award'],
      skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design'],
      contacts: {
        phone: '+91 9876543210'
      }
    },
    {
      id: 3,
      firstName: 'Rolf',
      lastName: 'Hegdal',
      email: 'rolf@123',
      address: '789 Oak St, Nagpur, Maharashtra, India',
      photo: './Images/3.jpg',
      description: 'I am a marketing professional with a knack for understanding consumer behavior and creating impactful marketing campaigns.',
      hobbies: ['Traveling', 'Gardening'],
      achievements: ['Marketing Campaign Award', 'Brand Ambassador Recognition'],
      skills: ['Market Research', 'Social Media Marketing', 'Content Creation'],
      contacts: {
        phone: '+91 9876543210'
      }
    },
    {
      id: 4,
      firstName: 'Kent',
      lastName: 'Rosner',
      email: 'kent@example.com',
      address: '101 Pine St, Nashik, Maharashtra, India',
      photo: './Images/4.jpg',
      description: 'I am a sales executive with a passion for building strong client relationships and exceeding sales targets.',
      hobbies: ['Playing Golf', 'Cooking'],
      achievements: ['Top Sales Performer', 'Salesperson of the Year'],
      skills: ['Negotiation', 'Relationship Building', 'Sales Strategy'],
      contacts: {
        phone: '+91 1234567890'
      }
    },
    {
      id: 5,
      firstName: 'Arsenio',
      lastName: 'Grant',
      email: 'arsenio@example.com',
      address: '222 Cedar St, Aurangabad, Maharashtra, India',
      photo: './Images/5.jpg',
      description: 'I am a teacher who is passionate about shaping young minds and making a positive impact on society.',
      hobbies: ['Playing Musical Instruments', 'Volunteering'],
      achievements: ['Best Teacher Award', 'Educational Excellence Award'],
      skills: ['Curriculum Development', 'Classroom Management', 'Student Engagement'],
      contacts: {
        phone: '+91 9876543210'
      }
    },
    {
      id: 6,
      firstName: 'Laurena',
      lastName: 'Lurie',
      email: 'laurena@example.com',
      address: '333 Maple St, Solapur, Maharashtra, India',
      photo: './Images/6.jpg',
      description: 'I am a freelance writer who enjoys crafting compelling stories and engaging content across various platforms.',
      hobbies: ['Writing Poetry', 'Yoga'],
      achievements: ['Published Author', 'Content Creator of the Year'],
      skills: ['Copywriting', 'Editing', 'SEO Optimization'],
      contacts: {
        phone: '+91 1234567890'
      }
    },
    {
      id: 7,
      firstName: 'George',
      lastName: 'Tallman',
      email: 'george@example.com',
      address: '444 Oak St, Kolhapur, Maharashtra, India',
      photo: './Images/7.jpg',
      description: 'I am a project manager with extensive experience in leading cross-functional teams and delivering projects on time and within budget.',
      hobbies: ['Playing Chess', 'Skiing'],
      achievements: ['Project Management Excellence Award', 'Team Leader Recognition'],
      skills: ['Project Planning', 'Team Coordination', 'Risk Management'],
      contacts: {
        phone: '+91 9876543210'
      }
    },
    {
      id: 8,
      firstName: 'Jesica',
      lastName: 'Watlington',
      email: 'jesica@example.com',
      address: '555 Elm St, Amravati, Maharashtra, India',
      photo: './Images/8.jpg',
      description: 'I am an event planner who thrives on creating memorable experiences for clients and guests.',
      hobbies: ['Dancing', 'Traveling'],
      achievements: ['Event Planner of the Year', 'Excellence in Event Management'],
      skills: ['Event Coordination', 'Vendor Management', 'Budget Planning'],
      contacts: {
        phone: '+91 1234567890'
      }
    },
    {
      id: 9,
      firstName: 'Melissa',
      lastName: 'Freedman',
      email: 'melissa@example.com',
      address: '777 Cedar St, Latur, Maharashtra, India',
      photo: './Images/9.jpg',
      description: 'I am a financial analyst with expertise in financial planning and analysis, budgeting, and forecasting.',
      hobbies: ['Swimming', 'Reading Financial News'],
      achievements: ['Financial Analyst of the Year', 'Budget Management Excellence'],
      skills: ['Financial Modeling', 'Data Analysis', 'Risk Assessment'],
      contacts: {
        phone: '+91 9876543210'
      }
    },
    {
      id: 10,
      firstName: 'Eleanor',
      lastName: 'Barton',
      email: 'eleanor@example.com',
      address: '888 Oak St, Satara, Maharashtra, India',
      photo: './Images/10.jpg',
      description: 'I am a human resources manager passionate about fostering a positive work culture and employee development.',
      hobbies: ['Cooking', 'Yoga'],
      achievements: ['HR Manager of the Year', 'Employee Relations Excellence'],
      skills: ['Talent Acquisition', 'Performance Management', 'Employee Engagement'],
      contacts: {
        phone: '+91 1234567890'
      }
    },
    {
        id: 11,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        address: '999 Maple St, Nagpur, Maharashtra, India',
        photo: './Images/11.jpg',
        description: 'I am a software developer specializing in web applications with a focus on front-end technologies.',
        hobbies: ['Gaming', 'Cooking'],
        achievements: ['Web Developer Certification', 'Hackathon Winner'],
        skills: ['HTML', 'CSS', 'JavaScript'],
        contacts: {
            phone: '+91 1234567890'
        }
    },
    {
        id: 12,
        firstName: 'Emily',
        lastName: 'Smith',
        email: 'emily@example.com',
        address: '111 Pine St, Pune, Maharashtra, India',
        photo: './Images/12.jpg',
        description: 'I am a UX/UI designer passionate about creating intuitive and visually appealing user interfaces.',
        hobbies: ['Traveling', 'Photography'],
        achievements: ['UX Design Certification', 'Design Competition Winner'],
        skills: ['Adobe XD', 'Sketch', 'Wireframing'],
        contacts: {
            phone: '+91 9876543210'
        }
    }
 
  ];
  
  export { userData };
  