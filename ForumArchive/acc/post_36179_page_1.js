[{"Owner":"renjianfeng","Date":"2018-03-07T10:21:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi !   I want to move a project from three to babylonjs_co_ and I have the following problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe material of the model is shown correctly in threejs and 3dsmax_co_ only in babylonjs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17348_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/111.png.6c7a5e2b4179f40e582846343e31afb0.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_111.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17348_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/111.png.6c7a5e2b4179f40e582846343e31afb0.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17349_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/22222.png.44d16156ad5f6cb75a6abef842c248c7.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_22222.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17349_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/22222.png.44d16156ad5f6cb75a6abef842c248c7.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_17350_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/33333.png.f5cb8211f297e7536deeb8e0860134f4.png_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_33333.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_17350_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_03/33333.png.f5cb8211f297e7536deeb8e0860134f4.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-03-07T13:42:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think Babylon_t_s version looks the best! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat model are you using_co_ can you share a scene for us to see and be able to debug?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"renjianfeng","Date":"2018-03-08T03:11:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_207318_qt_ data-ipsquote-contentid_eq__qt_36179_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1520430124_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think Babylon_t_s version looks the best! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tWhat model are you using_co_ can you share a scene for us to see and be able to debug?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think I found the reason_co_ because I used objloader_co_ so I need to set this property_dd_\n_lt_/p_gt_\n\n_lt_pre style_eq__qt_border_dd_1px solid #888888_sm_color_dd_#353c41_sm_font-size_dd_14px_sm_padding_dd_2px_sm__qt__gt_\n_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#666600_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#660066_sm__qt__gt_OBJFileLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_#666600_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_OPTIMIZE_WITH_UV _lt_/span_gt__lt_span style_eq__qt_color_dd_#666600_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#000088_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#666600_sm__qt__gt__sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed7819148930_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/19351-babylonjs-obj-file-loader-problem/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much！_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-08T17:12:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGlad that you made it!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]