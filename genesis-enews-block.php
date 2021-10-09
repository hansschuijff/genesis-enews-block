<?php
/**
 * Genesis eNews Block
 *
 * @wordpress-plugin
 * Plugin Name:       Genesis eNews Block
 * Plugin URI:        https://github.com/hansschuijff/genesis-enews-block
 * Description:       A gutenberg block version of the genesis eNews Widget.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Hans Schuijff
 * Author URI:        https://dewitteprins.nl
 * Text Domain:       genesis-enews-block
 * License:           GPL-2.0
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package           genesis-enews-block
 * @author            hansschuijff
 * @copyright         2021 De Witte Prins
 * @license           GPL-2.0
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_genesis_enews_block_block_init() {
	wp_set_script_translations( 'genesis-enews-block-script', 'genesis-enews-block', plugin_dir_path( __FILE__ ) . 'languages' );
	register_block_type( __DIR__ );

}
add_action( 'init', 'create_block_genesis_enews_block_block_init' );
