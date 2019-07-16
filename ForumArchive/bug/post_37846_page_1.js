[{"Owner":"jonathanlurie","Date":"2018-05-23T16:38:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve been working a bit with 3D textures lately_co_ to display MRI which are sometimes (more often than not) encoded in Float32. So far_co_ I was converting the data into uint8 on a single channel (LUMINANCE) but then thought it would be nice to have my data sent to the GPU directly as Float32 (single channel_dd_ gl.R32F ). And I found a bug! Or rather something that I suspect to have been overlooked because not a lot of people uses 3D textures and even less want to have floating point precision.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe guilty line of code lays in the Engine L5926 (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Engine/babylon.engine.ts#L5926_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_). When creating the 3D texture_co_ something like that happens_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_this_lt_/span_gt_._gl.texImage3D(_lt_span_gt_this_lt_/span_gt_._gl.TEXTURE_3D_co_ _lt_span_gt_0_lt_/span_gt__co_ internalFormat_co_ texture.width_co_ texture.height_co_ texture.depth_co_ _lt_span_gt_0_lt_/span_gt__co_ internalFormat_co_ _lt_span_gt_this_lt_/span_gt_._gl.UNSIGNED_BYTE_co_ data)_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5)_sm_background-image_dd_url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tand reading at the doc on MDN_co_ we have a prototype like that (_lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texImage3D_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_void_lt_/span_gt_ gl.texImage3D(target_co_ level_co_ internalformat_co_ width_co_ height_co_ depth_co_ border_co_ format_co_ type_co_ ImageData source)_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5)_sm_background-image_dd_url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tThe mistake is in the confusion between _t_internalFormat_t_ and _t_format_t_ and also in the fact that the type in the Engine is forced to UNSIGNED_INT. Somewhere in the middle of_lt_a href_eq__qt_https_dd_//www.khronos.org/registry/webgl/specs/latest/2.0/_qt_ rel_eq__qt_external nofollow_qt__gt_ this page_lt_/a_gt__co_ we can find this table_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/509864052_Capturedecran2018-05-23a12_09_28.png.9ebad7477e22ac75bd1c1c5ea1c49fc3.png_qt_ data-fileid_eq__qt_18389_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18389_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/955885078_Capturedecran2018-05-23a12_09_28.thumb.png.81a135a81f0fff6611c9a4a77cf52bb0.png_qt_ alt_eq__qt_955885078_Capturedecran2018-05-23a12_09_28.thumb.png.81a135a81f0fff6611c9a4a77cf52bb0.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the case of a RGB or LUMINANCE image in UNSIGNED_BYTE_co_ the piece of code in the Engine would work fine (and it_t_s how I used it until now)_co_ but this is only because the _t_type_t_ and _t_internal type_t_ are the same. In the case or single channel float 32_co_ _t_internal format_t_ and _t_format_t_ will take different values_co_ respectively gl.R32F and gl.RED_co_ while the type becomes gl.FLOAT .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in my case_co_ I replaced the line of code in the Engine by this dirty hardcoded version_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_this_lt_/span_gt_._gl.texImage3D(_lt_span_gt_this_lt_/span_gt_._gl.TEXTURE_3D_co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_this_lt_/span_gt_._gl.R32F_co_ texture.width_co_ texture.height_co_ texture.depth_co_ _lt_span_gt_0_lt_/span_gt__co_ _lt_span_gt_this_lt_/span_gt_._gl.RED_co_ _lt_span_gt_this_lt_/span_gt_._gl.FLOAT_co_ data)_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5) url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tAs well as using that_dd_\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt__lt_span_gt_let_lt_/span_gt_ myDummyTexture _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.RawTexture3D( _lt_span_gt_new_lt_/span_gt_ _lt_span_gt_Float32Array_lt_/span_gt_(_lt_span_gt_1_lt_/span_gt_)_co__lt_span_gt_1_lt_/span_gt__co__lt_span_gt_1_lt_/span_gt__co__lt_span_gt_1_lt_/span_gt__co_ BABYLON.Engine.TEXTUREFORMAT_R32F_co_ _lt_span_gt_this_lt_/span_gt_._scene)_sm__lt_/code_gt__lt_/pre_gt_\n\t_lt_span style_eq__qt_background_dd_rgba(220_co_220_co_220_co_.5) url(&quot_sm_//www.html5gamedevs.com/applications/core/interface/ckeditor/ckeditor/plugins/widget/images/handle.png&quot_sm_)_sm__qt__gt__lt_/span_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tAnd it works! (later on _co_ I replaced that by an actual brain MRI texture_co_ and it works too!)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the method Engine._getInternalFormat() _co_ the internalFormat returned for Engine.TEXTUREFORMAT_R32F is gl.RED but the thing is_co_ it should be gl.R32F and we should have another lookup method called for example Engine._getFormat() that returns gl.RED when Engine.TEXTUREFORMAT_R32F is given and a third lookup method (say Engine._getType() ) that would return gl.FLOAT when Engine.TEXTUREFORMAT_R32F is given. Then we would have every possible settings available! Do you think it_t_s an update you could add to the core?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-23T16:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think this is a bug and we should use _lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#24292e_sm_ font-size_dd_12px_sm_ text-align_dd_start_qt__gt__getRGBABufferInternalSizedFormat_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_ color_dd_#24292e_sm_ font-size_dd_12px_sm_ text-align_dd_start_qt__gt_Pinging _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ for investigation_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-05-23T23:08:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo found the issue and actually had to introduce a breaking change _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😞_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_The available format _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_BABYLON.Engine.TEXTUREFORMAT_R32F_lt_/span_gt__lt_span style_eq__qt_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt__co_ _lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_BABYLON.Engine.TEXTUREFORMAT_RG32F_lt_/span_gt__lt_span style_eq__qt_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt_ were mixing both Format (R_co_ RG...) and Type (int_co_ float...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the next nightly you ll be able to use this_dd_ var texture _eq_ new BABYLON.RawTexture3D(data_co_ 4_co_ 4_co_ 4_co_ BABYLON.Engine.TEXTUREFORMAT_R_co_ scene_co_ undefined_co_ undefined_co_ undefined_co_ BABYLON.Engine.TEXTURETYPE_FLOAT)_sm_ in order to create a R32F texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr var texture _eq_ new BABYLON.RawTexture3D(data_co_ 4_co_ 4_co_ 4_co_ BABYLON.Engine.TEXTUREFORMAT_R_co_ scene_co_ undefined_co_ undefined_co_ undefined_co_ BABYLON.Engine.TEXTURETYPE_UNSIGNED_BYTE)_sm_ in order to create a R8 texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease_co_ let me know if that fits your need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe PR including the changes is available here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4368/files_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/4368/files_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-24T00:52:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMerged and published!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jonathanlurie","Date":"2018-05-24T00:54:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreat!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll try that tomorrow and I_t_ll let you know!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]