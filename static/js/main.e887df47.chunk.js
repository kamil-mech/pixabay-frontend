(this["webpackJsonppixabay-frontend"]=this["webpackJsonppixabay-frontend"]||[]).push([[0],{85:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),s=a.n(c),d=a(40),r=a.n(d),o=a(3),n=a(7),l=a(2);const p=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)),h=e=>{const t=p(200,800),a=p(200,800),i=`https://picsum.photos/${t}/${a}`,c={pageURL:i,previewURL:i,previewWidth:t,previewHeight:a,webformatURL:i,webformatWidth:t,webformatHeight:a,largeImageURL:i,imageWidth:t,imageHeight:a,fullHDURL:i,imageURL:i+".jpg"};if(!e)return c;const s=parseInt(Date.now().toString()+Math.random().toString().slice(-8));return{...c,id:s,type:"photo",tags:"buddha, statue, monument",imageSize:1611584,views:4423,downloads:2641,favorites:11,likes:15,comments:2,user_id:3989469,user:"travelphotographer",userImageURL:"https://cdn.pixabay.com/user/2016/09/02/10-09-22-263_250x250.png",id_hash:s.toString()}},g={webRoute:"/:category/:photoSlug",success:{webUrl:"/photos/buddha-statue-monument-buddhism-5868759/",request:{url:"/api?id=5868759&key=6473511-0417f2cad683f1bee54cafe15"},response:[{id:5868759,pageURL:"https://pixabay.com/photos/buddha-statue-monument-buddhism-5868759/",type:"photo",tags:"buddha, statue, monument",previewURL:"https://cdn.pixabay.com/photo/2020/12/28/22/48/buddha-5868759_150.jpg",previewWidth:99,previewHeight:150,webformatURL:"https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752f7ad49248c3_640.jpg",webformatWidth:424,webformatHeight:640,largeImageURL:"https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f7bd59748c05e_1280.jpg",imageWidth:3264,imageHeight:4928,imageSize:1611584,views:4423,downloads:2641,favorites:11,likes:15,comments:2,user_id:3989469,user:"travelphotographer",userImageURL:"https://cdn.pixabay.com/user/2016/12/12/17-25-14-15_250x250.jpg",id_hash:"5868759",fullHDURL:"https://pixabay.com/get/53e8d34b4d57a514f6d1867dda79317a123cdbe4524c704f742f7bd59748c05e_1920.jpg",imageURL:"https://pixabay.com/get/53e8d34b4d57a514ea898279c02b327f1422dfe352517148752a7ed2.jpg"}]},error:{webUrl:"/photos/nowhere-999999999999999999999999999999999999/",request:{url:"/api?id=999999999999999999999999999999999999&key=1111111-1111111111111111111111111"},response:new Error("Request failed with status code 400")}};if(window.storybook)for(const St of g.success.response)Object.assign(St,h());var m=g;const b={webRoute:"/",success:{webUrl:"/",pages:[{request:{url:"/api?editors_choice=true&key=6473511-0417f2cad683f1bee54cafe15&order=latest&page=1&per_page=50"},response:[{id:5878656,pageURL:"https://pixabay.com/photos/chapel-snow-mountain-town-5878656/",type:"photo",tags:"chapel, snow, mountain",previewURL:"https://cdn.pixabay.com/photo/2021/01/01/14/07/chapel-5878656_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d24b4c57aa14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d24b4c57aa14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:5496,imageHeight:3664,imageSize:3982647,views:19644,downloads:15527,favorites:21,likes:46,comments:17,user_id:7453549,user:"katerinavulcova",userImageURL:"https://cdn.pixabay.com/user/2018/02/10/18-34-51-611_250x250.png",id_hash:"5878656",fullHDURL:"https://pixabay.com/get/53e8d24b4c57aa14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d24b4c57aa14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5875379,pageURL:"https://pixabay.com/photos/sparrow-bird-handrail-animal-5875379/",type:"photo",tags:"sparrow, bird, handrail",previewURL:"https://cdn.pixabay.com/photo/2020/12/31/05/02/sparrow-5875379_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d2464955a514f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d2464955a514f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:6e3,imageHeight:4e3,imageSize:1842672,views:12832,downloads:11233,favorites:20,likes:46,comments:36,user_id:16507166,user:"Lancier",userImageURL:"https://cdn.pixabay.com/user/2020/05/25/02-12-06-169_250x250.jpg",id_hash:"5875379",fullHDURL:"https://pixabay.com/get/53e8d2464955a514f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d2464955a514ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5873636,pageURL:"https://pixabay.com/photos/impala-oxpecker-bird-antelope-5873636/",type:"photo",tags:"impala, oxpecker, bird",previewURL:"https://cdn.pixabay.com/photo/2020/12/30/14/26/impala-5873636_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d2404c51aa14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d2404c51aa14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:4862,imageHeight:3241,imageSize:4857368,views:20239,downloads:17458,favorites:33,likes:66,comments:20,user_id:19712633,user:"matrishva",userImageURL:"",id_hash:"5873636",fullHDURL:"https://pixabay.com/get/53e8d2404c51aa14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d2404c51aa14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5870088,pageURL:"https://pixabay.com/photos/coast-sea-fog-rocky-rocky-coast-5870088/",type:"photo",tags:"coast, sea, fog",previewURL:"https://cdn.pixabay.com/photo/2020/12/29/10/07/coast-5870088_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d2434a5aa414f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d2434a5aa414f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:6016,imageHeight:4016,imageSize:4078114,views:21030,downloads:15025,favorites:45,likes:71,comments:0,user_id:15593888,user:"BernhardJaeck",userImageURL:"https://cdn.pixabay.com/user/2020/12/29/09-30-04-754_250x250.jpg",id_hash:"5870088",fullHDURL:"https://pixabay.com/get/53e8d2434a5aa414f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d2434a5aa414ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5871743,pageURL:"https://pixabay.com/photos/doctor-man-smile-smiling-5871743/",type:"photo",tags:"doctor, man, smile",previewURL:"https://cdn.pixabay.com/photo/2020/12/29/22/22/doctor-5871743_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d2424d56af14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d2424d56af14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:4500,imageHeight:2999,imageSize:1273946,views:7578,downloads:4971,favorites:15,likes:19,comments:9,user_id:12151052,user:"tatyanaBuzmakova_Krasnova",userImageURL:"https://cdn.pixabay.com/user/2020/12/29/22-06-49-527_250x250.jpg",id_hash:"5871743",fullHDURL:"https://pixabay.com/get/53e8d2424d56af14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d2424d56af14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"}]},{request:{url:"/api?editors_choice=true&key=6473511-0417f2cad683f1bee54cafe15&order=latest&page=2&per_page=50"},response:[{id:5868759,pageURL:"https://pixabay.com/photos/buddha-statue-monument-buddhism-5868759/",type:"photo",tags:"buddha, statue, monument",previewURL:"https://cdn.pixabay.com/photo/2020/12/28/22/48/buddha-5868759_150.jpg",previewWidth:99,previewHeight:150,webformatURL:"https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:424,webformatHeight:640,largeImageURL:"https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:3264,imageHeight:4928,imageSize:1611584,views:9797,downloads:5116,favorites:14,likes:32,comments:7,user_id:3989469,user:"travelphotographer",userImageURL:"https://cdn.pixabay.com/user/2016/12/12/17-25-14-15_250x250.jpg",id_hash:"5868759",fullHDURL:"https://pixabay.com/get/53e8d34b4d57a514f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d34b4d57a514ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5868127,pageURL:"https://pixabay.com/photos/mountains-clouds-peak-summit-foggy-5868127/",type:"photo",tags:"mountains, clouds, peak",previewURL:"https://cdn.pixabay.com/photo/2020/12/28/18/32/mountains-5868127_150.jpg",previewWidth:150,previewHeight:91,webformatURL:"https://pixabay.com/get/53e8d34b4b50ab14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:387,largeImageURL:"https://pixabay.com/get/53e8d34b4b50ab14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:4887,imageHeight:2956,imageSize:4422374,views:11922,downloads:9989,favorites:33,likes:60,comments:35,user_id:1553839,user:"Franz26",userImageURL:"https://cdn.pixabay.com/user/2020/11/01/08-12-58-650_250x250.jpeg",id_hash:"5868127",fullHDURL:"https://pixabay.com/get/53e8d34b4b50ab14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d34b4b50ab14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5864490,pageURL:"https://pixabay.com/photos/pheasant-bird-animal-feather-5864490/",type:"photo",tags:"pheasant, bird, animal",previewURL:"https://cdn.pixabay.com/photo/2020/12/27/15/51/pheasant-5864490_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d3474e5bac14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d3474e5bac14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:4049,imageHeight:2700,imageSize:5415051,views:5260,downloads:4208,favorites:20,likes:36,comments:8,user_id:10789997,user:"pocsaiistvan",userImageURL:"https://cdn.pixabay.com/user/2019/12/10/19-10-34-746_250x250.jpg",id_hash:"5864490",fullHDURL:"https://pixabay.com/get/53e8d3474e5bac14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d3474e5bac14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5861901,pageURL:"https://pixabay.com/photos/pasture-fog-birds-grass-field-5861901/",type:"photo",tags:"pasture, fog, birds",previewURL:"https://cdn.pixabay.com/photo/2020/12/26/16/52/pasture-5861901_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d3424352ad14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d3424352ad14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:5184,imageHeight:3456,imageSize:3881687,views:28225,downloads:24640,favorites:40,likes:94,comments:22,user_id:6795508,user:"fietzfotos",userImageURL:"https://cdn.pixabay.com/user/2017/10/24/21-58-51-377_250x250.jpg",id_hash:"5861901",fullHDURL:"https://pixabay.com/get/53e8d3424352ad14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d3424352ad14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5861895,pageURL:"https://pixabay.com/photos/christmas-christmas-tree-5861895/",type:"photo",tags:"christmas, christmas tree, christmas ball",previewURL:"https://cdn.pixabay.com/photo/2020/12/26/16/47/christmas-5861895_150.jpg",previewWidth:150,previewHeight:99,webformatURL:"https://pixabay.com/get/53e8d342425ba914f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:422,largeImageURL:"https://pixabay.com/get/53e8d342425ba914f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:6240,imageHeight:4119,imageSize:3468462,views:7682,downloads:6679,favorites:16,likes:33,comments:8,user_id:1131094,user:"LNLNLN",userImageURL:"https://cdn.pixabay.com/user/2020/05/13/18-42-49-177_250x250.jpg",id_hash:"5861895",fullHDURL:"https://pixabay.com/get/53e8d342425ba914f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d342425ba914ea898279c02b327f1422dfe35251734d742c7dd5.jpg"}]},{request:{url:"/api?editors_choice=true&key=6473511-0417f2cad683f1bee54cafe15&order=latest&page=3&per_page=50"},response:[{id:5858985,pageURL:"https://pixabay.com/photos/dog-white-sheppard-canine-pet-5858985/",type:"photo",tags:"dog, white sheppard, canine",previewURL:"https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_150.jpg",previewWidth:150,previewHeight:84,webformatURL:"https://pixabay.com/get/53e8d04b435aa914f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:360,largeImageURL:"https://pixabay.com/get/53e8d04b435aa914f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:6e3,imageHeight:3376,imageSize:2721471,views:32337,downloads:26444,favorites:46,likes:75,comments:16,user_id:19533481,user:"Arawolf",userImageURL:"https://cdn.pixabay.com/user/2020/12/15/10-56-38-615_250x250.jpg",id_hash:"5858985",fullHDURL:"https://pixabay.com/get/53e8d04b435aa914f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d04b435aa914ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5858656,pageURL:"https://pixabay.com/photos/polar-lights-night-sky-stars-5858656/",type:"photo",tags:"polar lights, night sky, stars",previewURL:"https://cdn.pixabay.com/photo/2020/12/25/04/51/polar-lights-5858656_150.jpg",previewWidth:150,previewHeight:84,webformatURL:"https://pixabay.com/get/53e8d04b4c57aa14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:360,largeImageURL:"https://pixabay.com/get/53e8d04b4c57aa14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:3e3,imageHeight:1688,imageSize:1394604,views:11259,downloads:8675,favorites:46,likes:48,comments:13,user_id:11040068,user:"CharlVera",userImageURL:"https://cdn.pixabay.com/user/2020/08/01/02-07-43-113_250x250.jpg",id_hash:"5858656",fullHDURL:"https://pixabay.com/get/53e8d04b4c57aa14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d04b4c57aa14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5857744,pageURL:"https://pixabay.com/photos/woman-pregnant-pregnancy-mom-5857744/",type:"photo",tags:"woman, pregnant, pregnancy",previewURL:"https://cdn.pixabay.com/photo/2020/12/24/15/42/woman-5857744_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d0444d56a814f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d0444d56a814f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:5287,imageHeight:3525,imageSize:2927161,views:1440,downloads:665,favorites:7,likes:16,comments:8,user_id:1593059,user:"Cparks",userImageURL:"https://cdn.pixabay.com/user/2015/11/03/03-37-08-44_250x250.jpg",id_hash:"5857744",fullHDURL:"https://pixabay.com/get/53e8d0444d56a814f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d0444d56a814ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5854897,pageURL:"https://pixabay.com/photos/toucan-bird-branch-perched-beak-5854897/",type:"photo",tags:"toucan, bird, branch",previewURL:"https://cdn.pixabay.com/photo/2020/12/23/12/44/toucan-5854897_150.jpg",previewWidth:100,previewHeight:150,webformatURL:"https://pixabay.com/get/53e8d047425bab14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:427,webformatHeight:640,largeImageURL:"https://pixabay.com/get/53e8d047425bab14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:4480,imageHeight:6720,imageSize:4997003,views:12016,downloads:9675,favorites:41,likes:50,comments:14,user_id:18039230,user:"Paulswilderness",userImageURL:"",id_hash:"5854897",fullHDURL:"https://pixabay.com/get/53e8d047425bab14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d047425bab14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"},{id:5850470,pageURL:"https://pixabay.com/photos/christmas-cookies-baking-kitchen-5850470/",type:"photo",tags:"christmas, cookies, baking",previewURL:"https://cdn.pixabay.com/photo/2020/12/21/17/42/christmas-5850470_150.jpg",previewWidth:150,previewHeight:100,webformatURL:"https://pixabay.com/get/53e8d0434e55ac14f1dc8460962e3379163adfe44e507748752d7fd5944bc4_640.jpg",webformatWidth:640,webformatHeight:427,largeImageURL:"https://pixabay.com/get/53e8d0434e55ac14f6da8c7dda79317a123cdbe4524c704f742f79d0964ec359_1280.jpg",imageWidth:8256,imageHeight:5504,imageSize:11800748,views:5584,downloads:4483,favorites:19,likes:31,comments:10,user_id:18427938,user:"HelenJank",userImageURL:"https://cdn.pixabay.com/user/2020/11/05/17-38-34-893_250x250.jpg",id_hash:"5850470",fullHDURL:"https://pixabay.com/get/53e8d0434e55ac14f6d1867dda79317a123cdbe4524c704f742f79d0964ec359_1920.jpg",imageURL:"https://pixabay.com/get/53e8d0434e55ac14ea898279c02b327f1422dfe35251734d742c7dd5.jpg"}]}]},error:{webUrl:"/",request:{url:"/api?editors_choice=true&key=1111111-1111111111111111111111111&order=latest&page=1&per_page=50"},response:new Error("Request failed with status code 400")}};if(window.storybook){const e=b.success.pages;for(const t of e){const e=new Array(50).fill("").map((()=>h(!0)));t.response.splice(0,t.response.length,...e)}}var f=b,x=a(86),j=a(13);const u=Object(l.c)(j.a)`
  width: 108px;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  margin-top: -1px;
`;var w=()=>Object(i.jsx)(u,{to:"/",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",fillRule:"evenodd",clipRule:"evenodd",viewBox:"0 0 100 24",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsxs)("g",{fill:"#333",fillRule:"nonzero",transform:"matrix(.80764 0 0 .8079 .013 -.002)",children:[Object(i.jsx)("path",{d:"M8.215 7.436c3.994-.091 7.745 3.158 8.167 7.142.504 3.502-1.555 7.138-4.782 8.558-1.957.972-4.164.673-6.267.723H3.277v6.583H.024c.006-5.079-.013-10.159.01-15.239C.14 11.418 3.239 8.03 6.98 7.526c.408-.06.823-.09 1.235-.09zm0 13.168c2.348.057 4.55-1.773 4.901-4.1.468-2.341-1.026-4.857-3.309-5.558-2.205-.784-4.859.246-5.936 2.329-.835 1.424-.538 3.104-.594 4.671v2.658h4.938zm9.737-13.247h3.217v16.422h-3.217V7.357zm12.889 10.328h.115l4.575 6.1h3.988l-6.217-8.446 5.513-7.974h-3.988l-3.871 5.629h-.116l-3.871-5.629h-3.988l5.512 7.975-6.215 8.443h3.987l4.576-6.098z"}),Object(i.jsx)("path",{d:"M46.81 7.357c3.259-.064 6.384 2.071 7.591 5.085.628 1.401.618 2.951.598 4.454v6.883c-2.903-.01-5.809.02-8.715-.016-3.337-.162-6.391-2.597-7.346-5.792-.876-2.776-.149-6.001 1.915-8.078 1.54-1.593 3.73-2.555 5.954-2.534l.003-.002zm4.938 13.167c-.014-1.826.03-3.653-.025-5.478-.192-2.446-2.458-4.496-4.913-4.432-2.335-.057-4.535 1.753-4.901 4.063-.428 2.219.847 4.636 2.963 5.463 1.304.568 2.745.332 4.123.382h2.755l-.002.002zM64.801 7.436c3.854-.094 7.457 2.939 8.071 6.733.697 3.6-1.335 7.486-4.687 8.967-3.274 1.546-7.484.55-9.735-2.28-1.394-1.644-1.997-3.831-1.878-5.962V.854h3.255v6.583h4.975l-.001-.001zm0 13.168c2.472.065 4.731-2.01 4.913-4.47.309-2.444-1.502-4.902-3.921-5.346-1.338-.185-2.696-.06-4.044-.1h-1.922c.02 1.857-.045 3.715.038 5.568.259 2.45 2.474 4.392 4.937 4.343l-.001.005zM82.438 7.357c3.259-.064 6.385 2.071 7.592 5.085.629 1.401.62 2.951.6 4.454v6.883c-2.904-.01-5.809.02-8.715-.016-3.336-.162-6.391-2.597-7.346-5.792-.877-2.776-.15-6.001 1.914-8.078 1.539-1.593 3.728-2.555 5.952-2.534l.003-.002zm4.937 13.167c-.013-1.826.03-3.653-.023-5.478-.19-2.446-2.457-4.496-4.911-4.432-2.335-.057-4.536 1.753-4.9 4.063-.428 2.219.846 4.636 2.961 5.463 1.303.568 2.743.332 4.121.382h2.753l-.001.002zm21.171-13.128c-.006 5.068.014 10.136-.01 15.203-.118 3.988-3.546 7.572-7.546 7.78-.76.04-1.522.014-2.283.02v-3.254c1.39-.007 2.875.135 4.104-.652 1.538-.863 2.514-2.602 2.48-4.36-2.886 2.328-7.358 2.208-10.164-.194-2.044-1.65-3.161-4.305-3.003-6.917V7.397h3.254c.015 2.899-.029 5.8.024 8.698.177 2.34 2.226 4.338 4.572 4.456 2.418.249 4.799-1.574 5.219-3.964.183-1.338.06-2.7.097-4.048v-5.14h3.257l-.001-.003z"})]})})});const v=l.c.svg`
  margin-bottom: 1px;
`;var y=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(v,{width:"15",height:"16",viewBox:"50 50 15 16",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",fill:e.light,fillRule:"nonzero",stroke:e.light,children:[Object(i.jsx)("path",{strokeWidth:"0.63",d:"M60.54 54.558c-.103.247-.462.506-.658.321l-1.823-1.728v7.487c0 .367-.422.665-.788.665-.367 0-.789-.298-.789-.665v-7.256l-1.78 1.497c-.205.173-.51-.162-.613-.41-.103-.248-.134-.445.056-.635l2.656-2.657a.665.665 0 01.939 0l2.656 2.657c.19.19.247.475.144.724z"}),Object(i.jsx)("path",{strokeWidth:"0.53",d:"M61.527 65.591l-8.456.001a1.995 1.995 0 01-1.992-1.992v-5a.664.664 0 111.327 0v5c0 .365.299.663.665.663h8.456a.665.665 0 00.664-.664v-5a.664.664 0 011.328 0v5a1.995 1.995 0 01-1.992 1.992z"})]})})};const O=l.c.svg`
  margin-top: 2px;
`;var R=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(O,{width:"16",height:"8",viewBox:"150 380 16 8",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:"none",fillRule:"nonzero",stroke:e.darkEmphasis,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.79",d:"M150.335 380.239l5.377 5.777 5.379-5.777"})})};const U=({bold:e})=>`font-family: ${e?"Open Sans Bold,":""}Open Sans,sans-serif`,L=({theme:e,color:t})=>`color: ${null!==t&&void 0!==t?t:e.palette.dark}`,_=({center:e})=>e?"text-align: center":"",k=({underline:e})=>e?"text-decoration: underline":"",H=(e,t)=>l.c[e]`
    ${U};
    ${"font-weight: 400"};
    font-size: ${({theme:e})=>e.fontSize(t)};
    ${L};
    ${_};
    ${k};
  `,$={h1:H("h1",60),h2:H("h2",32),h3:H("h3",30),h4:H("h4",24),h5:H("h5",16),h6:H("h6",15),body:H("span",14),sub:H("span",13),sub2:H("span",12)};var M=e=>{const t=Object(c.useMemo)((()=>(({h1:e,h2:t,h3:a,h4:i,h5:c,h6:s,sub:d,sub2:r})=>[e&&$.h1,t&&$.h2,a&&$.h3,i&&$.h4,c&&$.h5,s&&$.h6,d&&$.sub,r&&$.sub2].find(Boolean)||$.body)(e)),[e]);return Object(i.jsx)(t,{...e})};const z=l.c.button`
  cursor: pointer;
  height: ${({large:e,small:t})=>e?42:t?30:35}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing(1)}px calc(${({theme:e,small:t})=>e.spacing(t?1:3)}px + 3px);
  border-radius: 50px;
  ${({theme:e,outlined:t})=>t?`border: 1px solid ${e.palette.tertiary}`:"border: 0"};
  background-color: ${({backgroundColor:e})=>e};
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:hover {
    ${({theme:e,outlined:t})=>t?`\n          border-color: ${e.palette.info};\n        `:"background-image: linear-gradient(transparent,rgba(0,0,0,.05) 40%,rgba(0,0,0,.1));"}
  }
  &:hover > * {
    ${({theme:e,outlined:t})=>t?`color: ${e.palette.info}`:""};
  }
  &:active {
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 6px rgba(0,0,0,.2);
  }
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(1)}px;
  }
`;var W,D=({children:e,secondary:t,tertiary:a,outlined:c,small:s,large:d,bold:r,frontAdornment:o,backAdornment:n,onClick:p})=>{const h=Object(l.d)().palette,g=t?h.secondary:a?h.tertiary:c?h.light:h.primary,m=c?h.darkEmphasis:a?h.dark:h.light;return Object(i.jsxs)(z,{backgroundColor:g,large:d,small:s,outlined:c,onClick:p,children:[o,Object(i.jsx)(M,{color:m,h5:d,sub2:s&&!r,bold:r,children:e}),n]})},S=a(14);!function(e){e.MIN="min",e.MAX="max"}(W||(W={}));const I=(e,t)=>`@media (${e}-width: ${t}px)`;var A={fontSize:e=>e/16+"rem",spacing:e=>8*e,palette:{primary:"#02be6e",secondary:"#008ddf",tertiary:"#e6e6e6",light:"#fff",dark:"#191b26",info:"#0a88d3",success:"green",warning:"yellow",error:"red",emphasis:"red",lightEmphasis:"#f6f5fa",deemphasis:"#a5a8ab",darkEmphasis:"#636363"},zIndex:{tooltip:250,toast:200,modal:150,dialog:150,backdrop:125,drawer:100,imageOverlay:1},breakpoints:{xsDown:I(W.MAX,365),xsUp:I(W.MIN,365),smDown:I(W.MAX,565),smUp:I(W.MIN,565),mdDown:I(W.MAX,765),mdUp:I(W.MIN,765),lgDown:I(W.MAX,1020),lgUp:I(W.MIN,1020),xlDown:I(W.MAX,1180),xlUp:I(W.MIN,1180)}};const E=Object(S.a)((e=>({init:!1,xsDown:!1,xsUp:!1,smDown:!1,smUp:!1,mdDown:!1,mdUp:!1,lgDown:!1,lgUp:!1,xlDown:!1,xlUp:!1})));if(!E.getState().init)if(E.setState({init:!0}),"undefined"!==typeof window&&window.matchMedia){for(const[e,t]of Object.entries(A.breakpoints)){const a=window.matchMedia(t.replace("@media ",""));a.addEventListener("change",(t=>E.setState({[e]:t.matches}))),E.setState({[e]:a.matches})}E.setState({init:!0})}else E.setState({init:!0,xsDown:!1,xsUp:!0,smDown:!1,smUp:!0,mdDown:!1,mdUp:!0,lgDown:!1,lgUp:!0,xlDown:!1,xlUp:!0});var F=E;var B=()=>{const e=Object(l.d)().palette;return Object(i.jsx)("svg",{width:"24",height:"18",viewBox:"99 100 24 18",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:e.darkEmphasis,fillRule:"nonzero",d:"M99.627 100.452h21.913v1.992H99.627v-1.992zm0 6.972h21.913v1.992H99.627v-1.992zm0 6.972h21.913v1.992H99.627v-1.992z"})})};const C=l.c.div`
  max-width: ${1788}px;
  margin: auto;
`;var Y=({children:e})=>Object(i.jsx)(C,{children:e});const q="\n  cursor: pointer;\n  transition: opacity 0.2s;\n  &:hover {\n    opacity: 0.7;\n  }\n",N=l.c.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 0 60px rgba(0,0,0,.12);
  padding: ${({theme:e})=>e.spacing(2)}px;
`,P=l.c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 3px;
  > * {
    ${q};
  }
  > * + * {
    margin-left: calc(${({theme:e})=>e.spacing(4)}px + 2px);
  }
`,X=()=>{const{t:e}=Object(x.a)();return Object(i.jsxs)(P,{children:[Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("photos")})}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("illustrations")})}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("vectors")})}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("videos")})}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("music")})})]})},V=l.c.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 4px;
  > *:not(button) {
    ${q};
  }
  > * + * {
    margin-left: calc(${({theme:e})=>e.spacing(2)}px + 2px);
  }
`,J=l.c.div`
  width: 1px;
  height: 125%;
  background-color: ${({theme:e})=>e.palette.tertiary};
`,Z=l.c.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${({theme:e})=>e.spacing(1)}px;
  margin-right: 2px;
  > * + * {
    margin-left: calc(${({theme:e})=>e.spacing(2)}px - 1px);
  }
`,G=l.c.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: calc(${({theme:e})=>e.spacing(1)}px + 1px);
  }
`,K=()=>{const{t:e}=Object(x.a)(),{smUp:t,mdUp:a,lgUp:c}=F();return Object(i.jsxs)(V,{children:[c&&Object(i.jsxs)(G,{children:[Object(i.jsx)(M,{children:e("explore")}),Object(i.jsx)(R,{})]}),t&&Object(i.jsxs)(Z,{children:[Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("log-in")})}),Object(i.jsx)(J,{}),Object(i.jsx)("div",{children:Object(i.jsx)(M,{children:e("join")})})]}),a&&Object(i.jsx)(D,{frontAdornment:Object(i.jsx)(y,{}),children:e("upload")}),!c&&Object(i.jsx)(B,{})]})},Q=l.c.div`
  display: flex;
  flex-direction: row;
`,T=l.c.div`
  width: ${({theme:e})=>e.spacing(6)}px;
  height: 100%;
  flex-shrink: 0;
`,ee=l.c.div`
  width: 100%;
  height: 100%;
  max-width: ${1788}px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  > * {
    margin-bottom: 1px;
  }
`;var te=({children:e})=>{const t=F((e=>e.xlUp));return Object(i.jsx)(N,{children:Object(i.jsxs)(ee,{children:[Object(i.jsxs)(Q,{children:[Object(i.jsx)(w,{}),t&&Object(i.jsx)(T,{}),t&&Object(i.jsx)(X,{})]}),Object(i.jsx)(Q,{children:Object(i.jsx)(K,{})})]})})};var ae=({children:e})=>Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsx)(te,{}),Object(i.jsx)(Y,{children:e})]}),ie=a(47),ce=a.n(ie),se=a(23),de=a.n(se);const re=e=>{const{webformatWidth:t,webformatHeight:a,webformatURL:i,largeImageURL:c}=e,s={width:t,height:a,url:i},d={width:1280,height:1280,url:c},r=e=>Math.max(e.width,e.height),o=r(d)/r(s);return`${s.url} 1x, ${d.url} ${o.toFixed(3)}x`},oe=(e,t)=>e?de()(e.tags.replace(/, /gi," ").split(" ")).slice(0,3).map((e=>(e=>{const[t,...a]=e;return t.toUpperCase()+a.join("")})(t(e)))).join(" "):"",ne=l.c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({theme:e})=>e.spacing(2)}px;
  }
