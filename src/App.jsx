import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* Simple process banner */}
        <section id="process" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-[1px]">
              <div className="rounded-2xl bg-white p-8 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Our 4-step process</h3>
                <p className="mt-2 text-gray-600">Designed to launch in days, not months.</p>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { n: "01", t: "Discovery", d: "Deep-dive on ICP, offer, and goals." },
                    { n: "02", t: "Build", d: "Lists, copy, tech, and deliverability." },
                    { n: "03", t: "Launch", d: "Go live across channels." },
                    { n: "04", t: "Scale", d: "Optimize with weekly sprints." },
                  ].map((s) => (
                    <div key={s.n} className="rounded-xl border border-gray-200 p-5">
                      <span className="text-xs font-semibold text-indigo-600">{s.n}</span>
                      <h4 className="mt-1 font-semibold">{s.t}</h4>
                      <p className="mt-1 text-sm text-gray-600">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Zelphic. All rights reserved.</p>
          <div className="text-sm text-gray-600">Built to create revenue, not noise.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
