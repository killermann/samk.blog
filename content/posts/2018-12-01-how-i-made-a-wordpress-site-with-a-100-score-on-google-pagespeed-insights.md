---
title: How I Made A WordPress Site with a 100 Score on Google Pagespeed Insights
author: Sam Killermann
type: post
date: 2018-12-02T00:21:52+00:00
excerpt: "While saving over $100 / month on Wordpress hosting. (Oh, and this isn't an ad, even though it sounds like one.)"
url: /how-i-made-a-wordpress-site-with-a-100-score-on-google-pagespeed-insights/
featured_image: /wp-content/uploads/2018/12/sam-killermann-dot-com-100-pagespeed-score.jpg
ampforwp-amp-on-off:
  - default
categories:
  - Technolophizing
  - Work dot Com
tags:
  - Overhead
  - Web Dev
  - Wordpress

---
I&#8217;m really thrilled about this. As a poor person who creates tons of websites that have a ton of traffic but are totally free and make negative dollars, I feel like I&#8217;ve found the Holy Grail. But before I get into the details, two quick things: 

One, **none of the following links are affiliates/sponsored** (I don&#8217;t abide that sort of thing here).

Two, **this path isn&#8217;t for everyone**, but I&#8217;m going to lay it out for those of you who want to walk it.

Just wanted to get that out of the way, because I know that the excitement that&#8217;s bubbling out of me might be misread as a sales pitch or proselytizing. It&#8217;s not.

We good? Good. Omg. Can I tell you how excited I am?!

<!--more-->

## The Backstory

I&#8217;ve overhauled the code/design of this blog about seven times now. And I&#8217;ve changed hosting providers three times. This is the first time I&#8217;ve made a change that I would describe as fundamental.

This site has always been powered by [WordPress][1]. It still is. And the changes have all been roughly the same, up until now: improve the codebase, and pay more for hosting because I&#8217;m exceeding my usage.

Most recently, I was hosting this blog with WP Engine. Their &#8220;Growth&#8221; plan weighs in at $115/month, and while they definitely provide quality (both in the speed of their servers and their customer service), that&#8217;s a lot of money to be paying monthly for a personal blog. 

But I had exhausted all of my other options. The shared server hosting plans I was on before (e.g., Bluehost) generally say there is no usage limit in their marketing materials, but as soon as your usage starts to crash all the sites on the shared server, they change their tune.

The problem is that WordPress is incredibly resource-intensive to host. 

Every time someone visits a WordPress-powered site, the server gets hit with a bunch of database requests, and every plugin, bell, and whistle you add, increase the load. And if your WordPress theme is poorly coded, that adds even more strain.

So it&#8217;s expensive to scale. 

If you have fewer than 10K visitors a month, and you&#8217;re not using a lot of database-intensive plugins, you&#8217;ll probably be fine on a shared hosting plan. But beyond that your hosting bill starts to increase commensurate with your traffic. 

That WP Engine plan I mentioned above? It&#8217;s only good for up to 100K visits a month. After that, you need to more than double your bill, $290 / month, which will cover you until 400K.

Now, I mentioned above, that this change I made is fundamental. But I also said I&#8217;m still using WordPress. So what gives?

## Enter JAMstack (Get Ready for Jargon Overload)

I&#8217;m about to get into some technical web trendy type stuff, but for the non-technical readers I&#8217;ll define everything you need to make sense of what will follow below. 

(For my technical readers, you can kindly skip this section, because it&#8217;s not for you; or, even better, read it and [lemme know][2] if I messed something up.)

Okay, so, what are we jamming where? Answer: The stack. Everywhere it fits.

To quote the [gospel][3], JAMstack is a:

<blockquote class="wp-block-quote">
  <p>
    Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.<br />
  </p>
</blockquote>

That&#8217;s the JAM (JavaScript, APIs, and Markup) part. 

For those unfamiliar, &#8220;stack&#8221; refers to the different layers of software that combine to form a website or application. 

A &#8220;full stack&#8221; means all the code that runs the server, database, and programming language (e.g., Apache, MySQL, PHP), plus the stuff that shows it to you (e.g., the HTML, CSS, and JS).

It&#8217;s all the magic that happens behind the scenes every time you click a link or type in a URL.

JAMstack, also called &#8220;static&#8221; or &#8220;serverless&#8221; sites, is a methodology that is quickly becoming the trend. And for good reason: static sites are fast, secure, and they scale effortlessly (and inexpensively).

Now that the vocab lesson is over, as soon as I started hearing about JAMstack I&#8217;ve been looking for ways to apply it to my projects.

A few months ago, as an experiment, I overhauled my professional homepage and online curriculum vitae, [samuelKillermann.com][4] to create my first JAMstack site. 

That site was formerly a WordPress site that kept getting _really close _to exceeding its usage on a shared hosting plan, which would have required me shelling out more ducats.

But converting it to a JAMstack site has resulted in (so far) a 100% free hosting bill on [Netlify][5]. That&#8217;s _not_ a lot of ducats, which is great, because that&#8217;s the exact amount I have.

(I built my CV site with [Hugo][6] for static site generation, and [wrote all the overhaul there, if you&#8217;re curious][7], and you can [view my source code on GitHub][8]) 

As an experiment, it was a complete success. 

For the past few months, it&#8217;s had more traffic than usual, experienced no outages or brown outs, and is super-duper fast. It&#8217;s also nigh unhackable (not a challenge!).

I&#8217;ve loved running that site, but I can&#8217;t leave WordPress for all of my projects, for more reasons than are worth getting into here. But here&#8217;s a good enough reason: most of my collaborators aren&#8217;t up for learning the command line or git, which is how I update that site now.

So most of my sites are, and will have to continue to be, WordPress. 

## A New Challenger Approaches: WordPress, JAMstacked

I started looking into migrating my WordPress sites from WordPress to a static site generator (e.g., [Hugo supports WordPress migration][9]), but I kept butting up against the need to _keep_ using WordPress, not just keep my content from WordPress.

For a few of my projects, this would work, so I started the laborious process of migration. But for a lot of my work, I was faced with either **(A)** I JAMstack my sites, or **(B)** I continue collaborating with non-technical people.

And with that ultimatum, I gave up hope, and consigned myself to that 2019 with a five figure website hosting bill B lyfe.

But then! A twist!

I was listening to a _really nerdy, not sure I&#8217;m comfortable admitting it_ [podcast][10], and heard about [Shifter][11], which is a static site (JAMstack) generator + hosting service _for_ WordPress, not for migrating _from_ Wordpress.

In case you don&#8217;t get how big of a deal this is, let me repeat it a different way: Shifter takes all the good stuff that I didn&#8217;t think I could possibly have with Wordpress (affordable scalability, speed, security), and let&#8217;s me keep having WordPress (easy CMS, non-technical collaborator friendly).

</mnightshyamalan>

The way Shifter works, basically, is:

  1. You create a WordPress site the same way you usually would (create/install a theme, add your plugins, add posts and pages and media); 
  2. Then, whenever you&#8217;re ready to publish an update (e.g., a new blog post or page) you hit a &#8220;generate&#8221; button;
  3. A bunch of magic happens. I assume elves are involved. 
  4. A new static version of your site (with all of your posts, pages, taxonomies, menus, updates &#8212; _all of it_) replaces the old one, and your new thing is there for your reader&#8217;s pleasure.

Now, this Fairy Tale is not without a set of heroic compromises.

### What Words Shifter Can&#8217;t Press

Did I just have a stroke? Nope! I just tried a joke that _clearly_ doesn&#8217;t work in text, and stuck with it cuz I am a maverick.

{{< subscribe >}}
Taking a short break from doting on Shifter, here are a few things that &#8212; because of the nature of static site generation &#8212; Shifter-powered WordPress sites _cannot_ do (that a traditional server-powered WordPress site could).

#### 1. No plugins that work by allowing a website visitor to interact with your site&#8217;s database.

For example, I recently built out [online courses on The Safe Zone Project][12], and the way those work is user&#8217;s enroll in a course (which creates them as a user in a database table), then are able to access its lessons, and chart their progress (which uses another database table) &#8212; all powered by WordPress.

That&#8217;s not going to work with Shifter. 

Luckily, there&#8217;s a ton of third-party services that interact well with WordPress, but handle all the interactions on their own servers, so this isn&#8217;t a huge dealbreaker. 

For example, instead of using _LearnDash_ (how I built the SZP site), I could have used something like _Podia_.

#### 2. No native WordPress search.

I always incorporate WordPress&#8217;s native search in my sites, and none of the third-party offerings (e.g., Google, or Algolia) seem like they&#8217;re better _enough_ to justify all the extra work and code.

However, in the grand balance, this is an acorn of complaint against an acorn squash of bountiful static WordPress glory.

#### 3. No query strings in the URL for sorting or categories or what-have-you.

I&#8217;m sure that 99.9% of people running WordPress sites won&#8217;t notice this, and couldn&#8217;t care less, but I _love_ building sites that use [publicly query-able variables][13]. 

For example, on this here very site, the /all page used to be sortable by category and date, all using URL variables.

There are workarounds, I know. But the simplicity and elegance of having one page for the user that could do all that magic &#8212; and not having to rely on a jQuery library or other trickery &#8212; is something I&#8217;ll miss.

#### 4. No WordPress Popular Posts Plugins (or similar)

I&#8217;ve always had [WPP][14] installed on this site (and most of my sites), because I like to be able to dynamically serve up popular content to viewers. It&#8217;s fun seeing the ranks ebb and flow, and knowing that if someone comes back tomorrow the list is likely to be different.

But, again, this definitely isn&#8217;t a dealbreaker. The way I&#8217;m replacing it (short-term solution until I think of something more hands off), is simple: [writing the list myself][15].

### K. Back to the Doting: Why I&#8217;m a Shifter Super-fan, One Week In

Let me count the ways: 

  1. I&#8217;m paying $20 for hosting.
  2. They&#8217;re a new service, so there isn&#8217;t a _ton_ of [documentation][16], but their customer service has been outstanding so far.
  3. This site, a non-[brutalist][17] WORDPRESS SITE, is getting a [Google PageSpeed][18] score of 💯(where before, I was in the high 80s, with $115 hosting)
  4. I&#8217;m paying $20 for hosting.

We&#8217;ll see how this goes. I&#8217;ll update this post, or link to a sequel, if I have anything different to say. In the meantime, if you&#8217;re reading this, the site isn&#8217;t down (yay!) and it&#8217;s fair to presume I&#8217;m still grinning ear-to-ear about this migration.

 [1]: https://wordpress.org
 [2]: /contact/
 [3]: https://jamstack.org/
 [4]: https://samuelkillermann.com
 [5]: https://www.netlify.com/
 [6]: https://gohugo.io/
 [7]: https://www.samuelkillermann.com/work/samuel-killermann-curriculum-vitae/
 [8]: https://github.com/killermann/samuel-killermann-curriculum-vitae
 [9]: https://gohugo.io/tools/migrations/#wordpress
 [10]: https://itunes.apple.com/us/podcast/ep-9-shifting-wordpress-to-the-jamstack/id1148797643?i=1000381344914&mt=2
 [11]: https://www.getshifter.io/
 [12]: https://thesafezoneproject.com/resources/courses/
 [13]: https://premium.wpmudev.org/blog/building-customized-urls-wordpress/
 [14]: https://wordpress.org/plugins/wordpress-popular-posts/
 [15]: /popular/
 [16]: https://support.getshifter.io/
 [17]: https://premium.wpmudev.org/blog/brutalist-web-design-where-did-it-come-from-and-why-is-it-back/
 [18]: https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.samkillermann.com%2F&tab=desktop