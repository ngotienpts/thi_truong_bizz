document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");
    // slide
    const autoSlides = document.querySelectorAll(".js__autoSlideContainer");
    const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
    const oneAutoplaySlides = document.querySelectorAll(".js__oneAutoplaySlidesContainer");
    const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");

    const stickyHeaderPC = document.querySelector(".js__stickyHeader");
    const video169s = document.querySelectorAll(".js__video169");

    // show sub menu
    const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
    const subMenu = document.querySelector(".js__clickShowMenuMb");


    // search pc
    const searchPc = document.querySelector(".js__searchPc");
    // search mb
    const searchMb = document.querySelector(".js__searchMb");
    

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        if(!backTop) return;
        
        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
        
    }

    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }


    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        dropdownSubMenu &&
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý sự kiện show search pc
    function handleShowSearchPc() {
        if (!searchPc) return;

        var iconSearchPc = searchPc.querySelector(".js__searchPcIcon");
        var formSearchPc = searchPc.querySelector(".js__searchPcContent");

        const focusElement = searchPc.querySelector(".js__focusSearchPc");

        iconSearchPc.onclick = function () {
            formSearchPc.classList.toggle("active");
            focusElement.focus();
        };
       
    }
    // Xử lý sự kiện show search mb
    function handleShowSearchMb() {
        if (!searchMb) return;
        var closeSearchMb =
            document.querySelector(".js__closeSearchMb");
        var formSearchMb = document.querySelector(".js__formSearchMb");
        const focusElement =
            formSearchMb.querySelector(".js__focusSearchMb");
        searchMb.onclick = function () {
            formSearchMb.classList.add("active");
            focusElement.focus();
            if (showSearchMb.classList.contains("active")) {
                focusElement.value = "";
            }
        };
        closeSearchMb.onclick = function () {
            formSearchMb.classList.remove("active");
            focusElement.value = "";
        };
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }


    // khởi tạo slider với nhiều item có width auto
    function initSliderAutoItems() {
        if (autoSlides) {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        }
    }

    // Khởi tạo slider với một item
    function initSliderOneItems() {
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                });
            });
        }
    }
    // Khởi tạo slider với một item autoplay
    function initSliderOneAutoplayItems() {
        if (oneAutoplaySlides) {
            oneAutoplaySlides.forEach((item) => {
                var slider = item.querySelector(".js__oneAutoplaySlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    loop:true,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                      },
                });
            });
        }
    }

    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        }
                    },
                });
            });
        }
    }


    // Xử lý thanh header dính
    function handleStickyHeader() {
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }
    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
function handleBackTopVisibility() {
    if (backTop) {
        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {
            backTop.style.opacity = 1;
            backTop.style.visibility = "visible";
        } else {
            backTop.style.opacity = 0;
            backTop.style.visibility = "hidden";
        }
    }
}
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        window.onscroll = function () {
            handleStickyHeader();
            handleBackTopVisibility()
        };
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleShowSearchPc();
        handleShowSearchMb();
        handleVideo169();
        // slide
        initSliderAutoItems();
        initSliderOneItems();
        initSliderOneAutoplayItems();
        initSliderThreeItems();
        // scroll
        handleWindowScroll();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
