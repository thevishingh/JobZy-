

export default function PremiumLoader() {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
        <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md">
          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chipGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2d2d2d" />
                  <stop offset="100%" stopColor="#0f0f0f" />
                </linearGradient>

                <linearGradient id="textGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eeeeee" />
                  <stop offset="100%" stopColor="#888888" />
                </linearGradient>

                <linearGradient id="pinGradient" x1="1" y1="0" x2="0" y2="0">
                  <stop offset="0%" stopColor="#bbbbbb" />
                  <stop offset="50%" stopColor="#888888" />
                  <stop offset="100%" stopColor="#555555" />
                </linearGradient>
              </defs>

              {/* LEFT TRACES */}
              <g>
                <path
                  d="M100 100 H200 V210 H326"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M100 100 H200 V210 H326"
                  className="fill-none stroke-purple-500 stroke-[2] drop-shadow-[0_0_8px_#a855f7]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M80 180 H180 V230 H326"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M80 180 H180 V230 H326"
                  className="fill-none stroke-cyan-400 stroke-[2] drop-shadow-[0_0_8px_#22d3ee]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M60 260 H150 V250 H326"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M60 260 H150 V250 H326"
                  className="fill-none stroke-yellow-300 stroke-[2] drop-shadow-[0_0_8px_#fde047]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M100 350 H200 V270 H326"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M100 350 H200 V270 H326"
                  className="fill-none stroke-green-400 stroke-[2] drop-shadow-[0_0_8px_#4ade80]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />
              </g>

              {/* RIGHT TRACES */}
              <g>
                <path
                  d="M700 90 H560 V210 H474"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M700 90 H560 V210 H474"
                  className="fill-none stroke-cyan-400 stroke-[2] drop-shadow-[0_0_8px_#22d3ee]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M740 160 H580 V230 H474"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M740 160 H580 V230 H474"
                  className="fill-none stroke-green-400 stroke-[2] drop-shadow-[0_0_8px_#4ade80]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M720 250 H590 V250 H474"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M720 250 H590 V250 H474"
                  className="fill-none stroke-red-500 stroke-[2] drop-shadow-[0_0_8px_#ef4444]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />

                <path
                  d="M680 340 H570 V270 H474"
                  className="fill-none stroke-[#333] stroke-[2]"
                />
                <path
                  d="M680 340 H570 V270 H474"
                  className="fill-none stroke-yellow-300 stroke-[2] drop-shadow-[0_0_8px_#fde047]"
                  style={{
                    strokeDasharray: "40 400",
                    strokeDashoffset: 438,
                    animation: "flow 3s cubic-bezier(0.5,0,0.9,1) infinite",
                  }}
                />
              </g>

              {/* CHIP */}
              <rect
                x="330"
                y="190"
                width="140"
                height="100"
                rx="20"
                ry="20"
                fill="url(#chipGradient)"
                stroke="#222"
                strokeWidth="3"
                className="drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
              />

              {/* LEFT PINS */}
              {[205, 225, 245, 265].map((y) => (
                <rect
                  key={y}
                  x="322"
                  y={y}
                  width="8"
                  height="10"
                  rx="2"
                  fill="url(#pinGradient)"
                />
              ))}

              {/* RIGHT PINS */}
              {[205, 225, 245, 265].map((y) => (
                <rect
                  key={y}
                  x="470"
                  y={y}
                  width="8"
                  height="10"
                  rx="2"
                  fill="url(#pinGradient)"
                />
              ))}

              {/* TEXT */}
              <text
                x="400"
                y="245"
                textAnchor="middle"
                className="fill-gray-200 text-2xl font-bold tracking-wider"
                style={{ fontSize: "22px" }}
              >
                Loading
              </text>

              {/* DOTS */}
              {[100, 180, 260, 350].map((y, i) => (
                <circle
                  key={i}
                  cx={i === 2 ? 60 : 100}
                  cy={y}
                  r="5"
                  fill="black"
                />
              ))}

              {[90, 160, 250, 340].map((y, i) => (
                <circle
                  key={i}
                  cx={[700, 740, 720, 680][i]}
                  cy={y}
                  r="5"
                  fill="black"
                />
              ))}
            </svg>
            <style>
              {`
            @keyframes flow {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}
            </style>
          </svg>
        </div>
      </div>
    </>
  )
}
