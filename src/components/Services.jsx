import { Target, Users, Inbox, BarChart3, CheckCircle2 } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "ICP & Offer Strategy",
    desc: "We identify your highest-converting audiences and craft irresistible offers that cut through the noise.",
  },
  {
    icon: Users,
    title: "List Building & Enrichment",
    desc: "We build laser-targeted prospect lists with verified emails and firmographic data.",
  },
  {
    icon: Inbox,
    title: "Cold Email & LinkedIn",
    desc: "Full-funnel outbound across channels with deliverability best practices baked in.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Optimization",
    desc: "Live dashboards, A/B tests, and weekly sprints to keep results trending up.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Services built for pipeline, not vanity metrics.
          </h2>
          <p className="mt-3 text-gray-600">
            Choose a done-for-you outbound engine or a done-with-you playbook. Either way, we own results.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="h-10 w-10 rounded-md bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>No long-term contracts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
