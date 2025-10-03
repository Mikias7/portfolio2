
export default function Projects(){

    const projects = [
        {
            id: "rideSharing",
            title: "Ride Sharing App",
            image: ".public/images/rideShare.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "votingPlatform",
            title: "Augustana University Voting Platform",
            image: ".public/images/voting.png.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "eclipseSimulation",
            title: "Solar Eclipse Simulation",
            image: ".public/images/eclipse.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "dataAugmentationTool",
            title: "Data Augmentation Tool",
            image: ".public/images/rideShare.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "sudokuSolver",
            title: "Sudoku Solver",
            image: ".public/images/sudoku.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "emotionRecognition",
            title: "Facial Emotion Recognition",
            image: ".public/images/emotionRecognition.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "microLearning",
            title: "Micro Learning App",
            image: ".public/images/rideShare.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "flightSearch",
            title: "Filght Search Program",
            image: ".public/images/rideShare.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        },
        {
            id: "volleyballStats",
            title: "Volley Ball Stats Tracker",
            image: ".public/images/rideShare.png",
            description: "",
            skills: "",
            url: "",
            githubUrl: ""
        }
    ]


    return (
        <div className="pt-8">

            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        <h1>{project.title}</h1>
                        <p>----------------------</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}