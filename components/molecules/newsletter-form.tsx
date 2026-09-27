import { EmailForm } from "./email-form";
export function NewsletterForm() {
  return (
    <div className="my-10 flex flex-wrap items-center gap-6 rounded-lg bg-[#2F3E4B] p-6 text-white">
      <h5 className="text-xl font-semibold">Subscribe Newsletter</h5>
      <div className="min-w-0 flex-1">
        <EmailForm
          subject="Newsletter subscription"
          className="flex flex-wrap gap-3 rounded-lg bg-[#2B3944] p-3"
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            className="min-w-0 flex-1 bg-transparent px-3 py-2 placeholder:text-white/60 focus-visible:outline-2 focus-visible:outline-white"
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="rounded-md bg-[#AB052D] px-5 py-2 text-white hover:bg-[#8E0425]"
          >
            Send Now ↗
          </button>
        </EmailForm>
      </div>
    </div>
  );
}
