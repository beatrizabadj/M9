document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
	const audio = document.querySelector('.audio-player audio'); 
	const playButton = document.querySelector('.player-button svg'); 
	const playerButton = document.querySelector('.player-button'); 
	const timeline = document.querySelector('.timeline'); 
	const soundButton = document.querySelector('.sound-button'); 
	const audioSlides = document.querySelectorAll('.audio-slide');
  
	// reproducción y pausa
	function togglePlayPause() {
	  if (audio.paused) {
		audio.play();
		playButton.setAttribute('d', 'M6 6h12M6 12h12'); 
	  } else {
		audio.pause();
		playButton.setAttribute('d', 'M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'); // Cambia el icono a play
	  }
	}
  
	// barra de progreso
	function updateTimeline() {
	  const value = (audio.currentTime / audio.duration) * 100;
	  timeline.value = value;
	}
  
	// posicion audio con la barra de progreso
	timeline.addEventListener('input', function() {
	  const value = timeline.value;
	  audio.currentTime = (value / 100) * audio.duration;
	});
  
	// play/pause
	playerButton.addEventListener('click', togglePlayPause);
  
	audio.addEventListener('timeupdate', updateTimeline);
  
	// mute de sonido
	soundButton.addEventListener('click', function() {
	  audio.muted = !audio.muted;
	  if (audio.muted) {
		soundButton.setAttribute('d', 'M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217z'); // Icono de sonido apagado
	  } else {
		soundButton.setAttribute('d', 'M14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z'); // Icono de sonido activado
	  }
	});
  
	audioSlides.forEach(slide => {
	  slide.addEventListener('dragstart', function(event) {
		event.preventDefault(); 
		const audioSrc = slide.getAttribute('data-audio-src');
		audio.src = audioSrc;
		audio.play();
		togglePlayPause(); 
	  });
	});
	
	function changeBackground(color1, color2){
		document.body.style.background=`linear-gradient(to right, ${color1}, ${color2})`;
	}
	const video = document.querySelector(".video-container video");
  	const videoContainer = document.querySelector(".video-container");
  	const thumbnail = document.querySelector(".video-thumbnail");
  	const modal = document.getElementById("popcornModal");

	  if (video && videoContainer && thumbnail && modal) {
		// click en el thumbnail
		thumbnail.addEventListener("click", function () {
			modal.classList.add("show");	
			setTimeout(() => {
				modal.classList.remove("show");
				thumbnail.style.display = "none";
				videoContainer.classList.add("cinema-mode");
				}, 2000);    	

			changeBackground('#700e20', '#3b022a');
			video.style.opacity = "1";
		
			video.play();
  	});

		document.addEventListener("click", function (event) {
			if (!videoContainer.contains(event.target) && !modal.contains(event.target)) {
			videoContainer.classList.remove("cinema-mode");
			video.pause();
			thumbnail.style.display = "block"; 
			video.style.opacity = "0";
			}
		});
		}else{
			console.error("One or more required elements are missing in the DOM");

		}
		if (video && videoContainer){
			window.addEventListener("scroll", function() {
				var videoTop = video.getBoundingClientRect().top;
				var windowHeight = this.window.innerHeight;
				if(videoTop  < windowHeight - 100){
					video.style.animation="fadeIn 5s forwards";
					video.style.opacity = 1;
				}
			})
		}else{
			console.error("El video o el contenedor del video no se encontró en el DOM.");
		}

		// simulacion form
		const form = document.getElementById("form");
		const firstName = document.getElementById("firstName");
		const lastName = document.getElementById("lastName");
		const email = document.getElementById("email");
		const thoughts = document.getElementById("thoughts");

		form.addEventListener("submit", function(event) {
			event.preventDefault();

		const firstNameValue = firstName.value;
		const lastNameValue = lastName.value;
		const emailValue = email.value;
		const thoughtsValue = thoughts.value;

		//alerta
		Swal.fire({
		title: 'Thank You for Sharing!',
		text: `Hello ${firstNameValue} ${lastNameValue},\nWe have received your thoughts:\n"${thoughtsValue}"\nYour email is: ${emailValue}`,
		icon: 'success',
		confirmButtonText: 'Close'
		});
		form.reset();
	});
});



