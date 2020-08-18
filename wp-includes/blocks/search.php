<?php
/**
 * Server-side rendering of the `core/search` block.
 *
 * @package WordPress
 */

/**
 * Dynamically renders the `core/search` block.
 *
 * @param array $attributes The block attributes.
 *
 * @return string The search block markup.
 */
function render_block_core_search( $attributes ) {
	static $instance_id = 0;

<<<<<<< HEAD
	// Older versions of the Search block defaulted the label and buttonText
	// attributes to `__( 'Search' )` meaning that many posts contain `<!--
	// wp:search /-->`. Support these by defaulting an undefined label and
	// buttonText to `__( 'Search' )`.
	$attributes = wp_parse_args(
		$attributes,
		array(
			'label'      => __( 'Search' ),
			'buttonText' => __( 'Search' ),
		)
	);

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	$input_id      = 'wp-block-search__input-' . ++$instance_id;
	$label_markup  = '';
	$button_markup = '';

	if ( ! empty( $attributes['label'] ) ) {
		$label_markup = sprintf(
			'<label for="%s" class="wp-block-search__label">%s</label>',
			$input_id,
			$attributes['label']
		);
	} else {
		$label_markup = sprintf(
			'<label for="%s" class="wp-block-search__label screen-reader-text">%s</label>',
			$input_id,
			__( 'Search' )
		);
	}

	$input_markup = sprintf(
		'<input type="search" id="%s" class="wp-block-search__input" name="s" value="%s" placeholder="%s" required />',
		$input_id,
		esc_attr( get_search_query() ),
		esc_attr( $attributes['placeholder'] )
	);

	if ( ! empty( $attributes['buttonText'] ) ) {
		$button_markup = sprintf(
			'<button type="submit" class="wp-block-search__button">%s</button>',
			$attributes['buttonText']
		);
	}

	$class = 'wp-block-search';
	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}
	if ( isset( $attributes['align'] ) ) {
		$class .= ' align' . $attributes['align'];
	}

	return sprintf(
		'<form class="%s" role="search" method="get" action="%s">%s</form>',
		esc_attr( $class ),
		esc_url( home_url( '/' ) ),
		$label_markup . $input_markup . $button_markup
	);
}

/**
 * Registers the `core/search` block on the server.
 */
function register_block_core_search() {
<<<<<<< HEAD
	register_block_type_from_metadata(
		__DIR__ . '/search',
		array(
=======
	register_block_type(
		'core/search',
		array(
			'attributes'      => array(
				'align'       => array(
					'type' => 'string',
					'enum' => array( 'left', 'center', 'right', 'wide', 'full' ),
				),
				'className'   => array(
					'type' => 'string',
				),
				'label'       => array(
					'type'    => 'string',
					'default' => __( 'Search' ),
				),
				'placeholder' => array(
					'type'    => 'string',
					'default' => '',
				),
				'buttonText'  => array(
					'type'    => 'string',
					'default' => __( 'Search' ),
				),
			),
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			'render_callback' => 'render_block_core_search',
		)
	);
}
add_action( 'init', 'register_block_core_search' );
