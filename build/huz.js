!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){var n=new o.Parser(t);return n.parse(e)}function a(e,t){return new l.Renderer(e,t)}function s(e,t,n){var i=a(e,n);return i.render(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=a,t.render=s;var o=n(5),l=n(8),c=n(3),h=i(c),u=n(4),_=i(u),p=n(2),d=i(p),f=n(1),k=n(7),v=n(6);Object.defineProperty(t,"Tokenizer",{enumerable:!0,get:function(){return v.Tokenizer}}),t.Parser=o.Parser,t.Renderer=l.Renderer,t.TokenType=h,t.NodeType=_,f.register(k.Inheritance),t.register=f.register,t.Helpers=d},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return s.map(function(t){return new t(e)})}function r(e){return s.push(e)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();t.instantiateAll=i,t.register=r;var s=[],o=function(){function e(){n(this,e)}return a(e,[{key:"transformToken",value:function(e){return e}},{key:"handleToken",value:function(e,t){}},{key:"visit",value:function(e){return e}},{key:"handleNode",value:function(e,t){}}]),e}();t.Extension=o},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){for(var n=e.children.slice(0).reverse();n.length;){var i=n.pop();t(i),void 0!==i.children&&(n=n.concat(i.children.slice(0).reverse()))}}function a(e,t){for(var n=[e];n.length;)for(var i=n.pop(),r=0;r<i.children.length;r++){var a=i.children[r],s=t.visit(a)||a;s!==a&&(i.children[r]=s),a.children&&a.children.length&&n.push(a)}}function s(e){var t=e.length;if(0===t)return e;for(var n=null,i=0,r=!0,a=[],s=0;r&&t>s;s++){var l=e[s];switch(l.type){case c.VARIABLE:case c.UNESCAPED_VARIABLE:r=!1;break;case c.TEXT:o(l.text)?0===i&&a.push(l):r=!1;break;case c.DELIMITER_CHANGE:case c.COMMENT:null!==n?n.push(l):i++;break;case c.SECTION_CLOSE:n?n[0].name===l.name?n=null:r=!1:i++;break;default:null===n?(n=[l],i++):r=!1}i>1&&(r=!1)}if(n&&n.length>1&&(r=!1),r){if(a.length===t)return e;for(var h=0,s=t-1;s>=0;s--){var l=e[s];if(l.type!=c.TEXT||!o(l.text))break;h++}if((a.length>0||h>0)&&(e=e.slice(a.length,t-h),a.length)){var u="";a.forEach(function(e){u+=e.text}),e[0].indent=u}}return e}function o(e){return/^\s*$/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.walk=r,t.visit=a,t.trimStandaloneToken=s;var l=n(3),c=i(l)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="EOF";t.EOF=n;var i="TEXT";t.TEXT=i;var r="PARTIAL";t.PARTIAL=r;var a="INVERTED_SECTION_OPEN";t.INVERTED_SECTION_OPEN=a;var s="SECTION_OPEN";t.SECTION_OPEN=s;var o="SECTION_CLOSE";t.SECTION_CLOSE=o;var l="UNESCAPED_VARIABLE";t.UNESCAPED_VARIABLE=l;var c="COMMENT";t.COMMENT=c;var h="VARIABLE";t.VARIABLE=h;var u="DELIMITER_CHANGE";t.DELIMITER_CHANGE=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="ROOT";t.ROOT=n;var i="VARIABLE";t.VARIABLE=i;var r="SECTION";t.SECTION=r;var a="TEXT";t.TEXT=a;var s="COMMENT";t.COMMENT=s;var o="PARTIAL";t.PARTIAL=o;var l="DELIMITER_CHANGE";t.DELIMITER_CHANGE=l},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(3),o=i(s),l=n(4),c=i(l),h=n(6),u=(n(2),n(1)),_=function(){function e(t){r(this,e),this._parser=t}return a(e,[{key:"appendNode",value:function(e){this._parser._appendNode(e)}},{key:"pushParent",value:function(e){this._parser._pushParent(e)}},{key:"popParent",value:function(){return this._parser._popParent()}},{key:"throw",value:function(e){return this._parser._throw(e)}},{key:"filename",get:function(){return this._parser._filename}},{key:"top",get:function(){return this._parser._stack.length}},{key:"tailNode",get:function(){return this._parser._stack.length>0?this._parser._stack[this._parser._stack.length-1]:null}}]),e}(),p=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),this._delimiters=t.delimiters?t.delimiters:["{{","}}"],this._extensions=t.extensions||u.instantiateAll(t),this._filename=t.filename||"",this._extensions.length>0&&(this._parserContext=new _(this)),this._stack=null,this._lastToken=null,this._src=null}return a(e,[{key:"parse",value:function(e){var t={type:c.ROOT,children:[]};if(this._src=e,this._stack=[t],this._lastToken=null,this._parseNodes(e),this._extensions.length>0)for(var n=0;n<this._extensions.length;n++)this._extensions[n].visit(t);return t}},{key:"_appendNode",value:function(e){return e.location.filename=this._filename,this._stack[this._stack.length-1].children.push(e),e}},{key:"_getTop",value:function(){return this._stack[this._stack.length-1]}},{key:"_clone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"_makeLocation",value:function(e,t){var n=this._clone(e);return t&&(n.endIndex=t.endIndex,n.endLine=t.endLine),n}},{key:"_parseNodes",value:function(e){var t=this._stack.length,n=void 0,i=new h.Tokenizer(e,{delimiters:this._delimiters.slice(0),extensions:this._extensions});do{if(n=i.getNextToken(),null!==i.error)throw i.error;this._lastToken=n;var r=!1;if(this._extensions)for(var a=0;a<this._extensions.length;a++){var s=this._extensions[a];if(s.handleToken(n,this._parserContext)===!0){r=!0;break}}if(!r)switch(n.type){case o.TEXT:this._appendNode({type:c.TEXT,text:n.text,location:this._makeLocation(n.location)});break;case o.VARIABLE:case o.UNESCAPED_VARIABLE:this._appendNode({type:c.VARIABLE,name:n.name,unescaped:n.type===o.UNESCAPED_VARIABLE,location:this._makeLocation(n.location)});break;case o.SECTION_OPEN:this._handleSectionOpen(n);break;case o.INVERTED_SECTION_OPEN:this._handleSectionOpen(n,!0);break;case o.SECTION_CLOSE:this._handleSectionClose(n);break;case o.PARTIAL:this._appendNode({type:c.PARTIAL,name:n.name,indent:n.indent,location:this._makeLocation(n.location)});break;case o.COMMENT:this._handleComment(n);break;case o.DELIMITER_CHANGE:this._appendNode({type:c.DELIMITER_CHANGE,delimiters:n.delimiters,location:this._makeLocation(n.location)})}}while(n.type!==o.EOF);this._stack.length>t?this._throw("Unexpected EOF: sections not closed: "+this._stack.slice(t).map(function(e){return"'"+e.name+"'"}).join(", ")):this._stack.length<t&&this._throw("Internal error.")}},{key:"_throw",value:function(e){var t=new Error(e);throw t.location=this._lastToken.location,t}},{key:"_pushParent",value:function(e){e.children=[],this._stack.push(e)}},{key:"_popParent",value:function(){return this._stack.pop()}},{key:"_handleSectionOpen",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],n=e.name,i=e.location;this._pushParent({type:c.SECTION,name:n,inverted:t,location:i})}},{key:"_handleSectionClose",value:function(e){var t=e.name,n=e.location,i=this._popParent();i.type!==c.SECTION&&this._throw("Unexpected SECTION_CLOSE: '"+t+"'"),i.name!==t&&this._throw("Unexpected SECTION_CLOSE: '"+t+"', current section: '"+i.name+"'"),i.raw=this._src.slice(i.location.endIndex,n.index),i.location=this._makeLocation(i.location,e.location),this._appendNode(i)}},{key:"_handleComment",value:function(e){var t=e.content,n=e.location;this._appendNode({type:c.COMMENT,content:t,location:this._makeLocation(n)})}}]),e}();t.Parser=p},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){var t=e.match(/=[\s\n]*([^\s\n]*?)[\s\n]+([^\s\n]*?)[\s\n]*=[\s\n]*$/);return t?t.slice(1):null}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(l){r=!0,a=l}finally{try{!i&&o["return"]&&o["return"]()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(3),c=i(l),h=n(1),u=n(2),_="STATE_NONE",p="STATE_EOF",d="STATE_TEXT",f="STATE_TEXT_BREAK",k="STATE_TAG",v=0,m=1,y=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,e),this._extensions=n.extensions||h.instantiateAll(),this._src=t,this._index=0,this._char=null,this._tokens=[],this._line=0,this._column=0,this._state=_,this._error=null,this._location={index:0,line:0,column:0},this._delimiters=n.delimiters?n.delimiters:["{{","}}"]}return o(e,[{key:"getNextToken",value:function(){if(this._tokens.length>0)return this._tokens.shift();var e=!1,t=!1;do{if(null!==this._error)return null;switch(this._state!==_&&(t=!0,this._markTokenStartLocation()),this._state){case _:this._read();break;case p:this._handleEOF(),e=!0;break;case d:this._handleText();break;case f:this._handleTextBreak(),e=!0;break;case k:this._handleTag()}t&&(this._markTokenEndLocation(),t=!1),this._state===_&&(null===this._char?this._state=p:"\n"===this._char?this._state=f:this._isDelimiter(v)?this._state=k:this._state=d)}while(!e);return null===this._error?this._tokens.shift():null}},{key:"_handleEOF",value:function(){this._handleStandaloneTag(),this._makeToken({type:c.EOF})}},{key:"_handleTag",value:function(){var e=s(this._delimiters,2),t=e[0],n=e[1];if(this._skip(t.length),this._skipAllWhitespaces(),null===this._char)this._setError("Unclosed tag.");else if(this._isDelimiter(m))this._handleEmptyTag();else{var i=this._char;if("{"===i)this._handleVariableCurly();else{for(var r=this._index-1;!this._isDelimiter(m)&&null!==this._char;)this._read();if(null===this._char)this._setError("Unclosed tag.");else{var a=this._src.slice(r,this._index-1);switch(i){case">":this._handleSimpleTag(c.PARTIAL,a);break;case"^":this._handleSimpleTag(c.INVERTED_SECTION_OPEN,a);break;case"#":this._handleSimpleTag(c.SECTION_OPEN,a);break;case"/":this._handleSimpleTag(c.SECTION_CLOSE,a);break;case"!":this._handleComment(a.substr(1));break;case"=":this._handleDelimiterChange(a);break;case"&":this._handleVariable(a.substr(1),!0);break;default:this._handleVariable(a)}}}}if(null===this._error)for(var o=0;o<n.length;o++)this._read();this._state=_}},{key:"_handleDelimiterChange",value:function(e){var t=a(e);if(null===t)this._setError("Invalid change delimiter syntax.");else{var n=s(t,2),i=n[0],r=n[1];this._delimiters=t,this._makeToken({type:c.DELIMITER_CHANGE,delimiters:[i,r]})}}},{key:"_handleSimpleTag",value:function(e,t){this._makeToken({type:e,name:t.substr(1).trim()})}},{key:"_handleComment",value:function(e){this._makeToken({type:c.COMMENT,content:e})}},{key:"_handleVariableCurly",value:function(){this._read();var e=this._index-1,t=this._distance("}");if(-1===t)this._setError("Unclosed variable tag: missingright curly.");else{var n=this._src.slice(e,e+t);this._skip(t+1),this._skipAllWhitespaces(),this._isDelimiter(m)?this._makeToken({type:c.UNESCAPED_VARIABLE,name:n.trim()}):this._setError("Unclosed variable: missing right delimiter.")}}},{key:"_handleEmptyTag",value:function(){this._makeToken({type:c.VARIABLE,name:""})}},{key:"_handleVariable",value:function(e,t){this._makeToken({type:t?c.UNESCAPED_VARIABLE:c.VARIABLE,name:e.trim()})}},{key:"_handleText",value:function(){var e=!1,t=this._index-1,n=0;do{var i=this._char;null===i||"\n"===i||this._isDelimiter(v)?e=!0:n++,e||this._read()}while(!e);this._makeToken({type:c.TEXT,text:this._src.slice(t,t+n)}),this._state=_}},{key:"_handleTextBreak",value:function(){this._makeToken({type:c.TEXT,text:"\n"}),this._read(),this._handleStandaloneTag(),this._state=_}},{key:"_handleStandaloneTag",value:function(){this._tokens=u.trimStandaloneToken(this._tokens)}},{key:"_dump",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];console.log(e+">"+this._src.slice(this._index-1))}},{key:"_read",value:function(){this._index<this._src.length?("\n"===this._char?(this._line++,this._column=0):this._column++,this._char=this._src[this._index],this._index++):this._char=null}},{key:"_peek",value:function(){return this._index<this._src.length-1?this._src[this._index]:null}},{key:"_skip",value:function(e){for(var t=0;e>t;t++)this._read()}},{key:"_distance",value:function(e){for(var t=this._index;t<this._src.length;t++)if(this._src[t]===e)return t-this._index+1;return-1}},{key:"_skipAllWhitespaces",value:function(){for(;this._isWhitespace();)this._read()}},{key:"_markTokenStartLocation",value:function(){this._location.index=this._index-1,this._location.line=this._line,this._location.column=this._column}},{key:"_markTokenEndLocation",value:function(){var e=this._tokens[this._tokens.length-1],t=this._location,n=t.index,i=t.line,r=t.column;e.location={index:n,line:i,column:r,endIndex:this._index-1,endLine:this._line,endColumn:this._column}}},{key:"_isWhitespace",value:function(){return/\s/.test(this._char)}},{key:"_isDelimiter",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?0:arguments[1],n=this._delimiters[e],i=this._index-1+t;return this._src.slice(i,i+n.length)===n}},{key:"_makeToken",value:function(e){if(this._extensions.length)try{this._extensions.forEach(function(t){e=t.transformToken(e)})}catch(t){return void this._setError(t.message)}this._tokens.push(e)}},{key:"_setError",value:function(e){var t=new Error(e);t.index=this._index-1,t.line=this._line,t.column=this._column,this._error=t}},{key:"error",get:function(){return this._error}}]),e}();t.Tokenizer=y},function(e,t,n){"use strict";function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return e===d||e===f}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(e,t,n){for(var i=!0;i;){var r=e,a=t,s=n;o=c=l=void 0,i=!1,null===r&&(r=Function.prototype);var o=Object.getOwnPropertyDescriptor(r,a);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(s)}var c=Object.getPrototypeOf(r);if(null===c)return void 0;e=c,t=a,n=s,i=!0}},c=n(1),h=n(4),u=i(h),_=n(3),p=i(_),d=(n(2),"Inheritance.PARENT"),f="Inheritance.BLOCK",k="Inheritance.LEAVE_SCOPE",v=function(e){function t(){r(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this._blocks=null}return a(t,e),o(t,[{key:"transformToken",value:function(e){var t=e,n=t.type,i=t.name,r=t.location;switch(n){case p.VARIABLE:if(i)if("<"===i[0]){if(1===i.length)throw new Error("Parent partial name expected");e={type:d,name:i.slice(1),location:r}}else if("$"===i[0]){if(1===i.length)throw new Error("Block name expected");e={type:f,name:i.slice(1),location:r}}}return e}},{key:"handleToken",value:function(e,t){var n=!1,i=e.name,r=e.location,a=e.type;switch(a){case d:t.pushParent({type:d,name:i,location:r}),n=!0;break;case f:t.pushParent({type:f,name:i,location:r});break;case p.SECTION_CLOSE:var o=t.tailNode;if(null===o)s(o.type)&&t["throw"]("Unexpected tag close");else if(o.name!==i&&t["throw"]("Unexpected tag close, current tag: "+o.name),s(o.type)){t.popParent(),o.location.endIndex=r.endIndex,o.location.endLine=r.endLine,t.appendNode(o);var l=o.location.line,c=o.children.find(function(e){return e.type===f});if(c&&c.location.line===l)for(var h=0;h<c.children.length;h++){var _=c.children[h];if(_.type!==u.TEXT||!/^\s*$/.test(_.text))break;_.text=""}n=!0}break;case p.EOF:this.top>0&&t["throw"]("Unexpected EOF: tags not closed: "+this.stack.map(function(e){return e.name}).join(", "))}return n}},{key:"handleNode",value:function(e,t){switch(e.type){case d:return this._handleParent(e,t),!0;case f:return this._handleBlock(e,t),!0;case k:return this._blocks=null,!0}}},{key:"_handleParent",value:function(e,t){var n=this,i=e.name,r=e.location;null===this._blocks&&(t.pushNodes([{type:k}]),this._blocks={}),e.children.forEach(function(e){if(e.type===f){var t=e.name;n._blocks.hasOwnProperty(t)||(n._blocks[t]=e)}}),t.pushNode({type:p.PARTIAL,name:i,location:r,indent:e.indent})}},{key:"_handleBlock",value:function(e,t){var n=e.name;null!==this._blocks&&this._blocks.hasOwnProperty(n)?t.pushNodes(this._blocks[n].children):t.pushNodes(e.children)}}]),t}(c.Extension);t.Inheritance=v},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){return"[object Function]"==Object.prototype.toString.call(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(4),c=r(l),h=n(9),u=i(h),_=n(5),p=n(2),d=n(1),f="_REPEATER",k=10,v=255,m=function(){function e(t){a(this,e),this._renderer=t}return o(e,[{key:"evaluate",value:function(e){return this._renderer._evaluate(e)}},{key:"pushNodes",value:function(e){this._renderer._pushNodes(e)}},{key:"pushNode",value:function(e){this._renderer._pushNode(e)}},{key:"pushContext",value:function(e){this._pushContext(e)}},{key:"parse",value:function(e,t){return this._renderer._parse(e,t)}},{key:"getParsedPartial",value:function(e){return this._renderer._getParsedPartial(e)}},{key:"throw",value:function(e,t){return this._renderer._throw(e,t)}},{key:"top",get:function(){return this._renderer._stack.length}}]),e}(),y=function(){function e(t){var n=this,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];a(this,e),this._parsed=i.parsed||!1,this._partials=i.partials||{},this._delimiters=i.delimiters?i.delimiters:["{{","}}"],this._extensions=i.extensions||d.instantiateAll(i),this._extensions.length>0&&(this._renderContext=new m(this)),this._partialCached={},this._parsed&&Object.keys(i.partials).forEach(function(e){n._partialCached[e]=i.partials[e].children}),this._stack=null,this._contextStack=null,this._partialStack=null,this._lambdaStack=null,this._src=t}return o(e,[{key:"render",value:function(e){var t=this;this._stack=[],this._contextStack=[],this._partialStack=[],this._lambdaStack=[],this._pushContext(e);var n=this._parsed?this._src:this._parse(this._src);this._stack=n.children.slice(0).reverse();for(var i="",r=!0,a=(function(){var e=t._stack.length-1,n=t._stack[e],a=!1;if(t._extensions&&t._extensions.forEach(function(e){e.handleNode(n,t._renderContext)&&(a=!0)}),a)t._stack.splice(e,1);else{var o=t._partialStack.length?t._partialStack[t._partialStack.length-1]:null;n.type in c&&r&&null!==o&&o.indent.length>0&&(i+=o.indent);var l=void 0;switch(n.type){case c.VARIABLE:l=t._evaluate(n.name),s(l)?(t._popNode(),t._expandLambda(n,l)):(l&&(i+=n.unescaped?l:u["default"](l)),t._popNode());break;case c.SECTION:if(l=t._evaluate(n.name),s(l))t._popNode(),t._expandLambda(n,l);else{var h=Array.isArray(l);h&&0===l.length&&(l=!1,h=!1);var _=!!l;n.inverted&&(_=!_),_?h?(t._popNode(),t._pushRepeaterNode(l.length,n.children,l)):(t._popNode(),t._pushContext(l),t._pushNodes(n.children)):t._popNode()}break;case c.TEXT:i+=n.text,t._popNode();break;case c.COMMENT:t._popNode();break;case c.PARTIAL:t._popNode(),t._expandPartial(n);break;case c.DELIMITER_CHANGE:t._popNode(),t._delimiters=n.delimiters.slice(0);break;case f:if(n.count<n.repeat){var p=n.count;0===p?t._pushContext(n.contexts[0]):t._replaceTopContext(n.contexts[p]),t._pushNodes(n.children),n.count++}else t._popNode();break;default:t._popNode()}}t._checkStacks(),r=0===i.length||"\n"===i[i.length-1]});this._stack.length>0;)a();return i}},{key:"_parse",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];t.extensions=this._extensions;var n=new _.Parser(t);return n.parse(e)}},{key:"_pushNodes",value:function(e){for(var t=e.length-1;t>=0;t--)this._stack.push(e[t])}},{key:"_pushNode",value:function(e){this._stack.push(e)}},{key:"_popNode",value:function(){this._stack.pop()}},{key:"_pushRepeaterNode",value:function(e,t,n){this._stack.push({type:f,count:0,repeat:e,children:t.slice(0),contexts:n})}},{key:"_pushContext",value:function(e){this._contextStack.push({context:e,sp:this._stack.length})}},{key:"_pushPartial",value:function(e){var t=e.name,n=e.indent,i=e.location;this._partialStack.push({name:t,indent:n||"",location:i,sp:this._stack.length})}},{key:"_pushLambda",value:function(e){var t=e.name,n=e.location;this._lambdaStack.push({name:t,location:n,sp:this._stack.length})}},{key:"_replaceTopContext",value:function(e){this._contextStack[this._contextStack.length-1].context=e}},{key:"_checkStacks",value:function(){this._stack.length<this._contextStack[this._contextStack.length-1].sp&&this._contextStack.pop(),this._partialStack.length>0&&this._stack.length===this._partialStack[this._partialStack.length-1].sp&&this._partialStack.pop(),this._lambdaStack.length>0&&this._stack.length===this._lambdaStack[this._lambdaStack.length-1].sp&&this._lambdaStack.pop()}},{key:"_evaluate",value:function(e){if("."===e)return this._contextStack[this._contextStack.length-1].context;for(var t=e.split("."),n=this._contextStack.length-1;n>=0;n--){var i=this._contextStack[n].context;if(null!==i&&"object"==typeof i){for(var r=i,a=!0,s=0;s<t.length;s++){var o=t[s];if(!r.hasOwnProperty(o)){a=!1;break}r=r[o]}if(a)return r}}return""}},{key:"_getParsedPartial",value:function(e){if(this._partialCached.hasOwnProperty(e))return this._partialCached[e];if(!this._partials.hasOwnProperty(e))return null;var t=this._parse(this._partials[e],{filename:e}),n=this._partialCached[e]=t.children;return n}},{key:"_expandPartial",value:function(e){var t=e.name,n=this._getParsedPartial(t);null!==n&&(this._pushPartial(e),this._partialStack.length>k&&this._throw("Possible partial short circuit: "+this._partialStack.map(function(e){return e.name+"@"+e.location.filename+":"+(e.location.line+1)}).concat([t]).join(" -> "),e.location),this._pushNodes(n))}},{key:"_expandLambda",value:function(e,t){var n=e.name;this._pushLambda(e),this._lambdaStack.length>v&&this._throw("Possible lambda short circuit: "+this._lambdaStack.map(function(e){return e.name+"@"+e.location.filename+":"+(e.location.line+1)}).concat([n]).join(" -> "),e.location);var i=void 0,r=!1;if(e.type===c.VARIABLE){var a=t();a?(i=this._parse(""+a,{filename:"[lambda]"}),e.unescaped||p.walk(i,function(e){e.type===c.TEXT&&(e.text=u["default"](e.text))})):r=!0}else if(e.type===c.SECTION){var a=t(e.raw);a?i=this._parse(""+a,{filename:"[#lambda]",delimiters:this._delimiters.slice(0)}):r=!0}r||this._pushNodes(i.children)}},{key:"_throw",value:function(e,t){var n=new Error(e);throw n.location=t,n}}]),e}();t.Renderer=y},function(e,t){/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * Copyright(c) 2015 Andreas Lubbe
	 * Copyright(c) 2015 Tiancheng "Timothy" Gu
	 * MIT Licensed
	 */
"use strict";function n(e){var t=""+e,n=i.exec(t);if(!n)return t;var r,a="",s=0,o=0;for(s=n.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==s&&(a+=t.substring(o,s)),o=s+1,a+=r}return o!==s?a+t.substring(o,s):a}var i=/["'&<>]/;e.exports=n}])});
//# sourceMappingURL=huz.js.map