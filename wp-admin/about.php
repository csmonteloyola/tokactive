<?php
/**
 * About This Version administration panel.
 *
 * @package WordPress
 * @subpackage Administration
 */

/** WordPress Administration Bootstrap */
require_once __DIR__ . '/admin.php';

/* translators: Page title of the About WordPress page in the admin. */
$title = _x( 'About', 'page title' );

list( $display_version ) = explode( '-', get_bloginfo( 'version' ) );

require_once ABSPATH . 'wp-admin/admin-header.php';
?>
	<div class="wrap about__container">

		<div class="about__header">
<<<<<<< HEAD
			<div class="about__header-text">
				<?php _e( 'Speed. Search. Security.' ); ?>
			</div>

=======
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			<div class="about__header-title">
				<p>
					<?php _e( 'WordPress' ); ?>
					<span><?php echo $display_version; ?></span>
				</p>
			</div>

<<<<<<< HEAD
=======
			<div class="about__header-text">
				<p>
					<?php _e( 'Building more with blocks, faster and easier.' ); ?>
				</p>
			</div>

>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			<nav class="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="<?php esc_attr_e( 'Secondary menu' ); ?>">
				<a href="about.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( 'What&#8217;s New' ); ?></a>
				<a href="credits.php" class="nav-tab"><?php _e( 'Credits' ); ?></a>
				<a href="freedoms.php" class="nav-tab"><?php _e( 'Freedoms' ); ?></a>
				<a href="privacy.php" class="nav-tab"><?php _e( 'Privacy' ); ?></a>
			</nav>
		</div>

<<<<<<< HEAD
		<div class="about__section is-feature has-subtle-background-color">
			<h1>
=======
		<div class="about__section is-feature has-accent-background-color">
			<h1><?php _e( 'Say hello to more and better.' ); ?></h1>

			<p><?php _e( 'More ways to make your pages come alive. With easier ways to get it all done and looking better than ever&mdash;and boosts in speed you can feel.' ); ?></p>
		</div>

		<hr />

		<div class="about__section changelog">
			<div class="column">
				<h2><?php _e( 'Maintenance and Security Releases' ); ?></h2>
				<p>
					<?php
					printf(
						/* translators: 1: WordPress version number, 2: plural number of bugs. More than one security issue. */
						_n(
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.',
							23
						),
						'5.4.2',
						number_format_i18n( 23 )
					);
					?>
					<?php
					printf(
						/* translators: %s: HelpHub URL */
						__( 'For more information, see <a href="%s">the release notes</a>.' ),
						sprintf(
							/* translators: %s: WordPress version */
							esc_url( __( 'https://wordpress.org/support/wordpress-version/version-%s/' ) ),
							sanitize_title( '5.4.2' )
						)
					);
					?>
				</p>
				<p>
					<?php
					printf(
						/* translators: 1: WordPress version number, 2: plural number of bugs. More than one security issue. */
						_n(
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
							'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.',
							11
						),
						'5.4.1',
						number_format_i18n( 11 )
					);
					?>
					<?php
					printf(
						/* translators: %s: HelpHub URL */
						__( 'For more information, see <a href="%s">the release notes</a>.' ),
						sprintf(
							/* translators: %s: WordPress version */
							esc_url( __( 'https://wordpress.org/support/wordpress-version/version-%s/' ) ),
							sanitize_title( '5.4.1' )
						)
					);
					?>
				</p>
			</div>
		</div>

		<hr />

		<div class="about__section has-2-columns has-subtle-background-color">
			<h2 class="is-section-header">
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
				<?php
				printf(
					/* translators: %s: The current WordPress version number. */
					__( 'Welcome to WordPress %s.' ),
					$display_version
				);
				?>
