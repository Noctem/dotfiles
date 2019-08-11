/* START: internal custom pref to test for syntax errors (thanks earthling)
 * [NOTE] In FF60+, not all syntax errors cause parsing to abort i.e. reaching the last debug
 * pref no longer necessarily means that all prefs have been applied. Check the console right
 * after startup for any warnings/error messages related to non-applied prefs
 * [1] https://blog.mozilla.org/nnethercote/2018/03/09/a-new-preferences-parser-for-firefox/ ***/
user_pref("_user.js.parrot", "alpha");

/* 0000: disable about:config warning ***/
user_pref("general.warnOnAboutConfig", false);

/*** 0200: GEOLOCATION ***/
   // user_pref("geo.enabled", false);
/* 0201b: set a default permission for Location (FF58+)
 * [SETTING] to add site exceptions: Page Info>Permissions>Access Your Location
 * [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Location>Settings ***/
user_pref("permissions.default.geo", 0); // 0=always ask (default), 1=allow, 2=block
/* 0202: disable GeoIP-based search results
 * [NOTE] May not be hidden if Firefox has changed your settings due to your locale
 * [1] https://trac.torproject.org/projects/tor/ticket/16254
 * [2] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine ***/
user_pref("browser.search.countryCode", "US"); // (hidden pref)
user_pref("browser.search.region", "US"); // (hidden pref)
/* 0205: set OS & APP locale (FF59+)
 * If set to empty, the OS locales are used. If not set at all, default locale is used ***/
user_pref("intl.locale.requested", "en-US"); // (hidden pref)
/* 0207: set language to match ***/
user_pref("intl.accept_languages", "en-US, en");
/* 0208: enforce US English locale regardless of the system locale
 * [1] https://bugzilla.mozilla.org/867501 ***/
user_pref("javascript.use_us_english_locale", true); // (hidden pref)
/* 0210: use Mozilla geolocation service instead of Google when geolocation is enabled
 * Optionally enable logging to the console (defaults to false) ***/
