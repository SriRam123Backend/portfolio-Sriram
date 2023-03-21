$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
    strings: [" Backend developer","Fresher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [" Backend developer","Fresher"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function showingProjects(languageName)
{
    document.getElementById("mainProjects").innerHTML="";
    document.getElementById("miniProhects").innerHTML="";

    if(languageName=="JAVA")
    {
        document.getElementById("mainProjects").innerHTML=`<div  class="projectsDivs" style="background-image:url('Thumbnail/11.png'); background-size: 100% 100%;"><div onclick="githubOrReplit('LMB')"  style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Library Management System</div></div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs" style="background-image:url('Thumbnail/12.png'); background-size: 100% 100%;"><div onclick="githubOrReplit('weather')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Weather app</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/13.png');background-size: 100% 100%;"><div onclick="githubOrReplit('2048')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">2048 Game</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/2.jpg');background-size: 100% 100%;"><div onclick="githubOrReplit('ArrayList')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">ArrayList</div></div>`;
    }
    else if(languageName=="JAVASCRIPT")
    {
        document.getElementById("mainProjects").innerHTML=`<div  class="projectsDivs" style="background-image:url('Thumbnail/10.png'); background-size: 100% 100%;"> <div onclick="githubOrReplit('MTB')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Movie Ticket Booking</div></div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs" style="background-image:url('Thumbnail/6.png'); background-size: 100% 100%;"><div onclick="githubOrReplit('tipCalc')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Tip Calculator</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/9.png');background-size: 100% 100%;"><div onclick="githubOrReplit('musicPlayer')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Music Player</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/8.png');background-size: 100% 100%;"><div onclick="githubOrReplit('RPS')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Rock Paper Scissor Game</div></div>`;
    }
    else if(languageName=="HTML/CSS")
    {
        document.getElementById("mainProjects").innerHTML=`<div  class="projectsDivs" style="background-image:url('Thumbnail/1.png'); background-size: 100% 100%;"><div onclick="githubOrReplit('html1')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Formula By Pixelarity</div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs" style="background-image:url('Thumbnail/3.png'); background-size: 100% 100%;"><div onclick="githubOrReplit('html2')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Skilled Website</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/4.png');background-size: 100% 100%;"><div onclick="githubOrReplit('html3')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Suite Website</div></div><div  class="projectsDivs" style="background-image:url('Thumbnail/5.png');background-size: 100% 100%;"><div onclick="githubOrReplit('html4')" style="width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.533);justify-content: center;color: white;align-items: center;">Easy Bank Website</div></div>`;
    }onclick="githubOrReplit(weather)" 
}

function githubOrReplit(projectName)
{
    if(projectName == "LMB")
    {
        window.open("https://github.com/SriRam123Backend/library-management-system", '_blank');
    }
    else if(projectName == "weather")
    {
        window.open("https://github.com/SriRam123Backend/weatherapp", '_blank');
    }
    else if(projectName == "2048")
    {
        window.open("https://github.com/SriRam123Backend/2048", '_blank');
    }
    else if(projectName == "ArrayList")
    {
        window.open("https://github.com/SriRam123Backend/arraylist", '_blank');
    }
    else if(projectName == "MTB")
    {
        window.open("https://stalwart-gelato-690da6.netlify.app/", '_blank');
    }
    else if(projectName == "tipCalc")
    {
        window.open("https://assignment-4js.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "musicPlayer")
    {
        window.open("https://assignment-8js.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "RPS")
    {
        window.open("https://assignment-13.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "html1")
    {
        window.open("https://assignment-9.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "html2")
    {
        window.open("https://assginment-11.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "html3")
    {
        window.open("https://assginment-12.srirams8.repl.co/", '_blank');
    }
    else if(projectName == "html4")
    {
        window.open("https://evaluation.srirams8.repl.co/", '_blank');
    }
}
