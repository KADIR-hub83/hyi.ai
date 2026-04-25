import Navbar from "../../components/Navbar";

export default function Solutions() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold">Our Solutions</h1>

        <ul className="mt-6 space-y-3">
          <li>Technology Solutions</li>
          <li>Cloud Infrastructure</li>
          <li>Cybersecurity</li>
          <li>Artificial Intelligence</li>
          <li>Data Analytics</li>
        </ul>
      </div>
    </div>
  );
}