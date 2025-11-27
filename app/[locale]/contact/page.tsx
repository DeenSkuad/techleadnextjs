import { FC } from 'react';

const ContactPage: FC = () => {
  return (
    <form 
      action="https://formspree.io/f/your-form-id" 
      method="POST"
      className="space-y-4"
    >
      <input type="text" name="name" placeholder="Your name" required />
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactPage; 