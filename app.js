let src12 = [ "אולימפוס.jpg" ,"אל על.png", "טושיבה.JPG" , "איקאה.jpg" , "אלקטרה.jpg", "עלית.png" , "סוני.JPG" ,"תנובה.png" , "משטרה.png" , "עלית.png" , "סוני.JPG" , "סמל עיריית תל אביב.jpg" , "קווים עילית.png","קנווד.jpg","קודקוד.png","עץ הזית.png" ,"עילית.png","עיריית בית שמש.jpg","עזר מציון1.png","אוסם.png","בוש.jpg","דל מחשבים.png","דואר ישראל.png" ,"מדא מגן דוד אדום.png" ,"מורפי ריצ'רדס.jpg","מטרופולין.jpg","מעיני הישועה.png"]
let i = 0 
let u = 0 
let rnd = 1
const loop = () => {
    let tab = document.getElementsByTagName("table")[0]
    let nowline =tab.getElementsByTagName("tr")[rnd]
    let now = nowline.getElementsByTagName("td")[u]
    console.log(src12[i])
    console.log(now)
    let pic = src12[i]
    now.style.backgroundImage = `url("./pictures/${pic}")`
    rnd =Math.round(Math.floor(Math.random()*9));
    console.log(rnd +"  rand")
    u =  Math.round(Math.floor(Math.random()*9));
    i =  Math.round(Math.floor(Math.random()*(src12.length-1)));
    console.log(i)
}
let myInterval
setTimeout(() => {
    myInterval= setInterval(loop,100)
}, 1000)
const stop=()=>{
    clearInterval(myInterval)
}
