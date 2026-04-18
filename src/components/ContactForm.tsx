export function ContactForm({ defaultIntent = "General" }: { defaultIntent?: string }) {
  return (
    <form
      action="/api/lead"
      method="post"
      className="grid gap-4 rounded-xl border border-brand-100 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="intent" defaultValue={defaultIntent} />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="rounded-md border border-brand-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className="rounded-md border border-brand-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">Phone</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className="rounded-md border border-brand-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium text-brand-800">I am a…</span>
          <select
            name="audience"
            className="rounded-md border border-brand-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
            defaultValue="Investor"
          >
            <option>Investor</option>
            <option>Buyer</option>
            <option>Seller</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium text-brand-800">How can we help?</span>
        <textarea
          name="message"
          rows={4}
          className="rounded-md border border-brand-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="justify-self-start rounded-md bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600"
      >
        Send message
      </button>
      <p className="text-xs text-brand-700">
        By submitting, you agree to our privacy policy. We do not share your information.
      </p>
    </form>
  );
}
