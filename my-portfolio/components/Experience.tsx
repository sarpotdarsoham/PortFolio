export default function Experience() {
  return (
    <section className="py-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Illumio - Software Engineering Intern</h3>
          <p className="text-sm italic">May 2024 - Aug 2024</p>
          <ul className="list-disc list-inside ml-5">
            <li>Developed Core Insights - Risky Ports feature using React, Node.js and Ruby on Rails.</li>
            <li>Architected data pipeline storing 10+ insights in PostgreSQL.</li>
            <li>Improved backend API performance by 35%.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">VMware - Software Engineer</h3>
          <p className="text-sm italic">Jan 2022 - Aug 2023</p>
          <ul className="list-disc list-inside ml-5">
            <li>Architected Velocloud Orchestrator with TypeScript and Angular.</li>
            <li>Implemented Redis caching and Kubernetes deployment.</li>
            <li>Revamped dashboard UI with Vue.js increasing user satisfaction by 19%.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
