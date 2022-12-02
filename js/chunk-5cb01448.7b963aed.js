(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cb01448"],{"260c":function(t,e,s){"use strict";s("652f");var o=s("5c83"),i=s("e01e"),r=s("a253"),a=s("484c"),n=s("730e"),l=s("b251"),c=s("339f"),d=s("bfd5");e["a"]=Object(c["a"])(o["a"],a["a"],l["a"]).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(i["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...o["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"652f":function(t,e,s){},"7c9e":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",{staticClass:"px-6 mt-10",attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"mx-auto pt-0",attrs:{cols:"10"}},[s("v-card",{staticClass:"card-shadow border-radius-xl mb-30"},[s("div",{staticClass:"card-header-padding"},[s("p",{staticClass:"font-weight-bold text-h6 text-typo mb-0"},[t._v(" Install Guidance ")])]),s("v-card-text",{staticClass:"card-padding pt-0 font-size-root text-body"},[s("v-list-item",{staticClass:"pl-0"},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-body"},[t._v("To start using this product you will need to install it with the following commands:")])],1)],1),s("ol",[s("li",{staticClass:"mb-2"},[t._v(" Install "),s("strong",[t._v("NodeJS LTS")]),t._v(" version from"),s("a",{staticClass:"\n                    text-decoration-none text-primary text-body-2\n                    ls-0\n                    font-weight-600\n                    ms-1\n                  ",attrs:{href:"https://nodejs.org/en/",target:"_blank"}},[t._v("NodeJS Official Page")]),t._v(". ")]),s("li",{staticClass:"mb-2"},[t._v(" Purchase the product from"),s("a",{staticClass:"\n                    text-decoration-none text-primary text-body-2\n                    ls-0\n                    font-weight-600\n                    ms-1\n                  ",attrs:{href:"https://store.vuetifyjs.com/products/vuetify-argon-dashboard-pro",target:"_blank"}},[t._v("Vuetify Store")]),t._v(". ")]),s("li",{staticClass:"mb-2"},[t._v(" Now you can go to your product through the terminal. ")]),s("li",{staticClass:"mb-2"},[t._v(" Once you are there please type the "),s("code",[t._v("npm install")]),t._v(" command. ")]),s("li",{staticClass:"mb-2"},[t._v(" When dependencies are installing it is possible that some "),s("code",[t._v("warnings")]),t._v(" and "),s("code",[t._v("vulnerabilities")]),t._v(" to appear on your terminal. Those will "),s("strong",[t._v("NOT")]),t._v(" affect your product. ")]),s("li",{staticClass:"mb-2"},[t._v(" After the dependencies are installed you can now turn on the project by typing "),s("code",[t._v("npm run dev")]),t._v(" command. ")]),s("li",[s("br"),s("v-alert",{attrs:{color:"#37d5f2"}},[s("span",{staticClass:"text-white"},[t._v("NOTE: we have not used yarn in our development, but only npm, so, to avoid any issues provoked by yarn, we suggest you do the same. If, however you decide to use yarn, and at some point you have any issues, please try again (all of the above) using npm.")])])],1),s("li",[t._v(" If you have some questions or issues with the product please send us an email here on"),s("a",{staticClass:"\n                    text-decoration-none text-primary text-body-2\n                    ls-0\n                    font-weight-600\n                    ms-1\n                  ",attrs:{href:"mailto:support@creative-tim.com",target:"_blank"}},[t._v("support@creative-tim.com")]),t._v(". ")])])],1)],1)],1)],1)],1)],1)},i=[],r={name:"getting-started"},a=r,n=s("959d"),l=s("6403"),c=s.n(l),d=s("260c"),h=s("fee1"),u=s("e910"),p=s("32c7"),v=s("bdf6"),m=s("b568"),b=s("dce4"),_=s("68ab"),g=Object(n["a"])(a,o,i,!1,null,null,null);e["default"]=g.exports;c()(g,{VAlert:d["a"],VCard:h["a"],VCardText:u["c"],VCol:p["a"],VContainer:v["a"],VListItem:m["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VRow:_["a"]})},b251:function(t,e,s){"use strict";var o=s("d04a");e["a"]=o["default"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=chunk-5cb01448.7b963aed.js.map