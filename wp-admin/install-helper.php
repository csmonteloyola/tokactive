<?php
/**
 * Plugins may load this file to gain access to special helper functions for
 * plugin installation. This file is not included by WordPress and it is
 * recommended, to prevent fatal errors, that this file is included using
 * require_once.
 *
 * These functions are not optimized for speed, but they should only be used
 * once in a while, so speed shouldn't be a concern. If it is and you are
 * needing to use these functions a lot, you might experience time outs. If you
 * do, then it is advised to just write the SQL code yourself.
 *
 *     check_column( 'wp_links', 'link_description', 'mediumtext' );
 *     if ( check_column( $wpdb->comments, 'comment_author', 'tinytext' ) ) {
 *         echo "ok\n";
 *     }
 *
 *     $error_count = 0;
 *     $tablename = $wpdb->links;
 *     // Check the column.
 *     if ( ! check_column( $wpdb->links, 'link_description', 'varchar( 255 )' ) ) {
 *         $ddl = "ALTER TABLE $wpdb->links MODIFY COLUMN link_description varchar(255) NOT NULL DEFAULT '' ";
 *         $q = $wpdb->query( $ddl );
 *     }
 *
 *     if ( check_column( $wpdb->links, 'link_description', 'varchar( 255 )' ) ) {
 *         $res .= $tablename . ' - ok <br />';
 *     } else {
 *         $res .= 'There was a problem with ' . $tablename . '<br />';
 *         ++$error_count;
 *     }
 *
 * @package WordPress
 * @subpackage Plugin
 */

/** Load WordPress Bootstrap */
require_once dirname( __DIR__ ) . '/wp-load.php';

if ( ! function_exists( 'maybe_create_table' ) ) :
	/**
<<<<<<< HEAD
	 * Creates a table in the database if it doesn't already exist.
=======
	 * Create database table, if it doesn't already exist.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	 *
	 * @since 1.0.0
	 *
	 * @global wpdb $wpdb WordPress database abstraction object.
	 *
	 * @param string $table_name Database table name.
<<<<<<< HEAD
	 * @param string $create_ddl SQL statement to create table.
	 * @return bool True on success or if the table already exists. False on failure.
	 */
	function maybe_create_table( $table_name, $create_ddl ) {
		global $wpdb;

		foreach ( $wpdb->get_col( 'SHOW TABLES', 0 ) as $table ) {
			if ( $table === $table_name ) {
				return true;
			}
		}

=======
	 * @param string $create_ddl Create database table SQL.
	 * @return bool False on error, true if already exists or success.
	 */
	function maybe_create_table( $table_name, $create_ddl ) {
		global $wpdb;
		foreach ( $wpdb->get_col( 'SHOW TABLES', 0 ) as $table ) {
			if ( $table == $table_name ) {
				return true;
			}
		}
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		// Didn't find it, so try to create it.
		$wpdb->query( $create_ddl );

		// We cannot directly tell that whether this succeeded!
		foreach ( $wpdb->get_col( 'SHOW TABLES', 0 ) as $table ) {
<<<<<<< HEAD
			if ( $table === $table_name ) {
				return true;
			}
		}

=======
			if ( $table == $table_name ) {
				return true;
			}
		}
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		return false;
	}
endif;

if ( ! function_exists( 'maybe_add_column' ) ) :
	/**
<<<<<<< HEAD
	 * Adds column to database table, if it doesn't already exist.
=======
	 * Add column to database table, if column doesn't already exist in table.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	 *
	 * @since 1.0.0
	 *
	 * @global wpdb $wpdb WordPress database abstraction object.
	 *
<<<<<<< HEAD
	 * @param string $table_name  Database table name.
	 * @param string $column_name Table column name.
	 * @param string $create_ddl  SQL statement to add column.
	 * @return bool True on success or if the column already exists. False on failure.
	 */
	function maybe_add_column( $table_name, $column_name, $create_ddl ) {
		global $wpdb;

		foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
			if ( $column === $column_name ) {
=======
	 * @param string $table_name Database table name
	 * @param string $column_name Table column name
	 * @param string $create_ddl SQL to add column to table.
	 * @return bool False on failure. True, if already exists or was successful.
	 */
	function maybe_add_column( $table_name, $column_name, $create_ddl ) {
		global $wpdb;
		foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {

			if ( $column == $column_name ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
				return true;
			}
		}

		// Didn't find it, so try to create it.
		$wpdb->query( $create_ddl );

		// We cannot directly tell that whether this succeeded!
		foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
<<<<<<< HEAD
			if ( $column === $column_name ) {
				return true;
			}
		}

=======
			if ( $column == $column_name ) {
				return true;
			}
		}
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
		return false;
	}
