import { profile } from "./data/profile";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 max-w-4xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold text-blue-700">{profile.name}</h1>
      <h2 className="text-xl text-gray-600">{profile.title}</h2>
      <p className="mt-4">{profile.summary}</p>

      <h3 className="mt-6 text-lg font-semibold">Skills</h3>
      <ul className="list-disc ml-6 grid grid-cols-2 gap-1">
        {profile.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Projects</h3>
      <ul className="list-disc ml-6">
        {profile.projects.map((proj) => (
          <li key={proj.title}>
            <strong>{proj.title}</strong>: {proj.description}{" "}
            <a href={proj.link} target="_blank" className="text-blue-500 underline">[GitHub]</a>
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Contact</h3>
      <ul className="ml-6">
        <li>Email: <a href={`mailto:${profile.contact.email}`} className="text-blue-500">{profile.contact.email}</a></li>
        <li>GitHub: <a href={profile.contact.github} className="text-blue-500">{profile.contact.github}</a></li>
        <li>LinkedIn: <a href={profile.contact.linkedin} className="text-blue-500">{profile.contact.linkedin}</a></li>
      </ul>
    </div>
  );
}

export default App;