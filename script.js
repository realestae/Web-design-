// ==========================================
// MYSPACE PERSONAL WEBSITE
// Developed by Esayas Alemayehu
// ==========================================


document.addEventListener("DOMContentLoaded", function () {


    // GET HTML ELEMENTS

    const menuBtn = document.getElementById("menuBtn");

    const closeBtn = document.getElementById("closeBtn");

    const navMenu = document.getElementById("navMenu");


    // OPEN MOBILE MENU

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.add("active");

            menuBtn.setAttribute("aria-expanded", "true");

        });

    }


    // CLOSE MOBILE MENU

    if (closeBtn && navMenu) {

        closeBtn.addEventListener("click", function () {

            navMenu.classList.remove("active");

            if (menuBtn) {

                menuBtn.setAttribute("aria-expanded", "false");

            }

        });

    }


    // CLOSE MENU WHEN CLICKING A LINK

    if (navMenu) {

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                if (menuBtn) {

                    menuBtn.setAttribute("aria-expanded", "false");

                }

            });

        });

    }


    // CLOSE MENU USING ESCAPE KEY

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && navMenu) {

            navMenu.classList.remove("active");

            if (menuBtn) {

                menuBtn.setAttribute("aria-expanded", "false");

            }

        }

    });


    // AUTOMATICALLY UPDATE FOOTER YEAR

    const footerYear = document.querySelector(".footer");

    if (footerYear) {

        const paragraphs = footerYear.querySelectorAll("p");

        if (paragraphs.length > 0) {

            paragraphs[0].innerHTML =
                "&copy; " + new Date().getFullYear() +
                " Esayas Alemayehu. All Rights Reserved.";

        }

    }


    // CONSOLE MESSAGE

    console.log("MySpace Personal Website Loaded Successfully!");

});