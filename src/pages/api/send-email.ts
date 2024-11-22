import type { APIRoute } from 'astro'
import sgMail from '@sendgrid/mail'

// Configura tu API Key de SendGrid
if (!import.meta.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY must be set in environment variables');
}

sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  };

  try {
    // Log headers for debugging
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    // Verificar content type de forma más flexible
    const contentType = request.headers.get('content-type') || '';
    console.log('Content-Type:', contentType);

    if (!contentType.toLowerCase().includes('application/json')) {
      return new Response(
        JSON.stringify({ 
          error: 'Content-Type must be application/json',
          receivedContentType: contentType 
        }), 
        { status: 400, headers }
      );
    }

    // Intentar leer el body
    let body;
    try {
      body = await request.json();
      console.log('Received body:', body);
    } catch (e) {
      return new Response(
        JSON.stringify({ 
          error: 'Invalid JSON in request body',
          details: (e as Error).message 
        }), 
        { status: 400, headers }
      );
    }

    if (!body || !body.data) {
      return new Response(
        JSON.stringify({ 
          error: 'Data object is missing in request body',
          receivedBody: body 
        }), 
        { status: 400, headers }
      );
    }

    // Valida los datos recibidos
    const { fullName, phone, email, comments } = body.data;
    
    const missingFields = [];
    if (!fullName) missingFields.push('fullName');
    if (!phone) missingFields.push('phone');
    if (!email) missingFields.push('email');
    if (!comments) missingFields.push('comments');

    if (missingFields.length > 0) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields', 
          fields: missingFields 
        }), 
        { status: 400, headers }
      );
    }

    // Crea el correo a enviar
    const msg = {
      to: 'noreply@dynamicstudio.us',
      from: 'noreply@dynamicstudio.us',
      subject: `New Contact Form Submission from ${fullName}`,
      text: `You have a new contact form submission:
      - Name: ${fullName}
      - Phone: ${phone}
      - Email: ${email}
      - Comments: ${comments}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comments:</strong> ${comments}</p>
      `,
    };

    // Enviar el correo
    const result = await sgMail.send(msg);
    
    return new Response(
      JSON.stringify({ 
        success: true,
        messageId: result[0] 
      }), 
      { status: 200, headers }
    );
  } catch (error: any) {
    console.error('SendGrid error:', {
      message: error.message,
      response: error.response?.body,
      stack: error.stack
    });

    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email',
        details: error.message,
        code: error.code
      }), 
      { status: 500, headers }
    );
  }
};

// Soporte para CORS
export const OPTIONS: APIRoute = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};