`,le=l.c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${16}px;
  }
  > * {
    flex-shrink: 1;
    flex-grow: 0;
  }
`,pe=l.c.img`
  width: 100%;
  height: auto;
`;var he=e=>{const{t:t}=Object(x.a)(),{startingWidth:a,images:s,thresholdHeight:d,maxRows:r}=e,o=Object(c.useRef)(null),[n,l]=Object(c.useState)(null!==a&&void 0!==a?a:0),p=Object(c.useCallback)((e=>{o.current=e,o.current&&l(o.current.getBoundingClientRect().width)}),[l]);Object(c.useEffect)((()=>{const e=ce()((()=>{var e,t,i;l(null!==(e=null!==(t=null===o||void 0===o||null===(i=o.current)||void 0===i?void 0:i.getBoundingClientRect().width)&&void 0!==t?t:a)&&void 0!==e?e:300)}),1e3/120);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}));const{rows:h}=Object(c.useMemo)((()=>((e,t,a,i)=>{let c=0,s=0,d={current:1};const r=[[]];for(let o=0;o<t.length;o++){const n=t[o],l=n.imageWidth/n.imageHeight*a;let p=c>0?16:0;if(c+s+p+l>e){const t=(e-s)/c;if(d.current=t,d={current:1},i&&i===r.length)return{rows:r};c=0,p=0,s=0,r.push([])}c+=l,s+=p,r[r.length-1].push({image:n,scaledImageWidth:l,upscaleRef:d,itemPadding:p})}return{rows:r}})(n,s,d,r)),[n,s,d,r]);return Object(i.jsx)(ne,{ref:p,children:h.map(((e,a)=>Object(i.jsx)(le,{children:e.map((({image:e,scaledImageWidth:a,upscaleRef:c})=>Object(i.jsx)("div",{style:{flexBasis:a*c.current},children:Object(i.jsx)(j.a,{to:e.pageURL.replace("https://pixabay.com",""),children:Object(i.jsx)(pe,{src:e.webformatURL,srcSet:re(e),alt:oe(e,t)})})},e.id)))},a)))})},ge=a(16),me=a.n(ge),be=a(17),fe=a.n(be);const xe={},je={page:1,currentPageImages:null,loading:!1,error:null},ue=[],we=Object(S.a)((e=>({...je})));xe.useLatestImagesStore=()=>{ue.splice(0,ue.length),we.setState({...je})};var ve=()=>{const{page:e,currentPageImages:t,loading:a,error:i}=we();Object(c.useEffect)((()=>{(async()=>{if(!t&&!a&&!i){var c;we.setState({loading:!0});const t=null!==(c="6473511-0417f2cad683f1bee54cafe15")?c:"",a=await me.a.get("/api?"+fe.a.stringify({key:t,editors_choice:!0,page:e,per_page:50,order:"latest"}));we.setState({currentPageImages:a.data,loading:!1})}})().catch((t=>{we.setState({page:e-1,error:t,loading:!1})}))}),[i,e,t,a]);const s=Object(c.useCallback)((()=>{a||(t&&ue.push(t),we.setState({page:e+1,currentPageImages:null,loading:!1,error:null}))}),[t,a,e]),d=Object(c.useMemo)((()=>(t?ue.concat([t]):ue).flatMap((e=>e))),[t]);return{loading:a,error:i,images:d,fetchMore:s}};const ye={},Oe=Object(S.a)((e=>({id:0,imageDetails:null,loading:!1,error:null}))),Re={...Oe.getState()};xe.useImageDetailStore=()=>{for(const e in ye)delete ye[e];Oe.setState({...Re})};var Ue=e=>{const{imageDetails:t,loading:a,error:i}=Oe();Object(c.useEffect)((()=>{e.id&&(async()=>{if(t&&e.id!==t.id){const a=ye[e.id];return Oe.setState({id:a?e.id:t.id,imageDetails:a||null,loading:!1,error:null})}if(!t&&!a&&!i){var c;Oe.setState({loading:!0});const t=null!==(c="6473511-0417f2cad683f1bee54cafe15")?c:"",a=await me.a.get("/api?"+fe.a.stringify({key:t,id:e.id}));ye[e.id]=a.data[0],Oe.setState({imageDetails:a.data[0],loading:!1})}})().catch((e=>{Oe.setState({error:e,loading:!1})}))}),[i,t,a,e.id]);const s=Object(c.useCallback)((()=>{Oe.setState({imageDetails:null,loading:!1,error:null})}),[]);return t&&t.id!==e.id?{...Re,refetch:s}:{id:e.id,imageDetails:t,loading:a,error:i,refetch:s}};var Le=({error:e,loading:t,refetch:a,children:c})=>{const{t:d}=Object(x.a)();return e?Object(i.jsx)(D,{onClick:a,children:`${d("error")}. ${d("try-again")}`}):t?Object(i.jsx)(M,{children:`${d("loading")}...`}):Object(i.jsx)(s.a.Fragment,{children:c})};const _e=l.c.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,ke=l.c.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({theme:e})=>e.zIndex.imageOverlay};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    flex-basis: 1px;
    flex-grow: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: ${({theme:e})=>e.spacing(2)}px;
    margin-right: ${({theme:e})=>e.spacing(2)}px;
  }
  > div > * + * {
    margin-top: ${({theme:e})=>e.spacing(2)}px;
  }
