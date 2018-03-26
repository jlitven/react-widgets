(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{149:function(e){e.exports={data:{componentMetadata:{displayName:"DateTimePicker",doclets:{public:!0,extends:"Calendar"},composes:["./Calendar"],props:[{name:"value",defaultValue:{value:"null",computed:!1},doclets:{},type:{name:"instanceOf",value:"Date",raw:null},description:{childMarkdownRemark:{html:"<p>Controls the current value of the DateTimePicker.</p>"}}},{name:"onChange",defaultValue:null,doclets:{example:"['onChangePicker', [ ['new Date()', null] ]]"},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>A callback fired when the current <code class="language-text">value</code> changes.</p>'}}},{name:"open",defaultValue:{value:"false",computed:!1},doclets:{type:"{(false | 'time' | 'date')}",example:"['openDateTime']"},type:{name:"enum",value:[{value:"false ",computed:!1},{value:" 'time' ",computed:!1},{value:" 'date'",computed:!1}],raw:null},description:{childMarkdownRemark:{html:'<p>Controls the visibility of the DateTimePicker popup. Use <code class="language-text">defaultOpen</code>\nto set an initial value for uncontrolled widgets.</p>'}}},{name:"onToggle",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>A callback fired with the DateTimePicker\'s popup visibility is about to change.</p>\n<p>Use in conjunction with the <code class="language-text">open</code> prop to manually control the popup visibility.</p>'}}},{name:"currentDate",defaultValue:null,doclets:{},type:{name:"instanceOf",value:"Date",raw:null},description:{childMarkdownRemark:{html:'<p>Default current date at which the calendar opens. If none is provided, opens at today\'s date or the <code class="language-text">value</code> date (if any).</p>'}}},{name:"onCurrentDateChange",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Change event Handler that is called when the currentDate is changed. The handler is called with the currentDate object.</p>"}}},{name:"onSelect",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>This handler fires when an item has been selected from the list. It fires before the <code class="language-text">onChange</code> handler and fires\nregardless of whether the value has actually changed.</p>'}}},{name:"min",defaultValue:{value:"new Date(1900, 0, 1)",computed:!1},doclets:{example:"['prop', ['min', 'new Date()']]"},type:{name:"instanceOf",value:"Date",raw:null},description:{childMarkdownRemark:{html:'<p>The minimum Date that can be selected. Min only limits selection, it doesn\'t constrain the date values that\ncan be typed or pasted into the widget. If you need this behavior you can constrain values via\nthe <code class="language-text">onChange</code> handler.</p>'}}},{name:"max",defaultValue:{value:"new Date(2099, 11, 31)",computed:!1},doclets:{example:"['prop', ['max', 'new Date()']]"},type:{name:"instanceOf",value:"Date",raw:null},description:{childMarkdownRemark:{html:'<p>The maximum Date that can be selected. Max only limits selection, it doesn\'t constrain the date values that\ncan be typed or pasted into the widget. If you need this behavior you can constrain values via\nthe <code class="language-text">onChange</code> handler.</p>'}}},{name:"step",defaultValue:null,doclets:{example:"['prop', { step: 90 }]"},type:{name:"number",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>The amount of minutes between each entry in the time list.</p>"}}},{name:"culture",defaultValue:null,doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Set the culture of the DateTimePicker, passed to the configured localizer.</p>"}}},{name:"format",defaultValue:null,doclets:{example:"['dateFormat', ['format', \"{ raw: 'MMM dd, yyyy' }\", null, { defaultValue: 'new Date()', time: 'false' }]]"},type:{name:"union",value:["string","(value: Date, culture: ?string, localizer: Localizer) => string"],raw:"CustomPropTypes.dateFormat"},description:{childMarkdownRemark:{html:'<p>A formatter used to display the date value. For more information about formats\nvisit the <a href="/i18n">Localization page</a></p>'}}},{name:"timeFormat",defaultValue:null,doclets:{example:"['dateFormat', ['timeFormat', \"{ time: 'medium' }\", null, { date: 'false', open: '\"time\"' }]]"},type:{name:"union",value:["string","(value: Date, culture: ?string, localizer: Localizer) => string"],raw:"CustomPropTypes.dateFormat"},description:{childMarkdownRemark:{html:'<p>A formatter used by the time dropdown to render times. For more information about formats visit\nthe <a href="/i18n">Localization page</a>.</p>'}}},{name:"editFormat",defaultValue:null,doclets:{example:"['dateFormat', ['editFormat', \"{ date: 'short' }\", null, { defaultValue: 'new Date()', format: \"{ raw: 'MMM dd, yyyy' }\", time: 'false' }]]"},type:{name:"union",value:["string","(value: Date, culture: ?string, localizer: Localizer) => string"],raw:"CustomPropTypes.dateFormat"},description:{childMarkdownRemark:{html:'<p>A formatter to be used while the date input has focus. Useful for showing a simpler format for inputing.\nFor more information about formats visit the <a href="/i18n">Localization page</a></p>'}}},{name:"date",defaultValue:{value:"true",computed:!1},doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Enable the calendar component of the picker.</p>"}}},{name:"time",defaultValue:{value:"true",computed:!1},doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Enable the time list component of the picker.</p>"}}},{name:"calendar",defaultValue:null,doclets:{ignore:!0},type:{name:"custom",value:null,raw:"deprecated(PropTypes.bool, 'Use `date` instead')"},description:null},{name:"timeComponent",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:"<p>A customize the rendering of times but providing a custom component.</p>"}}},{name:"dropUp",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the opening direction of the DateTimePicker popup.</p>"}}},{name:"popupTransition",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:'<p>A <code class="language-text">Transition</code> component from react-transition-group v2. The\nprovided component will be used instead of the default <code class="language-text">SlideDownTransition</code> for\nfully customizable animations. The transition component is also injected with a\n<code class="language-text">dropUp</code> prop indicating the direction it should open.</p>'}}},{name:"placeholder",defaultValue:null,doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Text to display in the input when the value is empty.</p>"}}},{name:"name",defaultValue:null,doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The HTML <code class="language-text">name</code> attribute, passed directly to the input element.</p>'}}},{name:"autoFocus",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Pass focus to the DateTimePicker when it mounts.</p>"}}},{name:"disabled",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:"CustomPropTypes.disabled"},description:null},{name:"readOnly",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:"CustomPropTypes.disabled"},description:{childMarkdownRemark:{html:"<p>Controls the read-only state of the DateTimePicker.</p>"}}},{name:"parse",defaultValue:null,doclets:{},type:{name:"union",value:[{name:"arrayOf",value:{name:"string"}},{name:"string"},{name:"func"}],raw:null},description:{childMarkdownRemark:{html:'<p>Determines how the widget parses the typed date string into a Date object. You can provide an array of formats to try,\nor provide a function that returns a date to handle parsing yourself. When <code class="language-text">parse</code> is unspecified and\nthe <code class="language-text">format</code> prop is a <code class="language-text">string</code> parse will automatically use that format as its default.</p>'}}},{name:"tabIndex",defaultValue:null,doclets:{ignore:!0},type:{name:"any",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The HTML <code class="language-text">tabindex</code> attribute, controls the order in which focus moves\nvia the TAB key</p>'}}},{name:"aria-labelledby",defaultValue:null,doclets:{ignore:!0},type:{name:"string",value:null,raw:null},description:null},{name:"aria-describedby",defaultValue:null,doclets:{ignore:!0},type:{name:"string",value:null,raw:null},description:null},{name:"onKeyDown",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onKeyDown</code> event, called <code class="language-text">preventDefault</code> will prevent any custom behavior, included keyboard shortcuts.</p>'}}},{name:"onKeyPress",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onKeyPress</code> event, called <code class="language-text">preventDefault</code> will stop any custom behavior.</p>'}}},{name:"onBlur",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onBlur</code> event, called when focus leaves the DateTimePicker entirely.</p>'}}},{name:"onFocus",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onFocus</code> event, called when focus enters the DateTimePicker.</p>'}}},{name:"inputProps",defaultValue:null,doclets:{},type:{name:"object",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>An object of props that is passed directly to the underlying input component.</p>"}}},{name:"isRtl",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>Controls the read direction of the DateTimePicker.</p>\n<p><strong>Tip:</strong> You can also set the direction for all widgets at once, by exposing\n<code class="language-text">isRtl</code> on <a href="https://facebook.github.io/react/docs/context.html">context</a> in a\ncommon parent component, such as your application root.</p>'}}},{name:"messages",defaultValue:null,doclets:{},type:{name:"shape",value:{dateButton:{name:"string",required:!1},timeButton:{name:"string",required:!1}},raw:null},description:{childMarkdownRemark:{html:'<p>Object hash containing display text and/or text for screen readers.\nUse the <code class="language-text">messages</code> object to localize widget text or provide custom rendering.</p>'}}}],description:{childMarkdownRemark:{frontmatter:{localized:!0,shortcuts:[{key:"alt + down arrow",label:"open calendar or time"},{key:"alt + up arrow",label:"close calendar or time"},{key:"down arrow",label:"move focus to next item"},{key:"up arrow",label:"move focus to previous item"},{key:"home",label:"move focus to first item"},{key:"end",label:"move focus to last item"},{key:"enter",label:"select focused item"},{key:"any key",label:"search list for item starting with key"}]},html:""}}}},pageContext:{displayName:"DateTimePicker",publicComponents:["Calendar","Combobox","DateTimePicker","DropdownList","Multiselect","NumberPicker","SelectList"]}}}}]);
//# sourceMappingURL=path---api-date-time-picker-064f28420455e802df53.js.map