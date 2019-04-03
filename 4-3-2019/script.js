
$(document).ready(function(){
    $("#heading").html("Mahalos!")
    // $("p").click(function(){
    //     alert("clicked");
    // });
    // $("p").mouseenter(function(){
    //     $(this).css("background-color","green");
    // });
    // $("p").mouseleave(function(){
    //     $(this).css("background-color","initial");
    // }); 
    $("p").on({
        click : function(){
            alert("clicked")
        },
        mouseenter: function(){
            $(this).css("background-color","yellow")
        },
        mouseleave:  function(){
            $(this).css("background-color","initial")
        }
    })
    $("button.hide").click(function(){
        $("p").hide(1000);
    })
    $("button.show").click(function(){
        $("p").show(1000);
        $("#heading").html('HOme')
    })
    $("button.Toggle").click(function(){
        $("p").toggle(1000);
    })
    $("button.slide").click(function(){
        $("p").slideUp(1000,function(){
            $("#heading").html('I SLid!')
        });
       
    })
  
});
