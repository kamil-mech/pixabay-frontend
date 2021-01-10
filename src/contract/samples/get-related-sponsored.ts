import { randomImage } from './utils'

const fixture = {
  webRoute: '/:category/:photoSlug',
  success: {
    webUrl: '/photos/buddha-statue-monument-buddhism-5868759/',
    request: {
      url: '/api?editors_choice=true&key=6473511-0417f2cad683f1bee54cafe15&page=1&per_page=25&q=buddha'
    },
    response: [
      {
        id: 5868759,
        pageURL: 'https://pixabay.com/photos/buddha-statue-monument-buddhism-5868759/',
        type: 'photo',
        tags: 'buddha, statue, monument',
        previewURL: 'https://cdn.pixabay.com/photo/2020/12/28/22/48/buddha-5868759_150.jpg',
        previewWidth: 99,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752f7ad49248c3_640.jpg',
        webformatWidth: 424,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f7bd59748c05e_1280.jpg',
        imageWidth: 3264,
        imageHeight: 4928,
        imageSize: 1611584,
        views: 4423,
        downloads: 2641,
        favorites: 11,
        likes: 15,
        comments: 2,
        user_id: 3989469,
        user: 'travelphotographer',
        userImageURL: 'https://cdn.pixabay.com/user/2016/12/12/17-25-14-15_250x250.jpg',
        id_hash: '5868759',
        fullHDURL: 'https://pixabay.com/get/53e8d34b4d57a514f6d1867dda79317a123cdbe4524c704f742f7bd59748c05e_1920.jpg',
        imageURL: 'https://pixabay.com/get/53e8d34b4d57a514ea898279c02b327f1422dfe352517148752a7ed2.jpg'
      },
      {
        id: 2519472,
        pageURL: 'https://pixabay.com/photos/budda-ten-thousand-buddhas-monastery-2519472/',
        type: 'photo',
        tags: 'budda, ten thousand buddhas monastery, statue',
        previewURL: 'https://cdn.pixabay.com/photo/2017/07/19/15/33/budda-2519472_150.jpg',
        previewWidth: 100,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/54e5d44a4e55ae14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 425,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/54e5d44a4e55ae14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2848,
        imageHeight: 4288,
        imageSize: 2402544,
        views: 446,
        downloads: 96,
        favorites: 0,
        likes: 1,
        comments: 0,
        user_id: 5836989,
        user: 'Wilhk',
        userImageURL: '',
        id_hash: '2519472',
        fullHDURL: 'https://pixabay.com/get/54e5d44a4e55ae14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/54e5d44a4e55ae14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 5161874,
        pageURL: 'https://pixabay.com/photos/budha-religion-million-gold-5161874/',
        type: 'photo',
        tags: 'budha, religion, million',
        previewURL: 'https://cdn.pixabay.com/photo/2020/05/12/08/50/budha-5161874_150.jpg',
        previewWidth: 75,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/53e1d3424255a814f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 320,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/53e1d3424255a814f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 1724,
        imageHeight: 3453,
        imageSize: 1154870,
        views: 187,
        downloads: 133,
        favorites: 0,
        likes: 1,
        comments: 0,
        user_id: 11274744,
        user: 'jassi_pranav',
        userImageURL: 'https://cdn.pixabay.com/user/2019/01/14/09-45-31-5_250x250.jpg',
        id_hash: '5161874',
        fullHDURL: 'https://pixabay.com/get/53e1d3424255a814f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/53e1d3424255a814ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 5066701,
        pageURL: 'https://pixabay.com/photos/buddha-head-statue-zen-religion-5066701/',
        type: 'photo',
        tags: 'buddha, head, statue',
        previewURL: 'https://cdn.pixabay.com/photo/2020/04/20/07/14/buddha-5066701_150.jpg',
        previewWidth: 150,
        previewHeight: 100,
        webformatURL: 'https://pixabay.com/get/53e0d3454d52ad14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 427,
        largeImageURL: 'https://pixabay.com/get/53e0d3454d52ad14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 6000,
        imageHeight: 4000,
        imageSize: 3029925,
        views: 517,
        downloads: 436,
        favorites: 1,
        likes: 1,
        comments: 1,
        user_id: 15846120,
        user: 'kmarius',
        userImageURL: 'https://cdn.pixabay.com/user/2020/04/20/07-46-26-560_250x250.jpg',
        id_hash: '5066701',
        fullHDURL: 'https://pixabay.com/get/53e0d3454d52ad14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/53e0d3454d52ad14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 970417,
        pageURL: 'https://pixabay.com/photos/statue-budda-buddah-buddhism-970417/',
        type: 'photo',
        tags: 'statue, budda, buddah',
        previewURL: 'https://cdn.pixabay.com/photo/2015/10/03/21/32/statue-970417_150.jpg',
        previewWidth: 100,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/5fe7d5474b55b10ff3d8992cc12c307d103edff852577049742b7ed19f4e_640.jpg',
        webformatWidth: 426,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/5fe7d5474b55b108f5d08460962e3379163adfe44e507748752e7fd19245c6_1280.jpg',
        imageWidth: 1890,
        imageHeight: 2835,
        imageSize: 1684946,
        views: 1219,
        downloads: 356,
        favorites: 4,
        likes: 3,
        comments: 0,
        user_id: 1332067,
        user: 'KlausHausmann',
        userImageURL: 'https://cdn.pixabay.com/user/2019/04/15/19-48-58-644_250x250.jpg',
        id_hash: '970417',
        fullHDURL: 'https://pixabay.com/get/5fe7d5474b55b108feda8460962e3379163adfe44e507748752e7fd19245c6_1920.jpg',
        imageURL: 'https://pixabay.com/get/5fe7d5474b55b114a6de807ac42d367f083ed8e45350754c702778.jpg'
      },
      {
        id: 255463,
        pageURL: 'https://pixabay.com/photos/buddha-buddah-buddhism-religion-255463/',
        type: 'photo',
        tags: 'buddha, buddah, buddhism',
        previewURL: 'https://cdn.pixabay.com/photo/2014/01/31/13/39/buddha-255463_150.jpg',
        previewWidth: 112,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/54e5d0474c51b10ff3d8992cc12c307d103edff852577049742b7ed19f4e_640.jpg',
        webformatWidth: 480,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/54e5d0474c51b108f5d08460962e3379163adfe44e507748752e7fd19245c6_1280.jpg',
        imageWidth: 2112,
        imageHeight: 2816,
        imageSize: 932634,
        views: 1186,
        downloads: 302,
        favorites: 2,
        likes: 5,
        comments: 0,
        user_id: 144528,
        user: 'vincentc',
        userImageURL: '',
        id_hash: '255463',
        fullHDURL: 'https://pixabay.com/get/54e5d0474c51b108feda8460962e3379163adfe44e507748752e7fd19245c6_1920.jpg',
        imageURL: 'https://pixabay.com/get/54e5d0474c51b114a6de807ac42d367f083ed8e45350754c702778.jpg'
      },
      {
        id: 4837710,
        pageURL: 'https://pixabay.com/photos/budda-yoga-med-religion-meditation-4837710/',
        type: 'photo',
        tags: 'budda, yoga, med',
        previewURL: 'https://cdn.pixabay.com/photo/2020/02/10/21/12/budda-4837710_150.jpg',
        previewWidth: 150,
        previewHeight: 84,
        webformatURL: 'https://pixabay.com/get/52e8d6444d53ac14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 360,
        largeImageURL: 'https://pixabay.com/get/52e8d6444d53ac14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4032,
        imageHeight: 2268,
        imageSize: 1024213,
        views: 242,
        downloads: 163,
        favorites: 0,
        likes: 1,
        comments: 0,
        user_id: 10581343,
        user: 'Fexplorer',
        userImageURL: 'https://cdn.pixabay.com/user/2020/04/21/07-01-25-754_250x250.jpg',
        id_hash: '4837710',
        fullHDURL: 'https://pixabay.com/get/52e8d6444d53ac14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/52e8d6444d53ac14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550590,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550590/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550590_150.jpg',
        previewWidth: 112,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5bac14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 480,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5bac14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2448,
        imageHeight: 3264,
        imageSize: 829394,
        views: 1912,
        downloads: 671,
        favorites: 7,
        likes: 7,
        comments: 1,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550590',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5bac14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5bac14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550592,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550592/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550592_150.jpg',
        previewWidth: 112,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5bae14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 480,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5bae14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2448,
        imageHeight: 3264,
        imageSize: 701026,
        views: 1680,
        downloads: 551,
        favorites: 12,
        likes: 6,
        comments: 0,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550592',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5bae14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5bae14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 3387992,
        pageURL: 'https://pixabay.com/photos/chinese-statue-budda-buddha-3387992/',
        type: 'photo',
        tags: 'chinese, statue, budda',
        previewURL: 'https://cdn.pixabay.com/photo/2018/05/10/16/49/chinese-3387992_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL: 'https://pixabay.com/get/55e3dd44435bae14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL: 'https://pixabay.com/get/55e3dd44435bae14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 5184,
        imageHeight: 3456,
        imageSize: 1321635,
        views: 668,
        downloads: 244,
        favorites: 3,
        likes: 3,
        comments: 0,
        user_id: 8959313,
        user: 'xxx_Zephyr_xxx',
        userImageURL: 'https://cdn.pixabay.com/user/2018/05/10/16-44-32-168_250x250.jpg',
        id_hash: '3387992',
        fullHDURL: 'https://pixabay.com/get/55e3dd44435bae14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/55e3dd44435bae14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 4837728,
        pageURL: 'https://pixabay.com/photos/budda-yoga-med-religion-meditation-4837728/',
        type: 'photo',
        tags: 'budda, yoga, med',
        previewURL: 'https://cdn.pixabay.com/photo/2020/02/10/21/20/budda-4837728_150.jpg',
        previewWidth: 150,
        previewHeight: 84,
        webformatURL: 'https://pixabay.com/get/52e8d6444d50a414f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 360,
        largeImageURL: 'https://pixabay.com/get/52e8d6444d50a414f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4032,
        imageHeight: 2268,
        imageSize: 1569731,
        views: 273,
        downloads: 194,
        favorites: 3,
        likes: 3,
        comments: 0,
        user_id: 10581343,
        user: 'Fexplorer',
        userImageURL: 'https://cdn.pixabay.com/user/2020/04/21/07-01-25-754_250x250.jpg',
        id_hash: '4837728',
        fullHDURL: 'https://pixabay.com/get/52e8d6444d50a414f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/52e8d6444d50a414ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 4188734,
        pageURL: 'https://pixabay.com/photos/budha-sculpture-buddha-statue-4188734/',
        type: 'photo',
        tags: 'budha, sculpture, buddha',
        previewURL: 'https://cdn.pixabay.com/photo/2019/05/08/14/25/budha-4188734_150.jpg',
        previewWidth: 100,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/52e1dd4b4d51a814f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 427,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/52e1dd4b4d51a814f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 3285,
        imageHeight: 4927,
        imageSize: 4995498,
        views: 856,
        downloads: 477,
        favorites: 3,
        likes: 5,
        comments: 0,
        user_id: 1785462,
        user: 'Devanath',
        userImageURL: 'https://cdn.pixabay.com/user/2016/09/02/10-09-22-263_250x250.png',
        id_hash: '4188734',
        fullHDURL: 'https://pixabay.com/get/52e1dd4b4d51a814f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/52e1dd4b4d51a814ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 5130200,
        pageURL: 'https://pixabay.com/photos/bald-head-budha-religion-statue-5130200/',
        type: 'photo',
        tags: 'bald head, budha, religion',
        previewURL: 'https://cdn.pixabay.com/photo/2020/05/04/18/50/bald-head-5130200_150.jpg',
        previewWidth: 100,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/53e1d6434852ac14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 427,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/53e1d6434852ac14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4000,
        imageHeight: 6000,
        imageSize: 6577823,
        views: 793,
        downloads: 597,
        favorites: 1,
        likes: 2,
        comments: 0,
        user_id: 4691618,
        user: 'planet_fox',
        userImageURL: 'https://cdn.pixabay.com/user/2019/09/29/01-08-05-485_250x250.jpeg',
        id_hash: '5130200',
        fullHDURL: 'https://pixabay.com/get/53e1d6434852ac14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/53e1d6434852ac14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 2687004,
        pageURL: 'https://pixabay.com/photos/budda-phuket-thailand-buddhism-2687004/',
        type: 'photo',
        tags: 'budda, phuket, thailand',
        previewURL: 'https://cdn.pixabay.com/photo/2017/08/27/17/53/budda-2687004_150.jpg',
        previewWidth: 150,
        previewHeight: 112,
        webformatURL: 'https://pixabay.com/get/54e6dd444a52a814f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL: 'https://pixabay.com/get/54e6dd444a52a814f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4608,
        imageHeight: 3456,
        imageSize: 3830873,
        views: 1683,
        downloads: 653,
        favorites: 7,
        likes: 11,
        comments: 0,
        user_id: 4555718,
        user: 'desaitechindia',
        userImageURL: 'https://cdn.pixabay.com/user/2017/08/27/18-09-01-710_250x250.jpg',
        id_hash: '2687004',
        fullHDURL: 'https://pixabay.com/get/54e6dd444a52a814f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/54e6dd444a52a814ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550585,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550585/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550585_150.jpg',
        previewWidth: 127,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5aa914f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 542,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5aa914f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2134,
        imageHeight: 2519,
        imageSize: 1260923,
        views: 2594,
        downloads: 782,
        favorites: 12,
        likes: 11,
        comments: 0,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550585',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5aa914f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5aa914ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 4837729,
        pageURL: 'https://pixabay.com/photos/budda-yoga-med-religion-meditation-4837729/',
        type: 'photo',
        tags: 'budda, yoga, med',
        previewURL: 'https://cdn.pixabay.com/photo/2020/02/10/21/20/budda-4837729_150.jpg',
        previewWidth: 150,
        previewHeight: 84,
        webformatURL: 'https://pixabay.com/get/52e8d6444d50a514f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 360,
        largeImageURL: 'https://pixabay.com/get/52e8d6444d50a514f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4032,
        imageHeight: 2268,
        imageSize: 2171945,
        views: 692,
        downloads: 443,
        favorites: 7,
        likes: 7,
        comments: 1,
        user_id: 10581343,
        user: 'Fexplorer',
        userImageURL: 'https://cdn.pixabay.com/user/2020/04/21/07-01-25-754_250x250.jpg',
        id_hash: '4837729',
        fullHDURL: 'https://pixabay.com/get/52e8d6444d50a514f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/52e8d6444d50a514ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550593,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550593/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/35/buddha-1550593_150.jpg',
        previewWidth: 112,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5baf14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 480,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5baf14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2448,
        imageHeight: 3264,
        imageSize: 663796,
        views: 2720,
        downloads: 981,
        favorites: 20,
        likes: 19,
        comments: 1,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550593',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5baf14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5baf14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550591,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550591/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550591_150.jpg',
        previewWidth: 111,
        previewHeight: 150,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5bad14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 477,
        webformatHeight: 640,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5bad14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 2280,
        imageHeight: 3058,
        imageSize: 533442,
        views: 7808,
        downloads: 4052,
        favorites: 46,
        likes: 38,
        comments: 0,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550591',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5bad14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5bad14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 3428380,
        pageURL: 'https://pixabay.com/photos/thailand-budda-buddhism-religion-3428380/',
        type: 'photo',
        tags: 'thailand, budda, buddhism',
        previewURL: 'https://cdn.pixabay.com/photo/2018/05/25/05/59/thailand-3428380_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL: 'https://pixabay.com/get/55e4d74b495aac14f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL: 'https://pixabay.com/get/55e4d74b495aac14f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 4991,
        imageHeight: 3327,
        imageSize: 5932298,
        views: 4874,
        downloads: 2043,
        favorites: 42,
        likes: 24,
        comments: 4,
        user_id: 5650887,
        user: 'Leslin_Liu',
        userImageURL: 'https://cdn.pixabay.com/user/2018/05/30/05-42-25-953_250x250.jpg',
        id_hash: '3428380',
        fullHDURL: 'https://pixabay.com/get/55e4d74b495aac14f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/55e4d74b495aac14ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550589,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550589/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550589_150.jpg',
        previewWidth: 150,
        previewHeight: 112,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5aa514f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5aa514f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 3264,
        imageHeight: 2448,
        imageSize: 727656,
        views: 17236,
        downloads: 7540,
        favorites: 101,
        likes: 81,
        comments: 7,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550589',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5aa514f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5aa514ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      },
      {
        id: 1550588,
        pageURL: 'https://pixabay.com/photos/buddha-india-mind-prayer-concept-1550588/',
        type: 'photo',
        tags: 'buddha, india, mind',
        previewURL: 'https://cdn.pixabay.com/photo/2016/07/29/06/34/buddha-1550588_150.jpg',
        previewWidth: 150,
        previewHeight: 112,
        webformatURL: 'https://pixabay.com/get/57e5d0434f5aa414f1dc8460962e3379163adfe44e507748752e7fd19245c6_640.jpg',
        webformatWidth: 640,
        webformatHeight: 480,
        largeImageURL: 'https://pixabay.com/get/57e5d0434f5aa414f6da8c7dda79317a123cdbe4524c704f742f7ad09248cd5b_1280.jpg',
        imageWidth: 3264,
        imageHeight: 2448,
        imageSize: 718811,
        views: 30395,
        downloads: 17278,
        favorites: 173,
        likes: 152,
        comments: 6,
        user_id: 41330,
        user: '41330',
        userImageURL: '',
        id_hash: '1550588',
        fullHDURL: 'https://pixabay.com/get/57e5d0434f5aa414f6d1867dda79317a123cdbe4524c704f742f7ad09248cd5b_1920.jpg',
        imageURL: 'https://pixabay.com/get/57e5d0434f5aa414ea898279c02b327f1422dfe35251704d702a73d7.jpg'
      }
    ]
  },
  // Cause: invalid key
  error: {
    webUrl: '/photos/nowhere-999999999999999999999999999999999999/',
    request: {
      url: '/api?editors_choice=true&key=1111111-1111111111111111111111111&page=1&per_page=25&q=buddha%2Bstatue%2Bmonument'
    },
    response: new Error('Request failed with status code 400')
  }
}

// Links expire so we have to replace them with something
// permanent to be able to render storybook properly
// @ts-expect-error
if (window.storybook) {
  for (const response of fixture.success.response) {
    Object.assign(response, randomImage())
  }
}

export default fixture
