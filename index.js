import Express from "express";
import BodyParser from "body-parser";

const Server = new Express();
Server.use(BodyParser.urlencoded({ extended: false }));

const emailListRoute1 = {
  "nguyenmai161188@gmail.com":
    "https://drive.google.com/uc?export=download&id=1__0HhEObOTGNJuvWjHroeH0DIo39GTcz",
  "ngocnb85@gmail.com":
    "https://drive.google.com/uc?export=download&id=1_0ZFL6aZMe52OyhTIFuAfMwPmMOSOL1m",
  "hangntt.bdh@vietcombank.com.vn":
    "https://drive.google.com/uc?export=download&id=1_iyMIwQeM9nVb8Xq4xSDp5mKe-BcSPWb",
  "plquyen@misa.com.vn":
    "https://drive.google.com/uc?export=download&id=1_rkBFLHDE90IXk6F9GMJUd7dq6hfVgK7",
  "nhatquangtran2012@gmail.com":
    "https://drive.google.com/uc?export=download&id=10gsmUrN3Q4uoxCyNLdSc6SwZY7HR645x",
  "buungan.huynh@gmail.com":
    "https://drive.google.com/uc?export=download&id=10yewk-RrovynefxOB6l3Z_5-FWjNqlud",
  "vfa.uyenptv@gmail.com":
    "https://drive.google.com/uc?export=download&id=11F4uYorfeo2rEigJu8obxc5cltiOb4n4",
  "nguyenhuonggiang1709@gmail.com":
    "https://drive.google.com/uc?export=download&id=12VmfMGtNayHWErLO1UyYx2AoNATQWz_p",
  "loanpt0209@gmail.com":
    "https://drive.google.com/uc?export=download&id=139PyVAqSDNVBdBefU3E486JChA9hsipj",
  "84thudung.le@gmail.com":
    "https://drive.google.com/uc?export=download&id=13SRUdfYDpyEeYRmZN4DvYOINFf2DDNsy",
  "thuyduong.pm01@gmail.com":
    "https://drive.google.com/uc?export=download&id=14lwg5fNuHbezgB8c8_s02Go8Zy46Sfv8",
  "tranngoc120992@gmail.com":
    "https://drive.google.com/uc?export=download&id=14v2eKCt_FVtoJdd9QniOJfqzmwuXkcMY",
  "tranluyen.hkht@gmail.com":
    "https://drive.google.com/uc?export=download&id=14ZqtQCieT-LkFzAnYf9rt8gvmf6QC2hl",
  "haianhdinh1807@gmail.com":
    "https://drive.google.com/uc?export=download&id=150q3OXDFKnrEKcik4lgsROYeZIvlbiFF",
  "viet.hungthinh@yahoo.com.vn":
    "https://drive.google.com/uc?export=download&id=15ofb0P9VYxTa6cj98Svap1U2jRcvM8Uw",
  "nguyentheu1603@gmail.com":
    "https://drive.google.com/uc?export=download&id=16_KNrk2VWc0nTncmWuUcbKWfh9XaDfRP",
  "hangtt3989@gmail.com":
    "https://drive.google.com/uc?export=download&id=17er_cS8Paw7DZK_cWpxMA9fYxNHLEC1Q",
  "bshongngan@gmail.com":
    "https://drive.google.com/uc?export=download&id=17ktohfha1AJh22o4TNM7dZwqxDqARTdu",
  "huongaovnua@gmail.com":
    "https://drive.google.com/uc?export=download&id=1837ZI5-ZTN2Eq7UhjvKTS5B7--CVe7QT",
  "quanthaochi@gmail.com":
    "https://drive.google.com/uc?export=download&id=18L1duLxAnT_8RxrdH-5R73vPSwRL1J4Z",
  "nguyenhang1418@gmail.com":
    "https://drive.google.com/uc?export=download&id=18lE76SjEic57usX1FoZE3npvcfUkaPhZ",
  "linhpt2710@gmail.com":
    "https://drive.google.com/uc?export=download&id=19Qr1GeZBhy2Qy6TYV3xRFCNS7zulrsWZ",
  "quenn@hau.edu.vn":
    "https://drive.google.com/uc?export=download&id=1AgtejVsohD6Df5mh4lol_hwTKFoar7yq",
  "phuonglanxn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1AiQwB2IFMQMekg2N-VnV5t7cUnHJ8IxE",
  "huonggiang.ftu47@gmail.com":
    "https://drive.google.com/uc?export=download&id=1AlaQB4SEOt98EXqkm415Kq2-6d4ZZG0h",
  "ngoc.ftu22@icloud.com":
    "https://drive.google.com/uc?export=download&id=1aSY9-7LpEW6rC9VjyWdShEjsGFmD_8Dr",
  "hoaihm15@gmail.com":
    "https://drive.google.com/uc?export=download&id=1biTN509Ntw6AxhGKDSAYJAwcOhyxB2yO",
  "lttmai152@gmail.com":
    "https://drive.google.com/uc?export=download&id=1c_-Wu3zo548RS47ioJGzdPtUQnaj6dPb",
  "thuytienanhngoc@gmail.com":
    "https://drive.google.com/uc?export=download&id=1c7HjJRzxCTo2oYvGdagoyBJD6R1PNSCp",
  "lizi225@gmail.com":
    "https://drive.google.com/uc?export=download&id=1cLoD_4LZ1n_GDfXUYliHOiAzz8RiiQHt",
  "huyhoang17287@gmail.com":
    "https://drive.google.com/uc?export=download&id=1CQBU_lwW5L-4XM1LuETse0ky34ZnJcKA",
  "tranmo2529@gmail.com":
    "https://drive.google.com/uc?export=download&id=1CSbOpuYYA-m0gDHLWzd1HXzuBKxyGD1F",
  "baoyen.hanetjsc@gmail.com":
    "https://drive.google.com/uc?export=download&id=1DAskdY5KbvrnevLUubL4Rv-4df-uj4Ba",
  "nguyenthuyngocvn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1diEPXAoXfo5a-_RrlzIJRFl7cDWGZJ-q",
  "vuduongtruongxuan@gmail.com":
    "https://drive.google.com/uc?export=download&id=1dJ7CulYPDyDFiVVY6v0x4wIi6Ak53v8S",
  "hoatuyetgiabang17@gmail.com":
    "https://drive.google.com/uc?export=download&id=1dZT-IQ7Z62Ujbl8-kS5VF32G_zvMkq5w",
  "nhhung2013@gmail.com":
    "https://drive.google.com/uc?export=download&id=1E8b0YbT-lud5NvEHjNaDwWazmV5u1eSo",
  "dohang@gmail.com":
    "https://drive.google.com/uc?export=download&id=1EbhHNyoiZFs1p3iiEYvs5xoBz_jF-d2W",
  "hang.tuyetson@gmail.com":
    "https://drive.google.com/uc?export=download&id=1efuY_X0Eod68t7Td_jYKwZ9WzBcvQr-Z",
  "huyenthuong88vnu@gmail.com":
    "https://drive.google.com/uc?export=download&id=1eTZfayAKWjCh4n94nqEYeCdA_071hLvn",
  "vanthuha.yhct@gmail.com":
    "https://drive.google.com/uc?export=download&id=1f_nqdrhupu7KEW_Av_nkmVidptErEeJV",
  "quangthang13ngs@gmail.com":
    "https://drive.google.com/uc?export=download&id=1f6zp90Icq8t2hMgGTQ4hG7_4SxuS2rhz",
  "nguyenhuong020683@gmail.com":
    "https://drive.google.com/uc?export=download&id=1fc5J4jEW227DBRWKjP7EXnA9vrsd_fTR",
  "tam.trinh1983@gmail.com":
    "https://drive.google.com/uc?export=download&id=1fjOoflpuKxCgDPg0NniSJdE2F3HpQLne",
  "mainq@prime.vn":
    "https://drive.google.com/uc?export=download&id=1FLa9lYHFK8FsuBR1NkUvyfp2rD_23FJL",
  "dieuthuy84@gmail.com":
    "https://drive.google.com/uc?export=download&id=1FmAL3XkYsZ4K-khZ3XHPfTgyZvgWBEa8",
  "duc.uce@gmail.com":
    "https://drive.google.com/uc?export=download&id=1fZ7-pDUBljgmKfxAnN3iI2cIT_-JjfHP",
  "huonganna90@gmail.com":
    "https://drive.google.com/uc?export=download&id=1g4C4TrzicBUP-VVYyWxa-hK4vFyWrYML",
  "quynhgiangnhatanh@gmail.com":
    "https://drive.google.com/uc?export=download&id=1gEBXt03r7KmsP2FnVsaG3TJRuhCNh4aS",
  "maybelle146@gmail.com":
    "https://drive.google.com/uc?export=download&id=1gFT4IgiIlIWPhNxv5ds3vSiU61Mt5DSv",
  "minhthu.lion88@gmail.com":
    "https://drive.google.com/uc?export=download&id=1GI3YUs1k6CqxvvU6vDg9JoEDHOM0S_Do",
  "vancongnghia@gmail.com":
    "https://drive.google.com/uc?export=download&id=1gqIznK1BZiHft3qjf6EXZc1zUA_K7Elr",
  "tranghm85@gmail.com":
    "https://drive.google.com/uc?export=download&id=1Hiji0naiczaDuvlgyExWzDveIkywcMdC",
  "huong9190@gmail.com":
    "https://drive.google.com/uc?export=download&id=1HisMxIyOC8HOIz9Z1NYSaT-Q5iInYGFL",
  "havang2811@gmail.com":
    "https://drive.google.com/uc?export=download&id=1HjNeYNc2hbOoV35TQ7ZMH0B3_zv86iqt",
  "nguyenthientb@gmail.com":
    "https://drive.google.com/uc?export=download&id=1hQjzX-GZLvdtAhDsOCYdZXGamI4_yxdI",
  "vova_vovin@yahoo.com":
    "https://drive.google.com/uc?export=download&id=1iFx3DF_5cGAYGkAOYRns4hCsSF-9PFpg",
  "mr.minhbap@gmail.com":
    "https://drive.google.com/uc?export=download&id=1IGoV3VFniwt-bC1Kj-fhmCIkiMykW7-4",
  "thyennhi11189@gmail.com":
    "https://drive.google.com/uc?export=download&id=1iILl7n142DLR5EwiwfANvUfcuBBseNBu",
  "vuphongxdhn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1iMcFoipJQBntrBE_Za84pOKMEfKLPdkU",
  "thuyvudhtb@gmail.com":
    "https://drive.google.com/uc?export=download&id=1izxFzGmLA-7bwgho7kquRJC8RYtcXOKc",
  "trinhbichhao@gmail.com":
    "https://drive.google.com/uc?export=download&id=1jAD82JVL7YNfx0xYlS8aE8XlYLw5kTpX",
  "thuha1384@gmail.com":
    "https://drive.google.com/uc?export=download&id=1jrEYCzYmfIL6kinIIudMDNgmcgjYRxS1",
  "phuongntt3010@gmail.com":
    "https://drive.google.com/uc?export=download&id=1kNNB4VZ20vkoMqLA0n3i5y5jkt1ESihU",
  "nguyenthuthuy.176@gmail.com":
    "https://drive.google.com/uc?export=download&id=1KRItmyZP3IOlFi6Q46i6w0XYCoRqK1KV",
  "cookiemeomeo03@gmail.com":
    "https://drive.google.com/uc?export=download&id=1LMkwz3X0XlpSGjdAnGBtnrUlCgzT5fwc",
  "bichngocdt.psy@gmail.com":
    "https://drive.google.com/uc?export=download&id=1LRZI6DkDKUcFdmZ11Cq-4TQAPKmKjOjo",
  "thuyntb84@gmail.com":
    "https://drive.google.com/uc?export=download&id=1Ls82ws0xCN6P067xQYgoXFAtlM0tWVJF",
  "kieuminhnb.vn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1m1io3usNHG6g0h832O_PSJlbUYl3WQos",
  "elistran.sh@gmail.com":
    "https://drive.google.com/uc?export=download&id=1mqwby4Muy0w0EeFHuSKNwYtUjH8bn5pr",
  "xhoneystarx@gmail.com":
    "https://drive.google.com/uc?export=download&id=1NHUuo1uGcHw2TPm3V6GeDQvi0J4zSv9O",
  "linhnguyendieulinh@gmail.com":
    "https://drive.google.com/uc?export=download&id=1npmZObcVxuxnd46XlQRdKlF4km2-IWES",
  "thuyhuyen.tc@gmail.com":
    "https://drive.google.com/uc?export=download&id=1nvaRfJuhCdVAZPbUUcyezjpkrOcvf_Q_",
  "thuymuikt29@gmail.com":
    "https://drive.google.com/uc?export=download&id=1OCOmAYKTNm8hTGA_n3JArLiDMpJOm1pO",
  "nguyenthilien31012016@gmail.com":
    "https://drive.google.com/uc?export=download&id=1P9qY2RiGgz_UDHjSOf7EsQpgSAQeTGWn",
  "lethu88hp@gmail.com":
    "https://drive.google.com/uc?export=download&id=1pkdrXNvIxsFVBq6c0UTiwXFLRThyNaoB",
  "nguyenthithaohvu@gmail.com":
    "https://drive.google.com/uc?export=download&id=1pn4CyD1SPoOAO7AF2nGpZqqEqrQHZwgL",
  "cocavu2014@gmail.com":
    "https://drive.google.com/uc?export=download&id=1QnXMWtq1TuBy1qMGUmd79KDEbWXj87Gi",
  "mailinh254@gmail.com":
    "https://drive.google.com/uc?export=download&id=1qsAtxxQjFk1DxPMGouCiVizneHktmVjy",
  "nqmai1612@gmail.com":
    "https://drive.google.com/uc?export=download&id=1qTWu7hYk0v5oUj0d9O8kyli4pp5ReZWQ",
  "lanphuong2305@gmail.com":
    "https://drive.google.com/uc?export=download&id=1qxc13nVTowhQM-KohdOwcHP_lKXDvCJt",
  "phuongthynth@gmail.com":
    "https://drive.google.com/uc?export=download&id=1QZ1mzeNT7GfHyUiJ70zC0Zlryrkz4_Cq",
  "ntnquynh90@gmail.com":
    "https://drive.google.com/uc?export=download&id=1rCR61dXsFJPIOXawbyroahdoqc0RyvNJ",
  "len.nguyenthi@wellspring.edu.vn":
    "https://drive.google.com/uc?export=download&id=1rIzADy_cDx6ssIiWf03w3Pl-mjlOjw2P",
  "songnguyentrung@gmail.com":
    "https://drive.google.com/uc?export=download&id=1rQNthlp4_A8NrhZlwbqrIg0sCGU61yID",
  "quyenqtm@gmail.com":
    "https://drive.google.com/uc?export=download&id=1RTUgZYB0T15nKtZgmG0nI8AqW74P58zl",
  "thuhienqtb@gmail.com":
    "https://drive.google.com/uc?export=download&id=1RwbpDT5DpKQgzYTmNv109gu9Ib8YudbJ",
  "thinhbk@gmail.com":
    "https://drive.google.com/uc?export=download&id=1S0qTDP6O8RylKqDpk7sZa0oT55ShUr5n",
  "taviethoang@gmail.com":
    "https://drive.google.com/uc?export=download&id=1SDPuKFGMY6tJwZln8kqljaLRQ9Wql2eu",
  "lagio2609@gmail.com":
    "https://drive.google.com/uc?export=download&id=1SNAu9FCxmF5TnE8QDTn-m4Qttob2zPST",
  "camhang192@gmail.com":
    "https://drive.google.com/uc?export=download&id=1sp63ntcYqgGqpgSuzHIhlPrUO9_d6l_U",
  "hienthu187@gmail.com":
    "https://drive.google.com/uc?export=download&id=1sQ_zfuAwAyW19P-kWhiTGDZOl8frsVd4",
  "kimngana9@gmail.com":
    "https://drive.google.com/uc?export=download&id=1SqsQV7x8TnMI7HpJgsebvYfMFEBqMVUW",
  "phuongct1092@gmail.com":
    "https://drive.google.com/uc?export=download&id=1t4i5Sg-yA8HULXtbipLrrfeihoZtPeom",
  "haiyenpt136@gmail.com":
    "https://drive.google.com/uc?export=download&id=1TfEGiaX1SlY-okUJgh4G28zXotWMdvvC",
  "linhnd1411@gmail.com":
    "https://drive.google.com/uc?export=download&id=1TIKCbh8f4F8VX5DWeBCap5L09cUhQdO6",
  "minhkhue.vu@gmail.com":
    "https://drive.google.com/uc?export=download&id=1TPkTrrbyf6LfyHTcpKN3YWcQKIc5Q06r",
  "thutrang152585@gmail.com":
    "https://drive.google.com/uc?export=download&id=1TQwrSq9GMzCbb3XcfCXogEEpVoKow9Zp",
  "nguyentien4291@gmail.com":
    "https://drive.google.com/uc?export=download&id=1uP1J-B-weU8MhVPTr2zKGgMtOPMqUXSs",
  "tktuyen77@gmail.com":
    "https://drive.google.com/uc?export=download&id=1UqE2lRZ6Kys-ceyxbmCTancNAkKV0fMg",
  "quynhtram201511@gmail.com":
    "https://drive.google.com/uc?export=download&id=1uS0rOUN5jHZ0UFBhItw2L4gk_KtVfJrq",
  "cuonglpd@gmail.com":
    "https://drive.google.com/uc?export=download&id=1uWzcPC_zcKzqnqgUxQxdTPyAqCTqBZ6Q",
  "tuyet.vu0808@gmail.com":
    "https://drive.google.com/uc?export=download&id=1vCpcOCbA2Fb9BTHUmWQJfAIe4RPyr9Um",
  "tranlenuhong@icloud.com":
    "https://drive.google.com/uc?export=download&id=1vdOAS0loxNW3khkAvdEinJCYS4VrwYa4",
  "kingprovietnam@gmail.com":
    "https://drive.google.com/uc?export=download&id=1vGmlgxihJS03FFIGw688ReDJCgQcz91S",
  "bismiling@gmail.com":
    "https://drive.google.com/uc?export=download&id=1vNowglJzIporIHaFtdA8pFJ4yBBoTk1c",
  "hientit04@gmail.com":
    "https://drive.google.com/uc?export=download&id=1vovNik4wJ52uV42zKPRE_uJ4GTmbaecM",
  "phanlinh2710@gmail.com":
    "https://drive.google.com/uc?export=download&id=1WJq89-WBFGr9RhwdC2yiBAw1wpm5nMIC",
  "dokieulien@gmail.com":
    "https://drive.google.com/uc?export=download&id=1wN9xD9RWWHY_nGofBR3E5BvH9GqFKGuk",
  "cuongdm81@gmail.com":
    "https://drive.google.com/uc?export=download&id=1WpxzP8jD0b0m7sPPgFQRyWs4dcFMoyDY",
  "hathu86almus@gmail.com":
    "https://drive.google.com/uc?export=download&id=1XHBZLru6ooMgtGvGCO24VoE-e1uYiDN_",
  "minhkhue.vu23@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ZdYtfolhvYt-IHpIGREt-8Uj_BsN99lT",
  "hacame192@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ZVEUuQTyKxPVeo2ZrxFpzUa1u8H_IL-D",
  "nguyenthituoi220893@gmail.com":
    "https://drive.google.com/uc?export=download&id=13AhcnM6s4fqHVulTUzhFBtAwZXV2rXFc",
  "nguyenhien210@gmail.com":
    "https://drive.google.com/uc?export=download&id=12BhWF5VGuZEYA_JnAWowaFxglkvn4lPR",
  "annie.bk2020@gmail.com":
    "https://drive.google.com/uc?export=download&id=18IgzDDoAYrFkBUR8pBab4cZB0JBsfrZ7",
  "camduyenpham@gmail.com":
    "https://drive.google.com/uc?export=download&id=1JGFiDx1pirg7zQ8gk9FtCB39lBHxX5Eu",
  "luyennt@vnu.edu.vn":
    "https://drive.google.com/uc?export=download&id=1fSbYLEv1y8-zLHxQpap_tdMX9lNcfVun",
  "thaonguyen83@gmail.com":
    "https://drive.google.com/uc?export=download&id=1gSJpIGDz-DZJgXYKIAqE9Zeg-cjHZTR9",
  "thinh.cd13@hanoithanglongxala.edu.vn":
    "https://drive.google.com/uc?export=download&id=1Uim1QyED2sZp2hu20yqtU0QoGEl2UBvu",
  "nguyendieuhang76@gmail.com":
    "https://drive.google.com/uc?export=download&id=1nQVGCKsbpjAhHX9Hcj5LW5hYPc3N4i2I",
  "dangson01.compuland@gmail.com":
    "https://drive.google.com/uc?export=download&id=1IZrTSIzinWomKpdCInof9RKrBESUObQT",
  "mariatdf@gmail.com":
    "https://drive.google.com/uc?export=download&id=1nwSD96Yrdr0IA_l346ehp4kNqlUc-643",
  "chinhtt2008@gmail.com":
    "https://drive.google.com/uc?export=download&id=12xc49jA45W94p0fGGm8SGrieFiomBtL2",
  "maictt88@gmail.com":
    "https://drive.google.com/uc?export=download&id=1q8Mnke57RcWYGHGnq3zngKHxgF88t1da",
  "dogiavinh94@gmail.com":
    "https://drive.google.com/uc?export=download&id=1_96ZmAtgHJKYsR2-LXjEU7yaEdYzmlha",
  "nth8003.2@gmail.com":
    "https://drive.google.com/uc?export=download&id=1nnVf7ZL2_snzDpjmmpq-RyMcgJJcX4bz",
  "lethanhthuy206@gmail.com":
    "https://drive.google.com/uc?export=download&id=10hfCP5Es3FKLQEAn22oyKUegF2UqNEtview",
  "hahuonggiang.picci@gmail.com":
    "https://drive.google.com/uc?export=download&id=1m0qsFdK4bzkz8uHRmtNmDSlaAN97q4Mj",
  "tuananh.aad@gmail.com":
    "https://drive.google.com/uc?export=download&id=1dzaTeuGmkP0cx4aOcZ_ebM2ze7bSv0cv",
  "candy.eet@gmail.com":
    "https://drive.google.com/uc?export=download&id=1J8QieOnDVNjRCDTzQk6Pj3jF0aPjk2bO",
  "maipham3290@gmail.com":
    "https://drive.google.com/uc?export=download&id=16PB0MZyc2m44AvUr4amt1fu8PeHptjtA",
  "ngado13a@gmail.com":
    "https://drive.google.com/uc?export=download&id=1a-uPAgoZSHi0RbVsuwnDRjtVbxcsqfXW",
  "thuyancamtrung1705@gmail.com":
    "https://drive.google.com/uc?export=download&id=1FKnaHea5d5EfpmPr58ToFInJHbMM_ycS",
  "thosoc1521@gmail.com":
    "https://drive.google.com/uc?export=download&id=1s1RuT781Ueyn8g_j_CoVpY6QGZZIX3O_",
  "loc880815@gmail.com":
    "https://drive.google.com/uc?export=download&id=1BzCAWcZbCwb7lI9V1-HkzGNMULl-YbND",
  "daothiphuongthuy@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ZrccgrB9CZyEpO1kZ75w4nfrtxYR95sL",
  "hhyen668@gmail.com":
    "https://drive.google.com/uc?export=download&id=13WIqVg7Xw-SlWMg7nvRsa8BlaTkwPDbf",
  "memoonnhe@gmail.com":
    "https://drive.google.com/uc?export=download&id=1N05MfihJjkeDKa3xdKVZ6TDqwHIA0Uhe",
  "huongthuy.hvtc@gmail.com":
    "https://drive.google.com/uc?export=download&id=1B9gLZVuuJtnY9jrC3E4ZrYEoa_altxjF",
  "ngocanhct.cdy@gmail.com":
    "https://drive.google.com/uc?export=download&id=1UP9TZxPvDEU-63DrLpIkFm9fec1xAKF6",
  "anhvanmath@gmail.com":
    "https://drive.google.com/uc?export=download&id=1iVPvU4uWuBM8acVUZi65lCLizOqKhOr7",
  "huonglt271989@gmail.com":
    "https://drive.google.com/uc?export=download&id=1WNSJD9eDXwKohf3JLr6Kz4fPYccONMbI",
  "binhlequang@gmail.com":
    "https://drive.google.com/uc?export=download&id=1DhDX5GR27-UangnqL-uFO__c_3GuSl7T",
  "buithuhuong182@gmail.com":
    "https://drive.google.com/uc?export=download&id=1OSQ9Y5RXLHDg3iylStH4bHWwOTZEicEb",
  "minhanh81@gmail.com":
    "https://drive.google.com/uc?export=download&id=1_xOuCIir0H30xh6xS-tThfkCeXKII4Fq",
  "conandoy_hn@yahoo.com":
    "https://drive.google.com/uc?export=download&id=1sQiS5Crv1Ae418U7NNwmitOp0a5zLsJk",
  "baquy2112@gmail.com":
    "https://drive.google.com/uc?export=download&id=1yPfVqGUr24wMrzjCyo_uW1tgKmiy-Z-W",
  "huongnt293@gmail.com":
    "https://drive.google.com/uc?export=download&id=1EECKKwlJakhNgz0RqEAb3cu0CUZ9jh0c",
  "thuylinh069@gmail.com":
    "https://drive.google.com/uc?export=download&id=1xb7Zb9qUtCC8b5eos8BD3knX-q4mAhxH",
  "ha.diepnn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1x60YHw8LPLO8cPiwgfS6Ym7cNUF6kaqx",
  "dainguyendinh85@gmail.com":
    "https://drive.google.com/uc?export=download&id=1a3zMRbqWf20lbvauyQX7WepbrZeBWjw8",
  "tungvegeta@gmail.com":
    "https://drive.google.com/uc?export=download&id=12Fbj_EqtNdk8VX0CEUrqP0VxCEFNfoHo",
  "phuongduong2309@gmail.com":
    "https://drive.google.com/uc?export=download&id=1fi-AxXJQJf9km-rNVaXkKd_kRcQYdzQM",
  "hatathi1989@gmail.com":
    "https://drive.google.com/uc?export=download&id=1RoBECSaD1826UaF0Yx_Gl4NEmtgSRLAn",
  "thuhuyenvt@gmail.com":
    "https://drive.google.com/uc?export=download&id=19VA3A64Uw9QS6zcyg_AEwZnKnCPdXbeT",
  "ringlove1001@gmail.com":
    "https://drive.google.com/uc?export=download&id=1rusFLxWRNzSZHi6Jz_xPsLlMpirltq5c",
  "hn.vananh@gmail.com":
    "https://drive.google.com/uc?export=download&id=1xGnMqJ3Fv4_q5n-LGiXZcecGJ-x7O0Tf",
  "trang_trungquoc85@yahoo.com":
    "https://drive.google.com/uc?export=download&id=1UL4kXmHaxh_YJoE_xQla7D9zC674vTGU",
  "hoangoanhtram8615@gmail.com":
    "https://drive.google.com/uc?export=download&id=1XXxG1iEjuTpwg3egF6aYCaGGAGqMook-",
  "yen.h.nguyen@gsk.com":
    "https://drive.google.com/uc?export=download&id=1rss5DDxJ76PRm_YX4g4tnhGoe_j44pTZ",
  "nvt187qn@gmail.com":
    "https://drive.google.com/uc?export=download&id=1UsZEj_zzj49khABCzhpSX9mS_xL_DofN",
  "duonghtt.en@gmail.com":
    "https://drive.google.com/uc?export=download&id=14RYaBWoYq7hxzYbS4XNv-SMvOLdTjuRg",
  "meimeifrank@gmail.com":
    "https://drive.google.com/uc?export=download&id=19PQCDP36nguzozX85pCsRV_AH8UVyfHX",
  "lengocdiep276@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ERLvijBXwhTda9wcGTQrlFDeskQXJSbW",
  "ngocminhht@gmail.com":
    "https://drive.google.com/uc?export=download&id=1VWKSUNkJdA4snG5PDKJRTbMJwgAk7eGP",
  "phuongthaoitc819@gmail.com":
    "https://drive.google.com/uc?export=download&id=1s55A5pJxZ_4_m5335FEadQ3s-h6DswQJ",
  "hadaot@gmail.com":
    "https://drive.google.com/uc?export=download&id=1fubqsnpIR3xhxEqGevPYgvaUcrQUKPse",
  "huynhcuc111@gmail.com":
    "https://drive.google.com/uc?export=download&id=1bk8HgxWGPcuHLltIPGUGQ-fRfs9r-qCF",
  "thuynguyen4288@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ph_U2ajYcs4-QnivgVAq5K_8TUekWBdG",
  "vanntt1@gmail.com":
    "https://drive.google.com/uc?export=download&id=1weBbqRzATs_utqSFe2YjMRSIbvcQ3aPw",
  "nguyenthuminh71760315@gmail.com":
    "https://drive.google.com/uc?export=download&id=116yCAQsZcxT8vBmomA3Xn5bOKL2yCEOW",
  "thienly160188@gmail.com":
    "https://drive.google.com/uc?export=download&id=1BFWQTQhxLbXlonl18Xm1jZhRfXraT_Hm",
  "htthuy256@gmail.com":
    "https://drive.google.com/uc?export=download&id=1SAoqt-XfzpT9SI1_EAWIFBgGBsTdulFS",
  "quynh247@gmail.com":
    "https://drive.google.com/uc?export=download&id=1QgAxqXy6384jGJ2izq7PLofNwkgiYMF1",
  "huongnguyen31412@gmail.com":
    "https://drive.google.com/uc?export=download&id=1bR_0KoohTCsPy2SAqAJ5O5rYUQnhNODr",
  "nguyenthuhoai1789@gmail.com":
    "https://drive.google.com/uc?export=download&id=18zADKHRz314RZQXTSF3SpTyoIb7Z4pEh",
  "trankhamy611@gmail.com":
    "https://drive.google.com/uc?export=download&id=1zeTBGv8FfcXLnAPhJuZFYMLKRTQF5Su3",
  "tranthithanhhuong@gmail.com":
    "https://drive.google.com/uc?export=download&id=1Ri9mpEX9oZ36-uuPaF8SzwOO5eviWC-u",
  "lethivan0204@gmail.com":
    "https://drive.google.com/uc?export=download&id=1wLVlOw_BzA70uCsuHs4YC7aCyYopXqPl",
  "phamthihaiyen@huaf.edu.vn":
    "https://drive.google.com/uc?export=download&id=1JvqtptMjenlP42N-zkfsqbvYs0Ku_E2m",
  "hoangthu2005@gmail.com":
    "https://drive.google.com/uc?export=download&id=16umpbP5j-NaI8cTAlZm2GFmbCExxJ6a0",
  "luuthuong2011@gmail.com":
    "https://drive.google.com/uc?export=download&id=1gMxsJJrSGGw75phkHoJvBtPkFrmjd6IF",
  "huong.ltth@gmail.com":
    "https://drive.google.com/uc?export=download&id=16I5PMjc3Nl8OKMczTnPJPl1hJdCahK96",
  "honganh031@gmail.com":
    "https://drive.google.com/uc?export=download&id=1STWbcXzrbBlN31YtrC0dZ_IvbhOfy83T",
  "maichihoang2016@gmail.com":
    "https://drive.google.com/uc?export=download&id=1MMNbrRvokfM-LqzN3yKdfU6zGMA21hKq",
  "dieungocnk@gmail.com":
    "https://drive.google.com/uc?export=download&id=1V6eih38l3C3WTxjHdMGyNYb6O-I-zFzX",
  "haiduong0607@gmail.com":
    "https://drive.google.com/uc?export=download&id=1ANKvFyb5HLxpgZrfogbZVdBwa2iurc_s",
  "vuthao.btl@gmail.com":
    "https://drive.google.com/uc?export=download&id=1l6INLtMDpUm6OdZqURQ2mTKhLufktGhC",
  "biko_1688@yahoo.com":
    "https://drive.google.com/uc?export=download&id=1rRHuyA8OTVraTOD-NGhkOHFtdllnn39G",
  "diem140590@gmail.com":
    "https://drive.google.com/uc?export=download&id=1QPvGavxnANTtn6EWXojV9kXWHhwDzT6c",
};
const emailListRoute2 = {
  "nguyenhang1418@gmail.com":
    "https://drive.google.com/uc?export=download&id=140-5VHyfiAFq9t1fcIRLipROHrujDxwi",
  "tuyet.vu0808@gmail.com":
    "https://drive.google.com/uc?export=download&id=15h-jyiJQDRBcgaCfQux_lmAbZq6lbpYS",
  "trinhbichhao@gmail.com":
    "https://drive.google.com/uc?export=download&id=18goOsb5QQU3OHQr6sGtA75t1kHb9GZQl",
  "hoaihm15@gmail.com":
    "https://drive.google.com/uc?export=download&id=1bcrX9ADJ0w_TQGHRs5ryz_W7yD_OEH6m",
  "nguyenthilien31012016@gmail.com":
    "https://drive.google.com/uc?export=download&id=1chFQfS9GWdyIgm7XxgP3ZyTOvMGq69Bl",
  "cuonglpd@gmail.com":
    "https://drive.google.com/uc?export=download&id=1HUUEy7pjOLAX0SdLUsCu45QEUjSrX8_i",
  "huongaovnua@gmail.com":
    "https://drive.google.com/uc?export=download&id=1IXyomKtx3R7P4mumfuP2abZAswLN_Xb-",
  "elistran.sh@gmail.com":
    "https://drive.google.com/uc?export=download&id=1QfL814lx_u7HcRSG9zxfUenfWeMxMcvU",
  "huonganna90@gmail.com":
    "https://drive.google.com/uc?export=download&id=1t-B2MSq1YeKIJIYDHEF03z-b2oQeAy7h",
  "thinhbk@gmail.com":
    "https://drive.google.com/uc?export=download&id=1WlyaqHaOady99tWyW2NaLqhaLHY1uSFv",
  "84thudung.le@gmail.com":
    "https://drive.google.com/uc?export=download&id=1laAjp1NVVwSdbqTKuyE0DBiu9nZl9_C9",
  "ngado13a@gmail.com":
    "https://drive.google.com/uc?export=download&id=18tYnuWk42XEAB_-GcKGRoh4XoYlgtGQA",
};

Server.get("/", (req, res) => {
  const emailaddress = req.query.emailaddress;
  res.redirect(301, emailListRoute1[emailaddress]);
});

Server.get("/route2", (req, res) => {
  const emailaddress = req.query.emailaddress;
  res.send(JSON.stringify(req.query));
});

Server.listen(80, () => {
  console.log("Listening at port 80");
});
