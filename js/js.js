((a) => {
    "use strict";
    a("a.page-scroll")
        .bind("click", (e) => {
            let o = a(this);
            a("html, body")
                .stop()
                .animate(
                    { scrollTop: a(o.attr("href")).offset().top - 50 },
                    1250,
                    "easeInOutExpo"
                ), e.preventDefault()
        }),
        a("body").scrollspy({ target: ".navbar-fixed-top", offset: 51 }),
        a(".navbar-collapse ul li a:not(.dropdown-toggle)").click(() => {
            a(".navbar-toggle:visible").click()
        }),
        a("#mainNav").affix({ offset: { top: 100 } }),
        window.sr = ScrollReveal(),
        sr.reveal(".sr-icons", { duration: 600, scale: .3, distance: "0px" }, 200),
        sr.reveal(".sr-button", { duration: 1e3, delay: 200 }),
        sr.reveal(".sr-contact", { duration: 600, scale: .3, distance: "0px" }, 300),
        a(".popup-gallery").magnificPopup({
            delegate: "a",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-img-mobile",
            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
            image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.' }
        })
})(jQuery);

(($) => {
	"use strict"; // Start of use strict
	let downloadInProgress = false;

	$(() => {
		$(".dial").knob({
			'angleOffset': -130,
			'angleArc': 260,
		});
	});

	$('#downloadBtn').get(0).onclick = () => {

		if (!downloadInProgress) {
			downloadInProgress = true;

			let refreshIntervalId;

			let percent = 0;

			$('.kawaii').css("visibility", "visible");

			refreshIntervalId = setInterval(() => {
				percent += 1;

				$('.dial').val(percent).trigger('change');

				if (percent >= 0) {
					$('#funtxt').html("Initializing ...");
				}

				if (percent >= 25) {
					$('#funtxt').html("Connecting to the Brain Cell repository...");
				}

				if (percent >= 50) {
					$('#funtxt').html("Retrieving all the Brain Cells...");
				}

				if (percent >= 75) {
					$('#funtxt').html("Almost there...");
				}

				if (percent >= 100) {
					$('#funtxt').html("<b>Download Complete!</b></br> Click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>here</a> to get your new Brain Cells");
					$('.kawaii').css("visibility", "hidden");
					clearInterval(refreshIntervalId);
					downloadInProgress = false;
				}

			}, 60);
		}
	};

})(jQuery); // End of use strict
