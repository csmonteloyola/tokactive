<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
/* define( 'DB_NAME', 'tokactiv' ); */
define( 'DB_NAME', 'y39e7llnfuselsl2' );

/** MySQL database username */
/* define( 'DB_USER', 'root' ); */
define( 'DB_USER', 'il5dkoopuz22tzy5' );

/** MySQL database password */
/* define( 'DB_PASSWORD', '' ); */
define( 'DB_PASSWORD', 'lk5ohsobrn1mygui' );

/** MySQL hostname */
/* define( 'DB_HOST', 'localhost' ); */
define( 'DB_HOST', 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'G~dd|:XEpV|P1gi]6+gn/?I?_txoykHnqMqaEd+}-OkrVUHz:l4pCSpN(}B>,7_o' );
define( 'SECURE_AUTH_KEY',  'ra-0Dc7s/, +9t6>N})a58@g|LdHFa(3E|mETkGc}YzLxC;><[l-^`nQcnkoVcKs' );
define( 'LOGGED_IN_KEY',    'Th7T+>mojf#+=[qi|I{5nO{E$P{UL+_9M/`Re{b{zgKR,,(iQ:f,2d%D!D{k^m.F' );
define( 'NONCE_KEY',        'Qvmqv?QT~_(`-_F+gVHmwuYc3e;C@9cPEz8Ah?<CQ)Eel1XW&!Ui5/jUjEwkNho)' );
define( 'AUTH_SALT',        'z+>.v5tOt5)PB%` ^FLDtm@2oL=XrIJkS3K($N3%TzTAB6dNeL$_JB3L)tmYm^rG' );
define( 'SECURE_AUTH_SALT', 'tMsl!0%?{KpTL;[jP?rJ%tGXv{}@IIv8%>va.0NbI<5bcVow+AU<iKE:.10~,~R(' );
define( 'LOGGED_IN_SALT',   '+Cfxg[ ;yl1RGYBE(_goA`FE+B;ff:5JW<&bx*E08~q(w-F% ,ufb^A}oAu2Iv$0' );
define( 'NONCE_SALT',       '[!2uT^.HZOt,KhwACXV`~&Yn.,=`uHXKe/W,H-xHIp$Z0kr06.6XhF^UE+;b[y_e' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