user_pref("geo.wifi.uri", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
/*** 2200: WINDOW MEDDLING & LEAKS / POPUPS ***/
/* 2201: prevent websites from disabling new window features
 * [1] http://kb.mozillazine.org/Prevent_websites_from_disabling_new_window_features ***/
user_pref("dom.disable_window_open_feature.location", true); // default: true
user_pref("dom.disable_window_open_feature.resizable", true); // default: true
user_pref("dom.disable_window_open_feature.status", true); // status bar - default: true
user_pref("dom.disable_window_open_feature.toolbar", true);
/* 2202: prevent scripts moving and resizing open windows ***/
user_pref("dom.disable_window_move_resize", true);
/* 2706: enable support for same-site cookies (FF60+)
 * [1] https://bugzilla.mozilla.org/795346
 * [2] https://blog.mozilla.org/security/2018/04/24/same-site-cookies-in-firefox-60/
 * [3] https://www.sjoerdlangkemper.nl/2016/04/14/preventing-csrf-with-samesite-cookie-attribute/ ***/
user_pref("network.cookie.same-site.enabled", true); // default: true

/*** 0300: QUIET FOX ***/
/* 0301a: disable auto-update checks for Firefox
 * [NOTE] Firefox currently checks every 12 hrs and allows 8 day notification dismissal
 * [SETTING] General>Firefox Updates>Never check for updates ***/
user_pref("app.update.enabled", false);
/* 0301b: disable auto-update checks for extensions
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) ***/
user_pref("extensions.update.enabled", true);
/* 0302a: disable auto update installing for Firefox (after the check in 0301a)
 * [SETTING] General>Firefox Updates>Check for updates but let you choose...
 * [SETTING-ESR52] Advanced>Update>Check for updates but let you choose...
 * [NOTE] The UI checkbox also controls the behavior for checking, the pref only controls auto installing ***/
user_pref("app.update.auto", false);
/* 0303: disable background update service [WINDOWS]
 * [SETTING] General>Firefox Updates>Use a background service to install updates ***/
user_pref("app.update.service.enabled", false);
/* 0304: disable background update staging ***/
user_pref("app.update.staging.enabled", false);
/* 0305: enforce update information is displayed
 * This is the update available, downloaded, error and success information ***/
user_pref("app.update.silent", false);
/* 0309: disable sending Flash crash reports ***/
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
/* 0310: disable sending the URL of the website where a plugin crashed ***/
user_pref("dom.ipc.plugins.reportCrashURL", false);
/* 0330: disable telemetry
 * the pref (.unified) affects the behaviour of the pref (.enabled)
 * IF unified=false then .enabled controls the telemetry module
 * IF unified=true then .enabled ONLY controls whether to record extended data
 * so make sure to have both set as false
 * [NOTE] FF58+ `toolkit.telemetry.enabled` is now LOCKED to reflect prerelease
 * or release builds (true and false respectively), see [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE] above FF58+
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // (FF55+)
user_pref("toolkit.telemetry.updatePing.enabled", false); // (FF56+)
user_pref("toolkit.telemetry.bhrPing.enabled", false); // (FF57+) Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // (FF57+)
user_pref("toolkit.telemetry.hybridContent.enabled", false); // (FF59+)
/* 0333: disable health report
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0334: disable new data submission, master kill switch (FF41+)
 * If disabled, no policy is shown or upload takes place, ever
 * [1] https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0350: disable crash reports ***/
user_pref("breakpad.reportURL", "");
/* 0351: disable sending of crash reports (FF44+)
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send crash reports ***/
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // (FF51+)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false); // (FF51-57)
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // (FF58+)
/* 0380: disable Browser Error Reporter (FF60+)
 * [1] https://support.mozilla.org/en-US/kb/firefox-nightly-error-collection
 * [2] https://firefox-source-docs.mozilla.org/browser/browser/BrowserErrorReporter.html ***/
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.submitUrl", "");

/*** 0400: BLOCKLISTS / SAFE BROWSING / TRACKING PROTECTION
     This section has security & tracking protection implications vs privacy concerns vs effectiveness
     vs 3rd party 'censorship'. We DO NOT advocate no protection. If you disable Tracking Protection (TP)
     and/or Safe Browsing (SB), then SECTION 0400 REQUIRES YOU HAVE uBLOCK ORIGIN INSTALLED.

     Safe Browsing is designed to protect users from malicious sites. Tracking Protection is designed
     to lessen the impact of third parties on websites to reduce tracking and to speed up your browsing.
     These do rely on 3rd parties (Google for SB and Disconnect for TP), but many steps, which are
     continually being improved, have been taken to preserve privacy. Disable at your own risk.
***/
/** BLOCKLISTS ***/
/* 0401: enable Firefox blocklist
 * [NOTE] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 * [2] https://trac.torproject.org/projects/tor/ticket/16931 ***/
user_pref("extensions.blocklist.enabled", true); // default: true
/* 0402: enable Kinto blocklist updates (FF50+)
 * What is Kinto?: https://wiki.mozilla.org/Firefox/Kinto#Specifications
 * As Firefox transitions to Kinto, the blocklists have been broken down into entries for certs to be
 * revoked, extensions and plugins to be disabled, and gfx environments that cause problems or crashes ***/
user_pref("services.blocklist.update_enabled", true);

/** TRACKING PROTECTION (TP)
    There are NO privacy concerns here, but we strongly recommend to use uBlock Origin as well,
    as it offers more comprehensive and specialized lists. It also allows per domain control. ***/
/* 0420: enable Tracking Protection in all windows
 * [NOTE] TP sends DNT headers regardless of the DNT pref (see 1610)
 * [1] https://wiki.mozilla.org/Security/Tracking_protection
 * [2] https://support.mozilla.org/kb/tracking-protection-firefox ***/
user_pref("privacy.trackingprotection.pbmode.enabled", true); // default: true
user_pref("privacy.trackingprotection.enabled", true);

/*** 0500: SYSTEM ADD-ONS / EXPERIMENTS
     System Add-ons are a method for shipping extensions, considered to be
     built-in features to Firefox, that are hidden from the about:addons UI.
     To view your System Add-ons go to about:support, they are listed under "Firefox Features"

     Some System Add-ons have no on-off prefs. Instead you can manually remove them. Note that app
     updates will restore them. They may also be updated and possibly restored automatically (see 0505)
     * Portable: "...\App\Firefox64\browser\features\" (or "App\Firefox\etc" for 32bit)
     * Windows: "...\Program Files\Mozilla\browser\features" (or "Program Files (X86)\etc" for 32bit)
     * Mac: "...\Applications\Firefox\Contents\Resources\browser\features\"
            [NOTE] On Mac you can right-click on the application and select "Show Package Contents"
     * Linux: "/usr/lib/firefox/browser/features" (or similar)

     [1] https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/SystemAddons.html
     [2] https://dxr.mozilla.org/mozilla-central/source/browser/extensions
***/
/* 0506: disable PingCentre telemetry (used in several System Add-ons) (FF57+)
 * Currently blocked by 'datareporting.healthreport.uploadEnabled' (see 0333) ***/
user_pref("browser.ping-centre.telemetry", false);
 /* 0515: disable Screenshots (FF55+)
  * alternatively in FF60+, disable uploading to the Screenshots server
  * [1] https://github.com/mozilla-services/screenshots
  * [2] https://www.ghacks.net/2017/05/28/firefox-screenshots-integrated-in-firefox-nightly/ ***/
    // user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true); // (FF60+)
/* 0517: disable Form Autofill (FF55+)
 * [SETTING] Privacy & Security>Forms & Passwords>Enable Profile Autofill
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
 * [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome/ ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off"); // (FF56+)
user_pref("extensions.formautofill.creditCards.enabled", false); // (FF56+)
user_pref("extensions.formautofill.heuristics.enabled", false);
/* 0518: disable Web Compatibility Reporter (FF56+)
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla ***/
user_pref("extensions.webcompat-reporter.enabled", false);

/*** 0600: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
/* 0603b: disable more Necko/Captive Portal
 * [1] https://en.wikipedia.org/wiki/Captive_portal
 * [2] https://wiki.mozilla.org/Necko/CaptivePortal
 * [3] https://trac.torproject.org/projects/tor/ticket/21790 ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // (FF52+)
/* 0606: disable pings (but enforce same host in case)
 * [1] http://kb.mozillazine.org/Browser.send_pings
 * [2] http://kb.mozillazine.org/Browser.send_pings.require_same_host ***/
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/*** 0700: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc ***/
/* 0704: enforce the proxy server to do any DNS lookups when using SOCKS
 * e.g. in TOR, this stops your local DNS server from knowing your Tor destination
 * as a remote Tor node will handle the DNS request
 * [1] http://kb.mozillazine.org/Network.proxy.socks_remote_dns
 * [2] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
user_pref("network.proxy.socks_remote_dns", true);
/* 0706: remove paths when sending URLs to PAC scripts (FF51+)
 * CVE-2017-5384: Information disclosure via Proxy Auto-Config (PAC)
 * [1] https://bugzilla.mozilla.org/1255474 ***/
user_pref("network.proxy.autoconfig_url.include_path", false); // default: false

/*** 0900: PASSWORDS ***/
/* 0901: disable saving passwords
 * [SETTING] Privacy & Security>Forms & Passwords>Remember logins and passwords for sites
 * [NOTE] This does not clear any passwords already saved ***/
user_pref("signon.rememberSignons", false);
/* 0907: display warnings for logins on non-secure (non HTTPS) pages
 * [1] https://bugzilla.mozilla.org/1217156 ***/
user_pref("security.insecure_password.ui.enabled", true);
/* 0908: remove user & password info when attempting to fix an entered URL (i.e. 0802 is true)
 * e.g. //user:password@foo -> //user@(prefix)foo(suffix) NOT //user:password@(prefix)foo(suffix) ***/
user_pref("browser.fixup.hide_user_pass", true);
/* 0910: disable autofilling saved passwords on HTTP pages and show warning (FF52+)
 * [1] https://www.fxsitecompat.com/en-CA/docs/2017/insecure-login-forms-now-disable-autofill-show-warning-beneath-input-control/
 * [2] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1217152,1319119 ***/
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
/* 0911: prevent cross-origin images from triggering an HTTP-Authentication prompt (FF55+)
 * [1] https://bugzilla.mozilla.org/1357835 ***/
user_pref("network.auth.subresource-img-cross-origin-http-auth-allow", false);

/*** 1000: CACHE [SETUP]
     ETAG [1] and other [2][3] cache tracking/fingerprinting techniques can be averted by
     disabling *BOTH* disk (1001) and memory (1003) cache. ETAGs can also be neutralized
     by modifying response headers [4]. Another solution is to use a hardened configuration
     with Temporary Containers [5]. Alternatively, you can *LIMIT* exposure by clearing
     cache on close (2803). or on a regular basis manually or with an extension.
     [1] https://en.wikipedia.org/wiki/HTTP_ETag#Tracking_using_ETags
     [2] https://robertheaton.com/2014/01/20/cookieless-user-tracking-for-douchebags/
     [3] https://www.grepular.com/Preventing_Web_Tracking_via_the_Browser_Cache
     [4] https://github.com/ghacksuserjs/ghacks-user.js/wiki/4.2.4-Header-Editor
     [5] https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21
***/
/* 1001: disable disk cache ***/
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.disk.capacity", 0);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);

/*** 1200: HTTPS ( SSL/TLS / OCSP / CERTS / HSTS / HPKP / CIPHERS )
   Note that your cipher and other settings can be used server side as a fingerprint attack
   vector, see [1] (It's quite technical but the first part is easy to understand
   and you can stop reading when you reach the second section titled "Enter Bro")

   Option 1: Use Firefox defaults for the 1260's items (item 1260 default for SHA-1, is local
             only anyway). There is nothing *weak* about Firefox's defaults, but Mozilla (and
             other browsers) will always lag for fear of breakage and upset end-users
   Option 2: Disable the ciphers in 1261, 1262 and 1263. These shouldn't break anything.
             Optionally, disable the ciphers in 1264.

   [1] https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/
 ***/
/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) ***/
/* 1201: disable old SSL/TLS "insecure" renegotiation (vulnerable to a MiTM attack)
 * [WARNING] <2% of secure sites do NOT support the newer "secure" renegotiation, see [2]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://www.ssllabs.com/ssl-pulse/ ***/
