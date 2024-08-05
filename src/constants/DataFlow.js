import { images } from "./AssetsFile";
// Services page
const Services = [
    {
        id: 1,
        type: "App Development",
        content: "Dedicated to app development, I specialize in React Native & Material-UI, creating cross-platform mobile solutions with intuitive design and user-focused functionality.",
        logo: images.mobiledev,
    },
    {
        id: 2,
        type: "Machine Learning",
        content: "Fueled by a passion for Machine Learning, I explore algorithms and techniques to derive insights, innovate solutions, and empower data-driven decisions, shaping a smarter tomorrow.",
        logo: images.machinelearning,
    },
    {
        id: 3,
        type: "Data Science",
        content: "Driven by a passion for Data Science, I explore datasets, apply analytical methods, and develop models to uncover insights, solve complex problems, and drive informed decisions for a smarter future.",
        logo: images.datasceince,
    },
    {
        id: 4,
        type: "Web Development",
        content: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative.",
        logo: images.webservices,
    },
]

// Experience section >> Home page
const ExperienceData = [
    {
        id: 1,
        company: "TRA",
        duration: "8Months",
        technologies: "React, React native, JavaScript, HTML, CSS",
        role: "Frontend Developer",
        compLogo: images.sitelogo,
    },
    {
        id: 2,
        company: "Deveint Ltd.",
        duration: "4Months",
        technologies: "React, React native, JavaScript, HTML, CSS, PHP, MySQL",
        role: "Full Stack Developer",
        compLogo: images.sitelogo,
    },
    {
        id: 3,
        company: "Huawei",
        duration: "1.5Year",
        technologies: "Big Data, ML, Cloud Computing",
        role: "Seed for future",
        compLogo: images.sitelogo,
    },
]

