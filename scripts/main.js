! function (e) {
  "use strict";
  e.fn.lightbox = function (t) {
    var n = {
      margin: 50,
      nav: !0,
      blur: !0,
      minSize: 0
    },
      i = {
        items: [],
        lightbox: null,
        image: null,
        current: null,
        locked: !1,
        caption: null,
        init: function (t) {
          i.items = t;
          var o = "lightbox-" + Math.floor(1e5 * Math.random() + 1);
          e("body").append('<div id="' + o + '" class="lightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"></div></div>'), i.lightbox = e("#" + o), i.caption = e(".lightbox__caption", i.lightbox), i.items.length > 1 && n.nav ? e(".lightbox__nav", i.lightbox).show() : e(".lightbox__nav", i.lightbox).hide(), i.bindEvents()
        },
        loadImage: function () {
          n.blur && e("body").addClass("blurred"), e("img", i.lightbox).remove(), i.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>');
          var t = e('<img src="' + e(i.current).attr("href") + '" draggable="false">');
          e(t).on("load", function () {
            e(".lightbox__loading").remove(), i.lightbox.append(t), i.image = e("img", i.lightbox).hide(), i.resizeImage(), i.setCaption()
          })
        },
        setCaption: function () {
          var t = e(i.current).data("caption");
          t && t.length > 0 ? (i.caption.fadeIn(), e(i.caption).html(t)) : i.caption.hide()
        },
        resizeImage: function () {
          var t, o, l, a, r;
          o = e(window).height() - n.margin, l = e(window).outerWidth(!0) - n.margin, i.image.width("").height(""), a = i.image.height(), r = i.image.width(), r > l && (t = l / r, r = l, a = Math.round(a * t)), a > o && (t = o / a, a = o, r = Math.round(r * t)), i.image.width(r).height(a).css({
            top: (e(window).height() - i.image.outerHeight()) / 2.5 + "px",
            left: (e(window).width() - i.image.outerWidth()) / 2 + "px"
          }).show(), i.caption.css({
            "padding-bottom": (e(window).height() - i.image.outerHeight()) / 2.5 + "px"
          }), i.locked = !1
        },
        getCurrentIndex: function () {
          return e.inArray(i.current, i.items)
        },
        next: function () {
          if (i.locked) return !1;
          i.locked = !0, i.getCurrentIndex() >= i.items.length - 1 ? e(i.items[0]).click() : e(i.items[i.getCurrentIndex() + 1]).click()
        },
        previous: function () {
          if (i.locked) return !1;
          i.locked = !0, i.getCurrentIndex() <= 0 ? e(i.items[i.items.length - 1]).click() : e(i.items[i.getCurrentIndex() - 1]).click()
        },
        bindEvents: function () {
          e(i.items).click(function (t) {
            if (!i.lightbox.is(":visible") && (e(window).width() < n.minSize || e(window).height() < n.minSize)) return void e(this).attr("target", "_blank");
            var o = e(this)[0];
            t.preventDefault(), i.current = o, i.loadImage(), e(document).on("keydown", function (e) {
              27 === e.keyCode && i.close(), 39 === e.keyCode && i.next(), 37 === e.keyCode && i.previous()
            })
          }), i.lightbox.on("click", function (e) {
            this === e.target && i.close()
          }), e(i.lightbox).on("click", ".lightbox__nav--prev", function () {
            return i.previous(), !1
          }), e(i.lightbox).on("click", ".lightbox__nav--next", function () {
            return i.next(), !1
          }), e(i.lightbox).on("click", ".lightbox__close", function () {
            return i.close(), !1
          }), e(window).resize(function () {
            i.image && i.resizeImage()
          })
        },
        close: function () {
          e(document).off("keydown"), e(i.lightbox).fadeOut("fast"), e("body").removeClass("blurred")
        }
      };
    e.extend(n, t), i.init(this)
  }
}(jQuery),
  function () {
    $(document).ready(function () {
      var e, t, n, i, o, l, a, r;
      $('[rel="lightbox"]').lightbox(), $("html, body").animate({
        scrollTop: 0
      }, 0), r = function (e) {
        e && "#" !== e && $(e).length > 0 && ("#beneficios" !== e && "#premios-especiales" !== e || ($('#welcome a[href="' + e + '"]').tab("show"), e = "#welcome"), $("html, body").animate({
          scrollTop: $(e).offset().top
        }, 1e3))
      }, r(location.hash), $(".navbar-collapse a").on("click", function () {
        return $(".navbar-collapse").collapse("hide")
      }), $(".navbar-default .navbar-nav > li > a").on("click", function (e) {
        var t;
        t = $(this).attr("href"), t = t.replace("./", ""), r(t)
      }), null !== (l = document.getElementById("timer")) && (o = 1e3, i = 60 * o, n = 60 * i, t = 24 * n, e = new Date("Nov 21, 2019 00:00:00").getTime(), a = setInterval(function () {
        var l, r, c, h, g, d;
        g = (new Date).getTime(), r = e - g, l = document.getElementById("days"), c = document.getElementById("hours"), h = document.getElementById("minutes"), d = document.getElementById("seconds"), l.innerText = Math.floor(r / t), c.innerText = Math.floor(r % t / n), h.innerText = Math.floor(r % n / i), d.innerText = Math.floor(r % i / o), r < 0 && (clearInterval(a), l.innerText = "00", c.innerText = "00", h.innerText = "00", d.innerText = "00")
      }, o))
    })
  }.call(this);
  
// Timer de index.html acá arriba 

// Ir a una pagina diferente y hacer scroll
$(document).ready(function () {
  $('html, body').hide();
  if (window.location.hash) {
    setTimeout(function () {
      $('html, body').scrollTop(0).show();
      $('html, body').animate({
        scrollTop: $(window.location.hash).offset().top - 40
      }, 1000)
    }, 0);
  }
  else {
    $('html, body').show();
  }



  // Boton fixed al scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".btn-inscripcion-header").addClass("fixed-btn-inscripcion-header");
    } else if ($(this).scrollTop() > 3300) {
      $(".btn-inscripcion-header").removeClass("fixed-btn-inscripcion-header");
    } else {
      $(".btn-inscripcion-header").removeClass("fixed-btn-inscripcion-header");
    }
  });


  
});