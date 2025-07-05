'use client';

import Button from '@/app/components/ui/Button';

export default function ContactPage() {
  return (
    <section className="min-h-[80vh] bg-black text-white px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-500">Contact Us</h1>
      <p className="text-center text-zinc-300 mb-12">
        We're here to answer your questions and explore opportunities to collaborate.
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 text-sm text-zinc-300">Full Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm text-zinc-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 text-sm text-zinc-300">Subject</label>
          <input
            type="text"
            placeholder="Partnership, Support..."
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-2 text-sm text-zinc-300">Message</label>
          <textarea
            rows={6}
            placeholder="Tell us what’s on your mind..."
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <Button label="Send Message" onClick={() => alert('Form submission logic goes here')} />
        </div>
      </form>
    </section>
  );
}