`,He=l.c.div`
  width: 100%;
  height: 55vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  margin-bottom: ${({theme:e})=>e.spacing(2)}px;
  > img {
    height: auto;
    width: auto;
    min-width: 150%;
    min-height: 150%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`,$e=()=>{const e=Object(l.d)().palette,t=F((e=>e.mdDown)),{t:a}=Object(x.a)(),{imageDetails:c,...s}=Ue({id:5000648});return Object(i.jsxs)(He,{children:[Object(i.jsx)(Le,{...s,children:c&&Object(i.jsx)("img",{src:c.fullHDURL||c.largeImageURL,alt:oe(c,a)})}),Object(i.jsx)(ke,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(M,{h2:!t,h5:t,bold:!0,color:e.light,children:"Stunning free images & royalty free stock"}),Object(i.jsx)(M,{h5:!t,color:e.light,children:"Over 1.9 million+ high quality stock images, videos and music shared by our talented community."})]})})]})};var Me=()=>{const{t:e}=Object(x.a)();Object(c.useEffect)((()=>{document.title=e("home-title")}),[e]);const{images:t,loading:a,error:s,fetchMore:d}=ve(),r=Object(c.useRef)({loading:a,error:s,images:t,fetchMore:d});var o;return r.current={loading:a,error:s,images:t,fetchMore:d},o=r,Object(c.useEffect)((()=>{const e=()=>{const{error:e,loading:t,images:a,fetchMore:i}=o.current,c=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)-window.innerHeight,s=Array.from(document.querySelectorAll("img")).filter((e=>e.complete)).length>=a.length,d=c-window.scrollY<1.5*window.innerHeight;!t&&!e&&s&&d&&i()};return document.addEventListener("scroll",e),()=>{document.removeEventListener("scroll",e)}}),[]),Object(i.jsxs)(ae,{children:[Object(i.jsx)($e,{}),t&&Object(i.jsx)(he,{startingWidth:300,images:t,thresholdHeight:250}),s&&Object(i.jsx)(_e,{children:Object(i.jsx)(Le,{loading:a,error:s,refetch:d,children:[]})})]})};var ze=e=>{const t=Object(c.useMemo)((()=>Object(S.a)((e=>({images:null,loading:!1,error:null})))),[]),{id:a,images:i,loading:s,error:d}=t();Object(c.useEffect)((()=>{e.id&&(async()=>{if((e.id!==a||!i)&&!s&&!d){var c;t.setState({id:e.id,loading:!0});const a=null!==(c="6473511-0417f2cad683f1bee54cafe15")?c:"",i=(await me.a.get("/api?"+fe.a.stringify({key:a,q:e.tags.join("+"),editors_choice:e.sponsored,page:1,per_page:25}))).data.filter((t=>t.id!==e.id));t.setState({images:i,loading:!1})}})().catch((e=>{t.setState({error:e,loading:!1})}))}),[d,a,i,s,e.id,e.sponsored,e.tags,t]);const r=Object(c.useCallback)((()=>{t.setState({images:null,loading:!1,error:null})}),[t]);return{id:e.id,images:i,loading:s,error:d,refetch:r}};const We=l.c.svg`
  margin-bottom: 2px;
`;var De=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(We,{width:"15",height:"16",viewBox:"0 50 15 16",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsxs)("g",{xmlns:"http://www.w3.org/2000/svg",fill:e.light,fillRule:"nonzero",stroke:e.light,children:[Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",strokeWidth:"0.63",d:"M10.749 57.376c-.103-.248-.505-.503-.702-.321l-1.779 1.639v-7.047c0-.366-.422-.664-.789-.664-.366 0-.789.298-.789.664v6.949l-1.867-1.63c-.201-.176-.51.162-.613.41a.664.664 0 00.144.724l2.656 2.656c.26.26.679.26.939 0l2.656-2.656a.664.664 0 00.144-.724z"}),Object(i.jsx)("path",{strokeWidth:"0.53",d:"M12.732 65.591l-10.443.001A1.995 1.995 0 01.297 63.6v-6.068a.663.663 0 111.328 0V63.6c0 .365.297.663.664.663h10.443a.665.665 0 00.664-.664v-6.024a.664.664 0 111.328 0v6.024a1.994 1.994 0 01-1.992 1.992z"})]})})};var Se=l.c.div`
display: flex;
flex-direction: column;
padding: ${({theme:e,small:t})=>e.spacing(t?1:2)}px;
background-color: ${({theme:e})=>e.palette.lightEmphasis};
> * + * {
  margin-top: ${({theme:e})=>e.spacing(1)}px;
}
`;const Ie=l.c.table`
  width: 100%;
  td + td {
    text-align: right;
  }
`;var Ae=({imageDetails:e})=>{const{imageURL:t,webformatURL:a,imageWidth:c,imageHeight:s,views:d,downloads:r}=e,o=Object(l.d)().palette,n=(t||a).split(".").reverse()[0].split("?")[0].toUpperCase(),{t:p}=Object(x.a)();return Object(i.jsx)(M,{color:o.darkEmphasis,children:Object(i.jsx)(Ie,{children:Object(i.jsxs)("tbody",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:p("image-type")}),Object(i.jsx)("td",{children:n})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:p("resolution")}),Object(i.jsx)("td",{children:`${c}x${s}`})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:p("views")}),Object(i.jsx)("td",{children:d})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:p("downloads")}),Object(i.jsx)("td",{children:r})]})]})})})};var Ee=()=>Object(i.jsx)("div",{className:"fb-like fb_iframe_widget","data-href":"https://www.facebook.com/pixabay","data-layout":"button_count","data-share":"true","data-show-faces":"false","fb-xfbml-state":"rendered","fb-iframe-plugin-query":"app_id=114593902037957&container_width=270&href=https%3A%2F%2Fwww.facebook.com%2Fpixabay&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false",children:Object(i.jsx)("span",{style:{verticalAlign:"bottom",width:"150px",height:"28px"},children:Object(i.jsx)("iframe",{name:"f161d1d4defa36c",width:"1000px",height:"1000px","data-testid":"fb:like Facebook Social Plugin",title:"fb:like Facebook Social Plugin",frameBorder:"0",allowFullScreen:!0,scrolling:"no",allow:"encrypted-media",src:"https://www.facebook.com/v2.5/plugins/like.php?app_id=114593902037957&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df39fd55ccbf6bbc%26domain%3Dpixabay.com%26origin%3Dhttps%253A%252F%252Fpixabay.com%252Ff6237efd3309bc%26relation%3Dparent.parent&container_width=270&href=https%3A%2F%2Fwww.facebook.com%2Fpixabay&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false",style:{border:"none",visibility:"visible",width:"150px",height:"28px",backgroundColor:"transparent"},className:""})})});const Fe=l.c.svg`
  margin-bottom: 3px;
`;var Be=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(Fe,{width:"16",height:"16",viewBox:"199 199 13 13",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:e.light,fillRule:"nonzero",d:"M201.726 210.9l-2.496.038.028-5.458s2.124.159 2.642-.064c.436-.111 3.314-1.647 4.184-2.53.733-.652.986-1.318 1.269-2.181.226-.872 1.051-.685 1.414-.478.472.269.53.875.48 1.369-.062.376-.236.96-.521 1.488-.219.408-.583.757-.669.899-.11.176-.555.518-.382.574.947.209 1.385.269 2.729.622.508.276.633.355.777.882.105.541-.193 1.173-.65 1.578-.087.048-.478.534-.478.534s-1.013 2.824-1.544 3.422c-.336.298-.568.368-.956.414-.243 0-1.285-.047-2.468-.189-1.425-.219-2.356-.887-3.355-.917l-.004-.003z"})})};const Ce=l.c.svg`
  margin-bottom: 1px;
`;var Ye=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(Ce,{width:"16",height:"16",viewBox:"199 125 13 13",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:e.light,fillRule:"nonzero",d:"M211.786 129.944l-3.156 3.04.718 4.321-3.871-2.059-3.89 2.017.763-4.313-3.123-3.074 4.343-.607 1.959-3.916 1.919 3.938 4.338.653zm-6.661-29.494c-3.256 0-5.898 2.277-5.898 5.087 0 1.464.723 2.782 1.873 3.71a7.854 7.854 0 01-1.206 2.159c1.181 0 2.698-.164 3.865-.926.44.092.896.144 1.367.144 3.26 0 5.902-2.277 5.902-5.087 0-2.809-2.642-5.087-5.9-5.087h-.003z"})})};const qe=l.c.svg`
  margin-top: 4px;
`;var Ne=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(qe,{width:"16",height:"16",viewBox:"149 199 16 16",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:e.darkEmphasis,fillRule:"nonzero",d:"M161.812 209.791c-.73 0-1.387.312-1.853.811l-5.445-2.713c.02-.126.032-.256.032-.388 0-.129-.013-.256-.03-.378l5.438-2.684a2.524 2.524 0 001.858.817c1.412 0 2.558-1.163 2.558-2.6 0-1.438-1.146-2.602-2.556-2.602-1.411 0-2.56 1.165-2.56 2.601 0 .13.014.255.03.379l-5.435 2.682a2.532 2.532 0 00-1.859-.817c-1.414 0-2.56 1.166-2.56 2.602 0 1.437 1.146 2.602 2.56 2.602.73 0 1.385-.315 1.853-.813l5.445 2.712c-.02.126-.032.256-.032.388 0 1.438 1.145 2.602 2.558 2.602 1.412 0 2.56-1.165 2.56-2.603 0-1.437-1.146-2.601-2.56-2.601l-.002.003z"})})};const Pe=l.c.div`
  width: 100%;
  height: 60px;
  border: 1px solid ${({theme:e})=>e.palette.tertiary};
  border-left: 0;
  border-right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > * {
    flex: 1;
    max-width: 95px;
  }
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(1)}px;
  }
