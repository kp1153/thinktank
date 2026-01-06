export default function VisionMission() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Vision & Mission
        </h1>

        <div className="bg-white shadow-md rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To see Kashmir blossom as a peaceful, prosperous and plural society
            where every individual enjoys dignity, opportunity and a meaningful
            voice in shaping the region's future.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>
                To produce high‑quality, policy‑relevant research on key issues
                affecting Kashmir's society, economy, environment and
                governance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>
                To serve as a platform for dialogue among diverse
                stakeholders—youth, women, civil society, business, academia and
                policymakers.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>
                To promote non‑violent, democratic and locally grounded
                solutions to long‑standing challenges in the region.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 mt-1">•</span>
              <span>
                To nurture a new generation of Kashmiri researchers and public
                thinkers committed to public service and ethical leadership.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
