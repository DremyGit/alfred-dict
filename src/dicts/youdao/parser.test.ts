import { parse } from './parser';

describe('parse', () => {

  it('parse Chinese-English', () => {
    const html = `
<div id="phrsListTab" class="trans-wrapper clearfix">
  <div class="trans-container">
    <ul>
      <li>n. 试验；检验</li>
      <li>vt. 试验；测试</li>
      <li>vi. 试验；测试</li>
      <li>n. (Test)人名；(英)特斯特</li>
    </ul>
  </div>
</div>
<div id="webTransToggle">
  <div id="tWebTrans" class="trans-container tab-content">
    <div class="wt-container">
      <div class="title">
        <a href="#" title="详细释义" rel="#rw1" class="sp do-detail">&nbsp;</a>
        <span>测试</span>
      </div>
      <p class="collapse-content">
        比如，在A<b>测试</b>
        (<b>test</b>
        )这种灰度发布方式中，是让一部分用户继续用A，另一部分用户开始用B，如果用户对B没有什么反对意见，那么逐步扩大范围，把所有用户...
      </p>
      <p class="collapse-content via">
        基于2419个网页<span class="sl">-</span>
        <a href="http://www.youdao.com/search?keyfrom=dict&q=Test+%E6%B5%8B%E8%AF%95&ue=utf8" target=_blank rel="nofollow">相关网页</a>
      </p>
    </div>
    <div class="wt-container wt-collapse">
      <div class="title">
        <a href="#" title="详细释义" rel="#rw1" class="sp do-detail">&nbsp;</a>
        <span>测验</span>
      </div>
      <p class="collapse-content">
        • 分辨最佳表现与常态表现 性向及能力<b>测验</b>
        （ Tests）： - 性向及能力<b>测验</b>
        （Aptitudes &Ability Tests）： 语言、计算、操作、分辨、阅读、学习能力……
      </p>
      <p class="collapse-content via">
        基于973个网页<span class="sl">-</span>
        <a href="http://www.youdao.com/search?keyfrom=dict&q=Test+%E6%B5%8B%E9%AA%8C&ue=utf8" target=_blank rel="nofollow">相关网页</a>
      </p>
    </div>
    <div class="wt-container wt-collapse">
      <div class="title">
        <a href="#" title="详细释义" rel="#rw1" class="sp do-detail">&nbsp;</a>
        <span>
          <span class=gray>[化验]</span>
          试验
        </span>
      </div>
      <p class="collapse-content">
        验-汉字解释、在线查五行，繁体字，笔画数查询；鸿运... ... 征象;征兆 [omen] 检查;检验 [examine;check;<b>test</b>
        ] <b>试验</b>
        [<b>test</b>
        ] ...
      </p>
      <p class="collapse-content via">
        基于917个网页<span class="sl">-</span>
        <a href="http://www.youdao.com/search?keyfrom=dict&q=Test+%E8%AF%95%E9%AA%8C&ue=utf8" target=_blank rel="nofollow">相关网页</a>
      </p>
    </div>
    <div class="wt-container wt-collapse">
      <div class="title">
        <a href="#" title="详细释义" rel="#rw1" class="sp do-detail">&nbsp;</a>
        <span>考试</span>
      </div>
      <p class="collapse-content">
        ...德适<b>考试</b>
        （<b>Test</b>
        AS）是在德国发展起来的针对非欧盟国家的外国学生的标准化学习能力<b>考试</b>
        ，全球范围内一年举行两次。
      </p>
      <p class="collapse-content via">
        基于848个网页<span class="sl">-</span>
        <a href="http://www.youdao.com/search?keyfrom=dict&q=Test+%E8%80%83%E8%AF%95&ue=utf8" target=_blank rel="nofollow">相关网页</a>
      </p>
    </div>
  </div>
</div>
    `
    expect(parse(html)).toEqual([
      { type: 'n', value: '试验' },
      { type: 'n', value: '检验' },
      { type: 'vt', value: '试验' },
      { type: 'vt', value: '测试' },
      { type: 'vi', value: '试验' },
      { type: 'vi', value: '测试' },
      { type: 'n', value: '(Test)人名' },
      { type: 'n', value: '(英)特斯特' },
      { type: '网络释义', value: '测试' },
      { type: '网络释义', value: '测验' },
      { type: '网络释义', value: '试验' },
      { type: '网络释义', value: '考试' },
    ])
  })

})
