"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[7712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2,description:"Add a new document to a data collection",slug:"/nodes/data/create"},i="Create data",l={unversionedId:"nodes/Data/Create",id:"nodes/Data/Create",title:"Create data",description:"Add a new document to a data collection",source:"@site/docs/nodes/Data/Create.md",sourceDirName:"nodes/Data",slug:"/nodes/data/create",permalink:"/koxy-docs/nodes/data/create",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Add a new document to a data collection",slug:"/nodes/data/create"},sidebar:"tutorialSidebar",previous:{title:"Read data",permalink:"/koxy-docs/nodes/data/read"},next:{title:"Update data",permalink:"/koxy-docs/nodes/data/update"}},d={},p=[{value:"Intro",id:"intro",level:2},{value:"How this node works",id:"how-this-node-works",level:2},{value:"Node properties",id:"node-properties",level:2},{value:"Dynamic variables support",id:"dynamic-variables-support",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-data"},"Create data"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"This node is used to add a new document to a collection in your Koxy Database."),(0,r.kt)("p",null,"We recommend you read about ",(0,r.kt)("a",{parentName:"p",href:"/koxy-database"},"Koxy Database"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"how-this-node-works"},"How this node works"),(0,r.kt)("p",null,"This node will simply add a new document to the collection you define."),(0,r.kt)("p",null,"This node will save the inserted document data as a response tht can be accessed from other nodes using the ",(0,r.kt)("inlineCode",{parentName:"p"},"koxy.res.{NODE_NAME}")," syntax. the document will be saved as a response like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "inserted_document": {\n        "document_id": "ID", // the id of the inserted document\n        "document_data": {\n            // the data of the inserted document\n        }\n    }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"node-properties"},"Node properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"name"),": node names should be unique and can't be changed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Collection"),": the collection ID to add the document to.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"document_od"),": the id of document to add. if left empty the system will generate a unique ID for the document.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Document data"),": the data of the document to add. should be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON"),". if left empty will insert an empty object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Next:")," the trigger that the node should call after creating the document. click on the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"next input"),"\xa0to get a list of available triggers."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dynamic-variables-support"},"Dynamic variables support"),(0,r.kt)("p",null,"You can use dynamic variables in the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"document_id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Document data."))))}u.isMDXComponent=!0}}]);