const newSong = document.getElementById('new-song');
const url = `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`;
newSong.addEventListener('click',fetchWithAsyncAwait);

const fetchWithAsyncAwait =() => {
    fetch(url, {
      method: "GET"
    })
      .then((res) => res.json())
      .then(response => console.log(response))
      .catch((err) => {
        alert("ada error");
      });
  
    
  };

//   const axiosFetch = async () => {
//     const response = await axios
//       .get(url)
//       .then((res) => res.data)
//       .catch((err) => {
//         console.log(err);
//         alert("ada error di fungsi axios");
//       });
//     console.log("cek : ", response);
//   };
//   axiosFetch();
//   document.querySelectorAll(".btn-track-info").forEach((element) => {
//     element.addEventListener("click", fetchWithAsyncAwait);
//   });