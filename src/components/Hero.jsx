import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
              <Star size={14} /> Zelphic • Lead Generation That Scales
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Fill your pipeline with qualified leads — predictably.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We build outbound systems that consistently deliver booked meetings for B2B teams. Zero fluff, just results you can measure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black/90 transition"
              >
                Get a free growth plan <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-900 px-6 py-3 font-semibold hover:bg-gray-50 transition"
              >
                Explore services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <p className="text-2xl font-bold text-gray-900">1200+</p>
                <p>meetings booked</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">35%</p>
                <p>avg. reply rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5x</p>
                <p>pipeline growth</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p>transparent reporting</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-fuchsia-200/40 via-transparent to-indigo-200/40 blur-3xl" />
            <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&w=1600&auto=format&fit=crop"
                alt="Dashboard preview"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
