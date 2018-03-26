(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{154:function(e,t,r){var l="/Users/jason/src/react-widgets/www/src/pages/localization.md";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l])}return e}).apply(this,arguments)}var a=r(1),n=r(194).default,s=(r(192).default,r(173).default),m=function(e){return a.createElement("div",i({},e,{__source:{fileName:l,lineNumber:6},__self:this}))};e.exports=function(e){e.scope;var t=e.style,r=e.className;return a.createElement("section",{className:r,style:t,__source:{fileName:l,lineNumber:10},__self:this},a.createElement(n,{title:"localization",__source:{fileName:l,lineNumber:11},__self:this}),a.createElement("div",{__source:{fileName:l,lineNumber:12},__self:this},a.createElement("h1",{__source:{fileName:l,lineNumber:13},__self:this},"Localization"),a.createElement("p",{__source:{fileName:l,lineNumber:14},__self:this},"In order to handle the complex international differences in number and date formats ",a.createElement("code",{__source:{fileName:l,lineNumber:14},__self:this},"react-widgets"),' relies on third party parsing and formatting libraries via an integration layer of "localizers". We maintain and support localizers for ',a.createElement("strong",{__source:{fileName:l,lineNumber:16},__self:this},"Globalize.js"),", ",a.createElement("strong",{__source:{fileName:l,lineNumber:16},__self:this},"Moment.js")," and a simple number localizer, but you can easily write your own for whichever library you are using."),a.createElement("p",{__source:{fileName:l,lineNumber:18},__self:this},"Localization sensitive widgets have ",a.createElement("code",{__source:{fileName:l,lineNumber:18},__self:this},"format")," props that passed directly to your chosen localizer. The type and shape of these format props is determined by the api of the backing i18n library. Moment.js, for instance, uses string based date formats like: ",a.createElement("code",{__source:{fileName:l,lineNumber:20},__self:this},"MMM dd YYYY")," whereas the newer Globalize.js may take an object like:",a.createElement("code",{__source:{fileName:l,lineNumber:21},__self:this},"{"," skeleton: GyMMMd ","}"),". Regardless of the localizer, formats ",a.createElement("strong",{__source:{fileName:l,lineNumber:21},__self:this},"always")," accept ",a.createElement("code",{__source:{fileName:l,lineNumber:21},__self:this},"function")," values for doing on-the-fly custom formatting."),a.createElement("h3",{__source:{fileName:l,lineNumber:23},__self:this},"Globalize.js (recommended) ",a.createElement("small",{__source:{fileName:l,lineNumber:23},__self:this},"date, number")),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:24},__self:this},a.createElement("code",{className:"language-sh",__source:{fileName:l,lineNumber:24},__self:this},"npm install globalize react-widgets-globalize --save","\n")),a.createElement("p",{__source:{fileName:l,lineNumber:25},__self:this},"Globalize can be a bit of a challenge to set up correctly so please consult the ",a.createElement("a",{href:"https://github.com/jquery/globalize#getting-started",__source:{fileName:l,lineNumber:25},__self:this},"globalize docs")," for a lot of info on setting up Globalize and integrating into lots of different app environments."),a.createElement("p",{__source:{fileName:l,lineNumber:27},__self:this},"The Globalize localizer handles both ",a.createElement("strong",{__source:{fileName:l,lineNumber:27},__self:this},"number")," and ",a.createElement("strong",{__source:{fileName:l,lineNumber:27},__self:this},"date")," localization so there is no need for any additional localizers."),a.createElement("p",{__source:{fileName:l,lineNumber:29},__self:this},a.createElement("em",{__source:{fileName:l,lineNumber:29},__self:this},"Note: the examples below are for Globalize ",a.createElement("code",{__source:{fileName:l,lineNumber:29},__self:this},">= v1.0.0"),", however the localizer supports ",a.createElement("code",{__source:{fileName:l,lineNumber:29},__self:this},"v0.1.0")," as well.")),a.createElement(s,{__source:{fileName:l,lineNumber:30},__self:this},a.createElement(m,{title:"webpack globalize plugin",__source:{fileName:l,lineNumber:31},__self:this},"\n    import Globalize from 'globalize';\n    import globalizeLocalizer from 'react-widgets-globalize';\n    import DateTimePicker from 'react-widgets/lib/DateTimePicker';\n\n    Globalize.locale('en')\n\n    globalizeLocalizer()\n\n    render(<DateTimePicker />, document.getElementById('app-root'))\n    "),a.createElement(m,{title:"browser globals",__source:{fileName:l,lineNumber:44},__self:this},"\n    <script src='node_modules/react-widgets/dist/react-widgets.js'><\/script>\n    <script src='node_modules/react-widgets-globalize/dist/react-widgets-globalize.js'><\/script>\n    <script>\n      var DateTimePicker = ReactWidgets.DateTimePicker;\n\n      ReactDOM.render(<DateTimePicker />, document.getElementById('app-root'))\n    <\/script>\n    ")),a.createElement("p",{__source:{fileName:l,lineNumber:56},__self:this},"While you ",a.createElement("em",{__source:{fileName:l,lineNumber:56},__self:this},"can")," use option objects and raw pattern strings directly as ",a.createElement("code",{__source:{fileName:l,lineNumber:56},__self:this},"format"),"s with react-widgets. It's ",a.createElement("a",{href:"https://github.com/globalizejs/globalize#compilation-and-the-runtime-modules",__source:{fileName:l,lineNumber:56},__self:this},"recommended")," that you use ",a.createElement("em",{__source:{fileName:l,lineNumber:57},__self:this},"statically")," determinable formatter functions instead. These can be extracted as part of your application's build step and compiled, ensuring applications only include exactly the i18n data needed."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:59},__self:this},a.createElement("code",{className:"language-jsx",__source:{fileName:l,lineNumber:59},__self:this},"// dates","\n","let monthYearFormatter = Globalize.dateFormatter(","{"," raw: 'mmm YY' ","}",");","\n","let monthYearParser = Globalize.dateParser(","{"," raw: 'mmm YY' ","}",");","\n","\n","// numbers","\n","let percentFormatter = Globalize.numberFormatter(","{","\n","  ","style: 'percent',","\n","  ","maximumFractionDigits: 2","\n","}",");","\n","let percentParser = Globalize.numberParser(","{","\n","  ","style: 'percent',","\n","  ","maximumFractionDigits: 2","\n","}",");","\n","\n","return (","\n","  ","<div>","\n","    ","<DateTimePicker","\n","      ","format=","{","monthYearFormatter","}","\n","      ","parse=","{","monthYearParser","}","\n","    ","/>","\n","    ","<NumberPicker","\n","      ","format=","{","percentFormatter","}","\n","      ","parse=","{","percentParser","}","\n","    ","/>","\n","\n","    ","{","/* this is also supported but leads to much larger bundles */","}","\n","    ",'<DateTimePicker format="mmm YY" />',"\n","    ","<NumberPicker format=","{","{"," currency: 'USD', style: 'accounting' ","}","}"," />","\n","  ","</div>","\n",")","\n")),a.createElement("h3",{__source:{fileName:l,lineNumber:60},__self:this},"Moment.js ",a.createElement("small",{__source:{fileName:l,lineNumber:60},__self:this},"date")),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:61},__self:this},a.createElement("code",{className:"language-sh",__source:{fileName:l,lineNumber:61},__self:this},"npm install moment react-widgets-moment --save","\n")),a.createElement("p",{__source:{fileName:l,lineNumber:62},__self:this},"Again see the official ",a.createElement("a",{href:"http://momentjs.com/",__source:{fileName:l,lineNumber:62},__self:this},"Moment docs")," for information on integrating Moment into your build pipeline effectively."),a.createElement("p",{__source:{fileName:l,lineNumber:64},__self:this},"Moment only provides ",a.createElement("strong",{__source:{fileName:l,lineNumber:64},__self:this},"date")," localization, if you also need Number localization consider the ",a.createElement("strong",{__source:{fileName:l,lineNumber:65},__self:this},"simple-number")," localizer below, or Globalize.js."),a.createElement(s,{__source:{fileName:l,lineNumber:66},__self:this},a.createElement(m,{title:"webpack",__source:{fileName:l,lineNumber:67},__self:this},"\n    import Moment from 'moment'\n    import momentLocalizer from 'react-widgets-moment';\n    import DateTimePicker from 'react-widgets/lib/DateTimePicker';\n\n    Moment.locale('en')\n    momentLocalizer()\n\n    render(<DateTimePicker />, document.getElementById('app-root'))\n    "),a.createElement(m,{title:"browser globals",__source:{fileName:l,lineNumber:79},__self:this},"\n    <script src='node_modules/react-widgets/dist/react-widgets.js'><\/script>\n    <script src='node_modules/react-widgets-moment/dist/react-widgets-moment.js'><\/script>\n    <script>\n      var DateTimePicker = ReactWidgets.DateTimePicker;\n\n      ReactDOM.render(<DateTimePicker />, document.getElementById('app-root'))\n    <\/script>\n    ")),a.createElement("p",{__source:{fileName:l,lineNumber:91},__self:this},"Moment ",a.createElement("a",{href:"http://momentjs.com/docs/#/displaying/format/",__source:{fileName:l,lineNumber:91},__self:this},"format")," props accept ",a.createElement("code",{__source:{fileName:l,lineNumber:91},__self:this},"string"),"s"),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:92},__self:this},a.createElement("code",{className:"language-jsx",__source:{fileName:l,lineNumber:92},__self:this},"<DateTimePicker format='mmm YYY' />","\n")),a.createElement("h3",{__source:{fileName:l,lineNumber:93},__self:this},"Simple Number ",a.createElement("small",{__source:{fileName:l,lineNumber:93},__self:this},"number")),a.createElement("p",{__source:{fileName:l,lineNumber:94},__self:this},"The ",a.createElement("code",{__source:{fileName:l,lineNumber:94},__self:this},"simple-number")," localizer provides a minimal number formatting and parsing strategy. Its best when you don't need robust locale support for currencies, and numbers;"),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:96},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:96},__self:this},"var numberLocalizer = require('react-widgets/lib/localizers/simple-number')","\n","\n","numberLocalizer();","\n")),a.createElement("p",{__source:{fileName:l,lineNumber:97},__self:this},"Or"),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:98},__self:this},a.createElement("code",{className:"language-html",__source:{fileName:l,lineNumber:98},__self:this},"<script src='node_modules/react-widgets/dist/react-widgets.js'><\/script>","\n","<script src='node_modules/react-widgets/dist/react-widgets-simple-number.js'><\/script>","\n")),a.createElement(s,{__source:{fileName:l,lineNumber:99},__self:this},a.createElement(m,{title:"webpack globalize plugin",__source:{fileName:l,lineNumber:100},__self:this},"\n    import simpleNumberLocalizer from 'react-widgets-simple-number';\n    import NumberPicker from 'react-widgets/lib/NumberPicker';\n\n    simpleNumberLocalizer()\n\n    render(<NumberPicker />, document.getElementById('app-root'))\n    "),a.createElement(m,{title:"browser globals",__source:{fileName:l,lineNumber:110},__self:this},"\n    <script src='node_modules/react-widgets/dist/react-widgets.js'><\/script>\n    <script src='node_modules/react-widgets-simple-number/dist/react-widgets-simple-number.js'><\/script>\n    <script>\n      var NumberPicker = ReactWidgets.NumberPicker;\n\n      ReactDOM.render(<NumberPicker />, document.getElementById('app-root'))\n    <\/script>\n    ")),a.createElement("p",{__source:{fileName:l,lineNumber:122},__self:this},"Check out the documentation for ",a.createElement("a",{href:"https://www.npmjs.com/package/format-number-with-string",__source:{fileName:l,lineNumber:122},__self:this},"format-number-with-string")," for a complete guide to its format syntax."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:124},__self:this},a.createElement("code",{className:"language-jsx",__source:{fileName:l,lineNumber:124},__self:this},"<NumberPicker format='-$#,###.00' />","\n")),a.createElement("h2",{__source:{fileName:l,lineNumber:125},__self:this},"Creating a Localizer"),a.createElement("p",{__source:{fileName:l,lineNumber:126},__self:this},"Creating a localizer is as easy as providing ",a.createElement("code",{__source:{fileName:l,lineNumber:126},__self:this},"react-widgets")," an localizer options object. Localizers must provide ",a.createElement("code",{__source:{fileName:l,lineNumber:127},__self:this},"parse()")," and ",a.createElement("code",{__source:{fileName:l,lineNumber:127},__self:this},"format()")," functions as well as provide default values for all the required formats the widgets need."),a.createElement("p",{__source:{fileName:l,lineNumber:129},__self:this},"Formats can be whatever type your localization strategy requires (strings, objects, etc), however functions are always valid. The default formats, for example, can be strings or functions. If you wanted to use the built-in ",a.createElement("code",{__source:{fileName:l,lineNumber:131},__self:this},"Intl")," api's for formatting, formats might be an options object to pass to ",a.createElement("code",{__source:{fileName:l,lineNumber:132},__self:this},"Intl.DateTimeFormat()"),". Function formats are called automatically by the localizer with the ",a.createElement("code",{__source:{fileName:l,lineNumber:132},__self:this},"value"),", the ",a.createElement("code",{__source:{fileName:l,lineNumber:133},__self:this},"culture")," string and the localizer instance."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:134},__self:this},a.createElement("code",{className:"language-jsx",__source:{fileName:l,lineNumber:134},__self:this},"var localizer = ","{","\n","\n","  ","formats: ","{","\n","    ","day: 'DD',","\n","    ","month: 'mmm',","\n","    ","// function formats are useful for more advanced formatting, such as a","\n","    ","// year 'range' to represent a decade e.g \"2000 - 2009\".","\n","    ","// Notice the localizer instance is the third argument, which can be","\n","    ","// used to format or parse as needed.","\n","    ","decade: (date, cultureStr, localizer) => ","{","\n","      ","return (","\n","        ","localizer.format(date, 'YYYY') + ' - ' +","\n","        ","localizer.format(lastYearOfDecade(date), 'YYYY')","\n","      ",")","\n","    ","}","\n","  ","}",",","\n","\n","  ","parse(value, format, cultureStr) ","{","\n","    ","return parsedDate","\n","  ","}",",","\n","\n","  ","format(value, format, cultureStr) ","{","\n","    ","return formattedDatestring","\n","  ","}","\n","}","\n","\n","ReactWidgets.setDateLocalizer(localizer)","\n")),a.createElement("h2",{__source:{fileName:l,lineNumber:135},__self:this},"Localizer Api"),a.createElement("h3",{__source:{fileName:l,lineNumber:136},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:136},__self:this},"DateLocalizer")),a.createElement("p",{__source:{fileName:l,lineNumber:137},__self:this},"An Object implementing the following api."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:138},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:138},__self:this},"type Localizer = ","{","\n","  ","propType: PropType?","\n","  ","firstOfWeek: (culture: string) => number","\n","  ","parse: (date: string, format: string|object, culture: string?)=> Date | null","\n","  ","format: (date: Date, format: string|object, culture: string?)=> string","\n","  ","formats: ","{","\n","    ","default: string | object | function","\n","    ","date: string | object | function","\n","    ","time: string | object | function","\n","    ","header: string | object | function","\n","    ","footer: string | object | function","\n","    ","weekday: string | object | function","\n","    ","dayOfMonth: string | object | function","\n","    ","month: string | object | function","\n","    ","year: string | object | function","\n","    ","decade: string | object | function","\n","    ","century: string | object | function","\n","  ","}","\n","}","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:139},__self:this},"required formats"),a.createElement("p",{__source:{fileName:l,lineNumber:140},__self:this},a.createElement("em",{__source:{fileName:l,lineNumber:140},__self:this},"Localizers must provide default values for each required format.")),a.createElement("ul",{__source:{fileName:l,lineNumber:141},__self:this},a.createElement("li",{__source:{fileName:l,lineNumber:142},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:142},__self:this},"default"),': the default date display format, generally a "long" format showing both date and time'),a.createElement("li",{__source:{fileName:l,lineNumber:143},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:143},__self:this},"date"),": A date only format"),a.createElement("li",{__source:{fileName:l,lineNumber:144},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:144},__self:this},"time"),": A time only format"),a.createElement("li",{__source:{fileName:l,lineNumber:145},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:145},__self:this},"header"),': The heading of the Calendar month view, contextualizes the current month, e.g. "Jan 2014"'),a.createElement("li",{__source:{fileName:l,lineNumber:146},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:146},__self:this},"footer"),": The Calendar footer format, for displaying Today's date"),a.createElement("li",{__source:{fileName:l,lineNumber:147},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:147},__self:this},"dayOfMonth"),": The day of the month"),a.createElement("li",{__source:{fileName:l,lineNumber:148},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:148},__self:this},"month"),": Month name, used in the Year view of the Calendar"),a.createElement("li",{__source:{fileName:l,lineNumber:149},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:149},__self:this},"year"),": year format, used in the Decade view of the Calendar"),a.createElement("li",{__source:{fileName:l,lineNumber:150},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:150},__self:this},"decade"),': a decade format, used in the Century view of the Calendar, eg. "2010 - 2019"'),a.createElement("li",{__source:{fileName:l,lineNumber:151},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:151},__self:this},"century"),": A century format, used the in the Calendar heading")),a.createElement("h4",{__source:{fileName:l,lineNumber:153},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:153},__self:this},"propType")," (optional)"),a.createElement("p",{__source:{fileName:l,lineNumber:154},__self:this},"A React PropType that is used to validate the Date formats"),a.createElement("h4",{__source:{fileName:l,lineNumber:155},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:155},__self:this},"parse")),a.createElement("p",{__source:{fileName:l,lineNumber:156},__self:this},"Convert a locale formatted string to a JavaScript Date object."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:157},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:157},__self:this},"function(","\n","  ","value: string,","\n","  ","format: string|object,","\n","  ","culture: ?string","\n","): Date | null","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:158},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:158},__self:this},"format")),a.createElement("p",{__source:{fileName:l,lineNumber:159},__self:this},"Convert a Date object to a locale specific string"),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:160},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:160},__self:this},"function(","\n","  ","value: Date,","\n","  ","format: string|object,","\n","  ","culture: ?string","\n","): string","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:161},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:161},__self:this},"firstOfWeek")),a.createElement("p",{__source:{fileName:l,lineNumber:162},__self:this},"Return the locale specific first day of the week from 0 (Sunday) to 6 (Saturday)."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:163},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:163},__self:this},"function(","\n","  ","culture: ?string","\n","): number","\n")),a.createElement("h3",{__source:{fileName:l,lineNumber:164},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:164},__self:this},"NumberLocalizer")),a.createElement("p",{__source:{fileName:l,lineNumber:165},__self:this},"An Object implementing the following api."),a.createElement("pre",{className:"pg-code-section",__source:{fileName:l,lineNumber:166},__self:this},a.createElement("code",{className:"language-js",__source:{fileName:l,lineNumber:166},__self:this},"{","\n","  ","propType: ?PropType,","\n","  ","formats: ","{","\n","    ","default: string|object;","\n","  ","}",";","\n","  ","parse: (num: string, format: string|object, culture: ?string)=> number | null;","\n","  ","format: (num: number, format: string|object, culture: ?string)=> string;","\n","  ","precision: (format: ?string|object) => number;","\n","  ","decimalChar: (format: string|object, culture: ?string) => string;","\n","}","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:167},__self:this},"required formats"),a.createElement("p",{__source:{fileName:l,lineNumber:168},__self:this},a.createElement("em",{__source:{fileName:l,lineNumber:168},__self:this},"Localizers must provide default values for each required format.")),a.createElement("ul",{__source:{fileName:l,lineNumber:169},__self:this},a.createElement("li",{__source:{fileName:l,lineNumber:170},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:170},__self:this},"default")," The number picker display format.")),a.createElement("h4",{__source:{fileName:l,lineNumber:172},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:172},__self:this},"propType")," (optional)"),a.createElement("p",{__source:{fileName:l,lineNumber:173},__self:this},"A React PropType that is used to validate the number formats."),a.createElement("h4",{__source:{fileName:l,lineNumber:174},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:174},__self:this},"parse")),a.createElement("p",{__source:{fileName:l,lineNumber:175},__self:this},"Convert a locale specific string to a JavaScript Number."),a.createElement("pre",{__source:{fileName:l,lineNumber:176},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:176},__self:this},"function(","\n"," value: number,","\n"," culture: ?string","\n","): number | null","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:177},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:177},__self:this},"format")),a.createElement("p",{__source:{fileName:l,lineNumber:178},__self:this},"Convert a Number to a locale specific string."),a.createElement("pre",{__source:{fileName:l,lineNumber:179},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:179},__self:this},"function(","\n","  ","value: number,","\n","  ","format: string|object,","\n","  ","culture: ?string","\n","): string","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:180},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:180},__self:this},"decimalChar")," (default: ",a.createElement("code",{__source:{fileName:l,lineNumber:180},__self:this},"'.'"),")"),a.createElement("p",{__source:{fileName:l,lineNumber:181},__self:this},"Return the decimal separator character."),a.createElement("pre",{__source:{fileName:l,lineNumber:182},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:182},__self:this},"function(","\n"," format: string|object;","\n"," culture: ?string","\n","): string","\n")),a.createElement("h4",{__source:{fileName:l,lineNumber:183},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:183},__self:this},"precision")),a.createElement("p",{__source:{fileName:l,lineNumber:184},__self:this},"Return the decimal precision for a given format or culture. Necessary for dealing with the quirks of floating point math."),a.createElement("pre",{__source:{fileName:l,lineNumber:185},__self:this},a.createElement("code",{__source:{fileName:l,lineNumber:185},__self:this},"function(","\n"," format: string|object;","\n"," culture: ?string","\n","): number | null","\n"))))}},172:function(e,t,r){var l=r(204),i=l.highlight,a=l.languages;r(203),r(202),r(201),r(200),r(199),r(198),r(197),e.exports=function(e,t){return void 0===t&&(t="jsx"),i(e,a[t]||a.text)}},173:function(e,t,r){"use strict";r.r(t);var l=r(158),i=r(1),a=r.n(i),n=r(206),s=r.n(n),m=r(205),c=r.n(m),o=r(172),_=r.n(o),u="/Users/jason/src/react-widgets/www/src/components/TabbedCodeBlock.js",f=0;t.default=function(e){var t=e.children;return a.a.createElement(s.a,{defaultActiveKey:0,id:"tab-code-block-"+f++,__source:{fileName:u,lineNumber:23},__self:this},a.a.Children.map(t,function(e,t){var r,i=e.props;return a.a.createElement(c.a,{title:i.title,eventKey:t,__source:{fileName:u,lineNumber:26},__self:this},a.a.createElement("pre",{className:"pg-code-section",__source:{fileName:u,lineNumber:27},__self:this},a.a.createElement("code",{dangerouslySetInnerHTML:{__html:_()(Object(l.a)([(r=i.children,r.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"))]),i.lang||"jsx")},__source:{fileName:u,lineNumber:28},__self:this})))}))}}}]);
//# sourceMappingURL=component---src-pages-localization-md-96dc5fb70c110a2b40a9.js.map