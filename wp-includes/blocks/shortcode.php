<?php
/**
 * Server-side rendering of the `core/shortcode` block.
 *
 * @package WordPress
 */

/**
 * Performs wpautop() on the shortcode block content.
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 *
 * @return string Returns the block content.
 */
function render_block_core_shortcode( $attributes, $content ) {
	return wpautop( $content );
}

/**
 * Registers the `core/shortcode` block on server.
 */
function register_block_core_shortcode() {
<<<<<<< HEAD
	register_block_type_from_metadata(
		__DIR__ . '/shortcode',
		array(
			'render_callback' => 'render_block_core_shortcode',
=======
	$path     = __DIR__ . '/shortcode/block.json';
	$metadata = json_decode( file_get_contents( $path ), true );
	register_block_type(
		$metadata['name'],
		array_merge(
			$metadata,
			array(
				'render_callback' => 'render_block_core_shortcode',
			)
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		)
	);
}
add_action( 'init', 'register_block_core_shortcode' );
