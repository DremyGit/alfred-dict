import { DictInterface } from "../../types";
import { request, renderTemplate } from '../../utils';
import { parse } from './parser';

class BingDict implements DictInterface {

  static icon = './bing.png';

  async search(text: string) {
    const searchUrl = renderTemplate(
      'https://cn.bing.com/dict/search?mkt=zh-cn&q={{ query }}',
      { query: encodeURIComponent(text) }
    );
    const html = await request(searchUrl, {})
      .then(res => res.text());
    return parse(html);
  }
}

export default BingDict;