var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

$(document).ready(function() {
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var el = $(this).attr('href');
    scrollToElement(el);
  });
  
  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $("#navbar").fadeIn(300);
    } else {
      $("#navbar").fadeOut(300);
    }

  });





(function () {
   'use strict';
	
	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';

		// TYPING EFFECT
		
		Typed.new('#typed', {
			loop: true,
			typeSpeed: 5,
			backSpeed: 3,
			startDelay: 1000,
			backDelay: 1200,

        });
	}; // all loaded
	
	  
}());





/*
	PLUGINS
*/



! function(t, s, e) {
	"use strict";
	var i = function(t, s) {
		var i = this;
		this.el = t, this.options = {}, Object.keys(r).forEach(function(t) {
			i.options[t] = r[t]
		}), Object.keys(s).forEach(function(t) {
			i.options[t] = s[t]
		}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, e && this.options.stringsElement instanceof e ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	};
	i.prototype = {
		constructor: i,
		init: function() {
			var t = this;
			t.timeout = setTimeout(function() {
				for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
				t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
			}, t.startDelay)
		},
		build: function() {
			var t = this;
			if (this.showCursor === !0 && (this.cursor = s.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
				this.strings = [], this.stringsElement.style.display = "none";
				var e = Array.prototype.slice.apply(this.stringsElement.children);
				e.forEach(function(s) {
					t.strings.push(s.innerHTML)
				})
			}
			this.init()
		},
		typewrite: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.typeSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					var e = 0,
						r = t.substr(s);
					if ("^" === r.charAt(0)) {
						var o = 1;
						/^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
					}
					if ("html" === i.contentType) {
						var n = t.substr(s).charAt(0);
						if ("<" === n || "&" === n) {
							var a = "",
								h = "";
							for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
							s++, a += h
						}
					}
					i.timeout = setTimeout(function() {
						if (s === t.length) {
							if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
							i.timeout = setTimeout(function() {
								i.backspace(t, s)
							}, i.backDelay)
						} else {
							0 === s && i.options.preStringTyped(i.arrayPos);
							var e = t.substr(0, s + 1);
							i.attr ? i.el.setAttribute(i.attr, e) : i.isInput ? i.el.value = e : "html" === i.contentType ? i.el.innerHTML = e : i.el.textContent = e, s++, i.typewrite(t, s)
						}
					}, e)
				}, e)
			}
		},
		backspace: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.backSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
						for (var e = "";
							"<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(s < 0)););
						s--, e += "<"
					}
					var r = t.substr(0, s);
					i.attr ? i.el.setAttribute(i.attr, r) : i.isInput ? i.el.value = r : "html" === i.contentType ? i.el.innerHTML = r : i.el.textContent = r, s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
				}, e)
			}
		},
		shuffleArray: function(t) {
			var s, e, i = t.length;
			if (i)
				for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
			return t
		},
		reset: function() {
			var t = this;
			clearInterval(t.timeout);
			this.el.getAttribute("id");
			this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
		}
	}, i["new"] = function(t, e) {
		var r = Array.prototype.slice.apply(s.querySelectorAll(t));
		r.forEach(function(t) {
			var s = t._typed,
				r = "object" == typeof e && e;
			s && s.reset(), t._typed = s = new i(t, r), "string" == typeof e && s[e]()
		})
	}, e && (e.fn.typed = function(t) {
		return this.each(function() {
			var s = e(this),
				r = s.data("typed"),
				o = "object" == typeof t && t;
			r && r.reset(), s.data("typed", r = new i(this, o)), "string" == typeof t && r[t]()
		})
	}), t.Typed = i;
	var r = {
		strings: ["These are the default values", "Try them", "Use your own!", ".."],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	}
}(window, document, window.jQuery);

});