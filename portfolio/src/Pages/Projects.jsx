import Cards from "../components/Cards";


export default function Projects(){

    const projects = [
        {
            id: "rideSharing",
            title: "Ride Sharing App",
            image: "./public/images/rideShare.jpg",
            description: "Collaborated with a team to develop a ride-sharing app for college students, addressing transportation challenges. Built core features using Swift and SwiftUI, integrating Firebase for backend services such as authentication, real-time data storage, and user management. Project gained recognition from the Augustana University president, with plans for pilot testing among students and potential expansion to other colleges. ",
            skills: ["Swift","Firebase"],
            url: "https://github.com/Mikias7/Uber_app",
            githubUrl: ""
        },
        {
            id: "votingPlatform",
            title: "Augustana University Voting Platform",
            image: ".public/images/voting.png.png",
            description: "Developed a full-stack voting platform using React and Node.js to replace Augustana’s outdated system, improving reliability, security, and user experience for 2,000+ students during campus elections. Implemented secure student authentication, anonymous encrypted voting, and real-time ballot processing. Collaborated with a team to deliver the project, earning $2,500 for our work. ",
            skills: ["React.tsx","Node.JS","Express","MySQL"],
            url: "https://github.com/Augustana-CS-Club/ASA-Voting-Platform",
            githubUrl: ""
        },
        {
            id: "eclipseSimulation",
            title: "Solar Eclipse Simulation",
            image: ".public/images/eclipse.png",
            description: "Built an interactive solar eclipse simulation tool for Augustana’s Astronomy class, enabling students to calculate eclipse paths, timings, and visualizations for use in coursework and assignments. Implemented the project in pure vanilla JavaScript with reusable, modular components inspired by React, optimizing the codebase for scalability and long-term maintainability without external dependencies. Collaborated on improving existing astronomy class simulation software by refactoring code, creating reusable components, and enhancing overall performance and stability. ",
            skills: ["Vanilla.JS"],
            url: "https://github.com/Mikias7/eclipse_simulation",
            githubUrl: ""
        },
        {
            id: "dataAugmentationTool",
            title: "Data Augmentation Tool",
            image: ".public/images/rideShare.png",
            description: "Developed a Python program to augment image data for machine learning models, using OpenCV to modify hue, brightness, position, and noise. Automated annotation updates to ensure consistency between augmented images and corresponding labels. Reduced image labeling time and improved dataset diversity, helping reduce overfitting and enhance machine learning model performance.",
            skills: ["Python", "OpenCV"],
            url: "https://github.com/Mikias7/Data_augmentation",
            githubUrl: "https://github.com/Mikias7/Data_augmentation"
        },
        {
            id: "sudokuSolver",
            title: "Sudoku Solver",
            image: ".public/images/sudoku.png",
            description: "Developed a web application that captures images of Sudoku boards and solves them using a backtracking algorithm. Built a responsive React.js frontend with a Flask backend, integrating OpenCV for optimized image processing to improve number extraction from the board.",
            skills: ["Python","OCR","Computer Vision"],
            url: "https://github.com/Mikias7/sudoku_solver1",
            githubUrl: ""
        },
        {
            id: "emotionRecognition",
            title: "Facial Emotion Recognition",
            image: ".public/images/emotionRecognition.png",
            description: "Collaboratively developed a machine learning model that can distinguish and classify different facial emotions. Utilized Python, TensorFlow, and Keras for model development and training, and also ensured peak performance by implementing a preprocessing pipeline that resizes, normalizes, and augments the training dataset.",
            skills: ["python", "scikit-learn"],
            url: "",
            githubUrl: ""
        },
        {
            id: "microLearning",
            title: "Micro Learning App",
            image: ".public/images/rideShare.png",
            description: "Designed and developed a micro-learning app, allowing users to create and share flashcards with friends and publicly. Built a user-friendly interface using React.js, incorporating a TikTok-style scrolling effect for smooth content interaction. Utilized Python Flask for backend development and handle user login information.",
            skills: ["React.tsx","Python"],
            url: "https://github.com/Mikias7/Micro_learning_app",
            githubUrl: ""
        },
        {
            id: "flightSearch",
            title: "Filght Search Program",
            image: ".public/images/rideShare.png",
            description: "Developed a Java-based flight search application that allows users to find domestic or international flights by origin, destination, and date using an interactive console interface. Implemented a binary tree data structure to enable efficient flight data storage and searching, optimizing retrieval speed for large datasets.",
            skills: ["Java","Binary Tree"],
            url: "https://github.com/Mikias7/Flight_management",
            githubUrl: ""
        }
    ]


    return (
        <div className="pt-8">

            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <Cards title={project.title} image={project.image} description={project.description} skills={project.skills} githubUrl={project.url}/>
                    </div>
                ))}
            </div>
        </div>
    );
}