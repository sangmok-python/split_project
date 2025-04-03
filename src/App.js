import { motion } from 'framer-motion';

function App() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <header className="text-center mb-12">
        <div className="inline-block relative mb-6">
          <span className="text-6xl absolute -left-20 -top-4">🎯</span>
          <h1 className="text-5xl font-bold">Revenue Split Models</h1>
        </div>
        <p className="text-xl text-gray-600">How Platforms & Creators Share the Pie</p>
      </header>

      <div className="grid grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">50:50 Model</h2>
          <p className="text-gray-600 mb-8 h-20">
            Equal share, Best for early-stage platforms.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">70:30 Model</h2>
          <p className="text-gray-600 mb-8 h-20">
            Most common in app stores & platforms.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-4">90:10 Model</h2>
          <p className="text-gray-600 mb-8 h-20">
            Creator-friendly model for big creators.
          </p>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            View Details
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-12">
          <span role="img" aria-label="money bag" className="text-3xl">💰</span>
          <h2 className="text-3xl font-bold">Revenue Distribution Overview</h2>
        </div>

        <div className="relative h-[400px] flex">
          {/* Y축 눈금과 숫자 */}
          <div className="w-16 h-[360px] flex flex-col justify-between">
            {[...Array(11)].map((_, i) => (
              <div key={i} className="text-sm text-gray-500 text-right">
                {(10 - i) * 10}
              </div>
            ))}
          </div>

          {/* 차트 영역 */}
          <div className="flex-1 relative">
            {/* 수평 눈금선 */}
            <div className="absolute inset-0 h-[360px]">
              {[...Array(11)].map((_, i) => (
                <div
                  key={i}
                  className="absolute border-t border-gray-200 w-full"
                  style={{
                    top: `${i * 10}%`,
                    opacity: i === 10 ? 1 : 0.2
                  }}
                />
              ))}
            </div>

            {/* 차트 바 */}
            <div className="absolute inset-0 h-[360px] flex justify-around">
              {/* 50:50 */}
              <div className="w-24 h-full relative">
                <motion.div
                  className="absolute bottom-0 w-full bg-blue-500"
                  initial={{ height: 0 }}
                  animate={{ height: '50%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute w-full bg-green-500"
                  initial={{ height: 0 }}
                  animate={{ height: '50%' }}
                  transition={{ duration: 1 }}
                  style={{ bottom: '50%' }}
                />
                <div className="absolute top-full mt-4 w-full text-center">50:50</div>
              </div>

              {/* 70:30 */}
              <div className="w-24 h-full relative">
                <motion.div
                  className="absolute bottom-0 w-full bg-blue-500"
                  initial={{ height: 0 }}
                  animate={{ height: '30%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute w-full bg-green-500"
                  initial={{ height: 0 }}
                  animate={{ height: '70%' }}
                  transition={{ duration: 1 }}
                  style={{ bottom: '30%' }}
                />
                <div className="absolute top-full mt-4 w-full text-center">70:30</div>
              </div>

              {/* 90:10 */}
              <div className="w-24 h-full relative">
                <motion.div
                  className="absolute bottom-0 w-full bg-blue-500"
                  initial={{ height: 0 }}
                  animate={{ height: '10%' }}
                  transition={{ duration: 1 }}
                />
                <motion.div
                  className="absolute w-full bg-green-500"
                  initial={{ height: 0 }}
                  animate={{ height: '90%' }}
                  transition={{ duration: 1 }}
                  style={{ bottom: '10%' }}
                />
                <div className="absolute top-full mt-4 w-full text-center">90:10</div>
              </div>
            </div>
          </div>
        </div>

        {/* 범례 */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Creator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Platform</span>
          </div>
        </div>
      </div>

      <motion.footer 
        className="mt-16 text-center text-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p>© 2025 RevenueSplit. All rights reserved.</p>
        <p className="mt-2">Contact: tkdahr1331@gmail.com</p>
      </motion.footer>
    </div>
  );
}

export default App;