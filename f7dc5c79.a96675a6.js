(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(6),o=(n(0),n(96)),r={id:"motivation",title:"Motivation"},c={unversionedId:"introduction/motivation",id:"introduction/motivation",isDocsHomePage:!1,title:"Motivation",description:"As the requirements to build the web modern application have become increasingly complicated, our components and modules more than ever before. It's must be reuse in the cross-application, faster updates, and reduce unnecessary steps to updates the new version in each of the applications.",source:"@site/docs/introduction/Motivation.md",slug:"/introduction/motivation",permalink:"/introduction/motivation",editUrl:"https://github.com/nuz-app/nuz/edit/next/website/docs/introduction/Motivation.md",version:"current",lastUpdatedBy:"Hieu Lam",lastUpdatedAt:1594538698,sidebar:"sidebar",previous:{title:"Overview",permalink:"/introduction/overview"},next:{title:"Concepts",permalink:"/introduction/concepts"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As the requirements to build the web modern application have become increasingly complicated, our components and modules more than ever before. It's must be reuse in the cross-application, faster updates, and reduce unnecessary steps to updates the new version in each of the applications."),Object(o.b)("p",null,"Currently, in the world have many package manager for Javascript (or web) but all are build-time package manager. The build-time package manager will download all dependencies in the application to the local computer when calls install command and it's will resolve when your import code was called in source code. When released the application to production, must build the application includes all dependencies to a bundle, your bundle will be bigger by the business features increase. And because it's building time package manager if any dependencies in the application have been new updated version, the application must be rebuilt and redeployed, it takes much time if the company has many the applications and using many dependencies. In another, you also need increasing physical configuration to be able to build it. "),Object(o.b)("p",null,"Nuz is different with the rest of the world. Nuz is the runtime package manager. Our application doesn't need to calls install command to download all dependencies to the local computer and it's only downloading, cache, and create the modules when your import code was called at runtime. So, the build time will not increase by the business features increase and when any dependencies have the new updated version, all applications don't need to rebuild or redeploy, it's will auto-update by config in the application."),Object(o.b)("p",null,"Nuz hopes to change the way of developing modern web applications with great things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\ud83d\udce6 Write once and reuse it in any application."),Object(o.b)("li",{parentName:"ul"},"\ud83e\udde9 Everything called a module and it's isolated to sharing, build a new application quickly by just to picks and use the shared modules."),Object(o.b)("li",{parentName:"ul"},"\ud83c\udfaf Easy to maintain the application with many modules, update any modules just by a command.")),Object(o.b)("p",null,"View ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"getting-started#installation"}),"desire here"),"."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(r,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(b,c(c({ref:t},u),{},{components:n})):i.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);