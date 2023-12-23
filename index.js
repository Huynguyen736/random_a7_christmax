var a7name=['NGUYỄN CÔNG THÀNH AN', 'HOÀNG MAI ANH', 'NGUYỄN DUY ANH', 'NGUYỄN MAI NHẬT ANH', 'NGUYỄN PHƯƠNG ANH', 'NGUYỄN PHƯƠNG ANH', 'NGUYỄN QUANG ANH', 'TRƯƠNG NGỌC ÁNH', 'BÙI ĐỨC BẰNG', 'TRẦN ĐÔNG BÌNH', 'PHẠM CHÍ CƯƠNG', 'VŨ MẠNH CƯỜNG', 'LÊ VĂN DŨNG', 'NGUYỄN ĐỨC DUY', 'LÊ ANH DƯƠNG', 'ĐÀO TIẾN ĐẠT', 'NGUYỄN HƯƠNG GIANG', 'VŨ THỊ THANH HIỀN', 'NGUYỄN THÁI HIỂN', 'DƯƠNG CÔNG HUY', 'NGUYỄN NHẬT HUY', 'NGUYỄN QUỐC HUY', 'PHẠM QUỐC HUY', 'KHÚC NAM KHÁNH', 'NGÔ NAM KHÁNH', 'NGUYỄN GIA KHIÊM', 'NGUYỄN ĐĂNG KHÔI', 'NGUYỄN KHÁNH LINH', 'NGUYỄN HƯƠNG LY', 'NGUYỄN KHÁNH LY', 'ĐẶNG TIẾN MẠNH', 'ĐINH TUẤN MINH', 'NGUYỄN ĐỨC MINH', 'NGUYỄN THỊ KIM NGÂN', 'HOÀNG HỮU NGHĨA', 'LÊ PHƯƠNG NHUNG', 'VĂN ĐỨC QUÂN', 'NGUYỄN MINH SƠN', 'NGUYỄN HUY THÀNH', 'NGUYỄN PHƯƠNG THẢO', 'HOÀNG ĐỨC THẮNG', 'TRẦN ĐOAN TRANG', 'LÊ VĂN TRUNG', 'NGUYỄN NAM LINH']
var indexOld
var index1=Math.floor((Math.random()*a7name.length))
var index2
var password=[a7name[index1], 0]
var characters1=[]
var characters2=[]
var donec1 = 0
var counter1=0
var counter2=0
do{
  index2=Math.floor((Math.random()*a7name.length))
}
while(index2==index1)
password[1] = a7name[index2]

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
$(window).on('keydown',hack)
$('.password').on('click',hack)
$('.rerun').on('click',function(){
  indexOld=index1
  do{
    index1=Math.floor((Math.random()*a7name.length))
  }
  while(index1==indexOld)
  indexOld=index1
  do{
    index2=Math.floor((Math.random()*a7name.length))
  }
  while(index2==indexOld)
  $('.granted, .rerun').addClass('hidden')
  password=[a7name[index1], a7name[index2]]
  characters1=[]
  characters2=[]
  counter1=0
  counter2=0
})
  $('.start').on('click',function(){
    $(this).addClass('hidden')
    $('.info p:last-child, .password').removeClass('hidden')
})