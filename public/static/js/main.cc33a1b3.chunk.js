(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){},42:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},47:function(e,a,t){e.exports=t(86)},52:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(18),c=t.n(r),s=t(114),m=t(113),o=(t(52),t(12)),i=t(13),u=t(16),d=t(14),E=t(15),g=t(42),h=t.n(g);t(53),l.Component,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(54);var p=t(3),f=(t(21),t(55),t(88)),N=t(89),b=t(90),v=t(91),y=t(92),C=t(93),w=t(94),k=t(95),S=t(96),O=t(97),j=t(45),x=function(e,a,t){return n.a.createElement(f.a,{className:"customcard"},n.a.createElement(N.a,{className:"customcardheader"},n.a.createElement(b.a,null,n.a.createElement(v.a,null,"Case Name ",e.caseName))),n.a.createElement(y.a,{className:"customtitle"},n.a.createElement(b.a,null,n.a.createElement(v.a,null," Your Name")," ",n.a.createElement(v.a,null,e.userID)),n.a.createElement(b.a,null,n.a.createElement(v.a,null," Lawyer's Name")," ",n.a.createElement(v.a,null,e.lawyerID))),n.a.createElement(C.a,null,n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-2"},"Description"),n.a.createElement(v.a,null,n.a.createElement(w.a,null,e.caseDescription))),n.a.createElement(b.a,{className:"mt-4"},n.a.createElement(v.a,{className:"col-2"},"Discussion")),n.a.createElement(k.a,{className:"mt-3",toggler:"#toggler"},n.a.createElement(S.a,null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement(w.a,{className:"mt-1"},"Lawyer")),n.a.createElement("th",{align:"right"},n.a.createElement(w.a,{className:"float-right  mt-1"},"User"))),e.convo.map(function(e){return e.user?n.a.createElement("tr",null,n.a.createElement("td",null),n.a.createElement("td",{align:"right"},n.a.createElement(w.a,{className:"float-right  mt-1"},e.user))):n.a.createElement("tr",null,n.a.createElement("td",null," ",n.a.createElement(w.a,{className:"mt-1"},e.lawyer)),n.a.createElement("td",null))})),n.a.createElement(b.a,null,n.a.createElement(O.a,{className:"form-control textborder col-11",type:"textarea",name:"reply",id:e.caseName,placeholder:"Reply",row:"3"}),n.a.createElement(j.a,{className:"sendBtn mt-2 float-right ",onClick:function(l){var n=sessionStorage.getItem("id");n===e.userID&&(e.convo.push({user:document.getElementById(e.caseName).value.toString()}),t.post("/api/caselist/addmsg/",e)),n===e.lawyerID&&(e.convo.push({lawyer:document.getElementById(e.caseName).value.toString()}),console.log(e),t.post("/api/caselist/addmsg/",e)),document.getElementById(e.caseName).value="",a.forceUpdate()}},"\ud83e\udc3a"))),n.a.createElement(j.a,{className:"float-right mt-3 btn-primary",id:"toggler"},"Show All Messages")))},I=t(98),L=t(99),P=t(100),B=t(101),D=t(102),R=t(103),A=t(104),U=t(105),M=t(106),z=function(){return n.a.createElement(I.a,{color:"light",light:!0,expand:"md"},n.a.createElement(L.a,null,"BookMyLawyer"),n.a.createElement(P.a,{className:"mr-auto",navbar:!0},n.a.createElement(B.a,null,n.a.createElement(D.a,{href:"/home"},"Home")),n.a.createElement(B.a,null,n.a.createElement(D.a,{href:"/AddCase"},"Add Case"))),n.a.createElement(P.a,{className:"ml-auto",navbar:!0},n.a.createElement(B.a,{className:"ml-auto"},n.a.createElement(R.a,{nav:!0,inNavbar:!0},n.a.createElement(A.a,{nav:!0,caret:!0},"Settings"),n.a.createElement(U.a,{right:!0},n.a.createElement(M.a,{href:"/AccountSettings"},"Account Settings"),n.a.createElement(M.a,{divider:!0}),n.a.createElement(M.a,{href:"/ChangePass"},"Change Password"),n.a.createElement(M.a,{divider:!0}),n.a.createElement(M.a,{href:"/",onClick:function(){sessionStorage.removeItem("token"),sessionStorage.setItem("auth",!1)}},"Logout"))))))},F=t(8),H=t.n(F),J=t(107),T=function(e){function a(e){var t;return Object(o.a)(this,a),H.a.defaults.headers.common.token=sessionStorage.getItem("token"),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={},t.dummy={user:"Vivek",advocate:"kljsdf",caseID:"1238908901283",caseName:"hhoahjsdfkojl",caseDesc:"ajsdflkjasdklasdasdasdasdasdasddddddddddddddddddddddddddddddddddddddddddf lkasjdlkasjdllkajsd kljsdafkllkj",convo:[{user:"asdfsdf"},{lawyer:"asd"},{lawyer:"asdfsdf"},{lawyer:"asdfsdf"},{user:"asdfsdf"},{lawyer:"asdfsdf"},{user:"asdfsdf"}]},t.setLawyers=function(e){t.setState(function(a){return{data:e}}),t.forceUpdate()},t.getList=function(e){H.a.post("/api/caselist/getlist").then(function(a){e(a.data)}).catch(function(e){})},t.toggle=t.toggle.bind(Object(p.a)(Object(p.a)(t))),t.state={isOpen:!1},t.getList(t.setLawyers),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,z(),this.state.data?this.state.data.map(function(a){return n.a.createElement(J.a,{className:"mt-5"},x(a,e,H.a))}):n.a.createElement(J.a,{className:"mt-5"},x(this.dummy,this,H.a)))}}]),a}(l.Component),W=t(24),Y=t(116),V=t(108),$=function(e){return n.a.createElement(V.a,null,n.a.createElement(b.a,{className:"ml-2 mr-2"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Name"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"text",name:"firstName",id:"firstName",placeholder:"First Name",ref:"fname",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}})),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"text",name:"secondName",id:"secondName",placeholder:"Second Name",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,{className:"ml-2 mr-2"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Email"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"email",name:"email",id:"exampleEmail",placeholder:"Email",onChange:function(a){console.log(a);var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,{className:"ml-2 mr-2"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Password"))),n.a.createElement(v.a,null,n.a.createElement(b.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"password",name:"password",id:"loginpassword",placeholder:"Enter Password",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}})),n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(O.a,{className:"form-control textborder",type:"password",name:"confpass",id:"confpassword",placeholder:"Re-Enter Password",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}})))),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-2"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Address"))),n.a.createElement(v.a,{className:"col-2"},n.a.createElement(O.a,{className:"textAreaStyle",type:"textarea",name:"address",id:"address",placeholder:"Address",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-4"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Phone Number"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"phoneNumber",id:"phoneNumber",placeholder:"Phone Number",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}})),n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Alternate Number"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"altPhoneNumber",id:"altPhoneNumber",placeholder:"Alt-Phone Number",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-3"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Date of Birth"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"date",id:"dateOfBirth",onChange:function(a){var t=e.state.reg;t.dateOfBirth=a.target.value,e.setState({reg:t})}})),n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Aadhar Number"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"aadharNumber",id:"aadharNumber",placeholder:"Aadhar Number",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))))},q=t(109),G=function(e){return n.a.createElement(J.a,null,n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"BAR ID Number"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"barID",id:"barID",placeholder:"BarID Number",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Price"))),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"price",id:"price",placeholder:"price",onChange:function(a){var t=e.state.reg;t[a.target.name]=a.target.value,e.setState({reg:t})}}))),n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,n.a.createElement("p",null,"Field of work"))),n.a.createElement(v.a,{className:"col-8"},n.a.createElement(q.a,{name:"speciality"},n.a.createElement(j.a,{name:"speciality",onClick:function(a){var t=e.state.reg;t[a.target.name]="Civil",e.setState({reg:t})}},"Civil"),n.a.createElement(j.a,{name:"speciality",onClick:function(a){var t=e.state.reg;t[a.target.name]="Criminal",e.setState({reg:t})}},"Criminal")))))},K=(t(85),t(115)),Q=t(110),X=t(111),Z=t(112),_=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).modelClose=function(){console.log(t.state)},t.toggle1=function(){t.setState(function(e){return{modal1:!e.modal1}})},t.handleChange=function(e){var a=t.state.home;a[e.target.name]=e.target.value,t.setState({home:a}),console.log(t.state)},t.clickOnSignIn=function(e){console.log(t.state.home);H.a.post("/login",t.state.home).then(function(a){sessionStorage.setItem("auth",!0),console.log("item",sessionStorage.getItem("auth")),sessionStorage.setItem("token",a.data.token),e.forceUpdate()}).catch(function(a){console.log("incorrect"),sessionStorage.setItem("auth",!1),e.forceUpdate()});t.loginChange()},t.loginChange=function(){console.log("test",sessionStorage.getItem("auth")),t.setState(function(e){return{login:!0}})},t.clickOnRegistrationLawyer=function(){console.log(t.state.reg),H.a.post("/lawyer",t.state.reg),t.setState(function(e){return{modal1:!e.modal1}})},t.clickOnRegistrationUser=function(){console.log(t.state.reg),H.a.post("/user",t.state.reg),t.setState(function(e){return{modal:!e.modal}})},sessionStorage.setItem("auth",!1),t.state={home:{},reg:{speciality:""}},t.toggle=t.toggle.bind(Object(p.a)(Object(p.a)(t))),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){this.setState(function(e){return{modal:!e.modal}})}},{key:"render",value:function(){var e,a=this;return n.a.createElement(J.a,{className:"col-3"},n.a.createElement(f.a,{className:"mx-auto my-5 middleCard"},n.a.createElement(N.a,null,n.a.createElement(y.a,{className:"text-center"},n.a.createElement("h2",null,"Sign In"))),n.a.createElement(C.a,null,n.a.createElement(V.a,null,n.a.createElement(b.a,{className:"ml-2 mr-2"},n.a.createElement(O.a,{className:"form-control textborder",type:"email",name:"email",id:"exampleEmail",placeholder:"Email",onChange:this.handleChange,value:this.state.loginid})),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"password",name:"password",id:"loginpassword",placeholder:"Enter Password",onChange:this.handleChange})),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-3"},n.a.createElement(j.a,{onClick:function(){sessionStorage.setItem("id",document.getElementById("exampleEmail").value),a.clickOnSignIn(a)},color:"primary",size:"lg",block:!0},"Sign In")),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-4"},n.a.createElement("center",null,n.a.createElement(w.a,null,n.a.createElement("h5",null,"If you are new user click on Rigester")))),n.a.createElement(b.a,{className:"ml-2 mr-2 mt-1"},n.a.createElement(v.a,null,n.a.createElement(j.a,{color:"success",onClick:this.toggle,size:"lg",block:!0},"User Register"),n.a.createElement(K.a,(e={ref:"modal",isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},Object(W.a)(e,"className","modal-lg"),Object(W.a)(e,"ref","model"),e),n.a.createElement(Q.a,{toggle:this.toggle,color:"secondary"},"User Register"),n.a.createElement(X.a,null,$(this)),n.a.createElement(Z.a,null,n.a.createElement(j.a,{color:"success",onClick:this.clickOnRegistrationUser},"Register")," ",n.a.createElement(j.a,{color:"secondary",onClick:this.modelClose},"Cancel")," "))),n.a.createElement(v.a,null,n.a.createElement(j.a,{color:"success",onClick:this.toggle1,size:"lg",block:!0},"Register Lawyer"),n.a.createElement(K.a,Object(W.a)({isOpen:this.state.modal1,toggle:this.toggle1,className:this.props.className},"className","modal-lg"),n.a.createElement(Q.a,{toggle:this.toggle1,color:"secondary"},"Lawyer Register"),n.a.createElement(X.a,null,$(this),G(this)),n.a.createElement(Z.a,null,n.a.createElement(j.a,{color:"success",onClick:this.clickOnRegistrationLawyer},"Register")," ",n.a.createElement(j.a,{color:"secondary",onClick:this.modelClose},"Cancel")," "))))))),!0===this.state.login?"true"===sessionStorage.getItem("auth")?n.a.createElement(Y.a,{to:"/home"}):n.a.createElement(b.a,{className:"ml-2 mr-2 mt-4"},n.a.createElement("center",null,n.a.createElement(w.a,null,n.a.createElement("h5",null,"Incorrect Password")))):null)}}]),a}(l.Component),ee=t(44),ae=t(30),te=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).selected=function(){H.a.post("/api/caselist/addCase",t.state.data),console.log(t.state.data)},t.setLawyers=function(e){console.log("data1",e),t.lawyers=e,t.setState(function(a){return{lawyers:e}})},t.getLawyerList=function(e){H.a.post("/api/lawyer/getlist",t.state.data).then(function(a){return console.log("resp",a.data),e(a.data),a.data}).catch(function(e){})},H.a.defaults.headers.common.token=sessionStorage.getItem("token"),t.toggle=t.toggle.bind(Object(p.a)(Object(p.a)(t))),t.droptoggle=t.droptoggle.bind(Object(p.a)(Object(p.a)(t))),t.state={collapse:!0},t.state={dropdownOpen:!0},t.state={data:{speciality:"Criminal"}},t.state.collapse=!0,t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"toggle",value:function(){console.log(this.state),this.setState(function(e){return{collapse:!e.collapse}}),this.getLawyerList(this.setLawyers)}},{key:"droptoggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,z(),n.a.createElement(J.a,{className:"mt-5"},n.a.createElement(f.a,{className:"customcard"},n.a.createElement(N.a,null,n.a.createElement(b.a,null,n.a.createElement(v.a,null,"Case Details")))),n.a.createElement(ee.a,{isOpen:this.state.collapse},n.a.createElement(C.a,{className:"customcardbody"},n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,"Provid a case name")),n.a.createElement(v.a,{className:"col-10"},n.a.createElement(O.a,{className:"form-control textborder",type:"text",name:"caseName",id:"caseName",placeholder:"Case Name",ref:"fname",onChange:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}}))),n.a.createElement(b.a,{className:"mt-3"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,"Case Description")),n.a.createElement(v.a,{className:"col-10"},n.a.createElement(O.a,{className:"form-control textborder",type:"textarea",name:"caseDescription",id:"caseDesc",rows:"30",placeholder:"",onChange:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}}))),n.a.createElement(b.a,{className:"mt-3"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,"Case Type")),n.a.createElement(v.a,{className:"col-10"},n.a.createElement(ae.a,{isOpen:this.state.dropdownOpen,toggle:this.droptoggle},n.a.createElement(A.a,{caret:!0,className:"form-control textborder"},this.state.data.speciality),n.a.createElement(U.a,{className:"form-control textborder"},n.a.createElement(M.a,{header:!0},"Lawyer Type"),n.a.createElement(M.a,{name:"speciality",value:"Civil",onClick:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}},"Civil Lawyer"),n.a.createElement(M.a,{name:"speciality",value:"Criminal",onClick:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}},"Criminal Lawyer"),n.a.createElement(M.a,{divider:!0}))))),n.a.createElement(b.a,{className:"mt-5"},n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,"Price Lower limit")),n.a.createElement(v.a,{className:"col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"lowerlimit",id:"lowerlimit",placeholder:"Lower Limit",onChange:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}})),n.a.createElement(v.a,{className:"col-2"},n.a.createElement(w.a,null,"Price Lower Upper")),n.a.createElement(v.a,{className:"col--3"},n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"upperlimit",id:"upperlimit",placeholder:"Upper Limit",onChange:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t})}}))))),n.a.createElement(j.a,{className:"float-right mt-3 btn-primary",onClick:this.toggle},this.state.collapse?"Add Case":"Edit Case"),n.a.createElement(S.a,null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"#"),n.a.createElement("th",null,"First Name"),n.a.createElement("th",null,"Last Name"),n.a.createElement("th",null,"Speciality"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Select")),this.lawyers?this.lawyers.map(function(a){return n.a.createElement("tr",null,n.a.createElement("th",null),n.a.createElement("th",null,a.firstName),n.a.createElement("th",null,a.secondName),n.a.createElement("th",null,a.speciality),n.a.createElement("th",null,a.price),n.a.createElement("th",null,n.a.createElement(j.a,{name:"lawyerID",value:a.email,onClick:function(a){var t=e.state.data;t[a.target.name]=a.target.value,e.setState({data:t}),e.selected()}},"Select")))}):null))))}}]),a}(l.Component),le=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).setLawyers=function(e){t.data=e[0],console.log(t.data),t.forceUpdate()},t.getData=function(e){H.a.post("/api/accountSettings/getSettings","ets").then(function(a){e(a.data)}).catch(function(e){})},t.state={cSelected:[]},t.data={},H.a.defaults.headers.common.token=sessionStorage.getItem("token"),t.onRadioBtnClick1=t.onRadioBtnClick1.bind(Object(p.a)(Object(p.a)(t))),t.update=t.update.bind(Object(p.a)(Object(p.a)(t))),t.onRadioBtnClick2=t.onRadioBtnClick2.bind(Object(p.a)(Object(p.a)(t))),t.getData(t.setLawyers),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"update",value:function(){this.data.barID?H.a.post("/api/accountSettings/updateLawyer",this.data):H.a.post("/api/accountSettings/updateUser",this.data)}},{key:"onRadioBtnClick1",value:function(e){this.data.available=e,this.forceUpdate()}},{key:"onRadioBtnClick2",value:function(e){this.data.speciality=e,this.forceUpdate()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,z(),n.a.createElement(J.a,{className:"mt-5"},n.a.createElement(f.a,{className:"customcard"},n.a.createElement(N.a,null,n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},"Account Settings"),n.a.createElement(v.a,null,this.data.firstName),n.a.createElement(v.a,null,this.data.email))),n.a.createElement(C.a,{className:"customcardbody"},this.data.barID?n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Availability")),n.a.createElement(v.a,null,n.a.createElement(q.a,null,n.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick1(!0)},active:this.data.available},"Yes"),n.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick1(!1)},active:!this.data.available},"No")))):n.a.createElement(w.a,null),n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Mobile Number")),n.a.createElement(v.a,{className:"col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"phoneNumber",id:"phoneNumber",onChange:function(a){var t=e.data;t[a.target.name]=a.target.value,e.setState({data:t}),console.log(e.data)},value:this.data.phoneNumber}))),n.a.createElement(b.a,null,n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Alternative Mobile Number")),n.a.createElement(v.a,{className:"mt-2 col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"altPhoneNumber",id:"altPhoneNumber",onChange:function(a){var t=e.data;t[a.target.name]=a.target.value,e.setState({data:t}),console.log(e.data)},value:this.data.altPhoneNumber}))),n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Address")),n.a.createElement(v.a,null,n.a.createElement(O.a,{className:"form-control textborder",type:"textarea",row:"5",name:"address",id:"address",onChange:function(a){var t=e.data;t[a.target.name]=a.target.value,e.setState({data:t}),console.log(e.data)},value:this.data.address}))),this.data.barID?n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Price")),n.a.createElement(v.a,{className:"col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"number",name:"price",id:"price",onChange:function(a){var t=e.data;t[a.target.name]=a.target.value,e.setState({data:t}),console.log(e.data)},value:this.data.price}))):n.a.createElement(w.a,null),this.data.barID?n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Speciality")),n.a.createElement(v.a,null,n.a.createElement(q.a,null,n.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick2("Civil")},active:"Civil"===this.data.speciality},"Civil"),n.a.createElement(j.a,{color:"primary",onClick:function(){return e.onRadioBtnClick2("Criminal")},active:"Criminal"===this.data.speciality},"Criminal")))):n.a.createElement(w.a,null),n.a.createElement(j.a,{className:" float-right mt-3 btn-primary",onClick:this.update},"Update")))))}}]),a}(l.Component),ne=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={newpass:"",newpassChange:"",cSelected:[],match:!1,success:!1},t.check=t.check.bind(Object(p.a)(Object(p.a)(t))),t.update=t.update.bind(Object(p.a)(Object(p.a)(t))),H.a.defaults.headers.common.token=sessionStorage.getItem("token"),t.id=sessionStorage.getItem("id"),t}return Object(E.a)(a,e),Object(i.a)(a,[{key:"update",value:function(){H.a.post("api/accountSettings/updatepasswd",this.state),this.state.success=!0,this.forceUpdate()}},{key:"check",value:function(e){e.target.value.toString()===this.state.newpass.toString()?(console.log("match"),this.state.match=!0):(console.log("mismatch"),this.state.match=!1)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,z(),n.a.createElement(J.a,{className:"mt-5"},n.a.createElement(f.a,{className:"customcard"},n.a.createElement(N.a,null,n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},this.state.success?"Password Change Successful ":"Change Password"),n.a.createElement(v.a,null),n.a.createElement(v.a,null,this.id))),n.a.createElement(C.a,{className:"customcardbody"},n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Enter New Password")),n.a.createElement(v.a,{className:"col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"password",name:"newpass",id:"newpass",onChange:function(a){document.getElementById("confpass").value="",e.state.match=!1,e.newpassChange="",e.state.newpass=a.target.value.toString()}}))),n.a.createElement(b.a,{className:"mt-2"},n.a.createElement(v.a,{className:"col-4"},n.a.createElement(w.a,null,"Confirm New Password")),n.a.createElement(v.a,{className:"col-3"},n.a.createElement(O.a,{className:"form-control textborder",type:"password",name:"confpass",id:"confpass",onChange:function(a){console.log(e.state.newpass),e.state.newpass===a.target.value.toString()?e.state.match=!0:e.state.match=!1,e.forceUpdate()}}))),n.a.createElement(j.a,{className:" float-right mt-3 btn-primary",disabled:!this.state.match,onClick:this.update},"Update and save")))))}}]),a}(l.Component);c.a.render(n.a.createElement(s.a,null,n.a.createElement("div",null,n.a.createElement(m.a,{exact:!0,path:"/",component:_}),n.a.createElement(m.a,{exact:!0,path:"/Home",component:T}),n.a.createElement(m.a,{exact:!0,path:"/AddCase",component:te}),n.a.createElement(m.a,{exact:!0,path:"/AccountSettings",component:le}),n.a.createElement(m.a,{exact:!0,path:"/ChangePass",component:ne}))),document.getElementById("root")),c.a.render(n.a.createElement(T,null),document.getElementById("root/home")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.cc33a1b3.chunk.js.map