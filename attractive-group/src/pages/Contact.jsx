export default function Contact() {
  return (
    <div className="container-px mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4 bg-white/5 border border-white/10 rounded-xl p-6">
          <FloatingInput label="Name" type="text" />
          <FloatingInput label="Email" type="email" />
          <FloatingInput label="Phone" type="tel" />
          <FloatingTextArea label="Message" />
          <button className="bg-primary text-slate-900 font-semibold px-5 py-3 rounded">Send</button>
        </form>
        <div className="rounded-xl overflow-hidden border border-white/10">
          <iframe
            title="Bhopal HQ"
            className="w-full h-full min-h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Bhopal%2C%20India&output=embed"
          />
        </div>
      </div>
    </div>
  )
}

function FloatingInput({ label, type }) {
  return (
    <label className="relative block">
      <input type={type} placeholder=" " className="peer w-full bg-transparent border border-white/20 rounded px-4 py-3 outline-none focus:border-primary" />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900 px-1 text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary">{label}</span>
    </label>
  )
}

function FloatingTextArea({ label }) {
  return (
    <label className="relative block">
      <textarea placeholder=" " rows="5" className="peer w-full bg-transparent border border-white/20 rounded px-4 py-3 outline-none focus:border-primary" />
      <span className="pointer-events-none absolute left-3 top-5 bg-slate-900 px-1 text-white/60 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary">{label}</span>
    </label>
  )
}

