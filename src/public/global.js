// Code to run on webpage load.
window.onload = function() {
    // Function to close the main panel.
    function close_main_panel() {
        document.getElementById("main_panel").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };

    // Function to open the main panel.
    function open_main_panel() {
        document.getElementById("main_panel").style.width = "20vw";
        document.getElementById("main").style.marginLeft = "20vw";
    };


    // Function to toggle the main panel.
    function toggle_main_panel() {
        if (document.getElementById("main_panel").style.width > "10px") {
            close_main_panel()
        } else {
            open_main_panel()
        }
    }

    // Add click effect to main panel toggle button.
    document.getElementById("panel_button").addEventListener("click", toggle_main_panel)
}    