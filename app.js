
/*let order=prompt('Sifarsi zehmet olmasa bu formada daxil edin: kfc/fri/2', 'kfc/fri/2')
 
let arr= order.toLocaleLowerCase().split('/')


function delivery(product, restuartn, money){

if((arr[0]==='mcdonalds' || arr[0]==='kfc' || arr[0]==='burger king')&&  (arr[1]==='fri'|| arr[1]==='burger' || arr[1]==='twister') &&  +arr[2]>=2) {
 if (confirm('Restoren:Sifarisi qebul edirsiniz?') == true) {
    if(confirm('Kuryer: Sifarsi qebul edirsiniz?')==true){
        console.log('Sifarisiniz hazirdir!')
    }
    else{
        console.log('Sifaris kuryer tapilmadi!')
    }

}
else{
    console.log('Restoran sifarisi legv etdi!')
}

}
else{
console.log("Yanlis sorgu, zehmet olmasa sifarsi yeniden daxil edrin")
}

}

delivery()
*/
function delivery(){
    let order=prompt('Sifarsi zehmet olmasa bu formada daxil edin: kfc/fri/2', 'kfc/fri/2')
 
let arr= order.toLocaleLowerCase().split('/')


if((arr[0]==='mcdonalds' || arr[0]==='kfc' || arr[0]==='burger king')&&  (arr[1]==='fri'|| arr[1]==='burger' || arr[1]==='twister') &&  +arr[2]>=2) {
 if (confirm('Restoren:Sifarisi qebul edirsiniz?')) {
    if(confirm('Kuryer: Sifarsi qebul edirsiniz?')){
        console.log('Sifarisiniz hazirdir!')
    }
    else{
        console.log('Sifaris kuryer tapilmadi!')
    }

}
else{
    console.log('Restoran sifarisi legv etdi!')
}

}
else{
console.log("Yanlis sorgu, zehmet olmasa sifarsi yeniden daxil edrin")
 }

}

delivery()