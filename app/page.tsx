export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          For Freelancers &amp; Small Agencies
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Chasing Invoices.<br />
          <span className="text-[#58a6ff]">Automate Polite Payment Reminders.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Set up escalating reminder sequences once. Get paid faster without the awkward follow-up emails — customizable templates, smart timing, zero hassle.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $10/mo
        </a>
        <p className="mt-3 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📬</div>
            <h3 className="font-semibold text-white mb-1">Escalating Sequences</h3>
            <p className="text-sm text-[#8b949e]">Friendly nudge on day 3, firmer reminder on day 7, final notice on day 14 — all automatic.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">✏️</div>
            <h3 className="font-semibold text-white mb-1">Custom Templates</h3>
            <p className="text-sm text-[#8b949e]">Write your own tone. Professional, casual, or firm — your brand, your voice.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold text-white mb-1">Smart Timing Rules</h3>
            <p className="text-sm text-[#8b949e]">Configure exactly when each reminder fires. Pause sequences the moment payment lands.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited invoices &amp; reminders</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Customizable email templates</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Configurable timing sequences</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Auto-pause on payment received</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Email delivery tracking</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the reminder sequence work?</h3>
            <p className="text-sm text-[#8b949e]">You add an invoice with a due date. The system automatically sends reminder emails at your configured intervals — for example day 3, 7, and 14 after the due date. Once payment is marked received, the sequence stops immediately.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I customize the email content?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Each reminder step has its own template with variables like client name, invoice amount, and due date. Write them in your own voice so they feel personal, not automated.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What if I want to cancel?</h3>
            <p className="text-sm text-[#8b949e]">Cancel anytime from your billing portal — no questions asked, no lock-in. Your data is available for export before cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        &copy; {new Date().getFullYear()} Invoice Dunning. All rights reserved.
      </footer>
    </main>
  )
}