// user_pref("security.ssl.require_safe_negotiation", true);
/* 1202: control TLS versions with min and max
 * 1=min version of TLS 1.0, 2=min version of TLS 1.1, 3=min version of TLS 1.2 etc
 * [NOTE] Jul-2017: Telemetry indicates approx 2% of TLS web traffic uses 1.0 or 1.1
 * [WARNING] If you get an "SSL_ERROR_NO_CYPHER_OVERLAP" error, temporarily
 * set a lower value for 'security.tls.version.min' in about:config
 * [1] http://kb.mozillazine.org/Security.tls.version.*
 * [2] https://www.ssl.com/how-to/turn-off-ssl-3-0-and-tls-1-0-in-your-browser/
 * [2] archived: https://archive.is/hY2Mm ***/
user_pref("security.tls.version.min", 3);
/* 1204: disable SSL Error Reporting
 * [1] https://firefox-source-docs.mozilla.org/browser/base/sslerrorreport/preferences.html ***/
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
/** OCSP (Online Certificate Status Protocol)
    #Required reading [#] https://scotthelme.co.uk/revocation-is-broken/ ***/
/* 1210: enable OCSP Stapling
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/ ***/
user_pref("security.ssl.enable_ocsp_stapling", true);
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
 * 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
 * OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
 * It's a trade-off between security (checking) and privacy (leaking info to the CA)
 * [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1);