`;var Xe=({imageDetails:e})=>Object(i.jsxs)(Pe,{children:[Object(i.jsx)(D,{small:!0,secondary:!0,bold:!0,frontAdornment:Object(i.jsx)(Be,{}),children:e.likes}),Object(i.jsx)(D,{small:!0,secondary:!0,bold:!0,frontAdornment:Object(i.jsx)(Ye,{}),children:e.favorites}),Object(i.jsx)(D,{small:!0,tertiary:!0,children:Object(i.jsx)(Ne,{})})]});const Ve="\n  cursor: pointer;\n  transition: opacity 0.2s;\n  &:hover {\n    opacity: 0.7;\n  }\n",Je=Object(l.c)(M)`
  ${Ve}
`,Ze=l.c.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(2)}px;
  }
  ${({theme:e})=>e.breakpoints.lgDown} {
    justify-content: center;
  }
`,Ge=l.c.img`
  ${Ve}
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,Ke=l.c.div`
  margin-top: ${({theme:e})=>e.spacing(1)}px;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(1)}px;
  }
`,Qe=l.c.div`
  margin-top: -2px;
`;var Te=({imageDetails:e})=>{const t=Object(l.d)().palette,{t:a}=Object(x.a)(),{userImageURL:s,user:d,user_id:r}=e,[o,n]=Object(c.useState)(s);return Object(i.jsxs)(Ze,{children:[Object(i.jsx)(Ge,{src:o,onError:()=>n("https://pixabay.com/static/img/profile_image_dummy.svg"),alt:d}),Object(i.jsxs)(Qe,{children:[Object(i.jsx)(j.a,{to:`/users/${d}-${r}`,children:Object(i.jsx)(Je,{h6:!0,color:t.darkEmphasis,children:`${null!==d&&void 0!==d?d:""}`})}),Object(i.jsxs)(Ke,{children:[Object(i.jsx)(D,{small:!0,children:a("coffee")}),Object(i.jsx)(D,{small:!0,tertiary:!0,children:a("follow")})]})]})]})};var et=()=>{const e=Object(l.d)().palette;return Object(i.jsx)("svg",{width:"15",height:"14",viewBox:"99 200 15 14",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("path",{xmlns:"http://www.w3.org/2000/svg",fill:e.light,fillRule:"nonzero",d:"M110.086 202.402c1.042 0 1.977-.567 2.615-.996v8.113c-.637.428-1.574.996-2.614.996-1.041 0-1.974-.309-2.613-.737-.637-.43-1.574-.739-2.614-.739-1.041 0-1.975.532-2.614.961v-8.112c.637-.428 1.574-.958 2.615-.958 1.04 0 1.977.309 2.615.737.638.429 1.574.737 2.614.737l-.004-.002zm-9.586-2.346c.481 0 .872.39.872.871V214h-1.744v-13.073c0-.481.393-.871.874-.871h-.002z"})})};const tt=l.c.svg`
  margin-bottom: 2px;
