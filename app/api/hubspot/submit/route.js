export const dynamic = 'force-dynamic';

const portalId = process.env.HUBSPOT_PORTAL_ID || '51463302';
const formId = process.env.HUBSPOT_FORM_ID || 'd07e922f-2b09-48ef-b8b0-ac9be2ee8551';
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY || '';
const configuredRecaptchaMinScore = Number(process.env.RECAPTCHA_MIN_SCORE || '0.5');
const recaptchaMinScore = Number.isFinite(configuredRecaptchaMinScore) ? configuredRecaptchaMinScore : 0.5;

const requiredFields = [
  'firstname',
  'lastname',
  'email',
  'website',
  'industry',
  'city',
  'service_procedure_project'
];

const fieldLabels = {
  firstname: 'First name',
  lastname: 'Last name',
  email: 'Email',
  website: 'Website',
  industry: 'Industry',
  city: 'City',
  service_procedure_project: 'Service, procedure, or project'
};

function clean(value) {
  return typeof value === 'string' ? value.trim().slice(0, 3000) : '';
}

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store'
    }
  });
}

async function verifyRecaptcha(token) {
  if (!recaptchaSecret) return { ok: true };
  if (!clean(token)) {
    return {
      ok: false,
      message: 'The security check did not complete. Please refresh and try again.'
    };
  }

  let response;

  try {
    response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: clean(token)
      })
    });
  } catch (error) {
    console.error('reCAPTCHA verification request failed', error);
    return {
      ok: false,
      message: 'The security check could not be verified. Please try again.'
    };
  }

  if (!response.ok) {
    return {
      ok: false,
      message: 'The security check could not be verified. Please try again.'
    };
  }

  const result = await response.json();
  const score = typeof result.score === 'number' ? result.score : 1;
  const action = typeof result.action === 'string' ? result.action : '';

  if (!result.success || score < recaptchaMinScore || (action && action !== 'request_snapshot')) {
    return {
      ok: false,
      message: 'The security check blocked this request. Email partners@seykostudios.com and we will take it from there.'
    };
  }

  return { ok: true };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch (_) {
    return json({ ok: false, message: 'Invalid request.' }, 400);
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return json({ ok: false, message: 'Invalid request.' }, 400);
  }

  if (clean(payload.company_website)) {
    return json({ ok: true });
  }

  const missing = requiredFields.filter(field => !clean(payload[field]));
  if (missing.length) {
    return json({
      ok: false,
      message: `Missing required field: ${fieldLabels[missing[0]]}.`
    }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean(payload.email))) {
    return json({ ok: false, message: 'Add a valid email.' }, 400);
  }

  const recaptcha = await verifyRecaptcha(payload.recaptchaToken);
  if (!recaptcha.ok) {
    return json({ ok: false, message: recaptcha.message }, 400);
  }

  const fields = requiredFields.map(name => ({
    name,
    value: clean(payload[name])
  }));

  const context = {
    pageName: 'Request a Demand Snapshot',
    pageUri: clean(payload.pageUri) || 'https://seykostudios.com/request-snapshot'
  };

  if (clean(payload.hutk)) {
    context.hutk = clean(payload.hutk);
  }

  let response;

  try {
    response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields, context })
    });
  } catch (error) {
    console.error('HubSpot form submission request failed', error);
    return json({
      ok: false,
      message: 'The request did not send. Email partners@seykostudios.com and we will take it from there.'
    }, 502);
  }

  if (!response.ok) {
    const detail = await response.text();
    console.error('HubSpot form submission failed', response.status, detail);
    return json({
      ok: false,
      message: 'The request did not send. Email partners@seykostudios.com and we will take it from there.'
    }, 502);
  }

  return json({ ok: true });
}
