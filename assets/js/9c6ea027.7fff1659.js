"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[363],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>k});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),y=n,k=c["".concat(l,".").concat(y)]||c[y]||d[y]||a;return o?r.createElement(k,i(i({ref:t},u),{},{components:o})):r.createElement(k,i({ref:t},u))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},1577:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:2,slug:"/how-koxy-ai-works",description:"How Koxy AI works"},i="How Koxy AI works",s={unversionedId:"Getting Started/How Koxy AI works",id:"Getting Started/How Koxy AI works",title:"How Koxy AI works",description:"How Koxy AI works",source:"@site/docs/Getting Started/How Koxy AI works.md",sourceDirName:"Getting Started",slug:"/how-koxy-ai-works",permalink:"/koxy-docs/how-koxy-ai-works",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/how-koxy-ai-works",description:"How Koxy AI works"},sidebar:"tutorialSidebar",previous:{title:"What is Koxy AI",permalink:"/koxy-docs/what-is-koxy-ai"},next:{title:"How your data is hosted",permalink:"/koxy-docs/how-data-is-hosted"}},l={},p=[],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-koxy-ai-works"},"How Koxy AI works"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"When you build your backend with Koxy AI, there is no physical server that hosts your backend. Your backend does not exist until you send a request to it. Here's how it works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You create a backend in Koxy AI using the API builder (your API flow will be turned into a JSON object).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Koxy AI's AI system reads the JSON objects and turns them into code that is served globally in the cloud.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When a request is made to your backend, the Koxy AI Simulation system builds up your backend and serves it from the closest region to the device that sent the request."))),(0,n.kt)("p",null,"The simulation process is what allows Koxy AI to offer a number of benefits, such as:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"No code"),": You don't need to write any code to build your backend.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Zero configuration"),": You don't need to configure any servers or databases.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Global distribution"),": Your backend is served from ",(0,n.kt)("a",{parentName:"p",href:"/regions"},"35 regions")," around the world, so your users get the best possible performance.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Scalability"),": Your backend can scale to meet the needs of your application (We should not talk about this because Koxy AI can scale to another galaxy if you want it to).")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Reliability"),": Your backend is always up and running, even if one region goes down."))),(0,n.kt)("p",null,"Additional information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Koxy AI Simulation system can define your backend based on the Cloudspace token you send it as an Authorization header.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You can write your own Javascript functions and serve them in the edge-cloud.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check the ",(0,n.kt)("a",{parentName:"p",href:"/available-nodes"},"list of available nodes")," to know what Koxy AI can do."))))}d.isMDXComponent=!0}}]);