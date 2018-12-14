import { DictInterface } from "../../types";
import { request } from '../../utils';
import { parse } from './parser';

const searchURL = 'https://cn.bing.com/dict/search?mkt=zh-cn&q=';

class BingDict implements DictInterface {

  static icon = './bing.png';

  async search(text: string) {
    const searchUrl = `${searchURL}${encodeURIComponent(text)}`
    const html = await request(searchUrl, {})
      .then(res => res.text());
    return parse(html);
  }
}

export default BingDict;
