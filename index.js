var a7name=['NGUYỄN CÔNG THÀNH AN', 'HOÀNG MAI ANH', 'NGUYỄN DUY ANH', 'NGUYỄN MAI NHẬT ANH', 'NGUYỄN PHƯƠNG ANH 5', 'NGUYỄN PHƯƠNG ANH 6', 'NGUYỄN QUANG ANH', 'TRƯƠNG NGỌC ÁNH', 'BÙI ĐỨC BẰNG', 'TRẦN ĐÔNG BÌNH', 'PHẠM CHÍ CƯƠNG', 'VŨ MẠNH CƯỜNG', 'LÊ VĂN DŨNG', 'NGUYỄN ĐỨC DUY', 'LÊ ANH DƯƠNG', 'ĐÀO TIẾN ĐẠT', 'NGUYỄN HƯƠNG GIANG', 'VŨ THỊ THANH HIỀN', 'NGUYỄN THÁI HIỂN', 'DƯƠNG CÔNG HUY', 'NGUYỄN NHẬT HUY', 'NGUYỄN QUỐC HUY', 'PHẠM QUỐC HUY', 'KHÚC NAM KHÁNH', 'NGÔ NAM KHÁNH', 'NGUYỄN GIA KHIÊM', 'NGUYỄN ĐĂNG KHÔI', 'NGUYỄN KHÁNH LINH', 'NGUYỄN HƯƠNG LY', 'NGUYỄN KHÁNH LY', 'ĐẶNG TIẾN MẠNH', 'ĐINH TUẤN MINH', 'NGUYỄN ĐỨC MINH', 'NGUYỄN THỊ KIM NGÂN', 'HOÀNG HỮU NGHĨA', 'LÊ PHƯƠNG NHUNG', 'VĂN ĐỨC QUÂN', 'NGUYỄN MINH SƠN', 'NGUYỄN HUY THÀNH', 'NGUYỄN PHƯƠNG THẢO', 'HOÀNG ĐỨC THẮNG', 'TRẦN ĐOAN TRANG', 'LÊ VĂN TRUNG', 'NGUYỄN NAM LINH']
var Lindex = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43]
var indexOld
var index1=-1
var index2=-1
var password
var characters1=[]
var characters2=[]
var counter1=0
var counter2=0
var interval=setInterval(function(){
  for(i=0;i<counter2;i++){
      characters2[i]=password[1].charAt(i)
    }
  for(i=counter2;i<password[1].length;i++){
      characters2[i]=Math.random().toString(36).charAt(2)
    }
  $('.password2').text(characters2.join(''))
  for(i=0;i<counter1;i++){
    characters1[i]=password[0].charAt(i)
  }
  for(i=counter1;i<password[0].length;i++){
    characters1[i]=Math.random().toString(36).charAt(2)
  }
  $('.password1').text(characters1.join(''))
},25)
function hack(){
  if(counter1==password[0].length){
    if(counter2==password[1].length){
      $('.granted, .rerun').removeClass('hidden')
  }
  else{counter2++}
}
  else{counter1++}
}
function rand(){
  if (index1!=-1){
    Lindex=Lindex.filter(item => ![Lindex[index1], Lindex[index2]].includes(item))
    $('.granted, .rerun').addClass('hidden')
  }
  if (Lindex.length != 0){
  index1=Math.floor((Math.random()*Lindex.length))
  do {
    index2=Math.floor((Math.random()*Lindex.length))
  }
  while (index1==index2)
  password=[a7name[Lindex[index1]], a7name[Lindex[index2]]]
  characters1=[]
  characters2=[]
  counter1=0
  counter2=0
  }
  else{
    password=["Giáng Sinh", "Vui Vẻ"]
  }
}
$(window).on('keydown',hack)
$('.password').on('click',hack)
$('.rerun').on('click',rand)
$('.start').on('click',function(){
    $(this).addClass('hidden')
    $('.info p:last-child, .password').removeClass('hidden')
})
$('.start').on('click',rand)