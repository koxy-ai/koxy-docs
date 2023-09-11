"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:7,description:"Add your own code to your API",slug:"/nodes/functions"},i="Functions",l={unversionedId:"nodes/Advanced/Functions",id:"nodes/Advanced/Functions",title:"Functions",description:"Add your own code to your API",source:"@site/docs/nodes/Advanced/Functions.md",sourceDirName:"nodes/Advanced",slug:"/nodes/functions",permalink:"/koxy-docs/nodes/functions",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Add your own code to your API",slug:"/nodes/functions"},sidebar:"tutorialSidebar",previous:{title:"Advanced nodes",permalink:"/koxy-docs/nodes/advanced"},next:{title:"Loops",permalink:"/koxy-docs/nodes/loops"}},s={},u=[{value:"Intro",id:"intro",level:2},{value:"How this node works",id:"how-this-node-works",level:2},{value:"Node properties",id:"node-properties",level:2},{value:"How to write your functions",id:"how-to-write-your-functions",level:2},{value:"Example 1 (Valid)",id:"example-1-valid",level:3},{value:"Example 2 (Invalid)",id:"example-2-invalid",level:3},{value:"Do You have to return something ?",id:"do-you-have-to-return-something-",level:4},{value:"Adding nested functions",id:"adding-nested-functions",level:3},{value:"Dynamic variables support",id:"dynamic-variables-support",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"The Functions node allows you to add and deploy your own ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript functions")," to your API."),(0,a.kt)("p",null,"You can write your functions in ",(0,a.kt)("inlineCode",{parentName:"p"},"Javacsript")," and It will be excuted inside an isolated\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"async function"),"\xa0that supports using ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/dynamic-variables"},"Dynamic variables"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-this-node-works"},"How this node works"),(0,a.kt)("p",null,"this node will run the code you write as an isolated ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript async function"),". You can use it to run custom operations or to ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," something to save as the node's response so it can be accessible from any other node using the following syntax:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"koxy.res.{NODE_NAME}"),"."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"node-properties"},"Node properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"name:"),"\xa0node names should be unique and can't be changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"function:")," write your code in ",(0,a.kt)("inlineCode",{parentName:"p"},"Javascript"),". see ",(0,a.kt)("a",{parentName:"p",href:"#how-to-write-your-functions"},"how to write your functions")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Next:"),"\xa0the trigger that the node should call after executing the function. click on the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"next input"),"\xa0to get a list of available triggers."))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"how-to-write-your-functions"},"How to write your functions"),(0,a.kt)("p",null,"To write code in the Functions node, you can use the same syntax as you would use in a regular ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript\xa0async function"),". "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You don't write the function itself.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You only write the code/content of the function."))),(0,a.kt)("h3",{id:"example-1-valid"},"Example 1 (Valid)"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Valid code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const data = await fetch("https://api.github.com/search/koxy.get.{searchKeyword}");\ndata = await data.json();\n\nreturn data;\n')),(0,a.kt)("h3",{id:"example-2-invalid"},"Example 2 (Invalid)"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Invalid code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'async function () {\n    const data = await fetch("https://api.github.com/search/K_GET.{searchKeyword}");\n\xa0\xa0\xa0\xa0data = await data.json();\n\n\xa0\xa0\xa0\xa0return data;\n}\n')),(0,a.kt)("p",null,"The above example will save the ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," as the node's response so it can be accessed as a result dynamic variable."),(0,a.kt)("p",null,"Please note that this is not a recommended example and if you want to fetch data you should use the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/core/http-client"},"HTTP Client node")," instead."),(0,a.kt)("h4",{id:"do-you-have-to-return-something-"},"Do You have to return something ?"),(0,a.kt)("p",null,"No, You don't have to return something, You can use the functions node to do any operation that our nodes are not capable of."),(0,a.kt)("h3",{id:"adding-nested-functions"},"Adding nested functions"),(0,a.kt)("p",null,"Technically, You can build a whole JS application in one ",(0,a.kt)("inlineCode",{parentName:"p"},"function node")," and adding nested functions is possible, but however it's not recommended for now. We recommend adding multiple functions nodes instead."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"dynamic-variables-support"},"Dynamic variables support"),(0,a.kt)("p",null,"You can use\xa0",(0,a.kt)("a",{parentName:"p",href:"/getting-started/dynamic-variables"},"Dynamic variables"),"\xa0in the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"function.")))}p.isMDXComponent=!0}}]);