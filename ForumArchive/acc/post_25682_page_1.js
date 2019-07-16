[{"Owner":"temmink","Date":"2016-10-11T03:13:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi All_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to set up a scene with a particle system but was hoping to render it with a transparent background. When I try in Chrome the particle system is clipped to the mesh in a very rough fashion and has some weird discolouration. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a playground setup here_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SZQGH%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SZQGH#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there anything I can do to get this to work in Chrome? It works perfectly in Firefox or IE.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny assistance is greatly appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/particles.jpg.ee45d17cda03cfed38084c7f03e5207e.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9797_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/particles.jpg.ee45d17cda03cfed38084c7f03e5207e.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_particles.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-11T18:06:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello I_t_m not sure to understand the problem _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ I have the same result in chrome and IE\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"temmink","Date":"2016-10-12T02:30:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_146974_qt_ data-ipsquote-contentid_eq__qt_25682_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1476209186_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello I_t_m not sure to understand the problem _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ I have the same result in chrome and IE\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the reply. I will include some gifs to show what I mean. It appears to be a webkit issue as I am seeing the same behaviour in Safari on Mac.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/ie-test.gif.68b2f0c4d600d2458caf0fb36cece055.gif_qt_ data-fileid_eq__qt_9818_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_ie-test.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9818_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/ie-test.gif.68b2f0c4d600d2458caf0fb36cece055.gif_qt_ /_gt__lt_/a_gt__lt_br /_gt_\n\tInternet Explorer 11\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/chrome-test.gif.b79df8e903def1e27f7308c73cd9df49.gif_qt_ data-fileid_eq__qt_9819_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_chrome-test.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9819_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/chrome-test.gif.b79df8e903def1e27f7308c73cd9df49.gif_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChrome (Latest)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-13T17:08:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn my PC (win10 + 1080 running latest version of Chrome) I have no issue\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust tested on my surface pro 3_co_ no issue as well on chrome _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about firefox on your computer?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"temmink","Date":"2016-10-14T06:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt looks like the issue was hardware acceleration turned off in Chrome. I will check if the same is true in Safari later on. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would be nice if I could disable the particle system all together if that was going to be the result of a lack of hardware acceleration_co_ is there a way to do feature detection like that?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-14T15:55:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately_co_ we cannot detect hardware acceleration _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou can still detect fps (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L3018_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L3018_lt_/a_gt_) and based on that turn off particles with scene.particlesEnabled (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L362_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.scene.ts#L362_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]