/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail
 * When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
 * Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
 * It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
 * could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html ***/
user_pref("security.OCSP.require", true);
/* 1222: enforce strict pinning
 * PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict
 * [WARNING] If you rely on an AV (antivirus) to protect your web browsing
 * by inspecting ALL your web traffic, then leave at current default=1
 * [1] https://trac.torproject.org/projects/tor/ticket/16206 ***/
user_pref("security.cert_pinning.enforcement_level", 2);
/** MIXED CONTENT ***/
/* 1240: disable insecure active content on https pages - mixed content
 * [1] https://trac.torproject.org/projects/tor/ticket/21323 ***/
user_pref("security.mixed_content.block_active_content", true); // default: true
/** CIPHERS [see the section 1200 intro] ***/
/* 1260: disable or limit SHA-1
 * 0=all SHA1 certs are allowed
 * 1=all SHA1 certs are blocked (including perfectly valid ones from 2015 and earlier)
 * 2=deprecated option that now maps to 1
 * 3=only allowed for locally-added roots (e.g. anti-virus)
 * 4=only allowed for locally-added roots or for certs in 2015 and earlier
 * [WARNING] When disabled, some man-in-the-middle devices (e.g. security scanners and
 * antivirus products, may fail to connect to HTTPS sites. SHA-1 is *almost* obsolete.
 * [1] https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/ ***/
