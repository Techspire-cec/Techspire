import { useEffect, useState } from "react";

const resourcesData = [
  {
    topic: "Web Development",
    resources: [
      { title: "HTML Full Guide", link: "#" },
      { title: "CSS Cheatsheet", link: "#" },
      { title: "JavaScript Basics", link: "#" },
    ],
  },
  {
    topic: "Data Structures",
    resources: [
      { title: "DSA Roadmap", link: "#" },
      { title: "Top 100 Coding Questions", link: "#" },
    ],
  },
  {
    topic: "Machine Learning",
    resources: [
      { title: "ML Handbook", link: "#" },
      { title: "NumPy + Pandas Guide", link: "#" },
    ],
  },
];

export default function Resources() {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden"; // ❌ disable background scroll
    } else {
      document.body.style.overflow = "auto"; // ✔ enable again
    }
  }, [formOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setFormOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10 pt-24">
      <h1 className="text-4xl font-bold text-center mb-10">Resources</h1>

      {/* Resource Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resourcesData.map((section, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-4">{section.topic}</h2>

            <ul className="space-y-3">
              {section.resources.map((item, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span>{item.title}</span>
                  <a
                    href={item.link}
                    className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-500 transition"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Request Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setFormOpen(true)}
          className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition shadow-md"
        >
          Request a Resource
        </button>
      </div>

      {/* Request Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center px-4">
          <div className="bg-gray-800 w-full max-w-md p-6 rounded-xl shadow-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">
              Request Resource
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white"
              />

              <input
                type="email"
                required
                placeholder="Email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white"
              />

              <input
                type="text"
                required
                placeholder="Resource Topic (e.g. DSA, ML)"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded text-white"
              />

              <textarea
                required
                placeholder="Explain what resource you need"
                className="w-full p-3 h-28 bg-gray-900 border border-gray-700 rounded text-white"
              ></textarea>

              <button
                type="submit"
                className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
              >
                Submit Request
              </button>
            </form>

            {submitted && (
              <div className="text-center mt-4 text-green-400 font-semibold">
                Request Sent Successfully!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
