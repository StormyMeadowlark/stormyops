export default function Home() {
  return (
    <main className="min-h-screen stormyops-bg text-white flex items-center">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-9 items-center">
        
        {/* LEFT SIDE */}
        <div>
          
          <h1 className="text-xl text-slate-300">
            Ashlee Herken
          </h1>

          <h2 className="text-5xl font-bold">
            Operator. Engineer.
          </h2>
          <h2 className="text-5xl font-bold mb-4">
            Implementation Specalist.
          </h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl">
            I design and implement operational systems across software, data, and growth infrastructure.
          </p>

          <p className=" text-slate-400 mb-8 max-w-xl">
            Built SaaS platforms, automation systems, analytics pipelines, and business infrastructure used in real environments
          </p>

          <div className="flex gap-4">
            
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition">
              View My Work
            </button>

            <button className="border border-slate-600 hover:border-slate-400 px-6 py-3 rounded-lg transition">
              Download Resume
            </button>

          </div>

          <div className="mt-8 text-slate-500 text-sm">
            Skynetrix • VIN Vision • CRM + Sales Systems • Growth + Brand Ops • Data Analytics
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
  {/* faded square behind portrait */}
  <div className="absolute -inset-x-6 inset-y-10 rounded-4xl bg-black/30 blur-md" />

  <img
    src="/ashlee.png"
    alt="Ashlee Herken"
    className="relative z-10 max-h-[640px] object-contain"
  />
</div>

      </div>

    </main>
  )
}
