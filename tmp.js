
function head() {
    var html_head_write = `<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-149132463-2"></script><script>window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-149132463-2');</script>
   <meta charset="utf-8">    <link rel="stylesheet" type="text/css" href=" ./style/d.css" media="screen and (min-width:1000px) and (min-width:480px)"><!--For desktop users.--><link rel="stylesheet" type="text/css" href="./style/m.css" media="screen and (max-width:999px)"><!--For mobile users.--> <meta name="theme-color" content="rgb(255, 177, 203)"> `;

    document.write (html_head_write);

}   


function tmp_top() {
    var html_top_write =`<header><div id="fixed"><div id="h1"><h1><span id="long_title">日本大学藤沢高等学校・中学校 科学部</span><span id="short_title">日藤科学部</span></div><div class="memus_div"><a class="memus" id="home_link" href="./index.html">&thinsp;ホーム&thinsp; </a><a class="memus" id="content_link" href="./content.html">&thinsp; 活動内容&thinsp; </a><!--<a class="memus" id="chemistry_link" href="./chemistry.html">化学実験&thinsp; </a>--><a class="memus" id="records_link" href="./recoed.html">&thinsp;活動実績&thinsp;</a><a class="memus" id="enter_link" href="./enter.html">&thinsp; 入部案内&thinsp; </a></div></div></header> `

   document.write(html_top_write);

}

function tmp_under() {
    var html_under_write =`<footer><div id="rap_under_bar"><div class="under_bar" id="under_bar"><div class="under_bar" id="index_underbar"><table><tr><td><a class="under_bar_a" id="under_home_a" href="./index.html"><p>ホーム&nbsp;&nbsp;</p></a></td><td><a class="under_bar_a" id="under_contet_a" href="./content.html"><p>活動内容&nbsp;&nbsp;</p></a></td> <td><a class="under_bar_a" id="under_intro_a" href="./intro.html"><p>ロボット紹介&nbsp;&nbsp;</p></a></td> <!--<td><a class="under_bar_a" id="under_intro_a" href="./chemistry.html"><p>化学実験&nbsp;&nbsp;</p></a></td>--><td><a class="under_bar_a" id="under_reconrds_a" href="./recoed.html"><p>活動実績&nbsp;&nbsp;</p></a></td>         <td><a class="under_bar_a" id="under_enter_a" href="./enter.html"><p>入部案内&nbsp;&nbsp;</p></a></td>     </tr></table></div>  </div></div><div class="under_bar_m"><table><tr><td><a href="./index.html" class="under_bar_m_a">ホーム</a></td></tr><tr><td><a href="./content.html" class="under_bar_m_a">活動内容</a></td></tr><tr><td><a href="./intro.html" class="under_bar_m_a">ロボット紹介</a></td></tr><!--<tr><td><a href="./chemistry.html" class="under_bar_m_a">化学実験</a></td></tr>--><tr><td><a href="./recoed.html" class="under_bar_m_a">活動実績</a></td></tr><tr><td><a href="./enter.html" class="under_bar_m_a">入部案内</a></td></tr></table></div></footer>`;

    document.write(html_under_write)
}