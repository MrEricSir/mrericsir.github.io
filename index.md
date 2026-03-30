---
layout: single
author_profile: false
title: " "
---


<div class="portfolio-section" markdown="1">

# Open Source Portfolio

I've been developing software since I was a teenager learning to code in [QBasic](https://en.wikipedia.org/wiki/QBasic), [Turbo Pascal](https://en.wikipedia.org/wiki/Turbo_Pascal), and [HyperCard](https://en.wikipedia.org/wiki/HyperCard). In 2009 I earned a Master of Science in Computer Science. Over the following years I've become a generalist, tackling projects ranging from embedded Linux systems to reverse engineering Windows applications to full stack web development -- and everything in between.

This portfolio highlights my work on open source projects.

</div>


<div class="section-header" markdown="1">

# Creator {#creator}

Projects I created and (in some cases) actively maintain.

</div>

<div class="project" markdown="1">
![munimet.ro screenshot](/images/munimetro.png)

## munimet.ro
[Live site](http://munimet.ro) | [GitHub](https://github.com/MrEricSir/munimet.ro)

My first "vibe coded" webapp displays the current state of San Francisco's [Muni Metro](https://sfmta.com/munimetro) subway via machine learning, using Google Cloud Run as the backend.

* Tech: Claude Code, PyTorch, Python, Falcon, tkinter, Google Cloud Platform, HTML, GitHub Actions
* Platform: Web
</div>

<div class="project" markdown="1">
![Fang screenshot](/images/fang.png)

## Fang
[Home page](https://getfang.com) | [GitHub](https://github.com/MrEricSir/Fang)

Want to catch up on the news? My easy to use cross-platform news reader features a QML frontend and custom RSS/Atom/Sitemap/JSON parser. Displays news via embedded Chromium (CEF.)

* Tech: C++, Qt, QML, CEF, WebSocket, Javascript, SQLite, RSS, XML, HTML, JSON, CSS, GitHub Actions
* Platforms: Windows, macOS, Linux, Android (experimental)
</div>

<div class="project" markdown="1">
![How Many Bags logo](/images/how_many_bags.jpg)

## How Many Bags?
[Home page](https://www.howmanybags.com) | [GitHub](https://github.com/MrEricSir/OnCinemaRatings)

Provides movie ratings from every episode of Tim Heidecker and Gregg Turkington's long-running comedy series,
[On Cinema at the Cinema.](https://en.wikipedia.org/wiki/On_Cinema)

* Tech: HTML, JSON, Javascript, GitHub Actions
* Platform: Web
</div>

<div class="project" markdown="1">
![Photo of the Golden Gate Bridge (public domain)](/images/bridge.jpg)

## selenium-webext-bridge
[GitHub](https://github.com/MrEricSir/selenium-webext-bridge) | [npm](https://www.npmjs.com/package/selenium-webext-bridge)

This npm library is aimed at engineers developing Firefox extensions who wish to verify them with Selenium tests. This grew out of
a Firefox extension I was working on, as there was no way for Selenium to deal with Firefox tabs or easily communicate with extensions
once they were installed.

* Tech: Javascript, Selenium, Firefox, WebExtension, GitHub Actions, npm
* Platforms: Windows, macOS, Linux
</div>

<div class="project" markdown="1">
![He is the one](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExemRuZnV1eXMwZm54bXg4aXNuajR3cXQ1NTFrMzlibHNlOWp5NHJnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aqLEgEvlGAFZ6zS4E5/giphy.gif)

## QSingleInstanceCheck
[GitHub](https://github.com/MrEricSir/QSingleInstanceCheck)

Originally developed for Fang, this simple C++ header-only library can be used to not only ensure that one and only one instance of your app is running, but also send a signal to the original instance. In Fang this signal is primarly used on Windows to show the app when it's been minimized to the system tray.

* Tech: C++, Qt, shared memory, local socket/named pipe
* Platforms: Windows, macOS, Linux
</div>


<div class="project" markdown="1">
![Power button](/images/autostart.png)

## QAutoStart
[GitHub](https://github.com/MrEricSir/QAutoStart)

Also developed for Fang, this C++ library allows your Qt application to launch at user login. Designed to be easy to use, with only a single line of code to enable or disable the feature.

* Tech: C++, Qt
* Platforms: Windows, macOS, Linux
</div>


<div class="project" markdown="1">
![Modiuplate Lua screenshot](/images/modipulate-lua.png)

## Modipulate
[GitHub](https://github.com/MrEricSir/Modipulate)

Tracker music library for playing music and responding to musical cues. Intended to be used in video game development. Includes C and Lua bindings.

* Tech: C++, PortAudio, Lua
* Platforms: Windows, macOS, Linux
</div>

<div class="project" markdown="1">
![InjectCrash screenshot](/images/inject-crash.png)

## InjectCrash
[GitHub](https://github.com/MrEricSir/InjectCrash)

Windows command line utility to crash another process. Useful for testing crash reporters.

* Tech: C++, Win32
* Platforms: Windows
</div>

<div class="section-header" markdown="1">

# Contributor {#contributor}

Projects I have contributed to, either as an employee or volunteer.

</div>

<div class="project" markdown="1">
![Cardo screenshot](/images/cardo.png)

## Cardo
[Home page](https://cardo-podcast.github.io/) | [GitHub](https://github.com/cardo-podcast/cardo)

Desktop podcast client. Contributed additional search engines, bug fixes, and translations. Officially a project collaborate as of March 2026.

* Tech: TypeScript, React, Tauri, Tailwind
* Platforms: Windows, macOS, Linux
</div>

<div class="project" markdown="1">
![Jellyfin Desktop screenshot](/images/jellyfin_desktop.png)

## Jellyfin Desktop
[GitHub](https://github.com/jellyfin/jellyfin-desktop/)

Desktop client for the [Jellyfin Media System](https://jellyfin.org/). Contributed build and setup scripts and bug fixes.

* Tech: C++, Qt, QML
* Platforms: Windows, macOS, Linux
</div>

<div class="project" markdown="1">
![Geary screenshot](/images/geary.png)

## Geary
[Home page](https://wiki.gnome.org/Apps/Geary) | [Wikipedia](https://en.wikipedia.org/wiki/Geary_(e-mail_client)) | [GitLab](https://gitlab.gnome.org/GNOME/geary)

Easy to use email client for GNOME and compatible Linux desktops.

Contributed initial UI, HTML email support, and parts of IMAP backend as an employee of the Yorba Foundation.

* Tech: Vala, GTK+, SQLite, IMAP, SMTP
* Platform: Linux
</div>

<div class="project" markdown="1">
![Shotwell screenshot](/images/shotwell.png)

## Shotwell
[Home page](https://wiki.gnome.org/Apps/Shotwell) | [Wikipedia](https://en.wikipedia.org/wiki/Shotwell_(software)) | [GitLab](https://gitlab.gnome.org/GNOME/shotwell)

Easy to use photo manager for GNOME and compatible Linux desktops.

Contributed RAW+JPEG support, custom MOV parser, and search UI as an employee of the Yorba Foundation.

* Tech: Vala, GTK+. GStreamer, SQLite
* Platform: Linux
</div>

<div class="project" markdown="1">
![Ubuntu Touch Gallery app screenshot](/images/gallery-app.png)

## Gallery for Ubuntu Touch
[Home page](https://open-store.io/app/com.ubuntu.gallery) | [GitLab](https://gitlab.com/ubports/development/apps/lomiri-gallery-app)

Photo gallery app comissioned by Canonical for Ubuntu Phone, intended to ship with the (unreleased) Ubuntu Edge handset.

Contributed SQLite storage backend and iterated on UI as an employee of the Yorba Foundation.

* Tech: C++, Qt, QML, Javascript, SQLite
* Platform: Linux
</div>
