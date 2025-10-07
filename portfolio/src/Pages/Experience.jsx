export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 font-serif space-y-12">
      
      {/* Page Heading */}
      <div className="pb-4 text-center">
        <h1 className="text-5xl font-serif bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent">
          My Experience
        </h1>
      </div>

      {/* Experience Card 1 */}
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Blurred gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white opacity-50 blur-lg saturate-200"></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-black space-y-4">
          {/* Company Name */}
          <h2 className="text-3xl font-serif bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent">
            MyRaina
          </h2>

          {/* Description */}
          <div className="space-y-2">
            <p>● Developed machine learning algorithms to track and analyze assistive device usage, aiming to prevent elder care falls. </p>
            <p>● Built data pipelines for preprocessing and augmenting assistive device images, optimizing model accuracy. </p>
            <p>● Created synthetic image generation software to diversify datasets and minimize overfitting. </p>
            <p>● Led the development of a novel software solution as the sole engineer, resulting in 2 patent applications. </p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Python</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Pytorch</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">React.tsx</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Computer Vision</span>
          </div>

          {/* Button
          <div>
            <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200 font-semibold">
              Read More
            </button>
          </div> */}
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full max-w-3xl border-gray-300" />

      {/* Experience Card 2 */}
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Blurred gradient background */}
        {/* Blurred gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white opacity-50 blur-lg saturate-200"></div>

        {/* Content */}
        <div className="relative z-10 p-6 text-black space-y-4">
          {/* Company Name */}
          <h2 className="text-3xl font-serif bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent">
            CTDI
          </h2>

          {/* Description */}
          <div className="space-y-2">
            <p>● Automated Amazon product testing using a robotic arm, reducing testing time by 45% and earning recognition from the CEO for improving efficiency.</p>
            <p>● Designed and implemented a motion recording and playback mechanism for robotic arms, reducing development times.</p>
            <p>● Leveraged computer vision to enhance the precision of robotic arm movements, optimizing accuracy in testing workflows.</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Robotics</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Python</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Computer Vision</span>
          </div>

          {/* Button
          <div>
            <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200 font-semibold">
              Read More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}