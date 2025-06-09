// Menangkap hasil player
// Menangkap hasil komputer
var comp = Math.floor(1+Math.random()*10);
var ulang=true;
// hasil
while (ulang){
    alert ('Selamat datang di game tebak angka🏆')
    var p;
    var nyawa= 3;
   while(nyawa > 0){
    p = parseInt(prompt ('Pilih angka dari 1-10'+ '\nKamu mempunyai 3x kesempatan'+'\n sisa nyawa kamu: '+nyawa ))
    if (isNaN(p) || p < 1 || p > 10){
        alert ("Kamu di diskualifikasi tidak sesuai aturan!")
        continue;
    } 
        
    if (p == comp){
        alert ('Kamu memilih: '+ p + ' Komputer memilih: '+ comp +'\nSelamat kamu benar!')
        break;
    }
    else if (p > comp){
        alert("Terlalu besar")
    }else {
        alert("Terlalu kecil")
    }nyawa --;
    }ulang=confirm('lagi?')
}
alert ('permainan selesai🥵');
