// // const wait = (time)=>
// //     new Promise ((resolve)=>{
// //         if (time<0){
// //             throw new Error ("error pokoknya");
// //         }
// //         else{
// //             setTimeout(resolve,time)
// //         }
// //     });

// // wait(-10)
// // .then(()=> console.log("hello"))
// // .catch((err)=>console.log(err));

// // console.log("world!");

// // const wait = time => new Promise ((resolve)=>{
// //     setTimeout(resolve,time)
// // });

// // const asyncAwait = async ()=>{
// //     console.log("hell");
// //     await wait(3000);
// //     console.log("O1");
// //     await wait(3000);
// //     console.log("O2");
// //     await wait(3000);
// //     console.log("O3");

// // };

// // asyncAwait();

// // const fetchWithAsyncAwait = async ()=>{
// //     let response = fetch(`https://jsonplaceholder.typicode.com/users/1`);
// //     response =  response.json();
// //     console.log(response);
// // }

// // fetchWithAsyncAwait();

// axios.get ("https://jsonplaceholder.typicode.com/users/",{})
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err));

// document.addEventListener('DOMContentLoaded',()=>{
//     newSong=
//     fetch(`https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`)
//     .then(response=>response.json())
//     .then(res => {
//         let html ="";
//         if (res.data){
//             res.data.forEach(song=>{
//                 html += `
//                                 <h5>${song.album.album_type}</h5>
//                                 <h3>${song.album.artists.name}</h3>
                                
                        
//                          `;
//             });
//         }
//         newSong.innerHTML=html;
//     })
// });
const newSong = document.getElementById('new-song');
const url = `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`;
const url1 = `https://tih-api.stb.gov.sg/content/v1/event/search?keyword=arts&language=en&apikey=Vl5NW628kvAwWuqPzCGt45FZUae4EwZV`;
document.addEventListener('click', ()=>{
 newSong = fetch(url, {
        method: "GET"
      })
        .then((response) => response.json())
        .then((response) => console.log(response.album))
        
        

})
// newSong.addEventListener('click',getSongData);

// function getSongData (){
//     fetch(url1, {method: "GET"})
//     .then(response => response.json())
//     .then(res => console.log(res)) 
//     .then(res => {        
//         let html = "";
//         if(res.data){
            
//             res.data.forEach(events => {
//                 html += `
//                         <div class="event-container" >
//                             <div class = "event-item" data-id = "${events.uuid}">                                
//                                     <div >                                    
//                                             <img class = "event-img" src = "${events.thumbnails[0].url}" alt = "EventPic">                                                                    
//                                     </div>
//                                     <div class="text-wrap">
//                                         <div class = "event-name"> 
//                                             <h5>${events.companyDisplayName}</h5>
//                                             <h3>${events.name}</h3>
                                            
                                    
//                                         </div>
//                                     </div>    
//                                     <a href = "${events.officialWebsite}" class = "event-btn">Get Started</a>
                                
//                             </div>
//                         </div>
//                 `;
//             });
//             eventList.classList.remove('notFound');
            
//         } else{
//             html = "Sorry, we didn't find  any events!";
//             eventList.classList.add('notFound');
//         }

//         eventList.innerHTML = html;
//     });
// }
