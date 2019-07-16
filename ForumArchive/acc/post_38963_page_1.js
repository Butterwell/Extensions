[{"Owner":"Doitr","Date":"2018-07-19T16:57:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi together_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan someone explain me the behaviour of the following_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Step 1_dd_ creation of 4 boxes_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let box _eq_ new BABYLON.MeshBuilder.CreateBox(_qt_0_qt__co_ 1_co_ scene)_sm_\nlet box1 _eq_ new BABYLON.MeshBuilder.CreateBox(_qt_1_qt__co_ 1_co_ scene)_sm_\nlet box2 _eq_ new BABYLON.MeshBuilder.CreateBox(_qt_2_qt__co_ 1_co_ scene)_sm_\nlet box3 _eq_ new BABYLON.MeshBuilder.CreateBox(_qt_3_qt__co_ 1_co_ scene)_sm_\n\n\nbox1.position _eq_ new BABYLON.Vector3(7_co_0_co_0)_sm_\nbox2.position _eq_ new BABYLON.Vector3(8_co_0_co_0)_sm_\nbox3.position _eq_ new BABYLON.Vector3(9_co_0_co_0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19290_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.aa9adc592e8fb518b6ab41d08a399093.png_qt_ alt_eq__qt_image.png.aa9adc592e8fb518b6ab41d08a399093.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Step 2_dd_ now lets group boxes 1_co_ 2 &amp_sm_ 3 and apply rotateAround_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_box3.setParent(box2)_sm_\nbox2.setParent(box1)_sm_\n\nbox1.rotateAround(new BABYLON.Vector3(7_co_0_co_0)_co_BABYLON.Axis.Y_co_Math.PI/2)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19291_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.3ff487a29aaff74c5184d5b93715a1a8.png_qt_ alt_eq__qt_image.png.3ff487a29aaff74c5184d5b93715a1a8.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor me it seems that the grouped boxes are moved to (0_co_0_co_0) after the rotation. Or am I getting something wrong?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee your self_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thttps_dd_//playground.babylonjs.com/indexStable.html#T99QF6#1\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_--&gt_sm_ Also_dd_ I want to create two abstract methods_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(1) Rotate an arbitrary mesh (having children) around it_t_s _qt_Center_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(2) Position an arbitrary mesh (having children) sucht that it_t_s top left corner is at some target coordinates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI always encounter problems with getting the current Boundingbox (even if I calculate it recursively by merging the bounding boxes of the children).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI almost feel like I am not understanding something entirely. How would you implement such a method? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for helping _sm_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-19T20:08:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222458_qt_ data-ipsquote-contentid_eq__qt_38963_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532019470_qt_ data-ipsquote-userid_eq__qt_32260_qt_ data-ipsquote-username_eq__qt_Doitr_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Doitr said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI always encounter problems with getting the current Boundingbox (even if I calculate it recursively by merging the bounding boxes of the children).\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHere is a PG from adam (thread_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed351819517_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/30842-solvedhow-to-get-boundingbox-info-of-a-parent-mesh-with-all-children-size/?do_eq_embed_qt_ style_eq__qt_height_dd_219px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t) - it_t_s what helped me figure things out.  Might be a built-in way now as that_t_s an older PG_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QHMT1%2318_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QHMT1#18_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom there you can rotate from anywhere.  One easy way without pivot matrices is to put a node/mesh at the desired pivot point.  Parent the container to that (container.setParent(node) then rotate that node).  Then unparent again - container.setParent(null).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-19T20:44:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_222458_qt_ data-ipsquote-contentid_eq__qt_38963_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532019470_qt_ data-ipsquote-userid_eq__qt_32260_qt_ data-ipsquote-username_eq__qt_Doitr_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Doitr said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor me it seems that the grouped boxes _lt_span_gt_﻿_lt_/span_gt_are moved to (0_co_0_co_0) after the rotation. Or am I getting something wrong?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThey are at (0_co_0_co_0)...  Here is the code in BabylonJS_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.transformNode.ts#L679_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.transformNode.ts#L679_lt_/a_gt__lt_br /_gt_\n\tI think it_t_s the line this.position.addInPlace() not having a counterpart.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe way rotation on pivot points work is really interesting and the matrix math can be mind bending.  First you translate to the pivot point.  Then you rotate.  Then you translate back.  It can all be done by matrix multiplication in order_co_ which is really important.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a PG that seems to show it not working as expected - I would expect rotate to have the same result as rotateAround (since your rotateAround point and box1 center are the same..)_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/indexStable.html#T99QF6%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/indexStable.html#T99QF6#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]