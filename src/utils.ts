import fetch, { Response } from 'node-fetch';

async function checkStatus(response: Response): Promise<Response> {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.name = response.status.toString();
  throw Error;
}

export function request(url: string, options?: Object): Promise<Response> {
  return fetch(url, options)
    .then(checkStatus)
}
