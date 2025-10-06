export default function Cards({ title, image, description, skills, githubUrl }) {
  return (
    <div className="relative group rounded-xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg transition-transform transform hover:-translate-y-2 hover:shadow-red-500/40 duration-300">

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-700/30 to-white/20 opacity-70 blur-xl group-hover:opacity-90 transition-opacity"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 font-serif text-black">
        {/* Image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg w-full h-48 object-cover mb-4 border border-white/30"
          />
        )}

        {/* Title */}
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent drop-shadow-md mb-2">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-base text-gray-800/90 mb-3">{description}</p>
        )}

        {/* Skills */}
        {skills && (
          <ul className="flex flex-wrap justify-center gap-2 mb-4">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="px-3 py-1 bg-red-700/20 border border-red-700/40 rounded-full text-sm font-medium text-black/90"
              >
                {skill}
              </li>
            ))}
          </ul>
        )}

        {/* GitHub Button */}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-black to-red-600 text-white rounded-lg shadow-md hover:shadow-red-500/40 transition-all duration-300 font-semibold"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
}
