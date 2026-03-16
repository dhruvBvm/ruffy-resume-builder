// import mongoose from "mongoose";
// import { Resume } from "./models/resumes.mjs"; // adjust path if needed

// const MONGO_URI = "your_mongodb_connection_string";

// const firstNames = ["Rahul","Amit","Priya","Neha","Karan","Rohit","Sneha","Arjun","Pooja","Aditya"];
// const lastNames = ["Patel","Shah","Mehta","Singh","Verma","Joshi","Desai","Rao","Nair","Kapoor"];
// const cities = ["Surat","Ahmedabad","Mumbai","Delhi","Bangalore","Pune"];
// const roles = [
//   "Full Stack Developer",
//   "Frontend Developer",
//   "Backend Developer",
//   "DevOps Engineer",
//   "Data Analyst"
// ];

// const techStacks = [
//   ["Node.js","Express","MongoDB"],
//   ["React","Tailwind","Redux"],
//   ["Python","Pandas","SQL"],
//   ["Docker","AWS","Jenkins"],
//   ["Flutter","Firebase"]
// ];

// function randomItem(arr) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// async function generateResumes(count = 50) {
//   const resumes = [];

//   for (let i = 0; i < count; i++) {

//     const firstName = randomItem(firstNames);
//     const lastName = randomItem(lastNames);
//     const role = randomItem(roles);
//     const city = randomItem(cities);
//     const stack = randomItem(techStacks);

//     resumes.push({
//       personalsDetails: {
//         firstName,
//         lastName,
//         age: 22 + Math.floor(Math.random() * 6),
//         emailAddress: `${firstName.toLowerCase()}${i}@mail.com`,
//         jobTarget: role,
//         phoneNumber: `90000000${10+i}`,
//         optionalNumber: `90000000${10+i}`,
//         linkedInUrl: `https://linkedin.com/in/${firstName}${i}`,
//         githubUrl: `https://github.com/${firstName}${i}`,
//         birthDate: new Date(1998 + Math.floor(Math.random()*5),1,10)
//       },

//       optionalsDetails: {
//         gender: Math.random() > 0.5 ? "Male" : "Female",
//         personalWebsite: `https://${firstName.toLowerCase()}.dev`,
//         country: "India",
//         state: "Gujarat",
//         city,
//         postalCode: 395001,
//         nationality: "Indian",
//         summary: `${role} passionate about building scalable applications.`
//       },

//       educationalDetails: [
//         {
//           degreeName: "B.Tech Computer Engineering",
//           collegeName: "GTU",
//           startYear: 2018,
//           endYear: 2022,
//           CGPA: (7 + Math.random()*2).toFixed(2),
//           summary: "Focused on software development."
//         }
//       ],

//       projectsDetails: [
//         {
//           projectName: "Project " + (i+1),
//           projectRole: role,
//           projectStartYear: 2023,
//           projectEndYear: 2024,
//           projectDuration: 12,
//           projectSummary: "A professional software project.",
//           techStack: stack
//         }
//       ],

//       skillsDetails: [
//         {
//           skillFieldName: "Programming",
//           skillsStack: [
//             {
//               skillName: stack[0],
//               skillLevel: "Advanced",
//               skillsExperience: 2 + Math.floor(Math.random()*3)
//             }
//           ],
//           skillSummary: "Professional software development."
//         }
//       ]
//     });

//   }

//   await Resume.insertMany(resumes);
//   console.log(`${count} resumes inserted successfully`);
// }

// async function run() {
//   await mongoose.connect(MONGO_URI);
//   await generateResumes(5000); // change to 100 or 1000 if needed
//   mongoose.disconnect();
// }

// run();