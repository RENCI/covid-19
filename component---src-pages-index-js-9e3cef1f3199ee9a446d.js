(self.webpackChunkrenci_covid_19_site=self.webpackChunkrenci_covid_19_site||[]).push([[678],{8506:function(e,n,t){"use strict";t.d(n,{Zb:function(){return a},eW:function(){return s},Ol:function(){return l},cS:function(){return y}});var r=t(5697),i=t.n(r),o=t(3494),a=o.default.div.withConfig({displayName:"card__Card",componentId:"sc-5um1e-0"})((function(e){var n=e.theme,t=e.dark;return"\n    // & * { border: 1px solid #f99; }\n    border-radius: "+n.border.radius+";\n    overflow: hidden;\n    margin-bottom: 1rem;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: "+(t?n.color.primary.dark:n.color.white)+";\n    color: "+(t?n.color.white:n.color.primary.dark)+";\n    opacity: "+(t?.75:1)+";\n    transition: filter 250ms;\n    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));\n    &:hover {\n        filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.2));\n    }\n    a, a:active, a:visited {\n        color: "+n.color.primary.light+";\n        transition: filter 250ms, text-decoration-color 250ms;\n        text-decoration-color: "+n.color.primary.light+";\n        text-underline-offset: 0.1em;\n    }\n    a:hover, a:active:hover, a:visited:hover {\n        filter: brightness(1.25);\n        text-decoration-color: "+n.color.primary.dark+";\n        text-underline-offset: 0.1em;\n    }\n"}));a.propTypes={children:i().node.isRequired,elevate:i().bool.isRequired},a.defaultProps={elevate:!0};var l=o.default.div.withConfig({displayName:"card-header__CardHeader",componentId:"sc-2zmgu6-0"})((function(e){var n=e.theme;return"\n    display: flex;\n    // justify-content: center;\n    // align-items: center;\n    // text-align: left;\n    color: "+n.color.primary.dark+";\n    background: linear-gradient(-30deg, "+n.color.primary.light+"22 0%, "+n.color.white+" 100%);\n    background-color: "+n.color.primary.light+"11;\n    border-bottom: 1px solid "+n.color.primary.light+"66;\n    font-weight: bold;\n    position: relative;\n    font-size: 150%;\n    min-height: 3.5rem;\n    padding: "+n.padding.small+";\n    // padding-bottom: 0;\n"}));l.propTypes={fgColor:i().string.isRequired,bgColor:i().string.isRequired,children:i().node.isRequired},l.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)",children:""};var d=t(7294),c=o.default.div.withConfig({displayName:"card-body__CardBodyContents",componentId:"sc-1qtn8s4-0"})((function(e){return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    background-color: inherit;\n"}));c.propTypes={fgColor:i().string.isRequired,bgColor:i().string.isRequired},c.defaultProps={fgColor:"inherit",bgColor:"#fff"};var s=function(e){var n=e.children,t=(e.image,e.style);return d.createElement(c,{style:t},n)},u=o.default.div.withConfig({displayName:"card-footer__CardFooter",componentId:"sc-c9reo7-0"})((function(e){var n=e.theme;e.left;return"\n    display: flex;\n    justify-content: flex-start;\n    "+(e.center&&"justify-content: center")+";\n    "+(e.right&&"justify-content: flex-end")+";\n    align-items: center;\n    color: "+n.color.black+";\n    background-color: inherit;\n    padding: "+n.padding.normal+";\n    height: 4rem;\n"}));u.propTypes={fgColor:i().string.isRequired,bgColor:i().string.isRequired,children:i().node.isRequired},u.defaultProps={fgColor:"#fff",bgColor:"var(--color-crimson)"};var m=t(7457),p=t(2037),f=o.default.div.withConfig({displayName:"title-card__Wrapper",componentId:"sc-1tvw03g-0"})(["position:relative;margin-top:5rem;"]),g=o.default.div.withConfig({displayName:"title-card__TitleCardHeader",componentId:"sc-1tvw03g-1"})((function(e){var n=e.theme;return"\n    display: flex;\n    border-radius: "+n.border.radius+";\n    justfy-content: center;\n    align-items: center;\n    background-color: "+n.color.primary.dark+";\n    filter: drop-shadow(0 8px 8px #00000033);\n    font-weight: bold;\n    position: relative;\n    min-height: 4rem;\n    padding: "+n.padding.small+";\n    position: absolute;\n    left: 50%;\n    top: -3rem;\n    transform: translateX(-50%);\n    transition: min-width 250ms;\n    z-index: 1;\n    min-width: 50%;\n    @media (max-width: 798px) {\n        min-width: 90%;\n    }\n    "+m.Dx+" {\n        color: "+n.color.white+";\n        text-align: center;\n        width: 100%;\n        font-size: calc(12pt + 1vmin);\n        padding: 0;\n        margin: 0;\n    }\n"})),h=o.default.div.withConfig({displayName:"title-card__TitleCardBody",componentId:"sc-1tvw03g-2"})((function(e){var n=e.topPadding;return"\n    flex: 1;\n    padding: "+e.theme.padding.normal+";\n    padding-top: calc(3 * "+n+"px / 4);\n    background-color: inherit;\n"})),y=function(e){var n=e.title,t=e.children,r=e.noBody,i=(0,d.useRef)(),o=(0,d.useState)(0),l=o[0],c=o[1],s=(0,p.Lm)().windowWidth;return(0,d.useEffect)((function(){c(i.current.scrollHeight)}),[s]),d.createElement(f,null,d.createElement(g,{ref:i},d.createElement(m.Dx,null,n)),r?d.createElement("div",{style:{minHeight:"100px"}}):d.createElement(a,null,d.createElement(h,{topPadding:l},t)))};t(645)},645:function(e,n,t){"use strict";t.d(n,{C:function(){return d}});var r=t(7294),i=t(8506),o=t(9027),a=t(7457),l=t(3617),d=function(e){var n=e.data.frontmatter;return r.createElement(i.Zb,{key:(0,o.kebabCase)(n.title),style:{flex:"1 0 315px",minHeight:"470px",maxWidth:"600px"}},r.createElement(i.Ol,null,n.title),r.createElement(i.eW,{style:{display:"flex",flexDirection:"column",alignContent:"space-between"}},r.createElement("div",{dangerouslySetInnerHTML:{__html:n.blurb},style:{flex:"1"}}),r.createElement("br",null),r.createElement(a.nv,{center:!0},r.createElement(l.Qj,{to:n.path},"Read More"))))}},3954:function(e,n,t){"use strict";t.d(n,{hU:function(){return d},HC:function(){return m}});t(3366);var r=t(7294),i=t(5697),o=t.n(i),a=t(3494),l=(a.default.ol.withConfig({displayName:"list__OrderedList",componentId:"sc-16kncan-0"})(["line-height:",";"],(function(e){return e.dense?"1.0":"2.0"})),a.default.ul.withConfig({displayName:"list__UnorderedList",componentId:"sc-16kncan-1"})(["list-style-type:none;margin:0 0 2rem 0;padding:0;text-align:left;"," "," line-height:",";"],(function(e){return!0===e.center?"text-align: center;":void 0}),(function(e){return!0===e.right?"text-align: right;":void 0}),(function(e){return e.dense?"1.0":"2.0"}))),d=(0,a.default)(l).withConfig({displayName:"list__BulletedList",componentId:"sc-16kncan-2"})(["list-style-type:disc;margin:0 0 2rem 1rem;"]),c=(a.default.h4.withConfig({displayName:"list__ListTitle",componentId:"sc-16kncan-3"})([""]),a.default.li.withConfig({displayName:"list__ListItemContainer",componentId:"sc-16kncan-4"})(["margin:0;margin-bottom:1rem;padding:0;"])),s=a.default.span.withConfig({displayName:"list__PrimaryText",componentId:"sc-16kncan-5"})(["display:block;"]),u=a.default.span.withConfig({displayName:"list__SecondaryText",componentId:"sc-16kncan-6"})(["display:block;font-size:90%;"]),m=function(e){var n=e.primary,t=e.secondary;return r.createElement(c,null,r.createElement(s,null,n),t&&r.createElement(u,null,t))};o().node.isRequired},6558:function(e,n,t){"use strict";t.r(n);var r=t(7294),i=t(7667),o=t(7457),a=t(5056),l=t(8506),d=t(3954),c=t(3617),s=t(2037);n.default=function(){var e=(0,s.eo)();return r.createElement(i.JH,null,r.createElement(a.p,{title:"Home",description:"",keywords:""}),r.createElement(l.cS,{title:"RENCI's COVID-19 Response"},r.createElement(o.nv,null,"Working closely with partner research institutions and the private sector, ",r.createElement(c.dL,{to:"https://www.renci.org/"},"RENCI")," is adapting and extending its existing capabilities to accelerate COVID-19 response and research efforts. RENCI researchers are leaders in data science and in data-driven discoveries, and we want to use those talents to assist the larger international effort to slow the spread of the virus and search for treatments."),r.createElement(o.nv,null,"At a high level, our work in the area of COVID-19 research aims to:"),r.createElement(d.hU,null,r.createElement(d.HC,{primary:"Apply linked open data, including biomedical ontologies, to build in silico knowledge models of drugs, processes, and systems involved in the coronavirus disease and related diseases."}),r.createElement(d.HC,{primary:"Present aggregated clinical statistical models and an open, privacy-preserving framework to expose, share, and analyze data on clinical correlates of disease and outcomes, environmental exposures, socio-economic indicators, and genotype data."}),r.createElement(d.HC,{primary:"Provision notebook-based analytical environments with big data, machine learning, and artificial intelligence capabilities to support access to the growing body of COVID-19 related datasets, as well as tools to analyze and explore the data."}))),r.createElement(l.Zb,null,r.createElement(l.Ol,null,"Our Blog"),r.createElement(l.eW,null,r.createElement(o.nv,null,"Keep up with the latest on our blog."),e.map((function(e){var n=e.date,t=e.title,i=e.url;return r.createElement("article",{key:t},r.createElement(o.X6,null,r.createElement("strong",null,n),r.createElement("br",null),r.createElement(c.dL,{to:i},t)))})))),r.createElement(o.nv,null))}},8981:function(e){e.exports={kebabCase:function(e){return e.toLowerCase().replace(/ +/g,"-")}}},9027:function(e,n,t){"use strict";var r=t(8981);t.o(r,"kebabCase")&&t.d(n,{kebabCase:function(){return r.kebabCase}})}}]);
//# sourceMappingURL=component---src-pages-index-js-9e3cef1f3199ee9a446d.js.map