(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4Fil":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"d",(function(){return b}));var r=n("17x9"),o=n.n(r),i=n("vOnD"),a=i.c.div.withConfig({displayName:"card__Card",componentId:"vz6j3s-0"})((function(e){var t=e.theme,n=e.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+t.border.radius+";\n    overflow: hidden;\n    margin-bottom: 3rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(n?t.color.primary.dark:t.color.white)+";\n    color: "+(n?t.color.white:t.color.primary.dark)+";\n    opacity: "+(n?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+t.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+t.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+t.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:o.a.node.isRequired,elevate:o.a.bool.isRequired},a.defaultProps={elevate:!0};var l=i.c.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-34wzb3-0"})((function(e){var t=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+t.color.primary.dark+";\n    background: linear-gradient(-30deg, "+t.color.primary.light+"22 0%, "+t.color.white+" 100%);\n    background-color: "+t.color.primary.light+"11;\n    border-bottom: 1px solid "+t.color.primary.light+"66;\n    font-weight: bold;\n    position: relative;\n    font-size: 200%;\n    min-height: 4rem;\n    padding: "+t.padding.normal+";\n    // padding-bottom: 0;\n"}));l.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=n("FdF9"),s=i.c.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"c38ykj-0"})((function(e){return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    background-color: inherit;\n"}));s.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired},s.defaultProps={fgColor:"inherit",bgColor:"#fff"};var c=function(e){var t=e.children,n=(e.image,e.style);return d.default.createElement(s,{style:n},t)},u=i.c.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-17yhfms-0"})((function(e){var t=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+t.color.black+";\n    background-color: inherit;\n    padding: "+t.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:o.a.string.isRequired,bgColor:o.a.string.isRequired,children:o.a.node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};var f=n("RiPl"),m=n("gGy4"),p=i.c.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-15t9ua8-0"})(["position:relative;margin-top:5rem;"]),g=i.c.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-15t9ua8-1"})((function(e){var t=e.theme;return"\n    display: flex;\n    border-radius: "+t.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+t.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+t.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+f.c+" {\n        color: "+t.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=i.c.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-15t9ua8-2"})((function(e){var t=e.topPadding;return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    padding-top: calc(3 * "+t+"px / 4);\n    background-color: inherit;\n"})),b=function(e){var t=e.title,n=e.children,r=Object(d.useRef)(),o=Object(d.useState)(0),i=o[0],l=o[1],s=Object(m.f)().windowWidth;return Object(d.useEffect)((function(){l(r.current.scrollHeight)}),[r.current,s]),d.default.createElement(p,null,d.default.createElement(g,{ref:r},d.default.createElement(f.c,null,t)),d.default.createElement(a,null,d.default.createElement(h,{topPadding:i},n)))}},AeWJ:function(e,t){e.exports={kebabCase:function(e){return e.toLowerCase().replace(/ +/g,"-")}}},Ofmp:function(e,t,n){"use strict";n.r(t);var r=n("FdF9"),o=n("RiPl"),i=n("I/Ru"),a=n("jNNy"),l=(n("Wbzz"),n("4Fil")),d=n("/m4c"),s=n("gGy4"),c=n("QmAe");t.default=function(){var e=Object(s.g)();return r.default.createElement(i.a,null,r.default.createElement(a.a,{title:"Our Work",description:"",keywords:""}),r.default.createElement(l.d,{title:"Our Work"},r.default.createElement(o.b,null,"We will update this page with the latest projects coming out of RENCI as our researchers and their partners work together to develop novel approaches for dealing with COVID-19."),r.default.createElement(o.b,null,"RENCI researchers are supporting the ",r.default.createElement(d.a,{to:"https://tracs.unc.edu/index.php/news-articles/1704-covid-19-study-recruiting-unc-faculty-students-and-staff-involved-with-research-on-campus"},"ReCCAP UNC")," study to assess the effectiveness of COVID-19 preventive measures in keeping UNC workers safe as labs re-open across campus. The study is helping to advance research by offering free testing for COVID-19 antibodies and virus to members of UNC’s extended research community to monitor disease outbreak and reduce virus transmission."),r.default.createElement(o.b,null,"As students and workers return across the nation, it’s vital that we understand more about transmission on campus. This knowledge will inform best practices for testing methods and safety measures, and will help assess the usefulness of asymptomatic testing and contact tracing. The effort combines RENCI’s expertise in data science with UNC experts from the Depts. of Epidemiology, Infectious Diseases, Biology, and Microbiology and Immunology."),r.default.createElement(o.b,null,"Providing insights that make our communities safer is a key part of RENCI’s mission, and we’re even providing work space for the study as a sample collection and training site while our employees work from home.")),e.map((function(e){return r.default.createElement(l.a,{key:Object(c.kebabCase)(e.frontmatter.title)},r.default.createElement(l.c,null,e.frontmatter.title),r.default.createElement(l.b,null,r.default.createElement("div",{dangerouslySetInnerHTML:{__html:e.frontmatter.blurb}}),r.default.createElement("br",null),r.default.createElement(o.b,{center:!0},r.default.createElement(d.c,{to:e.frontmatter.path},"Read More"))))})))}},QmAe:function(e,t,n){"use strict";var r=n("AeWJ");n.o(r,"kebabCase")&&n.d(t,"kebabCase",(function(){return r.kebabCase}))}}]);
//# sourceMappingURL=component---src-pages-work-js-6001a6a5b1f7e2312823.js.map