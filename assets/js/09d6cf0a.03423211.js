"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:5,description:"Learn more about the flows builder",slug:"/getting-started/flows-builder"},i="Flows Builder",l={unversionedId:"Getting Started/Flows builder",id:"Getting Started/Flows builder",title:"Flows Builder",description:"Learn more about the flows builder",source:"@site/docs/Getting Started/Flows builder.md",sourceDirName:"Getting Started",slug:"/getting-started/flows-builder",permalink:"/getting-started/flows-builder",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Learn more about the flows builder",slug:"/getting-started/flows-builder"},sidebar:"tutorialSidebar",previous:{title:"Flows",permalink:"/getting-started/flows"},next:{title:"Nodes",permalink:"/getting-started/nodes/available-nodes/core"}},s={},p=[{value:"Components",id:"components",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flows-builder"},"Flows Builder"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The flows GUI builder is a visual tool that allows you to create and edit Koxy AI flows."),(0,o.kt)("p",null,"To use the flows GUI builder, you will need to create a new flow. You can do this by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"New flow")," button from your cloudspace's flows. ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/flows#create-a-new-flow"},"learn more"),"."),(0,o.kt)("p",null,"Once you have created a new flow, you will be able to add nodes to it. ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/nodes/understanding-nodes#add-a-node"},"learn how to add nodes"),"."),(0,o.kt)("p",null,"Each node in a flow has a name, a type, an icon, and a set of properties. The name of the node is used to identify it in the flow. The type of the node determines what the node does. The properties of the node control how the node behaves."),(0,o.kt)("p",null,"these properties can't be changed in any node."),(0,o.kt)("h3",{id:"components"},"Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Canvas:")," the ground where you drag and connect your nodes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Nodes list:")," the list of all available nodes to add to your flow. It can be accessed by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"plus icon")," in the rop-right corner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Variables:")," a list of your environment variables. can be accessed by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Environment icon")," in the top-right corner. clicking on a variable will copy it usable syntax, example: clicking on the ",(0,o.kt)("inlineCode",{parentName:"p"},"var1")," variable will copy ",(0,o.kt)("inlineCode",{parentName:"p"},"koxy.var.{var1}"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Navigator:")," allows you to delete your nodes or change their positions manually. can be accessed by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"edit icon")," in the top-right corner.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Run window"),": Enables you to run your flow from the platform or your local machine. can be accessed by clicking on the ",(0,o.kt)("strong",{parentName:"p"},"Run")," button in the top-right corner."))))}u.isMDXComponent=!0}}]);