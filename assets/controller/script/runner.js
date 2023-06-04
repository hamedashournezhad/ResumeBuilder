/*
    Author: Hamed Ashournezhad
    Date: 4/6/2023
    Version: 1.0.6
    Web-Blog: https://hamedashournezhad.ir/
    License: Apache Web 33
*/

// Variables
var previous_value = 0;
var previous_button = document.querySelectorAll(".main-app-button-previous");
var next_button = document.querySelectorAll(".main-app-button-next");
var index_page = document.querySelector(".main-app");
var resume_page = document.querySelector(".resume-app");
var social_media_page = document.querySelector(".social-media-app");
var element_window_component_buttons = document.querySelectorAll(".element-window-component-buttons > button");
var element_window_component_alignment_buttons = document.querySelectorAll(".element-window-component-alignment-buttons > button");
var profile_card_description_contents = document.querySelector(".profile-card-description");
var get_skills_search_box_items = document.querySelectorAll(".popup-window-skills-popular-items > li");
var close_popup_window = document.querySelector(".close-popup-window");
var last_item_in_social_media_page = document.querySelector(".profile-card-share-icons button:last-child");
var all_item_in_social_media_page = document.querySelectorAll(".profile-card-share-icons button");
function Runner() {        
    // Previous Page Function..
    previous_button.forEach((value) => {
        value.addEventListener("click", function () {
            // Show Next Element
            if (previous_value == 0) {
                index_page.style.display = "none";
                resume_page.style.display = "inherit";
                social_media_page.style.display = "none";
                previous_value = 1;
            }
            else if (previous_value == 1) {
                social_media_page.style.display = "none";
                resume_page.style.display = "none";
                social_media_page.style.display = "inherit";
                previous_value = 0;
            } else {
                return null;
            }
        })
    });

    // Next Page Function..
    next_button.forEach((value) => {
        value.addEventListener("click", function () {
            if (previous_value == 1) {
                index_page.style.display = "inherit";
                social_media_page.style.display = "none";
                resume_page.style.display = "none";
                previous_value = 0;
            } else if (previous_value == 0) {
                index_page.style.display = "none";
                social_media_page.style.display = "none";
                resume_page.style.display = "inherit";
                previous_value = 1;
            } else {
                return null;
            }
        })
    });

    // Close Element Editor..
    document.getElementById("element_editor_close_button").addEventListener("click", function () {
        document.getElementById("element_editor").style.animationName = "FadeOutLeft";
        document.getElementById("element_editor").style.animationDuration = "5s";
        document.getElementById("element_editor").style.animationIterationCount = 1;
        const xbhc839xn2 = setInterval(() => {
            document.getElementById("element_editor").style.display = "none";
            clearInterval(xbhc839xn2);
        }, 2000);
    });

    // Window Title Function..
    document.getElementById("window_title_cm29x2").addEventListener("input", function () {
        document.title = document.getElementById("window_title_cm29x2").value;
    });
    // Change Background Color Function..
    element_window_component_buttons.forEach((e) => {
        e.addEventListener("click", function (event) {
            document.getElementById("App").style.backgroundImage = "unset";
            switch (event.target.className.substring(0, 3)) {
                case 'blu':
                    document.getElementById("App").style.backgroundColor = "var(--blue)";
                    break;
                case 'yel':
                    document.getElementById("App").style.backgroundColor = "var(--yellow)";
                    break;
                case 'pur':
                    document.getElementById("App").style.backgroundColor = "var(--purple)";
                    break;
                case 'red':
                    document.getElementById("App").style.backgroundColor = "var(--red)";
                    break;
                case 'gre':
                    document.getElementById("App").style.backgroundColor = "var(--green)";
                    break;
                case 'ora':
                    document.getElementById("App").style.backgroundColor = "var(--orange)";
                    break;
                case 'gra':
                    document.getElementById("App").style.backgroundColor = "var(--gray)";
                    break;
                case 'bla':
                    document.getElementById("App").style.backgroundColor = "var(--dark)";
                    break;
                case 'pin':
                    document.getElementById("App").style.backgroundColor = "var(--pink)";
                    break;
                default:
                    document.getElementById("App").style.backgroundImage = "linear-gradient(var(--blue),var(--dark))";
            }
        });
    })

    // Change Custom Background Color Function..
    document.getElementById("color_palette_cmj239x").addEventListener("input", function (event) {
        if (document.getElementById("color_palette_cmj239x").value.trim().length > 4) {
            document.getElementById("App").style.backgroundImage = "unset";
            document.getElementById("color_palette_cmj239x").value = event.target.value;
            document.getElementById("App").style.backgroundColor = `${event.target.value}`;
        }
    });

    // Change Window Width & Height Function..
    document.getElementById("set_width_window_size_cnm29d3").addEventListener("input", function () {
        index_page.style.width = document.getElementById("set_width_window_size_cnm29d3").value;
        resume_page.style.width = document.getElementById("set_width_window_size_cnm29d3").value;
        social_media_page.style.width = document.getElementById("set_width_window_size_cnm29d3").value;
        last_item_in_social_media_page.style.width = index_page.clientWidth.toString() - 20;
        all_item_in_social_media_page.forEach((e) => {
            if (e.className !== "medium") {
                e.style.width = (social_media_page.clientWidth / 2) - 20;
            }
        });
    });
    document.getElementById("set_height_window_size_cnm29d3").addEventListener("input", function () {
        index_page.style.height = document.getElementById("set_height_window_size_cnm29d3").value;
        resume_page.style.height = document.getElementById("set_height_window_size_cnm29d3").value;
        social_media_page.style.height = document.getElementById("set_height_window_size_cnm29d3").value;
    });

    // Change Profile Descripotion Alignment Function..
    element_window_component_alignment_buttons.forEach((e) => {
        e.addEventListener("click", function (event) {
            profile_card_description_contents.style.textAlign = event.target.value.toString();
        })
    });
    profile_card_description_contents.addEventListener("keydown", function (event) {
        if (event.keyCode == 8) {
            if (index_page.clientHeight > 500) {
                index_page.style.height = index_page.clientHeight - 10;
            }
        }
    });
    profile_card_description_contents.addEventListener("input", function () {
        var process_text_value_2mnc834 = profile_card_description_contents.innerText;
        var process_text_value_2mnc835 = profile_card_description_contents.innerText.length;
        if (profile_card_description_contents.innerText.length > 300) {
            index_page.style.height = index_page.clientHeight + 2;
        } else if (profile_card_description_contents.innerText.trim() == "") {
            profile_card_description_contents.innerText = "";
            index_page.style.height = 500;
        }else {
            document.getElementById("element_window_component_alignment").style.backgroundColor = "rgb(230,230,230)";
            document.getElementById("element_window_component_alignment").style.borderLeft = "3px solid var(--orange)";
        } 
    });
    document.getElementById("element_window_component_alignment").addEventListener("mouseenter", function () {
        document.getElementById("element_window_component_alignment").style.backgroundColor = "transparent";
        document.getElementById("element_window_component_alignment").style.borderLeft = "3px solid transparent";
    });

    document.getElementById("skills_search_box").addEventListener("click", function () {
        document.getElementById("popup_window_cover").style.display = "inherit";
        get_skills_search_box_items.forEach((e) => {
            e.addEventListener("click", function (event) {
                document.getElementById("message_box").innerText = "";
                document.getElementById("message_box").style.display = "inherit";
                switch (event.target.innerText.toLowerCase().trim()) {
                    case "javascript":
                        skill_data = "Frontend"; break;
                    case "reactjs":
                        skill_data = "Frontend"; break;
                    case "nextjs":
                        skill_data = "Frontend"; break;
                    case "html5":
                        skill_data = "Frontend"; break;
                    case "css3":
                        skill_data = "Frontend"; break;
                    case "php":
                        skill_data = "Backend"; break;
                    case "python":
                        skill_data = "Backend"; break;
                    case "c++":
                        skill_data = "Backend"; break;
                    case "java":
                        skill_data = "Backend"; break;
                    case "astro":
                        skill_data = "Frontend"; break;
                    case "scss":
                        skill_data = "Frontend"; break;
                    case "r":
                        skill_data = "System Programming"; break;
                    case "jquery":
                        skill_data = "Backend"; break;
                    case "#c":
                        skill_data = "Frontend"; break;
                    case "vuejs":
                        skill_data = "Frontend"; break;
                    case "asp.net":
                        skill_data = "Backend"; break;
                    case "mysql":
                        skill_data = "Database"; break;
                    case "c":
                        skill_data = "System Programming"; break;
                    case "sql server":
                        skill_data = "Database"; break;
                    case "postgresql":
                        skill_data = "Database"; break;
                    case "vb.net":
                        skill_data = "System Programming"; break;
                    case "nuxtjs":
                        skill_data = "Frontend"; break;
                    default:
                        document.getElementById("message_box").style.display = "inherit";
                        document.getElementById("message_box").innerText = "Sorry! I can\'t find your skill section, try again!";
                        const xm28xn38_xm29x73 = setInterval(() => {
                            document.getElementById("message_box").innerText = "";
                            document.getElementById("message_box").style.display = "none";
                            clearInterval(xm28xn38_xm29x73);
                        }, 3000);
                }
                document.getElementById("message_box").innerText = event.target.innerText + " Added to " + skill_data + " section successfully."
                const cm29x83_xm273 = setInterval(() => {
                    document.getElementById("message_box").style.display = "none";
                    document.getElementById("message_box").innerText = "";
                    clearInterval(cm29x83_xm273);
                }, 4000);
            })
        })
    });
    close_popup_window.addEventListener("click", function () {
        document.getElementById("popup_window_cover").style.display = "none";
    });

}

window.addEventListener("click", function () {
    document.getElementById("element_window_component_alignment").style.backgroundColor = "transparent";
    document.getElementById("element_window_component_alignment").style.borderLeft = "3px solid transparent";
})

window.addEventListener("load", function () {
    Runner();
})
