import { SearchResultItem } from '../../types';
import * as cheerio from 'cheerio';

type HTML = string;

export function parse(html: HTML): SearchResultItem[] {
  const $ = cheerio.load(html);
  return [].concat(parsePhrase($), parseWebPhrase($));
}

function parsePhrase($: CheerioStatic): SearchResultItem[] {
  const typeGroups = $('#phrsListTab > .trans-container > ul > *')
    .toArray()
    .map(element => $(element).text());

  let result = [];
  typeGroups.forEach(str => {
    const matchResult = str.match(/(\w+)\.\s+?(.*)/);
    if (!matchResult) {
      return;
    }
    const type = matchResult[1];
    result = result.concat(
      matchResult[2].split(/；|;/).map(value => ({
        type: type.trim(),
        value: value.trim(),
      }))
    )
  });
  return result;
}

function parseWebPhrase($: CheerioStatic): SearchResultItem[] {
  return $('#webTransToggle .wt-container .title > span').toArray()
    .map(e => $(e).contents().slice(-1).text().trim())
    .map(value => ({
      type: '网络释义',
      value,
    }))
}
