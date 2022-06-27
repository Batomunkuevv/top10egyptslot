"use strict";

//*<Import>=====================================================================================================

import * as myFunctions from "./modules/functions.js";

//*</Import>====================================================================================================

window.addEventListener("DOMContentLoaded", () => {
    //*<Web-p>=================================================================================================

    myFunctions.isWebp();

    //*</Web-p>=================================================================================================
    function getHiddenElementHeight(el) {
        var clone = el.cloneNode(true);
        el.parentElement.append(clone);
        clone.style.zIndex = "-100";
        clone.style.color = "transparent";
        clone.style.maxHeight = "5000px";
        var height = clone.offsetHeight;
        clone.remove();
        return height;
    }

    function collapseBrandMoreInfo() {
        const brands = document.querySelectorAll(".item-table__body");

        if (!brands) {
            return;
        }

        brands.forEach(function (brand) {
            const button = brand.querySelector(".item-table__more");
            // const closeText = button.querySelector("span").innerText;
            button.addEventListener("click", function () {
                const hiddenElementList = brand.querySelector(".item-table__list");
                const hiddenElementBonus = brand.querySelector(".item-table__rating");
                const hiddenElementText = brand.querySelector(".item-table__undertext");
                if (brand.classList.contains("is-open")) {
                    hiddenElementList.style.maxHeight = "0px";
                    hiddenElementBonus.style.maxHeight = "0px";
                    hiddenElementText.style.maxHeight = "0px";
                    brand.classList.remove("is-open");
                    button.classList.remove("item-table__more_open");
                    button.querySelector("span").innerText = "Show more";
                } else {
                    hiddenElementList.style.maxHeight =
                        getHiddenElementHeight(hiddenElementList) + "px";
                    hiddenElementBonus.style.maxHeight =
                        getHiddenElementHeight(hiddenElementBonus) + "px";
                    hiddenElementText.style.maxHeight =
                        getHiddenElementHeight(hiddenElementText) + "px";
                    brand.classList.add("is-open");
                    button.classList.add("item-table__more_open");
                    button.querySelector("span").innerText = "Show less";
                }
            });
        });
    }

    collapseBrandMoreInfo();
});
