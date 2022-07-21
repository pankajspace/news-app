import { rest } from "msw";

const dummy = {
  status: "ok",
  totalResults: 7323,
  articles: [
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Tom Warren",
      title:
        "Microsoft will sell you a $60 T-shirt with the Windows XP background",
      description:
        "Microsoft is launching a new “Hardwear” clothing collection. It includes a $60 T-shirt with the Windows XP background and an MS Paint-inspired tee.",
      url: "https://www.theverge.com/2022/7/12/23205450/microsoft-hardwear-clothing-collection-windows-xp-t-shirt",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/kuKAzd3grkmsU7QAh1sp7TpWVDQ=/0x55:1800x997/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23762098/BlueSkyGreenHill_Tile_1_39b59c5f_9601_4ed2_9c75_dd302c40e8eb_1800x1800.jpg",
      publishedAt: "2022-07-12T17:16:30Z",
      content:
        "Say hello to Microsofts new Hardwear clothing collection\r\nImage: Microsoft\r\nMicrosoft is launching a new Hardwear clothing collection that includes a Windows XP T-shirt. If youve always wanted to wan… [+1374 chars]",
    },
    {
      source: {
        id: null,
        name: "HELLO!",
      },
      author: "Phoebe Tatham",
      title:
        "Niece Waidhofer dies by suicide following ongoing mental health battle - HELLO!",
      description:
        "<ol><li>Niece Waidhofer dies by suicide following ongoing mental health battle  HELLO!\r\n</li><li>Model Niece Waidhofer dies by suicide at age 31, family says  New York Daily News\r\n</li><li>Model and influencer Niece Waidhofer takes her own life aged 31  Daily…",
      url: "https://www.hellomagazine.com/celebrities/20220623143733/niece-waidhofer-model-influencer-suicide-mental-health-issues/",
      urlToImage:
        "https://images.hellomagazine.com/imagenes/celebrities/20220623143733/niece-waidhofer-model-influencer-suicide-mental-health-issues/0-700-36/niece-waidhofer-t.jpg",
      publishedAt: "2022-06-23T13:06:59Z",
      content:
        "June 23, 2022 - 14:06 BST\r\nPhoebe TathamNiece Waidhofer died by suicide after struggling with mental health battleModel and influencer Niece Waidhofer has died by suicide following her ongoing battle… [+2318 chars]",
    },
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Jessica Conditt",
      title:
        "Scammers are blackmailing restaurants across the US with one-star Google reviews",
      description:
        "For the past week, a handful of high-profile and Michelin-starred restaurants from San Francisco to New York City have been targeted in an extortion campaign weaponizing Google reviews. It appears to be a coordinated effort with a repeatable strategy: The res…",
      url: "https://www.engadget.com/restaurant-scam-google-reviews-one-star-extortion-190651006.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-07/e0a25590-0214-11ed-b33f-36f1f3c87aab",
      publishedAt: "2022-07-12T19:06:51Z",
      content:
        "For the past week, a handful of high-profile and Michelin-starred restaurants from San Francisco to New York City have been targeted in an extortion campaign weaponizing Google reviews. It appears to… [+2640 chars]",
    },
    {
      source: {
        id: null,
        name: "Github.io",
      },
      author: null,
      title: "A more advanced wxErlang Hello World",
      description:
        "In the previous post, we saw how to fire a simple message box from iex. In this blog post, we’ll go deeper (not too much!) and present the elements wxFrame, wxButton, and wxTextCtrl.",
      url: "https://hidnasio.github.io//elixir/wxerlang/2022/06/29/advance-wx-erlang-hello-world.html",
      urlToImage: null,
      publishedAt: "2022-07-04T14:30:37Z",
      content:
        "In the previous post, we saw how to fire a simple message box from iex. In this blog post, well go deeper (not too much!) and present the elements wxFrame, wxButton, and wxTextCtrl.\r\nThe app well bui… [+6802 chars]",
    },
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Adam Speight",
      title: "The Surface Laptop Go 2 Offers Style on a Budget",
      description:
        "Microsoft’s updated midrange model is a top-tier student pick and cheaper MacBook alternative, but its battery leaves much to be desired.",
      url: "https://www.wired.com/review/surface-laptop-go-2/",
      urlToImage:
        "https://media.wired.com/photos/62bf3fcb9c301780cc3296c0/191:100/w_1280,c_limit/Microsoft-Surface-Laptop-Go-2-Gear.jpg",
      publishedAt: "2022-07-04T11:00:00Z",
      content:
        "The Surface Laptop Go 2 is an iterative upgrade from the previous model, theres no doubt about that. But as a device that prioritizes design, portability, and usability, it may just be a shrewd decis… [+2791 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Germain Lussier",
      title:
        "Han Solo Himself, Alden Ehrenreich, Is Joining the Marvel Cinematic Universe",
      description:
        "We may never see the young Han Solo, as played by Alden Ehrenreich, in the Star Wars universe again, but the actor is returning to its overlord, the Walt Disney universe. Ehrenreich has reportedly been cast in Ironheart, the upcoming Marvel Studios Disney+ sh…",
      url: "https://gizmodo.com/disney-marvel-ironheart-star-wars-alden-ehrenreich-1849170908",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5d775fb82c083abe3812fb15510c669c.jpg",
      publishedAt: "2022-07-12T22:00:00Z",
      content:
        "We may never see the young Han Solo, as played by Alden Ehrenreich, in the Star Wars universe again, but the actor is returning to its overlord, the Walt Disney universe. Ehrenreich has reportedly be… [+1900 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Greg Wood at Sandown",
      title:
        "Vadeni charges to Coral-Eclipse success in blanket finish at Sandown",
      description:
        "<ul><li>French Derby winner edges out Mishriff and Native Trail</li><li>Four of six runners separated by a length and a half on line</li></ul>Vadeni, the French Derby winner, was friendless in the market before the Group One Coral-Eclipse here on Saturday but…",
      url: "https://amp.theguardian.com/sport/2022/jul/02/vadeni-charges-to-coral-eclipse-success-in-blanket-finish-at-sandown",
      urlToImage:
        "https://i.guim.co.uk/img/media/8a552460b8c413a578f387ad01a8c17d0d0d81b1/75_345_4425_2655/master/4425.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=0eccc55e371905225adfb13f7e3abddd",
      publishedAt: "2022-07-02T15:04:46Z",
      content:
        "Ayr: 1.42 Mews House, 2.17 Dream For Gold, 2.52 Arch Moon, 3.27 Consensus De Vega, 4.02 Gweedore, 4.37 Highlight Reel, 5.12 Hello Power.\r\nChelmsford: 1.35 Alexas Princess, 2.10 Lila Girl (nap), 2.45 … [+245 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "EditorDavid",
      title:
        "A Detroit Airport's 'Parallel Reality' Display Shows 100 People Different Things",
      description:
        '"As many as 100 people could be looking at the board and see something different," reports the Michigan news site MLive.com. "Look up at a Detroit Metropolitan Airport departure board and you could see a personalized travel itinerary." \n\nDelta\'s site features…',
      url: "https://tech.slashdot.org/story/22/07/16/2330230/a-detroit-airports-parallel-reality-display-shows-100-people-different-things",
      urlToImage: "https://a.fsdn.com/sd/topics/ai_64.png",
      publishedAt: "2022-07-17T03:35:00Z",
      content:
        '"As many as 100 people could be looking at the board and see something different," reports the Michigan news site MLive.com. "Look up at a Detroit Metropolitan Airport departure board and you could s… [+2393 chars]',
    },
    {
      source: {
        id: "polygon",
        name: "Polygon",
      },
      author: "Michael McWhertor",
      title: "No Man’s Sky coming to Nintendo Switch in October",
      description:
        "Hello Games is bringing No Man’s Sky to Nintendo Switch on Oct. 7, and is releasing a new physical edition for PlayStation 5 the same day.",
      url: "https://www.polygon.com/23179237/no-mans-sky-nintendo-switch-release-date-ps5-physical-edition",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/LFuq2Eg8W0t8EPh-Cl2K8mTEFcQ=/0x18:1920x1023/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23645311/No_Man_s_Sky_Switch_Screen_4.jpeg",
      publishedAt: "2022-06-23T13:00:00Z",
      content:
        "Image: Hello Games\r\n\n \n\n Hello Games also has a PS5 physical release coming\n \n Continue reading…",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Guardian staff",
      title:
        "Russia-Ukraine war: three killed in blasts in Russian city near Ukraine border – latest updates",
      description:
        "Dozens of residential buildings also damaged in Belgorod explosions; Ukraine rejects claims Russian forces have surrounded Lysychansk<ul><li>Russian-backed forces increase assault on Lysychansk</li><li>Two more British men captured in Ukraine could face death…",
      url: "https://www.theguardian.com/world/live/2022/jul/03/russia-ukraine-war-three-killed-in-blasts-in-russian-city-near-ukraine-border-latest-updates",
      urlToImage:
        "https://i.guim.co.uk/img/media/0d795af7aef1603a12aa8f04697a19e82deb47bc/0_0_8548_5128/master/8548.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=be5855ba3f0db11336a5759afd76d317",
      publishedAt: "2022-07-03T06:46:07Z",
      content:
        "An adviser to President Volodymyr Zelenskiy has conceded Lysychansk could fall, as fighting intensified in Ukraines last big bastion in the strategic eastern province of Luhansk.Oleksiy Arestovych sa… [+627 chars]",
    },
  ],
};

const base = "https://newsapi.org/v2/everything";
// const key = "0735d324ba874becb7beb8e73fea20f1";
// const params = `?page=${1}&pageSize=${5}&q=${"hello"}&apiKey=${key}`;
// const endpoint = `${base}${params}`;
const endpoint = `${base}`;

export const handlers = [
  // rest.post("/login", null),

  rest.get(endpoint, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),
];
