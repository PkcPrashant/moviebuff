(window["webpackJsonprobofriends-version-2.0"]=window["webpackJsonprobofriends-version-2.0"]||[]).push([[0],{40:function(e,a,n){e.exports=n(87)},45:function(e,a,n){},85:function(e,a,n){},87:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),l=n.n(i),o=(n(45),n(46),n(10)),s=n.n(o),c=n(17),m=n(33),d=n(34),h=n(38),u=n(35),f=n(39),p=n(37),b=n(11),v=n.n(b),g=n(36),w=n.n(g),E=function(e){var a=e.movie;return r.a.createElement("div",null,r.a.createElement("h5",null,"Genre : ",a.Genre),r.a.createElement("h6",null,"Rated : ",a.Rated),r.a.createElement("h6",null,"Type : ",a.Type),r.a.createElement("h6",null,"Released on : ",a.Released),r.a.createElement("h6",null,"Runtime : ",a.Runtime),r.a.createElement("h6",null,"IMDB Rating : ",a.imdbRating),r.a.createElement("h6",null,"Director : ",a.Director),r.a.createElement("h6",null,"Writer : ",a.Writer),r.a.createElement("h6",null,"Production : ",a.Production),r.a.createElement("h6",null,"Box Office : ",a.BoxOffice),r.a.createElement("h6",null,"Awards : ",a.Awards),r.a.createElement("h6",null,"Plot : ",a.Plot),r.a.createElement("a",{href:"/DownloadableFiles/9.jpg",download:"Poster.jpg"},"Download"))},y=function(e){var a=e.movie;return r.a.createElement(v.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(v.a.Body,null,r.a.createElement("article",{className:"br2 ba dark-gray b--black-10 mv4 w-100 w-75-m w-25-l mw7 vh-70 center"},r.a.createElement("h1",{className:"tc title"},a.Title),r.a.createElement("img",{src:a.Poster,className:"bg-light-green db w-50 br2 br--top fl vh-50",alt:a.Title}),r.a.createElement("div",{className:"pa2 ph3-ns w-50 pb3-ns vh-50 fr"},r.a.createElement("div",{className:"dt w-100 mt1"}),r.a.createElement("div",{style:{overflowY:"scroll",height:"300px"}},r.a.createElement(E,{movie:a}))))),r.a.createElement(v.a.Footer,null,r.a.createElement(w.a,{onClick:e.onHide},"Close")))},P=function(e){var a=e.movies,n=r.a.useState(!1),t=Object(p.a)(n,2),i=t[0],l=t[1];return console.log(window.innerHeight," , ",window.innerWidth),r.a.createElement("span",null,r.a.createElement("span",{className:"dib pa3 ma3"},r.a.createElement("button",{className:"tc dib br3 pa0 grow bw2 shadow-5",onClick:function(){return l(!0)}},r.a.createElement("img",{alt:"user",src:a.Poster,width:"200",height:window.innerHeight/2})),r.a.createElement("h2",{className:"white f4 tl",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden"}},a.Title),r.a.createElement("h2",{className:"gray f5 tl",style:{width:"200px",whiteSpace:"nowrap",overflow:"hidden"}},a.Year)),r.a.createElement(y,{show:i,onHide:function(){return l(!1)},movie:a}))},C=function(e){var a=e.movie;return null!==a&&a.length?a.map(function(e,a){return r.a.createElement(P,{key:a,movies:e})}):r.a.createElement("h1",{className:"title"},"Loading")},k=function(e){var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search movie",onChange:a}))},S=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"0px solid black",height:"460px"}},e.children)},T=(n(85),[{name:"Ant-Man",id:32},{name:"Ant-Man and the Wasp",id:39},{name:"Aquaman",id:42},{name:"Avengers: Age of Ultron",id:31},{name:"Avengers: Endgame",id:41},{name:"Avengers: Infinity War",id:38},{name:"Batman Begins",id:49},{name:"Batman v Superman: Dawn of Justice",id:51},{name:"Black Panther",id:37},{name:"Captain America: Civil War",id:33},{name:"Captain America: The First Avenger",id:25},{name:"Captain America: The Winter Soldier",id:29},{name:"Captain Marvel",id:20},{name:"Doctor Strange",id:34},{name:"Guardians of the Galaxy",id:30},{name:"Guardians of the Galaxy Vol. 2",id:40},{name:"Harry Potter and the Chamber of Secrets",id:13},{name:"Harry Potter and the Deathly Hallows: Part 1",id:18},{name:"Harry Potter and the Deathly Hallows: Part 2",id:19},{name:"Harry Potter and the Goblet of Fire",id:15},{name:"Harry Potter and the Half-Blood Prince",id:17},{name:"Harry Potter and the Order of the Phoenix",id:16},{name:"Harry Potter and the Prisoner of Azkaban",id:14},{name:"Harry Potter and the Sorcerer's Stone",id:12},{name:"Iron Man",id:21},{name:"Iron Man 2",id:22},{name:"Iron Man 3",id:23},{name:"Justice League",id:47},{name:"Man of Steel",id:50},{name:"Mission: Impossible - Fallout",id:6},{name:"Mission: Impossible - Ghost Protocol",id:4},{name:"Mission: Impossible - Rogue Nation",id:5},{name:"Mission: Impossible II",id:2},{name:"Mission: Impossible III",id:3},{name:"Mission: Impossible&y=1996",id:1},{name:"Pirates of the Caribbean: At World's End",id:9},{name:"Pirates of the Caribbean: Dead Man's Chest",id:8},{name:"Pirates of the Caribbean: Dead Men Tell No Tales",id:11},{name:"Pirates of the Caribbean: On Stranger Tides",id:10},{name:"Pirates of the Caribbean: The Curse of the Black Pearl",id:7},{name:"Shazam!",id:43},{name:"Spider-Man: Homecoming",id:36},{name:"Suicide Squad",id:44},{name:"The Avengers",id:27},{name:"The Dark Knight",id:45},{name:"The Dark Knight Rises",id:48},{name:"The Incredible Hulk",id:24},{name:"Thor",id:26},{name:"Thor: Ragnarok ",id:35},{name:"Thor: The Dark World",id:28},{name:"Wonder Woman",id:46}]),M=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(h.a)(this,Object(u.a)(a).call(this))).componentDidMount=Object(c.a)(s.a.mark(function a(){var n;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.setState({users:T});case 2:return n=[],a.next=5,e.state.users.map(function(){var a=Object(c.a)(s.a.mark(function a(t,r){var i,l;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://www.omdbapi.com/?apikey=1610a37c&t=".concat(t.name));case 2:return i=a.sent,a.next=5,i.json();case 5:l=a.sent,(n=n.concat(l)).length===e.state.users.length&&e.setState({movies:n});case 8:case"end":return a.stop()}},a)}));return function(e,n){return a.apply(this,arguments)}}());case 5:case"end":return a.stop()}},a)})),e.onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={users:[],searchfield:"",movies:[]},e}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state,a=e.users,n=e.searchfield,t=e.movies,i=t.length?t.filter(function(e){return e.Title.toLowerCase().includes(n.toLowerCase())}):null;return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"title"},"MovieBuff"),r.a.createElement(k,{searchChange:this.onSearchChange}),r.a.createElement(S,null,r.a.createElement(C,{movie:i}))):r.a.createElement("h1",{className:"title"},"Loading")}}]),a}(t.Component);n(86);l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b2309ee4.chunk.js.map