import imaage1 from "../assets/imaage1.jpg";
import portfolio from "../assets/portfolio.jpg";

const ProjectCardData = [
  {
    imgSrc: imaage1,
    title: "Student Management System",
    text: "The Student Management System is a comprehensive web application designed to streamline the management of student information and academic records. Built with Django and styled using Bootstrap, the application allows users to perform CRUD operations on student records.",
    source:
      "https://github.com/Mathias-Kabango3/Student_Management_System/tree/main/student_management_system",
    view: "",
  },
  {
    imgSrc: portfolio,
    title: "Portfolio",
    text: "This portfolio showcases my skills and projects as a developer. Built with React and styled with CSS, it features a responsive design and intuitive navigation. The site includes sections for my projects, skills, and a contact form, allowing visitors to explore my work and connect with me easily.",
    source: "",
    view: "/",
  },
];

export default ProjectCardData;
