let modi = [
    "https://images.news18.com/ibnlive/uploads/2021/07/1627556221_modi-1.jpg",
    "https://i.ytimg.com/vi/kK3GH5XB5lA/hqdefault.jpg",
    "https://i.ytimg.com/vi/wY0ma5X29tA/hqdefault.jpg",
    "https://static.toiimg.com/thumb/msid-71421766,width-1200,height-900,resizemode-4/.jpg",
    "https://mk0vinavuu9wl1kmwant.kinstacdn.com/wp-content/uploads/2017/10/narendra-modi-funny-pictures.jpg",
    "https://spiderimg.amarujala.com/assets/images/2020/03/08/750x506/narendra-modi_1583657948.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb-JTuC6f5iVqcPBJtu0O7pe95fOquyUHnMoMcEw5Wj4u0IJ0Angt5_sbLu-wY_HjV74&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVDn8YZyxkLvdz3VUWS6DeVim4Y-SeyZq_Q&usqp=CAU",
    "https://www.oneindia.com/img/2014/12/x06-modi-leh2.jpg.pagespeed.ic.CpAY0ApsXo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3GwJY9yd6dHFCbIsT6SejvCLPLaYj-4agA&usqp=CAU"
];

const imgs = document.getElementsByTagName("img")
for(let i =0;i<imgs.length;i++){
    const randomImg = Math.floor(Math.random()*modi.length)
    imgs[i].src = modi[randomImg]
}

const titl = document.getElementsByTagName("h2")
for(let i =0;i<titl.length;i++){
    titl[i] = "ModiModi"
}