# LucaHome-Nextcloud

Project for LucaHome integration into Nextcloud.

[![Platform](https://img.shields.io/badge/platform-Raspberry-blue.svg)](https://www.raspberrypi.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Donate: PayPal](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.me/GuepardoApps)

[![Build](https://img.shields.io/badge/build-WIP-yellow.svg)](./)
[![Version](https://img.shields.io/badge/version-v0.2.0-blue.svg)](./)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[![Vue](https://img.shields.io/badge/lang-Vue-lightgreen.svg)](https://vuejs.org/)
[![PHP](https://img.shields.io/badge/lang-PHP-blue.svg)](http://php.net/)
[![C++](https://img.shields.io/badge/lang-C++-blue.svg)](https://isocpp.org/)

## Features

* set states for 433MHz connected sockets
* ...

![alt tag](/screenshots/wip_20190216_1324.jpg)
![alt tag](/screenshots/wip_20190216_1325.jpg)

## Installation

In your Nextcloud, simply navigate to »Apps«, choose the category Tools, find the LucaHome app and enable it.
Then open the LucaHome app from the app menu.

## Maintainers

[Jonas Schubert](https://github.com/GuepardoApps)

If you’d like to join, just go through the [issue list](https://github.com/LucaHome/LucaHome-Nextcloud/issues) and fix some.

## Developer setup info

Just clone this repo into your apps directory (Nextcloud server installation needed). Additionally,  [nodejs and npm](https://nodejs.org/en/download/package-manager/) are needed for installing JavaScript dependencies.

Once node and npm are installed, PHP and JavaScript dependencies can be installed by running
```bash
$ make
```
Please execute this command with your ordinary user account and neither root nor sudo.

## License

LucaHome-Nextcloud is distributed under the MIT license. [See LICENSE](LICENSE.md) for details.

```
MIT License

Copyright (c) 2019 GuepardoApps (Jonas Schubert)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```