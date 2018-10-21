/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - 0933112900
 // @baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/"use strict";

var CANHCAM_APP = { "ACTIVE_FIXED_HEADER": true, "HEADER_TRANPARENT": false, "ACTIVE_HEADER_POSITION": 1, "ACTIVE_PADDING_MAIN": true, "ACTIVE_VALIDATOR": true, "ACTIVE_SELECT": true, "ACTIVE_FIXED_FOOTER": true, "ACTIVE_LIST_TO_SELECT": true, "DISPLAY_FOOTER": 600, "ACTIVE_RESPONSIVE": true, "ACTIVE_BACKTOTOP": true, "DISPLAY_BACKTOTOP": 100, "CHANGE_GRID": 991, "CHANGE_GRID_SM": 767, "DEV_MODE": false, "DEV_MODE_GIRD_FULL": false };
function backToTop() {
	if ($('#back-to-top').length) {
		var backToTop = function backToTop() {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > CANHCAM_APP.DISPLAY_BACKTOTOP) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}
		};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_BACKTOTOP) {
		backToTop();
	}
});

function CanhCamResponsive() {
	// Set BG Mask
	$('[bg-mask]').each(function () {
		var bgimg = $(this).attr('bg-mask');
		$(this).css({
			"mask-image": "url(" + bgimg + ")",
			"mask-position": "center center",
			"mask-repeat": "no-repeat",
			"-webkit-mask-image": "url(" + bgimg + ")",
			"-webkit-mask-position": "center center",
			"-webkit-mask-repeat": "no-repeat"
		});
	});
	// Set BG Resposive
	$('[bg-img]').each(function () {
		var bgimg = $(this).attr('bg-img');
		var pos = $(this).attr('bg-pos');
		var size = $(this).attr('bg-size');
		if (pos && pos.length > 0) {
			$(this).css({
				"background-position": pos
			});
		} else {
			$(this).css({
				"background-position": "center center"
			});
		}
		if (size && size.length > 0) {
			$(this).css({
				"background-size": size
			});
		} else {
			$(this).css({
				"background-size": "cover"
			});
		}
		$(this).css({
			"background-image": "url(" + bgimg + ")"
		});
	});

	$('[bg-img-responsive]').each(function () {
		var bgimg = $(this).attr('bg-img-responsive');
		var bgimgsm = $(this).attr('bg-img-responsive-sm');
		var bgimgxs = $(this).attr('bg-img-responsive-xs');
		if ($(window).width() >= CANHCAM_APP.CHANGE_GRID) {
			$(this).css({
				"background-image": "url(" + bgimg + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else if ($(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
			$(this).css({
				"background-image": "url(" + bgimgsm + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		} else {
			$(this).css({
				"background-image": "url(" + bgimgxs + ")",
				"background-position": "center center",
				"background-size": "cover"
			});
		}
	});

	$('[img-src-responsive]').each(function () {
		var bgimg2 = $(this).attr('img-src-responsive');
		var bgimg2sm = $(this).attr('img-src-responsive-sm');
		var bgimg2xs = $(this).attr('img-src-responsive-xs');
		if ($(window).width() >= CANHCAM_APP.CHANGE_GRID) {
			$(this).attr("src", "" + bgimg2 + "");
		} else if ($(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
			$(this).attr("src", "" + bgimg2sm + "");
		} else {
			$(this).attr("src", "" + bgimg2xs + "");
		}
	});
};

$(function () {
	if (CANHCAM_APP.ACTIVE_RESPONSIVE) {
		CanhCamResponsive();
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_RESPONSIVE) {
		CanhCamResponsive();
	}
});

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover({
		trigger: 'focus'
	});
});
// Thêm [dropdown-type="hover"] vào thẻ a để bật tính năng hover open dropdown 
if ($(window).width() > CANHCAM_APP.CHANGE_GRID) {
	$('.dropdown').on('mouseenter mouseleave', function () {
		var ___d = $(this).find('[dropdown-type="hover"]').parents('.dropdown');
		if (___d && ___d.length > 0) {
			$(this).find('[dropdown-type="hover"]').removeAttr('data-toggle');
			setTimeout(function () {
				___d[___d.is(':hover') ? 'addClass' : 'removeClass']('show');
				___d.is(':hover') ? ___d.find('.dropdown-menu').show() : ___d.find('.dropdown-menu').hide();
			}, 10);
		}
	});
} else {
	$('.dropdown').each(function () {
		$(this).addClass('show');
		$(this).find('.dropdown-menu').show();
	});
}

function countUpCanhCam() {

	$('[data-count]').each(function () {
		var elm = $(this).offset().top;
		var docH = $(window).height();
		var docS = $(window).scrollTop();
		var padingTop = 0;
		if ($(this).attr('data-top') && $(this).attr('data-top').length) {
			padingTop = parseInt($(this).attr('data-top'));
		}
		var result = elm + padingTop - (docH + docS);
		var run = false;

		if (result <= 0 && !run) {
			var $this = $(this),
			    countTo = $this.attr('data-count'),
			    durationTo = parseInt($this.attr('data-duration'));
			$({ countNum: $this.text() }).animate({
				countNum: countTo
			}, {
				duration: durationTo,
				easing: 'linear',
				step: function step() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function complete() {
					$this.text(this.countNum);
					run = true;
				}
			});
		}
	});
}

$(document).ready(function () {
	countUpCanhCam();
});

$(window).scroll(function () {
	countUpCanhCam();
});

$(window).resize(function () {
	countUpCanhCam();
});

function CanhCamChangeDataHoverClick() {
	$('[data-change]').each(function () {
		var newSrc = $(this).attr('data-new');
		var oldSrc = $(this).attr('data-old');
		var typeChange = $(this).attr('data-change');
		if (typeChange && typeChange.length > 0) {
			if (typeChange === 'src') {
				$(this).hover(function () {
					$(this).attr(typeChange, newSrc);
				}, function () {
					$(this).attr(typeChange, oldSrc);
				});
			} else if (typeChange === 'background' || typeChange === 'background-image') {
				$(this).hover(function () {
					$(this).css(typeChange, "url(" + newSrc + ")");
				}, function () {
					$(this).css(typeChange, "url(" + oldSrc + ")");
				});
			} else if (typeChange === 'class') {
				$(this).hover(function () {
					$(this).removeClass(oldSrc).addClass(newSrc);
				}, function () {
					$(this).removeClass(newSrc).addClass(oldSrc);
				});
			}
		}
	});
};

$(function () {
	CanhCamChangeDataHoverClick();
});

function setFooter() {
	var bodyHeight = $("body").outerHeight(),
	    headerHeight = $("header").outerHeight(),
	    footerHeight = $("footer").outerHeight(),
	    mainHeight = $("main").outerHeight(),
	    curentHeight = mainHeight + headerHeight + footerHeight,
	    curentfixedHeight = mainHeight + footerHeight,
	    newHeight = bodyHeight - (headerHeight + footerHeight),
	    newfixedHeight = bodyHeight - footerHeight;
	if ($(window).width() > CANHCAM_APP.DISPLAY_FOOTER) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("main").css('min-height', newfixedHeight + 'px');
		} else {
			if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
				$("main").css('min-height', newHeight + 'px');
			} else {
				$("main").css('min-height', newfixedHeight + 'px');
			}
		}
	} else {
		$("main").css('min-height', 'initial');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_FOOTER) {
		setFooter();
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_FOOTER) {
		setFooter();
	}
});
function setHeader(elm) {
	if (elm >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
		$("header").addClass('active');
	} else {
		$("header").removeClass('active');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_FIXED_HEADER) {
		$("header").addClass('fixedheader');
		if ($(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
			setHeader($(window).scrollTop());
		}
	} else {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("header").addClass('fixedheader');
		} else {
			$("header").removeClass('fixedheader');
		}
	}
	if ($("header").hasClass("fixedheader")) {
		$("main").addClass('main-fixedheader');
	}
});

