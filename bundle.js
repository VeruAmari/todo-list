(()=>{"use strict";var t={426:(t,e,o)=>{o.d(e,{Z:()=>a});var i=o(81),n=o.n(i),s=o(645),r=o.n(s)()(n());r.push([t.id,':root {\n  /* Variables */\n  --color-1: #6b4677;\n  --color-2: #fdf7ff;\n  --color-3: #a781b3;\n  --color-4: #f3dcfa;\n  --border-radius: 7px;\n}\n\n* {\n  padding: 0px;\n  margin: 0px;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n  grid-template-columns: 1fr;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n.inner-container {\n  display: grid;\n  grid-template-rows: 50%;\n  grid-template-columns: repeat(auto-fit, minmax(270px,1fr));\n  overflow-y: scroll;\n  background-color: var(--color-2);\n  gap: .5rem;\n  padding: .5rem;\n}\n\nbutton,\n.checklist-item-container,\n.todo-container,\n.todos,\n.project-container{\n  border-radius: var(--border-radius);\n}\n.container,\n.checklist {\n  gap: .5rem;\n}\n.project-container {\n  display: grid;\n  grid-template-rows: 2rem;\n  padding: .5rem;\n  background-color: var(--color-1);\n}\n.todos.container,\n.todo.checklist {\n  display: grid;\n  overflow-y: scroll;\n}\n.todo-container {\n  display: grid;\n  padding: .5rem;\n  background-color: var(--color-4);\n  gap: 1rem;\n}\n.checklist-item-container {\n  display: grid;\n  padding: .5rem;\n  background-color: var(--color-3);\n}\n.todo-container.form,\n.checklist-item-container.form,\n.project-container.form {\n  order: 9999;\n}\n.checklist-item-container.form,\n.project-container.form {\n  gap: .5rem;\n}\nfooter, header{\n  min-height: 3rem;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-1);\n  color: var(--color-2);\n}\n.title.container {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  height: fit-content;\n  color: var(--color-4);\n}\n.todo {\n  color: var(--color-1);\n}\nbutton {\n  font-size: large;\n  border: 0px;\n  padding-left: .3rem;\n  padding-right: .3rem;\n  display: grid;\n  align-items: center;\n  justify-content: center;\n  max-height: 2rem;\n  color: var(--color-1);\n  background-color: var(--color-2);\n}\nbutton:hover,\na:hover {\n  background-color: var(--color-4);\n  color: var(--color-1);\n}\nheader {\n  justify-content: space-around;\n  grid-template-columns: auto auto;\n}\n.title {\n  align-items: center;\n}\n.todo.title.container.form::before{\n  content: "Title";\n  border-bottom: 2px dotted var(--color-1);\n}\n.description::before{\n  content: "Description";\n  border-bottom: 2px dotted var(--color-1);\n}\n.due::before{\n  content: "Due";\n  border-bottom: 2px dotted var(--color-1);\n}\n.priority::before{\n  content: "Priority";\n  border-bottom: 2px dotted var(--color-1);\n}\n.notes::before{\n  content: "Notes";\n  border-bottom: 2px dotted var(--color-1);\n}\na {\n  display: grid;\n  align-items: center;\n  text-decoration: none;\n  color: var(--color-2);\n  height: 100%;\n}\n.links {\n  height: 100%;\n  display: grid;\n  grid-template-columns: auto auto auto auto;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}\n.todo.description,\n.todo.notes,\n.todo.due,\n.todo.priority,\n.todo.title{\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr;\n  color: var(--color-1);\n}\ninput,\ntextarea{\n  border: 0px;\n  border-radius: var(--border-radius);\n  min-height: 2rem;\n  padding-left: .5rem;\n}',""]);const a=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",i=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),i&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),i&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,i,n,s){"string"==typeof t&&(t=[[null,t,void 0]]);var r={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(r[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);i&&r[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,i=0;i<e.length;i++)if(e[i].identifier===t){o=i;break}return o}function i(t,i){for(var s={},r=[],a=0;a<t.length;a++){var c=t[a],l=i.base?c[0]+i.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=o(u),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var h=n(g,i);i.byIndex=a,e.splice(a,0,{identifier:u,updater:h,references:1})}r.push(u)}return r}function n(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,n){var s=i(t=t||[],n=n||{});return function(t){t=t||[];for(var r=0;r<s.length;r++){var a=o(s[r]);e[a].references--}for(var c=i(t,n),l=0;l<s.length;l++){var d=o(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},569:t=>{var e={};t.exports=function(t,o){var i=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var i="";o.supports&&(i+="@supports (".concat(o.supports,") {")),o.media&&(i+="@media ".concat(o.media," {"));var n=void 0!==o.layer;n&&(i+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),i+=o.css,n&&(i+="}"),o.media&&(i+="}"),o.supports&&(i+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={id:i,exports:{}};return t[i](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nc=void 0,(()=>{var t=o(379),e=o.n(t),i=o(795),n=o.n(i),s=o(569),r=o.n(s),a=o(565),c=o.n(a),l=o(216),d=o.n(l),u=o(589),p=o.n(u),g=o(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=r().bind(null,"head"),h.domAPI=n(),h.insertStyleElement=d(),e()(g.Z,h),g.Z&&g.Z.locals&&g.Z.locals;class m{#t;#e;#o;#i;constructor(t,e,o,i){console.log("Creating new Project: "+t),e||0===e?(this.#t=e,console.log("project ID#",e,"provided."),m.id=e):(console.log("No Project ID# provided, creating new ID#",m.id),this.#t=m.id),m.id++,console.log("Project.id is now set to",m.id),this.#e=t||"-",this.#o=o||!1,this.#i=i||[]}static id=0;getTitle=()=>this.#e;getStatus=()=>this.#o;getTodoList=()=>this.#i;getID=()=>this.#t;setTitle=t=>{this.#e=t,console.log(this.#e)};addTodo=t=>{this.#i.push(t),console.log("To-do"+t+"added successfully.")};toggleStatus=()=>{this.#o=!this.#o};removeTodo=t=>{console.log("Removing Todo-list-item "+t);const e=this.#i.indexOf(t);this.#i.splice(e,1)}}class f{#t;#n;#e;#s;#r;#a;#c;#l;#o;constructor(t,e,o,i,n,s,r,a,c){this.#t,r||0===r?(console.log("Retrieving existing Todo id#"+r),this.#t=r,f.id=r):(console.log("Creating new Todo id#"+r),this.#t=f.id),f.id++,this.#n=s,this.#e=t||"-",this.#s=e||"-",this.#r=o?this.setDue(o):"--/--/----",this.#a=this.setPriority(i),this.#c=n||"-",this.#l=a||[],this.#o=c||!1}static id=0;getTitle=()=>this.#e;getDescription=()=>this.#s;getDue=()=>this.#r;getPriority=()=>this.#a;getNotes=()=>this.#c;getStatus=()=>this.#o;getChecklist=()=>this.#l;getID=()=>this.#t;getProjectId=()=>this.#n;setTitle=t=>{this.#e=t};setDescription=t=>{this.#s=t};setDue=t=>(this.#r=t,t);setPriority=t=>(t=Number(t),console.log("Debugging, logging newPriority",t),t=(t=(t="NaN"==typeof t?0:t)<0?0:t)>3?3:t,this.#a=t,t);setNotes=t=>{this.#c=t};addChecklistItem=t=>{this.#l.push(t)};removeChecklistItem=t=>{console.log("Removing checklist-item "+t);const e=this.#l.indexOf(t);this.#l.splice(e,1)};toggleStatus=()=>{this.#o=!this.#o}}class D{#t;#n;#e;#o;constructor(t,e,o,i){o||0===o?(this.#t=o,D.id=o):this.#t=D.id,D.id++,this.#n=e,this.#e=t||" ",this.#o=i||!1}static id=0;getTitle=()=>this.#e;getStatus=()=>this.#o;getID=()=>this.#t;getTodoID=()=>this.#n;setTitle=t=>{this.#e=t};toggleStatus=()=>{this.#o=!this.#o}}class v{constructor(t,e){this._ID=t,this._divID,this._title,this._status,this._del=this._makeDelete(),this._statusBool=e,this._titleContainer,this._type}updateTitle(t){this._title.textContent=t}toggleStatus(){this._statusBool=!this._statusBool,this._statusBool?this._status.textContent="✔️":this._status.textContent="⭕",this._status.classList.toggle("complete"),this._status.classList.toggle("in-progress")}_makeTitle(t,e){const o=document.createElement("span");return o.classList.add(t,"title"),o.textContent=e,o}_makeDelete(){const t=document.createElement("button");return t.classList.add("delete"),t.textContent="x",t}_makeStatus(t,e){const o=document.createElement("button");return o.classList.add(t,"status-btn"),e?(o.classList.add("complete"),o.textContent="✔️"):(o.classList.add("in-progress"),o.textContent="⭕"),o}_makeTitleContainer(t,e,o){const i=document.createElement("div");return i.classList.add(t,"title","container"),i.appendChild(this._del),i.appendChild(e),i.appendChild(o),i}_makeContainer(t,e,...o){const i=document.createElement("div");return i.id=t,i.classList.add(e+"-container"),o.forEach((t=>{i.appendChild(t)})),i}getdID=()=>this._divID;getStatus=()=>this._status;getTitle=()=>this._title;getDel=()=>this._del}class I extends v{#d;#u;constructor(t,e,o){console.log("Starting UIProject #"+t+" creation."),super(t,o),this._type="project",this._title=this._makeTitle(this._type,e),this._divID=this._type+"-"+this._ID,this._status=this._makeStatus(this._type,this._statusBool),this._titleContainer=this._makeTitleContainer(this._type,this._title,this._status),this.#d=this.#p(),this.#u=this._makeContainer(this._divID,this._type,this._titleContainer,this.#d),this.#g(),console.log("UIProject #"+t+" creation successful.")}#p(){const t=document.createElement("div");return t.classList.add("todos","container"),t}#g(){document.querySelector(".body.inner-container").appendChild(this.#u)}appendTodo(t){this.#d.appendChild(t)}getProjectNode=()=>this.#u}class y extends v{#h;#s;#r;#a;#c;#m;#u;constructor(t,e,o,i,n,s,r){console.log("Starting UITodo #"+t+" creation."),super(t,r),this._type="todo",this._divID=this._type+"-"+this._ID,this._title=this._makeTitle(this._type,e),this._status=this._makeStatus(this._type,this._statusBool),this.#h=this._makeTitleContainer(this._type,this._title,this._status),this.#s=this.#f(o),this.#r=this.#D(i),this.#a=this.#v(n),this.#c=this.#I(s),this.#m=this.#y(),this.#u=this._makeContainer(this._divID,this._type,this.#h,this.#s,this.#r,this.#a,this.#c,this.#m),console.log("UITodo #"+t+" creation successful.")}#f(t){const e=document.createElement("div");return e.classList.add("todo","description"),e.textContent=t,e}#D(t){const e=document.createElement("div");return e.classList.add("todo","due"),e.textContent=t,e}#v(t){const e=document.createElement("div");return e.classList.add("todo","priority"),t=3==(t=2==(t=1==(t=0==t?"Trivial":t)?"Low":t)?"Medium":t)?"High":t,e.textContent=t,e}#I(t){const e=document.createElement("div");return e.classList.add("todo","notes"),e.textContent=t,e}#y(){const t=document.createElement("div");return t.classList.add("todo","checklist"),t}appendChecklist(t){this.#m.appendChild(t)}updateDescription(t){this.#s.textContent=t}updateDue(t){this.#r.textContent=t}updateNotes(t){this.#c.textContent=t}updatePriority(t){t=3==(t=2==(t=1==(t=0==t?"Trivial":t)?"Low":t)?"Medium":t)?"High":t,this.#a.textContent=t}getTodo=()=>this.#u;getDescription=()=>this.#s;getDue=()=>this.#r;getNotes=()=>this.#c;getPriority=()=>this.#a}class k extends v{#u;constructor(t,e,o){super(t,o),this._type="checklist-item",this._divID=this._type+"-"+this._ID,this._title=this._makeTitle("checklist-item",e),this._status=this._makeStatus("checklist-item",this._statusBool),this._titleContainer=this._makeTitleContainer(this._type,this._title,this._status),this.#u=this._makeContainer(this._divID,this._type,this._titleContainer)}getChecklistItem=()=>this.#u}function C(){function t(t){const e=document.createElement("form");return e.classList.add(t+"-container","form"),e.setAttribute("action","#"),e}function e(t,e,o,i){i=i||"text";const n=document.createElement("div");let s;n.classList.add(t,e,"container","form"),o.appendChild(n),s="description"===e||"notes"===e?document.createElement("textarea"):document.createElement("input"),s.setAttribute("type",i),s.setAttribute("placeholder","New "+t+" "+e),s.setAttribute("name",e),"number"===i&&(s.setAttribute("min",0),s.setAttribute("max",3)),s.classList.add(t,e,"form"),n.appendChild(s)}function o(t){const e=document.createElement("button");e.setAttribute("type","submit"),e.classList.add("submit","btn"),e.textContent="Add",t.appendChild(e)}return{projectForm:function(){const i="project",n=t(i);return e(i,"title",n),o(n),document.querySelector(".body.inner-container").appendChild(n),n},todoForm:function(){const i=t("todo"),n="todo";return e(n,"title",i),e(n,"description",i),e(n,"due",i,"date"),e(n,"priority",i,"number"),e(n,"notes",i),o(i),i},checklistItemForm:function(){const i="checklist-item",n=t(i);return e(i,"title",n),o(n),n}}}function _(){function t(t,e){if(localStorage[t+"-"+e])return JSON.parse(localStorage[t+"-"+e])}return{newProject:function(t,e,o,i){let n=localStorage.projectIDlist?JSON.parse(localStorage.projectIDlist):[];localStorage["project-"+t]||(n.push(t),localStorage.setItem("projectIDlist",JSON.stringify(n)),localStorage.setItem("project-"+t,JSON.stringify({type:"project",id:t,title:e,todolistIDs:o,status:i})))},newTodo:function(t,e,o,i,n,s,r,a,c){localStorage["todo-"+t]||localStorage.setItem("todo-"+t,JSON.stringify({type:"todo",id:t,title:e,description:o,due:i,priority:n,notes:s,projectID:r,checklistIDs:a,status:c}))},newChecklistItem:function(t,e,o,i){localStorage["checklistitem-"+t]||localStorage.setItem("checklistitem-"+t,JSON.stringify({type:"checklistitem",id:t,title:e,todoID:o,status:i}))},getData:t,modifyData:function(t,e,o,i){const n=JSON.parse(localStorage.getItem(t+"-"+e));console.log("Modiffying",o,"attribute from",t,"number",e,"\n","Old value:",n[o]),"checklistIDs"===o||"todolistIDs"===o?n[o].includes(i)||n[o].push(i):n[o]=i,localStorage.setItem(t+"-"+e,JSON.stringify(n)),console.log("New value:",n[o])},getProjects:function(){return localStorage.projectIDlist?JSON.parse(localStorage.projectIDlist):[]},removeData:function(e,o){if(console.log("Deleting",e,"number",o,"\n"),"project"==e){const t=JSON.parse(localStorage.projectIDlist);console.log("Previous project id list:",t);const e=t.indexOf(o);t.splice(e,1),localStorage.projectIDlist=JSON.stringify(t),console.log("New project id list:",t)}else if("todo"==e){const i=t(e,o).projectID,n=t("project",i),s=n.todolistIDs.indexOf(o);n.todolistIDs.splice(s,1),localStorage["project-"+i]=JSON.stringify(n)}else if("checklistitem"==e){const i=t(e,o).todoID,n=t("todo",i),s=n.checklistIDs.indexOf(o);n.checklistIDs.splice(s,1),localStorage["todo-"+i]=JSON.stringify(n)}localStorage.removeItem(e+"-"+o)}}}function b(t,e,o,i){const n=prompt("New "+i);n&&(e.setTitle(n),o.updateTitle(e.getTitle()),_().modifyData(t,e.getID(),i,e.getTitle()))}function T(...t){const e=new m(...t),o=new I(e.getID(),e.getTitle(),e.getStatus());_().newProject(e.getID(),e.getTitle(),e.getTodoList(),e.getStatus());const i=C().todoForm();function n(t){b("project",e,o,"title")}return i.addEventListener("submit",(function(t){t.preventDefault(),console.log("Creating new Todo from form."),o.appendTodo(S(t.target.title.value,t.target.description.value,t.target.due.value,t.target.priority.value,t.target.notes.value,e.getID()).getTodoNode())})),o.appendTodo(i),o.getStatus().addEventListener("click",(function(){o.toggleStatus(),e.toggleStatus(),_().modifyData("project",e.getID(),"status",e.getStatus())})),o.getTitle().addEventListener("click",n),o.getDel().addEventListener("click",(function(t){confirm('Delete Project "'+e.getTitle()+'"?')&&(_().getData("project",e.getID()).todolistIDs.forEach((t=>{_().getData("todo",t).checklistIDs.forEach((t=>{_().removeData("checklistitem",t)})),_().removeData("todo",t)})),_().removeData("project",e.getID()),o.getProjectNode().remove())})),{getDivID:function(){return o.getProjectId},updateTitle:n,appendTodo:function(t){o.appendTodo(t)},getID:function(){return e.getID()},getProjectNode:function(){return o.getProjectNode()}}}function S(...t){const e=new f(...t),o=new y(e.getID(),e.getTitle(),e.getDescription(),e.getDue(),e.getPriority(),e.getNotes(),e.getStatus()),i=C().checklistItemForm();return i.addEventListener("submit",(function(t){t.preventDefault(),t.preventDefault(),console.log("Creating new Todo from form."),o.appendChecklist(j(t.target.title.value,e.getID()).getCLINode())})),o.appendChecklist(i),_().newTodo(e.getID(),e.getTitle(),e.getDescription(),e.getDue(),e.getPriority(),e.getNotes(),e.getProjectId(),e.getChecklist(),e.getStatus()),_().modifyData("project",e.getProjectId(),"todolistIDs",e.getID()),o.getTitle().addEventListener("click",(function(){b("todo",e,o,"title")})),o.getStatus().addEventListener("click",(function(){o.toggleStatus(),e.toggleStatus(),_().modifyData("todo",e.getID(),"status",e.getStatus())})),o.getDel().addEventListener("click",(function(){if(confirm('Delete Todo "'+e.getTitle()+'"?')){const t=e.getID();_().getData("todo",t).checklistIDs.forEach((t=>{_().removeData("checklistitem",t)})),_().removeData("todo",t),o.getTodo().remove()}})),o.getDescription().addEventListener("click",(function(){!function(t,e,o,i){const n=prompt("New "+i);n&&(e.setDescription(n),o.updateDescription(e.getDescription()),_().modifyData("todo",e.getID(),i,e.getDescription()))}(0,e,o,"description")})),o.getDue().addEventListener("click",(function(){!function(t,e,o,i){const n=prompt("New due");n&&(e.setDue(n),o.updateDue(e.getDue()),_().modifyData("todo",e.getID(),"due",e.getDue()))}(0,e,o)})),o.getPriority().addEventListener("click",(function(){!function(t,e,o,i){const n=prompt("New "+i);n&&(e.setPriority(n),o.updatePriority(e.getPriority()),_().modifyData("todo",e.getID(),i,e.getPriority()))}(0,e,o,"priority")})),o.getNotes().addEventListener("click",(function(){!function(t,e,o,i){const n=prompt("New "+i);n&&(e.setNotes(n),o.updateNotes(e.getNotes()),_().modifyData("todo",e.getID(),i,e.getNotes()))}(0,e,o,"notes")})),{getTodoNode:function(){return o.getTodo()},getData:function(){return e},appendChecklistItem:function(t){o.appendChecklist(t)},getID:function(){return e.getID()}}}function j(...t){const e=new D(...t),o=new k(e.getID(),e.getTitle(),e.getStatus());return _().newChecklistItem(e.getID(),e.getTitle(),e.getTodoID(),e.getStatus()),_().modifyData("todo",e.getTodoID(),"checklistIDs",e.getID()),o.getTitle().addEventListener("click",(function(t){b("checklistitem",e,o,"title")})),o.getStatus().addEventListener("click",(function(){o.toggleStatus(),e.toggleStatus(),_().modifyData("checklistitem",e.getID(),"status",e.getStatus())})),o.getDel().addEventListener("click",(function(){confirm('Delete Checklist Item "'+e.getTitle()+'"?')&&(_().removeData("checklistitem",e.getID()),o.getChecklistItem().remove())})),{getCLINode:function(){return o.getChecklistItem()},getData:function(){return e}}}!function(){let t=_().getProjects();console.log(t),t.forEach((t=>{const e=_().getData("project",t),o=T(e.title,e.id,e.status,e.todolistIDs);_().getData("project",t).todolistIDs.forEach((t=>{const e=_().getData("todo",t),i=S(e.title,e.description,e.due,e.priority,e.notes,e.projectID,e.id,e.checklistIDs,e.status);o.appendTodo(i.getTodoNode()),_().getData("todo",t).checklistIDs.forEach((t=>{const e=_().getData("checklistitem",t),o=j(e.title,e.todoID,e.id,e.status);i.appendChecklistItem(o.getCLINode())}))}))}))}(),C().projectForm().addEventListener("submit",(function(t){t.preventDefault(),console.log("Creating new Project from Form."),T(t.target.title.value)}))})()})();