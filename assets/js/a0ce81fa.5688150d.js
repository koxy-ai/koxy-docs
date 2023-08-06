"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[2290],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>y});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),d=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(t),p=n,y=c["".concat(l,".").concat(p)]||c[p]||m[p]||r;return t?o.createElement(y,s(s({ref:a},u),{},{components:t})):o.createElement(y,s({ref:a},u))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9109:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(7462),n=(t(7294),t(3905));const r={sidebar_position:1,description:"Understand the structure of Koxy Database",slug:"/koxy-database/what-is-koxy-database"},s="What is Koxy Database",i={unversionedId:"Koxy Database/What is Koxy Database",id:"Koxy Database/What is Koxy Database",title:"What is Koxy Database",description:"Understand the structure of Koxy Database",source:"@site/docs/Koxy Database/What is Koxy Database.md",sourceDirName:"Koxy Database",slug:"/koxy-database/what-is-koxy-database",permalink:"/koxy-docs/koxy-database/what-is-koxy-database",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Understand the structure of Koxy Database",slug:"/koxy-database/what-is-koxy-database"},sidebar:"tutorialSidebar",previous:{title:"Koxy Database",permalink:"/koxy-docs/koxy-database"},next:{title:"Document embedding",permalink:"/koxy-docs/koxy-database/document-embedding"}},l={},d=[{value:"Intro",id:"intro",level:2},{value:"Features",id:"features",level:2},{value:"How to use Koxy Database",id:"how-to-use-koxy-database",level:2},{value:"What are collections",id:"what-are-collections",level:3},{value:"What are documents",id:"what-are-documents",level:3},{value:"Costs and limits",id:"costs-and-limits",level:2}],u={toc:d},c="wrapper";function m(e){let{components:a,...t}=e;return(0,n.kt)(c,(0,o.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-koxy-database"},"What is Koxy Database"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"intro"},"Intro"),(0,n.kt)("p",null,"Koxy Database is a fully managed, scalable, and secure database service that is designed to make it easy to store and manage your data. Koxy Database is based on the JSON document data model, which makes it easy to store and query your data."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fully managed"),": Koxy Database is a fully managed service, which means that you don't have to worry about managing the underlying infrastructure. Koxy Database takes care of all of the maintenance and provisioning, so you can focus on your application.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Scalable"),": Koxy Database is scalable by default and comes with unlimited data storage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Secure"),": Koxy Database is secure your data is protected from unauthorized access. Koxy Database uses industry-standard security measures to protect your data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"JSON document data model"),": Koxy Database uses the JSON document data model, which makes it easy to store and query your data. JSON documents are a lightweight and flexible data format that is easy to read and write.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Document embedding"),": Koxy Database supports a feature called document embedding, which allows you to add relationships to documents. This means that you can store related data in the same document, which can make it easier to query and manage your data. ",(0,n.kt)("a",{parentName:"p",href:"/koxy-database/document-embedding"},"learn more")))),(0,n.kt)("h2",{id:"how-to-use-koxy-database"},"How to use Koxy Database"),(0,n.kt)("p",null,"To start using Koxy Database first you need to upgrade your Cloudspace to a paid plan. once you do that you can click on ",(0,n.kt)("strong",{parentName:"p"},"Database")," in yoru Cloudspace's sidebar."),(0,n.kt)("h3",{id:"what-are-collections"},"What are collections"),(0,n.kt)("p",null,"Collections are like folders for your documents. for example you can have a collection for users and another collection for posts. every collection has a unique ID that's used to identify the collection in your database."),(0,n.kt)("h3",{id:"what-are-documents"},"What are documents"),(0,n.kt)("p",null,"Data in Koxy Database is saved as JSON documents. Every document has a ",(0,n.kt)("inlineCode",{parentName:"p"},"document_id")," that defines the document in a collection."),(0,n.kt)("p",null,"This is an example of a document data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "kais",\n    "email": "kais@email.com",\n    "avatar": null\n}\n')),(0,n.kt)("p",null,"and the document structure will be like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"created_at": timestamp,\n"data": {\n    "name": "kais",\n    "email": "kais@email.com",\n    "avatar": null\n},\n"document_id": "ID", // the id of the document\n"collection": "collection ID" // the id of the document\'s collection\n')),(0,n.kt)("h2",{id:"costs-and-limits"},"Costs and limits"),(0,n.kt)("p",null,"There is no storage limits in Koxy Database, however every ",(0,n.kt)("inlineCode",{parentName:"p"},"CRUD")," operation is considered a cloud run and will cost you a run."))}m.isMDXComponent=!0}}]);