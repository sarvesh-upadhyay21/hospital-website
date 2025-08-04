jQuery.noConflict();
(function ($) {

    function _getCookie(name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg) {
                return _getCookieVal(j);
            }
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) break;
        }
        return null;
    }

    function _setCookie(name, value, expires, path, domain, secure) {
        var vurl = true;
        if (path != "" && path != undefined) {
            vurl = validUrl(path);
        }
        if (jQuery.type(name) == "string" && vurl) {
            document.cookie =
                name +
                "=" +
                escape(value) +
                (expires ? "; expires=" + expires.toGMTString() : "") +
                (path ? "; path=" + path : "") +
                (domain ? "; domain=" + domain : "") +
                (secure ? "; secure" : "");
        }
    }

    function _getCookieVal(offset) {
        var endstr = document.cookie.indexOf(";", offset);
        if (endstr == -1) {
            endstr = document.cookie.length;
        }
        return unescape(document.cookie.substring(offset, endstr));
    }

    if (_getCookie("fontSize") != null) {
        var fontSize = _getCookie("fontSize");
        jQuery("body").css("font-size", fontSize + "px");
    }
    else {
        var fs = jQuery("body").css("font-size");
        var fontSize = fs;
        jQuery("body").css("font-size", fs);
    }

    $('.fontSizeEvent').on('fontSelected', function () {
        let fontSizeStatus = _getCookie("fontSizeStatus");

        if (fontSizeStatus == null) {
            fontSizeStatus = 'normal';

        }
        let label = $('.fontSizeEvent button[data-event-type="' + fontSizeStatus + '"]').attr('data-label');
        let dataSelected = $('.fontSizeEvent button[data-event-type="' + fontSizeStatus + '"]').attr('data-selected-text');


        $('.fontSizeEvent a[data-event-type="' + fontSizeStatus + '"')
            .attr('aria-label', label + ' - ' + dataSelected)
            .attr('title', label + ' - ' + dataSelected)
            .addClass('link-selected');

        $('.fontSizeEvent a[data-event-type="' + fontSizeStatus + '"').parent().siblings().each(function () {
            let label = $(this).find('button').attr('data-label');
            $(this).find('button').attr('aria-label', label).attr('title', label).removeClass('link-selected');
        })
    })

    $('.fontSizeEvent').trigger('fontSelected');

    $('.fontSizeEvent button').on('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        let fontEvent = $(this).attr('data-event-type');

        if (fontEvent == "increase") {
            if (parseInt(fontSize) < 18) {
                fontSize = parseInt(fontSize) + 2;
                _setCookie("fontSizeStatus", "increase");
            }
        } else if (fontEvent == "decrease") {
            if (parseInt(fontSize) > 10) {
                fontSize = parseInt(fontSize) - 2;
            }
            _setCookie("fontSizeStatus", "decrease");
        } else {
            fontSize = 14;
            _setCookie("fontSizeStatus", "normal");
        }

        $(this).addClass('link-selected').parent().siblings().find('button').removeClass('link-selected')
        _setCookie("fontSize", fontSize);
        $("body").css("font-size", fontSize + "px");
        $('.fontSizeEvent').trigger('fontSelected');
    })



    function printbody() {
        window.print()
    }

    //Keyboard accessing functions
    function addFocusClass() {

        // jQuery('#accessibility').find('li').each(function (index, element) {
        //     jQuery(this).children('a').focus(function (e) {

        //         jQuery(this).parent('li').addClass('mFocus');
        //     });
        // });
        // jQuery('#accessibilityMenu>li>a').focusin(function (e) {
        //     jQuery('#accessibilityMenu').find('li').each(function (index, element) {
        //         jQuery(this).removeClass('mFocus');
        //     });
        //     jQuery(this).addClass('mFocus');

        // });

        // jQuery("#accessibilityMenu>li:last-child ul li:last-child").focusout(function (e) {
        //     jQuery("#accessibilityMenu>li:last-child").removeClass("mFocus")
        // });

        // jQuery('#accessibilityMenu>li>a').click(function (e) {
        //     jQuery(this).addClass('focus');
        //     jQuery(this).next('ul').addClass('visible');

        // });

        // jQuery('html').click(function (e) {
        //     if (e.target.id == 'accessibilityMenu' || jQuery(e.target).parents('#accessibilityMenu').length > 0) {
        //     } else {
        //         jQuery('.goiSearch').removeClass('visible');
        //         jQuery('#accessibilityMenu>li').each(function (index, element) {
        //             jQuery(this).removeClass('mFocus');
        //             jQuery(this).children('a').removeClass('focus');
        //         });
        //     }
        // });

    }

    jQuery(document).ready(function (e) {
        /*jQuery("#print").click(function(e) {
             printbody()
        }),*/
        jQuery("#SkipContent").next().attr("id", "row-content");
        function printData() {
            var divToPrint = document.getElementById("row-content");
            newWin = window.open("");
            newWin.document.write(divToPrint.outerHTML);
            newWin.print();
            newWin.close();
        }
        jQuery('#print').on('click', function () {
            jQuery("table").attr('border', '1');
            printData();
        });

        jQuery("a[href*=Skip").click(function (e) {
            e.preventDefault(), $target = jQuery(this).attr("href"), $targetCountTop = jQuery($target).offset().top, jQuery("html, body").animate({
                scrollTop: $targetCountTop + "px"
            }, 500, function () { })
        }), jQuery("#flexSlider").flexslider({
            animation: "slide",
            controlNav: !0
        }), jQuery("#flexSlider2").flexslider({
            animation: "slide",
            controlNav: !0
        }), jQuery("#footerScrollbar2").flexslider({
            animation: "slide",
            animationLoop: !1,
            controlNav: !1,
            itemWidth: 300,
            itemMargin: 10,
            maxItems: 6
        }),
            jQuery(".galleryCarasole").flexslider({
                animation: "slide",
                animationLoop: !1,
                controlNav: !1,
                itemWidth: 200,
                itemMargin: 20
            }), jQuery("#carousel").flexslider({
                animation: "slide",
                controlNav: !1,
                directionNav: !1,
                animationLoop: !0,
                minItems: 3,
                slideshow: !1,
                itemWidth: 210,
                itemMargin: 5,
                direction: "vertical",
                asNavFor: "#slider"
            }), jQuery("#slider").flexslider({
                animation: "slide",
                controlNav: !1,
                animationLoop: !1,
                slideshow: !1,
                sync: "#carousel"
            }),
            jQuery(".fancybox").fancybox({

                beforeShow: function () {

                    if (this.title) {
                        this.title += "<br/>";
                    }
                    if (jQuery(this.element).parents('.fancyShare').length > 0) {
                        this.title += jQuery(this.element)
                            .parents('.fancyShare')
                            .find('.hide.fancySocial')
                            .html();
                    }
                    // var imgAlt = jQuery(this.element).find("img").attr("alt");
                    // var dataAlt = jQuery(this.element).data("alt");
                    // if (imgAlt) {
                    //     jQuery(".fancybox-image").attr("alt", imgAlt);
                    // } else if (dataAlt) {
                    //     jQuery(".fancybox-image").attr("alt", dataAlt);
                    // }

                },
                helpers: {
                    title: {
                        type: 'inside'
                    }
                },
                afterShow: function () { jQuery(".fancybox-skin").attr("tabindex", -1).focus() },
                afterClose: function () {
                    jQuery(this.element).focus();
                }

            });
        jQuery("#infotab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = jQuery(this),
                    i = jQuery("#nested-tabInfo"),
                    o = jQuery("span", i);
                o.text(t.text()), i.show()
            }
        }), jQuery("#galleryTab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = jQuery(this),
                    i = jQuery("#nested-tabInfo"),
                    o = jQuery("span", i);
                o.text(t.text()), i.show()
            }
        }), jQuery(".tabassign").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = jQuery(this),
                    i = jQuery("#nested-tabInfo"),
                    o = jQuery("span", i);
                o.text(t.text()), i.show()
            }
        }), jQuery(".tabassignVertical").easyResponsiveTabs({
            type: "vertical",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
                var t = jQuery(this),
                    i = jQuery("#nested-tabInfo"),
                    o = jQuery("span", i);
                o.text(t.text()), i.show()
            }
        }), jQuery("img.svg").each(function () {
            var e = jQuery(this),
                t = e.attr("id"),
                i = e.attr("class"),
                o = e.attr("src");
            jQuery.get(o, function (o) {
                var n = jQuery(o).find("svg");
                "undefined" != typeof t && (n = n.attr("id", t)), "undefined" != typeof i && (n = n.attr("class", i + " replaced-svg")), n = n.removeAttr("xmlns:a"), e.replaceWith(n)
            }, "xml")
        }), addFocusClass(), jQuery(".various").fancybox({
            maxWidth: 800,
            maxHeight: 600,
            fitToView: !1,
            width: "70%",
            height: "70%",
            autoSize: !1,
            closeClick: !1,
            openEffect: "none",
            closeEffect: "none",
            afterShow: function () { jQuery(".fancybox-skin").attr("tabindex", -1).focus() },
            afterClose: function () {
                jQuery(this.element).focus();
            }
        }), jQuery(".viewSwicther .thumbs-view-btn").click(function (e) {
            e.preventDefault(), jQuery(".thumbs_view").removeClass("list-view")
        }), jQuery(".viewSwicther .thumbs-list-view-btn").click(function (e) {
            e.preventDefault(), jQuery(".thumbs_view").addClass("list-view")
        })
    });


    /*var stickyOffset = jQuery("#mainHeader").offset().top + jQuery("#mainHeader").height(),
        dpName = jQuery(".logo>a>span").text(),
        emblem = jQuery(".logo>.emblem>img").attr("src");
    jQuery(window).scroll(function() {
        var e = jQuery("#mainHeader"),
            t = jQuery(window).scrollTop();
        t >= stickyOffset ? e.addClass("fixedHeader") : e.removeClass("fixedHeader"), jQuery(window).width() > 640 && (jQuery(".appendeddpName").remove(), jQuery(".fixedHeader").find(".govBranding").find("ul").append('<li class="appendeddpName"><a href="#">' + dpName + "</a></li>"), jQuery(".appendedemblem").remove(), jQuery(".fixedHeader").find(".main-menu").prepend('<img class="appendedemblem" src=' + emblem + ">"))
    });*/
})(jQuery);

