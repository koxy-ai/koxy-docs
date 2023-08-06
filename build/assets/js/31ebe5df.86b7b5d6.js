"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[8010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var s=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=s.createContext({}),p=function(e){var t=s.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return s.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,d=u["".concat(o,".").concat(m)]||u[m]||k[m]||r;return a?s.createElement(d,i(i({ref:t},c),{},{components:a})):s.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var s=a(7462),n=(a(7294),a(3905));const r={sidebar_position:9,description:"Track the status of the Koxy AI project",slug:"status"},i="Status",l={unversionedId:"Status",id:"Status",title:"Status",description:"Track the status of the Koxy AI project",source:"@site/docs/Status.md",sourceDirName:".",slug:"/status",permalink:"/koxy-docs/status",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Track the status of the Koxy AI project",slug:"status"},sidebar:"tutorialSidebar",previous:{title:"Regions",permalink:"/koxy-docs/regions"}},o={},p=[{value:"Current status",id:"current-status",level:3},{value:"Roadmap",id:"roadmap",level:3},{value:"Available nodes",id:"available-nodes",level:3},{value:"Known issues",id:"known-issues",level:3},{value:"Report issues",id:"report-issues",level:3},{value:"Future features",id:"future-features",level:3}],c={toc:p},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,s.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"status"},"Status"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"current-status"},"Current status"),(0,n.kt)("p",null,"Koxy AI is currently in ",(0,n.kt)("strong",{parentName:"p"},"Public Experiment")," status. It is stable enough for most use-cases, but there may still be some issues and We are still working on a lot of features."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"roadmap"},"Roadmap"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("strong",{parentName:"p"},"Alpha"),": Testing with a closed set of developers.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("strong",{parentName:"p"},"Public Experiment"),": Stable enough for most use-cases but still experiencing some issues and a lot of features are still under development so go easy on us.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("strong",{parentName:"p"},"Public"),": Stable for non-enterprise use-cases.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("strong",{parentName:"p"},"Stable"),": Stable for all use-cases with all the features ready to anyone."))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"available-nodes"},"Available nodes"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/available-nodes"},"See the available nodes for more information")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"known-issues"},"Known issues"),(0,n.kt)("p",null,"The solved issue will be checked from the list."),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","There is a known issue with the Koxy AI ",(0,n.kt)("a",{parentName:"p",href:"/edge-cloud"},"edge-cloud")," that is causing some users to experience latency. We are working on a fix for this issue.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","There is a know issue with the ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/api-builder"},"API builder")," causing node's positions to crash in some cases. with a lot of problems on Firefox.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","There is a number of know issues in the ",(0,n.kt)("strong",{parentName:"p"},"Loops node")," that can be found on ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/nodes/loops#known-issues"},"this page"),"."))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"report-issues"},"Report issues"),(0,n.kt)("p",null,"If You're facing an issue that's not found in the ",(0,n.kt)("a",{parentName:"p",href:"#known-issues"},"known issues section")," you can report it to us in ",(0,n.kt)("a",{parentName:"p",href:"https://koxy-ai.web.app/report-issues"},"this form"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"future-features"},"Future features"),(0,n.kt)("p",null,"This checklist is ordered randomly."),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Data nodes. (Have a NoSQL database integrated in any Pro Cloudspace).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Teams support (Working on it).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"p"},"JSX")," support (Be able to return ",(0,n.kt)("inlineCode",{parentName:"p"},"JSX")," components using Koxy AI).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Version control (Add a version control system to deployments).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Magical builder (Build flows with prompts along with a voice assistant).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add ",(0,n.kt)("inlineCode",{parentName:"p"},"modules")," support to ",(0,n.kt)("inlineCode",{parentName:"p"},"functions nodes"),".")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Upgrades to the Koxy AI platform's ",(0,n.kt)("inlineCode",{parentName:"p"},"UI/UX"),".")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add interactive examples to the documentation.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Build a community (Discord, forms...).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add extensions support (So any developer can build their own nodes and share it for other developers to use).")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","Add support for more AI models.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add support for more languages (Currently available in ",(0,n.kt)("inlineCode",{parentName:"p"},"English"),")."))))}k.isMDXComponent=!0}}]);