import{r as i,u as a,j as s}from"./index-COOpJO9J.js";function h(){const[o,n]=i.useState([]),{movieId:t}=a(),r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjA5NmFkZmMwMmIxZDk1MDNjY2EzOTY3MWYxOTYxOCIsInN1YiI6IjY0NjY3MGJhZDE4NTcyMDEwMTk2YzFkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V5Zu5ba5gw74fGGBNm2CovduoufddrTKHZqKyun9LX0"}};return i.useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${t}/reviews?language=en-US&page=1`,r).then(e=>e.json()).then(e=>{n(e.results)}).catch(e=>console.error(e))},[t]),s.jsxs(s.Fragment,{children:[s.jsx("h2",{children:"Reviews"}),s.jsx("ul",{children:o.map(e=>s.jsxs("li",{children:[s.jsx("p",{children:e.author}),s.jsx("p",{children:e.content})]},e.id))})]})}export{h as default};