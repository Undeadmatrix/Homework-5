var hour = moment().format('h');
function checkTime()
{
    hour;
    console.log(hour);
}
checkTime();
setInterval(checkTime(), 1000);

function setClasses()
{
    if(hour == 8)
{
    $("#timeblock8a").addClass("present");
    $("#timeblock9a").addClass("future");
    $("#timeblock10a").addClass("future");
    $("#timeblock11a").addClass("future");
    $("#timeblock12p").addClass("future");
    $("#timeblock1p").addClass("future");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 9)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("present");
    $("#timeblock10a").addClass("future");
    $("#timeblock11a").addClass("future");
    $("#timeblock12p").addClass("future");
    $("#timeblock1p").addClass("future");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 10)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("present");
    $("#timeblock11a").addClass("future");
    $("#timeblock12p").addClass("future");
    $("#timeblock1p").addClass("future");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 11)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("present");
    $("#timeblock12p").addClass("future");
    $("#timeblock1p").addClass("future");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 12)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("present");
    $("#timeblock1p").addClass("future");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 1)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("present");
    $("#timeblock2p").addClass("future");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 2)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("past");
    $("#timeblock2p").addClass("present");
    $("#timeblock3p").addClass("future");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 3)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("past");
    $("#timeblock2p").addClass("past");
    $("#timeblock3p").addClass("present");
    $("#timeblock4p").addClass("future");
    $("#timeblock5p").addClass("future");
}
else if(hour == 4)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("past");
    $("#timeblock2p").addClass("past");
    $("#timeblock3p").addClass("past");
    $("#timeblock4p").addClass("present");
    $("#timeblock5p").addClass("future");
}
else if(hour == 5)
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("past");
    $("#timeblock2p").addClass("past");
    $("#timeblock3p").addClass("past");
    $("#timeblock4p").addClass("past");
    $("#timeblock5p").addClass("present");
}
else
{
    $("#timeblock8a").addClass("past");
    $("#timeblock9a").addClass("past");
    $("#timeblock10a").addClass("past");
    $("#timeblock11a").addClass("past");
    $("#timeblock12p").addClass("past");
    $("#timeblock1p").addClass("past");
    $("#timeblock2p").addClass("past");
    $("#timeblock3p").addClass("past");
    $("#timeblock4p").addClass("past");
    $("#timeblock5p").addClass("past");
}
}

function getEvents()
{
    var slot8 = localStorage.getItem("slot8");
    var slot9 = localStorage.getItem("slot9");
    var slot10 = localStorage.getItem("slot10");
    var slot11 = localStorage.getItem("slot11");
    var slot12 = localStorage.getItem("slot12");
    var slot1 = localStorage.getItem("slot1");
    var slot2 = localStorage.getItem("slot2");
    var slot3 = localStorage.getItem("slot3");
    var slot4 = localStorage.getItem("slot4");
    var slot5 = localStorage.getItem("slot5");

    if(slot8 != null)
    {
        $("#timeblock8a").text(slot8);
    }
    if(slot9 != null)
    {
        $("#timeblock9a").text(slot9);
    }
    if(slot10 != null)
    {
        $("#timeblock10a").text(slot10);
    }
    if(slot11 != null)
    {
        $("#timeblock11a").text(slot11);
    }
    if(slot12 != null)
    {
        $("#timeblock12p").text(slot12);
    }
    if(slot1 != null)
    {
        $("#timeblock1p").text(slot1);
    }
    if(slot2 != null)
    {
        $("#timeblock2p").text(slot2);
    }
    if(slot3 != null)
    {
        $("#timeblock3p").text(slot3);
    }
    if(slot4 != null)
    {
        $("#timeblock4p").text(slot4);
    }
    if(slot5 != null)
    {
        $("#timeblock5p").text(slot5);
    }
}

$("#save8").on("click", function()
{
    var userIn = $("#timeblock8a").val();
    localStorage.setItem("slot8", userIn);
    alert("Saved 8 a.m");
});
$("#save9").on("click", function()
{
    var userIn = $("#timeblock9a").val();
    localStorage.setItem("slot9", userIn);
    alert("Saved 9 a.m");
});
$("#save10").on("click", function()
{
    var userIn = $("#timeblock10a").val();
    localStorage.setItem("slot10", userIn);
    alert("Saved 10 a.m");
});
$("#save11").on("click", function()
{
    var userIn = $("#timeblock11a").val();
    localStorage.setItem("slot11", userIn);
    alert("Saved 11 a.m");
});
$("#save12").on("click", function()
{
    var userIn = $("#timeblock12p").val();
    localStorage.setItem("slot12", userIn);
    alert("Saved 12 p.m");
});
$("#save1").on("click", function()
{
    var userIn = $("#timeblock1p").val();
    localStorage.setItem("slot1", userIn);
    alert("Saved 1 p.m");
});
$("#save2").on("click", function()
{
    var userIn = $("#timeblock2p").val();
    localStorage.setItem("slot2", userIn);
    alert("Saved 2 p.m");
});
$("#save3").on("click", function()
{
    var userIn = $("#timeblock3p").val();
    localStorage.setItem("slot3", userIn);
    alert("Saved 3 p.m");
});
$("#save4").on("click", function()
{
    var userIn = $("#timeblock4p").val();
    localStorage.setItem("slot4", userIn);
    alert("Saved 4 p.m");
});
$("#save5").on("click", function()
{
    var userIn = $("#timeblock5p").val();
    localStorage.setItem("slot5", userIn);
    alert("Saved 5 p.m");
});
setClasses();
getEvents();