`;var at=()=>{const e=Object(l.d)().palette;return Object(i.jsx)(tt,{width:"18",height:"20",viewBox:"119 62 29 32",preserveAspectRatio:"xMidYMid meet",children:Object(i.jsx)("g",{xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsxs)("g",{children:[Object(i.jsx)("path",{fill:e.light,d:"M8.363 21.438c-.65 0-1.27-.265-1.712-.738a2.511 2.511 0 01-.65-1.417 2.515 2.515 0 01-.679.089 2.366 2.366 0 01-1.978-1.092 3.285 3.285 0 01-.177-.325L.068 24.449a.728.728 0 00.738 1.033l2.538-.265a.702.702 0 01.679.324l1.417 2.126c.325.472 1.033.413 1.27-.089l3.158-6.642s0-.029-.029-.029a2.27 2.27 0 01-1.476.531zM23.801 24.449l-3.07-6.435a2.55 2.55 0 01-.177.295 2.366 2.366 0 01-1.978 1.092c-.236 0-.472-.029-.708-.118-.059.532-.266 1.033-.65 1.417a2.343 2.343 0 01-1.712.738 2.214 2.214 0 01-1.476-.531l-.029.029 3.158 6.642c.236.531.974.561 1.27.089l1.387-2.126c.148-.236.413-.354.708-.324l2.539.265c.561.089.974-.502.738-1.033zM14.669 18.949c.653.705 1.816.225 1.788-.734v-.029c-.028-.762.767-1.27 1.448-.959h.028c.88.395 1.76-.48 1.363-1.355a1.019 1.019 0 01.965-1.44h.029c.936.028 1.419-1.129.738-1.779l-.029-.028c-.567-.508-.369-1.439.341-1.693.88-.339.88-1.581 0-1.92-.71-.254-.908-1.186-.341-1.694l.029-.028c.681-.649.198-1.807-.738-1.778h-.029a1.02 1.02 0 01-.965-1.44c.397-.847-.511-1.75-1.363-1.355h-.028c-.71.311-1.476-.198-1.448-.96v-.028c.028-.932-1.135-1.411-1.788-.734-.511.565-1.448.367-1.732-.339-.341-.875-1.59-.875-1.931 0v.029a1.033 1.033 0 01-1.703.338C8.65.346 7.486.826 7.515 1.757v.028c.028.763-.767 1.271-1.448.96-.88-.395-1.76.508-1.363 1.355a1.019 1.019 0 01-.965 1.44H3.71c-.936-.028-1.419 1.129-.738 1.778l.029.029c.567.508.369 1.439-.341 1.693-.88.339-.88 1.581 0 1.92.71.254.908 1.185.341 1.693l-.029.029c-.681.649-.198 1.806.738 1.778h.029a1.019 1.019 0 01.965 1.44c-.397.875.511 1.75 1.363 1.355.709-.311 1.476.197 1.448.96v.028c-.029.931 1.135 1.411 1.788.734.511-.565 1.448-.367 1.703.339v.028c.341.875 1.59.875 1.931 0 .284-.763 1.192-.96 1.732-.395zm-2.697-2.654c-3.521 0-6.36-2.851-6.36-6.323 0-3.472 2.839-6.323 6.36-6.323 3.52 0 6.359 2.851 6.359 6.323 0 3.472-2.839 6.323-6.359 6.323z",transform:"translate(121.298 63.199)"}),Object(i.jsx)("path",{fill:e.light,d:"M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z",transform:"translate(121.298 63.199)"})]})})})};const it=l.c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.3s;
  margin-top: 2px;

  &:hover {
    border-radius: 2px;
    background-color: hsla(0, 0%, 100%, .3);
  }
`,ct=l.c.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  &&:hover {
    opacity: 1;
  }
