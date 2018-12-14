import { SearchResultItem } from "../../types";

type HTML = string;
type Description = string;

export function parse(html: HTML): SearchResultItem[] {
  const description = parseDescription(html);
  if (!hasResult(description)) {
    return [];
  }
  return parsePhrase(description);
}

export function parseDescription(html: HTML): Description | null {
  const descReg = /<meta name="description" content="([^"]+?)" \/>/;
  const result = html.match(descReg);
  return result && result[1];
}

export function hasResult(description: Description): boolean {
  return description && description.indexOf('释义') !== -1;
}

export function parsePhrase(description: Description): SearchResultItem[] {

  const info = description.split(/(释义|])，/).pop();

  const phraseRegex = /(.+?\.|网络释义：)\s+(.*?)；\s+/g;
  let phrase;
  let result = [];
  while (phrase = phraseRegex.exec(info)) {
    const type = phrase[1].replace(/\.|：/g, '');
    result = result.concat(
      phrase[2]
        .split(/;\s|；/).map(value => ({
          type,
          value,
        }))
    );
  }

  return result;
}
