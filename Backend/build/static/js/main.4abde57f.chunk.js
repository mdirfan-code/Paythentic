(this.webpackJsonppaythentic=this.webpackJsonppaythentic||[]).push([[0],{110:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(13),r=a.n(n),l=(a(141),a(7)),i=a(19),o=(a(142),a(1));var j=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){return s(!1)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsxs)(i.b,{to:"/dash",className:"navbar-logo",onClick:n,children:[Object(o.jsx)("img",{src:"./paythentic_logo_white-removebg-preview.png",alt:""}),"Paythentic"]}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return s(!a)},children:Object(o.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(o.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item search-btn",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("input",{type:"checkbox",id:"check"}),Object(o.jsxs)("div",{className:"search-box",children:[Object(o.jsx)("input",{type:"text",placeholder:"Search "}),Object(o.jsx)("label",{for:"check",className:"icon",children:Object(o.jsx)("i",{className:"fas fa-search"})})]})]})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#test",className:"nav-links",onClick:n,children:"Contact Us"})})]})]})})},d=(a(53),a(15)),h=a(3),b=a(223),u=a(273),m=a(266),O=a(124),p=a(272),x=a(11),f=a(14),g=a(259),v=a(276),y=a(271),N=a(263),w=a(264),k=a(115),S=a.n(k),C=a(257),T=a(120),I=Object(C.a)((function(e){return{paperStyle:{padding:20,width:300,margin:"0 auto",height:"fit-content"},paperStyleIndex:{width:340,margin:"0 auto"},icon:{backgroundColor:"#107869"},buttons:{margin:"8px 0"},cardStyle:{maxWidth:450,padding:"20px 5px",margin:"0 auto",backgroundColor:"#fff",height:"fit-content"}}})),P=Object(T.a)({palette:{primary:{main:"#107869"},secondary:{main:"#107869"}}}),F=a(34),E=(a(77).config().baseURL,function(e){e.handleChange;var t=I(),a=Object(c.useState)({emailId:"",password:""}),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(!1),j=Object(l.a)(i,2),h=j[0],u=j[1];Object(c.useEffect)((function(){}),[h]);var m=function(e){var t=e.target,a=t.name,c=t.value;r(Object(d.a)(Object(d.a)({},n),{},Object(x.a)({},a,c)))},p=function(e){var t;e.preventDefault(),console.log("Sending request..........."),F.post("https://paythentic.herokuapp.com/auth/login",{username:(t=n.emailId,t.slice(0,t.indexOf("@"))),password:n.password}).then((function(e){e.data.success?(console.log("passed"),localStorage.setItem("accessToken",e.data.accessToken),console.log("passed access"),localStorage.setItem("refreshToken",e.data.refreshToken),console.log("passed refresh"),localStorage.setItem("username",e.data.username),console.log("passed username"),localStorage.setItem("usertype",e.data.usertype),console.log("passed usertype"),setInterval((function(){F.post("https://paythentic.herokuapp.com/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken)})).catch((function(e){console.log(e)}))}),36e5),u(!0)):window.alert(e.data.message),console.log(e)})).catch((function(e){console.log(e),window.alert(e.message)}))};return h?Object(o.jsx)(f.a,{to:"/dash"}):Object(o.jsx)(g.a,{children:Object(o.jsxs)(b.a,{className:t.paperStyle,children:[Object(o.jsxs)(g.a,{align:"center",children:[Object(o.jsx)(v.a,{className:t.icon,children:Object(o.jsx)(S.a,{})}),Object(o.jsx)("h2",{children:"Log in"})]}),Object(o.jsxs)("form",{onSubmit:p,children:[Object(o.jsx)(y.a,{label:"Email ID",placeholder:"Enter email id",name:"emailId",type:"email",value:n.emailId,onChange:m,fullWidth:!0,required:!0}),Object(o.jsx)(y.a,{label:"Password",placeholder:"Enter password",name:"password",type:"password",value:n.password,onChange:m,fullWidth:!0,required:!0}),Object(o.jsx)(N.a,{className:t.buttons,type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"Log in"}),Object(o.jsx)(O.a,{children:Object(o.jsx)(w.a,{href:"#",children:"Forgot password ?"})}),Object(o.jsxs)(O.a,{children:[" Do you have an account ?",Object(o.jsx)(w.a,{href:"#",onClick:p,children:"Sign Up"})]})]})]})})}),U=a(116),D=a.n(U),B=a(274),q=a(277),W=a(265),V=a(261),Y=a(262),L=a(275),R=["children"];function X(e){e.children;var t=Object(h.a)(e,R);return Object(o.jsx)("form",Object(d.a)(Object(d.a)({},t),{},{children:e.children}))}function M(e){var t=e.name,a=e.label,c=e.value,s=e.error,n=void 0===s?null:s,r=e.type,l=e.onChange;return Object(o.jsx)(y.a,Object(d.a)({fullWidth:!0,label:a,name:t,value:c,onChange:l,type:r},n&&{error:!0,helperText:n}))}var A=a(34),z=function(){var e=I(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=Object(d.a)({},n);if("fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=/.+@.+..+/.test(e.email)?"":"Email is not valid."),"phno"in e&&(t.phno=10===e.phno.length&&/^[1-9][0-9]*$/.test(e.phno)?"":"Phone Number is not valid.."),"password"in e){var a=e.password;a.length>=8?/^(?=.*[a-z])/.test(a)?/^(?=.*[A-Z])/.test(a)?/^(?=.*[0-9])/.test(a)?/^(?=.*[~`\!@#\$%^&\*\(\)\-_\+\=\{\}\[\]\|\;\:\"\<\>\,.\/\?])/.test(a)?t.password="":t.password="Passwords must contain at least 1 special character Eg:@,#,etc":t.password="Passwords must contain at least 1 numeric character":t.password="Passwords must contain at least 1 uppercase letter":t.password="Passwords must contain at least 1 lowercase letter":t.password="Passwords must be at least 8 characters in length."}if("cpassword"in e&&(t.cpassword=e.password===e.cpassword?"":"Password not matching.",console.log(t.cpassword," :: ",e.password," :: ",e.cpassword)),r(Object(d.a)({},t)),e==s)return Object.values(t).every((function(e){return""===e}))},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0,s=Object(c.useState)(e),n=Object(l.a)(s,2),r=n[0],i=n[1],o=Object(c.useState)({}),j=Object(l.a)(o,2),h=j[0],b=j[1],u=function(e){var c=e.target,s=c.name,n=c.value;i(Object(d.a)(Object(d.a)({},r),{},Object(x.a)({},s,n))),t&&a(Object(x.a)({},s,n))};return{values:r,setValues:i,errors:h,setErrors:b,handleInputChange:u}}({fullName:"",email:"",role:"Client",phno:"",password:"",cpassword:""},!0,t),s=a.values,n=(a.setValues,a.errors),r=a.setErrors,i=a.handleInputChange;return Object(o.jsx)(g.a,{children:Object(o.jsxs)(b.a,{className:e.paperStyle,children:[Object(o.jsxs)(g.a,{align:"center",children:[Object(o.jsx)(v.a,{className:e.icon,children:Object(o.jsx)(D.a,{})}),Object(o.jsx)("h2",{children:"Sign Up"}),Object(o.jsx)(O.a,{variant:"caption",gutterBottom:!0,children:"Please fill this form to create an account !"})]}),Object(o.jsxs)(X,{onSubmit:function(e){var a;e.preventDefault(),t()&&A.post("/auth/signup",{username:(a=s.email,a.slice(0,a.indexOf("@"))),fullName:s.fullName,emailId:s.email,currentUserType:s.role,password:s.cpassword}).then((function(e){window.alert(e.data.message),console.log(e)})).catch((function(e){console.log(e)}))},children:[Object(o.jsx)(M,{fullWidth:!0,label:"Full Name",name:"fullName",type:"text",value:s.fullName,placeholder:"Enter your name",onChange:i,error:n.fullName}),Object(o.jsx)(M,{fullWidth:!0,label:"Email",name:"email",type:"email",value:s.email,placeholder:"Enter your email",onChange:i,error:n.email}),Object(o.jsxs)(V.a,{component:"fieldset",style:{marginTop:15},children:[Object(o.jsx)(Y.a,{component:"legend",children:"Role"}),Object(o.jsxs)(q.a,{"aria-label":"role",name:"role",style:{display:"initial"},value:s.role,onChange:i,children:[Object(o.jsx)(W.a,{value:"Employer",control:Object(o.jsx)(B.a,{}),label:"Employer"}),Object(o.jsx)(W.a,{value:"Freelancer",control:Object(o.jsx)(B.a,{}),label:"Freelancer"})]})]}),Object(o.jsx)(M,{fullWidth:!0,label:"Phone Number",name:"phno",value:s.phno,type:"tel",placeholder:"Enter your phone number",onChange:i,error:n.phno}),Object(o.jsx)(M,{fullWidth:!0,label:"Password",name:"password",value:s.password,type:"password",placeholder:"Enter your password",onChange:i,error:n.password}),Object(o.jsx)(M,{fullWidth:!0,label:"Confirm Password",name:"cpassword",value:s.cpassword,type:"password",placeholder:"Confirm your password",onChange:i,error:n.cpassword}),Object(o.jsx)(W.a,{control:Object(o.jsx)(L.a,{name:"checkedA"}),label:"I accept the terms and conditions."}),Object(o.jsx)(N.a,{type:"submit",variant:"contained",color:"primary",children:"Sign up"})]})]})})},_=["children","value","index"],G=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],s=t[1],n=I(),r=function(e,t){s(t)};function i(e){var t=e.children,a=e.value,c=e.index,s=Object(h.a)(e,_);return Object(o.jsx)("div",Object(d.a)(Object(d.a)({role:"tabpanel",hidden:a!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},s),{},{children:a===c&&Object(o.jsx)(p.a,{children:Object(o.jsx)(O.a,{children:t})})}))}return Object(o.jsx)("div",{className:"login",children:Object(o.jsxs)(b.a,{className:n.paperStyleIndex,children:[Object(o.jsxs)(u.a,{className:"log-sign-btn-wrap",value:a,indicatorColor:"primary",textColor:"primary",onChange:r,"aria-label":"disabled tabs example",children:[Object(o.jsx)(m.a,{label:"Log In"}),Object(o.jsx)(m.a,{label:"Sign Up"})]}),Object(o.jsx)(i,{value:a,index:0,children:Object(o.jsx)(E,{handleChange:r})}),Object(o.jsx)(i,{value:a,index:1,children:Object(o.jsx)(z,{})})]})})},J=a(267),H=a(268);function $(){var e=I();return Object(o.jsx)("div",{className:"contact-us",children:Object(o.jsx)(g.a,{className:"contactUs-wrapper",children:Object(o.jsx)(J.a,{className:e.cardStyle,children:Object(o.jsxs)(H.a,{children:[Object(o.jsx)(O.a,{gutterBottom:!0,variant:"h5",align:"center",children:"Contact Us"}),Object(o.jsx)(O.a,{variant:"body1",color:"textSecondary",component:"p",gutterBottom:!0,align:"center",children:"support@paythentic.co"}),Object(o.jsx)(O.a,{variant:"body2",color:"textSecondary",component:"p",gutterBottom:!0,children:"Fill up the form and our team will get back to you within 24 hours."}),Object(o.jsx)("form",{children:Object(o.jsxs)(g.a,{container:!0,spacing:1,children:[Object(o.jsx)(g.a,{xs:12,sm:6,item:!0,children:Object(o.jsx)(y.a,{placeholder:"Enter first name",label:"First Name",variant:"outlined",fullWidth:!0,required:!0})}),Object(o.jsx)(g.a,{xs:12,sm:6,item:!0,children:Object(o.jsx)(y.a,{placeholder:"Enter last name",label:"Last Name",variant:"outlined",fullWidth:!0,required:!0})}),Object(o.jsx)(g.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{type:"email",placeholder:"Enter email",label:"Email",variant:"outlined",fullWidth:!0,required:!0})}),Object(o.jsx)(g.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{type:"number",placeholder:"Enter phone number",label:"Phone",variant:"outlined",fullWidth:!0,required:!0})}),Object(o.jsx)(g.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{label:"Message",multiline:!0,rows:4,placeholder:"Type your message here",variant:"outlined",fullWidth:!0,required:!0})}),Object(o.jsx)(g.a,{item:!0,xs:12,children:Object(o.jsx)(N.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Submit"})})]})})]})})})})}var Z=a(28),K=a(278),Q=a(90),ee=a.n(Q),te=a(91),ae=a.n(te),ce=a(117),se=a.n(ce),ne=a(118),re=a.p+"static/media/slider1.39f79fab.svg",le=a.p+"static/media/slider2.afe84c9e.svg",ie=a.p+"static/media/slider3.7d2cebfc.svg",oe=(a.p,Object(ne.autoPlay)(se.a)),je=[{label:"Transaction Security",imgPath:re},{label:"Freelancers Best Option",imgPath:le},{label:"Paythentic",imgPath:ie}];var de=function(){var e=Object(Z.a)(),t=c.useState(0),a=Object(l.a)(t,2),s=a[0],n=a[1],r=je.length;return Object(o.jsxs)(p.a,{sx:{maxWidth:400,flexGrow:1},children:[Object(o.jsx)(b.a,{rectangle:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"}}),Object(o.jsx)(oe,{axis:"rtl"===e.direction?"x-reverse":"x",index:s,onChangeIndex:function(e){n(e)},enableMouseEvents:!0,children:je.map((function(e,t){return Object(o.jsx)("div",{children:Math.abs(s-t)<=2?Object(o.jsx)(p.a,{component:"img",sx:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},src:e.imgPath,alt:e.label}):null},e.label)}))}),Object(o.jsx)(K.a,{variant:"dots",steps:r,position:"relative",style:{backgroundColor:"transparent"},activeStep:s,nextButton:Object(o.jsx)(N.a,{style:{position:"relative",top:"-120px",left:"70px",color:"#0d9e81"},size:"small",onClick:function(){n((function(e){return e+1}))},disabled:s===r-1,children:"rtl"===e.direction?Object(o.jsx)(ee.a,{}):Object(o.jsx)(ae.a,{})}),backButton:Object(o.jsx)(N.a,{style:{position:"relative",top:"-120px",right:"70px",color:"#0d9e81"},size:"small",onClick:function(){n((function(e){return e-1}))},disabled:0===s,children:"rtl"===e.direction?Object(o.jsx)(ae.a,{}):Object(o.jsx)(ee.a,{})})}),Object(o.jsx)(O.a,{style:{color:"#fff",textAlign:"center",fontSize:"40px"},children:je[s].label})]})},he=a(269);function be(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"bgimage"}),Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)("div",{className:"home-wrapper",children:[Object(o.jsx)("div",{className:"feature-description",children:Object(o.jsx)(he.a,{injectFirst:!0,children:Object(o.jsx)(de,{})})}),Object(o.jsx)("div",{className:"login-form",children:Object(o.jsx)(G,{})})]}),Object(o.jsxs)("div",{className:"about-us",children:[Object(o.jsx)("h2",{children:"About Us"}),Object(o.jsxs)("p",{children:["Today we are living in a world where people of various industries don't hire employees for works like graphic designing, content writing, software, or application development, so instead, they hire freelancers for this sort of work. Freelancers are people who pursue a profession without a long\x02term commitment to any one employer and work individually on a specific project assigned by the client.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Frauds that happens with freelancers are:-",Object(o.jsx)("br",{}),"- After project delivery sometimes clients pay less money than the signing amount or no money at all.",Object(o.jsx)("br",{}),"- Holding advance payments from a client and neglecting freelancers.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Frauds that happens with the client are:-",Object(o.jsx)("br",{}),"- After payment freelancers delay project delivery.",Object(o.jsx)("br",{}),"- Freelancers neglects client after advance payment.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"Here PayThentic will help users to reduce the risk of these frauds who get encountered frauds. Users can create their profiles on our platforms with certain credentials. Our platform will work as a mediator between them during the whole process from connecting to the completion of the project."]})]}),Object(o.jsx)("div",{className:"MiddleElements",children:Object(o.jsx)("div",{id:"test",children:Object(o.jsx)($,{})})}),Object(o.jsxs)("footer",{children:[Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{class:"social-icons",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-instagram","aria-hidden":"true"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-telegram-plane","aria-hidden":"true"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"#",target:"_blank",children:Object(o.jsx)("i",{class:"fab fa-linkedin","aria-hidden":"true"})})})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"Copyright \xa92021 All rights reserved"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"#",target:"_blank",children:"Terms & Conditions"}),"|",Object(o.jsx)("a",{href:"#",target:"_blank",children:"Privacy Policy"}),"|",Object(o.jsx)("a",{href:"#",target:"_blank",children:"DMCA"})]})]})]})]})}var ue=a(93),me=a.n(ue),Oe=a(119),pe=(a(213),a(70)),xe=a.n(pe),fe=a(20);a(214);function ge(e){var t=e.isFreelancer,a=e.userName,s=e.profilePicLink,n=(e.details,Object(c.useState)(["HTML","CSS","JavaScript","ReactJS"])),r=Object(l.a)(n,2),i=r[0],j=r[1];return Object(o.jsxs)("div",{className:"update-profile-form",children:[Object(o.jsx)("h1",{children:"Your Profile"}),Object(o.jsxs)("div",{className:"upper-side",children:[Object(o.jsxs)("div",{className:"profile-pic-picker",children:[Object(o.jsx)("img",{className:"profile-image-edit",src:s}),Object(o.jsx)("input",{type:"file",className:"update-photo-btn"})]}),Object(o.jsxs)("div",{className:"user-immutable-details",children:[Object(o.jsx)("span",{className:"save-btn-wrap",children:Object(o.jsx)("button",{children:"Save"})}),Object(o.jsx)("h2",{children:"@".concat(a)}),Object(o.jsx)("h3",{children:t?"Freelancer":"Client"})]})]}),Object(o.jsx)("div",{className:"line-str"}),Object(o.jsxs)("div",{className:"user-mutable-details",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:"Name"}),Object(o.jsx)("input",{type:"text",value:"",placeholder:"Enter Your Name"})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("h3",{children:"Email"}),Object(o.jsx)("input",{type:"email",value:"",placeholder:"Enter Your Email"})]}),Object(o.jsxs)("div",{className:"gender-wrap",children:[Object(o.jsx)("h3",{children:"Gender"}),Object(o.jsxs)("div",{className:"gender-option",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)("input",{type:"radio",name:"gender",value:"Male"}),Object(o.jsx)("h4",{children:"Male"})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("input",{type:"radio",name:"gender",value:"Female"}),Object(o.jsx)("h4",{children:"Female"})]}),Object(o.jsxs)("span",{children:[Object(o.jsx)("input",{type:"radio",name:"gender",value:"Others"}),Object(o.jsx)("h4",{children:"Others"})]})]})]}),Object(o.jsxs)("div",{className:"skill-section",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsxs)("ul",{className:"skill-list",children:[i.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:e}),Object(o.jsx)("button",{onClick:function(){return t=i.indexOf(e),void j((function(e){return e.filter((function(a){return e[t]!==a}))}));var t},children:"Delete"})]},i.indexOf(e))})),Object(o.jsx)("form",{name:"skill-form",children:Object(o.jsx)("input",{name:"New-Skill",placeholder:"Enter New Skill"})}),Object(o.jsx)("button",{onClick:function(){return e=document.forms["skill-form"]["New-Skill"].value,document.forms["skill-form"]["New-Skill"].value="",void j((function(t){return[].concat(Object(fe.a)(t),[e])}));var e},children:"Add"})]})]}),Object(o.jsx)("span",{children:Object(o.jsx)("h3",{children:"Payment info"})})]})]})}var ve=a(71),ye=a(34);var Ne=function(e){var t=e.userName,a=Object(c.useState)(!1),s=Object(l.a)(a,2),n=s[0],r=s[1],j=Object(c.useState)([]),d=Object(l.a)(j,2),h=d[0],b=d[1],u=Object(c.useState)(!1),m=Object(l.a)(u,2),O=m[0],p=m[1],x=Object(c.useState)(!1),g=Object(l.a)(x,2),v=g[0],y=g[1],N=Object(c.useState)(localStorage.getItem("usertype")),w=Object(l.a)(N,2),k=w[0],S=w[1],C=Object(c.useState)(!1),T=Object(l.a)(C,2),I=T[0],P=T[1],F={Freelancer:"Employer",Employer:"Freelancer"},E=function e(){r(!1),window.removeEventListener("click",e)},U=function(){ye.post("/auth/logout",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){console.log(e),P(!0)})).catch((function(e){console.log(e)}))};if(I)return Object(o.jsx)(f.a,{to:"/"});var D="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("nav",{className:"NavBar",children:[Object(o.jsx)(i.b,{to:"/dash",id:"paythentic-logo",children:Object(o.jsx)("h1",{children:"PayThentic"})}),Object(o.jsxs)("div",{className:"right-cor",children:[Object(o.jsxs)("span",{id:"search-bar",children:[Object(o.jsx)(xe.a,{path:ve.b,title:"User Profile",size:1,color:"rgb(6, 27, 41)"}),Object(o.jsx)("input",{type:"text",placeholder:"Search",onChange:function(e){return function(e){if(""===e.target.value)return y(!1),void b([]);ye.get("/search",{params:{q:e.target.value}}).then((function(e){console.log(e.data.profiles),y(!0),b(e.data.profiles)})).catch((function(e){"Request failed with status code 401"==e.message&&ye.post("/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken),window.location.reload()})).catch((function(e){console.log(e),401==e.message&&(window.alert("You are not logined"),P(!0))})),console.log(e.message)}))}(e)},on:!0})]}),v&&Object(o.jsx)(q,{}),Object(o.jsxs)("div",{className:"profile-option",onClick:function(){r(!0),setTimeout((function(){return window.addEventListener("click",E)}),100)},children:[Object(o.jsxs)("h2",{children:["@",localStorage.getItem("username")?localStorage.getItem("username"):"username"]}),Object(o.jsx)("img",{className:"profile-image",src:D,alt:"Profile Pic"})]}),n&&Object(o.jsx)(B,{})]})]}),O&&Object(o.jsx)(ge,{userName:t,isFreelancer:!0,profilePicLink:D}),O&&Object(o.jsx)("div",{className:"OnBG",onClick:function(){return p(!O)}}),v&&Object(o.jsx)("div",{className:"OnBG",onClick:function(){return y(!v)}})]});function B(){return Object(o.jsxs)("div",{className:"Options",children:[Object(o.jsx)("span",{className:"cross-btn",onClick:function(){return r(!1)},children:Object(o.jsx)(xe.a,{path:ve.a,title:"User Profile",size:1,color:"white"})}),Object(o.jsx)("span",{className:"change-user-type-btn",onClick:function(){!function(e){var t="Bearer ".concat(localStorage.getItem("accessToken"));ye.put("/dash/usertype",{},{headers:{authorization:t}}).then((function(t){console.log(t,"::",e),localStorage.setItem("usertype",e),S(e),window.location.reload()})).catch((function(e){"Request failed with status code 401"==e.message&&ye.post("/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken),window.location.reload()})).catch((function(e){console.log(e),401==e.message&&(window.alert("You are not logined"),P(!0))})),console.log(e.message)}))}(F[k])},children:"Freelancer"===k?"Set as Employer":"Set as Freelancer"}),Object(o.jsx)(i.b,{to:"/MyProfile",style:{textDecoration:"none"},children:Object(o.jsx)("span",{className:"your-profile-btn",children:"Your Profile"})}),Object(o.jsx)("span",{className:"connection-request-btn",children:"Connection Requests"}),Object(o.jsx)("span",{className:"update-profile-btn",onClick:function(){return p(!O)},children:"Update Profile"}),Object(o.jsx)("button",{onClick:U,children:"Log Out"})]})}function q(){var e=function(){var e=Object(Oe.a)(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.assign("/search/".concat(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"searchList",children:h.length>0?h.map((function(t){return Object(o.jsx)(i.b,{to:"/search/".concat(t.username),children:Object(o.jsx)("div",{className:"uname-bar",onClickCapture:function(){return e(t.username)},children:t.username},t.username)})})):Object(o.jsx)("div",{className:"uname-bar",children:"No User exist with this username"},"asdfsdf")})}},we=(a(110),a(34));function ke(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),i=r[0],j=r[1],d=Object(c.useState)([]),h=Object(l.a)(d,2),b=h[0],u=h[1],m=Object(c.useState)({}),O=Object(l.a)(m,2),p=O[0],x=O[1];return Object(c.useEffect)((function(){var e="Bearer ".concat(localStorage.getItem("accessToken"));we.get("/dash/MyProfile",{headers:{authorization:e}}).then((function(e){console.log(e),x(e.data.profile),u([]),s([])})).catch((function(e){"Request failed with status code 401"==e.message&&we.post("d/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken),window.location.reload()})).catch((function(e){console.log(e),401==e.message&&(window.alert("You are not logined"),j(!0))})),console.log(e.message)}))}),[]),i?Object(o.jsx)(i,{to:"/"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ne,{}),Object(o.jsxs)("div",{className:"my-profile-layout",children:[Object(o.jsxs)("div",{className:"upper-side-my-profile",children:[Object(o.jsx)("div",{className:"my-profile-image",children:Object(o.jsx)("img",{src:p.profilePicUrl,width:"200px"})}),Object(o.jsxs)("div",{className:"wrapper-headers-my-info",children:[Object(o.jsxs)("div",{className:"headers-my-info",children:[Object(o.jsx)("h3",{children:p.username}),Object(o.jsx)("h1",{children:p.fullName}),Object(o.jsx)("h4",{children:p.currentUserType})]}),Object(o.jsx)("div",{className:"verification-btn ".concat(p.isVerified?"verified":"notVerified"),children:p.isVerified?"Verified":"Not Verified"})]})]}),Object(o.jsxs)("div",{className:"lower-side-my-profile",children:[Object(o.jsxs)("div",{className:"my-skills-section",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("div",{className:"my-skills-list",children:b.length>0?b.map((function(e){return Object(o.jsx)("h4",{className:"skill-brick",children:e},b.indexOf(e))})):Object(o.jsx)("div",{className:"unavailable-info-msg-box",children:"No skills added yet."})})]}),Object(o.jsxs)("div",{className:"my-expireance-section",children:[Object(o.jsx)("h3",{children:"Experience"}),Object(o.jsx)("div",{className:"my-expireances-list",children:a.length>0?a.map((function(e){return Object(o.jsxs)("div",{className:"expireance-slab",children:[Object(o.jsx)("h4",{children:e.designation}),Object(o.jsxs)("h6",{children:[e.dateFrom," - ",e.dateTo]}),Object(o.jsx)("h5",{children:e.description})]},a.indexOf(e))})):Object(o.jsx)("div",{className:"unavailable-info-msg-box",children:"No experience added yet."})})]}),Object(o.jsxs)("span",{className:"my-profile-email-contact",children:[Object(o.jsxs)("h3",{children:["Email :","  "]}),Object(o.jsx)("h4",{children:p.emailId})]}),Object(o.jsxs)("span",{className:"my-profile-email-contact",children:[Object(o.jsxs)("h3",{children:["Contact No. :","  "]})," ",Object(o.jsx)("h4",{children:void 0===p.contactNo?"Not added yet.":p.contactNo})]})]})]})]})}a(215),a(216);function Se(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],n=function(){s(!a)};return console.log("payment-dial-box ".concat(a?"On":"Off")),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"".concat(a?"OnBG":"OffBG")}),Object(o.jsxs)("form",{className:"payment-dial-box ".concat(a?"On":"Off"),children:[Object(o.jsxs)("span",{className:"close-btn-wrap",onClick:n,children:[Object(o.jsx)("h2",{children:"Payment"}),Object(o.jsx)("h1",{children:"X"})]}),Object(o.jsx)("div",{}),Object(o.jsx)("h3",{children:"Card number"}),Object(o.jsx)("span",{children:Object(o.jsx)("input",{type:"number",placeholder:"XXXX XXXX XXXX XXXX"})}),Object(o.jsx)("h3",{children:"Card name"}),Object(o.jsx)("span",{children:Object(o.jsx)("input",{type:"text",placeholder:"Card Name"})}),Object(o.jsx)("h3",{children:"Expiry Date"}),Object(o.jsxs)("span",{className:"expDate-cvv",children:[Object(o.jsxs)("span",{className:"expDate-container",children:[Object(o.jsx)("input",{className:"expDate MM",type:"number",placeholder:"MM"}),Object(o.jsx)("h4",{children:"/"}),Object(o.jsx)("input",{className:"expDate YY",type:"number",placeholder:"YY"})]}),Object(o.jsxs)("span",{className:"cvv-container",children:[Object(o.jsx)("h3",{children:"CVV:   "}),Object(o.jsx)("input",{type:"number",placeholder:"CVV"})]})]}),Object(o.jsx)("span",{children:Object(o.jsx)("button",{className:"card-btn",type:"submit",children:"Proceed To Pay"})})]}),Object(o.jsx)("button",{className:"card-btn",onClick:n,children:"Payment"})]})}a(217);function Ce(e){var t=e.isFreelancer,a=e.stage;e.amount;if(t){if("Initial"===a)return Object(o.jsx)("div",{className:"Status-Card",children:Object(o.jsx)("h2",{children:"Advance Payment Pending"})});if("Building"===a)return Object(o.jsxs)("div",{className:"Status-Card",children:[Object(o.jsx)("h2",{children:"You have to Upload Files here"}),Object(o.jsx)("input",{type:"file",className:"card-btn",value:"Upload Files"})]});if("Uploaded"===a)return Object(o.jsx)("div",{className:"Status-Card",children:Object(o.jsx)("h2",{children:"You have uploaded file successfully."})});if("Review"===a)return Object(o.jsx)("div",{className:"Status-Card",children:Object(o.jsxs)("h2",{children:["We Got money.",Object(o.jsx)("br",{}),"Waiting for approval."]})})}return"Initial"===a?Object(o.jsxs)("div",{className:"Status-Card",children:[Object(o.jsx)("h2",{children:"Firstly You have to pay 30% amount."}),Object(o.jsx)(Se,{className:"card-btn"})]}):"Building"===a?Object(o.jsx)("div",{className:"Status-Card",children:Object(o.jsx)("h2",{children:"Files are not forwarded yet."})}):"Uploaded"===a?Object(o.jsxs)("div",{className:"Status-Card",children:[Object(o.jsx)("h2",{children:"Files are here."}),Object(o.jsx)("h2",{children:"Pay rest money"}),Object(o.jsx)(Se,{className:"card-btn"})]}):"Review"===a?Object(o.jsxs)("div",{className:"Status-Card",children:[Object(o.jsx)("h2",{children:"Review complete project files"}),Object(o.jsx)("button",{className:"card-btn",children:"Download Files"})]}):Object(o.jsx)("div",{className:"Status-Card",children:Object(o.jsx)("h2",{children:"Unable to fetch stage"})})}a(218);var Te=a(34);a(77).config().baseURL;function Ie(){var e=Object(f.g)().paramProjId,t=Object(c.useState)({}),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),j=i[0],d=i[1],h=Object(c.useState)(),b=Object(l.a)(h,2),u=b[0],m=b[1];return console.log(e),Object(c.useEffect)((function(){var t="Bearer ".concat(localStorage.getItem("accessToken")),a="/project/".concat(e);console.log(a),Te.get(a,{headers:{authorization:t}}).then((function(e){console.log("response project details ::",e),localStorage.getItem("username")===e.data.freelancerUname?m(!0):m(!1),n(e.data.project),console.log(s)})).catch((function(e){"Request failed with status code 401"==e.message&&Te.post("/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken),window.location.reload()})).catch((function(e){console.log(e),401==e.message&&(window.alert("You are not logined"),d(!0))})),console.log(e.message)}))}),[]),j?Object(o.jsx)(j,{to:"/"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ne,{}),Object(o.jsx)("div",{className:"bg-DshBrd",children:Object(o.jsxs)("div",{className:"proj-desc",children:[Object(o.jsxs)("div",{className:"proj-info",children:[Object(o.jsxs)("h3",{children:["PRJ#",e]}),Object(o.jsx)("h1",{children:s.projectName}),Object(o.jsx)("h6",{children:s.projectDscrp})]}),Object(o.jsx)(Ce,{isFreelancer:u,stage:s.stage})]})})]})}a(219),a(220);var Pe=a(34);a(77).config().baseURL;function Fe(e){var t=e.setVisibilityCF,a=localStorage.getItem("usertype"),s=Object(c.useState)(!1),n=Object(l.a)(s,2),r=(n[0],n[1],{freelancerUname:"",clientUname:""});"Freelancer"==a?r.freelancerUname=localStorage.getItem("username"):r.clientUname=localStorage.getItem("username");var i=Object(c.useState)(Object(d.a)({projectName:"",projectDscrp:"",dueDate:"",signingAmount:void 0},r)),j=Object(l.a)(i,2),h=j[0],b=j[1],u=function(e){var t=e.target,a=t.name,c=t.value;console.log(a,"::",c),b(Object(d.a)(Object(d.a)({},h),{},Object(x.a)({},a,c)))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"create-proj-form",children:[Object(o.jsx)("div",{className:"top-wrapper",children:Object(o.jsx)("h1",{children:"Create Project"})}),Object(o.jsx)("div",{className:"line-str"}),Object(o.jsxs)("form",{method:"POST",children:[Object(o.jsx)("h3",{children:"Project Name"}),Object(o.jsx)("input",{type:"text",placeholder:"Enter Project Name",name:"projectName",value:h.projectName,onChange:function(e){u(e)},required:!0}),Object(o.jsxs)("h3",{children:["Freelancer"==a?"Client":"Freelancer"," Username"]}),Object(o.jsx)("input",{type:"text",placeholder:"".concat("Freelancer"==a?"Client":"Freelancer"," @Username"),name:"".concat("Freelancer"==a?"clientUname":"freelancerUname"),value:"Freelancer"==a?h.clientUname:h.freelancerUname,onChange:function(e){u(e)},required:!0}),Object(o.jsx)("h3",{children:"Project description"}),Object(o.jsx)("textarea",{placeholder:"Project description goes here...",name:"projectDscrp",value:h.projectDscrp,onChange:function(e){u(e)},required:!0}),Object(o.jsx)("h3",{children:"Signing amount"}),Object(o.jsx)("input",{type:"number",placeholder:"Enter project signing amount",name:"signingAmount",value:h.signingAmount,onChange:function(e){u(e)},required:!0}),Object(o.jsx)("h3",{children:"Due date"}),Object(o.jsx)("input",{type:"date",name:"dueDate",value:h.dueDate,onChange:function(e){u(e)},required:!0}),Object(o.jsx)("button",{className:"create-btn",onClick:function(e){!function(e){e.preventDefault(),console.log("sending project details......");var a="Bearer ".concat(localStorage.getItem("accessToken"));Pe.post("/dash/createProject",Object(d.a)({},h),{headers:{authorization:a}}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t(!1),window.location.reload()}(e)},children:"Create"})]})]})})}var Ee=a(34);function Ue(){var e=Object(c.useState)("active"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(l.a)(n,2),j=r[0],d=r[1],h=Object(c.useState)(!1),b=Object(l.a)(h,2),u=b[0],m=b[1],O=Object(c.useState)([]),p=Object(l.a)(O,2),x=p[0],f=p[1];return Object(c.useEffect)((function(){console.log(window.location.hostname);var e="Bearer ".concat(localStorage.getItem("accessToken"));Ee.get("/dash".concat("active"==a?"":"/history"),{headers:{authorization:e}}).then((function(e){f(e.data.projects),console.log(e)})).catch((function(e){"jwt expired"==e.message&&Ee.post("/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken)})).catch((function(e){console.log(e),401==e.code&&(window.alert("You are not logined"),d(!0))})),console.log(e)}))}),[a,localStorage.getItem("usertype")]),j?Object(o.jsx)(j,{to:"/"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ne,{}),u&&Object(o.jsx)("div",{className:"OnBG",onClick:function(){return m(!u)}}),Object(o.jsxs)("div",{className:"bg-DshBrd",children:[Object(o.jsx)("span",{className:"title-wrap",children:Object(o.jsx)("h1",{className:"title-your-proj",children:"Your Projects"})}),Object(o.jsxs)("span",{className:"proj-btns",children:[Object(o.jsx)("button",{className:"proj-btn active-proj",onClick:function(){return s("active")},children:"Active"}),Object(o.jsx)("button",{className:"proj-btn history-proj",onClick:function(){return s("history")},children:"History"})]}),Object(o.jsx)("div",{className:"proj-list",children:x.map((function(e){return Object(o.jsx)(i.b,{to:"/project/".concat(e.projId),className:"proj-link",children:Object(o.jsxs)("div",{className:"proj-slab",children:[Object(o.jsxs)("h5",{children:["PRJ#",e.projId]}),Object(o.jsx)("h2",{children:e.projectName})]},e.projId)},e.projId)}))}),Object(o.jsx)("button",{className:"create-proj-btn",onClick:function(){return m(!u)},children:"+ Create Project"})]}),u&&Object(o.jsx)(Fe,{setVisibilityCF:function(e){m(e)}})]})}var De=a(34);function Be(){var e=Object(f.g)().Username,t=Object(c.useState)([]),a=Object(l.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),j=i[0],d=i[1],h=Object(c.useState)([]),b=Object(l.a)(h,2),u=b[0],m=b[1],O=Object(c.useState)({}),p=Object(l.a)(O,2),x=p[0],g=p[1];return Object(c.useEffect)((function(){De.get("/search/".concat(e)).then((function(e){console.log(e),g(e.data.profile),m(e.data.profile.skills),n(e.data.profile.exp)})).catch((function(e){"Request failed with status code 401"==e.message&&De.post("/auth/refreshToken",{refreshToken:localStorage.getItem("refreshToken")}).then((function(e){localStorage.setItem("accessToken",e.data.accessToken),console.log("refresh access"),localStorage.setItem("refreshToken",e.data.refreshToken),window.location.reload()})).catch((function(e){console.log(e),401==e.message&&(window.alert("You are not logined"),d(!0))})),console.log(e.message)}))}),[]),j?Object(o.jsx)(j,{to:"/"}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ne,{}),Object(o.jsxs)("div",{className:"my-profile-layout",children:[Object(o.jsxs)("div",{className:"upper-side-my-profile",children:[Object(o.jsx)("div",{className:"my-profile-image",children:Object(o.jsx)("img",{src:x.profilePicUrl,width:"200px"})}),Object(o.jsxs)("div",{className:"wrapper-headers-my-info",children:[Object(o.jsxs)("div",{className:"headers-my-infos",children:[Object(o.jsx)("h3",{children:x.username}),Object(o.jsx)("h1",{children:x.fullName}),Object(o.jsx)("h4",{children:x.currentUserType})]}),Object(o.jsx)("div",{className:"verification-btn ".concat(x.isVerified?"verified":"notVerified"),children:x.isVerified?"Verified":"Not Verified"})]})]}),Object(o.jsxs)("div",{className:"lower-side-my-profile",children:[Object(o.jsxs)("div",{className:"my-skills-section",children:[Object(o.jsx)("h3",{children:"Skills"}),Object(o.jsx)("div",{className:"my-skills-list",children:u.length>0?u.map((function(e){return Object(o.jsx)("h4",{className:"skill-brick",children:e},u.indexOf(e))})):Object(o.jsx)("div",{className:"unavailable-info-msg-box",children:"No skills added yet."})})]}),Object(o.jsxs)("div",{className:"my-expireance-section",children:[Object(o.jsx)("h3",{children:"Experience"}),Object(o.jsx)("div",{className:"my-expireances-list",children:void 0!==s&&s.length>0?s.map((function(e){return Object(o.jsxs)("div",{className:"expireance-slab",children:[Object(o.jsx)("h4",{children:e.designation}),Object(o.jsxs)("h6",{children:[e.dateFrom," - ",e.dateTo]}),Object(o.jsx)("h5",{children:e.description})]},s.indexOf(e))})):Object(o.jsx)("div",{className:"unavailable-info-msg-box",children:"No experience added yet."})})]}),Object(o.jsxs)("span",{className:"my-profile-email-contact",children:[Object(o.jsxs)("h3",{children:["Email :","  "]}),Object(o.jsx)("h4",{children:x.emailId})]}),Object(o.jsxs)("span",{className:"my-profile-email-contact",children:[Object(o.jsxs)("h3",{children:["Contact No. :","  "]})," ",Object(o.jsx)("h4",{children:void 0===x.contactNo?"Not added yet.":x.contactNo})]})]})]})]})}var qe=a(270);function We(){return Object(o.jsx)(i.a,{children:Object(o.jsx)(f.d,{children:Object(o.jsxs)(qe.a,{theme:P,children:[Object(o.jsx)(f.b,{path:"/",exact:!0,component:be}),Object(o.jsx)(f.b,{path:"/dash",component:Ue}),Object(o.jsx)(f.b,{path:"/MyProfile",component:ke}),Object(o.jsx)(f.b,{path:"/project/:paramProjId",component:Ie}),Object(o.jsx)(f.b,{path:"/search/:Username",component:Be})]})})})}var Ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,280)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(We,{})}),document.getElementById("root")),Ve()},53:function(e,t,a){},77:function(e,t){e.exports={config:function(){return{baseURL:"http://localhost:5000"}}}}},[[221,1,2]]]);
//# sourceMappingURL=main.4abde57f.chunk.js.map