user_pref("security.pki.sha1_enforcement_level", 1);
/** UI (User Interface) ***/
/* 1270: display warning (red padlock) for "broken security" (see 1201)
 * [1] https://wiki.mozilla.org/Security:Renegotiation ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1272: display advanced information on Insecure Connection warning pages
 * only works when it's possible to add an exception
 * i.e. it doesn't work for HSTS discrepancies (https://subdomain.preloaded-hsts.badssl.com/)
 * [TEST] https://expired.badssl.com/ ***/
user_pref("browser.xul.error_pages.expert_bad_cert", true);
/* 1273: display "insecure" icon (FF59+) and "Not Secure" text (FF60+) on HTTP sites ***/
user_pref("security.insecure_connection_icon.enabled", true); // all windows
user_pref("security.insecure_connection_text.enabled", true);
   // user_pref("security.insecure_connection_icon.pbmode.enabled", true); // private windows only
   // user_pref("security.insecure_connection_text.pbmode.enabled", true);

/*** 1400: FONTS ***/
/* 1402: set more legible default fonts [SETUP]
 * [SETTING] General>Language and Appearance>Fonts & Colors>Advanced>Serif|Sans-serif|Monospace
 * [NOTE] Example below for Windows/Western only ***/
user_pref("font.name.serif.x-unicode", "Adobe Garamond Pro");
user_pref("font.name.serif.x-western", "Adobe Garamond Pro"); // default: Times New Roman
user_pref("font.name.sans-serif.x-unicode", "SF Pro Text");
user_pref("font.name.sans-serif.x-western", "SF Pro Text"); // default: Arial
user_pref("font.name.monospace.x-unicode", "SF Mono");
user_pref("font.name.monospace.x-western", "SF Mono"); // default: Courier New
/* 1407: disable special underline handling for a few fonts which you will probably never use [RESTART]
 * Any of these fonts on your system can be enumerated for fingerprinting.
 * [1] http://kb.mozillazine.org/Font.blacklist.underline_offset ***/
user_pref("font.blacklist.underline_offset", "");

/*** 1600: HEADERS / REFERERS
     Only *cross domain* referers need controlling and XOriginPolicy (1603) is perfect for that. Thus we enforce
     the default values for 1601, 1602, 1605 and 1606 to minimize breakage, and only tweak 1603 and 1604.

     Our default settings provide the best balance between protection and amount of breakage.
     To harden it a bit more you can set XOriginPolicy (1603) to 2 (+ optionally 1604 to 1 or 2).
     To fix broken sites (including your modem/router), temporarily set XOriginPolicy=0 and XOriginTrimmingPolicy=2 in about:config,
     use the site and then change the values back. If you visit those sites regularly (e.g. Vimeo), use an extension.

                    full URI: https://example.com:8888/foo/bar.html?id=1234
       scheme+host+path+port: https://example.com:8888/foo/bar.html
            scheme+host+port: https://example.com:8888

     #Required reading [#] https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
 ***/
/* 1603: CROSS ORIGIN: control when to send a referer [SETUP]
 * 0=always (default), 1=only if base domains match, 2=only if hosts match ***/
user_pref("network.http.referer.XOriginPolicy", 1);
/* 1606: ALL: set the default Referrer Policy
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * [NOTE] This is only a default, it can be overridden by a site-controlled Referrer Policy
 * [1] https://www.w3.org/TR/referrer-policy/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy
 * [3] https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/ ***/
// user_pref("network.http.referer.defaultPolicy", 3); // (FF59+) default: 3
user_pref("network.http.referer.defaultPolicy.pbmode", 2); // (FF59+) default: 2
/* 1607: TOR: hide (not spoof) referrer when leaving a .onion domain (FF54+)
 * [NOTE] Firefox cannot access .onion sites by default. We recommend you use
 * TBB (Tor Browser Bundle) which is specifically designed for the dark web
 * [1] https://bugzilla.mozilla.org/1305144 ***/
user_pref("network.http.referer.hideOnionSource", true);
/* 1610: ALL: enable the DNT (Do Not Track) HTTP header
 * [SETTING] Privacy & Security>Tracking Protecting>Send websites a "Do Not Track"...
 * [NOTE] DNT is enforced with TP (see 0420) regardless of this pref ***/
