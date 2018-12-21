import { parse } from './parser';

describe('bing dict parser', () => {
  describe('parse', () => {
    it('parse empty', () => {
      expect(parse('<meta name="description" content="this is empty" />'))
        .toHaveLength(0);
    })
    it('parse English', () => {
      expect(parse('<meta name="description" content="必应词典为您提供好的释义，拼音[hǎo] [hào]，adj. good; nice; fine; kind； v. love; like; be fond of; be liable to； n. a surname； adv. so as to; so that； 网络释义： OK; well; all right； " />'))
        .toEqual([
          { type: 'adj', value: 'good' },
          { type: 'adj', value: 'nice' },
          { type: 'adj', value: 'fine' },
          { type: 'adj', value: 'kind' },
          { type: 'v', value: 'love' },
          { type: 'v', value: 'like' },
          { type: 'v', value: 'be fond of' },
          { type: 'v', value: 'be liable to' },
          { type: 'n', value: 'a surname' },
          { type: 'adv', value: 'so as to' },
          { type: 'adv', value: 'so that' },
          { type: '网络释义', value: 'OK' },
          { type: '网络释义', value: 'well' },
          { type: '网络释义', value: 'all right' },
        ])
    })

    it('parse Chinese', () => {
      expect(parse(`<meta name="description" content="必应词典为您提供OK的释义，美[oʊ'keɪ]，英[.əʊ'keɪ]，adj. 安然无恙；平安；快活；可以； int. 对；好；行；（用以引起注意或引入话题）好了； n. 允许；准许；同意； v. 正式批准；同意； 网络释义： 确定；好的(Okay)；好吧； " />`))
        .toEqual([
          { type: 'adj', value: '安然无恙' },
          { type: 'adj', value: '平安' },
          { type: 'adj', value: '快活' },
          { type: 'adj', value: '可以' },
          { type: 'int', value: '对' },
          { type: 'int', value: '好' },
          { type: 'int', value: '行' },
          { type: 'int', value: '（用以引起注意或引入话题）好了' },
          { type: 'n', value: '允许' },
          { type: 'n', value: '准许' },
          { type: 'n', value: '同意' },
          { type: 'v', value: '正式批准' },
          { type: 'v', value: '同意' },
          { type: '网络释义', value: '确定' },
          { type: '网络释义', value: '好的(Okay)' },
          { type: '网络释义', value: '好吧' },
        ])
    })
  })
})
