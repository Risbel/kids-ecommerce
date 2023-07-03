const sendContact = async (formData) => {
  const response = await fetch(`https://e-commerce-backend-self.vercel.app/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Error sending contact");
  }
};

export default sendContact;
