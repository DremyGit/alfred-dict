import alfy from 'alfy';
import alfredNotifier from 'alfred-notifier';
import BingDict from './dicts/bing';
import { DictConstructor } from './types';

alfredNotifier();

async function searchBy(Dict: DictConstructor) {
  const dict = new Dict();
  const text = process.argv[3]
  const result = await dict.search(text);
  if (result.length === 0) {
    alfy.output([
      {
        valid: false,
        title: '未找到对应词语',
        subtitle: text,
        icon: {
          type: 'info',
          path: Dict.icon
        }
      }
    ])
    return;
  }
  alfy.output(result.map(({ type, value }) => ({
    valid: true,
    title: `${type}. ${value}`,
    arg: value,
    icon: {
      type: 'info',
      path: Dict.icon
    }
  })));
}

(async () => {
  try {
    switch (process.argv[2]) {
      case 'dict':
      case 'bing':
        await searchBy(BingDict);
        break;

      default:
        alfy.error(`${process.argv[2]} dictionary is not exist`);
        break;
    }
  } catch (e) {
    alfy.error(e);
  }
})()
