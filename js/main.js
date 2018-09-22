$(document).ready(function () { 
    $(".btn-all").click(function(){
        $(".item-theme").show(300);
        $(".item-icon").show(300);
        $(".item-pattern").show(300);
        $(".item-mockup").show(300);
        $(".item-kit").show(300);
    });
    
    $(".btn-theme").click(function(){
        $(".item-theme").show(300);
        $(".item-icon").hide(300);
        $(".item-pattern").hide(300);
        $(".item-mockup").hide(300);
        $(".item-kit").hide(300);
    });
    
    $(".btn-icon").click(function(){
        $(".item-theme").hide(300);
        $(".item-icon").show(300);
        $(".item-pattern").hide(300);
        $(".item-mockup").hide(300);
        $(".item-kit").hide(300);
    });
    
    $(".btn-pattern").click(function(){
        $(".item-theme").hide(300);
        $(".item-icon").hide(300);
        $(".item-pattern").show(300);
        $(".item-mockup").hide(300);
        $(".item-kit").hide(300);
    });
    
    $(".btn-mockup").click(function(){
        $(".item-theme").hide(300);
        $(".item-icon").hide(300);
        $(".item-pattern").hide(300);
        $(".item-mockup").show(300);
        $(".item-kit").hide(300);
    });
    
    $(".btn-kit").click(function(){
        $(".item-theme").hide(300);
        $(".item-icon").hide(300);
        $(".item-pattern").hide(300);
        $(".item-mockup").hide(300);
        $(".item-kit").show(300);
    });
	
	
	$("body").niceScroll({
        cursorcolor:"#2ecc71",
        cursorwidth:"10px",
        cursorborder:"#2ecc71",
    });
	new WOW().init();
});


