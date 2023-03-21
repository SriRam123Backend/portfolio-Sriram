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
        document.getElementById("mainProjects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/11.png" class="size" onclick=githubOrReplit('LMB') /></div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/12.png" class="size" onclick=githubOrReplit('weather') /></div><div class="projectsDivs"><img src="Thumbnail/13.png" onclick=githubOrReplit('2048') class="size"/></div><div class="projectsDivs"><img src="Thumbnail/2.jpg" onclick=githubOrReplit('ArrayList') class="size"/></div>`;
    }
    else if(languageName=="JAVASCRIPT")
    {
        document.getElementById("mainProjects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/10.png" class="size" onclick=githubOrReplit('MTB') /></div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/6.png" class="size" onclick=githubOrReplit('tipCalc') /></div><div class="projectsDivs"><img src="Thumbnail/9.png" class="size" onclick=githubOrReplit('musicPlayer') /></div><div class="projectsDivs"><img src="Thumbnail/8.png" class="size" onclick=githubOrReplit('RPS') /></div>`;
    }
    else if(languageName=="HTML/CSS")
    {
        document.getElementById("mainProjects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/1.png" class="size" onclick=githubOrReplit('html1') /></div>`;
        document.getElementById("miniProhects").innerHTML=`<div class="projectsDivs"><img src="Thumbnail/3.png" class="size" onclick=githubOrReplit('html2') /></div><div class="projectsDivs"><img src="Thumbnail/4.png" onclick=githubOrReplit('html3') class="size"/></div><div class="projectsDivs"><img src="Thumbnail/5.png" onclick=githubOrReplit('html4') class="size"/></div>`;
    }
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