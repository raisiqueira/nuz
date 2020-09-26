(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||n;return a?r.a.createElement(m,s(s({ref:t},l),{},{components:a})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<n;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(2),r=a(6),n=(a(0),a(104)),o={id:"overview",title:"Overview",description:"Nuz is an open-source project, the runtime package manager to sharing packages such as components or libraries across the web application. Nuz hopes to change the way of developing modern web applications with great things.",keywords:["nuz","react","architecture","registry","cli","microfrontends","web","typescript","javascript","standalone","frontends","runtime","package-manager","resolver","require","importer","application"]},s={unversionedId:"introduction/overview",id:"introduction/overview",isDocsHomePage:!1,title:"Overview",description:"Nuz is an open-source project, the runtime package manager to sharing packages such as components or libraries across the web application. Nuz hopes to change the way of developing modern web applications with great things.",source:"@site/docs/introduction/Overview.md",slug:"/introduction/overview",permalink:"/introduction/overview",editUrl:"https://github.com/nuz-app/nuz/edit/next/website/docs/introduction/Overview.md",version:"current",lastUpdatedAt:1601118620,sidebar:"sidebar",next:{title:"Motivation",permalink:"/introduction/motivation"}},c=[{value:"What is Nuz?",id:"what-is-nuz",children:[{value:"Keys features",id:"keys-features",children:[]},{value:"Limitations",id:"limitations",children:[]}]},{value:"Desire",id:"desire",children:[{value:"For developder",id:"for-developder",children:[]},{value:"For enterprise",id:"for-enterprise",children:[]}]}],l={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"what-is-nuz"},"What is Nuz?"),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(n.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"Nuz is an experimental version that prepares for the 1.0.0 release. Suggestions and bug reports are welcome!"))),Object(n.b)("p",null,"Nuz is an ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/nuz-app/nuz"}),"open-source")," project, the runtime package manager to sharing packages such as components or libraries across the web application."),Object(n.b)("h3",{id:"keys-features"},"Keys features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud83e\udde9 Compatible as dynamic ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports"}),"import()")," expressions, is ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"getting-started#usage"}),"nuz.import()"),"."),Object(n.b)("li",{parentName:"ul"},"\u2699\ufe0f Easy to ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"getting-started#installation"}),"setup")," and flexible to customize."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udce6 Import and use any modules that don't need to install through ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../reference/core"}),"@nuz/core"),"."),Object(n.b)("li",{parentName:"ul"},"\u23f0 Not take time to rebuild time for the modules."),Object(n.b)("li",{parentName:"ul"},"\ud83d\ude94 Safer by ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"}),"integrity hash")," check is the default."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udea8 Self-retry if it fails on download and auto fallback if initial fails."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udd25 Hot update the modules in the application without a rebuild."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udcda Write once, use in cross the applications."),Object(n.b)("li",{parentName:"ul"},"\u26a1\ufe0f Easy to create, build, and publish quickly by ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../reference/cli"}),"@nuz/cli"),"."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udcbc Support fully-features to develop the module with ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../reference/cli"}),"@nuz/cli"),"."),Object(n.b)("li",{parentName:"ul"},"\u2601\ufe0f Provided ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../services/nuz-static"}),"CDNs")," and ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../services/nuz-registry"}),"registry")," public services on the cloud, it's free."),Object(n.b)("li",{parentName:"ul"},"\u2728 Build and share great things with everyone through ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../services/nuz-registry"}),"the registry"),"."),Object(n.b)("li",{parentName:"ul"},"\ud83c\udfaf Fully support server-side with optimized options."),Object(n.b)("li",{parentName:"ul"},"\ud83d\udcaf The solutions for ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../guides/micro-frontends-architecture"}),"Micro Frontends architecture"),".")),Object(n.b)("h3",{id:"limitations"},"Limitations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u26a0\ufe0f Impossible to use modules on the ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"../reference/registry"}),"registry")," without a network connection."),Object(n.b)("li",{parentName:"ul"},"\ud83e\udd14 Performance may be affected by network connection.")),Object(n.b)("p",null,"Recommended using Nuz services are ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../services/nuz-registry"}),"registry")," and ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../services/nuz-static"}),"static")," as CDNs to be optimized for Nuz ecosystem."),Object(n.b)("h2",{id:"desire"},"Desire"),Object(n.b)("p",null,"Nuz hopes to change the way of developing modern web applications with great things."),Object(n.b)("h3",{id:"for-developder"},"For developder"),Object(n.b)("p",null,"As a developer, build a lot of great things such as libraries, components and using them at many the applications. Releasing a patch or feature will take you a long time to update them in the app and rebuild it, then release the applications it to production, it may be but unnecessary operations. Nuz will help you eliminate those, you may not need to changes the code or do anything in your applications, just release a new module version, all applications will receive a affects immediately."),Object(n.b)("p",null,"Building, sharing and contributing to the system of the modules on the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../services/nuz-registry"}),"public registry")," will make it easier to develop future web applications, improving reusability. Thinking of building a web application simply and importing the modules and connecting them in your application will take a lot of development time. In addition, maintenance is faster and easier when you can hot update modules without rebuilding, or you can choose a compatible version like ",Object(n.b)("inlineCode",{parentName:"p"},"~1.0.0")," it will automatically upgrade when ",Object(n.b)("inlineCode",{parentName:"p"},"1.0.1")," is available."),Object(n.b)("p",null,"Nuz provides a free the ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../services/nuz-registry"}),"registry service")," and ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"../services/nuz-static"}),"static service")," as CDNs for all public modules. These services are designed to ensure that it optimally works with the Nuz ecosystem, high performance, scableability and reliability."),Object(n.b)("p",null,"More and more, contributing with us!"),Object(n.b)("h3",{id:"for-enterprise"},"For enterprise"),Object(n.b)("p",null,"If your enterprise is organizing personnel towards product teams or want to build a modern web application based on Micro Frontends architecture for frontend to scalability and compatibility with Microservices architecture at the backend. Nuz will help your enterprise resolve the problems when implementing it, all tech teams will working together, sharing everythins such as libraries, components, and tools using in cross the applications quickly and efficiencies."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Everything called modules, isolated and the teams can manage their own repositories according to their authority."),Object(n.b)("li",{parentName:"ul"},"The repository can contain appropriate module for unit testing, ci and cd, this helps keep the teams secure and helps the app's codebase be smaller, easier to manage and maintain."),Object(n.b)("li",{parentName:"ul"},"The teams don't need to take time to keeping up-to-date the shared modules and versioning of the modules by other teams."),Object(n.b)("li",{parentName:"ul"},"No time to rebuild the modules at the application to save time, costs and resources for the operation."),Object(n.b)("li",{parentName:"ul"},"The teams can develop standalone or workspaces and release a bugfix or feature independents with other teams by release a module version, it immediately affects that production."),Object(n.b)("li",{parentName:"ul"},"Unfortunately, there is a component of any team that has crashed, it will automatically fallback to the previous compatible version if after all the efforts are still not resolved, the applications still works but not include this module."),Object(n.b)("li",{parentName:"ul"},"High performance with lazy-loading for the application, only when modules are needed, can the modules be downloaded and used, which helps to reduce the first page load time and save bandwidth for unnecessary downloads."),Object(n.b)("li",{parentName:"ul"},"Easy to use, create and develop new modules by Nuz, meet high scalability but ensure reliability."),Object(n.b)("li",{parentName:"ul"},"Nuz is open-source, it is completely transparent and enterprise can self-hosted all the Nuz services.")))}p.isMDXComponent=!0}}]);