endif;

/**
<<<<<<< HEAD
 * Drops column from database table, if it exists.
=======
 * Drop column from database table, if it exists.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * @since 1.0.0
 *
 * @global wpdb $wpdb WordPress database abstraction object.
 *
<<<<<<< HEAD
 * @param string $table_name  Database table name.
 * @param string $column_name Table column name.
 * @param string $drop_ddl    SQL statement to drop column.
 * @return bool True on success or if the column doesn't exist. False on failure.
 */
function maybe_drop_column( $table_name, $column_name, $drop_ddl ) {
	global $wpdb;

	foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
		if ( $column === $column_name ) {
=======
 * @param string $table_name Table name
 * @param string $column_name Column name
 * @param string $drop_ddl SQL statement to drop column.
 * @return bool True on success or if the column doesn't exist, false on failure.
 */
function maybe_drop_column( $table_name, $column_name, $drop_ddl ) {
	global $wpdb;
	foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
		if ( $column == $column_name ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c

			// Found it, so try to drop it.
			$wpdb->query( $drop_ddl );

			// We cannot directly tell that whether this succeeded!
			foreach ( $wpdb->get_col( "DESC $table_name", 0 ) as $column ) {
<<<<<<< HEAD
				if ( $column === $column_name ) {
=======
				if ( $column == $column_name ) {
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					return false;
				}
			}
		}
	}
<<<<<<< HEAD

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	// Else didn't find it.
	return true;
}

/**
<<<<<<< HEAD
 * Checks that database table column matches the criteria.
=======
 * Check column matches criteria.
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 *
 * Uses the SQL DESC for retrieving the table info for the column. It will help
 * understand the parameters, if you do more research on what column information
 * is returned by the SQL statement. Pass in null to skip checking that
 * criteria.
 *
 * Column names returned from DESC table are case sensitive and are listed:
 *      Field
 *      Type
 *      Null
 *      Key
 *      Default
 *      Extra
 *
 * @since 1.0.0
 *
 * @global wpdb $wpdb WordPress database abstraction object.
 *
<<<<<<< HEAD
 * @param string $table_name Database table name.
 * @param string $col_name   Table column name.
 * @param string $col_type   Table column type.
=======
 * @param string $table_name Table name
 * @param string $col_name   Column name
 * @param string $col_type   Column type
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
 * @param bool   $is_null    Optional. Check is null.
 * @param mixed  $key        Optional. Key info.
 * @param mixed  $default    Optional. Default value.
 * @param mixed  $extra      Optional. Extra value.
 * @return bool True, if matches. False, if not matching.
 */
function check_column( $table_name, $col_name, $col_type, $is_null = null, $key = null, $default = null, $extra = null ) {
	global $wpdb;
<<<<<<< HEAD

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	$diffs   = 0;
	$results = $wpdb->get_results( "DESC $table_name" );

	foreach ( $results as $row ) {

<<<<<<< HEAD
		if ( $row->Field === $col_name ) {

			// Got our column, check the params.
			if ( ( null !== $col_type ) && ( $row->Type !== $col_type ) ) {
				++$diffs;
			}
			if ( ( null !== $is_null ) && ( $row->Null !== $is_null ) ) {
				++$diffs;
			}
			if ( ( null !== $key ) && ( $row->Key !== $key ) ) {
				++$diffs;
			}
			if ( ( null !== $default ) && ( $row->Default !== $default ) ) {
				++$diffs;
			}
			if ( ( null !== $extra ) && ( $row->Extra !== $extra ) ) {
				++$diffs;
			}

			if ( $diffs > 0 ) {
				return false;
			}

			return true;
		} // End if found our column.
	}

=======
		if ( $row->Field == $col_name ) {

			// Got our column, check the params.
			if ( ( null != $col_type ) && ( $row->Type != $col_type ) ) {
				++$diffs;
			}
			if ( ( null != $is_null ) && ( $row->Null != $is_null ) ) {
				++$diffs;
			}
			if ( ( null != $key ) && ( $row->Key != $key ) ) {
				++$diffs;
			}
			if ( ( null != $default ) && ( $row->Default != $default ) ) {
				++$diffs;
			}
			if ( ( null != $extra ) && ( $row->Extra != $extra ) ) {
				++$diffs;
			}
			if ( $diffs > 0 ) {
				return false;
			}
			return true;
		} // End if found our column.
	}
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
	return false;
}
