function doGet() {
  // バナー素材を登録
  var creatives = [
    {
      img: 'https://lh5.googleusercontent.com/_eS1lI0rHFME-VdL_b6TepaKEVjcxG7Tc4o6IoAIxtQGW-DRZHVFa8RdbC5td9STZRVo7cqHaUsev6hEwFsNCYxGZaTNU5Q4MhyQtG7ntmA3uvbOslJohd_evBH2n0UoXjDnIF0Tiiw=w1280',
      href: 'https://bloxawards.com/ref/295756732',
      alt: 'バナー1'
    },
    {
      img: 'https://lh4.googleusercontent.com/ZnOBb3wbYeiWmGKGSTdxEobT3EhzyMxwPw_BA2rrUHtrruAfpXyGQ_Jj3V83-54Q6-CuhOsRBIAaLsy_dpvKC9OXA64aLWAwvL6laA0FqCbziO02dfeDv6s9HnUq23NL4_qI17t91lw=w1280',
      href: 'https://bloxawards.com/ref/29575673',
      alt: 'バナー2'
    },
    {
      img: 'https://po-kiscratch.github.io/adtemp/xservergamef.png',
      href: 'https://games.xserver.ne.jp/free-server/?referral_token=54767174368ac050e6304a',
      alt: 'バナー3'
    }, // ← ここにカンマを追加

    {
      img: 'https://po-kiscratch.github.io/adtemp/xservergamenfnew.png',
      href: 'https://games.xserver.ne.jp/?referral_token=54767174368ac050e6304a',
      alt: 'バナー4'
    }
  ];

  // ランダムにひとつを選択
  var pick = creatives[Math.floor(Math.random() * creatives.length)];

  // 特殊文字をエンコード
  var imgUrl  = encodeURI(pick.img);
  var linkUrl = encodeURI(pick.href);
  var altText = pick.alt;

  // HTML を生成
  var html = HtmlService.createHtmlOutput(`
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body { margin:0; padding:0; }
    .frame {
      width:200px; height:200px;
      border:1px solid #ddd; border-radius:8px;
      overflow:hidden;
    }
    img {
      width:100%; height:100%;
      object-fit:cover; display:block; border:0;
    }
    a { display:block; width:100%; height:100%; }
  </style>
</head>
<body>
  <div class="frame">
    <a href="${linkUrl}" target="_blank" rel="noopener noreferrer">
      <img src="${imgUrl}" alt="${altText}">
    </a>
  </div>
</body>
</html>
  `);

  // iframe 埋め込み許可
  html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);

  return html;
}
