
import { useEffect, useState } from "react";

// async function tweetPost(a) {



//     var raw = JSON.stringify({
//         "text": `${a}`
//     });
//     var requestOptions = {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             Authorization:
//         },
//         body: raw,
//         redirect: 'follow'
//     };


//     try {
//         const response = await fetch("https://api.twitter.com/2/tweets", requestOptions)
//         if (response.ok) {
//             const json = await response.text()
//             console.log(json)
//         } else {
//             throw new Error('Hi Mate')
//         }


//     } catch (e) {
//         console.log(e)
//     }
//     // // .then(response => response.text())
//     // .then(result => console.log(result))
//     // .catch(error => console.log('error', error));
// }


// const TrialButton = () => {
//     const [display, setDisplay] = useState()

//     useEffect(() => {
//         async function tweetPost() {

//             const a = 'Hi 1'

//             var raw = JSON.stringify({
//                 "text": `${a}`
//             });
//             var requestOptions = {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json",
//
//                 },
//                 body: raw,
//                 redirect: 'follow',
//                 mode: 'no-cors'
//             };


//             try {
//                 const response = await fetch("https://api.twitter.com/2/tweets", requestOptions)
//                 if (response.ok) {
//                     const json = await response.text()
//                     setDisplay(json)
//                     console.log(json)
//                 } else {
//                     throw new Error('Hi This is an Error')
//                 }


//             } catch (e) {
//                 console.log(e)
//             }
//             // // .then(response => response.text())
//             // .then(result => console.log(result))
//             // .catch(error => console.log('error', error));
//         }


//     }, [])


//     return (
//         <button onClick={tweetPost}>MyButton</button>
//     )
// }

// export default TrialButton
// // export default tweetPost;


