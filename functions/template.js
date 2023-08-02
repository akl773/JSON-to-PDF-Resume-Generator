const template = `
<html lang="en"><head>
        <title></title>
        <meta charset="utf-8">
\t\t<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
\t\thtml{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}footer,header,section{display:block}[hidden]{display:none}a{background-color:transparent}a:active,a:hover{outline:0}b,strong{font-weight:700}h1{margin:.67em 0;font-size:2em}img{border:0}svg:not(:root){overflow:hidden}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}}@font-face{font-family:'Glyphicons Halflings';src:url(../fonts/glyphicons-halflings-regular.eot);src:url(../fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'),url(../fonts/glyphicons-halflings-regular.woff2) format('woff2'),url(../fonts/glyphicons-halflings-regular.woff) format('woff'),url(../fonts/glyphicons-halflings-regular.ttf) format('truetype'),url(../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}img{vertical-align:middle}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}ul{margin-top:0;margin-bottom:10px}ul ul{margin-bottom:0}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.row{margin-right:-15px;margin-left:-15px}.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}}table{background-color:transparent}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table{margin-bottom:0}.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.table+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}.container:after,.container:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:" "}.container:after,.panel-body:after,.row:after{clear:both}@font-face{font-family:OpenSans-Bold;src:url(fonts/OpenSans-Bold.ttf)}@font-face{font-family:OpenSans-Medium;src:url(fonts/OpenSans-Medium.ttf)}img{max-width:100%}ul{margin-bottom:0}a{-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;text-decoration:none;font-family:OpenSans-Regular}a:focus,a:hover{text-decoration:none}.h1,.h2,.h3,h1,h2,h3,h4{font-size:30px;font-weight:700;color:#000;font-family:OpenSans-Bold}footer,section{width:100%;float:left;position:relative}section{padding:20px 0}ul{padding:0}p{font-size:15px;font-family:OpenSans-Regular;line-height:30px;color:#373737}*{margin:0;padding:0;text-decoration:none}header{padding:16px 0;box-shadow:0 0 10px rgb(0,0,0,.2)}.logo{text-align:left}.logo img{width:auro}.management{text-align:right}.management p{font-weight:700;font-size:19px;color:#3c1443}.experience{background:#751698}.experience h2{margin:0;color:#fff;font-size:20px}.exp{text-align:right;color:#fff;font-size:17px}.skills table.table{color:#000;font-size:15px;border:solid 1px #666}.skills table.table th{background:#3c1443;color:#fff;font-size:17px;font-weight:400}p.Beginner{display:inline-block;background:#f90;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}p.expert{display:inline-block;background:#1db653;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}p.Intermediate{display:inline-block;background:#751698;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}.skills table tr:nth-child(even){background-color:#fceeff}p.name{display:inline-block;font-size:15px;font-weight:700;color:#000;padding-left:10px}p.position{display:inline-block;font-size:16px;font-weight:700;color:#3c1443;padding-left:10px;font-style:italic}section.top-skills.additional-info2{background:#fceeff}.skills-heilight h2{background:#3c1443;padding:13px;color:#fff;font-size:20px}.skills-heilight{background:#fff;margin-bottom:30px}.additional-info td{padding:16px 8px!important}.additional-info h2{background:#3c1443;padding:13px;color:#fff;font-size:20px}.summry{padding-bottom:0}.project-content{background:#fbfbfb;padding:10px}.project-content b{color:#3c1443}.project-content h2{font-size:21px;color:#751698;margin-top:10px}.project-content h3{font-size:20px;color:#000}ul.key-part li{line-height:normal;list-style:none;display:inline-block;padding:8px 11px;border:solid 1px #555;margin-bottom:10px;margin-right:5px;background:#fff}.project-content p{font-size:15px;color:#000;margin:0;padding:0}.project-content{background:#f9f9f9;padding:10px;border:solid 1px #ccc}.project-heading h2{border-top:solid 1px #555;padding:15px;text-align:center;border-bottom:solid 1px #555;font-size:27px;margin-bottom:30px}@media screen and (max-width:767px){.skills table.table{color:#000;font-size:15px;border:solid 1px #666;overflow:scroll;display:inline-block}}html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}footer,header,section{display:block}[hidden]{display:none}a{background-color:transparent}a:active,a:hover{outline:0}b,strong{font-weight:700}h1{margin:.67em 0;font-size:2em}img{border:0}svg:not(:root){overflow:hidden}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:" (" attr(href) ")"}a[href^="#"]:after,a[href^="javascript:"]:after{content:""}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}}@font-face{font-family:'Glyphicons Halflings';src:url(../fonts/glyphicons-halflings-regular.eot);src:url(../fonts/glyphicons-halflings-regular.eot?#iefix) format('embedded-opentype'),url(../fonts/glyphicons-halflings-regular.woff2) format('woff2'),url(../fonts/glyphicons-halflings-regular.woff) format('woff'),url(../fonts/glyphicons-halflings-regular.ttf) format('truetype'),url(../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular) format('svg')}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:transparent}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}img{vertical-align:middle}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}ul{margin-top:0;margin-bottom:10px}ul ul{margin-bottom:0}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.row{margin-right:-15px;margin-left:-15px}.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}}table{background-color:transparent}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.05);box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table{margin-bottom:0}.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.table+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.05);box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}.container:after,.container:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:" "}.container:after,.panel-body:after,.row:after{clear:both}@font-face{font-family:OpenSans-Regular;src:url(fonts/OpenSans-Regular.ttf)}@font-face{font-family:OpenSans-Bold;src:url(fonts/OpenSans-Bold.ttf)}@font-face{font-family:OpenSans-Medium;src:url(fonts/OpenSans-Medium.ttf)}img{max-width:100%}ul{margin-bottom:0}a{-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;transition:all .5s;text-decoration:none;font-family:OpenSans-Regular}a:focus,a:hover{text-decoration:none}.h1,.h2,.h3,h1,h2,h3,h4{font-size:30px;font-weight:700;color:#000;font-family:OpenSans-Bold}footer,section{width:100%;float:left;position:relative}section{padding:20px 0}ul{padding:0}p{font-size:15px;font-family:OpenSans-Regular;line-height:30px;color:#373737}*{margin:0;padding:0;text-decoration:none}header{padding:16px 0;box-shadow:0 0 10px rgb(0,0,0,.2)}.logo{text-align:left}.logo img{width:auro}.management{text-align:right}.management p{font-weight:700;font-size:19px;color:#3c1443}.experience{background:#751698}.experience h2{margin:0;color:#fff;font-size:20px}.exp{text-align:right;color:#fff;font-size:17px}.skills table.table{color:#000;font-size:15px;border:solid 1px #666}.skills table.table th{background:#3c1443;color:#fff;font-size:17px;font-weight:400}p.Beginner{display:inline-block;background:#f90;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}p.expert{display:inline-block;background:#1db653;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}p.Intermediate{display:inline-block;background:#751698;padding:3px 3px;color:#fff;margin-top:10px;border-radius:7px;width:150px;text-align:center}.skills table tr:nth-child(even){background-color:#fceeff}p.name{display:inline-block;font-size:15px;font-weight:700;color:#000;padding-left:10px}p.position{display:inline-block;font-size:16px;font-weight:700;color:#3c1443;padding-left:10px;font-style:italic}section.top-skills.additional-info2{background:#fceeff}.skills-heilight h2{background:#3c1443;padding:13px;color:#fff;font-size:20px}.skills-heilight{background:#fff;margin-bottom:30px}.additional-info td{padding:16px 8px!important}.additional-info h2{background:#3c1443;padding:13px;color:#fff;font-size:20px}.summry{padding-bottom:0}.project-content{background:#fbfbfb;padding:10px}.project-content b{color:#3c1443}.project-content h2{font-size:21px;color:#751698;margin-top:10px}.project-content h3{font-size:20px;color:#000}ul.key-part li{line-height:normal;list-style:none;display:inline-block;padding:8px 11px;border:solid 1px #555;margin-bottom:10px;margin-right:5px;background:#fff}.project-content p{font-size:15px;color:#000;margin:0;padding:0}.project-content{background:#f9f9f9;padding:10px;border:solid 1px #ccc}.project-heading h2{border-top:solid 1px #555;padding:15px;text-align:center;border-bottom:solid 1px #555;font-size:27px;margin-bottom:30px}@media screen and (max-width:767px){.skills table.table{color:#000;font-size:15px;border:solid 1px #666;overflow:scroll;display:inline-block}}/*!
\t\t @font-face{font-family:FontAwesome;src:url(../fonts/fontawesome-webfont.eot?v=4.6.3);src:url(../fonts/fontawesome-webfont.eot?#iefix&v=4.6.3) format('embedded-opentype'),url(../fonts/fontawesome-webfont.woff2?v=4.6.3) format('woff2'),url(../fonts/fontawesome-webfont.woff?v=4.6.3) format('woff'),url(../fonts/fontawesome-webfont.ttf?v=4.6.3) format('truetype'),url(../fonts/fontawesome-webfont.svg?v=4.6.3#fontawesomeregular) format('svg');font-weight:400;font-style:normal}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}
\t</style>
\t</head>
\t

<body>

<header>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="logo">
          <a href="<%= data.logoLink %>"><img src="<%= data.logoImage %>"></a>
        </div>
      </div>
      <div class="col-md-8">
        <div class="management">
          <p><%= data.managementCertification %></p>
        </div>
      </div>
    </div>
  </div>
</header>

<section class="experience">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="name">
          <h2><%= data.name %></h2>
        </div>
      </div>
      <div class="col-md-6">
        <div class="exp">
          <strong>Exp: <%= data.yearsOfExperience %> yrs</strong>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="summry">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="summry-text">
          <h2>About Me</h2>
          <p><%= data.aboutMe %></p>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="top-skills additional-info2">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="skills-heilight">
          <h2>key highlights</h2>
          <% data.keyHighlights?.forEach(function(highlight) { %>
          <div class="infor">
            <p class="name"><%= highlight.name %></p>
            <p class="position"><strong><%= highlight.value %></strong></p>
          </div>
          <% }) %>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="top-skills">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="skills">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Skills</th>
                <th scope="col"></th>
                <th scope="col">Traits</th>
                <th scope="col">Soft skills</th>
              </tr>
            </thead>
            <tbody>
              <% data.skills.forEach(function(skill) { %>
              <tr>
                <td><span><%= skill.skillName %> <br><%= skill.skillExperience %></span></td>
                <td><p class="<%= skill.level %>"><%= skill.level %></p></td>
                <td><%= skill.traits %></td>
                <td><%= skill.softSkills %></td>
              </tr>
              <% }) %>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="top-skills additional-info">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="skills">
          <h2>ExperienceTimeLine</h2>
          <table class="table">
            <tbody>
              <% data.experienceTimeline.forEach(function(exp) { %>
              <tr>
                <td><%= exp.position %></td>
                <td><%= exp.startDate %></td>
                <td><%= exp.endDate %></td>
                <td><%= exp.duration %></td>
              </tr>
              <% }) %>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="our-projects">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="project-heading">
          <h2>Projects</h2>
        </div>
      </div>
      <% data.projects.forEach(function(project) { %>
      <div class="col-md-6">
        <div class="project-content">
          <h2><%= project.title %></h2>
          <b><%= project.timeFrame %></b>
          <h3>Description</h3>
          <ul class="key-part">
            <% project.keyParts.forEach(function(part) { %>
              <li><%= part %></li>
            <% }) %>
          </ul>
          <h3>Roles &amp; Responsibility</h3>
          <p><%= project.rolesAndResponsibility %></p>
        </div>
      </div>
      <% }) %>
    </div>
  </div>
</section>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>

</body>


\t</html>`;

module.exports = template