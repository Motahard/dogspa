import { FormEvent } from 'react';
import Button from '@/components/button';

function ContactEmail() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submited');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Subscribe to our Newsletter</p>
      <input type="email" name="Email" id="contact-email" />
      <Button type="submit" text="Submit" />
    </form>
  );
}

export default ContactEmail;
