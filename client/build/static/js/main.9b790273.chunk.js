(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a(30),r=a.n(s),l=(a(21),a(10)),i=a(2),o=a(9),j=a(13),d=a.n(j),b=a(16),h=a(11),u=a.n(h),O={savePlace:function(e){return u.a.post("/api/newplace",e)},goRoute:function(e){return u.a.post("/api/route",e)},saveUser:function(e){return console.log("Works"),u.a.post("/api/newuser",e)},login:function(e){return console.log("Works"),u.a.post("/api/login",e)},findPlaceByCategory:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Category API call (frontend)"),e.next=3,u.a.post("/api/findplacecategory",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),findPlaceByState:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("State API call (frontend)"),e.next=3,u.a.post("/api/findplacestate",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createFilteredList:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Filtered list API call (frontend)"),e.next=3,u.a.post("/api/createfilteredlist",t);case 3:return a=e.sent,console.log(a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=a(3);a(61);var p=function(){return Object(n.jsx)("div",{className:"my-div",children:Object(n.jsxs)("div",{className:"col-sm",children:[Object(n.jsx)("h1",{className:"display-4 title",children:"The People's Directory"}),Object(n.jsxs)("p",{className:"lead subtitle",children:["List your business in a directory that's committed",Object(n.jsx)("br",{})," to seeing entrepreneurs and startups succeed."]})]})})},v=a(31),m=a(32),g=a(36),f=a(35),N=(a(62),function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-expand-lg navbar navbar-dark bg-dark",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand logo",href:"#",children:"The People's Directory"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/register",children:"Register"})]})})]})})})}}]),a}(c.Component));a(63);function C(e){return Object(n.jsx)("form",{children:Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",Object(i.a)({className:"form-control"},e))})})}var y=function(){var e=Object(x.f)(),t=Object(c.useState)({}),a=Object(o.a)(t,2),s=a[0],r=a[1];function j(e){var t=e.target,a=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},s),{},Object(l.a)({},a,n)))}return Object(c.useEffect)((function(){})),Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{}),Object(n.jsx)(p,{}),Object(n.jsx)(C,{name:"email",placeholder:"Enter your email address.",onChange:j}),Object(n.jsx)(C,{name:"password",placeholder:"Enter your password.",onChange:j}),Object(n.jsx)("button",{type:"button",onClick:function(){console.log("submitted"),console.log(s),O.login(s).then((function(t){console.log(t.data),"username incorrect"!==t.data&&e.push("/userpage")}))},children:"Login"})]})};a(72);function w(e){return Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",Object(i.a)({className:"form-control"},e))})}function S(e){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Start Date"}),Object(n.jsx)("input",Object(i.a)({className:"form-control",type:"date"},e))]})}function k(e){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Start Date"}),Object(n.jsx)("input",Object(i.a)({className:"form-control",type:"date"},e))]})}function D(e){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"multichoice",children:"Category"}),Object(n.jsxs)("select",Object(i.a)(Object(i.a)({className:"form-control",id:"multichoice"},e),{},{children:[Object(n.jsx)("option",{value:"Bait/Tackle Shop",children:"Bait/Tackle Shop"}),Object(n.jsx)("option",{value:"Bowling Alley",children:"Bowling Alley"}),Object(n.jsx)("option",{value:"Business",children:"Business"}),Object(n.jsx)("option",{value:"Cafe",children:"Cafe"}),Object(n.jsx)("option",{value:"Car Wash",children:"Car Wash"}),Object(n.jsx)("option",{value:"Church",children:"Church"}),Object(n.jsx)("option",{value:"Coffee Shop",children:"Coffee Shop"}),Object(n.jsx)("option",{value:"Concert",children:"Concert"}),Object(n.jsx)("option",{value:"Entertainment Center",children:"Entertainment Center"}),Object(n.jsx)("option",{value:"Gas Station",children:"Gas Station"}),Object(n.jsx)("option",{value:"Golf Course",children:"Golf Course"}),Object(n.jsx)("option",{value:"Golf Range",children:"Golf Range"}),Object(n.jsx)("option",{value:"Gun Range",children:"Gun Range"}),Object(n.jsx)("option",{value:"Gym",children:"Gym"}),Object(n.jsx)("option",{value:"Ice Cream Shop",children:"Ice Cream Shop"}),Object(n.jsx)("option",{value:"Local Meet Up",children:"Local Meet Up"}),Object(n.jsx)("option",{value:"Movie Theatre",children:"Movie Theatre"}),Object(n.jsx)("option",{value:"Protest",children:"Protest"}),Object(n.jsx)("option",{value:"Recreation Center",children:"Recreation Center"}),Object(n.jsx)("option",{value:"Restaurant",children:"Restaurant"}),Object(n.jsx)("option",{value:"Retail Store",children:"Retail Store"}),Object(n.jsx)("option",{value:"Protest",children:"Protest"}),Object(n.jsx)("option",{value:"Sporting Event",children:"Sporting Event"}),Object(n.jsx)("option",{value:"Other",children:"Other"})]}))]})}function A(e){return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"multichoice",children:"State"}),Object(n.jsxs)("select",Object(i.a)(Object(i.a)({className:"form-control",id:"multichoice"},e),{},{children:[Object(n.jsx)("option",{value:"Alabama",children:"Alabama"}),Object(n.jsx)("option",{value:"Alaska",children:"Alaska"}),Object(n.jsx)("option",{value:"Arizona",children:"Arizona"}),Object(n.jsx)("option",{value:"California",children:"California"}),Object(n.jsx)("option",{value:"Colorado",children:"Colorado"}),Object(n.jsx)("option",{value:"Connecticut",children:"Connecticut"}),Object(n.jsx)("option",{value:"Delaware",children:"Delaware"}),Object(n.jsx)("option",{value:"Florida",children:"Florida"}),Object(n.jsx)("option",{value:"Georgia",children:"Georgia"}),Object(n.jsx)("option",{value:"Hawaii",children:"Hawaii"}),Object(n.jsx)("option",{value:"Idaho",children:"Idaho"}),Object(n.jsx)("option",{value:"Illinois",children:"Illinois"}),Object(n.jsx)("option",{value:"Indiana",children:"Indiana"}),Object(n.jsx)("option",{value:"Iowa",children:"Iowa"}),Object(n.jsx)("option",{value:"Kansas",children:"Kansas"}),Object(n.jsx)("option",{value:"Kentucky",children:"Kentucky"}),Object(n.jsx)("option",{value:"Louisiana",children:"Lousiana"}),Object(n.jsx)("option",{value:"Maine",children:"Maine"}),Object(n.jsx)("option",{value:"Maryland",children:"Maryland"}),Object(n.jsx)("option",{value:"Michigan",children:"Michigan"}),Object(n.jsx)("option",{value:"Minnesota",children:"Minnesota"}),Object(n.jsx)("option",{value:"Mississippi",children:"Mississippi"}),Object(n.jsx)("option",{value:"Missouri",children:"Missouri"}),Object(n.jsx)("option",{value:"Montana",children:"Montana"}),Object(n.jsx)("option",{value:"Nebraska",children:"Nebraska"}),Object(n.jsx)("option",{value:"Nevada",children:"Nevada"}),Object(n.jsx)("option",{value:"New Hampshire",children:"New Hampshire"}),Object(n.jsx)("option",{value:"New Jersey",children:"New Jersey"}),Object(n.jsx)("option",{value:"New Mexico",children:"New Mexico"}),Object(n.jsx)("option",{value:"New York",children:"New York"}),Object(n.jsx)("option",{value:"North Carolina",children:"North Carolina"}),Object(n.jsx)("option",{value:"North Dakota",children:"North Dakota"}),Object(n.jsx)("option",{value:"Ohio",children:"Ohio"}),Object(n.jsx)("option",{value:"Oklahoma",children:"Oklahoma"}),Object(n.jsx)("option",{value:"Oregon",children:"Orgeon"}),Object(n.jsx)("option",{value:"Pennsylvania",children:"Pennsylvania"}),Object(n.jsx)("option",{value:"Rhode Island",children:"Rhode Island"}),Object(n.jsx)("option",{value:"South Carolina",children:"South Carolina"}),Object(n.jsx)("option",{value:"South Dakota",children:"South Dakota"}),Object(n.jsx)("option",{value:"Tennessee",children:"Tennessee"}),Object(n.jsx)("option",{value:"Texas",children:"Texas"}),Object(n.jsx)("option",{value:"Utah",children:"Utah"}),Object(n.jsx)("option",{value:"Vermont",children:"Vermont"}),Object(n.jsx)("option",{value:"Virginia",children:"Virginia"}),Object(n.jsx)("option",{value:"Washington",children:"Washington"}),Object(n.jsx)("option",{value:"West Virginia",children:"West Virginia"}),Object(n.jsx)("option",{value:"Wisconsin",children:"Wisconsin"}),Object(n.jsx)("option",{value:"Wyoming",children:"Wyoming"})]}))]})}function I(e){return Object(n.jsx)("button",Object(i.a)(Object(i.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success frmbutton",children:"Submit Place"}))}function M(e){return Object(n.jsx)("button",Object(i.a)(Object(i.a)({},e),{},{style:{float:"right",marginBottom:10},className:"btn btn-success frmbutton",children:"Filter"}))}a(73);var P=function(e){var t=e.handleInputChangeCategory,a=e.handleInputChangeState,c=e.handleInputChangeStateFilter,s=e.handleInputChangeCategoryFilter,r=e.handleInputChangeStartDateFilter,l=e.handleInputChangeEndDateFilter,i=e.createFilteredList;return Object(n.jsx)("div",{children:Object(n.jsx)("nav",{className:"navbar navbar-dark navbar-expand-lg",children:Object(n.jsxs)("div",{className:"container-fluid",children:[Object(n.jsx)("a",{className:"navbar-brand logo",href:"#",children:"The People's Directory"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:[Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(n.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/register",children:"Register"})]}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(D,{onChange:t})}),Object(n.jsx)("div",{className:"dropdownlast",children:Object(n.jsx)(A,{onChange:a})}),Object(n.jsx)("div",{className:"label",children:"Apply Filters!"}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(A,{onChange:c})}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(D,{onChange:s})}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(S,{onChange:r})}),Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsx)(k,{onChange:l})}),Object(n.jsx)("div",{children:Object(n.jsx)(M,{onClick:i})})]})]})})})},F=(a(74),a(34)),R=a.n(F);a(75);var T=function(){Object(c.useEffect)((function(){R.a.init({duration:2e3})}),[]);var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1];function r(e){var t=e.target,n=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},n,c))),console.log(a)}var j=Object(c.useState)([]),d=Object(o.a)(j,2),b=d[0],h=d[1],u=Object(c.useState)([]),x=Object(o.a)(u,2),v=x[0],m=x[1],g=Object(c.useState)([]),f=Object(o.a)(g,2),N=f[0],C=f[1],y={};return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{handleInputChangeCategory:function(e){O.findPlaceByCategory({category:e.target.value}).then((function(e){console.log(e.data),h(e.data)})).then(console.log(b)).then(console.log("Test call (frontend)"))},handleInputChangeState:function(e){O.findPlaceByState({state:e.target.value}).then((function(e){console.log(e.data),m(e.data)})).then(console.log(v)).then(console.log("Test call (frontend state)"))},handleInputChangeStateFilter:function(e){y.state=e.target.value,console.log(y)},handleInputChangeCategoryFilter:function(e){y.category=e.target.value,console.log(y)},handleInputChangeStartDateFilter:function(e){y.startDate=e.target.value,console.log(y)},handleInputChangeEndDateFilter:function(e){y.endDate=e.target.value,console.log(y)},createFilteredList:function(e){O.createFilteredList(y).then((function(e){console.log(e.data),C(e.data)})).then(console.log(N))}}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-10",children:Object(n.jsx)(p,{})}),Object(n.jsx)("div",{className:"col-2",children:Object(n.jsxs)("form",{children:["Add your business or event!",Object(n.jsx)(w,{name:"title",placeholder:"Title (required)",onChange:r}),Object(n.jsx)(w,{name:"description",placeholder:"Description (not required)",onChange:r}),Object(n.jsx)(w,{name:"website",placeholder:"website (not required)",onChange:r}),Object(n.jsx)(w,{name:"address",placeholder:"Address (not required)",onChange:r}),Object(n.jsx)(w,{name:"phone",placeholder:"Phone (not required)",onChange:r}),Object(n.jsx)(A,{name:"state",placeholder:"State (required)",onChange:r}),Object(n.jsx)(S,{name:"startDate",placeholder:"Start Date (not required)",onChange:r}),Object(n.jsx)(k,{name:"endDate",placeholder:"End Date (not required)",onChange:r}),Object(n.jsx)(D,{name:"category",placeholder:"Category (required)",onChange:r}),Object(n.jsx)(I,{onClick:function(e){console.log("submitted"),O.savePlace(a).then((function(e){return console.log(e)}))}})]})})]})}),Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm",children:[Object(n.jsx)("h2",{children:"Generate a list of businesses and events by category!"}),b.map((function(e){return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{"data-aos":"fade-up",className:"boxes",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.title}),Object(n.jsx)("p",{className:"card-text",children:e.category}),Object(n.jsx)("p",{className:"card-text",children:e.description}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsx)("a",{href:e.website,children:e.website})}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["Phone Number: ",e.phone]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["State: ",e.state]}),Object(n.jsxs)("p",{className:"card-text",children:["Start Date: ",e.startDate]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.endDate]})]})})})}))]}),Object(n.jsxs)("div",{className:"col-sm",children:[Object(n.jsx)("h2",{children:"Generate a list of events and businesses by state!"}),v.map((function(e){return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{"data-aos":"fade-up",className:"boxes",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.title}),Object(n.jsx)("p",{className:"card-text",children:e.category}),Object(n.jsx)("p",{className:"card-text",children:e.description}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsx)("a",{href:e.website,children:e.website})}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["Phone Number: ",e.phone]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["State: ",e.state]}),Object(n.jsxs)("p",{className:"card-text",children:["Start Date: ",e.startDate]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.endDate]})]})})})}))]}),Object(n.jsxs)("div",{className:"col-sm",children:[Object(n.jsx)("h2",{children:"Generate a filtered list of events and businesses!"}),N.map((function(e){return Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{"data-aos":"fade-up",className:"boxes",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:e.title}),Object(n.jsx)("p",{className:"card-text",children:e.category}),Object(n.jsx)("p",{className:"card-text",children:e.description}),Object(n.jsx)("p",{className:"card-text",children:Object(n.jsx)("a",{href:e.website,children:e.website})}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["Phone Number: ",e.phone]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.address]}),Object(n.jsxs)("p",{className:"card-text",children:["State: ",e.state]}),Object(n.jsxs)("p",{className:"card-text",children:["Start Date: ",e.startDate]}),Object(n.jsxs)("p",{className:"card-text",children:["Address: ",e.endDate]})]})})})}))]})]})})})]})};function G(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1];function r(e){var t=e.target,n=t.name,c=t.value;s(Object(i.a)(Object(i.a)({},a),{},Object(l.a)({},n,c)))}return Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-sm"}),Object(n.jsx)("div",{className:"col-sm",children:Object(n.jsx)("div",{className:"Register",children:Object(n.jsxs)("form",{children:[Object(n.jsx)(w,{name:"name",placeholder:"Name (required)",onChange:r}),Object(n.jsx)(w,{name:"email",placeholder:"E-mail (required)",onChange:r}),Object(n.jsx)(w,{name:"password",placeholder:"Password (required)",onChange:r}),Object(n.jsx)(I,{onClick:function(e){e.preventDefault(),console.log("submitted"),O.saveUser(a).then((function(e){return console.log(e)}))},children:"Submit Place"})]})})}),Object(n.jsx)("div",{className:"col-sm"})]})})}var B=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(N,{}),Object(n.jsx)(G,{})]})},E=a(14);var q=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(E.a,{children:Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{path:"/userpage",children:Object(n.jsx)(T,{})}),Object(n.jsx)(x.a,{path:"/register",children:Object(n.jsx)(B,{})}),Object(n.jsx)(x.a,{path:"/",children:Object(n.jsx)(y,{})})]})})})};a(76);r.a.render(Object(n.jsx)(q,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.9b790273.chunk.js.map