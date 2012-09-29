<?php
/**
 * Admin Reports Page
 *
 * @package     Easy Digital Downloads
 * @subpackage  Admin Reports Page
 * @copyright   Copyright (c) 2012, Pippin Williamson
 * @license     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 * @since       1.0 
*/


/**
 * Reports Page
 *
 * Renders the reports page contents.
 *
 * @access      private
 * @since       1.0
 * @return      void
*/

function edd_reports_page() {
	global $edd_options;	
	$current_page = admin_url('edit.php?post_type=download&page=edd-reports');
	?>
	<div class="wrap">
		<h2><?php _e('Reports', 'edd'); ?></h2>
		<?php do_action('edd_reports_page_top'); ?>
		<?php do_action('edd_reports_page'); ?>
		<?php do_action('edd_reports_page_bottom'); ?>
		<p>
			<a class="button" href="<?php echo wp_nonce_url( add_query_arg( array( 'edd-action' => 'generate_pdf' ) ), 'edd_generate_pdf' ); ?>"><?php _e('Download Sales and Earnings PDF Report for all Products', 'edd'); ?></a>
			<a class="button" href="<?php echo wp_nonce_url( add_query_arg( array( 'edd-action' => 'email_export' ) ), 'edd_email_export' ); ?>"><?php _e('Download a CSV Customers List', 'edd'); ?></a>
		</p>
		<p><?php _e('Please Note: Transactions created while in test mode are not included on this page or in the PDF reports.', 'edd'); ?></p>
	</div><!--end wrap-->
	<?php
}