<?php
/**
 * Install theme network administration panel.
 *
 * @package WordPress
 * @subpackage Multisite
 * @since 3.1.0
 */

<<<<<<< HEAD
if ( isset( $_GET['tab'] ) && ( 'theme-information' === $_GET['tab'] ) ) {
=======
if ( isset( $_GET['tab'] ) && ( 'theme-information' == $_GET['tab'] ) ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	define( 'IFRAME_REQUEST', true );
}

/** Load WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

require ABSPATH . 'wp-admin/theme-install.php';
