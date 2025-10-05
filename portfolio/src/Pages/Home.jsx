
export default function Home(){

    return (
        <div className="pt-40 flex flex-col items-center justify-center">

            <div className="pb-4">
                <h1 className="text-5xl font-serif bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent">I'M MIKIAS TADELE,</h1>
            </div>

            <div className="relative rounded-md shadow-2xl overflow-hidden">
                {/* Blurred gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white opacity-50 blur-lg saturate-200"></div>

                {/* Text content stays sharp */}
                <div className="relative text-lg text-black p-6 font-serif">
                    <p>a student who gets a kick out of turning ideas into working software. From simulation programs to AI</p>
                    <p>experiments and full-stack projects, I love tackling challenges that make me think—and occasionally break</p>
                    <p>things—until they actually work. Learning fast, adapting faster, and having fun along the way is my style.</p>
                </div>
            </div>


           <div className="flex flex-col items-center text-center pt-8 space-y-6">

  {/* Heading */}
  <div>
    <p className="font-serif text-2xl text-red-700 drop-shadow-lg">
      These are my go-to superpowers (no cape required):
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
      <li className="hover:text-red-500 transition-colors duration-200">Blender</li>
      <li className="hover:text-red-500 transition-colors duration-200">CAD</li>
    </ul>

  </div>
</div>


        </div>
    );
}