// Fixed Header
$(window).scroll(function () {
	setHeader($(document).scrollTop());
});
// Fixed Header
$(window).resize(function () {
	if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
			$("header").addClass('fixedheader');
		} else {
			$("header").removeClass('fixedheader');
		}
	}
});

function setMain() {
	var headerHeight = $("header").outerHeight();
	if ($(window).width() <= CANHCAM_APP.CHANGE_GRID) {
		$("main").css('padding-top', headerHeight + 'px');
	} else {
		if (!CANHCAM_APP.ACTIVE_PADDING_MAIN) {
			$("main").css('padding-top', '0px');
		} else {
			if (!CANHCAM_APP.ACTIVE_FIXED_HEADER) {
				$("main").css('padding-top', 'initial');
			} else {
				$("main").css('padding-top', headerHeight + 'px');
			}
		}
	}
}

$(document).ready(function () {
	setMain();
});

$(window).resize(function () {
	setMain();
});

function setHeaderTranparent(elm) {
	if (elm >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
		$("header").removeClass('has-tranparent');
	} else {
		$("header").addClass('has-tranparent');
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.HEADER_TRANPARENT) {
		$("header").addClass('has-tranparent');
		if ($(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION) {
			setHeaderTranparent($(window).scrollTop());
		}
	}
});

