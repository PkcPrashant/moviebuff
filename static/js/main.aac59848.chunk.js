(window["webpackJsonprobofriends-version-2.0"]=window["webpackJsonprobofriends-version-2.0"]||[]).push([[0],{40:function(e,t,a){e.exports=a(87)},45:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=(a(45),a(46),a(10)),s=a.n(i),c=a(17),m=a(33),d=a(34),h=a(38),u=a(35),f=a(39),b=a(37),p=a(11),v=a.n(p),E=a(36),w=a.n(E),g=function(e){var t=e.movie;return r.a.createElement("div",null,r.a.createElement("h5",null,"Genre : ",t.Genre),r.a.createElement("h6",null,"Rated : ",t.Rated),r.a.createElement("h6",null,"Type : ",t.Type),r.a.createElement("h6",null,"Released on : ",t.Released),r.a.createElement("h6",null,"Runtime : ",t.Runtime),r.a.createElement("h6",null,"IMDB Rating : ",t.imdbRating),r.a.createElement("h6",null,"Director : ",t.Director),r.a.createElement("h6",null,"Writer : ",t.Writer),r.a.createElement("h6",null,"Production : ",t.Production),r.a.createElement("h6",null,"Box Office : ",t.BoxOffice),r.a.createElement("h6",null,"Awards : ",t.Awards),r.a.createElement("h6",null,"Plot : ",t.Plot),r.a.createElement("a",{href:"/DownloadableFiles/9.jpg",download:"Poster.jpg"},"Download"))},P=function(e){var t=e.movie;return r.a.createElement(v.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(v.a.Body,null,r.a.createElement("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-75-m w-25-l mw7 vh-70 center"},r.a.createElement("h1",{className:"tc title"},t.Title),r.a.createElement("img",{src:t.Poster,className:"bg-light-green db w-50 br2 br--top fl vh-50",alt:t.Title}),r.a.createElement("div",{className:"pa2 ph3-ns w-50 pb3-ns vh-50 fr"},r.a.createElement("div",{className:"dt w-100 mt1"}),r.a.createElement("div",{style:{overflowY:"scroll",height:"300px"}},r.a.createElement(g,{movie:t}))))),r.a.createElement(v.a.Footer,null,r.a.createElement(w.a,{onClick:e.onHide},"Close")))},y=function(e){var t=e.movies,a=r.a.useState(!1),n=Object(b.a)(a,2),l=n[0],o=n[1];return r.a.createElement("span",null,r.a.createElement("span",{className:"dib pa3 ma3"},r.a.createElement("button",{className:"tc dib br3 pa0 grow bw2 shadow-5",onClick:function(){return o(!0)}},r.a.createElement("img",{alt:"user",src:t.Poster,width:"200",height:"350"})),r.a.createElement("h2",{className:"white f4",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden"}},t.Title),r.a.createElement("h2",{className:"gray f5 tl",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden"}},t.Year)),r.a.createElement(P,{show:l,onHide:function(){return o(!1)},movie:t}))},C=function(e){var t=e.movie;return null!==t&&t.length?t.map(function(e,t){return r.a.createElement(y,{key:t,movies:e})}):r.a.createElement("h1",{className:"title"},"Loading")},N=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search movie",onChange:t}))},x=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"0px solid black",height:"460px"}},e.children)},k=(a(85),[{name:"Harry Potter and the Chamber of Secrets",id:13},{name:"Harry Potter and the Deathly Hallows: Part 1",id:18},{name:"Harry Potter and the Deathly Hallows: Part 2",id:19},{name:"Harry Potter and the Goblet of Fire",id:15},{name:"Harry Potter and the Half-Blood Prince",id:17},{name:"Harry Potter and the Order of the Phoenix",id:16},{name:"Harry Potter and the Prisoner of Azkaban",id:14},{name:"Harry Potter and the Sorcerer's Stone",id:12},{name:"Mission: Impossible",id:1},{name:"Mission: Impossible - Fallout",id:6},{name:"Mission: Impossible - Ghost Protocol",id:4},{name:"Mission: Impossible - Rogue Nation",id:5},{name:"Mission: Impossible II",id:2},{name:"Mission: Impossible III",id:3},{name:"Pirates of the Caribbean: At World's End",id:9},{name:"Pirates of the Caribbean: Dead Man's Chest",id:8},{name:"Pirates of the Caribbean: Dead Men Tell No Tales",id:11},{name:"Pirates of the Caribbean: On Stranger Tides",id:10},{name:"Pirates of the Caribbean: The Curse of the Black Pearl",id:7}]),H=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(h.a)(this,Object(u.a)(t).call(this))).componentDidMount=Object(c.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({users:k});case 2:return a=[],console.log(e.state.users),t.next=6,e.state.users.map(function(){var t=Object(c.a)(s.a.mark(function t(n,r){var l,o;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.omdbapi.com/?apikey=1610a37c&t=".concat(n.name));case 2:return l=t.sent,t.next=5,l.json();case 5:o=t.sent,(a=a.concat(o)).length===e.state.users.length&&e.setState({movies:a});case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}},t)})),e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={users:[],searchfield:"",movies:[]},e}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.users,a=e.searchfield,n=e.movies,l=n.length?n.filter(function(e){return e.Title.toLowerCase().includes(a.toLowerCase())}):null;return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"title"},"MovieBuff"),r.a.createElement(N,{searchChange:this.onSearchChange}),r.a.createElement(x,null,r.a.createElement(C,{movie:l}))):r.a.createElement("h1",{className:"title"},"Loading")}}]),t}(n.Component);a(86);o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.aac59848.chunk.js.map