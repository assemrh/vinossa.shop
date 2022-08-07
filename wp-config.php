<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shop_vinossa' );

/** Database username */
define( 'DB_USER', 'shop_vinossa' );

/** Database password */
define( 'DB_PASSWORD', '^Ap*Gq2v9Hvj8#12' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '+3 @H4y3#pmmG@?:{O).tw^}<1dgtx8I_g%qw&m6M`}cS5{a=G|,7u)c,Mo`IifC' );
define( 'SECURE_AUTH_KEY',  'Y-$c? Y%N<k`e8l_{qnYPi:D;Zma1$>VR~X ;(zMOU4#UxM!T54A?%l?(Tz0-E>U' );
define( 'LOGGED_IN_KEY',    'hkYFSHyAA,AS:>{rJwp(bIWba4f7h-C)$Yz_xo.d,ZeB3,x/f@L%7d~Rv9s1K?w}' );
define( 'NONCE_KEY',        'x~*W7DCE~F*Naq4u$@%1+FKT[r>E/URnB<$mfw)K_Yi2u=vk(.6`nW7?$;BB*/D=' );
define( 'AUTH_SALT',        'Ld55hM;%g}_G{3cKDPNG#l]Th_A|i$i{%cgouwKF|9TYmMaP>&qbUdMDN!2t+^yT' );
define( 'SECURE_AUTH_SALT', 'U^/ri7trHE_<,G~DmJK@mAFmrL=VBTagGWs{0s-)B(1*Ho=3B`hQ;+%ou)<:eb_?' );
define( 'LOGGED_IN_SALT',   '1|gOPPg(5]~(5 JoO/N934D?$HGW)mQm%eb[e!ECQ1pJ-4S[P_9s*]6!RZc;/y%O' );
define( 'NONCE_SALT',       '+gp&:w2sscW[f[Lq8MK1iI;Cuw5K{~ZV)}xm}L^XpM/ef%pA$8aZW%N9E+U[T>,0' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'vin_';

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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
