(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"077c":function(e,t,n){e.exports=n.p+"img/excel.c59164de.svg"},"09f3":function(e,t,n){"use strict";n("6f31")},"0d3b":function(e,t,n){},"0f00":function(e,t,n){e.exports=n.p+"img/warning.184b1553.svg"},"172f":function(e,t,n){},"27c6":function(e,t,n){e.exports=n.p+"img/newFolder.114a26be.svg"},"3d1f":function(e,t,n){},"4c56":function(e,t,n){e.exports=n.p+"img/ppt.0e97c564.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=(n("a15b"),function(e){return Object(r["v"])("data-v-7588aee7"),e=e(),Object(r["t"])(),e}),a={class:"container flex"},o={class:"container flex flex--column"},c=i((function(){return Object(r["h"])("span",{class:"title center"},"YOUR HOME CLOUD",-1)})),l={ref:"dropzone",class:"container"};function s(e,t,n,i,s,u){var d=Object(r["A"])("SideBar"),f=Object(r["A"])("BreadCrumb"),p=Object(r["A"])("FilesAndFolders"),b=Object(r["A"])("Modal"),m=Object(r["A"])("Dropzone"),h=Object(r["A"])("ContextMenu");return Object(r["s"])(),Object(r["g"])("div",a,[(Object(r["s"])(),Object(r["e"])(d,{key:"key-".concat(s.sideBarId),fileName:s.sidebarFileName,fileSize:s.sidebarFileSize,disabled:s.sidebarDownloadDisabled,onClickedItem:u.clickedItem},null,8,["fileName","fileSize","disabled","onClickedItem"])),Object(r["h"])("main",o,[c,Object(r["j"])(f,{navigationPath:s.relativePath,onNavigationLinkClicked:u.updateNavigation},null,8,["navigationPath","onNavigationLinkClicked"]),Object(r["j"])(p,{files:s.files,folders:s.folders,onClickedFolder:u.navigateFolder,onDownloadFile:u.downloadFile,onFileClicked:u.fileClicked,onContextMenuInvoked:u.ctxmenu},null,8,["files","folders","onClickedFolder","onDownloadFile","onFileClicked","onContextMenuInvoked"]),s.showModal?(Object(r["s"])(),Object(r["e"])(b,{key:0,onCancel:t[0]||(t[0]=function(e){return s.showModal=!1}),onOk:u.newFolder},null,8,["onOk"])):Object(r["f"])("",!0),Object(r["h"])("div",l,[Object(r["j"])(m,{currentPath:s.relativePath.join("/"),onFinishedUpload:u.finishedUpload,ref:"myDropzone"},null,8,["currentPath","onFinishedUpload"])],512),(Object(r["s"])(),Object(r["e"])(h,{menu:s.options,show:s.ctxshow,x:s.ctxX,y:s.ctxY,onClickedItem:u.ctxClick,key:"ctx-".concat(s.contextMenuKey)},null,8,["menu","show","x","y","onClickedItem"]))])])}var u=n("1da1");n("a434"),n("96cf");function d(e,t,n,i,a,o){var c=Object(r["A"])("sidebar-menu");return Object(r["s"])(),Object(r["e"])(c,{width:a.width,menu:a.menu,collapsed:a.collapsed,relative:!0,"link-component-name":"custom-link",onItemClick:o.clicked},null,8,["width","menu","collapsed","onItemClick"])}n("4de4"),n("d3b7"),n("b680"),n("159b");var f=n("2ab6"),p=(n("b15b"),{newFolder:n("27c6"),upload:n("c118"),download:n("6369"),delete:n("d739")}),b={name:"SideBar",components:{SidebarMenu:f["a"]},props:["fileName","fileSize","disabled"],watch:{fileName:function(){var e=this.menu.filter((function(e){return"FileName"===e.id}))[0],t=this.menu.filter((function(e){return"FileSize"===e.id}))[0],n=null===this.fileSize?"Not Selected":this.fileSize>1e3?(this.fileSize/1e3).toFixed(2)+"mb":this.fileSize+"kb";t.title="File Size: ".concat(n),e.title="File Name: ".concat(null===this.fileName?"Not Selected":this.fileName),e.attributes.title="".concat(null===this.fileName?"Not Selected":this.fileName)},disabled:function(){var e=this,t=this.menu.filter((function(e){return"Download"===e.id||"Delete"===e.id}));t.forEach((function(t){return t.disabled=e.disabled}))}},methods:{clicked:function(e,t){e.preventDefault(),this.$emit("clicked-item",t)}},data:function(){return{width:"290px",widthCollapsed:"50px",collapsed:!1,menu:[{header:"Cloud Options",hiddenOnCollapse:!0},{title:"New Folder",icon:{element:"img",attributes:{src:p.newFolder,style:"background-color: transparent"}}},{title:"Upload",icon:{element:"img",attributes:{src:p.upload,style:"background-color: transparent"}}},{header:"File Properties",hiddenOnCollapse:!0},{id:"FileName",title:"File Name: ".concat(null===this.fileName?"Not Selected":this.fileName),attributes:{title:"".concat(null===this.fileName?"Not Selected":this.fileName)}},{id:"FileSize",title:"File Size: ".concat(null===this.fileSize?0:this.fileSize)},{id:"Download",title:"Download",icon:{element:"img",attributes:{src:p.download,style:"background-color: transparent"}},disabled:this.disabled},{id:"Delete",title:"Delete",icon:{element:"img",attributes:{src:p.delete,style:"background-color: transparent"}},disabled:this.disabled}]}}},m=n("6b0d"),h=n.n(m);const v=h()(b,[["render",d]]);var g=v,j=(n("caad"),n("abfe")),O=n.n(j),x=n("ae1a"),k=n.n(x),w=n("9b17"),F=n.n(w),y=n("077c"),C=n.n(y),N=n("4c56"),P=n.n(N),z=n("89fb"),R=n.n(z),D=n("de47"),S=n.n(D),M=n("ea8d"),A=n.n(M),U=n("7373"),I=n.n(U),_=n("0f00"),L=n.n(_),E=function(e){return Object(r["v"])("data-v-ff57db00"),e=e(),Object(r["t"])(),e},$={class:"container--files-folders"},B={class:"grid"},K=["onClick","onContextmenu"],Y=E((function(){return Object(r["h"])("img",{src:O.a,alt:"Folder",class:"icon icon--folder"},null,-1)})),H={class:"grid"},T=["onClick"],X={key:0,src:k.a,class:"icon--file",alt:"txt file"},J={key:1,src:F.a,class:"icon--file",alt:"pdf file"},G={key:2,class:"icon--file",src:C.a,alt:"excel file"},V={key:3,class:"icon--file",src:P.a},q={key:4,class:"icon--file",src:R.a,alt:"image file"},Q={key:5,class:"icon--file",src:S.a},W={key:6,class:"icon--file",src:A.a,alt:"video file"},Z={key:7,class:"icon--file",src:I.a,alt:"music file"},ee={key:8,src:L.a,class:"icon--file"};function te(e,t,n,i,a,o){var c=this;return Object(r["s"])(),Object(r["g"])("div",$,[Object(r["h"])("article",B,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.folders,(function(e,t){return Object(r["s"])(),Object(r["g"])("figure",{key:"Folder-".concat(t),onClick:function(t){return o.navigateFolder(e)},onContextmenu:Object(r["H"])((function(t){return c.$emit("context-menu-invoked",e,t)}),["prevent"])},[Y,Object(r["h"])("figcaption",null,Object(r["C"])(e),1)],40,K)})),128))]),Object(r["h"])("article",H,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.files,(function(e,t){return Object(r["s"])(),Object(r["g"])("figure",{key:"File-".concat(t),ref_for:!0,ref:"File-".concat(t),class:"file-padding",onClick:[Object(r["H"])((function(t){return c.$emit("download-file",e.fileName)}),["ctrl","exact"]),Object(r["H"])((function(n){return o.fileClicked(t,e.fileName,e.fileSize)}),["exact"])]},[".txt"===e.fileExtension?(Object(r["s"])(),Object(r["g"])("img",X)):".pdf"===e.fileExtension?(Object(r["s"])(),Object(r["g"])("img",J)):".xlsx"===e.fileExtension||".xls"===e.fileExtension?(Object(r["s"])(),Object(r["g"])("img",G)):".pptx"===e.fileExtension||".ppt"===e.fileExtension?(Object(r["s"])(),Object(r["g"])("img",V)):[".png",".jpeg",".jpg",".svg",".gif"].includes(e.fileExtension)?(Object(r["s"])(),Object(r["g"])("img",q)):[".docx",".doc"].includes(e.fileExtension)?(Object(r["s"])(),Object(r["g"])("img",Q)):[".mp4",".mov",".mkv",".webm"].includes(e.fileExtension)?(Object(r["s"])(),Object(r["g"])("img",W)):[".mp3"].includes(e.fileExtension)?(Object(r["s"])(),Object(r["g"])("img",Z)):(Object(r["s"])(),Object(r["g"])("img",ee)),Object(r["h"])("figcaption",null,Object(r["C"])(e.fileName),1)],8,T)})),128))])])}var ne={name:"FilesAndFolders",props:{files:Array,folders:Array},data:function(){return{}},methods:{navigateFolder:function(e){this.$emit("clicked-folder",e)},fileClicked:function(e,t,n){this.$emit("file-clicked",t,n)}}};n("a166");const re=h()(ne,[["render",te],["__scopeId","data-v-ff57db00"]]);var ie=re,ae={class:"container margin-center"},oe=["onClick"];function ce(e,t,n,i,a,o){var c=this;return Object(r["s"])(),Object(r["g"])("section",ae,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.navigationPath,(function(e,t){return Object(r["s"])(),Object(r["g"])("span",{class:"nav-item",onClick:function(n){return c.$emit("navigation-link-clicked",e,t)},key:"nav-".concat(t)},Object(r["C"])(e)+" >  ",9,oe)})),128))])}var le={name:"BreadCrumb",props:["navigationPath"]};n("09f3");const se=h()(le,[["render",ce],["__scopeId","data-v-6c48f9d4"]]);var ue=se,de=function(e){return Object(r["v"])("data-v-7a53ea47"),e=e(),Object(r["t"])(),e},fe={class:"modal-mask"},pe={class:"modal-wrapper"},be={class:"modal-container"},me=de((function(){return Object(r["h"])("div",{class:"modal-header"}," New folder name ",-1)})),he={class:"modal-body"},ve={type:"text",name:"foldername",id:"foldername",ref:"foldername"},ge={class:"container--buttons"};function je(e,t,n,i,a,o){var c=this;return Object(r["s"])(),Object(r["e"])(r["b"],{name:"modal"},{default:Object(r["G"])((function(){return[Object(r["h"])("div",fe,[Object(r["h"])("div",pe,[Object(r["h"])("div",be,[me,Object(r["h"])("div",he,[Object(r["h"])("input",ve,null,512)]),Object(r["h"])("span",ge,[Object(r["h"])("button",{class:"modal-default-button",onClick:t[0]||(t[0]=function(e){return c.$emit("ok",c.$refs.foldername.value)})}," OK "),Object(r["h"])("button",{class:"modal-default-button",onClick:t[1]||(t[1]=function(e){return c.$emit("cancel")})}," Cancel ")])])])])]})),_:1})}var Oe={name:"Modal"};n("6375");const xe=h()(Oe,[["render",je],["__scopeId","data-v-7a53ea47"]]);var ke=xe,we={class:"dropzone-container center"},Fe=["action"],ye=["value"];function Ce(e,t,n,i,a,o){return Object(r["s"])(),Object(r["g"])("section",we,[(Object(r["s"])(),Object(r["g"])("form",{action:a.uploadURL,class:"dropzone drop-area",enctype:"multipart/form-data",id:"myDropzone",ref:"myDropzone",key:"dz-".concat(a.dropzoneKey)},[Object(r["h"])("input",{type:"hidden",name:"relPath",value:n.currentPath},null,8,ye)],8,Fe)),Object(r["h"])("button",{class:"finish-button",onClick:t[0]||(t[0]=function(){return o.finishUpload&&o.finishUpload.apply(o,arguments)})},"Finish Upload")])}var Ne=n("d4ec"),Pe=n("bee2"),ze=(n("99af"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("bc3a")),Re=n.n(ze),De=n("df7c");Re.a.defaults.baseURL=window.location.origin;var Se=function(){function e(){Object(Ne["a"])(this,e)}return Object(Pe["a"])(e,null,[{key:"FilesAndFolders",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get("gets/files-and-folders",{params:{relPath:t}});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"downloadFile",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t,n);try{r=Object.assign(document.createElement("a"),{href:"".concat(Re.a.defaults.baseURL,"/gets/download-file?relPath=").concat(De["join"](t,n))}),r.download=n,r.click()}catch(i){console.log(i)}case 2:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"downloadFolder",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){var r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.get("gets/download-folder",{responseType:"arraybuffer",params:{relPath:t,folderName:n}});case 3:r=e.sent,i=new Blob([r.data]),a=document.createElement("a"),a.href=window.URL.createObjectURL(i),a.download=n+".zip",a.click(),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"createFolder",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Re.a.post("posts/create/folder",{relPath:t,folderName:n});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"uploadURL",value:function(){return"posts/upload"}},{key:"deleteFolder",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,n),e.prev=1,e.next=4,Re.a.delete("deletes/folder",{params:{relPath:t,folderName:n}});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"deleteFile",value:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,n),e.prev=1,e.next=4,Re.a.delete("deletes/file",{params:{relPath:t,fileName:n}});case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));function t(t,n){return e.apply(this,arguments)}return t}()}]),e}(),Me=n("79e3");console.log(Me),Me.autoDiscover=!0;var Ae={name:"Dropzone",props:["currentPath"],data:function(){return{uploadURL:Se.uploadURL(),dropzoneKey:0}},mounted:function(){this.dropconfig()},methods:{finishUpload:function(){this.$refs.myDropzone.dropzone.removeAllFiles(),this.$emit("finishedUpload")},dropconfig:function(){Me.Dropzone.options.myDropzone={maxFilesize:6e4}}}};n("bd09");const Ue=h()(Ae,[["render",Ce],["__scopeId","data-v-0a9c822c"]]);var Ie=Ue,_e={key:0},Le=["onClick"];function Ee(e,t,n,i,a,o){return Object(r["s"])(),Object(r["g"])("section",{style:Object(r["p"])(o.styleCtx),onMouseleave:t[0]||(t[0]=function(){return o.mouseLeave&&o.mouseLeave.apply(o,arguments)}),class:"container--ctx-menu"},[n.show&&a.active?(Object(r["s"])(),Object(r["g"])("ul",_e,[(Object(r["s"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(n.menu,(function(e,t){return Object(r["s"])(),Object(r["g"])("li",{key:"ctx-item-".concat(t),onClick:function(t){return o.sendClick(e)}},Object(r["C"])(e),9,Le)})),128))])):Object(r["f"])("",!0)],36)}n("a9e3");var $e={name:"ContextMenu",props:{menu:Array,show:{type:Boolean,default:!1},x:Number,y:Number},data:function(){return{active:!0}},computed:{styleCtx:function(){return{"--top":this.y+"px","--left":this.x+"px"}}},methods:{mouseLeave:function(){this.active=!1},sendClick:function(e){this.$emit("clickedItem",e),this.mouseLeave()}}};n("bc5d");const Be=h()($e,[["render",Ee],["__scopeId","data-v-ac7df292"]]);var Ke=Be,Ye={name:"App",components:{BreadCrumb:ue,SideBar:g,FilesAndFolders:ie,Modal:ke,Dropzone:Ie,ContextMenu:Ke},data:function(){return{relativePath:["."],sidebarFileName:null,sidebarFileSize:null,sidebarDownloadDisabled:!0,sideBarId:0,files:[],folders:[],showModal:!1,options:["Delete Folder","Download Folder"],ctxX:0,ctxY:0,ctxshow:!1,ctxMenuFolder:"",contextMenuKey:0}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Se.FilesAndFolders(".");case 2:n=t.sent,e.files=n.data.files,e.folders=n.data.folders;case 5:case"end":return t.stop()}}),t)})))()},methods:{getFilesAndFolders:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Se.FilesAndFolders(e);case 2:r=n.sent,t.files=r.data.files,t.folders=r.data.folders,t.sidebarFileName=null,t.sidebarFileSize=null,t.sidebarDownloadDisabled=!0;case 8:case"end":return n.stop()}}),n)})))()},navigateFolder:function(e){this.relativePath.push(e);var t=this.relativePath.join("/");this.getFilesAndFolders(t)},downloadFile:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.relativePath.join("/"),n.next=3,Se.downloadFile(r,e);case 3:case"end":return n.stop()}}),n)})))()},updateNavigation:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.relativePath[t]===e&&n.relativePath.splice(t+1),i=n.relativePath.join("/"),r.next=4,n.getFilesAndFolders(i);case 4:case"end":return r.stop()}}),r)})))()},fileClicked:function(e,t){this.sidebarFileName=e,this.sidebarFileSize=t,this.sidebarDownloadDisabled=!1,console.log(this.sidebarFileName)},newFolder:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.relativePath.join("/"),n.next=3,Se.createFolder(r,e);case 3:return t.showModal=!1,n.next=6,t.getFilesAndFolders(r);case 6:case"end":return n.stop()}}),n)})))()},clickedItem:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.t0=e.title,n.next="New Folder"===n.t0?3:"Upload"===n.t0?5:"Download"===n.t0?8:"Delete"===n.t0?12:19;break;case 3:return t.showModal=!0,n.abrupt("break",19);case 5:return r=t.$refs["dropzone"],r.scrollIntoView({behavior:"smooth"}),n.abrupt("break",19);case 8:return i=t.relativePath.join("/"),n.next=11,Se.downloadFile(i,t.sidebarFileName);case 11:return n.abrupt("break",19);case 12:return a=t.relativePath.join("/"),o=t.sidebarFileName,n.next=16,Se.deleteFile(a,o);case 16:return n.next=18,t.getFilesAndFolders(a);case 18:return n.abrupt("break",19);case 19:case"end":return n.stop()}}),n)})))()},finishedUpload:function(){this.getFilesAndFolders(this.relativePath.join("/"))},ctxmenu:function(e,t){this.ctxX=t.clientX,this.ctxY=t.clientY,this.ctxshow=!0,this.ctxMenuFolder=e,this.contextMenuKey++},ctxClick:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:n.t0=e,n.next="Delete Folder"===n.t0?3:"Download Folder"===n.t0?11:15;break;case 3:if(!confirm("Are you sure you want delete ".concat(t.ctxMenuFolder,".\n                        \nThis will delete all its contents!❗❗"))){n.next=10;break}return n.next=6,Se.deleteFolder(t.relativePath.join("/"),t.ctxMenuFolder);case 6:return n.next=8,t.getFilesAndFolders(t.relativePath.join("/"));case 8:n.next=10;break;case 10:return n.abrupt("break",15);case 11:return console.log(),n.next=14,Se.downloadFolder(t.relativePath.join("/"),t.ctxMenuFolder);case 14:return n.abrupt("break",15);case 15:case"end":return n.stop()}}),n)})))()}}};n("6a9d"),n("ba63");const He=h()(Ye,[["render",s],["__scopeId","data-v-7588aee7"]]);var Te=He,Xe=Object(r["d"])(Te);Xe.use(f["b"]);var Je={name:"CustomLink",props:["item"],render:function(){return Object(r["l"])("a",this.$slots.default())}};Xe.component("custom-link",Je),Xe.mount("#app")},6369:function(e,t,n){e.exports=n.p+"img/download.e8b45006.svg"},6375:function(e,t,n){"use strict";n("172f")},6894:function(e,t,n){},"6a9d":function(e,t,n){"use strict";n("6894")},"6f31":function(e,t,n){},7373:function(e,t,n){e.exports=n.p+"img/music.90514e8c.svg"},"89fb":function(e,t,n){e.exports=n.p+"img/image.48de2d64.svg"},"92a7":function(e,t,n){},"9b17":function(e,t,n){e.exports=n.p+"img/pdf.cb7648e7.svg"},a166:function(e,t,n){"use strict";n("0d3b")},abfe:function(e,t,n){e.exports=n.p+"img/folder.dc22a481.svg"},ae1a:function(e,t,n){e.exports=n.p+"img/txt.9469e4ed.svg"},ba63:function(e,t,n){"use strict";n("eaae")},bc5d:function(e,t,n){"use strict";n("92a7")},bd09:function(e,t,n){"use strict";n("3d1f")},c118:function(e,t,n){e.exports=n.p+"img/upload.70153fb1.svg"},d739:function(e,t,n){e.exports=n.p+"img/delete.11bf86fb.svg"},de47:function(e,t,n){e.exports=n.p+"img/word.113ac212.svg"},ea8d:function(e,t,n){e.exports=n.p+"img/video.2f6ed3a3.svg"},eaae:function(e,t,n){}});
//# sourceMappingURL=app.adc40536.js.map