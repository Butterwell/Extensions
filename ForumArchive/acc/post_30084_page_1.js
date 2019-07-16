[{"Owner":"V!nc3r","Date":"2017-04-28T13:06:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI use the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/extensions/water_qt_ rel_eq__qt_external nofollow_qt__gt_waterMaterial_lt_/a_gt_. Is it possible to have a skybox used in water reflection_co_ but which is not visible to camera ? (I want a color plain background).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tErf_co_ by writing this post I found a solution _lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt_ I still submit topic in case someone want find answer one day _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou just have to create another smaller skybox_co_ and don_t_t push it to reflection renderList... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SLLOJ%23275_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SLLOJ#275_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe more optimised solution ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-28T14:56:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLike this one _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou could perhaps optimize a bit by giving a mesh.layerMask incompatible with camera.layerMask_co_ so your bigger skybox will only be rendered in the water shader\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"luan_ngo","Date":"2018-08-25T19:32:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre there any other ways to do this? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to have a light fog in a scene_co_ but the fog blocks out the skybox reflection in the water. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-08-26T11:07:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it something like that you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SLLOJ%23508_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SLLOJ#508_lt_/a_gt_ ? (jump to the end_dd_ all is reflected_co_ but skybox is excluded from the camera layer_co_ as Deltakosh suggest above)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"luan_ngo","Date":"2018-08-26T14:49:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_226192_qt_ data-ipsquote-contentid_eq__qt_30084_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1535281674_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tIs it something like that you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SLLOJ%23508_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SLLOJ#508_lt_/a_gt_ ? (jump to the end_dd_ all is reflected_co_ but skybox is excluded from the camera layer_co_ as Deltakosh suggest above)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s exactly it. Thank you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]