<<<<<<< HEAD
			</h1>
			<p>
				<?php
				printf(
					/* translators: %s: The current WordPress version number. */
					__( 'In WordPress %s, your site gets new power in three major areas: speed, search, and security.' ),
					$display_version
				);
				?>
			</p>
		</div>

		<hr />

		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _e( 'Speed' ); ?></h2>
				<p><strong><?php _e( 'Posts and pages feel faster, thanks to lazy-loaded images.' ); ?></strong></p>
				<p><?php _e( 'Images give your story a lot of impact, but they can sometimes make your site seem slow.' ); ?></p>
				<p><?php _e( 'In WordPress 5.5, images wait to load until they’re just about to scroll into view. The technical term is ‘lazy loading.’' ); ?></p>
				<p><?php _e( 'On mobile, lazy loading can also keep browsers from loading files meant for other devices. That can save your readers money on data — and help preserve battery life.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _ex( 'Search', 'sitemap' ); ?></h2>
				<p><strong><?php _e( 'Say hello to your new sitemap.' ); ?></strong></p>
				<p><?php _e( 'WordPress sites work well with search engines. ' ); ?></p>
				<p><?php _e( 'Now, by default, WordPress 5.5 includes an XML sitemap that helps search engines discover your most important pages from the very minute you go live.' ); ?></p>
				<p><?php _e( 'So more people will find your site sooner, giving you more time to engage, retain and convert them to subscribers, customers or whatever fits your definition of success.' ); ?></p>
=======
			</h2>
			<div class="column">
				<p>
					<?php _e( 'Every major release adds more to the block editor.' ); ?>
				</p>
				<p>
					<?php _e( 'More ways to make posts and pages come alive with your best images.' ); ?>
					<?php _e( 'More ways to bring your visitors in, and keep them engaged, with the richness of embedded media from the web&#8217;s top services.' ); ?>
				</p>
			</div>
			<div class="column">
				<p>
					<?php _e( 'More ways to make your vision real, and put blocks in the perfect place&mdash;even if a particular kind of block is new to you. More efficient processes.' ); ?>
				</p>
				<p>
					<?php _e( 'And more speed everywhere, so as you build sections or galleries, or just type in a line of prose, you can feel how much faster your work flows.' ); ?>
				</p>
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			</div>
		</div>

		<hr />

<<<<<<< HEAD
		<div class="about__section has-2-columns has-accent-background-color is-wider-right">
			<div class="column">
				<h2><?php _e( 'Security' ); ?></h2>
				<p><strong><?php _e( 'Auto-updates for Plugins and Themes' ); ?></strong></p>
				<p><?php _e( 'Now you can set plugins and themes to update automatically — or not! — in the WordPress admin. So you always know your site is running the latest code available.' ); ?></p>
				<p><?php _e( 'You can also turn auto-updates on or off for each plugin or theme you have installed — all on the same screens you’ve always used.' ); ?></p>
				<p><strong><?php _e( 'Update by uploading ZIP files' ); ?></strong></p>
				<p><?php _e( 'If updating plugins and themes manually is your thing, now that’s easier too — just upload a ZIP file.' ); ?></p>
			</div>
			<div class="column about__image is-vertically-aligned-center">
				<figure aria-labelledby="about-security" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/auto-updates-poster.png">
						<source src="https://s.w.org/images/core/5.5/auto-updates.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/auto-updates.webm" type="video/webm" />
					</video>
					<figcaption id="about-security" class="screen-reader-text"><?php _e( 'Video: Installed plugin screen, which shows a new column, Automatic Updates. In this column are buttons that say "Enable auto-updates". When clicked, the auto-updates feature is turned on for that plugin, and the button switches to say "Disable auto-updates".' ); ?></figcaption>
				</figure>
			</div>
		</div>

		<hr />

		<div class="about__section has-subtle-background-color">
			<div class="column">
				<h2><?php _e( 'Highlights from the block editor' ); ?></h2>
				<p><?php _e( 'Once again, the latest WordPress release packs a long list of exciting new features for the block editor. For example:' ); ?></p>
			</div>
		</div>
		<div class="about__section has-2-columns has-subtle-background-color">
			<div class="column about__image is-vertically-aligned-center">
				<figure aria-labelledby="about-block-pattern" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/block-patterns-poster.png">
						<source src="https://s.w.org/images/core/5.5/block-patterns.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/block-patterns.webm" type="video/webm" />
					</video>
					<figcaption id="about-block-pattern" class="screen-reader-text"><?php _e( 'Video: In the editor, the block inserter shows two tabs, Blocks and Patterns. The Patterns tab is selected. There are different block layouts in this tab. After scrolling through options including buttons and columns, a pattern called "Large header with a heading" is chosen. This adds a cover block, which is customized with a photo and the name of the WordPress 5.5 jazz musician.' ); ?></figcaption>
				</figure>
				<hr />
				<figure aria-labelledby="about-image-editor" class="about__image">
					<video controls poster="https://s.w.org/images/core/5.5/inline-image-editing-poster.png">
						<source src="https://s.w.org/images/core/5.5/inline-image-editing.mp4" type="video/mp4" />
						<source src="https://s.w.org/images/core/5.5/inline-image-editing-1.webm" type="video/webm" />
					</video>
					<figcaption id="about-image-editor" class="screen-reader-text"><?php _e( 'Video: An image is added with an image block. In the block toolbar, an icon called "Crop" is selected, which changes the toolbar to show image resizing tools. First, zoom is used to zoom into the center of the image. Next, aspect ratio is clicked. This shows a dropdown of common aspect ratios. Square is chosen, and the image is moved within the new square outline. The crop is completed by clicking "Apply."' ); ?></figcaption>
				</figure>
			</div>
			<div class="column">
				<h3><?php _e( 'Block patterns' ); ?></h3>
				<p><?php _e( 'New block patterns make it simple and fun to create complex, beautiful layouts, using combinations of text and media that you can mix and match to fit your story.' ); ?></p>
				<p><?php _e( 'You will also find block patterns in a wide variety of plugins and themes, with more added all the time. Pick any of them from a single place — just click and go!' ); ?></p>
				<h3><?php _e( 'Inline image editing' ); ?></h3>
				<p><?php _e( 'Crop, rotate, and zoom your photos right from the image block. If you spend a lot of time on images, this could save you hours!' ); ?></p>

				<h3><?php _e( 'The New Block Directory' ); ?></h3>
				<p><?php _e( 'Now it’s easier than ever to find the block you need. The new block directory is built right into the block editor, so you can install new block types to your site without ever leaving the editor.' ); ?></p>

				<h3><?php _e( 'And so much more.' ); ?></h3>
				<p><?php _e( 'The highlights above are a tiny fraction of the new block editor features you’ve just installed. Open the block editor and enjoy!' ); ?></p>
=======
		<div class="about__section has-2-columns">
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='500' height='500' viewbox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F3F4F5' d='M0 0h500v500H0z'/%3E%3Cpath d='M346.7 37.645s100.5-2.8 102.6 0c2.1 2.8 0 124.999 0 124.999l-106.9 2.8 4.3-127.8z' fill='%232CA8EB'/%3E%3Cpath d='M343.5 185.844s100.5-1.9 102.6 0c2.1 1.9 1.1 125.9 4.3 127.8 3.2 1.9-100.5 1.9-104.8 2.8-4.3.9-2.1-130.6-2.1-130.6z' fill='%237CAED2'/%3E%3Cpath d='M195.6 186.744s102.7 2.8 106.9 2.8c4.2 0 7.4 120.4 4.2 122.2-3.2 1.9-106.9 2.8-106.9 2.8s2.1-126.9-4.2-127.8z' fill='%2381A4D4'/%3E%3Cpath d='M152.8 192.344s2.1 124.1 4.3 126.9c2.1 2.7-109.1 1.8-109.1 1.8v-128.7h104.8z' fill='%235DC3D8'/%3E%3Cpath d='M152 464.544H56v-119.8l101-1.7s-8.9 118-5 121.5z' fill='%230574E2'/%3E%3Cpath d='M195 35.844h101.6s-8.6 119.4 0 125c8.6 5.6-101.6 3.7-101.6 3.7v-128.7z' fill='%23216BCE'/%3E%3Cpath d='M302.3 463.844s-102.9 2.8-105.1 0c-2.2-2.8 0-125 0-125l109.5-2.8-4.4 127.8z' fill='%231C99D1'/%3E%3Cpath d='M346.2 464.544s-2.1-124.1-4.3-126.9c-2.1-2.8 109.1-1.9 109.1-1.9v128.7H346.2v.1z' fill='%231B44DD'/%3E%3Cpath d='M50.2 35.844s100.5-1.9 102.6 0c2.1 1.9 1.1 125.9 4.3 127.8 3.2 1.9-100.5 1.9-104.8 2.8-4.3.9-2.1-130.6-2.1-130.6z' fill='%231B36BC'/%3E%3C/svg%3E" alt="" />
				</div>
			</div>
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Two new blocks. And better blocks overall.' ); ?></h2>
				<ul>
					<li><?php _e( 'Two brand-new blocks: Social Icons and Buttons make adding interactive features fast and easy.' ); ?></li>
					<li><?php _e( 'New ways with color: Gradients in the Buttons and Cover block, toolbar access to color options in Rich Text blocks, and for the first time, color options in the Group and Columns blocks.' ); ?></li>
					<li><?php _e( 'Guess a whole lot less! Version 5.4 streamlines the whole process for placing and replacing multimedia in every block. Now it works the same way in almost every block!' ); ?></li>
					<li><?php _e( 'And if you&#8217;ve ever thought your image in the Media+Text block should link to something else&mdash;perhaps a picture of a brochure should download that brochure as a document? Well, now it can.' ); ?></li>
				</ul>
			</div>
		</div>

		<div class="about__section has-2-columns">
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Cleaner UI, clearer navigation—and easier tabbing!' ); ?></h2>
				<ul>
					<li><?php _e( 'Clearer block navigation with block breadcrumbs. And easier selection once you get there.' ); ?></li>
					<li><?php _e( 'For when you need to navigate with the keyboard, better tabbing and focus. Plus, you can tab over to the sidebar of nearly any block.' ); ?></li>
					<li><?php _e( 'Speed! 14% faster loading of the editor, 51% faster time-to-type!' ); ?></li>
					<li><?php _e( 'Tips are gone. In their place, a Welcome Guide window you can bring up when you need it&mdash;and only when you need it&mdash;again and again.' ); ?></li>
					<li><?php _e( 'Know at a glance whether you&#8217;re in a block&#8217;s Edit or Navigation mode. Or, if you have restricted vision, your screen reader will tell you which mode you&#8217;re in.' ); ?></li>
				</ul>
				<p><?php _e( 'Of course, if you want to work with the very latest tools and features, install the <a href="https://wordpress.org/plugins/gutenberg/">Gutenberg plugin</a>. You&#8217;ll get to be the first to use new and exciting features in the block editor, before anyone else has seen them!' ); ?></p>
			</div>
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='500' height='500' viewbox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F3F4F5' d='M0 0h500v500H0z'/%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath d='M169.6 171.55l-.3 72.3 330.7-1v-72.6l-330.4 1.3z' fill='%230740B3'/%3E%3Cpath d='M291.2 97.85l-1.3-14.8-63.4-.7v76c0 3.6 176.7 4.1 273.5 4.1v-64.5H291.2v-.1z' fill='%230285D7'/%3E%3Cpath d='M500 27.75l-215.5-5.9 5.4 61.2 210.1 2.5v-57.8z' fill='%231730E5'/%3E%3Cpath d='M500 97.85v-12.3l-210.1-2.5 1.3 14.8H500z' fill='%230285D7'/%3E%3Cpath d='M500 97.85v-12.3l-210.1-2.5 1.3 14.8H500z' fill='%231730E5' style='mix-blend-mode:multiply'/%3E%3Cpath d='M255.2 379.75l-1-49.2-229.2.3-2 69.7 477-1.3v-24.3l-244.8 4.8z' fill='%230285D7'/%3E%3Cpath d='M500 424.35v-15l-430.8 1.2-4 51.5 134.6-.5v-34.4c.1-2.8 214.4-2.9 300.2-2.8z' fill='%230878FF'/%3E%3Cpath d='M500 290.05l-246.4 4.3.6 36.2 245.8-.3v-40.2z' fill='%23072CF0'/%3E%3Cpath d='M500 374.95v-44.7l-245.8.3 1 49.2 244.8-4.8z' fill='%230285D7'/%3E%3Cpath d='M500 374.95v-44.7l-245.8.3 1 49.2 244.8-4.8z' fill='%23072CF0' style='mix-blend-mode:multiply'/%3E%3Cpath d='M199.9 461.55v17.6l300.1-2.4v-16.3l-300.1 1.1z' fill='%230285D7'/%3E%3Cpath d='M500 424.35c-85.8-.1-300.1 0-300.1 2.8v34.4l300.1-1.1v-36.1z' fill='%230878FF'/%3E%3Cpath d='M500 424.35c-85.8-.1-300.1 0-300.1 2.8v34.4l300.1-1.1v-36.1z' fill='%230285D7' style='mix-blend-mode:multiply'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Cpath transform='rotate(-90 23 479.15)' fill='%23fff' d='M23 479.15h457.3v477H23z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" alt="">
				</div>
			</div>
		</div>

		<div class="about__section has-2-columns">
			<div class="column is-edge-to-edge">
				<div class="about__image aligncenter">
					<img src="data:image/svg+xml;charset=utf8,%3Csvg width='500' height='500' viewbox='0 0 500 500' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23F3F4F5' d='M0 0h500v500H0z'/%3E%3Cpath d='M31.3 284.4c-2-.1 12.2-250.6 12.2-250.6s94.8 4.4 99.7 5.2c.3 21.8 4.1 250.1 4.1 250.1l-116-4.7z' fill='%231730E5'/%3E%3Cpath d='M346.8 467.4l-11.7-305.9 138.2 2.4-3 304.1-123.5-.6z' fill='%230840B3'/%3E%3Cpath d='M287.7 34.9c2.3 0 5.9 398.5 5.9 398.5s-109.6-2.2-115 .6c-5.4 2.8 10.6-400.5 10.6-400.5l98.5 1.4z' fill='%23018BDE'/%3E%3Cpath d='M372.3 138c32.585 0 59-26.415 59-59s-26.415-59-59-59-59 26.415-59 59 26.415 59 59 59z' fill='%23062EF7'/%3E%3Cpath d='M35.8 315c-12.8 0-24.9 2.9-35.8 8.1v148.7c10.8 5.2 22.9 8.1 35.8 8.1 45.6 0 82.5-36.9 82.5-82.5S81.3 315 35.8 315z' fill='%231C87C0'/%3E%3C/svg%3E" alt="" />
				</div>
			</div>
			<div class="column is-vertically-aligned-center">
				<h2><?php _e( 'Your fundamental right: privacy' ); ?></h2>
				<p><?php _e( '5.4 helps with a variety of privacy issues around the world. So when users and stakeholders ask about regulatory compliance, or how your team handles user data, the answers should be a lot easier to get right.' ); ?></p>
				<p><?php _e( 'Take a look:' ); ?></p>
				<ul>
					<li><?php _e( 'Now personal data exports include users session information and users location data from the community events widget. Plus, a table of contents!' ); ?></li>
					<li><?php _e( 'See progress as you process export and erasure requests through the privacy tools.' ); ?></li>
					<li><?php _e( 'Plus, little enhancements throughout give the privacy tools a little cleaner look. Your eyes will thank you!' ); ?></li>
				</ul>
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
			</div>
		</div>

		<hr />

<<<<<<< HEAD
		<div class="about__section has-1-column">
			<div class="column">
				<h2><?php _e( 'Accessibility' ); ?></h2>
				<p><?php _e( 'Every release adds improvements to the accessible publishing experience, and that remains true for WordPress 5.5. ' ); ?></p>
				<p><?php _e( 'Now you can copy links in media screens and modal dialogs with a button, instead of trying to highlight a line of text.' ); ?></p>
				<p><?php _e( 'You can also move meta boxes with the keyboard, and edit images in WordPress with your assistive device, as it can read you the instructions in the image editor.' ); ?></p>
			</div>
		</div>

		<hr />

		<div class="about__section has-subtle-background-color has-2-columns">
			<header class="is-section-header">
				<h2><?php _e( 'For developers' ); ?></h2>
				<p><?php _e( '5.5 also brings a big box of changes just for developers.' ); ?></p>
			</header>
			<div class="column">
				<h3><?php _e( 'Server-side registered blocks in the REST API' ); ?></h3>
				<p><?php _e( 'The addition of block types endpoints means that JavaScript apps (like the block editor) can retrieve definitions for any blocks registered on the server.' ); ?></p>
			</div>
			<div class="column">
				<h3><?php _e( 'Dashicons' ); ?></h3>
				<p><?php _e( 'The Dashicons library has received its final update in 5.5. It adds 39 block editor icons along with 26 others.' ); ?></p>
			</div>
		</div>

		<div class="about__section has-subtle-background-color has-2-columns">
			<div class="column">
				<h3><?php _e( 'Defining environments' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: 'wp_get_environment_type' function name. */
						__( 'WordPress now has a standardized way to define a site’s environment type (staging, production, etc). Retrieve that type with %s and execute only the appropriate code.' ),
						'<code>wp_get_environment_type()</code>'
					);
					?>
				</p>
			</div>
			<div class="column">
				<h3><?php _e( 'Passing data to template files' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %1$s: 'get_header' function name, %2$s: 'get_template_part' function name, %3$s: '$args' variable name. */
						__( 'The template loading functions (%1$s, %2$s, etc.) have a new %3$s argument. So now you can pass an entire array’s worth of data to those templates.' ),
						'<code>get_header()</code>',
						'<code>get_template_part()</code>',
						'<code>$args</code>'
					);
					?>
				</p>
			</div>
		</div>

		<div class="about__section has-subtle-background-color">
			<div class="column">
				<h3><?php _e( 'More changes for developers' ); ?></h3>
				<ul>
					<li><?php _e( 'The PHPMailer library just got a major update, going from version 5.2.27 to 6.1.6.' ); ?></li>
					<li>
						<?php
						printf(
							/* translators: %s: 'redirect_guess_404_permalink' function name. */
							__( 'Now get more fine-grained control of %s.' ),
							'<code>redirect_guess_404_permalink()</code>'
						);
						?>
					</li>
					<li>
						<?php
						printf(
							/* translators: %s: 'wp_opcache_invalidate' function name. */
							__( 'Sites that use PHP’s OPcache will see more reliable cache invalidation, thanks to the new %s function during updates (including to plugins and themes).' ),
							'<code>wp_opcache_invalidate()</code>'
						);
						?>
					</li>
					<li><?php _e( 'Custom post types associated with the category taxonomy can now opt-in to supporting the default term.' ); ?></li>
					<li>
						<?php
						printf(
							/* translators: %s: 'register_taxonomy' function name. */
							__( 'Default terms can now be specified for custom taxonomies in %s.' ),
							'<code>register_taxonomy()</code>'
						);
						?>
					</li>
					<li>
						<?php
						printf(
							/* translators: %s: 'register_meta' function name. */
							__( 'The REST API now officially supports specifying default metadata values through %s.' ),
							'<code>register_meta()</code>'
						);
						?>
					</li>
					<li><?php _e( 'You will find updated versions of these bundled libraries: SimplePie, Twemoji, Masonry, imagesLoaded, getID3, Moment.js, and clipboard.js.' ); ?></li>
=======
		<div class="about__section ">
			<div class="column has-subtle-background-color">
				<h2 class="is-section-header"><?php _e( 'Just for developers' ); ?></h2>
			</div>
		</div>

		<hr class="is-small" />

		<div class="about__section">
			<div class="about__image aligncenter">
				<img src="data:image/svg+xml;charset=utf8,%3Csvg width='1000' height='500' viewbox='0 0 1000 500' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M761 360.917H428v66.8h333v-66.8z' fill='%230574E2'/%3E%3Cpath d='M921 399.801H592.2v99.7H921v-99.7z' fill='%231C99D1'/%3E%3Cpath d='M288.1 378.963c46.392 0 84-37.496 84-83.749 0-46.253-37.608-83.748-84-83.748s-84 37.495-84 83.748c0 46.253 37.608 83.749 84 83.749z' fill='%230F7DEA'/%3E%3Cpath d='M553.3 191.426H272.5v85.742h280.8v-85.742z' fill='%231730E5'/%3E%3Cpath d='M785 151.545H499.4v77.169H785v-77.169z' fill='%231C99D1'/%3E%3Cpath d='M777.3 284.247c50.258 0 91-40.62 91-90.728 0-50.107-40.742-90.727-91-90.727s-91 40.62-91 90.727c0 50.108 40.742 90.728 91 90.728z' fill='%231826D3'/%3E%3Cpath d='M635 33.898H413v101.695h222V33.898zM1000 303.091H708v76.769h292v-76.769zM366 102.692H0v66.799h366v-66.799z' fill='%230574E2'/%3E%3Cpath d='M275 24.925H96v93.719h179V24.925z' fill='%231C99D1'/%3E%3Cpath d='M861 0H573v66.8h288V0z' fill='%231730E5'/%3E%3Cpath d='M436 440.678c35.346 0 64-28.568 64-63.809 0-35.24-28.654-63.808-64-63.808-35.346 0-64 28.568-64 63.808 0 35.241 28.654 63.809 64 63.809z' fill='%23236FE8'/%3E%3Cpath d='M428 449.651H171.4V500H428v-50.349z' fill='%231C99D1'/%3E%3Cpath d='M318 404.786H77v63.908h241v-63.908z' fill='%231826D3'/%3E%3Cpath d='M818 258.225H600v73.281h218v-73.281zM613 117.647H456v93.719h157v-93.719zM96.1 198.604c18.833 0 34.1-15.221 34.1-33.998 0-18.776-15.267-33.998-34.1-33.998-18.833 0-34.1 15.222-34.1 33.998 0 18.777 15.267 33.998 34.1 33.998z' fill='%231C99D1'/%3E%3C/svg%3E" alt="">
			</div>
		</div>

		<hr class="is-small" />

		<div class="about__section has-2-columns">
			<div class="column">
				<h3><?php _e( 'Add custom fields to menu items—natively' ); ?></h3>
				<p>
					<?php _e( 'Two new actions let you add custom fields to menu items&mdash;without a plugin and without writing custom walkers.' ); ?>
				</p>
				<p>
					<?php
					printf(
						/* translators: %s: 'wp_nav_menu_item_custom_fields' action name. */
						__( 'On the Menus admin screen, %s fires just before the move buttons of a nav menu item in the menu editor.' ),
						'<code>wp_nav_menu_item_custom_fields</code>'
					);
					?>
				</p>
				<p>
					<?php
					printf(
						/* translators: %s: 'wp_nav_menu_item_custom_fields_customize_template' action name. */
						__( 'In the Customizer, %s fires at the end of the menu-items form-fields template.' ),
						'<code>wp_nav_menu_item_custom_fields_customize_template</code>'
					);
					?>
				</p>
				<p>
					<?php _e( 'Check your code and see where these new actions can replace your custom code, and if you&#8217;re concerned about duplication, add a check for the WordPress version.' ); ?>
				</p>
			</div>
			<div class="column">
				<h3><?php _e( 'Blocks! Simpler styling, new APIs and embeds' ); ?></h3>
				<ul>
					<li><?php _e( '<strong>Radically</strong> simpler block styling. Negative margins and default padding are gone! Now you can style blocks the way you need them. And, a refactor got rid of four redundant wrapper divs.' ); ?></li>
					<li><?php _e( 'If you build plugins, now you can register collections of your blocks by namespace across categories—a great way to get more brand visibility.' ); ?></li>
					<li><?php _e( 'Let users do more with two new APIs: block variations and gradients.' ); ?></li>
					<li><?php _e( 'In embeds, now the block editor supports TikTok—and CollegeHumor is gone.' ); ?></li>
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
				</ul>
			</div>
		</div>

		<hr class="is-small" />

		<div class="about__section">
			<div class="column">
<<<<<<< HEAD
				<h3><?php _e( 'Check the Field Guide for more!' ); ?></h3>
				<p>
					<?php
					printf(
						/* translators: %s: WordPress 5.5 Field Guide link. */
						__( 'There’s a lot more for developers to love in WordPress 5.5. To discover more and learn how to make these changes shine on your sites, themes, plugins and more, check the <a href="%s">WordPress 5.5 Field Guide.</a>' ),
						'https://make.wordpress.org/core/wordpress-5-5-field-guide/'
=======
				<p>
					<?php
					printf(
						/* translators: %s: WordPress 5.4 Field Guide link. */
						__( 'There&#8217;s lots more for developers to love in WordPress 5.4. To discover more and learn how to make these changes shine on your sites, themes, plugins and more, check the <a href="%s">WordPress 5.4 Field Guide</a>.' ),
						'https://make.wordpress.org/core/2020/03/03/wordpress-5-4-field-guide/'
>>>>>>> 902e8d80fabcb61ed5c3b481d4a1821e7cec249c
					);
					?>
				</p>
			</div>
		</div>

		<hr />

		<div class="return-to-dashboard">
			<?php if ( current_user_can( 'update_core' ) && isset( $_GET['updated'] ) ) : ?>
				<a href="<?php echo esc_url( self_admin_url( 'update-core.php' ) ); ?>">
					<?php is_multisite() ? _e( 'Return to Updates' ) : _e( 'Return to Dashboard &rarr; Updates' ); ?>
				</a> |
			<?php endif; ?>
			<a href="<?php echo esc_url( self_admin_url() ); ?>"><?php is_blog_admin() ? _e( 'Go to Dashboard &rarr; Home' ) : _e( 'Go to Dashboard' ); ?></a>
		</div>
	</div>
<?php

require_once ABSPATH . 'wp-admin/admin-footer.php';

// These are strings we may use to describe maintenance/security releases, where we aim for no new strings.
return;

__( 'Maintenance Release' );
__( 'Maintenance Releases' );

__( 'Security Release' );
__( 'Security Releases' );

__( 'Maintenance and Security Release' );
__( 'Maintenance and Security Releases' );

/* translators: %s: WordPress version number. */
__( '<strong>Version %s</strong> addressed one security issue.' );
/* translators: %s: WordPress version number. */
__( '<strong>Version %s</strong> addressed some security issues.' );

/* translators: 1: WordPress version number, 2: Plural number of bugs. */
_n_noop(
	'<strong>Version %1$s</strong> addressed %2$s bug.',
	'<strong>Version %1$s</strong> addressed %2$s bugs.'
);

/* translators: 1: WordPress version number, 2: Plural number of bugs. Singular security issue. */
_n_noop(
	'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bug.',
	'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bugs.'
);

/* translators: 1: WordPress version number, 2: Plural number of bugs. More than one security issue. */
_n_noop(
	'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.',
	'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.'
);

/* translators: %s: Documentation URL. */
__( 'For more information, see <a href="%s">the release notes</a>.' );
