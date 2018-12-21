import { DictInterface } from "../../types";
import { renderTemplate, request } from "../../utils";
import { parse } from "./parser";

class YouDaoDict implements DictInterface {
  static icon = './youdao.png';

  async search(text: string) {
    const searchUrl = renderTemplate(
      'http://dict.youdao.com/w/{{ query }}/#keyfrom=dict2.top',
      { query: encodeURIComponent(text) }
    )
    const html = await request(searchUrl, {})
      .then(res => res.text());

    return parse(html);
  }
}

export default YouDaoDict;