`,st=l.c.div`
  display: flex;
  /* Not visible until hovered */
  opacity: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({theme:e})=>e.zIndex.imageOverlay};
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent);
  overflow: hidden;
  padding: ${({theme:e})=>e.spacing(1)}px;
  padding-bottom: 0;
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(1)}px;
  }
`,dt=l.c.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  > * {
    cursor: pointer;
    padding: 4px;
    transition: background-color 0.3s;
  }
  > *:hover {
    border-radius: 2px;
    background-color: hsla(0, 0%, 100%, .3);
  }
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(1)}px;
  }
`,rt=l.c.div`
  position: relative;
  max-width: ${({maxWidth:e})=>e}px;
  max-height: ${({maxHeight:e})=>e}px;
  width: 100%;
  height: auto;
  &:hover ${st} {
    opacity: 1;
  }
`,ot=l.c.img`
  width: 100%;
  height: 100%;
`,nt=e=>{const[t,...a]=e;return t.toUpperCase()+a.join("")};var lt=({imageDetails:e})=>{const[t,a]=Object(c.useState)(!0),s=Object(l.d)().palette,{t:d}=Object(x.a)(),{webformatWidth:r,webformatHeight:o,webformatURL:n,tags:p}=e,h=r>o,g=h?o/r:r/o,m=h?{x:960,y:Math.round(960*g)}:{x:Math.round(720*g),y:720},b=Object(c.useMemo)((()=>((e,t)=>e?de()(e.tags.replace(/, /gi," ").split(" ")).slice(0,3).map((e=>nt(t(e)))).join(" "):"")(e,d)),[e,d]),f=p.split(", ");return Object(i.jsxs)(rt,{maxWidth:m.x,maxHeight:m.y,onMouseLeave:()=>a(!1),children:[Object(i.jsxs)(st,{style:t?{opacity:1}:{},"data-testid":"overlay",children:[Object(i.jsx)(it,{children:Object(i.jsx)(at,{})}),Object(i.jsx)(dt,{children:f.map((e=>Object(i.jsx)(M,{h5:!0,color:s.light,children:nt(d(e))},e)))}),Object(i.jsx)(ct,{children:Object(i.jsx)(et,{})})]}),Object(i.jsx)(ot,{srcSet:re(e),src:null!==n&&void 0!==n?n:"",alt:b})]})};const pt=l.c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(7)}px;
  }
  ${({theme:e})=>e.breakpoints.lgDown} {
    flex-direction: column;
    && > * {
      width: 100%;
      margin-left: 0;
    }
    && > * + * {
      margin-top: ${({theme:e})=>e.spacing(4)}px;
    }
  }
