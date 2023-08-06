"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[6202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,f=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return n?o.createElement(f,a(a({ref:t},l),{},{components:n})):o.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={sidebar_position:4,description:"What is an API/API Endpoint",slug:"/getting-started/flows"},a="API Endpoints",s={unversionedId:"Basics/API Endpoints",id:"Basics/API Endpoints",title:"API Endpoints",description:"What is an API/API Endpoint",source:"@site/docs/Basics/API Endpoints.md",sourceDirName:"Basics",slug:"/getting-started/flows",permalink:"/koxy-docs/getting-started/flows",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"What is an API/API Endpoint",slug:"/getting-started/flows"},sidebar:"tutorialSidebar",previous:{title:"Cloudspaces",permalink:"/koxy-docs/getting-started/cloudspaces"},next:{title:"API Builder",permalink:"/koxy-docs/getting-started/api-builder"}},d={},p=[{value:"What is an API",id:"what-is-an-api",level:2},{value:"Endpoints in Koxy AI",id:"endpoints-in-koxy-ai",level:2},{value:"Nodes in endpoints",id:"nodes-in-endpoints",level:2},{value:"How to create an endpoint",id:"how-to-create-an-endpoint",level:2},{value:"Connecting endpoints together",id:"connecting-endpoints-together",level:2}],l={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-endpoints"},"API Endpoints"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"what-is-an-api"},"What is an API"),(0,i.kt)("p",null,'API stands for "Application Programming Interface". An API is a software intermediary that allows two applications to communicate with each other (like a messenger). APIs are a set of functions and procedures that allow for the creation of applications. They access the data and features of other applications, services, and databases.'),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"endpoints-in-koxy-ai"},"Endpoints in Koxy AI"),(0,i.kt)("p",null,"A Cloudspace in Koxy AI comes with an API. You can add more endpoints to this API as you wish. an endpoint in Koxy AI is a set of nodes and functions connected together that defines how the endpoint works and what it returns as a response."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nodes-in-endpoints"},"Nodes in endpoints"),(0,i.kt)("p",null,"Every endpoint in Koxy AI is a set of nodes connected together in a specific order. The nodes define the functionality of the endpoint. For example, a node might be responsible for validating the input data, while another node might be responsible for storing the data in a database."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"how-to-create-an-endpoint"},"How to create an endpoint"),(0,i.kt)("p",null,"After ",(0,i.kt)("a",{parentName:"p",href:"/cloudspaces#create-a-cloudspace"},"creating your Cloudspace"),", You can go to your Cloudspace, and click on ",(0,i.kt)("strong",{parentName:"p"},"API")," from the sidebar. now you should see an endpoint called ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," built-in in your Cloudspace, you can add more endpoints to your API by clicking on ",(0,i.kt)("strong",{parentName:"p"},"Add Endpoint"),", you just need to give your endpoint a name to create it."),(0,i.kt)("p",null,"Notice: Endpoint names should be unique and can't be changed. so if you create an endpoint that has the name of another one the system will replace it with the older one."),(0,i.kt)("p",null,"After adding a new endpoint, you need to define the nodes that will make up the endpoint. You can do this by using the Koxy AI API builder. The API builder is a graphical interface that allows you to create and configure endpoints without writing any code."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connecting-endpoints-together"},"Connecting endpoints together"),(0,i.kt)("p",null,"You can set the trigger of any node in your endpoint as another andpoint, If you set the trigger of a node as another endpoint, the other endpoint will be executed in the same environment and It will share all the previous nodes responses that are saved as a response. ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/nodes/understanding-nodes#triggers"},"see how nodes triggers work"),"."))}u.isMDXComponent=!0}}]);