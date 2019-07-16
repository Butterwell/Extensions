[{"Owner":"JCPalmer","Date":"2016-09-19T17:28:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI found myself making a class called MatrixComp_co_ which is the rotation_co_ translation_co_ &amp_sm_ scaling components of a BABYLON.Matrix broken out.  When trying to scale the matrices of a pose from a library_co_ more than just scaling the translation is required to account for skeletons which might have different postures / builds  (rotation at rest).  Otherwise_co_ the skeleton assumes the posture of the skeleton used to make the library_co_ which can look weird.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI added methods to compute the ratios of each component_t_s rest value (called basis) to the rest value that of the library.  Often_co_ the translation of a dimension is zero_co_ so using the divide function results in a NaN.  I wrote my own_co_ shown below.  Is there any interest in changing the division behavior to this?  a NaN is really not useful.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.translationBasisRatio _eq_ BABYLON.Vector3.Zero()_sm_\nif (libraryBasis.translation.x !_eq__eq_ 0) this.translationBasisRatio.x _eq_ this.translation.x / libraryBasis.translation.x_sm_\nif (libraryBasis.translation.y !_eq__eq_ 0) this.translationBasisRatio.y _eq_ this.translation.y / libraryBasis.translation.y_sm_\nif (libraryBasis.translation.z !_eq__eq_ 0) this.translationBasisRatio.z _eq_ this.translation.z / libraryBasis.translation.z_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAlso_co_ there is no divide for a Quaternion_co_ but this equivalent.  Maybe_co_ a wrapper?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_this.rotationBasisRatio _eq_ this.rotation.multiply(BABYLON.Quaternion.Inverse(libraryBasis.rotation))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI also ended up with my own versions of Vector3.LerpToRef &amp_sm_ SlerpToRef.  I am fine keeping all of this in my code_co_ but some could be moved if wanted.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-20T17:25:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAs i asked in another post_co_ please merge it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]