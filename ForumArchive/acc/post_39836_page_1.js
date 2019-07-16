[{"Owner":"jmb462","Date":"2018-09-05T09:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi here_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve got trouble with mesh rotation around an axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks to this forum_co_ i_t_ve found a function that manage the rotation around an axis but it doesn_t_t give me the result i_t_m expecting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to rotate a box around the world Y axes then the world Z axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I do only rotation around Y or around Z_co_ every thing is working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I do a rotation around Y then around Z_co_ the box rotates correctly around the axis BUT spins around its own center with the same angle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(as the earth that spin while doing its revolution around the sun...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is a playground (the small cube is the reference). I_t_d like the big cube keep the same orientation as the small one (without parenting).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexStable.html#DVUAAQ%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexStable.html#DVUAAQ#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs far I understand_co_ it_t_s seem to be a local / global axis probleme when using the rotation around axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause_co_ if I choose LOCAL for the small one_co_ it gives me the same result that the big one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I want global axes (thoses who are shown in the playground).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for any help or idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope my english is understandable _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJMB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-09-05T14:17:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have this quaternion multiplication order reversed_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.rotationQuaternion _eq_ this._rq.multiply(_q)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tShould be_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.rotationQuaternion _eq_ _q.multiply(this._rq)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/indexStable.html#DVUAAQ%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/indexStable.html#DVUAAQ#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-09-05T15:01:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32669-jmb462/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32669_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32669-jmb462/_qt_ rel_eq__qt__qt__gt_@jmb462_lt_/a_gt_ if you have not done so already I suggest you read the following documentation pages\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/babylon101/position_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/babylon101/position_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/pivots_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/pivots_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/pivot_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/pivot_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/rotation_conventions_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/rotation_conventions_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom your earlier post I see that you are _qt_planning to make a rubik_t_s cube with babylon. I_t_m new to babylon and javascript ._qt_  A challenging task - good luck.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jmb462","Date":"2018-09-05T20:31:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22401_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22401-gijs/_qt_ rel_eq__qt__qt__gt_@Gijs_lt_/a_gt_ Thanks a lot ! That_t_s now working fine. _lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ Thanks too for the links. I_t_ve read several times these pages but I didn_t_t manage to find the problem. I_t_m surely lacking some knownledge too fully understand some 3D parts._lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_My cube is now functional._lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_a href_eq__qt_http_dd_//jmbernard.com/cube5/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jmbernard.com/cube5/_lt_/a_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Controls are keyboard with standard cube notation (R L U D B F and so) with shift for anticlockwise moves.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt__lt_span_gt_I can now implement other function but this 3D rotation programming part was the trickiest part for me I think._lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-05T23:46:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging this topic as solved\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]