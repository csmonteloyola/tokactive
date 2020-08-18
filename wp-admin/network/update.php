<?php
/**
 * Update/Install Plugin/Theme network administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

<<<<<<< HEAD
if ( isset( $_GET['action'] ) && in_array( $_GET['action'], array( 'update-selected', 'activate-plugin', 'update-selected-themes' ), true ) ) {
=======
if ( isset( $_GET['action'] ) && in_array( $_GET['action'], array( 'update-selected', 'activate-plugin', 'update-selected-themes' ) ) ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	define( 'IFRAME_REQUEST', true );
}

/** Load WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/update.php';
