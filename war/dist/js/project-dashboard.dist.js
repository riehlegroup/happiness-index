!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(){j.isSignedIn()?($("#navAccount").show(),$("#navSignin").hide(),$("#welcomeName").html(j.getProfile().getGivenName()),$("#welcome").removeClass("hidden"),vex.defaultOptions.className="vex-theme-os",u(),r()):$("#navAccount").hide()}function o(){var e={};e.project=0,gapi.client.qdacity.codesystem.insertCodeSystem(e).execute(function(t){if(t.code)window.alert(t.code);else{var n={};n.codesystemID=t.id,n.maxCodingID=0,n.name=document.getElementById("newProjectName").value,gapi.client.qdacity.project.insertProject(n).execute(function(i){i.code?window.alert(t.code):(e.id=t.id,e.project=i.id,gapi.client.qdacity.codesystem.updateCodeSystem(e).execute(function(t){t.code||s(e.project,n.name)}))})}})}function r(){$("#user-list").html(""),gapi.client.happiness.listUser({projectID:y}).execute(function(e){if(e.code)window.alert(e.code);else{e.items=e.items||[];for(var t=0;t<e.items.length;t++){var n=e.items[t].id,i=e.items[t].givenName,a=e.items[t].surName;s(n,i+" "+a)}var o={valueNames:["user_name","user_id"]};new List("user-section",o)}})}function c(){gapi.client.happiness.listHapiness({teachingTerm:N,projectId:y}).execute(function(e){if(!e.code){for(var t=[],n=[],i=0;i<e.items.length;i++){var a=e.items[i].userName,o={};o[a]=e.items[i].happiness.toString(),o.year=e.items[i].sprint+"",t.push(o),$.inArray(e.items[i].userName,n)==-1&&n.push(e.items[i].userName)}"undefined"==typeof w?w=Morris.Line({element:"happiness-area-chart",data:t,xLabels:"year",xkey:"year",ykeys:n,ymin:-3,ymax:3,yLabelFormat:function(e){return e!=Math.round(e)?"":e},gridTextSize:13,labels:n,xLabelFormat:function(e){return e.getFullYear()-1900},pointSize:3,hideHover:"always",resize:!0}):w.setData(t)}})}function s(e,t){var n="<li>";n+='<span class="user_name">'+t+"</span>",n+='<span class="user_id hidden">'+e,n+="</span>",n+="</li>",$("#user-list").append(n)}function u(){gapi.client.happiness.getProject({id:y}).execute(function(e){e.code?console.log(e.message):(N=e.teachingTerm,gapi.client.happiness.getCurrentSprint({teachingTerm:e.teachingTerm}).execute(function(e){e.code?($("#jumbotronSprintNo").html("N/A"),$("#jumbotronWeekNo").html("N/A")):($("#jumbotronSprintNo").html(e.sprintNumber-1),$("#jumbotronWeekNo").html(e.sprintNumber),E=e.sprintNumber)}),c())})}function l(){var e=$("#selectHappiness").val();gapi.client.happiness.insertHapiness({happiness:e,projectID:y,userName:b}).execute(function(e){e.code?(alertify.error("Error: happiness not submitted correctly"),console.log(e.code)):(alertify.success(" Your happiness has been submitted "),c())})}function d(){var e=$("#standupDoneTxt").val(),t=$("#standupPlanTxt").val(),n=$("#standupChallengesTxt").val();e=e.replace(/\n/g,"<br/>"),t=t.replace(/\n/g,"<br/>"),n=n.replace(/\n/g,"<br/>");var i={};i.projectId=y,i.userName=b,i.done=e,i.plan=t,i.challenges=n,i.sprintNumber=E,gapi.client.happiness.insertStandup(i).execute(function(e){e.code?(alertify.error("Error: standup not submitted correctly"),console.log(e.code)):alertify.success(" Your standup has been submitted ")})}function p(e,t){var n=$(t).val(),i='<textarea rows="15" cols="200" name="textBox" type="text"  >'+n+"</textarea><br/>\n";vex.dialog.open({message:e,contentCSS:{width:"600px"},input:i,buttons:[$.extend({},vex.dialog.buttons.YES,{text:"OK"}),$.extend({},vex.dialog.buttons.NO,{text:"Cancel"})],callback:function(e){return e===!1?console.log("Cancelled"):void $(t).val(e.textBox)}})}var m=n(1),f=i(m),g=n(2),h=(i(g),n(3)),v=i(h);(0,v["default"])("https://apis.google.com/js/client.js?onload=loadPlatform","client"),window.loadPlatform=function(){(0,v["default"])("https://apis.google.com/js/platform.js?onload=init","google-api")};var y,b,x,w,j,N=2,E=-1;window.init=function(){$("#navAccount").hide(),$("#selectHappiness").selectmenu(),$("#selectHappiness").selectmenu("refresh");var e=window.location.search;"?"==e.substring(0,1)&&(e=e.substring(1));for(var t=e.split(","),n=0;n<t.length;n++)t[n]=unescape(t[n]);y=t[0],x=t[1];var e=window.location.search;"?"==e.substring(0,1)&&(e=e.substring(1));var t=e.split(",");for(n=0;n<t.length;n++)t[n]=unescape(t[n]);y=t[0],(0,f["default"])(a).then(function(e){j=e}),document.getElementById("navBtnSigninGoogle").onclick=function(){j.changeAccount()},document.getElementById("submitHappinessBtn").onclick=function(){l()},document.getElementById("submitStandupBtn").onclick=function(){d()},document.getElementById("standupDoneBtn").onclick=function(){p("Done-Field","#standupDoneTxt")},document.getElementById("standupPlanBtn").onclick=function(){p("Plan-Field","#standupPlanTxt")},document.getElementById("standupChallengesBtn").onclick=function(){p("Challenges-Field","#standupChallengesTxt")}},$(document).ready(function(){$("#newProjectForm").on("submit",function(e){e.preventDefault(),o()})})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=new Promise(function(t,n){var i,a,o=function(){0==--a&&(i=ReactDOM.render(React.createElement(r["default"],{client_id:s,scopes:c,callback:e}),document.getElementById("accountView")),t(i))};a=2,gapi.client.load("happiness","v2",o,"https://2-dot-uni1-happy.appspot.com/_ah/api"),gapi.load("auth2",o)});return t}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(2),r=i(o),c="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",s="728995435943-2qqb570ukek75pvmv3i813ohecvr5rrh.apps.googleusercontent.com"},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.setType=a.setType.bind(a),a.getJoinedProjects=a.getJoinedProjects.bind(a),a.state={name:"",email:"",picSrc:"",type:""},a.auth2=gapi.auth2.init({client_id:a.props.client_id,scope:a.props.scope}),a.signin(),a}return a(t,e),o(t,[{key:"signin",value:function(){var e=this;this.auth2.currentUser.listen(function(t){t.isSignedIn()&&(e.setUser(e.getProfile()),e.setType(),e.props.callback())})}},{key:"changeAccount",value:function(e){this.auth2.signIn({prompt:"select_account"}).then(e)}},{key:"getProfile",value:function(){return this.auth2.currentUser.get().getBasicProfile()}},{key:"isSignedIn",value:function(){return this.auth2.isSignedIn.get()}},{key:"getCurrentUser",value:function(){var e=new Promise(function(e,t){gapi.client.happiness.getCurrentUser().execute(function(n){n.code?t(n):e(n)})});return e}},{key:"isProjectOwner",value:function(e,t){var n=!1;return"undefined"!=typeof e.projects&&e.projects.forEach(function(e){e===t&&(n=!0)}),n}},{key:"getJoinedProjects",value:function(){return this.state.joinedProject}},{key:"registerCurrentUser",value:function(e,t,n){var i=new Promise(function(i,a){var o={};o.email=n,o.givenName=e,o.surName=t,gapi.client.qdacity.insertUser(o).execute(function(e){e.code?a(e):i(e)})});return i}},{key:"setType",value:function(){var e=this;this.getCurrentUser().then(function(t){e.setState({type:t.type,joinedProject:t.projects})})}},{key:"setUser",value:function(e){this.setState({name:e.getName(),email:e.getEmail(),picSrc:e.getImageUrl()})}},{key:"signout",value:function(){window.open("https://accounts.google.com/logout")}},{key:"renderAdminBtn",value:function(){return"ADMIN"==this.state.type?React.createElement("a",{href:"admin.html",className:"btn btn-danger btn-sm active"},"Admin"):""}},{key:"render",value:function(){return React.createElement("div",null,React.createElement("div",{className:"navbar-content"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-5"},React.createElement("img",{id:"currentUserPicture",src:this.state.picSrc,alt:"",className:"img-responsive"}),React.createElement("p",{className:"text-center small"})),React.createElement("div",{"class":"col-xs-7"},React.createElement("span",{id:"currentUserName"},this.state.name),React.createElement("p",{id:"currentUserEmail",className:"text-muted small"},this.state.email),React.createElement("div",{"class":"divider"}),this.renderAdminBtn()))),React.createElement("div",{className:"navbar-footer"},React.createElement("div",{className:"navbar-footer-content"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-xs-6"},React.createElement("a",{id:"navBtnSwitchAccount",href:"#",className:"btn btn-default btn-sm",onClick:this.changeAccount.bind(this)},"Switch User")),React.createElement("div",{className:"col-xs-6"},React.createElement("a",{id:"navBtnSignOut",className:"btn btn-default btn-sm pull-right",onClick:this.signout.bind(this)},"Sign Out"))))))}}]),t}(React.Component);t["default"]=r},function(e,t,n){var i,a;!function(o,r){"undefined"!=typeof e&&e.exports?e.exports=r():(i=r,a="function"==typeof i?i.call(t,n,t,e):i,!(void 0!==a&&(e.exports=a)))}("$script",function(){function e(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return s;return 1}function t(t,n){e(t,function(e){return!n(e)})}function n(o,r,c){function s(e){return e.call?e():p[e]}function l(){if(!--y){p[v]=1,h&&h();for(var n in f)e(n.split("|"),s)&&!t(f[n],s)&&(f[n]=[])}}o=o[u]?o:[o];var d=r&&r.call,h=d?r:c,v=d?o.join(""):r,y=o.length;return setTimeout(function(){t(o,function e(t,n){return null===t?l():(n||/^https?:\/\//.test(t)||!a||(t=t.indexOf(".js")===-1?a+t+".js":a+t),g[t]?(v&&(m[v]=1),2==g[t]?l():setTimeout(function(){e(t,!0)},0)):(g[t]=1,v&&(m[v]=1),void i(t,l)))})},0),n}function i(e,t){var n,i=r.createElement("script");i.onload=i.onerror=i[d]=function(){i[l]&&!/^c|loade/.test(i[l])||n||(i.onload=i[d]=null,n=1,g[e]=2,t())},i.async=1,i.src=o?e+(e.indexOf("?")===-1?"?":"&")+o:e,c.insertBefore(i,c.lastChild)}var a,o,r=document,c=r.getElementsByTagName("head")[0],s=!1,u="push",l="readyState",d="onreadystatechange",p={},m={},f={},g={};return n.get=i,n.order=function(e,t,i){!function a(o){o=e.shift(),e.length?n(o,a):n(o,t,i)}()},n.path=function(e){a=e},n.urlArgs=function(e){o=e},n.ready=function(i,a,o){i=i[u]?i:[i];var r=[];return!t(i,function(e){p[e]||r[u](e)})&&e(i,function(e){return p[e]})?a():!function(e){f[e]=f[e]||[],f[e][u](a),o&&o(r)}(i.join("|")),n},n.done=function(e){n([null],e)},n})}]);