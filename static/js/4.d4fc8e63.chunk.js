(this.webpackJsonpjobboard=this.webpackJsonpjobboard||[]).push([[4],{48:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n(1),a=n.n(r),l=n(49),i=n(51),c=n(50),u=n(52),s=n(8),m=Object.entries(s.a),f=[];t.default=function(e){var t=e.zoom,n=void 0===t?3:t,p=Object(r.useState)([]),h=Object(o.a)(p,2),g=h[0],v=h[1];Object(r.useEffect)((function(){var e=!0;return e&&fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){e&&v(t)})).catch((function(e){return console.error(e)})),function(){e=!1}}),[]);var b=g.map((function(e){return{name:e.name,latlng:e.latlng}})),d={country:"United Kingdom",latlng:[54,-2],numberOfDevs:s.a["United Kingdom"]},y=[];!function(){for(var e=0;e<m.length;e++)for(var t=0;t<b.length;t++)m[e][0].toLowerCase()===b[t].name.toLowerCase()&&y.push({country:m[e][0],latlng:b[t].latlng,numberOfDevs:m[e][1]});y.push(d)}();var O=y.map((function(e){var t=e.country,n=e.latlng,o=e.numberOfDevs;return a.a.createElement(l.a,{key:t,position:[n[0],n[1]],color:"royalblue",title:1===o?o+" Developer from "+t:o+" Developers from "+t,text:o},a.a.createElement(i.a,null,1===o?o+" Developer from "+t:o+" Developers from "+t))})),j=f.length>0?[f[0].lat,f[0].lng]:[55.378052,-3.435973];return a.a.createElement("div",{style:{height:"90vh",width:"100%",margin:0}},a.a.createElement(c.a,{center:j,zoom:n,minZoom:1,maxZoom:10,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35},a.a.createElement(u.a,{attribution:'&copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),O))}}}]);
//# sourceMappingURL=4.d4fc8e63.chunk.js.map