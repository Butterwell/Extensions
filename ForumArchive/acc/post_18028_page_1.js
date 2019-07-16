[{"Owner":"Hazardus","Date":"2015-10-20T20:29:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Specifically_co_ I_t_m wanting to add the babylon.objFileLoader plugin so I can use .obj/.mtl assets (dynamically_co_ and only if needed). Is there a built-in way to delay the renderLoop until the plugin and assets to import are loaded in?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_--_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To expand_co_ I_t_m hoping there_t_s a built-in way that will prevent me from having to wrap the renderLoop in a _qt_success_qt_ function completed after the loads_co_ or from using a timer to check for a ready state until it is true._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One such (ideal) solution would be to import the babylon.objFileLoader via the AssetsManager_co_ but does it do this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Final edit_dd_ I_t_ve done this through a bit elaborate _t_require_t__co_ but I_t_m still interested if there is a built-in way of including JS and delaying the renderLoop._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-20T20:42:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The loaders are registered using the SceneLoader (for example - _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/loaders/OBJ/babylon.objFileLoader.js#L728_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/loaders/OBJ/babylon.objFileLoader.js#L728_lt_/a_gt_ ) . _lt_/p_gt__lt_p_gt_You could use the (private) static method _getPluginForFilename of the scene loader to make sure the plugin is there. Maybe a public method _qt_isRegistered(extension)_qt_ can be added_co_ but - if you add the js file in your head there is no reason it won_t_t be loaded and ready to be used._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Hazardus","Date":"2015-10-20T21:15:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Adding it in the head is pretty much what I_t_m trying to avoid. I_t_m using RequireJS module loading_co_ and I have no guarantee that Babylon.js will be loaded before the plugin_co_ which causes problems._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Really_co_ I_t_m trying to make it where when I_t_m adding a mesh task_co_ it says - _qt_oh hey_co_ you want to load an .obj file - let me grab this plug in for your first_qt_. A native way to import js via the AssetsManager would be swell _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-21T07:31:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yep_co_ understood._lt_/p_gt__lt_p_gt_The loader-concept is rather new. The babylon loader is integrated in the system_co_ the rest can be added as plugins_co_ but it would be nice to be able to use the assets manager to do that. Using the Mesh Task the loaders could be loaded dynamically._lt_/p_gt__lt_p_gt_There are a few problems with that_co_ let me think of a nice way to solve them. One of them is the location of the loaders. As far as I know (and correct me if I am wrong) the loaders are not on the CDN. _lt_/p_gt__lt_p_gt_Brain is working. And always open for suggestions _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2015-10-21T08:51:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nope_co_ for now the external loaders are not on the CDN_co_ but it would be usefull to also have them there._lt_/p_gt__lt_p_gt_One difficulty if you address them directly in the babylon loader system_co_ to upload one if needed_co_ is that it should be relative to the actual path of the BJS file (because for a BJS file loaded from a SSL server_co_ the files uploaded afterwhile should also come from SSL_co_ but the BJS CDN is not SSL - that_t_s why I systematicaly port each BJS release in a second CDN which support SSL). Maybe we can define a _qt_global depency path_qt__co_ to define the server where to search for those dependencies_co_ and then we keep the same file structure on every CDN._lt_/p_gt__lt_p_gt_What do you think ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-10-21T09:14:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I made a first draft of the changes_co_ I think this will work - _lt_a href_eq__qt_https_dd_//github.com/RaananW/Babylon.js/commit/6bdaf8c73f31568303703e1d6fd23e37e82a4aed_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/RaananW/Babylon.js/commit/6bdaf8c73f31568303703e1d6fd23e37e82a4aed_lt_/a_gt__lt_/p_gt__lt_p_gt_This is locally on my repo_co_ PR was not sent yet as I need to fully test it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In general - a new variable was added _dd_ SceneLoader.LoadersLocation_co_ which is the global location of the loaders (and is mutable! so should be changed according to your needs)._lt_/p_gt__lt_p_gt_When trying to load a file_co_ the extension will be tested. If a plugin was found_co_ it will run the code normally. If not_co_ it will try loading the js file and will wait for an event that is triggered after the plugin is registered._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It will then execute the success function_co_ which will load the object using the plugin._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Already fixed a small bug (i forgot the _qt_document.head.appendChild(script)_sm__qt_ to actually load the script). Still need to test it. You are more than welcomed to try as well! _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of course_co_ we need to think if it makes sense to have it in the framework..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]