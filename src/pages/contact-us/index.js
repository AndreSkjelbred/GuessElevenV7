import { bsContactUs } from "@/text/text";

export default function Contact() {
  return (
    <div className='container-contact'>
      <p className='bs-text'>{bsContactUs}</p>
      <div className='contact-box'>
        <div className='left-contact'></div>
        <div className='right-contact'>
          <h2 className='contact-header'>Contact Us</h2>
          <input
            type='text'
            className='field-contact'
            name='name'
            placeholder='Your Name'
          />
          <input
            type='text'
            className='field-contact'
            name='email'
            placeholder='Your Email'
          />
          <input
            type='text'
            className='field-contact'
            name='phone'
            placeholder='Phone (Optional)'
          />
          <textarea
            className='field-textarea'
            name='message'
            placeholder='Message'
          ></textarea>
          <button className='btn-contact' type='submit'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
