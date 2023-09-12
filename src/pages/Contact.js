import { Form, redirect, useActionData } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  const veri = {
    email: data.get("email"),
    msg: data.get("msg"),
  };
  if (veri.msg.length < 10) {
    return { error: "Mesajınız çok kısa" };
  }

  return redirect("/");
};

export default function Contact() {
  const data = useActionData();
  return (
    <div className="contact">
      <h3>İletişim</h3>
      <Form method="post" action="/help/contact">
        <label>
          <span>Email Adresiniz</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Mesajınız</span>
          <textarea name="msg" required rows="10"></textarea>
        </label>
        <button type="submit">Gönder</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}
