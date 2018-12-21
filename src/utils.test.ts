import { request, renderTemplate } from './utils';

describe('request', () => {
  it('request success', async () => {
    fetchMock.mockResponse('mock', { status: 200 });
    const res = await request('https://example.com')
    expect(res.status === 200);
    const html = await res.text()
    expect(html).toBe('mock');
  })

  it('request 404', async () => {
    let error: Error;
    fetchMock.mockResponse('404', { status: 404 });
    try {
      await request('https://example.com')
    } catch (e) {
      error = e;
    }
    expect(error).not.toBeUndefined();
    expect(error.name).toBe('404');
    expect(error.message).toBe('Not Found');
  })
})

describe('renderTemplate', () => {
  it('render', () => {
    expect(renderTemplate('a-{{b}}-{{ cd }}-{{-b}}', {
      b: 'b',
    })).toBe('a-b-{{ cd }}-{{-b}}');

    expect(renderTemplate('https://{{ domain }}/{{ path }}/end', {
      domain: 'example.com',
      path: 'test',
    })).toBe('https://example.com/test/end');
  })
})
