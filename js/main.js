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

    // post source detail
    function handlePostSourceDetail() {
        //Tự động chuyển nguồn rỗng (không đặt nguồn) thành sohuutritue.net.vn
        var sourceEl = document.querySelector('.post-source');

        if(!sourceEl) return

        var sourceHtml  = sourceEl.innerHTML;
        if (sourceHtml == '') {
        sourceEl.innerHTML = window.location.href.replace('thitruongbiz.vn', 'sohuutritue.net.vn');
        }

        /*thu gọn link nguồn*/
        function isValidUrl() {
            return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3,3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2,2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2,2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2,2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(arguments[0]);
          }
          
          function extractHostname(url) {
            var hostname;
            if (url.indexOf("//") > -1) {
              hostname = url.split("/")[2];
            } else {
              hostname = url.split("/")[0];
            }
            hostname = hostname.split(":")[0];
            hostname = hostname.split("?")[0];
            return hostname;
          }
          
          var sourceLinkEl = document.querySelector(".post-source");
          var sourceLink = sourceLinkEl.innerHTML.trim();
          if (sourceLinkEl.innerHTML == "") {
            sourceLinkEl.remove();
          }
          if (!isValidUrl(sourceLink)) {
            sourceLinkEl.innerHTML = "Nguồn : " + sourceLinkEl.innerHTML;
          } else {
            var shortLink = extractHostname(sourceLink);
            var newInner =
            '<div class="link-wrapper">\
              <div class="full-url">\
                <div class="clearfix">\
                  <span class="text">Link bài gốc</span>\
                  <span class="icon-copy">📋 Copy link</span>\
                </div>\
                <a class="link" href="'+ sourceLink + '" target="_blank" class="link" rel="nofollow"> ' + sourceLink + ' </a>\
                <input style="font-size:10px;" type="text" value=" ' + sourceLink + ' " id="copyURL">\
              </div>\
              <div class="short-url">Nguồn ' + shortLink + '</div>\
            </div>';
            
            sourceLinkEl.innerHTML = newInner;
            var iconCopy = document.querySelector('.icon-copy');
            iconCopy.addEventListener('click',function(){
              document.querySelector('.icon-copy').innerHTML = "📋 Link đã copy";
              var copyText = document.querySelector("#copyURL");
              copyText.select();
              copyText.setSelectionRange(0, 99999)
              document.execCommand("copy");
            })
            var linkWrapper = document.querySelector('.link-wrapper');
            linkWrapper.addEventListener('mouseleave',function() {
              setTimeout(function(){
                iconCopy.innerHTML = "📋 Copy link";
              },200)
            });
          }


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
        handlePostSourceDetail();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
