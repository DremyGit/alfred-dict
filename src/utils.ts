// import fetch, { Response } from 'node-fetch';
import 'isomorphic-fetch';

async function checkStatus(response: Response): Promise<Response> {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.name = response.status.toString();
  throw error;
}

export async function request(url: string, options?: Object): Promise<Response> {
  const response = await fetch(url, options);
  return checkStatus(response);
}

export function renderTemplate(template: string, data: Object): string {
  return Object.keys(data)
    .reduce((str, key) =>
      str.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), data[key]),
      template
    );
}
