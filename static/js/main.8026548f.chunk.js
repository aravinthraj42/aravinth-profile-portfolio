(this.webpackJsonparavinthfolio=this.webpackJsonparavinthfolio||[]).push([[0],{25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(7),c=n(1),a=n(0);const i=Object(c.createContext)(),l=e=>{let{children:t}=e;const[n,s]=Object(c.useState)("dark");Object(c.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"light":"dark"),e.addEventListener("change",(e=>{s(e.matches?"light":"dark")}))}),[]);return Object(a.jsx)(i.Provider,{value:[{themeName:n,toggleTheme:()=>{const e="dark"===n?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"https://aravinthraj42.github.io/aravinth-profile-portfolio/",title:"JS."},o={name:"Aravinth Raj",role:"Front End Developer",description:"Accomplished Front-End Developer with 3 years of experience at Infosys, specializing in creating robust and user-friendly web applications using React JS. Proficient in all stages of the software development lifecycle, from initial requirement gathering to deployment and support.",resume:"https://drive.google.com/file/d/1CBHaFdq8zt0aDju6KXnvAs6a9jGTULZT/view?usp=drive_link",social:{linkedin:"https://www.linkedin.com/in/aravinth-raj-developer",github:"https://aravinthraj42.github.io/aravinth-profile-portfolio/"}},j=[{name:"American Express - Card Service",description:"At Infosys, I worked for American Express Client in an Agile Scrum Model, I developed and enhanced reusable components, implemented new features, and contributed numerous pull requests to the clients Git repository. I deployed code via Jenkins, managed Linux file systems, and handled version updates for security and feature upgrades. Additionally, I enhanced legacy applications, supported the production team, and provided knowledge transfer sessions to new joiners.",stack:["React","JavaScript","Java","JSP"]}],d=["HTML","CSS","JavaScript","React","Git","Github","Node JS","JSP","Prompt Engineering","MySQL","MongoDB","Postman","Jenkins","ChromeDevtools","NPM","Jest","Enzyme"],h="B.Sc. in Mathematics, Hindustan College of Arts and Science, Coimbatore, Bharathiar University (2018-2021)",b="MCA (Distance Education), Madras University (2023-2025)",m="aravinthraj42@gmail.com";var u=n(13),p=n.n(u),O=n(11),x=n.n(O),v=n(15),f=n.n(v),g=n(14),k=n.n(g);n(25);var N=()=>{const[{themeName:e,toggleTheme:t}]=Object(c.useContext)(i),[n,s]=Object(c.useState)(!1),l=()=>s(!n);return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:n?"flex":null},className:"nav__list",children:[j.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Work"})}):null,d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,m?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"light"===e?Object(a.jsx)(x.a,{}):Object(a.jsx)(p.a,{})}),Object(a.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:n?Object(a.jsx)(k.a,{}):Object(a.jsx)(f.a,{})})]})};n(29);var _=()=>{const{homepage:e,title:t}=r;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(N,{})]})},w=n(8),y=n.n(w),C=n(16),S=n.n(C);n(30);var E=()=>{const{name:e,role:t,description:n,resume:s,social:c}=o;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[s&&Object(a.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(a.jsxs)(a.Fragment,{children:[c.github&&Object(a.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(y.a,{})}),c.linkedin&&Object(a.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(S.a,{})})]})]})]})})};n(31);var J=()=>Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("img",{src:"".concat("/aravinth-profile-portfolio","/assets/image-left.jpg"),alt:"Left side",className:"image_left",responsive:!0}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)(E,{})}),Object(a.jsx)("img",{src:"".concat("/aravinth-profile-portfolio","/assets/image-right.jpg"),alt:"Right side",className:"image_right",align:"right"})]}),A=n(6),I=n.n(A),M=n(17),P=n.n(M);n(33);var L=e=>{let{project:t}=e;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{className:"project_Name",children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(a.jsx)("li",{className:"project__stack-item",children:e},I()())))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(y.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(P.a,{})})]})};n(34);var R=()=>j.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Work Experience"}),Object(a.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(a.jsx)(L,{project:e},I()())))})]}):null;n(35);var B=()=>d.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:d.map((e=>Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},I()())))})]}):null,D=n(18),T=n.n(D);n(36);var z=()=>{const[e,t]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(T.a,{fontSize:"large"})})}):null};n(37);var F=()=>h&&b?Object(a.jsxs)("section",{className:"section education center",id:"education",children:[Object(a.jsx)("h2",{className:"section__title",children:"Education"}),Object(a.jsxs)("ul",{className:"education",children:[h&&Object(a.jsx)("li",{children:h}),b&&Object(a.jsx)("li",{children:b})]})]}):null;n(38);var G=()=>m?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(m),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;n(39);var H=()=>Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/aravinth-raj-developer",target:"_blank",rel:"noopener noreferrer",className:"link footer__link",children:"Created By Aravinth Raj J"})});n(40);var q=()=>{const[{themeName:e}]=Object(c.useContext)(i);return Object(a.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(a.jsx)(_,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(J,{}),Object(a.jsx)(R,{}),Object(a.jsx)(B,{}),Object(a.jsx)(F,{}),Object(a.jsx)(G,{})]}),Object(a.jsx)(z,{}),Object(a.jsx)(H,{})]})};n(41);Object(s.render)(Object(a.jsx)(l,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.8026548f.chunk.js.map