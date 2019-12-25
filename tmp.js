function head() {
    var html_head_write = `
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149132463-2"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-149132463-2');
    </script>
    
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K3925MV');</script>
<!-- End Google Tag Manager -->

   <meta charset="utf-8">
       <link rel="stylesheet" tpye="text/css" href="./style/both.css">
       <link rel="stylesheet" type="text/css" href=" ./style/d.css" media="screen and (min-width:1000px) and (min-width:480px)"><!--For desktop users.-->
       <link rel="stylesheet" type="text/css" href="./style/m.css" media="screen and (max-width:999px)"><!--For mobile users.-->


       <!--React-->
       <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
       <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
       <link rel="stylesheet" href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" />

        <meta name="theme-color" content="rgb(255, 177, 203)">
        `;

    document.writeln (html_head_write);

}   


function tmp_top() {
    var html_top_write =`
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3925MV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
    <header>
    <div id="fixed">
    <div id="h1">
    <h1><span id="long_title">日本大学藤沢高等学校・中学校 科学部</span><span id="short_title">日藤科学部</span></div>
    <div class="memus_div">
    <a class="memus" href="./index.html">&thinsp;ホーム&thinsp; </a>
    <a class="memus" href="./content.html">&thinsp; 活動内容&thinsp; </a>
    <!--<a class="memus" id="chemistry_link" href="./chemistry.html">化学実験&thinsp; </a>-->
    <a class="memus" href="./recoed.html">&thinsp;活動実績&thinsp;</a>
    <a class="memus" href="./enter.html">&thinsp; 入部案内&thinsp; 
    </a>
    </div>
    </div>
    </header> 
    `

    document.writeln(html_top_write);

}

function tmp_under() {
    var html_under_write =`
    <footer>
    <div class="under_bar" id="under_bar">
    <table>
    <tr>
    <td><a class="under_bar_a" id="under_home_a" href="./index.html"><p>ホーム&nbsp;&nbsp;</p></a></td>
    <td><a class="under_bar_a" id="under_contet_a" href="./content.html"><p>活動内容&nbsp;&nbsp;</p></a></td>
     <td><a class="under_bar_a" id="under_intro_a" href="./intro.html"><p>ロボット紹介&nbsp;&nbsp;</p></a></td>
    <!--<td><a class="under_bar_a" id="under_intro_a" href="./chemistry.html"><p>化学実験&nbsp;&nbsp;</p></a></td>-->
    <td><a class="under_bar_a" id="under_reconrds_a" href="./recoed.html"><p>活動実績&nbsp;&nbsp;</p></a></td>
    <td><a class="under_bar_a" id="under_enter_a" href="./enter.html"><p>入部案内&nbsp;&nbsp;</p></a></td>
    </tr></table></div></div>
                    
    <div class="under_bar_m">
        <table>
            <tr><td><a href="./index.html" class="under_bar_m_a">ホーム</a></td></tr>
            <tr><td><a href="./content.html" class="under_bar_m_a">活動内容</a></td></tr><tr><td><a href="./intro.html" class="under_bar_m_a">ロボット紹介</a></td>
            </tr><!--<tr><td><a href="./chemistry.html" class="under_bar_m_a">化学実験</a></td></tr>-->
            <tr><td><a href="./recoed.html" class="under_bar_m_a">活動実績</a></td></tr>
            <tr><td><a href="./enter.html" class="under_bar_m_a">入部案内</a></td></tr>
        </table>
                    </footer>`;

    document.writeln(html_under_write);
    document.close;
}