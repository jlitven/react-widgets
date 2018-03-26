(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(e,s,t){var a="/Users/jason/src/react-widgets/www/src/pages/migration-v4.md",l=t(1),n=t(194).default;t(192).default,t(172).default,e.exports=function(e){e.scope;var s=e.style,t=e.className;return l.createElement("section",{className:t,style:s,__source:{fileName:a,lineNumber:10},__self:this},l.createElement(n,{title:"migration-v4",__source:{fileName:a,lineNumber:11},__self:this}),l.createElement("div",{__source:{fileName:a,lineNumber:12},__self:this},l.createElement("h3",{__source:{fileName:a,lineNumber:13},__self:this},"Localizers (I18n)"),l.createElement("p",{__source:{fileName:a,lineNumber:14},__self:this},"In the past ",l.createElement("code",{__source:{fileName:a,lineNumber:14},__self:this},"react-widgets")," included a set of localizers for use with popular I18n libraries like Globalize and moment.js. One issue with this approach is that we couldn't iterate on those parts of hte package without needing to bump the version of all of ",l.createElement("code",{__source:{fileName:a,lineNumber:17},__self:this},"react-widgets"),". If a localizer needed a breaking change it'd have to wait until the whole package bumped a major version."),l.createElement("p",{__source:{fileName:a,lineNumber:19},__self:this},"To address that in v4 we've split the localizers out into their own packages. They are still maintained and developed along with react-widgets, but are individually installable via npm. The maintained core ones are:"),l.createElement("ul",{__source:{fileName:a,lineNumber:22},__self:this},l.createElement("li",{__source:{fileName:a,lineNumber:23},__self:this},l.createElement("code",{__source:{fileName:a,lineNumber:23},__self:this},"react-widgets-moment")),l.createElement("li",{__source:{fileName:a,lineNumber:24},__self:this},l.createElement("code",{__source:{fileName:a,lineNumber:24},__self:this},"react-widgets-globalize")),l.createElement("li",{__source:{fileName:a,lineNumber:25},__self:this},l.createElement("code",{__source:{fileName:a,lineNumber:25},__self:this},"react-widgets-simple-number"))),l.createElement("h3",{__source:{fileName:a,lineNumber:27},__self:this},"CSS Classes"),l.createElement("p",{__source:{fileName:a,lineNumber:28},__self:this},"The large majority of breaking changes are css related. Many classes have been removed or renamed to provide more modular and themeable default styles. Please check out the ",l.createElement("code",{__source:{fileName:a,lineNumber:30},__self:this},"variables.less")," (or scss) file for new or different less/sass variables"),l.createElement("p",{__source:{fileName:a,lineNumber:31},__self:this},"And poke around the widget DOM structures in the dev tools to get a sense of what has changed. If you have custom styles it should be fairly apparent (and easily fixable) what is wrong."),l.createElement("h3",{__source:{fileName:a,lineNumber:34},__self:this},"Default styles"),l.createElement("p",{__source:{fileName:a,lineNumber:35},__self:this},"Along with reworking the css we've also taken the time to update and refresh the default styles of each widget. They should be a bit more polished and clean out of the box for quick prototyping, as well as easier to theme."),l.createElement("h3",{__source:{fileName:a,lineNumber:38},__self:this},"Props"),l.createElement("h4",{__source:{fileName:a,lineNumber:39},__self:this},"Calendar: ",l.createElement("code",{__source:{fileName:a,lineNumber:39},__self:this},"initialView")," and ",l.createElement("code",{__source:{fileName:a,lineNumber:39},__self:this},"finalView")),l.createElement("p",{__source:{fileName:a,lineNumber:40},__self:this},"These have been replaced with the ",l.createElement("code",{__source:{fileName:a,lineNumber:40},__self:this},"views")," prop which provides a lot more freedom in defining what views the Calendar starts or ends on and in what order."),l.createElement("h4",{__source:{fileName:a,lineNumber:42},__self:this},l.createElement("code",{__source:{fileName:a,lineNumber:42},__self:this},"duration")," speed for animations"),l.createElement("p",{__source:{fileName:a,lineNumber:43},__self:this},"Programmatic ",l.createElement("code",{__source:{fileName:a,lineNumber:43},__self:this},"duration")," has been removed, in favor of 100% CSS specified animations. To change the duration of all popup enter and exiting speeds, adjust it via CSS."),l.createElement("p",{__source:{fileName:a,lineNumber:45},__self:this},l.createElement("strong",{__source:{fileName:a,lineNumber:45},__self:this},"For Popups"),":"),l.createElement("pre",{className:"pg-code-section",__source:{fileName:a,lineNumber:46},__self:this},l.createElement("code",{className:"language-css",__source:{fileName:a,lineNumber:46},__self:this},l.createElement("span",{className:"token selector",__source:{fileName:a,lineNumber:46},__self:this},".rw-popup-transition")," ",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:46},__self:this},"{"),"\n","  ",l.createElement("span",{className:"token property",__source:{fileName:a,lineNumber:46},__self:this},"transition-duration"),l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:46},__self:this},":")," 400ms",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:46},__self:this},";"),"\n",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:46},__self:this},"}"),"\n")),l.createElement("p",{__source:{fileName:a,lineNumber:47},__self:this},"Or if you want to control it per component use a className and selector."),l.createElement("pre",{className:"pg-code-section",__source:{fileName:a,lineNumber:48},__self:this},l.createElement("code",{className:"language-css",__source:{fileName:a,lineNumber:48},__self:this},l.createElement("span",{className:"token selector",__source:{fileName:a,lineNumber:48},__self:this},".my-slower-dropdown .rw-popup-transition")," ",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:48},__self:this},"{"),"\n","  ",l.createElement("span",{className:"token property",__source:{fileName:a,lineNumber:48},__self:this},"transition-duration"),l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:48},__self:this},":")," 400ms",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:48},__self:this},";"),"\n",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:48},__self:this},"}"),"\n")),l.createElement("p",{__source:{fileName:a,lineNumber:49},__self:this},l.createElement("strong",{__source:{fileName:a,lineNumber:49},__self:this},"For Calendar transitions"),":"),l.createElement("pre",{className:"pg-code-section",__source:{fileName:a,lineNumber:50},__self:this},l.createElement("code",{className:"language-css",__source:{fileName:a,lineNumber:50},__self:this},l.createElement("span",{className:"token selector",__source:{fileName:a,lineNumber:50},__self:this},".rw-calendar-transition")," ",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:50},__self:this},"{"),"\n","  ",l.createElement("span",{className:"token property",__source:{fileName:a,lineNumber:50},__self:this},"transition-duration"),l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:50},__self:this},":")," 400ms",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:50},__self:this},";"),"\n",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:50},__self:this},"}"),"\n")),l.createElement("p",{__source:{fileName:a,lineNumber:51},__self:this},"Or"),l.createElement("pre",{className:"pg-code-section",__source:{fileName:a,lineNumber:52},__self:this},l.createElement("code",{className:"language-css",__source:{fileName:a,lineNumber:52},__self:this},l.createElement("span",{className:"token selector",__source:{fileName:a,lineNumber:52},__self:this},".my-calendar .rw-calendar-transition")," ",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:52},__self:this},"{"),"\n","  ",l.createElement("span",{className:"token property",__source:{fileName:a,lineNumber:52},__self:this},"transition-duration"),l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:52},__self:this},":")," 400ms",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:52},__self:this},";"),"\n",l.createElement("span",{className:"token punctuation",__source:{fileName:a,lineNumber:52},__self:this},"}"),"\n"))))}},172:function(e,s,t){"use strict";t.r(s);var a=t(158),l=t(1),n=t.n(l),i=t(198),r=t.n(i),c=t(197),o=t.n(c),m=t(191),_=t.n(m),u="/Users/jason/src/react-widgets/www/src/components/TabbedCodeBlock.js",f=0;s.default=function(e){var s=e.children;return n.a.createElement(r.a,{defaultActiveKey:0,id:"tab-code-block-"+f++,__source:{fileName:u,lineNumber:24},__self:this},n.a.Children.map(s,function(e,s){var t,l=e.props;return n.a.createElement(o.a,{title:l.title,eventKey:s,__source:{fileName:u,lineNumber:27},__self:this},n.a.createElement(_.a,{code:Object(a.a)([(t=l.children,t.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"))]),mode:l.lang||"jsx",editorOptions:{linewrapping:!0},theme:"one-light",readOnly:"nocursor",className:"pg-code-section",__source:{fileName:u,lineNumber:28},__self:this}))}))}}}]);
//# sourceMappingURL=component---src-pages-migration-v-4-md-935dc75f77f1461f8570.js.map