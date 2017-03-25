window.onload=function(){
    search();
    //倒计时.
    downTime();
};

function search(){
     var jd_header=document.querySelector(".jd_header_box");
     var jd_banner=document.querySelector(".jd_banner");
     var h=jd_banner.offsetHeight;
     window.onscroll=function(){
          var t=document.body.scrollTop;
          var opacity=0;
          if(t>h){
                opacity=0.85;
          }else{
                opacity=(t/h)*0.85;
          }
         jd_header.style.backgroundColor="rgba(201,21,35,"+opacity+")";
     }
}

function downTime(){

     var timer=60*60*5;
     var spans=document.querySelectorAll(".jd_sk_timer span");

     var ids=setInterval(function(){
            if(timer==0){
                window.clearInterval(ids);
                return;
            }
            timer--;
            var h=Math.floor(timer/3600);
            var m=Math.floor(timer%3600/60);
            var s=timer%60;
            spans[0].innerHTML=Math.floor(h/10);
            spans[1].innerHTML=h%10;
            spans[3].innerHTML=Math.floor(m/10);
            spans[4].innerHTML=m%10;
            spans[6].innerHTML=Math.floor(s/10);
            spans[7].innerHTML=s%10;
     },1000);
};