// Projects >> Links
// https://ficyouths-site.netlify.app
// https://dorminant-color-detector-in-an-image.netlify.app
// https://facial-recognition-based-attendance.netlify.app
// https://shopping-cartpro.netlify.app
// https://loan-prediction.netlify.app
// https://prototype295.netlify.app
// https://faqquizes.netlify.app
// https://multiple-profile-todo.netlify.app
// https://commerceadmin.netlify.app
const ProjectData = [
    {
        id: 1,
        category: "Website",
        proName: "Modern Dashboard",
        proLink: "https://commerceadmin.netlify.app",
        proImage: images.proDashboad,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 2,
        category: "Website",
        proName: "Youth Service",
        proLink: "https://ficyouths-site.netlify.app",
        proImage: images.projectFIC,
        start: "Jan, 2023",
        end: "Mar, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 3,
        category: "ML",
        proName: "Color Shades",
        proLink: "https://dorminant-color-detector-in-an-image.netlify.app",
        proImage: images.proDominantColor,
        start: "Aug, 2022",
        end: "Dec, 2022",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 4,
        category: "ML",
        proName: "Facial Attendance",
        proLink: "https://facial-recognition-based-attendance.netlify.app",
        proImage: images.proFacial,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 5,
        category: "Website",
        proName: "Online Store",
        proLink: "https://shopping-cartpro.netlify.app",
        proImage: images.proShopping,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 6,
        category: "DS",
        proName: "Loan Classifier",
        proLink: "https://loan-prediction.netlify.app",
        proImage: images.proLoan,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 7,
        category: "Website",
        proName: "Free Template",
        proLink: "https://prototype295.netlify.app",
        proImage: images.proPortTemplate,
        start: "Jan, 2024",
        end: "Mar, 2024",
        isComplited: false,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 8,
        category: "Website",
        proName: "FAQ Sanple",
        proLink: "https://faqquizes.netlify.app",
        proImage: images.proFaq,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
    {
        id: 9,
        category: "App",
        proName: "T0-do App",
        proLink: "https://multiple-profile-todo.netlify.app",
        proImage: images.proTodoList,
        start: "Feb, 2023",
        end: "Jun, 2023",
        isComplited: true,
        description: "With a fervent dedication to web development, I create dynamic, responsive websites using modern tools and frameworks. From design to deployment, I strive to deliver seamless user experiences and innovative solutions that captivate and engage audiences.",
    },
]

const ExperienceLevel = [
    {
        id: 1,
        level: "Academic",
        position: "4th Year Project",
        workplace: "South Eastern Kenya University",
        duration: 6,
        data: [
            {
                id: 1,
                name: "Facial Recognition Based Attendance",
                category: "Machine Learning (ML)",
                technologies: ["React", "HTML5", "CSS3", "HTML/CSS", "JavaScript", "Material UI", "Styled Component", "APIs", "RESTFul APIs", "Pyhton(Flask)", "Scikit-learn", "Pandas", "Matplotlib", "Numpy", "KNN"],
                description:[
                    "Data cleaning was performed to preprocess the facial images and remove any noise or artifacts.",
                    "Facial feature extraction was conducted to identify key landmarks and features from the facial images.",
                    "A database of preprocessed facial images was created to store the extracted features for each individual.",
                    "A facial recognition model was trained using machine learning algorithms to recognize individuals based on their facial features.",
                    "The attendance system was integrated with the facial recognition model to match live facial images with the stored database.",
                    "Real-time facial detection and recognition were implemented to capture attendance without manual intervention.",
                    "Attendance records were automatically updated based on the recognition results.",
                    "The system was tested and evaluated to ensure accuracy, reliability, and scalability.",
                    "Feedback and improvements were incorporated based on the evaluation results to enhance system performance.",
                    "Documentation and user guides were prepared to facilitate the deployment and usage of the attendance system."
                ],
                problemSolved: "The problem involves creating a system that automates the process of tracking attendance by using facial recognition technology. Instead of manual attendance-taking methods, such as paper-based sign-in sheets or electronic keypads, the system uses facial recognition to identify individuals and record their attendance automatically. This solution streamlines the attendance tracking process, reduces the potential for errors, and provides a more efficient and convenient way to manage attendance in various settings, such as schools, workplaces, or events.",
                achivements: [
                    "Achieved seamless integration between frontend and backend technologies, resulting in a cohesive and functional facial recognition attendance system.",
                    "Leveraged React and Material UI to create an intuitive and responsive user interface, enhancing user satisfaction and usability.",
                    "Utilized Python libraries such as Scikit-learn, Pandas, Matplotlib, and NumPy to implement robust facial recognition algorithms and manage attendance data effectively.",
                    "Achieved automation of attendance tracking, reducing manual effort and potential errors associated with traditional attendance methods.",
                    "Enabled real-time attendance monitoring and reporting, providing valuable insights and improving overall organizational efficiency."
                ],
            }
        ]
    },
    {
        id: 2,
        level: "Academic",
        position: "Student/Team Work",
        workplace: "South Eastern Kenya University",
        duration: 5,
        data: [
            {
                id: 1,
                name: "Loan Classification system",
                category: "Data Science",
                technologies: ["React", "HTML5", "CSS3", "HTML/CSS", "JavaScript", "Material UI", "Styled Component", "Forms", "APIs", "RESTFul APIs", "Pyhton(Flask)", "Scikit-learn", "Pandas", "Matplotlib", "Numpy", "Random Forest"],
                description:[
                    "Data cleaning was performed to preprocess the loan application data and remove any inconsistencies or missing values.",
                    "Feature extraction was conducted to identify key attributes and variables from the loan application data.",
                    "A database of preprocessed loan application records was created to store the extracted features for each applicant.",
                    "A Random Forest classifier was trained using machine learning algorithms to classify loan applicants as qualified or not qualified based on their application attributes.",
                    "The loan classification system was integrated with the Random Forest classifier to evaluate loan applications and determine qualification status.",
                    "Real-time loan application processing and classification were implemented to streamline the loan approval process.",
                    "Loan qualification decisions were automatically updated based on the classification results from the Random Forest model.",
                    "The system was tested and evaluated to ensure accuracy, reliability, and scalability in classifying loan applicants.",
                    "Feedback and improvements were incorporated based on the evaluation results to enhance the performance of the loan classification system.",
                    "Documentation and user guides were prepared to facilitate the deployment and usage of the loan classification system."
                ],
                problemSolved: "The problem solved pertains to the development of an automated loan classification system. This system streamlines the loan approval process by utilizing machine learning algorithms to assess loan applications. Instead of traditional manual methods for evaluating applications, such as lengthy paperwork or subjective assessments, the system employs advanced techniques to analyze applicant data and classify them as qualified or not qualified for the loan. This solution enhances efficiency, reduces processing time, and provides a more objective and consistent approach to evaluating loan applications, benefiting both financial institutions and loan applicants.",
                achivements: [
                    "Successfully integrated frontend and backend technologies to create a cohesive and functional loan classification system, ensuring smooth operation and seamless communication between different components.",
                    "Employed React and Material UI to develop an intuitive and responsive user interface for the loan classification system, enhancing user satisfaction and usability during the loan application process.",
                    "Leveraged Python libraries such as Scikit-learn, Pandas, Matplotlib, and NumPy to implement robust machine learning algorithms for loan classification, enabling effective analysis and processing of loan application data.",
                    "Automated the loan classification process, reducing manual effort and minimizing potential errors associated with manual evaluation methods, thereby improving the efficiency and accuracy of loan approval decisions.",
                    "Enabled real-time monitoring and reporting of loan application statuses, providing valuable insights into the loan approval pipeline and enhancing overall organizational efficiency in managing loan applications."
                ],
            }
        ]
    },
    {
        id: 3,
        level: "Online",
        position: "Certifications/Coding Challenges",
        workplace: "Huawei Seeds for future",
        duration: 2,
        data: [
            {
                id: 1,
                name: "Huawei",
                category: "Coding challenges",
                technologies: ["JavaScript", "Python", "SQL", "MySQL", "Networking", "Cisco", "Data Modeling"],
                description:[
                    "Successfully enrolled as a participant under seeds for future through iLearn Platform",
                    "Implemented network solutions using Cisco package and Data Mining using Python",
                    "Enhanced online tools for study and quiz best practices",
                ],
                problemSolved: "Actively involved in this projects to learn and expand the way we visualize basic system functionality such as input/output and processess, so as to develop robust systems that can accept and process any given input data both in bulk and simple processess.",
                achivements: [
                    "Gained proficiency in system data flow and design.",
                    "Acquired insights into designing and implementing interactive user experience as well as complex system management",
                    "Deepened understanding of data management using cloud services and automation using Machine Learning",
                    "Note: Much on this, please click the certificate button to view and download. Thank you."
                ],
            }
        ]
    },
    {
        id: 4,
        level: "Production",
        position: "Frontent Developer",
        workplace: "Tourism Regulatory Authority of Kenya",
        duration: 7,
        data: [
            {
                id: 1,
                name: "Tourism Regulatory Authority of Kenya",
                category: "Website/Dashboards",
                technologies: ["HTML5", "CSS3", "HTML/CSS", "JavaScript", "Material UI", "PHP(Laravel)", "Figma", "Adobe XD", "APIs", "RESTFul APIs", "PHP", "MySQL", "Microsoft SQL Server", "Cloud Storage", "Python"],
                description:[
                    "Utilized Python for data cleaning, presentation, and data pattern analysis before uploading data on the web platform.",
                    "Implemented frontend functionalities using HTML5, CSS3, and JavaScript to create interactive and visually appealing user interfaces.",
                    "Enhanced the design and user experience of the frontend components using Material UI.",
                    "Utilized Figma and Adobe tools for designing and prototyping user interfaces, ensuring consistency and efficiency in the design process.",
                    "Developed backend services and APIs using PHP (Laravel) to handle data processing, business logic, and interaction with the database.",
                    "Utilized PHP for server-side scripting and routing within the Laravel framework for backend development.",
                    "Integrated MySQL and Microsoft SQL Server databases to store and manage application data effectively.",
                    "Utilized Cloud Storage solutions for storing and accessing files and resources in a scalable and efficient manner.",
                ],
                problemSolved: "The problem solved revolved around improving the accuracy of data processing, enhancing website functionality, incorporating new features, and streamlining the user interface for a better user experience. The objective was to address inefficiencies in data handling, optimize website performance, and enrich user interaction within the system. By focusing on these areas, the goal was to create a more efficient and user-friendly environment that facilitates accurate data analysis, smooth navigation, and enhanced user engagement.",
                achivements: [
                    "Learned the importance of data accuracy in decision-making processes and how to ensure it through effective data cleaning and analysis.",
                    "Gained insights into frontend development practices, including the implementation of HTML, CSS, and JavaScript for creating interactive user interfaces.",
                    "Understood the significance of user experience (UX) design and how to enhance it through frameworks like Material UI to improve user engagement.",
                    "Explored the use of design tools such as Figma and Adobe to streamline the prototyping and design process, leading to better website enhancement and feature addition.",
                    "Acquired knowledge of backend development techniques using PHP (Laravel) and database integration with MySQL and Microsoft SQL Server.",
                    "Learned about server-side scripting and routing within the Laravel framework, contributing to the development of robust backend services and APIs.",
                    "Understood the importance of scalable and efficient data storage solutions like Cloud Storage for managing application resources effectively.",
                    "Developed problem-solving skills and learned how to troubleshoot and debug issues encountered during the development process.",
                    "Enhanced collaboration and communication skills by working in a multidisciplinary team environment and coordinating tasks effectively.",
                    "Embraced continuous learning and adaptation to emerging technologies and best practices in web development.",
                ],
            }
        ]
    },
    {
        id: 5,
        level: "Production",
        position: "Fullstack Developer",
        workplace: "Deveint Ltd.",
        duration: 4,
        data: [
            {
                id: 1,
                name: "Deveint Ltd.",
                category: "Websites/Mobile Apps",
                technologies: ["React", "React Native", "JavaScript", "Material UI", "CSS3", "MTML5", "Module Styling", "Figma", "Adobe Illustrator", "APIs", "RESTFul APIs", "MySQL", "SQL", "Python", "Node", "Express"],
                description:[
                    "Successfully developed a route money application for merchant campaigns using React Native.",
                    "Implemented interactive dashboards with React, providing merchants with valuable insights into campaign performance and product analytics.",
                    "Enhanced user engagement and experience through intuitive navigation and visually appealing UI components.",
                    "Integrated backend services and APIs to enable seamless communication between the application and data servers.",
                    "Ensured data security and integrity throughout the application by implementing robust authentication and authorization mechanisms.",
                    "Optimized application performance and responsiveness, resulting in faster load times and improved user satisfaction.",
                    "Collaborated effectively with cross-functional teams to deliver features and enhancements within project timelines.",
                ],
                problemSolved: "The problem being addressed involved developing a route money application for merchant campaigns on their products using React Native. Additionally, with React, the focus was on solving challenges related to designing and implementing interactive dashboards.",
                achivements: [
                    "Gained proficiency in React Native for developing mobile applications, including navigation, state management, and UI design.",
                    "Acquired insights into designing and implementing interactive dashboards using React, including data visualization and user interaction.",
                    "Deepened understanding of frontend development principles and best practices, such as component architecture and state management.",
                    "Learned about integrating backend services and APIs into frontend applications for data retrieval and manipulation.",
                    "Explored methods for optimizing application performance and responsiveness to enhance user experience.",
                    "Developed problem-solving skills through troubleshooting and resolving issues encountered during development.",
                    "Improved collaboration and communication skills by working closely with cross-functional teams and stakeholders.",
                ],
            }
        ]
    },
   
]


const Certifcates = [
    {
     id: 1,
     certName: "HCIA-Cloud Services V2.2",
     certImage: images.Certificate1,
     certDate: "Sep 5, 2021",
     certFrom: "Huawei",
    },
    {
     id: 2,
     certName: "HCIA-AI Course",
     certImage: images.Certificate2,
     certDate: "Sep 5, 2021",
     certFrom: "Huawei",
    },
    {
     id: 3,
     certName: "HCIA-Big Data Course",
     certImage: images.Certificate3,
     certDate: "Sep 5, 2021",
     certFrom: "Huawei",
    },
    {
     id: 4,
     certName: "HCIA-Cloud Computing",
     certImage: images.Certificate4,
     certDate: "Sep 5, 2021",
     certFrom: "Huawei",
    },
    {
     id: 5,
     certName: "HCIA-Storage",
     certImage: images.Certificate5,
     certDate: "Sep 7, 2021",
     certFrom: "Huawei",
    },
    {
     id: 6,
     certName: "HCIE-Big Data-Data Mining",
     certImage: images.Certificate6,
     certDate: "Sep 12, 2021",
     certFrom: "Huawei",
    },
    {
     id: 7,
     certName: "HCIE-Cloud Service Solution Architech",
     certImage: images.Certificate7,
     certDate: "Sep 17, 2021",
     certFrom: "Huawei",
    },
    {
     id: 8,
     certName: "HCIP-AI EI Developer",
     certImage: images.Certificate8,
     certDate: "Sep 7, 2021",
     certFrom: "Huawei",
    },
    {
     id: 9,
     certName: "HCIP-Storage Course",
     certImage: images.Certificate9,
     certDate: "Sep 5, 2021",
     certFrom: "Huawei",
    },
   ]
export {Services, ExperienceData, ProjectData, ExperienceLevel, Certifcates}