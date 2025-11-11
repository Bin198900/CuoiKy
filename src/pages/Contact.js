import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Liên hệ với chúng tôi</h1>
      <p>Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất có thể!</p>

      <form className="contact-form">
        <input type="text" placeholder="Họ và tên" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Nội dung liên hệ..." required></textarea>
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
}
