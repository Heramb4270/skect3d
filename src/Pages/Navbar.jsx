import React from 'react'
import { useEffect } from 'react';

const Navbar = () =>
{
    useEffect(() => {
        // Script 1
        document.body.classList.remove("no-js");
    
        // Script 2
        if (-1 !== navigator.userAgent.indexOf('MSIE') || -1 !== navigator.appVersion.indexOf('Trident/')) {
          document.body.classList.add('is-IE');
        }
    
        // Script 3
        var script3 = document.createElement('script');
        script3.src = 'https://impactdesign.co.in/wp-content/plugins/contact-form-7/includes/swv/js/index.js?ver=5.7.7';
        script3.id = 'swv-js';
        document.body.appendChild(script3);
    
        // Script 4
        var script4 = document.createElement('script');
        script4.textContent = 'var wpcf7 = { "api": { "root": "https:\/\/impactdesign.co.in\/wp-json\/", "namespace": "contact-form-7\/v1" } };';
        script4.id = 'contact-form-7-js-extra';
        document.body.appendChild(script4);
    
        
        // Script 5
    var script5 = document.createElement('script');
    script5.src = 'https://impactdesign.co.in/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.7.7';
    script5.id = 'contact-form-7-js';
    document.body.appendChild(script5);

    // Script 6
    var script6 = document.createElement('script');
    script6.textContent = '(Element.prototype.matches && Element.prototype.closest && window.NodeList && NodeList.prototype.forEach) || document.write(\'<script src="https://impactdesign.co.in/wp-content/themes/impact3d/assets/js/polyfills.js?ver=1.8"></scr\' + \'ipt>\');';
    script6.id = 'twenty-twenty-one-ie11-polyfills-js-after';
    document.body.appendChild(script6);

    // Script 7
    var script7 = document.createElement('script');
    script7.src = 'https://impactdesign.co.in/wp-content/themes/impact3d/assets/js/primary-navigation.js?ver=1.8';
    script7.id = 'twenty-twenty-one-primary-navigation-script-js';
    document.body.appendChild(script7);

     // Script 8
     var script8 = document.createElement('script');
     script8.src = 'https://impactdesign.co.in/wp-content/themes/impact3d/assets/js/responsive-embeds.js?ver=1.8';
     script8.id = 'twenty-twenty-one-responsive-embeds-script-js';
     document.body.appendChild(script8);
 
     // Script 9
     var script9 = document.createElement('script');
     script9.src = 'https://code.jquery.com/jquery-3.7.0.js?ver=1.8';
     script9.id = 'twenty-twenty-jquery-js';
     document.body.appendChild(script9);
 
     // Script 10
     var script10 = document.createElement('script');
     script10.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js?ver=1.8';
     script10.id = 'twenty-twenty-bootstrap-js';
     document.body.appendChild(script10);


     // Script 11
    var script11 = document.createElement('script');
    script11.src = 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.js?ver=1.8';
    script11.id = 'twenty-twenty-fullPage-js';
    document.body.appendChild(script11);

    // Script 12
    var script12 = document.createElement('script');
    script12.src = 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js?ver=1.8';
    script12.id = 'twenty-twenty-magnific-js';
    document.body.appendChild(script12);

    // Script 13
    var script13 = document.createElement('script');
    script13.src = 'https://joekang.co/assets/cdn/jquery.vimeo.api.js?ver=1.8';
    script13.id = 'twenty-twenty-vimieo-js';
    document.body.appendChild(script13);

    // Script 14
    var script14 = document.createElement('script');
    script14.src = 'https://player.vimeo.com/api/player.js?ver=1.8';
    script14.id = 'twenty-twenty-player-js';
    document.body.appendChild(script14);

    // Script 15
    var script15 = document.createElement('script');
    script15.src = 'https://assets.codepen.io/16327/gsap-latest-beta.min.js?v=3.10.0k&#038;ver=1.8';
    script15.id = 'twenty-twenty-gsap-js';
    document.body.appendChild(script15);

    // Script 16
    var script16 = document.createElement('script');
    script16.src = 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js?ver=1.8';
    script16.id = 'twenty-twenty-aos-js';
    document.body.appendChild(script16);

    // Script 17
    var script17 = document.createElement('script');
    script17.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/9.4.1/swiper-bundle.min.js?ver=1.8';
    script17.id = 'twenty-twenty-swiper-js-js';
    document.body.appendChild(script17);

    // Script 18
    var script18 = document.createElement('script');
    script18.src = 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js?ver=1.8';
    script18.id = 'twenty-twenty-fancybox-script-js';
    document.body.appendChild(script18);

    // Script 19
    var script19 = document.createElement('script');
    script19.src = 'https://impactdesign.co.in/wp-content/themes/impact3d/assets/js/general.js?ver=1.8';
    script19.id = 'twenty-twenty-general-script-js';
    document.body.appendChild(script19);

    // Script 20
    var script20 = document.createElement('script');
    script20.textContent = `
      /(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", (function () { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }), !1);
    `;
    document.body.appendChild(script20);

    return () => 
    {
      // Clean up the dynamically added scripts
      document.body.classList.remove("no-js");
      document.body.classList.remove("is-IE");
      document.body.removeChild(script3);
      document.body.removeChild(script4);
      document.body.removeChild(script5);
      document.body.removeChild(script6);
      document.body.removeChild(script7);
      document.body.removeChild(script8);
      document.body.removeChild(script9);
      document.body.removeChild(script10);
      document.body.removeChild(script11);
      document.body.removeChild(script12);
      document.body.removeChild(script13);
      document.body.removeChild(script14);
      document.body.removeChild(script15);
      document.body.removeChild(script16);
      document.body.removeChild(script17);
      document.body.removeChild(script18);
      document.body.removeChild(script19);
      document.body.removeChild(script20);
     
    };
  }, []);
    
     
  return (
    <div className='bg-white background-dark'>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Sketchers 3d</title>
            <meta name='robots' content='max-image-preview:large' />
            <link rel='dns-prefetch' href='//code.jquery.com' />
            <link rel='dns-prefetch' href='//cdn.jsdelivr.net' />
            <link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
            <link rel='dns-prefetch' href='//joekang.co' />
            <link rel='dns-prefetch' href='//player.vimeo.com' />
            <link rel='dns-prefetch' href='//assets.codepen.io' />
            <link rel='dns-prefetch' href='//unpkg.com' />
            <link rel="alternate" type="application/rss+xml" title="Sketchers 3d &raquo; Feed"
                href="https://impactdesign.co.in/feed/" />
            <link rel="alternate" type="application/rss+xml" title="Sketchers 3d &raquo; Comments Feed"
                href="https://impactdesign.co.in/comments/feed/" />
            <script>
                {`window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/impactdesign.co.in\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.3" } };
               
                !function (i, n) { var o, s, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", { willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", {}); return e.forEach(function (e) { o[e] = t(a, e, n) }), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { i.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], { type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), { name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) { c(n = e.data), a.terminate(), t(n) }) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);
                `}
            </script>
            <style>
       { 
       `img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 0.07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }`
        }
    </style>
    <link rel='stylesheet' id='wp-block-library-css'
        href='https://impactdesign.co.in/wp-includes/css/dist/block-library/style.min.css?ver=6.3' media='all' />
    <style id='wp-block-library-theme-inline-css'>
        {`.wp-block-audio figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-audio figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-audio {
            margin: 0 0 1em
        }

        .wp-block-code {
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: Menlo, Consolas, monaco, monospace;
            padding: .8em 1em
        }

        .wp-block-embed figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-embed figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-embed {
            margin: 0 0 1em
        }

        .blocks-gallery-caption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .blocks-gallery-caption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-image figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-image figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-image {
            margin: 0 0 1em
        }

        .wp-block-pullquote {
            border-bottom: 4px solid;
            border-top: 4px solid;
            color: currentColor;
            margin-bottom: 1.75em
        }

        .wp-block-pullquote cite,
        .wp-block-pullquote footer,
        .wp-block-pullquote__citation {
            color: currentColor;
            font-size: .8125em;
            font-style: normal;
            text-transform: uppercase
        }

        .wp-block-quote {
            border-left: .25em solid;
            margin: 0 0 1.75em;
            padding-left: 1em
        }

        .wp-block-quote cite,
        .wp-block-quote footer {
            color: currentColor;
            font-size: .8125em;
            font-style: normal;
            position: relative
        }

        .wp-block-quote.has-text-align-right {
            border-left: none;
            border-right: .25em solid;
            padding-left: 0;
            padding-right: 1em
        }

        .wp-block-quote.has-text-align-center {
            border: none;
            padding-left: 0
        }

        .wp-block-quote.is-large,
        .wp-block-quote.is-style-large,
        .wp-block-quote.is-style-plain {
            border: none
        }

        .wp-block-search .wp-block-search__label {
            font-weight: 700
        }

        .wp-block-search__button {
            border: 1px solid #ccc;
            padding: .375em .625em
        }

        :where(.wp-block-group.has-background) {
            padding: 1.25em 2.375em
        }

        .wp-block-separator.has-css-opacity {
            opacity: .4
        }

        .wp-block-separator {
            border: none;
            border-bottom: 2px solid;
            margin-left: auto;
            margin-right: auto
        }

        .wp-block-separator.has-alpha-channel-opacity {
            opacity: 1
        }

        .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
            width: 100px
        }

        .wp-block-separator.has-background:not(.is-style-dots) {
            border-bottom: none;
            height: 1px
        }

        .wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
            height: 2px
        }

        .wp-block-table {
            margin: 0 0 1em
        }

        .wp-block-table td,
        .wp-block-table th {
            word-break: normal
        }

        .wp-block-table figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-table figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-video figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-video figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-video {
            margin: 0 0 1em
        }

        .wp-block-template-part.has-background {
            margin-bottom: 0;
            margin-top: 0;
            padding: 1.25em 2.375em
        }
`}    
</style>


    <style id='classic-theme-styles-inline-css'>
       { `/*! This file is auto-generated */
        .wp-block-button__link {
            color: #fff;
            background-color:white;
            border-radius: 9999px;
            box-shadow: none;
            text-decoration: none;
            padding: calc(.667em + 2px) calc(1.333em + 2px);
            font-size: 1.125em
        }

        .wp-block-file__button {
            background: #32373c;
            color: #fff;
            text-decoration: none
        }`}
    </style>
    <style id='global-styles-inline-css'>
        {`.Navbar {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #FFFFFF;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--color--dark-gray: #28303D;
            --wp--preset--color--gray: #39414D;
            --wp--preset--color--green: #D1E4DD;
            --wp--preset--color--blue: #D1DFE4;
            --wp--preset--color--purple: #D1D1E4;
            --wp--preset--color--red: #E4D1D1;
            --wp--preset--color--orange: #E4DAD1;
            --wp--preset--color--yellow: #EEEADD;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--gradient--purple-to-yellow: linear-gradient(160deg, #D1D1E4 0%, #EEEADD 100%);
            --wp--preset--gradient--yellow-to-purple: linear-gradient(160deg, #EEEADD 0%, #D1D1E4 100%);
            --wp--preset--gradient--green-to-yellow: linear-gradient(160deg, #D1E4DD 0%, #EEEADD 100%);
            --wp--preset--gradient--yellow-to-green: linear-gradient(160deg, #EEEADD 0%, #D1E4DD 100%);
            --wp--preset--gradient--red-to-yellow: linear-gradient(160deg, #E4D1D1 0%, #EEEADD 100%);
            --wp--preset--gradient--yellow-to-red: linear-gradient(160deg, #EEEADD 0%, #E4D1D1 100%);
            --wp--preset--gradient--purple-to-red: linear-gradient(160deg, #D1D1E4 0%, #E4D1D1 100%);
            --wp--preset--gradient--red-to-purple: linear-gradient(160deg, #E4D1D1 0%, #D1D1E4 100%);
            --wp--preset--font-size--small: 18px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 24px;
            --wp--preset--font-size--x-large: 42px;
            --wp--preset--font-size--extra-small: 16px;
            --wp--preset--font-size--normal: 20px;
            --wp--preset--font-size--extra-large: 40px;
            --wp--preset--font-size--huge: 96px;
            --wp--preset--font-size--gigantic: 144px;
            --wp--preset--spacing--20: 0.44rem;
            --wp--preset--spacing--30: 0.67rem;
            --wp--preset--spacing--40: 1rem;
            --wp--preset--spacing--50: 1.5rem;
            --wp--preset--spacing--60: 2.25rem;
            --wp--preset--spacing--70: 3.38rem;
            --wp--preset--spacing--80: 5.06rem;
            --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
            --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
            --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);
            --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
        }

        :where(.is-layout-flex) {
            gap: 0.5em;
        }

        :where(.is-layout-grid) {
            gap: 0.5em;
        }

        .Navbar .is-layout-flow>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        .Navbar .is-layout-flow>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        .Navbar .is-layout-flow>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .Navbar .is-layout-constrained>.alignleft {
            float: left;
            margin-inline-start: 0;
            margin-inline-end: 2em;
        }

        .Navbar .is-layout-constrained>.alignright {
            float: right;
            margin-inline-start: 2em;
            margin-inline-end: 0;
        }

        .Navbar .is-layout-constrained>.aligncenter {
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .Navbar .is-layout-constrained> :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
            max-width: var(--wp--style--global--content-size);
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .Navbar .is-layout-constrained>.alignwide {
            max-width: var(--wp--style--global--wide-size);
        }

        .Navbar .is-layout-flex {
            display: flex;
        }

        .Navbar .is-layout-flex {
            flex-wrap: wrap;
            align-items: center;
        }

        .Navbar .is-layout-flex>* {
            margin: 0;
        }

        .Navbar .is-layout-grid {
            display: grid;
        }

        Navbar .is-layout-grid>* {
            margin: 0;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }

        .wp-block-navigation a:where(:not(.wp-element-button)) {
            color: inherit;
        }

        :where(.wp-block-post-template.is-layout-flex) {
            gap: 1.25em;
        }

        :where(.wp-block-post-template.is-layout-grid) {
            gap: 1.25em;
        }

        :where(.wp-block-columns.is-layout-flex) {
            gap: 2em;
        }

        :where(.wp-block-columns.is-layout-grid) {
            gap: 2em;
        }

        .wp-block-pullquote {
            font-size: 1.5em;
            line-height: 1.6;
        }`}


    </style>
    <link rel='stylesheet' id='contact-form-7-css'
        href='https://impactdesign.co.in/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.7.7'
        media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-bootstrap-css'
        href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-fancybox-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-fullpage-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.4/jquery.fullPage.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-magnific-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-font-awesome-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-swiper-css'
        href='https://unpkg.com/swiper@7/swiper-bundle.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-animation-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css?ver=1.8' media='all' />
    <link rel='stylesheet' id='twenty-twenty-one-aos-css'
        href='https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css?ver=1.8' media='all' /> 
    {/* <link rel='stylesheet' id='twenty-twenty-one-style-css'
        href='https://impactdesign.co.in/wp-content/themes/impact3d/style.css?ver=1.8' media='all' /> */}
    {/* <link rel='stylesheet' id='twenty-twenty-one-custom-css'
        href='https://impactdesign.co.in/wp-content/themes/impact3d/assets/css/custom.css?ver=1.8' media='all' /> */}
    <link rel="https://api.w.org/" href="https://impactdesign.co.in/wp-json/" />
    <link rel="alternate" type="application/json" href="https://impactdesign.co.in/wp-json/wp/v2/pages/6" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://impactdesign.co.in/xmlrpc.php?rsd" />
    <meta name="generator" content="WordPress 6.3" />
    <link rel="canonical" href="https://impactdesign.co.in/" />
    <link rel='shortlink' href='https://impactdesign.co.in/' />
    <link rel="alternate" type="application/json+oembed"
        href="https://impactdesign.co.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fimpactdesign.co.in%2F" />
    <link rel="alternate" type="text/xml+oembed"
        href="https://impactdesign.co.in/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fimpactdesign.co.in%2F&#038;format=xml" />
    <link rel="icon" href="https://impactdesign.co.in/wp-content/uploads/2023/10/cropped-impact-Web-Title-32x32.png"
        sizes="32x32" />
    <link rel="icon" href="https://impactdesign.co.in/wp-content/uploads/2023/10/cropped-impact-Web-Title-192x192.png"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="https://impactdesign.co.in/wp-content/uploads/2023/10/cropped-impact-Web-Title-180x180.png" />
    <meta name="msapplication-TileImage"
        content="https://impactdesign.co.in/wp-content/uploads/2023/10/cropped-impact-Web-Title-270x270.png" />
    <style id="wp-custom-css">
        {`
        .fancybox-navigation .fancybox-button svg {
            display: none !important;
        }

        .fancybox-button {
            width: 80px;
            height: 80px;
        }

        button.fancybox-button.fancybox-button--close {
            background: transparent !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
            color: #000;
        }

        .swiper-hero .swiper-button-prev:hover,
        .swiper-hero .swiper-button-next:hover {
            background-color: transparent;
        }
`}    
</style>


    {/* navbar body */}
    <div id="page" className="site">
        <header>

            <div className="headerEight">
                <div className="con"></div>
                <div className="container">
                    <div className="logoDiv">
                        <a href="https://impactdesign.co.in/"><span className="custom-logo-link"><img width="282"
                                    height="43"
                                    src="data:image/jpeg;base64,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"
                            
                                    className="custom-logo" alt="" decoding="async" /></span></a>
                    </div>
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* <img src="https://impactdesign.co.in/wp-content/themes/impact3d/assets/images/i-white.png"
                            alt="Menu"/> */}
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIgAqAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAaEAEBAAIDAAAAAAAAAAAAAAAAAXHwESGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDEE9XHSKoAqG8ACgAgAAZBFAFQAFABAAAURUBAUEoiiAAAAAAAAAKCAoigCKKAKCAiAAAAAAAAAAAAAAAACoAogAAAAAAAAAIAoggoQAAigAAAAAACIKFQAAAABUAAAUQBRAFCAAAACgCIKgAAAAAAAAAAAAAKgCgKAAAggAAAAAAAAAAAAAAAAAAAAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgA//2Q=="
                            alt="Menu"/>

                    </div>
                </div>

                <nav className="navbarNew">


                    <div className="primary-menu-container">
                        <ul className="nav-links">
                            <li id="menu-item-299"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-299"><a
                                    href="https://impactdesign.co.in/projects">Projects</a></li>
                            <li id="menu-item-576"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-576"><a
                                    href="https://impactdesign.co.in/animations-films/">Animations Films</a></li>
                            <li id="menu-item-1312"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1312"><a
                                    href="https://impactdesign.co.in/360-vr/">360 VR</a></li>
                            {/* <li id="menu-item-97"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"><a
                                    href="https://impactdesign.co.in/clients/">clients</a></li> */}
                            <li id="menu-item-18"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18"><a
                                    href="https://impactdesign.co.in/about/">About Us</a></li>
                            <li id="menu-item-582"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-582"><a
                                    href="https://impactdesign.co.in/blog/">Blog</a></li>
                            <li id="menu-item-20"
                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a
                                    href="https://impactdesign.co.in/contact/">Contact</a></li>
                        </ul>
                    </div>
                    {/* <!--<ul className="nav-links">
          <li className="nav-link"><a href="projects.php">PROJECTS</a></li>
          <li className="nav-link"><a href="#">360 VR</a></li>
          <li className="nav-link"><a href="#">Animations/Films</a></li>
          <li className="nav-link"><a href="clients.php">Clients</a></li>
          <li className="nav-link"><a href="#">Services</a></li>
          <li className="nav-link"><a href="about-us.php">About Us</a></li>
          <li className="nav-link"><a href="#">Contact Us</a></li>
      </ul>--> */}
                    <div className="socailsCopy">
                        <div className="socails">
                        </div>
                    </div>



                </nav>

            </div>

        </header>

    </div>
    </div>
  )
}

export default Navbar