// Tranparent Header
$(window).scroll(function () {
	if (CANHCAM_APP.HEADER_TRANPARENT) {
		setHeaderTranparent($(document).scrollTop());
	}
});

function canhcamID(e) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < e; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}return text;
}

function b64EncodeUnicode(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
		return String.fromCharCode('0x' + p1);
	}));
}

function b64DecodeUnicode(str) {
	return decodeURIComponent(atob(str).split('').map(function (c) {
		return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(''));
}

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
function listToSelect() {
	$('[data-select]').each(function () {
		var list = $(this),
		    select = $(document.createElement('select')).insertBefore($(this).hide());
		select.addClass('custom-select').attr('data-select-show', '');
		$('>li a', this).each(function () {
			var option = $(document.createElement('option')).appendTo(select).val(this.href).html($(this).html());
		});
		list.hide().removeAttr('data-select').attr('data-select-changed', '');
		select.on('change', function () {
			var url = $(this).val();
			if (url) {
				window.location = url;
			}
			return false;
		});
	});
}

function selectChangeToList() {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		if ($(window).width() > CANHCAM_APP.CHANGE_GRID_SM) {
			$('[data-select-changed]').each(function () {
				$(this).show().removeAttr('data-select-changed').attr('data-select', '');
			});
			$('[data-select-show]').remove();
		} else {
			listToSelect();
		}
	}
}

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		if ($(window).width() <= CANHCAM_APP.CHANGE_GRID_SM) {
			listToSelect();
		}
	}
});

$(window).resize(function () {
	if (CANHCAM_APP.ACTIVE_LIST_TO_SELECT) {
		selectChangeToList();
	}
});

console.log('%cCANHCAM', 'font-size:100px;color:#ff451a;text-shadow:0 1px 0 #f73936,0 2px 0 #f73936 ,0 3px 0 #f73936 ,0 4px 0 #f73936 ,0 5px 0 #f73936 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
console.log('%c CANHCAM ' + '%c - The best Web Solutions Provider', 'border-radius: 2px; padding: 3px; background: #ff451a; color: #FFF', 'color: #ff451a');
console.warn("CANHCAM warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a CANHCAM feature or 'hack' someone's account, it is a scam and will give them access to your CANHCAM account.");
document.onkeyup = function (a) {
	if ((a = a || window.event).altKey && a.ctrlKey && a.shiftKey && 13 == a.which) return $("body"), alert(b64DecodeUnicode("QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv")), !1;
};

// Ripple
function ccCreateRipple() {
	$('[ripple]').on('click', function (e) {
		var rippleDiv = $('<div class="ripple" />'),
		    rippleOffset = $(this).offset(),
		    rippleY = e.pageY - rippleOffset.top,
		    rippleX = e.pageX - rippleOffset.left,
		    ripple = $('.ripple');

		rippleDiv.css({
			top: rippleY - ripple.height() / 2,
			left: rippleX - ripple.width() / 2,
			background: $(this).attr("ripple-color")
		}).appendTo($(this));
		window.setTimeout(function () {
			rippleDiv.remove();
		}, 1500);
	});
}

$(document).ready(function () {
	ccCreateRipple();
});

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_SELECT) {
		$(".select2").select2({
			placeholder: "Chọn một"
		});

		$('.select2').on("select2:select", function (e) {
			var valSelect = $(e.currentTarget).val();
		});
		$('.select2').on("select2:unselect", function (e) {
			var valUnselect = $(e.currentTarget).val();
		});
	}
});

function selectResset(e) {
	$(e).val(null).trigger("change", 0);
}

