<?php
/*
Plugin Name: Vue WordPress Plugin
Description: Use the [wp-vue] shortcode to display the plugin
Version: 0.0.1
Author: Gustavo Gomez
Author URI: https://github.com/GustavoGomez092
*/

class WpVue {

protected $plugin_options_page = '';

/**
* Class constructor
*/
public function __construct() {
require('plugin_options.php');
}

/**
* Initialize hooks.
*/
public function init() {

}
}

function add_type_attribute($tag, $handle, $src)
{
    // change the script tag by adding type="module" and return it.
    if ($handle  === 'wp-vue-plugin-dev' || $handle  === 'wp-vue-plugin-prod') {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
        return $tag;
    }
    // if not your script, do nothing and return original $tag
    return $tag;
}

$wp_vue = new WpVue();
$wp_vue->init();

function plugin_shortcode( $atts ) {
$handle = 'wp-vue-plugin-';

add_filter('script_loader_tag', 'add_type_attribute', 10, 3);

// enqueue development or production Vue code
if(file_exists(dirname(__FILE__) . "/dist/vue-wp.js")) {
$handle .= 'prod';
wp_enqueue_script( $handle, plugins_url( "/dist/vue-wp.js", __FILE__ ), ['wp-element'], '0.1', true );
wp_enqueue_style( $handle, plugins_url( "/dist/style.css", __FILE__ ), false, '0.1', 'all' );
} else {
$handle .= 'dev';
wp_enqueue_script( $handle, 'http://localhost:5173/src/main.js', ['wp-element'], '0.1', true );

}
return "<div id='wp-vue'></div>";
}

add_shortcode( 'wp-vue', 'plugin_shortcode' );