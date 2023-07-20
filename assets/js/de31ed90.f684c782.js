"use strict";(self.webpackChunkkoxy_docs=self.webpackChunkkoxy_docs||[]).push([[46],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:6,description:"Integrat your API with thousands of AI models",slug:"/getting-started/nodes/ai-models"},l="AI Models",i={unversionedId:"Getting Started/nodes/AI models",id:"Getting Started/nodes/AI models",title:"AI Models",description:"Integrat your API with thousands of AI models",source:"@site/docs/Getting Started/nodes/AI models.md",sourceDirName:"Getting Started/nodes",slug:"/getting-started/nodes/ai-models",permalink:"/getting-started/nodes/ai-models",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Integrat your API with thousands of AI models",slug:"/getting-started/nodes/ai-models"},sidebar:"tutorialSidebar",previous:{title:"Delay (timer)",permalink:"/getting-started/nodes/core/delay"},next:{title:"Functions",permalink:"/getting-started/nodes/functions"}},s={},d=[{value:"How this node works",id:"how-this-node-works",level:3},{value:"How to use this node response\u200b",id:"how-to-use-this-node-responsedirect-link-to-how-to-use-this-node-response",level:3},{value:"Add this node to your flow",id:"add-this-node-to-your-flow",level:3},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Valid body (parameters)",id:"valid-body-parameters",level:3},{value:"Running private models",id:"running-private-models",level:3},{value:"Example",id:"example",level:3},{value:"Node structure (example)",id:"node-structure-example",level:3},{value:"Dynamic variables support\u200b",id:"dynamic-variables-supportdirect-link-to-dynamic-variables-support",level:3}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ai-models"},"AI Models"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The AI Models node allows you to use any of ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.com"},"HuggingFace"),"'s transformers models in your API."),(0,a.kt)("p",null,"This can be useful for tasks such as natural language processing, machine translation, and question answering.. allowing you to connect multiple models to each other."),(0,a.kt)("h3",{id:"how-this-node-works"},"How this node works"),(0,a.kt)("p",null,"This node will use the ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/api-inference/index"},"HuggingFace Inference API")," to be able to use the AI model based on the model ID you choose, and it will save the response so it can be accessible from any other node using the following syntax:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"koxy.res.{NODE_NAME}"),"."),(0,a.kt)("h3",{id:"how-to-use-this-node-responsedirect-link-to-how-to-use-this-node-response"},"How to use this node response",(0,a.kt)("a",{parentName:"h3",href:"http://localhost:3000/getting-started/nodes/core/http-client#how-to-use-this-node-response",title:"Direct link to How to use this node response"},"\u200b")),(0,a.kt)("p",null,"You can use the node response from any other node using the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"koxy.res.{NODE_NAME}"),"\xa0as described above, and if the response is a JSON or an object you can get the nested values like this (example):\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"koxy.res.{gpt2.outputs}"),"\xa0(this will be the value of the outputs the gpt2 model returned)."),(0,a.kt)("h3",{id:"add-this-node-to-your-flow"},"Add this node to your flow"),(0,a.kt)("p",null,"To add this node to your flow you should open the nodes list. check the\xa0",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/getting-started/flows-builder"},"flows builder documentation"),"\xa0to learn more, and then You should fill the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"name:")," node names should be unique and can't be changed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"model:")," The model's ID you want to use. You can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"model input")," and a list of all models will open up.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"body:")," the request body or parameters you want to send to the model.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Next:"),"\xa0the trigger that the node should call after running the model. click on the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"next input"),"\xa0to get a list of available triggers."))),(0,a.kt)("h3",{id:"requirements-and-limitations"},"Requirements and limitations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"You will need to add your HuggingFace token:")," AI models will have low rate limits if You don't add your HuggingFace token."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can add your token from the ",(0,a.kt)("inlineCode",{parentName:"li"},"models list"),". see ",(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/docs/hub/security-tokens"},"how to get a HuggingFace token"),"."),(0,a.kt)("li",{parentName:"ul"},"Your token will be safely added to your ",(0,a.kt)("a",{parentName:"li",href:"/getting-started/dynamic-variables#environment-variables"},"environment variables")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Not all models are supported:")," Only models supported in the ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/api-inference/index"},"Inference API")," can be used in this node. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"To know if a model is supported click on ",(0,a.kt)("strong",{parentName:"li"},"Open in HuggingFace")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"models list"),". Now in HuggingFace click on\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"deploy"),"\xa0and check if the model supports deploying in\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Inference API"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Rate limits:")," If you suddenly send 10k requests then you\u2019re likely to receive 503 errors saying models are loading. In order to prevent that, you should instead try to start running queries smoothly from 0 to 10k over the course of a few minutes."))),(0,a.kt)("h3",{id:"valid-body-parameters"},"Valid body (parameters)"),(0,a.kt)("p",null,"We left this for you because of the fact that you might use any format based on the model type. We recommend you check ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/api-inference/detailed_parameters"},"this documentation")," to learn more about how to set your parameters."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\'{"inputs": "The answer to the universe is [MASK]."}\'\n')),(0,a.kt)("p",null,"After all, setting your model's parameters change based on the model you are using. again You can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"deply to Inference API")," button in HuggingFace to see how they set their parameters for every model."),(0,a.kt)("h3",{id:"running-private-models"},"Running private models"),(0,a.kt)("p",null,"When you add your HuggingFace token your private models will be available in the models list. however this feature is still a ",(0,a.kt)("strong",{parentName:"p"},"demo"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example we will use the ",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/bert-base-uncased"},"bert-base-uncased")," model to fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"[MASK]"),"."),(0,a.kt)("p",null,"So first you need to give your node a name, in this example We will name it\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"model1"),"."),(0,a.kt)("p",null,"We will click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"model input")," enter our HuggingFace token and then choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"bert-base-uncased")," model and click on ",(0,a.kt)("strong",{parentName:"p"},"Use model"),"."),(0,a.kt)("p",null,"Now let's set our body or parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'\'{"inputs": "The goal of life is [MASK]"}\'\n')),(0,a.kt)("p",null,"And we will set the ",(0,a.kt)("inlineCode",{parentName:"p"},"next trigger")," to ",(0,a.kt)("strong",{parentName:"p"},"stop"),"."),(0,a.kt)("p",null,"When We ran that node, We got this response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"responses": {\n        "model1": "[{\\"score\\":0.5076180696487427,\\"token\\":1012,\\"token_str\\":\\".\\",\\"sequence\\":\\"the goal of life is.\\"},{\\"score\\":0.48748764395713806,\\"token\\":1025,\\"token_str\\":\\";\\",\\"sequence\\":\\"the goal of life is ;\\"},{\\"score\\":0.0019173762993887067,\\"token\\":1064,\\"token_str\\":\\"|\\",\\"sequence\\":\\"the goal of life is |\\"},{\\"score\\":0.0016907962271943688,\\"token\\":999,\\"token_str\\":\\"!\\",\\"sequence\\":\\"the goal of life is!\\"},{\\"score\\":0.0009608120890334249,\\"token\\":1029,\\"token_str\\":\\"?\\",\\"sequence\\":\\"the goal of life is?\\"}]"\n    },\n')),(0,a.kt)("h3",{id:"node-structure-example"},"Node structure (example)"),(0,a.kt)("p",null,"The structure of the node we built before would be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'model1: {\n    type: "hf",\n    icon: "neurology"\n    model: "bert-base-uncased",\n    data: \'{"inputs": "The goal of life is [MASK]"}\',\n    next: "stop",\n    x: 0,\n    y: 0\n}\n')),(0,a.kt)("h3",{id:"dynamic-variables-supportdirect-link-to-dynamic-variables-support"},"Dynamic variables support",(0,a.kt)("a",{parentName:"h3",href:"http://localhost:3000/getting-started/nodes/core/http-client#dynamic-variables-support",title:"Direct link to Dynamic variables support"},"\u200b")),(0,a.kt)("p",null,"You can use\xa0",(0,a.kt)("a",{parentName:"p",href:"/getting-started/dynamic-variables"},"Dynamic variables"),"\xa0in the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Body (parameters)")))}m.isMDXComponent=!0}}]);