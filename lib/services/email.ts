type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  try {
    const response = await fetch('/api/email/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
} 