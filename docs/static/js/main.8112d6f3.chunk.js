(this["webpackJsonpthe-office-visualizations-redux"]=this["webpackJsonpthe-office-visualizations-redux"]||[]).push([[0],{168:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),s=n.n(i),c=(n(168),n(10)),o=n(70);function l(e){for(var t=["?",".",",","!","-"],n=e.filter((function(e){return"TRUE"!==e.deleted})),r=0;r<n.length;r++)n[r].id=String(r);return n.forEach((function(e){e.search_text=e.line_text.replace(RegExp("\\[.*?\\]"),""),t.forEach((function(t,n){e.search_text=e.search_text.replaceAll(t," ")})),e.search_text=e.search_text.split(" ").filter((function(e){return e.length>0})).join(" ")})),n}var d=n(12);function u(e,t){var n=e.reduce((function(e,t){return void 0===e[t.speaker]&&(e[t.speaker]={name:t.speaker,value:0,seasonEpisodes:[]}),e[t.speaker].value+=1,e[t.speaker].seasonEpisodes.push({season:t.season,episode:t.episode}),e}),{});return d.g().tile(d.h.ratio(2)).size(t).padding(1).round(!0)(d.c({name:"",children:Object.values(n)}).sum((function(e){return e.value})).sort((function(e,t){return t.value-e.value}))).leaves()}function h(e){var t={};return e.forEach((function(e){void 0===t[e.Season]&&(t[e.Season]={episodes:[]}),void 0===t[e.Season].episodeCount&&(t[e.Season].episodeCount=0),t[e.Season].episodeCount+=1})),Object.values(t).forEach((function(e){for(var t=0;t<e.episodeCount;t++)e.episodes.push(0)})),{seasons:f(t)}}function f(e){var t=[];return Object.values(e).forEach((function(e,n){t.push(e)})),t}function x(e,t,n){var r={seasons:[]};return r.seasons=e.seasons.map((function(e){var t={episodes:[]};return t.episodeCount=e.episodeCount,e.episodes.forEach((function(e){t.episodes.push(0)})),t})),t.forEach((function(e){null!==n&&n!==e.speaker||(r.seasons[Number(e.season)-1].episodes[Number(e.episode)-1]+=1)})),r}var j="ADD_LINES",b="ADD_SERIES",p="CHARACTER_FILTER",m="EXPAND_ALL_LINES",g="EXPAND_LINE",O="FIND_MATCHES",y="FINISH_LOADING",v="SET_QUOTE",A="SET_SIZE",w="SHOW_ALL",C="TREEMAP_SIZE",S={bubbleData:{seasons:[]},expandedMatches:[],filteredCharacter:null,finishedLoading:!1,isTabletOrMobile:!1,lines:[],matches:[],maxSlice:!1,series:[],showAll:!1,treemapDimensions:[0,0],treemapLeaves:[],quote:"that's what she said"};var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:var n=l(t.payload);return Object.assign({},e,{lines:n});case b:var r=h(t.payload);return Object.assign({},e,{series:t.payload,bubbleData:r});case p:var a=x(e.bubbleData,e.matches,t.payload);return Object.assign({},e,{filteredCharacter:t.payload,bubbleData:a});case m:var i;return i=!0===t.payload?e.matches.map((function(e,t){return t})):[],Object.assign({},e,{expandedMatches:i});case g:var s=e.expandedMatches.filter((function(e){return!0}));return-1!==s.indexOf(t.payload)?s=s.filter((function(e){return e!==t.payload})):s.push(t.payload),Object.assign({},e,{expandedMatches:s});case O:var c=e.lines.filter((function(t){return 1===e.quote.toLowerCase().trim().split(" ").length?-1!==t.search_text.toLowerCase().split(" ").indexOf(e.quote.toLowerCase().trim()):-1!==t.search_text.toLowerCase().indexOf(e.quote.toLowerCase().trim())})),o=x(e.bubbleData,c,null),d=u(c,e.treemapDimensions);return Object.assign({},e,{matches:c,bubbleData:o,expandedMatches:[],treemapLeaves:d,filteredCharacter:null,showAll:!1});case y:return Object.assign({},e,{finishedLoading:!0});case v:return Object.assign({},e,{quote:t.payload.quote});case A:return Object.assign({},e,{isTabletOrMobile:t.payload});case w:return Object.assign({},e,{showAll:t.payload});case C:if(void 0===t.payload.current||null===t.payload.current)return;var f=[t.payload.current.clientWidth,t.payload.current.clientHeight];return Object.assign({},e,{treemapDimensions:f,treemapLeaves:u(e.matches,f)});default:return e}},E=Object(o.a)(k);function _(e){return{type:O,payload:e}}var F=n.p+"static/media/the-office-lines-scripts.ec62a81b.csv",L=n.p+"static/media/the-office-series.4be06bee.csv",T=n(204),z=n(210),M=n(2);var D=Object(c.b)((function(e,t){return{bubbleData:e.bubbleData}}),(function(e){return{}}))((function(e){var t=e.bubbleData,n=10;return Object(M.jsx)(T.a,{container:!0,item:!0,xs:12,children:Object(M.jsxs)(T.a,{item:!0,xs:12,children:[Object(M.jsx)(z.a,{display:{xs:"none",sm:"block"},children:Object(M.jsxs)("svg",{viewBox:"0 0 1024 410",style:{userSelect:"none"},children:[Object(M.jsx)("g",{transform:"translate(0 30)",children:Object.values(t.seasons).map((function(e,t){return Object(M.jsxs)("g",{transform:"translate(0 ".concat(40*t,")"),children:[Object(M.jsxs)("text",{x:"100",y:"0",dy:"0.33em",fontSize:"14",fontWeight:"700",letterSpacing:".5px",fill:"#777",textAnchor:"end",children:["Season ",t+1]}),Object(M.jsx)("line",{x1:"125",y1:"0",x2:35*e.episodes.length+90,y2:"0",stroke:"#AAA",strokeWidth:"1"}),Object(M.jsx)("g",{transform:"translate(100 0)",children:e.episodes.map((function(e,n){return Object(M.jsxs)("g",{"data-testid":"bc-".concat(t,"-").concat(n),transform:"translate(".concat(35*n+25," 0)"),style:{cursor:e>0?"pointer":null},onClick:function(){if(e>0){var r=document.getElementById("quote_".concat(t+1,"_").concat(n+1));if(null===r)return;window.scrollTo({top:r.offsetTop,behavior:"smooth"})}},children:[Object(M.jsx)("circle",{cx:"0",cy:"0",r:"15",fill:0===e?"white":"#a6cee3",stroke:0===e?"#AAA":"none"}),Object(M.jsx)("text",{x:"0",y:"0",fill:0===e?"white":"#333",fontWeight:"700",fontSize:"12",textAnchor:"middle",dy:"0.33em",children:e})]},"bubble_season_".concat(t,"_episode_").concat(n))}))})]},"bubble_season_".concat(t))}))}),Object(M.jsxs)("g",{transform:"translate(0 385)",children:[Object(M.jsx)("text",{x:"100",fill:"#AAA",y:"0",dy:"0.33em",fontSize:"10",letterSpacing:"1px",fontWeight:"600",textAnchor:"end",children:"EPISODE"}),Object(M.jsx)("line",{x1:"125",y1:"0",x2:1e3,y2:"0",stroke:"#CCC",strokeWidth:"1"}),new Array(26).fill(0).map((function(e,t){return Object(M.jsxs)("g",{transform:"translate(".concat(125+35*t," 0)"),children:[Object(M.jsx)("circle",{cx:"0",cy:"0",r:"10",fill:"white",stroke:"#CCC"}),Object(M.jsx)("text",{fill:"#AAA",dy:".33em",fontSize:"10",textAnchor:"middle",children:t+1})]},"bubbles_legend_episode_".concat(t))}))]})]})}),Object(M.jsx)(z.a,{display:{xs:"block",sm:"none"},children:Object(M.jsxs)("svg",{viewBox:"0 0 370 660",style:{userSelect:"none"},children:[Object(M.jsx)("g",{transform:"translate(0 20)",children:Object.values(t.seasons).map((function(e,t){return Object(M.jsxs)("g",{transform:"translate(0 ".concat(65*t,")"),children:[Object(M.jsxs)("text",{x:"5",y:"-2",dy:"0.33em",fontSize:"14",fontWeight:"700",letterSpacing:".5px",fill:"#777",children:["Season ",t+1]}),Object(M.jsx)("g",{transform:"translate(-10 20)",children:e.episodes.map((function(r,a){return Object(M.jsxs)("g",{"data-testid":"bc-mobile-".concat(t,"-").concat(a),transform:"translate(".concat(25+a*n*1.333," ").concat(a%2===1?18:0,")"),style:{cursor:r>0?"pointer":null},onClick:function(){if(r>0){var e=document.getElementById("quote_".concat(t+1,"_").concat(a+1));if(null===e)return;window.scrollTo({top:e.offsetTop,behavior:"smooth"})}},children:[Object(M.jsx)("line",{x1:"0",y1:"0",x2:7.5,y2:a%2===1?-10:n,stroke:"#AAA",strokeWidth:"1",opacity:a===e.episodes.length-1?0:1}),Object(M.jsx)("circle",{cx:"0",cy:"0",r:n,fill:0===r?"white":"#a6cee3",stroke:0===r?"#AAA":"none",strokeWidth:"1"}),Object(M.jsx)("text",{x:"0",y:"0",fill:0===r?"white":"#333",fontWeight:"700",fontSize:"10",textAnchor:"middle",dy:"0.33em",children:r})]},"bubble_season_".concat(t,"_episode_").concat(a))}))})]},"bubble_season_".concat(t))}))}),Object(M.jsxs)("g",{transform:"translate(0 620)",children:[Object(M.jsx)("text",{x:"5",y:"-20",fill:"#AAA",dy:"0.33em",fontSize:"10",letterSpacing:"1px",fontWeight:"600",children:"EPISODE"}),new Array(26).fill(0).map((function(e,t){return Object(M.jsxs)("g",{transform:"translate(".concat(25+t*n*1.333," ").concat(t%2===1?18:0,")"),children:[Object(M.jsx)("line",{x1:"0",y1:"0",x2:7.5,y2:t%2===1?-10:n,stroke:"#CCC",strokeWidth:"1",opacity:25===t?0:1}),Object(M.jsx)("circle",{cx:"0",cy:"0",r:n,fill:"white",stroke:"#CCC"}),Object(M.jsx)("text",{x:"0",y:"0",fill:"#CCC",fontWeight:"700",fontSize:"10",textAnchor:"middle",dy:"0.33em",children:t+1})]},"bubble_legend_episode_".concat(t))}))]})]})})]})})}));function W(e){return Object(M.jsxs)(T.a,{container:!0,item:!0,style:{lineHeight:"1.33em",marginTop:8,textAlign:"left"},xs:12,children:[Object(M.jsx)(T.a,{item:!0,xs:12,children:"This application lets you search the scripts from the NBC television show The Office, and visualizes the results to give you insight as to which episode the quote appears, who said the quote, when they said the quote, how many times they said the quote, and the context of the quote."}),Object(M.jsx)(T.a,{item:!0,xs:12,children:Object(M.jsxs)("ul",{children:[Object(M.jsxs)("li",{children:["Type word or phrase in the search box, and press the ",Object(M.jsx)("b",{children:"Enter"})," key to search."]}),Object(M.jsx)("li",{children:"There is a graph of the character(s) who said the quote, and how many lines that quote appears in the script."}),Object(M.jsxs)("li",{style:{marginLeft:0},children:[Object(M.jsx)("b",{children:"Click"})," a character name to filter for only their lines."]}),Object(M.jsx)("li",{children:"The seasons and episodes are plotted beneath the character chart, and the episode contains the number of lines the word or phrase appears."}),Object(M.jsxs)("li",{style:{marginLeft:0},children:[Object(M.jsx)("b",{children:"Click"})," the episode bubble to view the matching lines from that episode."]}),Object(M.jsx)("li",{children:"Beneath the graphs is the list of lines that contain the quote."}),Object(M.jsxs)("li",{style:{marginLeft:0},children:[Object(M.jsx)("b",{children:"Click"}),' "more" to see the lines immediately before and after the line with your search terms.']})]})})]})}var q=Object(c.b)((function(e,t){return{lines:e.lines,isTabletOrMobile:e.isTabletOrMobile,matches:e.matches,maxSlice:e.showAll,expandedMatches:e.expandedMatches,filteredCharacter:e.filteredCharacter,series:e.series}}),(function(e){return{expandAllLines:function(t){return e(function(e){return{type:m,payload:e}}(t))},expandLine:function(t){return e(function(e){return{type:g,payload:e}}(t))}}}))((function(e){return Object(M.jsx)(T.a,{item:!0,container:!0,xs:12,children:Object(M.jsxs)(T.a,{item:!0,container:!0,"data-testid":"matches",xs:12,children:[Object(M.jsxs)(T.a,{item:!0,container:!0,xs:12,alignItems:"center",style:{padding:12,textAlign:"center",marginBottom:2,fontWeight:600,letterSpacing:1},children:[Object(M.jsx)(T.a,{item:!0,xs:4,sm:1,md:1,children:Object(M.jsx)(z.a,{display:{xs:"none",md:"block"},children:"Season"})}),Object(M.jsx)(T.a,{item:!0,xs:6,sm:2,md:2,children:Object(M.jsx)(z.a,{display:{xs:"none",md:"block"},children:"Episode"})}),Object(M.jsx)(T.a,{item:!0,xs:4,sm:2,md:2,children:Object(M.jsx)(z.a,{display:{xs:"none",md:"block"},children:"Speaker"})}),Object(M.jsx)(T.a,{item:!0,xs:10,sm:4,md:6,style:{textAlign:"left"},children:Object(M.jsx)(z.a,{display:{xs:"none",md:"block"},children:"Line"})}),Object(M.jsx)(T.a,{item:!0,xs:2,sm:3,md:1,style:{cursor:"pointer",color:"#333",fontSize:10,fontWeight:900,textAlign:"right"},onClick:function(){e.expandedMatches.length===e.matches.length?e.expandAllLines(!1):e.expandAllLines(!0)},children:e.expandedMatches.length===e.matches.length?"collapse all":"expand all"})]}),e.matches.slice(0,!0===e.maxSlice?e.matches.length:50).filter((function(t){return null===e.filteredCharacter||e.filteredCharacter===t.speaker})).map((function(t,n){var r=-1!==e.expandedMatches.indexOf(n);return Object(M.jsxs)(T.a,{"data-testid":"matches_".concat(t.id),id:"quote_".concat(t.season,"_").concat(t.episode),item:!0,container:!0,xs:12,alignItems:r?"flex-start":"center",style:{borderRadius:4,backgroundColor:n%2===0?"#FFFFFF":"#F3F3F3",padding:12,textAlign:"center",marginBottom:0},children:[Object(M.jsxs)(T.a,{item:!0,xs:2,sm:1,children:[Object(M.jsx)(z.a,{display:{xs:"inline-block",sm:"none"},children:"S"}),t.season]}),Object(M.jsx)(T.a,{item:!0,xs:6,sm:2,children:e.series.filter((function(e){return Number(e.Season)===Number(t.season)}))[Number(t.episode)-1].EpisodeTitle}),Object(M.jsx)(z.a,{display:{xs:"block",sm:"none"},children:Object(M.jsx)(T.a,{item:!0,xs:12,style:{height:32}})}),Object(M.jsx)(T.a,{item:!0,xs:4,sm:2,children:t.speaker}),Object(M.jsxs)(T.a,{item:!0,xs:12,sm:6,style:{textAlign:"left"},children:[function(){if(!0===r){var n=e.lines.filter((function(e){return Number(e.id)===Number(t.id)-1}))[0];return void 0===n?Object(M.jsx)(M.Fragment,{}):Object(M.jsxs)("div",{style:{padding:"0px 0px 12px 0px"},children:[Object(M.jsx)("b",{children:n.speaker})," ",n.line_text]})}}(),Object(M.jsx)("b",{children:!0===r?t.speaker+" ":""}),t.line_text,function(){if(!0===r){var n=e.lines.filter((function(e){return Number(e.id)===Number(t.id)+1}))[0];return void 0===n?Object(M.jsx)(M.Fragment,{}):Object(M.jsxs)("div",{style:{padding:"12px 0px 0px 0px"},children:[Object(M.jsx)("b",{children:n.speaker})," ",n.line_text]})}}()]}),Object(M.jsx)(T.a,{item:!0,xs:12,sm:1,style:{cursor:"pointer",color:"#333",fontSize:10,fontWeight:900,textAlign:"right"},onClick:function(){e.expandLine(n)},children:!0===r?"less":"more"})]},"match_".concat(t.id))}))]})})})),N=n.p+"static/media/the-office.b100c584.svg",I=n(208);var R=Object(c.b)((function(e,t){return{quote:e.quote}}),(function(e){return{findMatches:function(t){return e(_(t))},setQuote:function(t){return e(function(e){return{type:v,payload:e}}(t))}}}))((function(e){return Object(M.jsx)(T.a,{item:!0,xs:12,children:Object(M.jsx)(I.a,{label:"Quote",variant:"outlined",defaultValue:e.quote,style:{marginBottom:14,width:"100%"},onChange:function(t){e.setQuote({quote:t.nativeEvent.target.value})},onKeyUp:function(t){"Enter"!==t.nativeEvent.code&&"NumpadEnter"!==t.nativeEvent.code||e.findMatches({})}})})}));var B=Object(c.b)((function(e){return{resultsFound:null!==e.filteredCharacter?e.matches.filter((function(t){return t.speaker===e.filteredCharacter})).length:e.matches.length,showAll:e.showAll}}),(function(e){return{changeShowAll:function(t){return e(function(e){return{type:w,payload:e}}(t))}}}))((function(e){return Object(M.jsx)(T.a,{item:!0,container:!0,xs:12,justifyContent:"flex-end",children:Object(M.jsxs)("div",{style:{textAlign:"right"},children:[Object(M.jsxs)(z.a,{component:"span",style:{userSelect:"none",cursor:"pointer",marginRight:4,display:e.showAll||e.resultsFound<50?"none":null},onClick:function(){e.changeShowAll(!e.showAll)},children:[Object(M.jsx)("span",{style:{marginRight:8,fontSize:10,fontWeight:900},children:"show all"}),Object(M.jsxs)("span",{children:["Showing ",Object(M.jsx)("span",{style:{fontWeight:700},children:"50"})," of"]})]}),Object(M.jsx)("span",{style:{fontWeight:700,marginRight:4},children:e.resultsFound}),"result",1===e.resultsFound?"":"s"," found"]})})}));var P=Object(c.b)((function(e){return{treemapLeaves:e.treemapLeaves,filteredCharacter:e.filteredCharacter}}),(function(e){return{setFilteredCharacter:function(t){e(function(e){return{type:p,payload:e}}(t))},setTreemapContainerSize:function(t){e(function(e){return{type:C,payload:e}}(t))}}}))((function(e){var t=Object(r.useCallback)((function(t){if(null!==t)return e.setTreemapContainerSize({current:t}),window.TREEMAP_resizeAction=window.addEventListener("resize",(function(){e.setTreemapContainerSize({current:t})})),function(){window.removeEventListener(window.TREEMAP_resizeAction)}}),[]);return Object(r.useEffect)((function(){}),[]),Object(M.jsx)(T.a,{item:!0,xs:12,style:{marginBottom:0},ref:t,children:Object(M.jsx)("div",{style:{position:"relative",height:172,width:"100%",margin:"auto"},children:e.treemapLeaves.map((function(t,n){return Object(M.jsx)("div",{style:{position:"absolute",top:t.y0,left:t.x0,width:t.x1-t.x0,height:t.y1-t.y0,textAlign:"left",boxSizing:"border-box",backgroundColor:"#a6cee3",overflow:"hidden",color:"#333",borderRadius:"4px",userSelect:"none",cursor:"pointer",border:e.filteredCharacter===t.data.name?"1px solid #333":"1px solid transparent"},onClick:function(){null===e.filteredCharacter||e.filteredCharacter!==t.data.name?e.setFilteredCharacter(t.data.name):e.setFilteredCharacter(null)},children:Object(M.jsxs)("div",{style:{display:"inline-block",position:"absolute",top:"3px",left:"5px",fontSize:12,fontWeight:600},children:[t.data.name," ",Object(M.jsxs)("span",{style:{fontWeight:300,fontSize:12},children:["(",t.data.value,")"]})]})},"treemap_leaf_".concat(n))}))})})})),U=n.p+"static/media/blind-guy-mcsqueezy.a07a56ae.jpeg",H=n(42),Q=n(17),G=n(67),J=n(71),X=function(e){Object(G.a)(n,e);var t=Object(J.a)(n);function n(e){var r;return Object(H.a)(this,n),(r=t.call(this,e)).state={},r.svgRef=a.a.createRef(),r.componentWillUnmountFlag=!1,r}return Object(Q.a)(n,[{key:"componentDidMount",value:function(){var e=512,t=512,n=24,r=d.b,a=d.f(this.svgRef.current).attr("viewBox",[0,0,e,t].join(" ")).attr("width","100%").attr("margin","auto").style("background-color","#FFF"),i=a.append("defs");i.append("filter").attr("id","filter-shadow-maze-text").append("feDropShadow").attr("dx",0).attr("dy",0).attr("stdDeviation",10).attr("flood-color","#777"),i.append("clipPath").attr("id","clip-mask-circle-bg").append("circle").attr("cx",.5*e).attr("cy",.5*t).attr("r",.48*e).attr("fill","#000");var s=d.e().domain([0,n]).range([0,e]),c=s(.5),o=a.append("g").attr("transform","translate(".concat(c," ").concat(c,")")),l=a.append("g").attr("transform","translate(".concat(.5*e," ").concat(.444*t,")")).attr("filter","url(#filter-shadow-maze-text)"),u=.2*e;l.append("text").text("LOADING").attr("x",0).attr("y",0).attr("dy","-.1em").attr("font-size",u).attr("fill","#FFF").attr("font-weight",700).attr("text-anchor","middle"),l.append("text").text("DATA").attr("x",0).attr("y",0).attr("dy",".68em").attr("font-size",1.97*u).attr("fill","#FFF").attr("font-weight",700).attr("letter-spacing",-20).attr("text-anchor","middle");var h=[],f={};d.d(n).forEach((function(t){d.d(n).forEach((function(r){var a={x:s(t),y:s(r)},i=o.append("g").attr("transform","translate(".concat(a.x," ").concat(a.y,")")).append("line").datum({x:t,y:r}).attr("transform",Math.random()>.5?"rotate(45)":"rotate(-45)").attr("x1",0).attr("y1",1.4*-c).attr("x2",0).attr("y2",1.4*c).attr("stroke","#FFF").attr("stroke-width",e/n*.5).attr("stroke-linecap","round");void 0===f[t-12]&&(f[t-12]={}),f[t-12][r-12]=i,h.push(i)}))}));var x=this;!function t(){x.componentWillUnmountFlag||h.forEach((function(a){var i=a.datum(),s=Math.sqrt(Math.pow(12-i.x,2)+Math.pow(12-i.y,2));a.transition().delay((function(e){return 62.5*s})).duration(1).attr("stroke","#FFF").attr("stroke-width",e/n*.5*.25).transition().delay(0).duration(1500).ease(r).attr("transform",Math.random()>.5?"rotate(45)":"rotate(-45)").attr("stroke","#a6cee3").attr("stroke-width",e/n*.5).on("end",(function(e){23===e.x&&23===e.y&&t()}))}))}()}},{key:"componentWillUnmount",value:function(){this.componentWillUnmountFlag=!0}},{key:"render",value:function(){return Object(M.jsx)("div",{style:{textAlign:"center"},children:Object(M.jsx)("svg",{ref:this.svgRef})})}}]),n}(a.a.Component);var Z=Object(c.b)((function(e,t){return{finishedLoading:e.finishedLoading,lines:e.lines,matches:e.matches,series:e.series}}),(function(e){return{}}))((function(e){return Object(M.jsxs)(T.a,{container:!0,style:{textAlign:"center",marginBottom:1024,marginTop:14},justifyContent:"center",children:[Object(M.jsx)(T.a,{item:!0,xs:11,sm:10,md:9,lg:8,xl:6,children:Object(M.jsx)("img",{src:N,alt:"logo for the television series: the office"})}),!1===e.finishedLoading?Object(M.jsx)(T.a,{item:!0,xs:11,sm:11,md:10,lg:9,xl:8,children:Object(M.jsx)(X,{})}):Object(M.jsxs)(T.a,{container:!0,item:!0,justifyContent:"center",xs:12,sm:11,md:11,lg:10,xl:8,children:[Object(M.jsxs)(T.a,{container:!0,item:!0,xs:11,children:[Object(M.jsx)(W,{}),Object(M.jsx)(R,{})]}),Object(M.jsxs)(T.a,{container:!0,item:!0,xs:12,style:{display:0===e.matches.length?null:"none"},children:[Object(M.jsx)(T.a,{item:!0,xs:12,style:{marginBottom:24},children:"No results found.  Try another search term."}),Object(M.jsx)(T.a,{item:!0,xs:12,children:Object(M.jsx)("img",{src:U,style:{width:"100%"},alt:"Michael Scott`s improv character Blind Guy McSqueezy"})})]}),Object(M.jsxs)(T.a,{container:!0,item:!0,justifyContent:"center",xs:12,style:{opacity:0===e.matches.length?"0%":null},children:[Object(M.jsx)(T.a,{item:!0,xs:11,sm:11,children:Object(M.jsx)(P,{})}),Object(M.jsx)(T.a,{item:!0,xs:11,sm:12,children:Object(M.jsx)(D,{})}),Object(M.jsx)(T.a,{item:!0,xs:11,sm:12,children:Object(M.jsx)(B,{})}),Object(M.jsx)(T.a,{item:!0,xs:12,sm:12,md:11,children:Object(M.jsx)(q,{})})]})]})]})}));var K=Object(c.b)((function(e,t){return{}}),(function(e){return{addLines:function(t){return e(function(e){return{type:j,payload:e}}(t))},addSeries:function(t){return e(function(e){return{type:b,payload:e}}(t))},finishLoading:function(t){return e(function(e){return{type:y,payload:e}}(t))},findMatches:function(t){return e(_(t))},setSize:function(t){return e(function(e){return{type:A,payload:e}}(t))}}}))((function(e){var t=e.addLines,n=e.addSeries,r=e.findMatches,a=e.finishLoading;e.setSize;return Object(d.a)(F).then((function(e){t(e),Object(d.a)(L).then((function(e){n(e),r(),a()}))})),Object(M.jsx)(M.Fragment,{children:Object(M.jsx)(Z,{})})}));var V=function(){return Object(M.jsx)(c.a,{store:E,children:Object(M.jsx)(K,{})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(M.jsx)(V,{}),document.getElementById("root")),Y()}},[[177,1,2]]]);
//# sourceMappingURL=main.8112d6f3.chunk.js.map