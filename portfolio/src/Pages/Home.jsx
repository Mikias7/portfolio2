
export default function Home(){

    const handleClick = () => {
        window.location.href = "mailto:mikias7t@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20get%20in%20touch.";
    };

    return (
        <div className="pt-40 flex flex-col items-center justify-center">

            <div className="pb-4">
                <h1 className="text-5xl font-serif bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent">I'M MIKIAS TADELE,</h1>
            </div>

            <div className="relative rounded-md shadow-2xl overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white opacity-50 blur-lg saturate-200"></div>

                {/* Text content stays sharp */}
                <div className="relative text-lg text-black p-6 font-serif text-center">
                    <p>a student who gets a kick out of turning ideas into working software. From full-stack projects to AI</p>
                    <p>experiments and simulation programs, I love tackling challenges that make me think—and occasionally break</p>
                    <p>things—until they actually work. Learning fast, adapting faster, and having fun along the way is my style.</p>
                </div>
            </div>


  <div className="flex flex-col items-center text-center pt-8 space-y-6">

  {/* Heading */}
  <div>
    <p className="font-serif text-2xl text-red-700 drop-shadow-lg">
      {/* These are my go-to superpowers (no cape required): */}
      Core competencies:
    </p>
  </div>

  {/* Skill lists */}
  <div className="flex flex-wrap justify-center gap-12 text-md text-gray-800 font-serif">
    
    <ul className="space-y-2">
      <li className="hover:text-red-500 transition-colors duration-200">React</li>
      <li className="hover:text-red-500 transition-colors duration-200">Python</li>
      <li className="hover:text-red-500 transition-colors duration-200">C++</li>
    </ul>

    <ul className="space-y-2">
      <li className="hover:text-red-500 transition-colors duration-200">Swift</li>
      <li className="hover:text-red-500 transition-colors duration-200">ML/AI</li>
      <li className="hover:text-red-500 transition-colors duration-200">Computer Vision</li>
    </ul>

    <ul className="space-y-2">
      <li className="hover:text-red-500 transition-colors duration-200">Javascript</li>
      <li className="hover:text-red-500 transition-colors duration-200">Robotics</li>
      <li className="hover:text-red-500 transition-colors duration-200">MySQL</li>
    </ul>

  </div>

  <div className="flex justify-center pt-4 px-20 gap-4">

      <button
          type="button"
          className="flex justify-center pt-3 card-nav-cta-button hidden md:inline-flex w-40 h-12 border-0 rounded-[calc(0.75rem-0.2rem)] font-medium cursor-pointer transition-colors duration-300 ease-out hover:!bg-red-700"
          style={{ backgroundColor: "#5e0404ff", color: "#fff" }}
          onClick={handleClick}
      >
        Contact
      </button>
      <button
          type="button"
          className="flex justify-center pt-3 card-nav-cta-button hidden md:inline-flex w-40 h-12 border-0 rounded-[calc(0.75rem-0.2rem)] font-medium cursor-pointer transition-colors duration-300 ease-out hover:!bg-red-700"
          style={{ backgroundColor: "#000000ff", color: "#fff" }}
          onClick={() => {
          const link = document.createElement("a");
          link.href = "./public/MikiasResume.pdf"; 
          link.download = "mikias_resume.pdf"; 
          link.click();
          }}
      >
          Download CV
      </button>
    </div>

  </div>


</div>
    );
}