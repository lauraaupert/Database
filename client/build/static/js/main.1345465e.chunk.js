(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(24),c=a.n(r),o=(a(70),a(71),a(72),a(10)),u=a(39),m=a(25),i=a(32);var s=function(){return n.a.createElement(u.a,null,n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{variant:"primary",size:"lg",block:!0,style:{backgroundColor:"lightgray",height:"400px"},href:"/newcustomer"},"New Customer"),n.a.createElement(o.a,{variant:"secondary",size:"lg",block:!0,href:"/customers"},"All Customers")),n.a.createElement(m.a,null,n.a.createElement(o.a,{variant:"primary",size:"lg",block:!0,href:"/newjob"},"New Order"),n.a.createElement(o.a,{variant:"secondary",size:"lg",block:!0},"All Orders"))))};var d=function(){return n.a.createElement(s,null)},E=a(63),h=a(7),p=a(5),f=a(102),g=a(17),b=a.n(g),v=function(e,t,a,l,n,r,c,o,u,m,i,s,d,E){return console.log(t,r,s,l),b.a.post("/api/customers",{customerID:e,firstName:t,lastName:a,cellPhone:l,homePhone:n,email:r,referral:c,county:o,confirmed:u,address:{line1:m,line2:i,city:s,state:d,zip:E}})},C=function(e,t,a,l){return console.log(e,t,a,l),b.a.post("/api/products",{group:e,name:t,code:a,price:l})},y=function(e,t,a,l,n,r){return console.log(e,t,a,l,n,r),b.a.post("/api/jobs",{jobID:e,customerID:t,date:a,serviceList:{type:l,quantity:n,total:r}})},j=function(){return b.a.get("/api/customers")},O=function(){return b.a.get("/api/products")},w=function(e,t,a){return b.a.put("/api/customers/"+e,{_id:e},{$push:{county:a}})},x=function(e){return b.a.delete("/api/products",e)};var k=function(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),u=Object(p.a)(c,2),i=u[0],s=u[1],d=Object(l.useState)(""),E=Object(p.a)(d,2),h=E[0],g=E[1],b=Object(l.useState)(""),C=Object(p.a)(b,2),y=C[0],j=C[1],O=Object(l.useState)(""),w=Object(p.a)(O,2),x=w[0],k=w[1],S=Object(l.useState)(""),L=Object(p.a)(S,2),z=L[0],G=L[1],N=Object(l.useState)(""),P=Object(p.a)(N,2),I=P[0],A=P[1],D=Object(l.useState)(""),F=Object(p.a)(D,2),R=F[0],V=F[1],B=Object(l.useState)(""),U=Object(p.a)(B,2),J=U[0],H=U[1],$=Object(l.useState)(""),K=Object(p.a)($,2),M=K[0],T=K[1],W=Object(l.useState)(""),Z=Object(p.a)(W,2),Y=Z[0],_=Z[1],q=Object(l.useState)(""),Q=Object(p.a)(q,2),X=Q[0],ee=Q[1],te=Object(l.useState)(),ae=Object(p.a)(te,2),le=ae[0],ne=ae[1];return console.log(Y),console.log(X),console.log(le),n.a.createElement(f.a,null,n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"First Name"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"First Name",onChange:function(e){return r(e.target.value)},value:a}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Last Name"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Last Name",onChange:function(e){return s(e.target.value)},value:i}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Cell Phone"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Cell Number",onChange:function(e){return g(e.target.value)},value:h}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Home Phone"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Home Number",onChange:function(e){return j(e.target.value)},value:y}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Email"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"email",placeholder:"Email",onChange:function(e){return k(e.target.value)},value:x}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Address Line 1"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Address 1",onChange:function(e){return G(e.target.value)},value:z}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"Address Line 2"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Address 2",onChange:function(e){return A(e.target.value)},value:I}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"md",md:2},"City, State, Zip"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"City",onChange:function(e){return V(e.target.value)},value:R})),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"State",onChange:function(e){return H(e.target.value)},value:J})),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"md",type:"text",placeholder:"Zip",onChange:function(e){return T(e.target.value)},value:M}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(m.a,null,n.a.createElement(f.a.Group,{controlId:"exampleForm.ControlSelect1"},n.a.createElement(f.a.Label,null,"Referral"),n.a.createElement(f.a.Control,{as:"select",onChange:function(e){ee(e.target.value)}},n.a.createElement("option",{value:"Google"},"Google"),n.a.createElement("option",{value:"Friend"},"Friend"),n.a.createElement("option",{value:"A little bird"},"A little bird"),n.a.createElement("option",{value:"Google"},"Your mom"),n.a.createElement("option",{value:"Google"},"Add New")))),n.a.createElement(m.a,null,n.a.createElement(f.a.Group,{controlId:"exampleForm.ControlSelect1"},n.a.createElement(f.a.Label,null,"County"),n.a.createElement(f.a.Control,{as:"select",onChange:function(e){_(e.target.value)}},n.a.createElement("option",{value:"Bergen"},"Bergen"),n.a.createElement("option",{value:"Middlesex"},"Middlesex"),n.a.createElement("option",{value:"California"},"New Jersey"),n.a.createElement("option",{value:"Somewhere else"},"Somewhere Else"),n.a.createElement("option",{value:"You heard me"},"Come Party")))),n.a.createElement(m.a,null,n.a.createElement(f.a.Check,{type:"switch",id:"custom-switch",label:"Confirmed Booking",onChange:function(e){ne(e.target.value)}})),"x")),n.a.createElement(o.a,{type:"submit",variant:"warning",block:!0,onClick:function(e){e.preventDefault(),v(7832,a,i,h,y,x,X,Y,le,z,I,R,J,M)}},"Save Customer")," ")},S=a(103),L=a(104),z=a(35);var G=function(){var e=Object(l.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),u=Object(p.a)(c,2),m=u[0],i=u[1],s=Object(l.useState)(""),d=Object(p.a)(s,2),E=d[0],h=d[1],g=Object(l.useState)(""),b=Object(p.a)(g,2),v=(b[0],b[1],Object(l.useState)(Number)),C=Object(p.a)(v,2),j=C[0],w=C[1],x=Object(l.useState)(""),k=Object(p.a)(x,2),S=(k[0],k[1]),L=Object(l.useState)({}),z=Object(p.a)(L,2),G=z[0],N=z[1],P=m*j,I=(1.06625*P).toFixed(2),A=(1e3*Math.random()).toFixed(0),D=new Date,F=D.getDate(),R=D.getMonth()+1,V=D.getFullYear();return F<10&&(F="0"+F),R<10&&(R="0"+R),D=V+"-"+R+"-"+F,Object(l.useEffect)((function(){O().then((function(e){console.log(e.data),r(e.data)})).catch((function(e){console.log("Error getting fake data: "+e)}))}),[]),Object(l.useEffect)((function(){w(G.price),S(G.code)}),[G]),n.a.createElement("div",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement(f.a.Control,{as:"select",custom:!0,onChange:function(e){N(a[parseFloat(e.target.value)])},style:{width:"250px"}},n.a.createElement("option",{key:"default"},"Choose a Product"),a.map((function(e,t){return n.a.createElement("option",{key:t,value:t},e.name)}))),n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("input",{style:{width:"50px"},defaultValue:1,onChange:function(e){return i(parseInt(e.target.value))},value:m})),n.a.createElement("td",{style:{width:"100px"}},"$",j),n.a.createElement("td",{style:{width:"100px"}},"$",P.toFixed(2)),n.a.createElement("td",{style:{width:"100px"}},"$",I),n.a.createElement("td",{style:{width:"200px"}},n.a.createElement("input",{type:"date",min:D,onChange:function(e){return h(e.target.value)}})),n.a.createElement("td",null,n.a.createElement(o.a,{variant:"success",type:"submit",onClick:function(e){e.preventDefault(),y(A,7832,E,G,m,I)}},"Confirm Job")),n.a.createElement("td",null,n.a.createElement(o.a,{variant:"warning",type:"submit"},"Estimate Job")))))};var N=function(){return n.a.createElement("div",null,n.a.createElement(S.a,null,n.a.createElement(L.a,null,n.a.createElement(L.a.Header,null,n.a.createElement(S.a.Toggle,{as:o.a,variant:"link",eventKey:"0"},"Add Job")),n.a.createElement(S.a.Collapse,{eventKey:"0"},n.a.createElement(L.a.Body,null,n.a.createElement(f.a,null,n.a.createElement(f.a.Row,null,n.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0},n.a.createElement(f.a.Group,{controlId:"exampleForm.SelectCustom"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{style:{width:"250px"}},"Choose Service"),n.a.createElement("th",{style:{width:"100px"}},"Quantity"),n.a.createElement("th",{style:{width:"100px"}},"Unit Price"),n.a.createElement("th",{style:{width:"100px"}},"Total"),n.a.createElement("th",{style:{width:"100px"}},"Total with Tax"),n.a.createElement("th",{style:{width:"200px"}},"Date"))),n.a.createElement(G,null),n.a.createElement(G,null),n.a.createElement(G,null))))))))),n.a.createElement(o.a,{block:!0,variant:"link",type:"button",onClick:function(e){return n.a.createElement(G,null)}},"Add Product"))};var P=function(){return n.a.createElement("div",null,n.a.createElement(k,null),n.a.createElement(N,null))};var I=function(){return n.a.createElement(u.a,null,n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(o.a,{variant:"primary",size:"lg",block:!0,style:{backgroundColor:"lightgray",height:"400px"},href:"/newcustomer"},"New Customer"),n.a.createElement(o.a,{variant:"secondary",size:"lg",block:!0},"All Customers")),n.a.createElement(m.a,null,n.a.createElement(o.a,{variant:"primary",size:"lg",block:!0,href:"/newjob"},"New Order"),n.a.createElement(o.a,{variant:"secondary",size:"lg",block:!0},"All Orders"))),n.a.createElement(i.a,null,n.a.createElement(o.a,{variant:"warning",size:"lg",href:"/admin/addproduct"},"Add Products"),n.a.createElement(o.a,{variant:"success",size:"lg",block:!0},"Order Details")))};var A=function(){return n.a.createElement(I,null)};var D=function(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),u=Object(p.a)(c,2),i=u[0],s=u[1],d=Object(l.useState)(""),E=Object(p.a)(d,2),h=E[0],g=E[1],b=Object(l.useState)(""),v=Object(p.a)(b,2),y=v[0],j=v[1];return n.a.createElement(f.a,null,n.a.createElement(f.a.Group,null,n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"lg",lg:2},"Product Group"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"lg",type:"text",placeholder:"Product Group",onChange:function(e){return r(e.target.value)},value:a}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"lg",lg:2},"Product Name"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"lg",type:"text",placeholder:"Product Name",onChange:function(e){return s(e.target.value)},value:i}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"lg",lg:2},"Product Code"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"lg",type:"text",placeholder:"Product Coder",onChange:function(e){return g(e.target.value)},value:h}))),n.a.createElement("hr",null),n.a.createElement(f.a.Row,null,n.a.createElement(f.a.Label,{column:"lg",lg:2},"Selling Price"),n.a.createElement(m.a,null,n.a.createElement(f.a.Control,{size:"lg",type:"text",placeholder:"Selling Price",onChange:function(e){return j(e.target.value)},value:y}))),n.a.createElement("hr",null)),n.a.createElement(o.a,{type:"submit",onClick:function(){C(a,i,h,y)}},"Add Product"))};var F=function(){var e=Object(l.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)([]),u=Object(p.a)(c,2),s=u[0],d=(u[1],Object(l.useState)([])),E=Object(p.a)(d,2),h=E[0];E[1],Object(l.useEffect)((function(){console.log(),O().then((function(e){console.log(e.data),r(e.data),console.log(a)})).catch((function(e){console.log("Error getting fake data: "+e)}))}),[]),console.log(a);for(var f=0;f<a.length;f++)"Upholstery"===a[f].group?s.push(a[f]):"Carpet"===a[f].group&&h.push(a[f]);function g(e){x()}return n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement("h3",null,"Carpet"),n.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Code"),n.a.createElement("th",null,"Product Name"),n.a.createElement("th",null,"Selling Price"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,h.map((function(e){return n.a.createElement("tr",{key:e.code},n.a.createElement("td",null,e.code),n.a.createElement("td",null,e.name),n.a.createElement("td",null,"$",e.price),n.a.createElement("td",null,n.a.createElement(o.a,{size:"sm",variant:"info"},"Update"),n.a.createElement(o.a,{onClick:g,style:{marginLeft:"10px"},size:"sm",variant:"danger"},"Delete")))}))))),n.a.createElement(m.a,null,n.a.createElement("h3",null,"Upholstery"),n.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product Code"),n.a.createElement("th",null,"Product Name"),n.a.createElement("th",null,"Selling Price"),n.a.createElement("th",null,"Actions"))),n.a.createElement("tbody",null,s.map((function(e){return n.a.createElement("tr",{key:e.code},n.a.createElement("td",null,e.code),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.price),n.a.createElement("td",null,n.a.createElement(o.a,{size:"sm",variant:"info"},"Update"),n.a.createElement(o.a,{style:{marginLeft:"10px"},size:"sm",variant:"danger"},"Delete")))}))))))};var R=function(){return n.a.createElement("div",null,n.a.createElement(D,null),n.a.createElement(F,null))},V=Object(l.createContext)(),B=function(e){var t=e.children,a=Object(l.useState)({}),r=Object(p.a)(a,2),c=r[0],o=r[1],u=Object(l.useState)({}),m=Object(p.a)(u,2),i=m[0];m[1];return console.log(c),console.log(i),n.a.createElement(V.Provider,{value:{currCust:c,setCurrCust:o}},t)},U=a(36);var J=function(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(""),u=Object(p.a)(c,2),s=u[0],d=u[1],E=Object(l.useContext)(V).currCust[0],h=E._id;return console.log(h,a,s),n.a.createElement(L.a,null,n.a.createElement(L.a.Body,null,n.a.createElement(f.a,null,n.a.createElement(i.a,{className:"mb-3"},n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridID"},n.a.createElement(f.a.Label,null,"Customer ID"),n.a.createElement(f.a.Control,{type:"text",defaultValue:E.customerID,placeholder:"Enter ID"})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridFirst"},n.a.createElement(f.a.Label,null,"First Name"),n.a.createElement(f.a.Control,{type:"text",defaultValue:E.firstName})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridLast"},n.a.createElement(f.a.Label,null,"Last Name"),n.a.createElement(f.a.Control,{onChange:function(e){return r(e.target.value)},type:"text",defaultValue:E.lastName}))),n.a.createElement(i.a,{className:"mb-3"},n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridEmail"},n.a.createElement(f.a.Label,null,"Email"),n.a.createElement(f.a.Control,{type:"email",defaultValue:E.email})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridCounty"},n.a.createElement(f.a.Label,null,"County"),n.a.createElement(f.a.Control,{onChange:function(e){return d(e.target.value)},type:"text",defaultValue:E.county}))),n.a.createElement(i.a,null,n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridPhone"},n.a.createElement(f.a.Label,null,"Cell Phone"),n.a.createElement(f.a.Control,{type:"text",defaultValue:E.cellPhone})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridPhone"},n.a.createElement(f.a.Label,null,"Home Phone"),n.a.createElement(f.a.Control,{type:"text",defaultValue:E.homePhone}))),n.a.createElement(f.a.Group,{className:"mb-3",controlId:"formGridAddress1"},n.a.createElement(f.a.Label,null,"Address"),n.a.createElement(f.a.Control,{defaultValue:E.address.line1})),n.a.createElement(f.a.Group,{className:"mb-3",controlId:"formGridAddress2"},n.a.createElement(f.a.Label,null,"Address 2"),n.a.createElement(f.a.Control,{defaultValue:E.address.line2})),n.a.createElement(i.a,{className:"mb-3"},n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridCity"},n.a.createElement(f.a.Label,null,"City"),n.a.createElement(f.a.Control,{defaultValue:E.address.city})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridState"},n.a.createElement(f.a.Label,null,"State"),n.a.createElement(f.a.Control,{defaultValue:E.address.state})),n.a.createElement(f.a.Group,{as:m.a,controlId:"formGridZip"},n.a.createElement(f.a.Label,null,"Zip"),n.a.createElement(f.a.Control,{defaultValue:E.address.zip})))),n.a.createElement(o.a,{onClick:function(e){e.preventDefault(),w(h,a,s),console.log(a,s)},type:"submit",variant:"info"},"Update Info")))};var H=function(){var e=Object(l.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],c=function(){return r(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{variant:"info",onClick:function(){r(!0)}},"Update"),n.a.createElement(U.a,{show:a,onHide:c,backdrop:"static",keyboard:!1,centered:!0,size:"lg"},n.a.createElement(U.a.Header,{closeButton:!0},n.a.createElement(U.a.Title,null,"Update Customer Details")),n.a.createElement(J,null),n.a.createElement(U.a.Footer,null,n.a.createElement(o.a,{variant:"secondary",onClick:c},"Close"),n.a.createElement(o.a,{variant:"primary"},"Understood"))))};var $=function(){var e=Object(l.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],c=Object(l.useState)(a),u=Object(p.a)(c,2),s=u[0],d=u[1],E=Object(l.useContext)(V);function h(e){x()}return Object(l.useEffect)((function(){console.log(),j().then((function(e){console.log(e.data),r(e.data),d(e.data),console.log(a)})).catch((function(e){console.log("Error getting fake data: "+e)}))}),[]),console.log(a),console.log(s),n.a.createElement("div",null,n.a.createElement(f.a,null,n.a.createElement(i.a,null,n.a.createElement(m.a,{lg:11},n.a.createElement(f.a.Group,{controlId:"formBasicEmail"},n.a.createElement(f.a.Control,{type:"name",placeholder:"Search",onChange:function(e){return function(e){var t=e.target.value,l=[];if(console.log(t),l=a.filter((function(e){return-1!==e.firstName.search(t)})),console.log(l),l.length<1){l=a.filter((function(e){return-1!==e.lastName.search(t)}))}if(l.length<1){l=a.filter((function(e){return-1!==e.address.city.search(t)}))}if(l.length<1){l=a.filter((function(e){return-1!==e.address.zip.toString().search(parseFloat(t))}))}if(l.length<1){l=a.filter((function(e){return-1!==e.customerID.toString().search(parseFloat(t))}))}if(l.length<1){l=a.filter((function(e){return-1!==e.email.search(t)}))}console.log(l),d(l),E.setCurrCust(l)}(e)}}))),n.a.createElement(m.a,{lg:1},n.a.createElement(o.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault()},block:!0},"Search")))),s.length>0?n.a.createElement(z.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Customer ID"),n.a.createElement("th",null,"Customer Name"),n.a.createElement("th",null,"Cell Phone"),n.a.createElement("th",null,"Home Phone"),n.a.createElement("th",null,"Email"),n.a.createElement("th",null,"Address"),n.a.createElement("th",null,"Jobs"))),n.a.createElement("tbody",null,s.map((function(e){return n.a.createElement("tr",{key:e._id},n.a.createElement("td",null,e.customerID),n.a.createElement("td",null,e.lastName,", ",e.firstName),n.a.createElement("td",null,e.cellPhone),n.a.createElement("td",null,e.homePhone),n.a.createElement("td",null,e.email),n.a.createElement("td",null,e.address.line1,", ",e.address.line2,", ",e.address.city,", ",e.address.state,", ",e.address.zip),n.a.createElement("td",null,e.jobs),n.a.createElement("td",null,n.a.createElement(H,null),n.a.createElement(o.a,{onClick:h,style:{marginLeft:"10px"},size:"sm",variant:"danger"},"Delete")))})))):n.a.createElement("div",null,n.a.createElement("p",null,"Please register this new customer."),n.a.createElement(k,null)))};var K=function(){return n.a.createElement($,null)},M=a(21);var T=function(){return n.a.createElement(M.a,{className:"justify-content-center",fill:!0,style:{backgroundColor:"light-blue"},variant:"pills"},n.a.createElement(M.a.Item,null,n.a.createElement(M.a.Link,{href:"/home"},"Menu")),n.a.createElement(M.a.Item,null,n.a.createElement(M.a.Link,{eventKey:"link-1",href:"/customers"},"Customers")),n.a.createElement(M.a.Item,null,n.a.createElement(M.a.Link,{eventKey:"link-2",href:"/jobs"},"Jobs")),n.a.createElement(M.a.Item,null,n.a.createElement(M.a.Link,{eventKey:"disabled",disabled:!0},"Disabled")))};var W=function(){return n.a.createElement("div",null,n.a.createElement(T,null),n.a.createElement(B,null,n.a.createElement(L.a,{style:{margin:"10px"}},n.a.createElement(L.a.Body,null,n.a.createElement(E.a,null,n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:["/","/home"]},n.a.createElement(d,null)),n.a.createElement(h.a,{exact:!0,path:["/newcustomer"]},n.a.createElement(P,null)),n.a.createElement(h.a,{exact:!0,path:["/customers"]},n.a.createElement(K,null)),n.a.createElement(h.a,{exact:!0,path:["/admin"]},n.a.createElement(A,null)),n.a.createElement(h.a,{exact:!0,path:["/admin/addproduct"]},n.a.createElement(R,null))))))))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(99);c.a.render(n.a.createElement(W,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");Z?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Y(e)}))}}()},65:function(e,t,a){e.exports=a(100)},70:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/logo.495d93cc.svg"},72:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.1345465e.chunk.js.map