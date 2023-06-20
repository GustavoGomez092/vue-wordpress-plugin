<?php

class plugin_options {

  protected $plugin_options_page = '';

  /**
  * Initialize hooks.
  */
  public function init() {

    add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );
    add_action( 'admin_init', array( $this, 'register_plugin_settings' ) );
    add_action('admin_menu', array( $this, 'create_admin_menu_page' ) );
  }

  public function register_plugin_settings() {
      register_setting( 'wp-vue-settings-group', 'wp-vue-plugin' );
  }

  /**
  *
  * Create new plugin options page under the Settings menu.
  */
  public function create_admin_menu_page() {
    $this->plugin_options_page = add_menu_page('Plugin options', 'plugin options', 'manage_options', __FILE__, array( $this, 'render_plugin_options_page' ), 'dashicons-editor-table' );
  }

  public function render_plugin_options_page() {
    echo '<div id="wp-vue-options"></div>';
  }

  public function enqueue_admin_scripts($hook) {

    function add_type_attribute_admin($tag, $handle, $src)
      {
          // change the script tag by adding type="module" and return it.
          if ($handle  === 'wp-vue-plugin-options-dev') {
              $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
              return $tag;
          }
          // if not your script, do nothing and return original $tag
          return $tag;
      }

    // Are we on the plugin options page?
    if( $hook === $this->plugin_options_page ) {

      // add react and react-dom from core
      $dep = ['wp-element'];

      $handle = 'wp-vue-plugin-options-';

      add_filter('script_loader_tag', 'add_type_attribute_admin', 10, 3);

      if(file_exists(dirname(__FILE__) . "/dist/vue-wp.js")) {
        $handle .= 'prod';
        wp_enqueue_script( $handle, plugins_url( "/dist/vue-wp.js", __FILE__ ), ['wp-element'], '0.1', true );
        wp_enqueue_style( $handle, plugins_url( "/dist/style.css", __FILE__ ), false, '0.1', 'all' );
        } else {
        $handle .= 'dev';
        wp_enqueue_script( $handle, 'http://localhost:5173/src/main.js', ['wp-element'], '0.1', true );
        
        }
    }
  }
}

$plugin_options = new plugin_options();
$plugin_options->init();