[{"Owner":"Deltakosh","Date":"2017-04-10T22:22:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey team!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pleased to announce the availability of morph targets!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease read more here_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_morphtargets_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_morphtargets_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12443_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/morphtargets.JPG.321d8146a8ef13ff6586218c2e8c3ed8.JPG_qt_ alt_eq__qt_morphtargets.JPG.321d8146a8ef13ff6586218c2e8c3ed8.JPG_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-10T23:29:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt__dd_ Would you havetime to add it to the blender exporter? I_t_ll add serialize+parse support tomorrow in bjs\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-04-11T02:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_170528_qt_ data-ipsquote-contentid_eq__qt_29677_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1491862969_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m pleased to announce the availability of morph targets!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tShape keys finally arriving !!_lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-11T15:23:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot going to prioritize over my work_co_ but will add.  There are many things from my implementation which should help_co_ like keeping track of Blender_t_s vertices as they are being added.  The exporter_co_ as you know_co_ grabs things in material order &amp_sm_ duplicates vertices at the borders where the material changes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPart of the shapekey code can be kept_co_ but think it needs to be reworked.  Your GPU implementation_t_s restriction on having the exact same # of vertices is going to require shutting of groups.  I allow a group of the entire mesh_co_ but it still tries to optimized out vertices which are un-affected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNormals are not going to get passed though.  Am reading Shapekeys directly_co_ not mesh posing like an armature for an action.  Shapekeys do not have normals themselves.  Normals are derivative data.  Have progressed from my own calculations of a targets normals to using _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt__t_s_co_ which were faster than my own.  There are minor creases in some of my scenes with makehuman.  Think it is actually a makehuman issue.  Have a triangulation idea of as the vertex changed from the basis (direction)_co_ make the corresponding change to the basis normal.  Should be faster than calcing a normal too.  See creasing highlighted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58ecf4e4c574c_normalseems.JPG.562fc612e3a11394f3f69b4fd25544fb.JPG_qt_ data-fileid_eq__qt_12454_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12454_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/58ecf4e4e01d4_normalseems.thumb.JPG.b45b9f020c40408eeec5e52d9464ceb6.JPG_qt_ alt_eq__qt_58ecf4e4e01d4_normalseems.thumb.JPG.b45b9f020c40408eeec5e52d9464ceb6.JPG_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-04-11T15:33:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThat_t_s cool. I was waiting for this feature for a long time. it_t_s nice to see. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-11T15:35:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt__dd_ Thanks a lot! If you cannot do it or don_t_t have time for it_co_ please let me know. I_t_ll try to dig again into Python code _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-12T19:09:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have looked at the TOB version of my code base.  I find in my _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/blob/master/QueuedInterpolation/Blender/src/tower-of-babel/shape_key_group.py_qt_ rel_eq__qt_external nofollow_qt__gt_ShapeKeyGroup.py_lt_/a_gt_ file that I had broken out extracting the keys / targets from organizing them into groups.  This is a class called RawShapeKey.  I added the constructor arg_co_ allowVertReduction_co_ which when passed as False does not log how many vertices are actually different from the original value.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRawShapeKey could have a_lt_u_gt_ to_scene_file()_lt_/u_gt_ added_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n    def to_scene_file(self_co_ file_handler)_dd_\n        file_handler.write(_t_{_t_)\n        ...\n        file_handler.write(_t_}_t_)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis not going to be something I am going to do for a while.  I am in the process of finalizing Mesh.py unrelated to a .babylon.  Will adjust the logic to work with or without groups.  There are other things I am doing to close code for the mesh code_co_ but when done will_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\tcopy ShapeKeyGroup.py file to BJS repo_co_ &amp_sm_ hook it up in __init__.py\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tMerge the flow control to create either RawShapeKeys or RawShapeKeys  &amp_sm_ ShapeKeyGroups in Mesh.py\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThat would leave the flow control in Mesh.to_scene_file() to write the keys.  This along with the actual writing_co_ shown above.  This primarily a plumbing job.  I_t_ll do it_co_ but not for about a month or so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-13T04:33:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOMG YES!!!  I no longer have to have my avatars moving around with blank expressions on their faces _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-13T16:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks a lot _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8492_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8492-jcpalmer/_qt_ rel_eq__qt__qt__gt_@JCPalmer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-14T00:39:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_qt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Please be aware that most of the browsers are limited to 16 attributes per mesh. Adding a single morph target to a mesh add 2 new attributes (position + normal)._lt_span_gt_ _lt_/span_gt__lt_/span_gt__qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo this means we can only have max 8 morph targets?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-04-14T15:27:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have my own implementation of morphing_co_ QueuedInterpolation extension_co_ so not an authority on this new one.  Would say that positions_co_ normals_co_ UV1_co_ UV2_co_ vertex colors_co_ matrix weights_co_ matrix indices_co_ ( matrix weights extra_co_ and matrix indices extra for more than 4 influencers ) each also take up an attribute.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-14T15:53:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12544_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12544-ozrocker/_qt_ rel_eq__qt__qt__gt_@ozRocker_lt_/a_gt_ Correct\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-16T06:44:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDoes anyone know how I can use Blender exporter for morph manager.  I tried 2 meshes with exact same vertex number but the exporter made one 9_co_350 vertices and the other 9_co_352 vertices so I can_t_t use them with morph manager.  I_t_m not sure if the exported vertices are in the same order either.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-16T09:21:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok_co_ I had to use the objLoader because that doesn_t_t mess with the vertices.  I_t_ve got a demo here_dd_ _lt_a href_eq__qt_http_dd_//punkoffice.com/weight_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//punkoffice.com/weight_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is just a simple _qt_weight gain_qt_ example.  This mesh has about 7_co_000 quads.  I_t_ve realised that for every blendshape I need to replicate another 7_co_000 quads.  This could get expensive!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ I just realised the PBR material doesn_t_t work with the morph target.  It just shows the original mesh shape.  Click on _qt_Disable diffuse map_qt_ to see what I mean\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-17T01:24:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m using an iPhone 6+ with iOS 10.3.1 and its breaking.  I_t_ve attached the console output\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/ios_errors.jpg.f4188f8b53d6dcaa0b305e90cc2a23d5.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12526_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/ios_errors.thumb.jpg.603949262685c3244deacec81eaafa9a.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_ios_errors.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-17T15:51:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes this one works?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HPV2TZ%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#HPV2TZ#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif yes can you repro your issue in the PG?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-18T02:09:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_171321_qt_ data-ipsquote-contentid_eq__qt_29677_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1492444317_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t10 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDoes this one works?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HPV2TZ%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#HPV2TZ#6_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tif yes can you repro your issue in the PG?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYes that works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve made a playground here using my mesh_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#28YUR5%23201_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#28YUR5#201_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can_t_t get it to compile.  I have to use an OBJ loader but this OBJ loader loads one of the meshes as twice the number of vertices as the first mesh.  I don_t_t know any other way to load an OBJ in the playground\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-18T16:23:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI have no issue either _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-18T23:28:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think I need to wait for an upgrade to the Blender exporter and OBJ loader cos at the moment none of them are supporting mesh duplicates properly\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-19T01:04:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot sure what mesh duplicates is? Can you explain? Perhaps I can help\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-19T01:10:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_171504_qt_ data-ipsquote-contentid_eq__qt_29677_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1492563869_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tNot sure what mesh duplicates is? Can you explain? Perhaps I can help\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_m using the .OBJ file here _lt_a href_eq__qt_http_dd_//preview.punkoffice.com/morph/weight.obj_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//preview.punkoffice.com/morph/weight.obj_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn that .OBJ there are 2 meshes.  There_t_s the normal girl.  Then what I did was simply _qt_duplicate_qt_ her so I have a copy with exact same vertices_co_ then I made her fat.  In Blender and when using SceneLoader it properly shows that they both have 7_co_405 vertices_co_ but in the method I_t_m using in the playground one has 7_co_405 and the other has 14_co_810 (exactly double).  You can see in the console output\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-19T01:26:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk see my response in your other post _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou were using an old version of the obj loader (latest one is here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/loaders/babylon.objFileLoader.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/loaders/babylon.objFileLoader.js_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-19T10:12:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI figured out what_t_s wrong.  I get this crash on everything when I use the latest preview version of babylon.js (I downloaded it from GIThub 10 minutes ago).  I_t_ve applied that preview version to my old stuff that just displays a mesh from a .babylon file and it crashes at executeWhenReady().  They all do.  Fine in desktop browsers but crashes in iOS.  So its nothing to do with the morphing code that I_t_m using.  However_co_ I don_t_t get any errors when morphing in the playground.  Is the playground using a different version of babylon.js?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve attached the output\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/shader_errors.jpg.8fd056730a70f05a785260cb7ef4d340.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_12591_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_04/shader_errors.jpg.8fd056730a70f05a785260cb7ef4d340.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_shader_errors.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-19T14:57:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPlayground uses the latest preview version as well\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you share the code you are using? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ozRocker","Date":"2017-04-20T02:39:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found the problem with my coding.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did this to check if webGL is supported_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function webgl_detect(return_context) {\n    if (!!window.WebGLRenderingContext) {\n        var names _eq_ [_qt_webgl_qt__co_ _qt_experimental-webgl_qt__co_ _qt_moz-webgl_qt__co_ _qt_webkit-3d_qt_]_co_\n           context _eq_ false_sm_\n\n        for(var i_eq_0_sm_i&lt_sm_4_sm_i++) {\n            try {\n                context _eq_ canvas.getContext(names[i])_sm_\n                if (context &amp_sm_&amp_sm_ typeof context.getParameter _eq__eq_ _qt_function_qt_) {\n                    // WebGL is enabled\n                    return true_sm_\n                }\n            } catch(e) {}\n        }\n\n        // WebGL is supported_co_ but disabled\n        return false_sm_\n    }\n\n    // WebGL not supported\n    return false_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twhich is stupid because I can just use BABYLON.Engine.isSupported() instead.  But that code above gave all those errors with the preview release of babylon.js\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo now if you go to _lt_a href_eq__qt_http_dd_//punkoffice.com/weight_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//punkoffice.com/weight_lt_/a_gt_ you_t_ll see that it works on desktop and mobile _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]