/* global _ */

/**
 * Internal dependencies
 */
import './order-items';
import './order-adjustments';
import './order-amounts';
import './order-details';
import './list-table.js';

import { jQueryReady } from 'utils/jquery.js';

jQueryReady( () => {

	// "Validate" order form before submitting.
	// @todo move somewhere else?
	$( '#edd-add-order-form' ).on( 'submit', function() {
		$( '#publishing-action .spinner' ).css( 'visibility', 'visible' );
		$( '#edd-order-submit' ).prop( 'disabled', true );

		if ( $( '.orderitems tr.no-items' ).is( ':visible' ) ) {
			$( '#edd-add-order-no-items-error' ).slideDown();
		} else {
			$( '#edd-add-order-no-items-error' ).slideUp();
		}

		if ( $( '.order-customer-info' ).is( ':visible' ) ) {
			$( '#edd-add-order-customer-error' ).slideDown();
		} else {
			$( '#edd-add-order-customer-error' ).slideUp();
		}

		if ( $( '.notice:not(.updated)' ).is( ':visible' ) ) {
			$( '#publishing-action .spinner' ).css( 'visibility', 'hidden' );
			$( '#edd-order-submit' ).prop( 'disabled', false );
			return false;
		}
	} );

	/**
	 * Redirect to a specific order when clicking an Order "Number" column.
	 *
	 * @since 3.0
	 */
	( () => {
		const numberColumns = document.querySelectorAll( '#edd-payments-filter td.column-number' );

		_.each( numberColumns, ( column ) => {
			const viewLink = column.querySelector( '.row-title' );

			if ( ! viewLink ) {
				return;
			}

			/**
			 * Redirect to a specific order when the column is clicked.
			 *
			 * @param {Event} e Click event.
			 */
			column.addEventListener( 'click', ( e ) => {
				const {
					target: {
						tagName,
					}
				} = e;

				// Only continue through on the <td> or <strong> (status).
				if ( ! ( 'TD' === tagName || 'STRONG' === tagName ) ) {
					return;
				}

				window.location.href = viewLink.href;
			} );
		} );
	} ) ();

} );
