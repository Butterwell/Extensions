[{"Owner":"croustibat","Date":"2016-10-25T10:17:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just need to know if the following behavior is normal_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BJVDK%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BJVDK#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis playground will log the event mouse button pushed when clicking dragging the mouse on the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt logs _t_-1_t_ is that an expected behavior?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use the scene pointer observable to get the mouse events_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.onPointerObservable.add(pi_eq_&gt_sm_ {\n\t\tpi.type_eq__eq__eq_4 &amp_sm_&amp_sm_ pi.event.buttons &amp_sm_&amp_sm_ console.log(_t_dragging event_co_ button_dd__t__co_ pi.event.button)_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tEdit_dd_ I noticed that on release 2.4.1 on the babylon npm package\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your nice work on Babylon js!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBye\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"croustibat","Date":"2016-10-25T10:51:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found my problem. This is not a bug obviously.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf someone encounter this issue_co_ here was the cause_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you go to -&gt_sm_ chrome_dd_//flags/_co_ you can activate special chrome features such as GPU rendering etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe following feature_co_ once activated_co_ broke the event system_dd_ chrome_dd_//flags/#enable-experimental-web-platform-features\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe this post shouldn_t_t be in Bugs anymore!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]