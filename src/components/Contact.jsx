import { Mail, Phone, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Ready to turn strangers into pipeline?
            </h2>
            <p className="mt-3 text-gray-600">
              Tell us about your market, goals, and timeline. We’ll audit your current motion and send a custom growth plan in 48 hours.
            </p>

            <div className="mt-8 space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-indigo-600" />
                <span>Free 30-min strategy call</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-indigo-600" />
                <span>Reply in under 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-indigo-600" />
                <span>No hard sell — just clarity</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll be in touch shortly.");
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work Email</label>
                  <input
                    required
                    type="email"
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Website</label>
                  <input
                    type="url"
                    className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="https://"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">What do you want to achieve?</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="E.g., Book 30+ meetings/month with SaaS founders in the US"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-black/90 transition"
              >
                Get my growth plan
              </button>
              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