function canhCamStickyComtent() {

	$('[data-fix]').each(function () {
		$(this).css({
			"z-index": '500'
		});
		if ($(this).attr('data-top') && $(this).attr('data-top').length) {
			$(this).css({
				"top": $(this).attr('data-top')
			});
		}
		if ($(this).attr('data-left') && $(this).attr('data-left').length) {
			$(this).css({
				"left": $(this).attr('data-left')
			});
		}
		if ($(this).attr('data-bottom') && $(this).attr('data-bottom').length) {
			$(this).css({
				"bottom": $(this).attr('data-bottom')
			});
		}
		if ($(this).attr('data-right') && $(this).attr('data-right').length) {
			$(this).css({
				"right": $(this).attr('data-right')
			});
		}

		var toFix = 0;
		var typeFix = 'fixed';
		var changeFix = 'static';

		if ($(this).attr('data-fix') && $(this).attr('data-fix').length) {
			toFix = parseInt($(this).attr('data-fix'));
		}
		if ($(this).attr('data-fix-type') && $(this).attr('data-fix-type').length) {
			typeFix = $(this).attr('data-fix-type');
		}
		if ($(this).attr('data-fix-change') && $(this).attr('data-fix-change').length) {
			changeFix = $(this).attr('data-fix-change');
		}

		$(this).css({
			"position": typeFix
		});

		var scrollTop = $(window).scrollTop();
		var elementOffset = $(this).offset().top;
		var currentElementOffset = elementOffset - scrollTop;
		if (currentElementOffset <= toFix) {
			$(this).css({
				"position": changeFix,
				"top": toFix + 'px'
			});
		}
	});
}

$(document).ready(function () {
	canhCamStickyComtent();
});

$(window).scroll(function () {
	canhCamStickyComtent();
});

$(window).resize(function () {
	canhCamStickyComtent();
});

$(document).ready(function () {
	if (CANHCAM_APP.ACTIVE_VALIDATOR) {
		$('[data-toggle="validator"]').validator({
			feedback: {
				success: 'fa fa-check',
				error: 'fa fa-close'
			}
		}).on('submit', function (e) {
			if (e.isDefaultPrevented()) {
				$('[data-toggle="validator"]').find('select').parent('.form-group').addClass('has-danger');
			}
		});
		if ($('[data-toggle="validator"]').find('select').hasClass('has-success')) {
			this.removeClass('has-danger');
		}
	}
});

function CCHeader4() {
	$('.canhcam-header-4 .navbar-toggler').on("click", function () {
		$('.canhcam-header-4').toggleClass('expand');
	});
	// $('.canhcam-header-4 .btnsearch').on("click", function () {
	// 	$('.canhcam-header-4 .search').toggleClass('active')
	// 	$(this).toggleClass('active')
	// });
	$('.canhcam-header-4 .closebnt').on("click", function () {
		$('.canhcam-header-4 .search').toggleClass('active');
		$('.canhcam-header-4 .btnsearch').toggleClass('active');
	});
};

$(function () {
	CCHeader4();
});

// $(window).resize(function() {
// 	$('.canhcam-header-4').removeClass('expand')
// 	$('.canhcam-header-4 .search').removeClass('active')
// 	$('.canhcam-header-4 .btnsearch').removeClass('active')
// })

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-selecttam");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		/*for each option in the original select element,
  create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
   and the selected item:*/
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
  and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
 except the current select box:*/
	var x,
	    y,
	    i,
	    arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

AOS.init();
$(document).ready(function () {});

$(window).resize(function () {});

$(function () {
	$("#datepicker").datepicker();
});

$(document).ready(function () {
	$('.canhcam-testimonials-1 .owl-carousel').owlCarousel({
		items: 2,
		loop: true,
		center: false,
		padding: 10,
		margin: 20,
		navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
		nav: true,
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		callbacks: true,
		responsive: {
			// breakpoint from 0 up
			480: {
				items: 2
			},
			// breakpoint from 480 up
			768: {
				items: 3
			}
			// breakpoint from 768 up
		}
	});
});

$(window).resize(function () {});

$(function () {
	$('.canhcam-banner-1 .list-items').each(function () {
		$('.canhcam-banner-1 .list-items').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			infinite: false,
			dots: true,
			speed: 300,
			autoplay: false,
			autoplaySpeed: 2000,
			// centerMode: true,
			// variableWidth: true,
			responsive: [{
				breakpoint: 992,
				settings: {}
			}, {
				breakpoint: 480,
				settings: {}
			}]
		});
	});
});

function CCFooter3() {};

$(function () {
	CCFooter3();
});

$(window).resize(function () {});
//# sourceMappingURL=app.js.map