user_pref("privacy.donottrackheader.enabled", true);

/*** 1700: CONTAINERS [SETUP]
     [1] https://support.mozilla.org/kb/containers-experiment
     [2] https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
     [3] https://github.com/mozilla/testpilot-containers
***/
/* 1701: enable Container Tabs setting in preferences (see 1702) (FF50+)
 * [1] https://bugzilla.mozilla.org/1279029 ***/
user_pref("privacy.userContext.ui.enabled", true);
/* 1702: enable Container Tabs (FF50+)
 * [SETTING] Privacy & Security>Tabs>Enable Container Tabs ***/
user_pref("privacy.userContext.enabled", true);
/* 1703: enable a private container for thumbnail loads (FF51+) ***/
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true); // default: true in FF61+

/*** 1800: PLUGINS ***/
/* 1801: set default plugin state (i.e. new plugins on discovery) to never activate
 * 0=disabled, 1=ask to activate, 2=active - you can override individual plugins ***/
user_pref("plugin.default.state", 1);
user_pref("plugin.defaultXpi.state", 1);
/* 1803: disable Flash plugin (Add-ons>Plugins)
 * 0=deactivated, 1=ask, 2=enabled
 * ESR52.x is the last branch to *fully* support NPAPI, FF52+ stable only supports Flash
 * [NOTE] You can still override individual sites via site permissions
 * [1] https://www.ghacks.net/2013/07/09/how-to-make-sure-that-a-firefox-plugin-never-activates-again/ ***/
user_pref("plugin.state.flash", 1);

/*** 2000: MEDIA / CAMERA / MIC ***/
/* 2002: limit WebRTC IP leaks if using WebRTC
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1189041,1297416
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy ***/
user_pref("media.peerconnection.ice.default_address_only", true); // (FF42-FF50)
user_pref("media.peerconnection.ice.no_host", true); // (FF51+)
/* 2022: disable screensharing ***/
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
/* 2031: disable audio auto-play in non-active tabs (FF51+)
 * [1] https://www.ghacks.net/2016/11/14/firefox-51-blocks-automatic-audio-playback-in-non-active-tabs/ ***/
user_pref("media.block-autoplay-until-in-foreground", true);

/*** 2200: WINDOW MEDDLING & LEAKS / POPUPS ***/
/* 2211: set max popups from a single non-click event - default is 20! ***/
user_pref("dom.popup_maximum", 5);

/*** 2600: MISCELLANEOUS ***/
/* 2601: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser
 * [1] https://support.mozilla.org/kb/accessibility-services ***/
user_pref("accessibility.force_disabled", 1);
/* 2602: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon ***/
user_pref("beacon.enabled", false);
/* 2672: enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
 * Firefox has *some* protections, but it is better to be safe than sorry. The downside: it will also
 * display legitimate IDN's punycoded, which might be undesirable for users of non-latin alphabets
 * [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", true);
/* 2680: enable CSP (Content Security Policy)
 * [1] https://developer.mozilla.org/docs/Web/HTTP/CSP ***/
user_pref("security.csp.enable", true); // default: true
/* 2681: disable CSP violation events (FF59+)
 * [1] https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent ***/
user_pref("security.csp.enable_violation_events", false);
/* 2682: enable CSP 1.1 experimental hash-source directive (FF29+)
  * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=855326,883975 ***/
 user_pref("security.csp.experimentalEnabled", true);
/* 2683: block top level window data: URIs (FF56+)
  * [1] https://bugzilla.mozilla.org/1331351
  * [2] https://www.wordfence.com/blog/2017/01/gmail-phishing-data-uri/
  * [3] https://www.fxsitecompat.com/en-CA/docs/2017/data-url-navigations-on-top-level-window-will-be-blocked/ ***/
 user_pref("security.data_uri.block_toplevel_data_uri_navigations", true); // default: true in FF59+

/*** 2700: PERSISTENT STORAGE
     Data SET by websites including
            cookies : profile\cookies.sqlite
       localStorage : profile\webappsstore.sqlite
          indexedDB : profile\storage\default
           appCache : profile\OfflineCache
     serviceWorkers :
 ***/