jQuery('table').basictable({
    breakpoint: 991,
    forceResponsive: true
});


jQuery('table').each(function (index, element) {
    if ((jQuery(this).find('th').length > 0) || jQuery(this).find('thead').length > 0) {
        //var thlnth = $('table').find('th').length;

        jQuery(this).basictable({
            breakpoint: 991,
            forceResponsive: true
        });

        //$(this).css('border', thlnth+'px solid red');

    } else {
        jQuery(this).wrap("<div class='tableWrapperResponsive' style='width:100%; overflow-x:scroll'>  </div>")
    }
});



//topbar Menu accessibility 
  
  jQuery('#accessibility > ul').attr('role', 'menubar')
    jQuery('#accessibility > ul > li').attr('role', 'none')
    jQuery('#accessibility > ul > li > a, #accessibility > ul > li > button').attr('role', 'menuitem').attr('tabindex', '0')
    jQuery('#accessibility > ul > li  a, #accessibility > ul > li  button').attr('tabindex', '0')
  
    document.addEventListener('DOMContentLoaded', function() {
        const menuItems = document.querySelectorAll('#accessibilityMenu > li > a, #accessibilityMenu > li > button, #accessibilityMenu > li button.bhashini-dropdown-btn');
        let lastFocusedItem = null;
        
        menuItems.forEach((item, index) => {
            const submenu = item.nextElementSibling;

            const activateSubmenu = function(e) {
                const isAnchor = item.tagName.toLowerCase() === 'a';
                const hasSubmenu = submenu !== null;

                if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    lastFocusedItem = item;
                    if (hasSubmenu) {
                        toggleSubmenu(item, submenu);
                    } else if (isAnchor && item.href) {
                        window.location.href = item.href;
                    }
                } else if (e.type === 'click' || e.type === 'touchend') {
                    if (hasSubmenu) {
                        e.preventDefault();
                        toggleSubmenu(item, submenu);
                    } else if (isAnchor && item.href) {
                        return;
                    }
                }
            };

            item.addEventListener('keydown', function(e) {
                activateSubmenu(e);

                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    const nextIndex = (index + 1) % menuItems.length;
                    menuItems[nextIndex].focus();
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    const prevIndex = (index - 1 + menuItems.length) % menuItems.length;
                    menuItems[prevIndex].focus();
                } else if (e.key === 'Home') {
                    e.preventDefault();
                    menuItems[0].focus();
                } else if (e.key === 'End') {
                    e.preventDefault();
                    menuItems[menuItems.length - 1].focus();
                }
            });

            item.addEventListener('click', activateSubmenu);
            item.addEventListener('touchend', activateSubmenu);

            if (submenu) {
                const focusableSelector = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

                submenu.addEventListener('keydown', function(e) {
                    const focusableElements = Array.from(submenu.querySelectorAll(focusableSelector)).filter(el => !el.disabled && el.offsetParent !== null);
                    if (focusableElements.length === 0) return;
                    const firstElement = focusableElements[0];
                    const lastElement = focusableElements[focusableElements.length - 1];

                    const currentIndex = focusableElements.indexOf(document.activeElement);

                    if (e.key === 'Tab') {
                        if (e.shiftKey) {
                            if (document.activeElement === firstElement) {
                                e.preventDefault();
                                lastElement.focus();
                            }
                        } else {
                            if (document.activeElement === lastElement) {
                                e.preventDefault();
                                firstElement.focus();
                            }
                        }
                    } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        const next = currentIndex + 1 < focusableElements.length ? focusableElements[currentIndex + 1] : firstElement;
                        next.focus();
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prev = currentIndex - 1 >= 0 ? focusableElements[currentIndex - 1] : lastElement;
                        prev.focus();
                    } else if (e.key === 'Escape') {
                        closeSubmenu(item, submenu);
                        if (lastFocusedItem) lastFocusedItem.focus();
                    }
                });

                submenu.addEventListener('focusout', function(e) {
                    if (!submenu.contains(e.relatedTarget) && e.relatedTarget !== item) {
                        closeSubmenu(item, submenu);
                    }
                });
            }

            // item.addEventListener('focus', function () {
            //   lastFocusedItem = item;
            //   if (submenu && submenu.getAttribute('aria-hidden') === 'false') {
            //     closeSubmenu(item, submenu);
            //   }
            // });
            item.addEventListener('focus', function() {
                lastFocusedItem = item;
                // Do not auto-close here — let user control via Esc or blur
            });
        });

        document.addEventListener('click', function(e) {
            let isClickInsideMenu = false;

            menuItems.forEach(item => {
                const submenu = item.nextElementSibling;
                if (item.contains(e.target) || (submenu && submenu.contains(e.target))) {
                    isClickInsideMenu = true;
                }
            });

            if (!isClickInsideMenu) {
                menuItems.forEach(item => {
                    const submenu = item.nextElementSibling;
                    if (submenu && submenu.getAttribute('aria-hidden') === 'false') {
                        closeSubmenu(item, submenu);
                    }
                });
            }
        });

        document.addEventListener('touchend', function(e) {
            let isTouchInsideMenu = false;

            menuItems.forEach(item => {
                const submenu = item.nextElementSibling;
                if (item.contains(e.target) || (submenu && submenu.contains(e.target))) {
                    isTouchInsideMenu = true;
                }
            });

            if (!isTouchInsideMenu) {
                menuItems.forEach(item => {
                    const submenu = item.nextElementSibling;
                    if (submenu && submenu.getAttribute('aria-hidden') === 'false') {
                        closeSubmenu(item, submenu);
                    }
                });
            }
        });

        function toggleSubmenu(item, submenu) {
            const isOpen = submenu.getAttribute('aria-hidden') === 'false';
            if (isOpen) {
                closeSubmenu(item, submenu);
            } else {
                openSubmenu(item, submenu);
            }
        }

        function openSubmenu(item, submenu) {
            submenu.style.opacity = '1';
            submenu.style.visibility = 'visible';
            submenu.style.display = 'block';
            submenu.setAttribute('aria-hidden', 'false');
            item.setAttribute('aria-expanded', 'true');

        }

        function closeSubmenu(item, submenu) {
            submenu.style.opacity = '';
            submenu.style.visibility = '';
            submenu.style.display = '';
            submenu.setAttribute('aria-hidden', 'true');
            item.setAttribute('aria-expanded', 'false');
        }

        //By pressing ESC key close any open submenu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                menuItems.forEach(item => {
                    const submenu = item.nextElementSibling;
                    if (submenu && submenu.getAttribute('aria-hidden') === 'false') {
                        closeSubmenu(item, submenu);
                        if (item) item.focus();
                    }
                });
            }
        });

    });



