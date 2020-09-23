(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(3),c=t.n(l),i=t(1),u=function(){var e=Array(10).fill(null).map((function(){return Array(10).fill(null)})),a=[],t=function(a,t,r){for(var n=0;n<a.getLength();n++){if(a.isHorizontal){if(n+r<=9&&null===e[t][r+n])continue;return!1}if(!(n+t<=9&&null===e[t+n][r]))return!1}return!0};return{board:e,placeShip:function(r,n,l){if(!t(r,n,l))return!1;for(var c=0;c<r.getLength();c++)r.isHorizontal?e[n][l+c]={index:c,name:r.name}:e[n+c][l]={index:c,name:r.name};return a.push(r),!0},receiveAttack:function(t,r){null!==e[t][r]&&"miss"!==e[t][r]?(a.find((function(a){return a.name===e[t][r].name})).markHit(e[t][r].index),e[t][r]="hit"):e[t][r]="miss"},fleetSunk:function(){return a.every((function(e){return e.isSunk()}))}}},o=function(e,a){var t={Destroyer:2,Cruiser:3,Battleship:4,Carrier:5}[e],r=e,n=Array(t).fill(!1),l=function(){return n.every(Boolean)};return{name:r,body:n,isHorizontal:a,markHit:function(e){n[e]=!0,l()},getLength:function(){return t},isSunk:l}},s=function(e){var a=u(),t=[],r=function(e,a,r){var n=parseInt(a.toString()+r.toString());if(!t.includes(n))return e.playerBoard.receiveAttack(a,r),t.push(n),e.playerBoard.fleetSunk()},n=function e(t){var r=c(),n=c(),i=l(),u=o(t,i);a.placeShip(u,r,n)||e(t)},l=function(){return Math.random()<.5},c=function(){return Math.floor(10*Math.random())};return{name:e,playerBoard:a,turn:r,autoPlaceFleet:function(){for(var e=0,a=["Destroyer","Cruiser","Battleship","Carrier"];e<a.length;e++){n(a[e])}return!0},randomAttack:function(e){var a=c(),t=c();return r(e,a,t)}}},m=(t(9),function(e){var a=Object(r.useState)(!1),t=Object(i.a)(a,2),l=t[0],c=t[1],u=function(){var a,t,r=e.coordinates;return r<10?(a=0,t=r):(a=Math.floor(r/10),t=r%10),[a,t]}(),o=u[0],s=u[1],m=e.currentPlayer.playerBoard.board[o][s],d=e.boardSquare;return n.a.createElement("div",{className:"".concat("squareContainer"," ").concat("hit"===m?"hitShip":"miss"===m?"clickedSquare":null===d?"":"boardShip"),onClick:function(){e.gameStarted&&!e.gameEnded&&(null===d&&(d="miss"),"Computer"===e.name&&!0!==l&&(e.handleClick(o,s),c(!0)))}},e.coordinates,n.a.createElement("div",{className:"squareUnit"}))}),d=function(e){var a=e.board.map((function(a,t){return n.a.createElement(m,{name:e.name,key:t,coordinates:t,currentPlayer:e.currentPlayer,boardSquare:a,handleClick:e.handleClick,gameEnded:e.gameEnded,gameStarted:e.gameStarted})}));return n.a.createElement("div",{className:"boardContainer"},n.a.createElement("h1",{className:"playerName"},e.name),n.a.createElement("div",{className:"playerBoard"},a))},b=function(e){var a=Object(r.useState)("Destroyer"),t=Object(i.a)(a,2),l=t[0],c=t[1],u=Object(r.useState)(""),s=Object(i.a)(u,2),m=s[0],d=s[1],b=Object(r.useState)("Horizontal"),p=Object(i.a)(b,2),h=p[0],f=p[1],y=Object(r.useState)(!1),v=Object(i.a)(y,2),E=v[0],S=v[1],C=Object(r.useState)(!1),g=Object(i.a)(C,2),O=g[0],j=g[1],k=Object(r.useState)(!1),B=Object(i.a)(k,2),N=B[0],q=B[1],H=Object(r.useState)(!1),z=Object(i.a)(H,2),A=z[0],D=z[1],P=Object(r.useState)(!1),x=Object(i.a)(P,2),F=x[0],I=x[1];e.resetFleet&&(S(!1),j(!1),q(!1),D(!1),I(!1),e.restartFleet(!1));var w=function(e){var a=e.target,t=a.value,r=a.type;"radio"===r?(I(!1),c(e.target.name),d("")):"text"===r&&d(t)},G=function(e){f(e.target.name)};return n.a.createElement("div",{className:"gameInfo"},n.a.createElement("div",{className:"formContainer"},n.a.createElement("form",null,n.a.createElement("h1",null,"Customize your ships"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Destroyer",value:"Destroyer",checked:"Destroyer"===l,disabled:E,onChange:w})," ","Destroyer"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Cruiser",value:"Cruiser",checked:"Cruiser"===l,disabled:O,onChange:w})," ","Cruiser"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Battleship",value:"Battleship",checked:"Battleship"===l,disabled:N,onChange:w})," ","Battleship"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Carrier",value:"Carrier",checked:"Carrier"===l,disabled:A,onChange:w})," ","Carrier"),n.a.createElement("input",{name:"coordinates",type:"text",value:m,onChange:w,placeholder:"Enter Coordinates, example: (56)"}),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Horizontal",value:"Horizontal",checked:"Horizontal"===h,onChange:G})," ","Horizontal"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",name:"Vertical",value:"Vertical",checked:"Vertical"===h,onChange:G})," ","Vertical"),n.a.createElement("button",{onClick:function(a){a.preventDefault();var t=parseInt(m.charAt(0)),r=parseInt(m.charAt(1)),n=o(l,"Horizontal"===h),c=e.playerBoard.placeShip(n,t,r);d(""),c?(!function(e){switch(I(!0),e){case"Destroyer":S(!0);break;case"Cruiser":j(!0);break;case"Battleship":q(!0);break;case"Carrier":D(!0)}}(l),e.renderShips()):alert("Bad coordinates, try again!")},disabled:F},"Submit"))),n.a.createElement("div",{className:"gameKey"},n.a.createElement("h1",{className:"redSquare"},"Red square is missed"),n.a.createElement("h1",{className:"blueSquare"},"Blue square is ship location"),n.a.createElement("h1",{className:"greenSquare"},"Green square is hit")))},p=function(){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)(!1),u=Object(i.a)(c,2),o=u[0],m=u[1],p=Object(r.useState)(""),h=Object(i.a)(p,2),f=h[0],y=h[1],v=Object(r.useState)(s("Player")),E=Object(i.a)(v,2),S=E[0],C=E[1],g=Object(r.useState)(s("Computer")),O=Object(i.a)(g,2),j=O[0],k=O[1],B=Object(r.useState)(S),N=Object(i.a)(B,2),q=N[0],H=N[1],z=Object(r.useState)(0),A=Object(i.a)(z,2),D=A[0],P=A[1],x=Object(r.useState)(!1),F=Object(i.a)(x,2),I=F[0],w=F[1];S.enemy=j,j.enemy=S;var G=function(){C(s(s.name)),k(s(j.name)),m(!1),l(!1),M(!0)},M=function(){w(!1)},V=function(e,a){if(o)return!1;var t=S.turn(S.enemy,e,a),r=j.randomAttack(j.enemy);H(q===S?j:S),(t||r)&&(m(t||r),y(t?S.name:j.name))};return n.a.createElement("div",{className:"mainGame"},n.a.createElement("div",{className:"gameContainer"},n.a.createElement(b,{playerBoard:S.playerBoard,renderShips:function(){P((function(e){return e+1}))},resetFleet:I,restartFleet:M}),n.a.createElement(d,{name:"PlayerOne",board:S.playerBoard.board.flat(),currentPlayer:S,handleClick:V,gameEnded:o,gameStarted:t}),n.a.createElement(d,{name:"Computer",board:j.playerBoard.board.flat(),currentPlayer:j,handleClick:V,gameStarted:t,gameEnded:o})),n.a.createElement("div",{className:"displayContainer"},n.a.createElement("button",{className:"startBtn",onClick:function(){t?G():4===D?(l(!0),j.autoPlaceFleet(),m(!1)):alert("Add all 4 ships first to start the game")}},t?"Restart Game":"Start Game"),n.a.createElement("div",null,o?"The winner is ".concat(f):"")))};c.a.render(n.a.createElement(p,null),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.6cedaaf1.chunk.js.map