/**
 * Interactions used by the Site Health modules in WordPress.
 *
 * @output wp-admin/js/site-health.js
 */

/* global ajaxurl, ClipboardJS, SiteHealth, wp */

jQuery( document ).ready( function( $ ) {

	var __ = wp.i18n.__,
		_n = wp.i18n._n,
<<<<<<< HEAD
		sprintf = wp.i18n.sprintf,
		data,
		clipboard = new ClipboardJS( '.site-health-copy-buttons .copy-button' ),
		isDebugTab = $( '.health-check-body.health-check-debug-tab' ).length,
		pathsSizesSection = $( '#health-check-accordion-block-wp-paths-sizes' ),
		successTimeout;

	// Debug information copy section.
	clipboard.on( 'success', function( e ) {
		var triggerElement = $( e.trigger ),
			successElement = $( '.success', triggerElement.closest( 'div' ) );

		// Clear the selection and move focus back to the trigger.
		e.clearSelection();
		// Handle ClipboardJS focus bug, see https://github.com/zenorocha/clipboard.js/issues/680
		triggerElement.focus();

		// Show success visual feedback.
		clearTimeout( successTimeout );
		successElement.removeClass( 'hidden' );

		// Hide success visual feedback after 3 seconds since last success.
		successTimeout = setTimeout( function() {
			successElement.addClass( 'hidden' );
			// Remove the visually hidden textarea so that it isn't perceived by assistive technologies.
			if ( clipboard.clipboardAction.fakeElem && clipboard.clipboardAction.removeFake ) {
				clipboard.clipboardAction.removeFake();
			}
		}, 3000 );

		// Handle success audible feedback.
		wp.a11y.speak( __( 'Site information has been copied to your clipboard.' ) );
=======
		sprintf = wp.i18n.sprintf;

	var data;
	var clipboard = new ClipboardJS( '.site-health-copy-buttons .copy-button' );
	var isDebugTab = $( '.health-check-body.health-check-debug-tab' ).length;
	var pathsSizesSection = $( '#health-check-accordion-block-wp-paths-sizes' );

	// Debug information copy section.
	clipboard.on( 'success', function( e ) {
		var $wrapper = $( e.trigger ).closest( 'div' );
		$( '.success', $wrapper ).addClass( 'visible' );

		wp.a11y.speak( __( 'Site information has been added to your clipboard.' ) );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	} );

	// Accordion handling in various areas.
	$( '.health-check-accordion' ).on( 'click', '.health-check-accordion-trigger', function() {
		var isExpanded = ( 'true' === $( this ).attr( 'aria-expanded' ) );

		if ( isExpanded ) {
			$( this ).attr( 'aria-expanded', 'false' );
			$( '#' + $( this ).attr( 'aria-controls' ) ).attr( 'hidden', true );
		} else {
			$( this ).attr( 'aria-expanded', 'true' );
			$( '#' + $( this ).attr( 'aria-controls' ) ).attr( 'hidden', false );
		}
	} );

	// Site Health test handling.

	$( '.site-health-view-passed' ).on( 'click', function() {
		var goodIssuesWrapper = $( '#health-check-issues-good' );

		goodIssuesWrapper.toggleClass( 'hidden' );
		$( this ).attr( 'aria-expanded', ! goodIssuesWrapper.hasClass( 'hidden' ) );
	} );

	/**
<<<<<<< HEAD
	 * Appends a new issue to the issue list.
=======
	 * Append a new issue to the issue list.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	 *
	 * @since 5.2.0
	 *
	 * @param {Object} issue The issue data.
	 */
<<<<<<< HEAD
	function appendIssue( issue ) {
=======
	function AppendIssue( issue ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		var template = wp.template( 'health-check-issue' ),
			issueWrapper = $( '#health-check-issues-' + issue.status ),
			heading,
			count;
<<<<<<< HEAD
		
=======

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		SiteHealth.site_status.issues[ issue.status ]++;

		count = SiteHealth.site_status.issues[ issue.status ];

		if ( 'critical' === issue.status ) {
<<<<<<< HEAD
			heading = sprintf(
				_n( '%s critical issue', '%s critical issues', count ),
				'<span class="issue-count">' + count + '</span>'
			);
		} else if ( 'recommended' === issue.status ) {
			heading = sprintf(
				_n( '%s recommended improvement', '%s recommended improvements', count ),
				'<span class="issue-count">' + count + '</span>'
			);
		} else if ( 'good' === issue.status ) {
			heading = sprintf(
				_n( '%s item with no issues detected', '%s items with no issues detected', count ),
				'<span class="issue-count">' + count + '</span>'
			);
=======
			heading = sprintf( _n( '%s critical issue', '%s critical issues', count ), '<span class="issue-count">' + count + '</span>' );
		} else if ( 'recommended' === issue.status ) {
			heading = sprintf( _n( '%s recommended improvement', '%s recommended improvements', count ), '<span class="issue-count">' + count + '</span>' );
		} else if ( 'good' === issue.status ) {
			heading = sprintf( _n( '%s item with no issues detected', '%s items with no issues detected', count ), '<span class="issue-count">' + count + '</span>' );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		}

		if ( heading ) {
			$( '.site-health-issue-count-title', issueWrapper ).html( heading );
		}

		$( '.issues', '#health-check-issues-' + issue.status ).append( template( issue ) );
	}

	/**
<<<<<<< HEAD
	 * Updates site health status indicator as asynchronous tests are run and returned.
	 *
	 * @since 5.2.0
	 */
	function recalculateProgression() {
=======
	 * Update site health status indicator as asynchronous tests are run and returned.
	 *
	 * @since 5.2.0
	 */
	function RecalculateProgression() {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		var r, c, pct;
		var $progress = $( '.site-health-progress' );
		var $wrapper = $progress.closest( '.site-health-progress-wrapper' );
		var $progressLabel = $( '.site-health-progress-label', $wrapper );
		var $circle = $( '.site-health-progress svg #bar' );
<<<<<<< HEAD
		var totalTests = parseInt( SiteHealth.site_status.issues.good, 0 ) +
				parseInt( SiteHealth.site_status.issues.recommended, 0 ) +
				( parseInt( SiteHealth.site_status.issues.critical, 0 ) * 1.5 );
		var failedTests = ( parseInt( SiteHealth.site_status.issues.recommended, 0 ) * 0.5 ) +
				( parseInt( SiteHealth.site_status.issues.critical, 0 ) * 1.5 );
=======
		var totalTests = parseInt( SiteHealth.site_status.issues.good, 0 ) + parseInt( SiteHealth.site_status.issues.recommended, 0 ) + ( parseInt( SiteHealth.site_status.issues.critical, 0 ) * 1.5 );
		var failedTests = ( parseInt( SiteHealth.site_status.issues.recommended, 0 ) * 0.5 ) + ( parseInt( SiteHealth.site_status.issues.critical, 0 ) * 1.5 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		var val = 100 - Math.ceil( ( failedTests / totalTests ) * 100 );

		if ( 0 === totalTests ) {
			$progress.addClass( 'hidden' );
			return;
		}

		$wrapper.removeClass( 'loading' );

		r = $circle.attr( 'r' );
		c = Math.PI * ( r * 2 );

		if ( 0 > val ) {
			val = 0;
		}
		if ( 100 < val ) {
			val = 100;
		}

		pct = ( ( 100 - val ) / 100 ) * c;

		$circle.css( { strokeDashoffset: pct } );

		if ( 1 > parseInt( SiteHealth.site_status.issues.critical, 0 ) ) {
			$( '#health-check-issues-critical' ).addClass( 'hidden' );
		}

		if ( 1 > parseInt( SiteHealth.site_status.issues.recommended, 0 ) ) {
			$( '#health-check-issues-recommended' ).addClass( 'hidden' );
		}

		if ( 80 <= val && 0 === parseInt( SiteHealth.site_status.issues.critical, 0 ) ) {
			$wrapper.addClass( 'green' ).removeClass( 'orange' );

			$progressLabel.text( __( 'Good' ) );
			wp.a11y.speak( __( 'All site health tests have finished running. Your site is looking good, and the results are now available on the page.' ) );
		} else {
			$wrapper.addClass( 'orange' ).removeClass( 'green' );

			$progressLabel.text( __( 'Should be improved' ) );
			wp.a11y.speak( __( 'All site health tests have finished running. There are items that should be addressed, and the results are now available on the page.' ) );
		}

		if ( ! isDebugTab ) {
			$.post(
				ajaxurl,
				{
					'action': 'health-check-site-status-result',
					'_wpnonce': SiteHealth.nonce.site_status_result,
					'counts': SiteHealth.site_status.issues
				}
			);

			if ( 100 === val ) {
				$( '.site-status-all-clear' ).removeClass( 'hide' );
				$( '.site-status-has-issues' ).addClass( 'hide' );
			}
		}
	}

	/**
<<<<<<< HEAD
	 * Queues the next asynchronous test when we're ready to run it.
=======
	 * Queue the next asynchronous test when we're ready to run it.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	 *
	 * @since 5.2.0
	 */
	function maybeRunNextAsyncTest() {
		var doCalculation = true;

		if ( 1 <= SiteHealth.site_status.async.length ) {
			$.each( SiteHealth.site_status.async, function() {
				var data = {
					'action': 'health-check-' + this.test.replace( '_', '-' ),
					'_wpnonce': SiteHealth.nonce.site_status
				};

				if ( this.completed ) {
					return true;
				}

				doCalculation = false;

				this.completed = true;

				$.post(
					ajaxurl,
					data,
					function( response ) {
						/** This filter is documented in wp-admin/includes/class-wp-site-health.php */
<<<<<<< HEAD
						appendIssue( wp.hooks.applyFilters( 'site_status_test_result', response.data ) );
=======
						AppendIssue( wp.hooks.applyFilters( 'site_status_test_result', response.data ) );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
						maybeRunNextAsyncTest();
					}
				);

				return false;
			} );
		}

		if ( doCalculation ) {
<<<<<<< HEAD
			recalculateProgression();
=======
			RecalculateProgression();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		}
	}

	if ( 'undefined' !== typeof SiteHealth && ! isDebugTab ) {
		if ( 0 === SiteHealth.site_status.direct.length && 0 === SiteHealth.site_status.async.length ) {
<<<<<<< HEAD
			recalculateProgression();
=======
			RecalculateProgression();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		} else {
			SiteHealth.site_status.issues = {
				'good': 0,
				'recommended': 0,
				'critical': 0
			};
		}

		if ( 0 < SiteHealth.site_status.direct.length ) {
			$.each( SiteHealth.site_status.direct, function() {
<<<<<<< HEAD
				appendIssue( this );
=======
				AppendIssue( this );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			} );
		}

		if ( 0 < SiteHealth.site_status.async.length ) {
			data = {
				'action': 'health-check-' + SiteHealth.site_status.async[0].test.replace( '_', '-' ),
				'_wpnonce': SiteHealth.nonce.site_status
			};

			SiteHealth.site_status.async[0].completed = true;

			$.post(
				ajaxurl,
				data,
				function( response ) {
<<<<<<< HEAD
					appendIssue( response.data );
=======
					AppendIssue( response.data );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					maybeRunNextAsyncTest();
				}
			);
		} else {
<<<<<<< HEAD
			recalculateProgression();
=======
			RecalculateProgression();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		}
	}

	function getDirectorySizes() {
		var data = {
			action: 'health-check-get-sizes',
			_wpnonce: SiteHealth.nonce.site_status_result
		};

		var timestamp = ( new Date().getTime() );

		// After 3 seconds announce that we're still waiting for directory sizes.
		var timeout = window.setTimeout( function() {
			wp.a11y.speak( __( 'Please wait...' ) );
		}, 3000 );

		$.post( {
			type: 'POST',
			url: ajaxurl,
			data: data,
			dataType: 'json'
		} ).done( function( response ) {
			updateDirSizes( response.data || {} );
		} ).always( function() {
			var delay = ( new Date().getTime() ) - timestamp;

			$( '.health-check-wp-paths-sizes.spinner' ).css( 'visibility', 'hidden' );
<<<<<<< HEAD
			recalculateProgression();
=======
			RecalculateProgression();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

			if ( delay > 3000  ) {
				/*
				 * We have announced that we're waiting.
				 * Announce that we're ready after giving at least 3 seconds
				 * for the first announcement to be read out, or the two may collide.
				 */
				if ( delay > 6000 ) {
					delay = 0;
				} else {
					delay = 6500 - delay;
				}

				window.setTimeout( function() {
					wp.a11y.speak( __( 'All site health tests have finished running.' ) );
				}, delay );
			} else {
				// Cancel the announcement.
				window.clearTimeout( timeout );
			}

			$( document ).trigger( 'site-health-info-dirsizes-done' );
		} );
	}

	function updateDirSizes( data ) {
		var copyButton = $( 'button.button.copy-button' );
		var clipboardText = copyButton.attr( 'data-clipboard-text' );

		$.each( data, function( name, value ) {
			var text = value.debug || value.size;

			if ( typeof text !== 'undefined' ) {
				clipboardText = clipboardText.replace( name + ': loading...', name + ': ' + text );
			}
		} );

		copyButton.attr( 'data-clipboard-text', clipboardText );

		pathsSizesSection.find( 'td[class]' ).each( function( i, element ) {
			var td = $( element );
			var name = td.attr( 'class' );

			if ( data.hasOwnProperty( name ) && data[ name ].size ) {
				td.text( data[ name ].size );
			}
		} );
	}

	if ( isDebugTab ) {
		if ( pathsSizesSection.length ) {
			getDirectorySizes();
		} else {
<<<<<<< HEAD
			recalculateProgression();
=======
			RecalculateProgression();
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		}
	}
} );
