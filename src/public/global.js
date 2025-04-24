window.onload = function() {
    document.getElementById("panel_button").onclick = function() {
        if (document.getElementById("main_panel").style.width == "250px") {
            document.getElementById("main_panel").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
        } else {
            document.getElementById("main_panel").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
        }
    };
};