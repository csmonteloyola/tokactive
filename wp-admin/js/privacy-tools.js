/**
 * Interactions used by the User Privacy tools in WordPress.
 *
 * @output wp-admin/js/privacy-tools.js
 */

// Privacy request action handling.
jQuery( document ).ready( function( $ ) {
<<<<<<< HEAD
	var __ = wp.i18n.__,
		copiedNoticeTimeout;
=======
	var strings = window.privacyToolsL10n || {};
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

	function setActionState( $action, state ) {
		$action.children().addClass( 'hidden' );
		$action.children( '.' + state ).removeClass( 'hidden' );
	}

	function clearResultsAfterRow( $requestRow ) {
		$requestRow.removeClass( 'has-request-results' );

		if ( $requestRow.next().hasClass( 'request-results' ) ) {
			$requestRow.next().remove();
		}
	}

	function appendResultsAfterRow( $requestRow, classes, summaryMessage, additionalMessages ) {
		var itemList = '',
			resultRowClasses = 'request-results';

		clearResultsAfterRow( $requestRow );

		if ( additionalMessages.length ) {
			$.each( additionalMessages, function( index, value ) {
				itemList = itemList + '<li>' + value + '</li>';
			});
			itemList = '<ul>' + itemList + '</ul>';
		}

		$requestRow.addClass( 'has-request-results' );

		if ( $requestRow.hasClass( 'status-request-confirmed' ) ) {
			resultRowClasses = resultRowClasses + ' status-request-confirmed';
		}

		if ( $requestRow.hasClass( 'status-request-failed' ) ) {
			resultRowClasses = resultRowClasses + ' status-request-failed';
		}

		$requestRow.after( function() {
			return '<tr class="' + resultRowClasses + '"><th colspan="5">' +
				'<div class="notice inline notice-alt ' + classes + '">' +
				'<p>' + summaryMessage + '</p>' +
				itemList +
				'</div>' +
				'</td>' +
				'</tr>';
		});
	}

	$( '.export-personal-data-handle' ).click( function( event ) {
		var $this          = $( this ),
			$action        = $this.parents( '.export-personal-data' ),
			$requestRow    = $this.parents( 'tr' ),
			$progress      = $requestRow.find( '.export-progress' ),
			$rowActions    = $this.parents( '.row-actions' ),
			requestID      = $action.data( 'request-id' ),
			nonce          = $action.data( 'nonce' ),
			exportersCount = $action.data( 'exporters-count' ),
			sendAsEmail    = $action.data( 'send-as-email' ) ? true : false;

		event.preventDefault();
		event.stopPropagation();

		$rowActions.addClass( 'processing' );

		$action.blur();
		clearResultsAfterRow( $requestRow );
		setExportProgress( 0 );

		function onExportDoneSuccess( zipUrl ) {
<<<<<<< HEAD
			var summaryMessage = __( 'The personal data export link for this user was sent.' );
=======
			var summaryMessage = strings.emailSent;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

			setActionState( $action, 'export-personal-data-success' );

			appendResultsAfterRow( $requestRow, 'notice-success', summaryMessage, [] );

			if ( 'undefined' !== typeof zipUrl ) {
				window.location = zipUrl;
			} else if ( ! sendAsEmail ) {
<<<<<<< HEAD
				onExportFailure( __( 'No personal data export file was generated.' ) );
			}

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onExportFailure( errorMessage ) {
			var summaryMessage = __( 'An error occurred while attempting to export personal data.' );

			setActionState( $action, 'export-personal-data-failed' );

			if ( errorMessage ) {
				appendResultsAfterRow( $requestRow, 'notice-error', summaryMessage, [ errorMessage ] );
			}

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setExportProgress( exporterIndex ) {
			var progress       = ( exportersCount > 0 ? exporterIndex / exportersCount : 0 ),
				progressString = Math.round( progress * 100 ).toString() + '%';

=======
				onExportFailure( strings.noExportFile );
			}

			setTimeout( function(){ $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onExportFailure( errorMessage ) {
			setActionState( $action, 'export-personal-data-failed' );
			if ( errorMessage ) {
				appendResultsAfterRow( $requestRow, 'notice-error', strings.exportError, [ errorMessage ] );
			}

			setTimeout( function(){ $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setExportProgress( exporterIndex ) {
			var progress       = ( exportersCount > 0 ? exporterIndex / exportersCount : 0 );
			var progressString = Math.round( progress * 100 ).toString() + '%';
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			$progress.html( progressString );
		}

		function doNextExport( exporterIndex, pageIndex ) {
			$.ajax(
				{
					url: window.ajaxurl,
					data: {
						action: 'wp-privacy-export-personal-data',
						exporter: exporterIndex,
						id: requestID,
						page: pageIndex,
						security: nonce,
						sendAsEmail: sendAsEmail
					},
					method: 'post'
				}
			).done( function( response ) {
				var responseData = response.data;

				if ( ! response.success ) {
					// e.g. invalid request ID.
<<<<<<< HEAD
					setTimeout( function() { onExportFailure( response.data ); }, 500 );
=======
					setTimeout( function(){ onExportFailure( response.data ); }, 500 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					return;
				}

				if ( ! responseData.done ) {
					setTimeout( doNextExport( exporterIndex, pageIndex + 1 ) );
				} else {
					setExportProgress( exporterIndex );
					if ( exporterIndex < exportersCount ) {
						setTimeout( doNextExport( exporterIndex + 1, 1 ) );
					} else {
<<<<<<< HEAD
						setTimeout( function() { onExportDoneSuccess( responseData.url ); }, 500 );
=======
						setTimeout( function(){ onExportDoneSuccess( responseData.url ); }, 500 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					}
				}
			}).fail( function( jqxhr, textStatus, error ) {
				// e.g. Nonce failure.
<<<<<<< HEAD
				setTimeout( function() { onExportFailure( error ); }, 500 );
=======
				setTimeout( function(){ onExportFailure( error ); }, 500 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			});
		}

		// And now, let's begin.
		setActionState( $action, 'export-personal-data-processing' );
		doNextExport( 1, 1 );
	});

	$( '.remove-personal-data-handle' ).click( function( event ) {
		var $this         = $( this ),
			$action       = $this.parents( '.remove-personal-data' ),
			$requestRow   = $this.parents( 'tr' ),
			$progress     = $requestRow.find( '.erasure-progress' ),
			$rowActions   = $this.parents( '.row-actions' ),
			requestID     = $action.data( 'request-id' ),
			nonce         = $action.data( 'nonce' ),
			erasersCount  = $action.data( 'erasers-count' ),
			hasRemoved    = false,
			hasRetained   = false,
			messages      = [];

		event.preventDefault();
		event.stopPropagation();

		$rowActions.addClass( 'processing' );

		$action.blur();
		clearResultsAfterRow( $requestRow );
		setErasureProgress( 0 );

		function onErasureDoneSuccess() {
<<<<<<< HEAD
			var summaryMessage = __( 'No personal data was found for this user.' ),
				classes = 'notice-success';
=======
			var summaryMessage = strings.noDataFound;
			var classes = 'notice-success';
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

			setActionState( $action, 'remove-personal-data-success' );

			if ( false === hasRemoved ) {
				if ( false === hasRetained ) {
<<<<<<< HEAD
					summaryMessage = __( 'No personal data was found for this user.' );
				} else {
					summaryMessage = __( 'Personal data was found for this user but was not erased.' );
=======
					summaryMessage = strings.noDataFound;
				} else {
					summaryMessage = strings.noneRemoved;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					classes = 'notice-warning';
				}
			} else {
				if ( false === hasRetained ) {
<<<<<<< HEAD
					summaryMessage = __( 'All of the personal data found for this user was erased.' );
				} else {
					summaryMessage = __( 'Personal data was found for this user but some of the personal data found was not erased.' );
=======
					summaryMessage = strings.foundAndRemoved;
				} else {
					summaryMessage = strings.someNotRemoved;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					classes = 'notice-warning';
				}
			}
			appendResultsAfterRow( $requestRow, classes, summaryMessage, messages );

<<<<<<< HEAD
			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onErasureFailure() {
			var summaryMessage = __( 'An error occurred while attempting to find and erase personal data.' );

			setActionState( $action, 'remove-personal-data-failed' );

			appendResultsAfterRow( $requestRow, 'notice-error', summaryMessage, [] );

			setTimeout( function() { $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setErasureProgress( eraserIndex ) {
			var progress       = ( erasersCount > 0 ? eraserIndex / erasersCount : 0 ),
				progressString = Math.round( progress * 100 ).toString() + '%';

=======
			setTimeout( function(){ $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function onErasureFailure() {
			setActionState( $action, 'remove-personal-data-failed' );
			appendResultsAfterRow( $requestRow, 'notice-error', strings.removalError, [] );

			setTimeout( function(){ $rowActions.removeClass( 'processing' ); }, 500 );
		}

		function setErasureProgress( eraserIndex ) {
			var progress       = ( erasersCount > 0 ? eraserIndex / erasersCount : 0 );
			var progressString = Math.round( progress * 100 ).toString() + '%';
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			$progress.html( progressString );
		}

		function doNextErasure( eraserIndex, pageIndex ) {
			$.ajax({
				url: window.ajaxurl,
				data: {
					action: 'wp-privacy-erase-personal-data',
					eraser: eraserIndex,
					id: requestID,
					page: pageIndex,
					security: nonce
				},
				method: 'post'
			}).done( function( response ) {
				var responseData = response.data;

				if ( ! response.success ) {
<<<<<<< HEAD
					setTimeout( function() { onErasureFailure(); }, 500 );
=======
					setTimeout( function(){ onErasureFailure(); }, 500 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					return;
				}
				if ( responseData.items_removed ) {
					hasRemoved = hasRemoved || responseData.items_removed;
				}
				if ( responseData.items_retained ) {
					hasRetained = hasRetained || responseData.items_retained;
				}
				if ( responseData.messages ) {
					messages = messages.concat( responseData.messages );
				}
				if ( ! responseData.done ) {
					setTimeout( doNextErasure( eraserIndex, pageIndex + 1 ) );
				} else {
					setErasureProgress( eraserIndex );
					if ( eraserIndex < erasersCount ) {
						setTimeout( doNextErasure( eraserIndex + 1, 1 ) );
					} else {
<<<<<<< HEAD
						setTimeout( function() { onErasureDoneSuccess(); }, 500 );
					}
				}
			}).fail( function() {
				setTimeout( function() { onErasureFailure(); }, 500 );
=======
						setTimeout( function(){ onErasureDoneSuccess(); }, 500 );
					}
				}
			}).fail( function() {
				setTimeout( function(){ onErasureFailure(); }, 500 );
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			});
		}

		// And now, let's begin.
		setActionState( $action, 'remove-personal-data-processing' );

		doNextErasure( 1, 1 );
	});

<<<<<<< HEAD
	// Privacy Policy page, copy action.
	$( document ).on( 'click', function( event ) {
		var $parent,
			$container,
			range,
			$target = $( event.target ),
			copiedNotice = $target.siblings( '.success' );

		clearTimeout( copiedNoticeTimeout );
=======
	// Privacy policy page, copy button.
	$( document ).on( 'click', function( event ) {
		var $target = $( event.target );
		var $parent, $container, range;
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

		if ( $target.is( 'button.privacy-text-copy' ) ) {
			$parent = $target.parent().parent();
			$container = $parent.find( 'div.wp-suggested-text' );

			if ( ! $container.length ) {
				$container = $parent.find( 'div.policy-text' );
			}

			if ( $container.length ) {
				try {
					var documentPosition = document.documentElement.scrollTop,
						bodyPosition     = document.body.scrollTop;

<<<<<<< HEAD
					// Setup copy.
					window.getSelection().removeAllRanges();

					// Hide tutorial content to remove from copied content.
					range = document.createRange();
					$container.addClass( 'hide-privacy-policy-tutorial' );

					// Copy action.
=======
					window.getSelection().removeAllRanges();
					range = document.createRange();
					$container.addClass( 'hide-privacy-policy-tutorial' );

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					range.selectNodeContents( $container[0] );
					window.getSelection().addRange( range );
					document.execCommand( 'copy' );

<<<<<<< HEAD
					// Reset section.
					$container.removeClass( 'hide-privacy-policy-tutorial' );
					window.getSelection().removeAllRanges();

					// Return scroll position - see #49540.
=======
					$container.removeClass( 'hide-privacy-policy-tutorial' );
					window.getSelection().removeAllRanges();

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					if ( documentPosition > 0 && documentPosition !== document.documentElement.scrollTop ) {
						document.documentElement.scrollTop = documentPosition;
					} else if ( bodyPosition > 0 && bodyPosition !== document.body.scrollTop ) {
						document.body.scrollTop = bodyPosition;
					}
<<<<<<< HEAD

					// Display and speak notice to indicate action complete.
					copiedNotice.addClass( 'visible' );
					wp.a11y.speak( __( 'The section has been copied to your clipboard.' ) );

					// Delay notice dismissal.
					copiedNoticeTimeout = setTimeout( function() {
						copiedNotice.removeClass( 'visible' );
					}, 3000 );
=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
				} catch ( er ) {}
			}
		}
	});
});
<<<<<<< HEAD
=======

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