`,ht=l.c.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
  }
  > * + * {
    margin-top: ${({theme:e})=>e.spacing(1)}px;
  }
`,gt=l.c.div`
  width: 300px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
  }
  > * + * {
    margin-top: ${({theme:e})=>e.spacing(3)}px;
  }
  > button {
    max-width: 300px;
  }
`,mt=Object(l.c)(Se)`
  > * + * {
    margin-top: ${({theme:e})=>e.spacing(2)}
  }
`,bt=Object(l.c)(Se)`
  width: 100%;
  justify-content: center;
  align-items: center;
`,ft=l.c.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`,xt=l.c.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({theme:e,spacing:t=1})=>e.spacing(t)}px;
  }
`,jt=l.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * + * {
    margin-left: ${({theme:e,spacing:t=1})=>e.spacing(t)}px;
  }
`,ut=l.c.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * + * {
    margin-left: ${({theme:e})=>e.spacing(2)}px;
  }
`,wt=l.c.div`
  ${({theme:e})=>e.breakpoints.lgDown} {
    max-width: 200px;
  }
`,vt=({imageDetails:e})=>{const t=F((e=>e.lgDown)),{images:a,...c}=ze({id:e.id,tags:e.tags.split(", ").slice(0,3)});return Object(i.jsx)(bt,{children:Object(i.jsx)(Le,{...c,children:a&&Object(i.jsx)(he,{startingWidth:300,images:a,thresholdHeight:t?150:80,maxRows:3})})})},yt=({imageDetails:e})=>{const{images:t,...a}=ze({id:e.id,tags:e.tags.split(", ").slice(0,1),sponsored:!0});return Object(i.jsx)(ft,{children:Object(i.jsx)(Le,{...a,children:t&&Object(i.jsx)(he,{startingWidth:300,images:t,thresholdHeight:120,maxRows:1})})})},Ot=({imageDetails:e})=>{const{comments:t,tags:a}=e,{t:d}=Object(x.a)(),r=Object(l.d)().palette,o=F((e=>e.lgDown)),n=Object(c.useMemo)((()=>oe(e,d)),[e,d]);Object(c.useEffect)((()=>{document.title=n}),[n]);const p=a.split(", "),h=Object(i.jsxs)(s.a.Fragment,{children:[Object(i.jsxs)(jt,{spacing:2,children:[Object(i.jsx)(D,{small:!0,secondary:!0,children:`${t} comments`}),Object(i.jsxs)(M,{children:[Object(i.jsx)(M,{color:r.info,children:d("sign-in")}),"\xa0",d("to-leave-a-comment")]})]}),Object(i.jsx)(ut,{children:p.map((e=>Object(i.jsx)(D,{small:!0,outlined:!0,children:d(e).toLowerCase()},e)))})]});return Object(i.jsxs)(pt,{children:[Object(i.jsxs)(ht,{children:[Object(i.jsx)(lt,{imageDetails:e}),Object(i.jsx)("div",{children:Object(i.jsxs)(M,{color:r.deemphasis,children:[d("sponsored-images-stock")," -",Object(i.jsxs)(M,{color:r.info,children:["\xa0",d("limited-deal"),Object(i.jsx)(M,{bold:!0,color:r.emphasis,children:"\xa0PIXABAY20"}),"\xa0",d("coupon")]})]})}),Object(i.jsxs)(xt,{spacing:4,children:[Object(i.jsx)(yt,{imageDetails:e}),!o&&h]})]}),Object(i.jsxs)(gt,{children:[Object(i.jsx)(Te,{imageDetails:e}),Object(i.jsx)(Xe,{imageDetails:e}),Object(i.jsx)(D,{large:!0,frontAdornment:Object(i.jsx)(De,{}),children:d("free-download")}),Object(i.jsxs)(Se,{children:[Object(i.jsx)(M,{h5:!0,underline:!0,color:r.darkEmphasis,children:d("pixabay-license")}),Object(i.jsxs)(M,{children:[Object(i.jsx)("div",{children:d("free-commercial")}),Object(i.jsx)("div",{children:d("no-attribution")})]})]}),Object(i.jsxs)(mt,{children:[Object(i.jsx)(M,{children:d("like-pixabay-fb")}),Object(i.jsx)(Ee,{})]}),Object(i.jsxs)(xt,{children:[Object(i.jsx)(Se,{small:!0,children:Object(i.jsx)(M,{sub:!0,children:d("related-images")})}),Object(i.jsx)(vt,{imageDetails:e})]}),Object(i.jsx)(Se,{children:Object(i.jsx)(wt,{children:Object(i.jsx)(Ae,{imageDetails:e})})})]}),o&&h]})},Rt=l.c.div`
  padding: ${({theme:e})=>e.spacing(4)}px ${({theme:e})=>e.spacing(3)}px;
`;var Ut=()=>{var e,t;const a=+(null!==(e=null===(t=Object(o.f)().params.photoSlug)||void 0===t?void 0:t.split("-").reverse()[0])&&void 0!==e?e:""),{imageDetails:c,...s}=Ue({id:a});return Object(i.jsx)(ae,{children:Object(i.jsx)(Rt,{children:Object(i.jsx)(Le,{...s,children:c&&Object(i.jsx)(Ot,{imageDetails:c})})})})};var Lt=()=>{const{t:e}=Object(x.a)();return Object(c.useEffect)((()=>{document.title=e("error-404")})),Object(i.jsx)(ae,{children:Object(i.jsx)(M,{children:e("page-not-found")})})},_t=a(50),kt=a(48),Ht=a(49),$t=a(21);_t.a.use(kt.a).use(Ht.a).use($t.e).init({backend:{loadPath:"/pixabay-frontend/locales/{{lng}}/translation.json"},whitelist:["en","de"],fallbackLng:"en",detection:{order:["querystring","navigator"],lookupQuerystring:"lng",checkWhitelist:!0},react:{wait:!0,useSuspense:!1}});const Mt=l.b`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  @font-face {
    font-family: "Open Sans";
    src: url("mem8YaGs126MiZpBA-UFVZ0b.woff2");
  }
  @font-face {
    font-family: "Open Sans Bold";
    src: url("mem5YaGs126MiZpBA-UN7rgOUuhp.woff2");
  }
`,zt=Object(n.a)({basename:"/pixabay-frontend"}),Wt=({history:e=zt,children:t})=>Object(i.jsxs)(l.a,{theme:A,children:[Object(i.jsx)(Mt,{}),Object(i.jsx)(o.b,{history:e,children:t})]}),Dt=()=>Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{exact:!0,path:m.webRoute,children:Object(i.jsx)(Ut,{})}),Object(i.jsx)(o.a,{exact:!0,path:f.webRoute,children:Object(i.jsx)(Me,{})}),Object(i.jsx)(o.a,{path:"*",children:Object(i.jsx)(Lt,{})})]});r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(Wt,{children:Object(i.jsx)(Dt,{})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.e887df47.chunk.js.map