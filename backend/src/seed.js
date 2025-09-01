import 'dotenv/config';
import mongoose from 'mongoose';
import Profile from './models/profile.js';
import Project from './models/project.js';
import connectDB from './db.js';

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Clearing the database...');
    await Profile.deleteMany({});
    await Project.deleteMany({});

    // -------- Projects --------
    const projectsData = [
      {
        title: '🚀 LeetMetrics – A Simple LeetCode Stats Fetcher',
        description: `A web app that fetches and displays LeetCode stats using the LeetCode GraphQL API. 📊
        Features:
        ✅ Enter a LeetCode username and fetch stats instantly
        ✅ Displays solved problems and total problems (Easy, Medium, Hard)
        ✅ Simple HTML, CSS, and JavaScript with Fetch API
        ✅ Clean and responsive UI
        Tech Stack:
        🔸 HTML – Structuring the webpage
        🔸 CSS – Styling for a clean look
        🔸 JavaScript – Fetching and displaying API data
        Key Learnings:
        ✅ Working with GraphQL API
        ✅ Handling API requests using Fetch API
        ✅ Building an interactive and responsive UI`,
        skills: ['HTML', 'CSS', 'JavaScript', 'Fetch API', 'GraphQL'],
        links: [
          { label: 'GitHub', url: 'https://github.com/Anantgitu/LeetMetrics' },
          { label: 'LeetCode', url: 'https://leetcode.com/u/anant_hitman45/' },
        ],
      },
      {
        title: '🚀 Full Stack Todo List App – Track Tasks with Ease',
        description: `A full-stack Todo List Application built using MongoDB, Express.js, Node.js, and EJS! ✅🧠
        Features:
        ✅ Add tasks with title, description, priority, category & due date
        ✅ View all, completed, or pending tasks
        ✅ Mark tasks as done or delete them
        ✅ Fully dynamic with MongoDB integration
        ✅ Environment config for dev/prod modes via .env
        Tech Stack:
        🔸 Node.js & Express.js – Server-side logic
        🔸 MongoDB & Mongoose – Database and schema modeling
        🔸 EJS, HTML, CSS – Templating and UI
        🔸 dotenv, Git, VSCode, Git Bash – Dev tools & setup
        Key Learnings:
        ✅ CRUD operations with Mongoose
        ✅ RESTful routing & Express middleware
        ✅ Using environment variables and config files
        ✅ Structuring a full-stack MVC-style app`,
        skills: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'JavaScript', 'CSS', 'HTML'],
        links: [
          { label: 'GitHub', url: 'https://github.com/Anantgitu' },
          { label: 'LinkedIn', url: 'www.linkedin.com/in/anant-sharma-7626772a3' },
        ],
      },
    ];

    const createdProjects = await Project.create(projectsData);
    console.log(`${createdProjects.length} projects have been created.`);

    // -------- Profile --------
    console.log('Creating user profile...');
    const profileData = {
      name: 'Anant Kumar',
      email: 'sharmaanant5252@gmail.com',
      education: [
        {
          institution: 'National Institute of Technology, Nagaland',
          degree: 'B.Tech in Electronics and Instrumentation Engineering',
          year: 2027,
          cgpa: 8.42,
        },
        {
          institution: 'SK High School, Chanda',
          degree: 'Intermediate',
          year: 2022,
        },
        {
          institution: 'SK High School, Chanda',
          degree: 'Matriculation',
          year: 2020,
        },
      ],
      skills: [
        { name: 'JavaScript', level: 6 },
        { name: 'C++', level: 7 },
        { name: 'C', level: 6 },
        { name: 'HTML', level: 7 },
        { name: 'CSS', level: 6 },
        { name: 'MongoDB', level: 6 },
        { name: 'SQL', level: 6 },
        { name: 'Express.js', level: 6 },
        { name: 'Git', level: 7 },
      ],
      projects: createdProjects.map(p => p._id),
      work: [],
      links: {
        github: 'https://github.com/Anantgitu',
        linkedin: 'www.linkedin.com/in/anant-sharma-7626772a3',
        leetcode: 'https://leetcode.com/u/anant_hitman45/',
      },
    };

    await Profile.create(profileData);
    console.log('Profile for Anant Kumar created successfully.');

    console.log('\nSeeding complete!');
  } catch (error) {
    console.error('Error during database seeding:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Database disconnected.');
  }
};

seedDatabase();
