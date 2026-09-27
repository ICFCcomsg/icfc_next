import { EmailForm } from "./email-form";

export function NewsletterForm() {
  return (
    <div className="rs-footer-subscribe-from">
      <h5 className="rs-footer-subscribe-title">Subscribe Newsletter</h5>
      <EmailForm subject="Newsletter subscription" className="rs-cta-input">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="rs-btn has-icon has-bg-secondary has-sm-radius"
        >
          Send Now ↗
        </button>
      </EmailForm>
    </div>
  );
}
