export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 font-serif">
      
      {/* Blurred glass card */}
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden shadow-2xl border border-white/20">
        
        {/* Blurred gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-white opacity-50 blur-lg saturate-200"></div>

        {/* Content */}
        <div className="relative z-10 p-10 text-center text-black">
          {/* Heading */}
          <h1 className="text-5xl text-black-700 drop-shadow-lg mb-6">
            Contact Me
          </h1>

          {/* Description */}
          <p className="font-serif text-lg mb-6">
            {/* Let’s talk! Got an idea or just bored? I answer emails faster than I fix bugs. */}
          </p>

          {/* Contact form */}
          <form className="flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full max-w-md p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-md p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full max-w-md p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              rows={5}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-red-700 text-white rounded-md hover:bg-red-800 transition-colors duration-200 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