/* 2701: disable 3rd-party cookies and site-data [SETUP]
 * You can set exceptions under site permissions or use an extension
 * 0=allow all 1=allow same host 2=disallow all 3=allow 3rd party if it already set a cookie
 * [SETTING] Privacy & Security>History>Custom Settings>Accept cookies from sites
 * [NOTE] Blocking 3rd party controls 3rd party access to localStorage, IndexedDB, Cache API and Service Worker Cache.
 * Blocking 1st party controls access to localStorage and IndexedDB (note: Service Workers can still use IndexedDB).
 * [1] https://www.fxsitecompat.com/en-CA/docs/2015/web-storage-indexeddb-cache-api-now-obey-third-party-cookies-preference/ ***/
user_pref("network.cookie.cookieBehavior", 1);
/* 2702: set third-party cookies (i.e ALL) (if enabled, see above pref) to session-only
   and (FF58+) set third-party non-secure (i.e HTTP) cookies to session-only
   [NOTE] .sessionOnly overrides .nonsecureSessionOnly except when .sessionOnly=false and
   .nonsecureSessionOnly=true. This allows you to keep HTTPS cookies, but session-only HTTP ones
 * [1] https://feeding.cloud.geek.nz/posts/tweaking-cookies-for-privacy-in-firefox/
 * [2] http://kb.mozillazine.org/Network.cookie.thirdparty.sessionOnly ***/
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true); // (FF58+)
/* 2730: disable offline cache
 * [NOTE] For FF60.0.1 and under, this is required 'true' for Storage API (2750) ***/
   // user_pref("browser.cache.offline.enable", false);
/* 2730b: disable offline cache on insecure sites (FF60+)
 * [1] https://blog.mozilla.org/security/2018/02/12/restricting-appcache-secure-contexts/ ***/
user_pref("browser.cache.offline.insecure.enable", false); // default: false in FF62+

/*** 4000: FIRST PARTY ISOLATION (FPI)
 ** 1278037 - isolate indexedDB (FF51+)
 ** 1277803 - isolate favicons (FF52+)
 ** 1264562 - isolate OCSP cache (FF52+)
 ** 1268726 - isolate Shared Workers (FF52+)
 ** 1316283 - isolate SSL session cache (FF52+)
 ** 1317927 - isolate media cache (FF53+)
 ** 1323644 - isolate HSTS and HPKP (FF54+)
 ** 1334690 - isolate HTTP Alternative Services (FF54+)
 ** 1334693 - isolate SPDY/HTTP2 (FF55+)
 ** 1337893 - isolate DNS cache (FF55+)
 ** 1344170 - isolate blob: URI (FF55+)
 ** 1300671 - isolate data:, about: URLs (FF55+)

 NOTE: FPI has some issues depending on your Firefox release
 ** 1418931 - [fixed in FF58+] IndexedDB (Offline Website Data) with FPI Origin Attributes
      are not removed with "Clear All/Recent History" or "On Close"
 ** 1381197 - [fixed in FF59+] extensions cannot control cookies with FPI Origin Attributes
***/
/* 4001: enable First Party Isolation (FF51+)
 * [WARNING] May break cross-domain logins and site functionality until perfected
 * [1] https://bugzilla.mozilla.org/1260931 ***/
user_pref("privacy.firstparty.isolate", true);

// FF60+
// 4613: [2011] disable WebGL debug info being available to websites
   // [1] https://bugzilla.mozilla.org/1171228
   // [2] https://developer.mozilla.org/docs/Web/API/WEBGL_debug_renderer_info
user_pref("webgl.enable-debug-renderer-info", false);

/* 0707: disable (or setup) DNS-over-HTTPS (DoH) (FF60+)
 * TRR = Trusted Recursive Resolver
 * .mode: 0=off, 1=race, 2=TRR first, 3=TRR only, 4=race for stats, but always use native result
 * [WARNING] DoH bypasses hosts and gives info to yet another party (e.g. Cloudflare)
 * [1] https://www.ghacks.net/2018/04/02/configure-dns-over-https-in-firefox/
 * [2] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/ ***/
//user_pref("network.trr.mode", 3);
//user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
//user_pref("network.trr.bootstrapAddress", 1.1.1.1);
//user_pref("network.trr.wait-for-portal", false);

user_pref("network.security.esni.enabled", true);
user_pref("media.mediasource.webm.enabled", true);

/* END: internal custom pref to test for syntax errors ***/
user_pref("_user.js.parrot", "omega");
