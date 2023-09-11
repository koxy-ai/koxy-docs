"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[688],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),y=r,b=s["".concat(l,".").concat(y)]||s[y]||p[y]||o;return n?a.createElement(b,i(i({ref:t},d),{},{components:n})):a.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:4,slug:"/what-is-a-backend",description:"What is a backend in Koxy AI"},i="What is a backend",c={unversionedId:"Getting Started/What is a backend",id:"Getting Started/What is a backend",title:"What is a backend",description:"What is a backend in Koxy AI",source:"@site/docs/Getting Started/What is a backend.md",sourceDirName:"Getting Started",slug:"/what-is-a-backend",permalink:"/koxy-docs/what-is-a-backend",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/what-is-a-backend",description:"What is a backend in Koxy AI"},sidebar:"tutorialSidebar",previous:{title:"How your data is hosted",permalink:"/koxy-docs/how-data-is-hosted"},next:{title:"Build your API",permalink:"/koxy-docs/build-your-api"}},l={},u=[{value:"Intro",id:"intro",level:2},{value:"Building your backend",id:"building-your-backend",level:2},{value:"What is a Cloudspace",id:"what-is-a-cloudspace",level:3},{value:"How to build",id:"how-to-build",level:3}],d={toc:u},s="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-backend"},"What is a backend"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"In a classical development environment, A Backend typically consists of a server that powers your content, a database that stores your content, and an API that serves the content to and from the front-end."),(0,r.kt)("p",null,"In Koxy AI, a backend is a Cloudspace, an API, and a database. there is no physical server that poweres your content, instead your backend functionality is distributed in the cloud and executed on-demand. ",(0,r.kt)("a",{parentName:"p",href:"/how-koxy-ai-works"},"learn more about how Koxy AI works"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"building-your-backend"},"Building your backend"),(0,r.kt)("p",null,"To build your backend in Koxy AI you need to ",(0,r.kt)("a",{parentName:"p",href:"https://koxy-ai.web.app/sign-up"},"create a new account")," and then ",(0,r.kt)("a",{parentName:"p",href:"https://koxy-ai.web.app/new-cloudspace"},"create your first Cloudspace"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-a-cloudspace"},"What is a Cloudspace"),(0,r.kt)("p",null,"A Cloudspace is a complete backend environment that contains your database, environment variables, and API."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-to-build"},"How to build"),(0,r.kt)("p",null,"You can build your backend by using the drag-and-drop API builder. your Cloudspace will come with a ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," API endpoint by default but you create more endpoints as you want."),(0,r.kt)("p",null,"With Koxy AI you can build a complex functionality that requires a senior engineer to work days on in just a few minutes without writing a single line of code."),(0,r.kt)("p",null,"We are really exited about what you can build with Koxy AI."))}p.isMDXComponent=!0}}]);