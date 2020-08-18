/**
 * @output wp-admin/js/set-post-thumbnail.js
 */

<<<<<<< HEAD
/* global ajaxurl, post_id, alert */
=======
/* global setPostThumbnailL10n, ajaxurl, post_id, alert */
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
/* exported WPSetAsThumbnail */

window.WPSetAsThumbnail = function( id, nonce ) {
	var $link = jQuery('a#wp-post-thumbnail-' + id);

<<<<<<< HEAD
	$link.text( wp.i18n.__( 'Saving…' ) );
=======
	$link.text( setPostThumbnailL10n.saving );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	jQuery.post(ajaxurl, {
		action: 'set-post-thumbnail', post_id: post_id, thumbnail_id: id, _ajax_nonce: nonce, cookie: encodeURIComponent( document.cookie )
	}, function(str){
		var win = window.dialogArguments || opener || parent || top;
<<<<<<< HEAD
		$link.text( wp.i18n.__( 'Use as featured image' ) );
		if ( str == '0' ) {
			alert( wp.i18n.__( 'Could not set that as the thumbnail image. Try a different attachment.' ) );
		} else {
			jQuery('a.wp-post-thumbnail').show();
			$link.text( wp.i18n.__( 'Done' ) );
=======
		$link.text( setPostThumbnailL10n.setThumbnail );
		if ( str == '0' ) {
			alert( setPostThumbnailL10n.error );
		} else {
			jQuery('a.wp-post-thumbnail').show();
			$link.text( setPostThumbnailL10n.done );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			$link.fadeOut( 2000 );
			win.WPSetThumbnailID(id);
			win.WPSetThumbnailHTML(str);
		}
	}
	);
};
