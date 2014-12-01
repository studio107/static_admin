/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'glyphico\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-erase': '&#xe719;',
		'icon-zoomout': '&#xe600;',
		'icon-zoomin': '&#xe601;',
		'icon-x': '&#xe602;',
		'icon-world': '&#xe603;',
		'icon-win8': '&#xe604;',
		'icon-win7': '&#xe605;',
		'icon-wifi': '&#xe606;',
		'icon-wave': '&#xe607;',
		'icon-warning': '&#xe608;',
		'icon-wallet': '&#xe609;',
		'icon-voicerec': '&#xe60a;',
		'icon-viscard': '&#xe60b;',
		'icon-video': '&#xe60c;',
		'icon-user': '&#xe60d;',
		'icon-user-add': '&#xe60e;',
		'icon-up-v': '&#xe60f;',
		'icon-up-tr': '&#xe610;',
		'icon-up-thin': '&#xe611;',
		'icon-up-circle': '&#xe612;',
		'icon-up-bold': '&#xe613;',
		'icon-unlock': '&#xe614;',
		'icon-undo': '&#xe615;',
		'icon-unchecked': '&#xe616;',
		'icon-trash': '&#xe617;',
		'icon-translate': '&#xe618;',
		'icon-tools': '&#xe619;',
		'icon-timemachine': '&#xe61a;',
		'icon-tag': '&#xe61b;',
		'icon-t-shirt': '&#xe61c;',
		'icon-support': '&#xe61d;',
		'icon-stop': '&#xe61e;',
		'icon-star': '&#xe61f;',
		'icon-star-empty': '&#xe620;',
		'icon-stack': '&#xe621;',
		'icon-speed': '&#xe622;',
		'icon-speaker': '&#xe623;',
		'icon-slider': '&#xe624;',
		'icon-shuffle': '&#xe625;',
		'icon-share': '&#xe626;',
		'icon-settings': '&#xe627;',
		'icon-send': '&#xe628;',
		'icon-search': '&#xe629;',
		'icon-saveto': '&#xe62a;',
		'icon-save': '&#xe62b;',
		'icon-sandclock': '&#xe62c;',
		'icon-safe': '&#xe62d;',
		'icon-rw': '&#xe62e;',
		'icon-rss': '&#xe62f;',
		'icon-rocket': '&#xe630;',
		'icon-right-v': '&#xe631;',
		'icon-right-tr': '&#xe632;',
		'icon-right-thin': '&#xe633;',
		'icon-right-circle': '&#xe634;',
		'icon-right-bold': '&#xe635;',
		'icon-revert': '&#xe636;',
		'icon-return': '&#xe637;',
		'icon-request': '&#xe638;',
		'icon-reply3': '&#xe639;',
		'icon-reply2': '&#xe63a;',
		'icon-reply': '&#xe63b;',
		'icon-repeat': '&#xe63c;',
		'icon-remove': '&#xe63d;',
		'icon-refresh': '&#xe63e;',
		'icon-rec': '&#xe63f;',
		'icon-question-circle': '&#xe640;',
		'icon-process': '&#xe641;',
		'icon-print': '&#xe642;',
		'icon-prev': '&#xe643;',
		'icon-present': '&#xe644;',
		'icon-plus': '&#xe645;',
		'icon-plus-circle': '&#xe646;',
		'icon-play': '&#xe647;',
		'icon-plane': '&#xe648;',
		'icon-pizza': '&#xe649;',
		'icon-pin': '&#xe64a;',
		'icon-piechart': '&#xe64b;',
		'icon-photos': '&#xe64c;',
		'icon-photo': '&#xe64d;',
		'icon-phone': '&#xe64e;',
		'icon-pause': '&#xe64f;',
		'icon-paste': '&#xe650;',
		'icon-paint': '&#xe651;',
		'icon-page': '&#xe652;',
		'icon-outbox': '&#xe653;',
		'icon-openbook': '&#xe654;',
		'icon-off': '&#xe655;',
		'icon-notify': '&#xe656;',
		'icon-night': '&#xe657;',
		'icon-next': '&#xe658;',
		'icon-network': '&#xe659;',
		'icon-music2': '&#xe65a;',
		'icon-music1': '&#xe65b;',
		'icon-music': '&#xe65c;',
		'icon-move': '&#xe65d;',
		'icon-mouse': '&#xe65e;',
		'icon-more': '&#xe65f;',
		'icon-monitor': '&#xe660;',
		'icon-minus': '&#xe661;',
		'icon-minus-circle': '&#xe662;',
		'icon-minimize': '&#xe663;',
		'icon-mindy': '&#xe664;',
		'icon-mic': '&#xe665;',
		'icon-meta': '&#xe666;',
		'icon-maximize': '&#xe667;',
		'icon-map': '&#xe668;',
		'icon-mail': '&#xe669;',
		'icon-mail-alt': '&#xe66a;',
		'icon-magnet': '&#xe66b;',
		'icon-magic': '&#xe66c;',
		'icon-logout': '&#xe66d;',
		'icon-login': '&#xe66e;',
		'icon-lock': '&#xe66f;',
		'icon-list': '&#xe670;',
		'icon-list-alt': '&#xe671;',
		'icon-list-add': '&#xe672;',
		'icon-link': '&#xe673;',
		'icon-like': '&#xe674;',
		'icon-left-v': '&#xe675;',
		'icon-left-tr': '&#xe676;',
		'icon-left-thin': '&#xe677;',
		'icon-left-circle': '&#xe678;',
		'icon-left-bold': '&#xe679;',
		'icon-learn': '&#xe67a;',
		'icon-leaf': '&#xe67b;',
		'icon-laptop': '&#xe67c;',
		'icon-keynote': '&#xe67d;',
		'icon-keyboard': '&#xe67e;',
		'icon-key': '&#xe67f;',
		'icon-iphone': '&#xe680;',
		'icon-ipad': '&#xe681;',
		'icon-info': '&#xe682;',
		'icon-info-circle': '&#xe683;',
		'icon-infinity': '&#xe684;',
		'icon-inbox2': '&#xe685;',
		'icon-inbox': '&#xe686;',
		'icon-html5': '&#xe687;',
		'icon-home2': '&#xe688;',
		'icon-home': '&#xe689;',
		'icon-heart': '&#xe68a;',
		'icon-heart-empty': '&#xe68b;',
		'icon-hdd': '&#xe68c;',
		'icon-handshake': '&#xe68d;',
		'icon-group': '&#xe68e;',
		'icon-grid': '&#xe68f;',
		'icon-grid-big': '&#xe690;',
		'icon-geo2': '&#xe691;',
		'icon-geo': '&#xe692;',
		'icon-frames': '&#xe693;',
		'icon-framelist': '&#xe694;',
		'icon-framelist-alt': '&#xe695;',
		'icon-frame2': '&#xe696;',
		'icon-frame': '&#xe697;',
		'icon-food': '&#xe698;',
		'icon-folder': '&#xe699;',
		'icon-flashlight': '&#xe69a;',
		'icon-flash': '&#xe69b;',
		'icon-flag': '&#xe69c;',
		'icon-file': '&#xe69d;',
		'icon-ff': '&#xe69e;',
		'icon-facepalm': '&#xe69f;',
		'icon-eye': '&#xe6a0;',
		'icon-edit2': '&#xe6a1;',
		'icon-edit': '&#xe6a2;',
		'icon-drops': '&#xe6a3;',
		'icon-dropdown': '&#xe6a4;',
		'icon-drop': '&#xe6a5;',
		'icon-down-v': '&#xe6a6;',
		'icon-down-tr': '&#xe6a7;',
		'icon-down-thin': '&#xe6a8;',
		'icon-down-circle': '&#xe6a9;',
		'icon-down-bold': '&#xe6aa;',
		'icon-dislike': '&#xe6ab;',
		'icon-directions2': '&#xe6ac;',
		'icon-directions': '&#xe6ad;',
		'icon-denied': '&#xe6ae;',
		'icon-delivery': '&#xe6af;',
		'icon-db': '&#xe6b0;',
		'icon-cut': '&#xe6b1;',
		'icon-creditcard': '&#xe6b2;',
		'icon-copy': '&#xe6b3;',
		'icon-contrast': '&#xe6b4;',
		'icon-cone': '&#xe6b5;',
		'icon-compose': '&#xe6b6;',
		'icon-compass': '&#xe6b7;',
		'icon-code': '&#xe6b8;',
		'icon-cloud': '&#xe6b9;',
		'icon-cloud-upload': '&#xe6ba;',
		'icon-cloud-upload-empty': '&#xe6bb;',
		'icon-cloud-undo': '&#xe6bc;',
		'icon-cloud-sync': '&#xe6bd;',
		'icon-cloud-empty': '&#xe6be;',
		'icon-cloud-download': '&#xe6bf;',
		'icon-cloud-download-epmty': '&#xe6c0;',
		'icon-cloud-check': '&#xe6c1;',
		'icon-cloud-check-empty': '&#xe6c2;',
		'icon-close-circle': '&#xe6c3;',
		'icon-clock': '&#xe6c4;',
		'icon-checked': '&#xe6c5;',
		'icon-check': '&#xe6c6;',
		'icon-change': '&#xe6c7;',
		'icon-case': '&#xe6c8;',
		'icon-cart': '&#xe6c9;',
		'icon-camera': '&#xe6ca;',
		'icon-calend': '&#xe6cb;',
		'icon-businessman': '&#xe6cc;',
		'icon-bulb': '&#xe6cd;',
		'icon-bucket': '&#xe6ce;',
		'icon-bucket-empty': '&#xe6cf;',
		'icon-brush': '&#xe6d0;',
		'icon-browser': '&#xe6d1;',
		'icon-browser-in': '&#xe6d2;',
		'icon-brightness': '&#xe6d3;',
		'icon-briefcase': '&#xe6d4;',
		'icon-box': '&#xe6d5;',
		'icon-boom': '&#xe6d6;',
		'icon-bookmarks': '&#xe6d7;',
		'icon-bookmark': '&#xe6d8;',
		'icon-book': '&#xe6d9;',
		'icon-battery': '&#xe6da;',
		'icon-barchart': '&#xe6db;',
		'icon-bag': '&#xe6dc;',
		'icon-backspace': '&#xe6dd;',
		'icon-award': '&#xe6de;',
		'icon-attach': '&#xe6df;',
		'icon-apple': '&#xe6e0;',
		'icon-android': '&#xe6e1;',
		'icon-aim': '&#xe6e2;',
		'icon-svg': '&#xe6e3;',
		'icon-uniE6EC': '&#xe6ec;',
		'icon-uniE6ED': '&#xe6ed;',
		'icon-newspaper': '&#xe6e4;',
		'icon-image': '&#xe6ee;',
		'icon-image2': '&#xe6ef;',
		'icon-images': '&#xe6f0;',
		'icon-play2': '&#xe6e5;',
		'icon-film': '&#xe6f1;',
		'icon-pacman': '&#xe6e6;',
		'icon-calculate': '&#xe6e7;',
		'icon-calendar': '&#xe6f2;',
		'icon-keyboard2': '&#xe6f3;',
		'icon-bubble': '&#xe6e8;',
		'icon-bubbles': '&#xe6e9;',
		'icon-bubbles2': '&#xe6ea;',
		'icon-bars': '&#xe6f4;',
		'icon-mug': '&#xe6eb;',
		'icon-list2': '&#xe6f5;',
		'icon-list3': '&#xe6f6;',
		'icon-numbered-list': '&#xe6f7;',
		'icon-menu': '&#xe6f8;',
		'icon-menu2': '&#xe6f9;',
		'icon-tab': '&#xe6fa;',
		'icon-crop': '&#xe6fb;',
		'icon-scissors': '&#xe6fc;',
		'icon-font': '&#xe6fd;',
		'icon-text-height': '&#xe6fe;',
		'icon-text-width': '&#xe6ff;',
		'icon-bold': '&#xe700;',
		'icon-underline': '&#xe701;',
		'icon-italic': '&#xe702;',
		'icon-strikethrough': '&#xe703;',
		'icon-sigma': '&#xe704;',
		'icon-table': '&#xe705;',
		'icon-table2': '&#xe706;',
		'icon-insert-template': '&#xe707;',
		'icon-pilcrow': '&#xe708;',
		'icon-lefttoright': '&#xe709;',
		'icon-righttoleft': '&#xe70a;',
		'icon-paragraph-left': '&#xe70b;',
		'icon-paragraph-center': '&#xe70c;',
		'icon-paragraph-right': '&#xe70d;',
		'icon-paragraph-justify': '&#xe70e;',
		'icon-paragraph-left2': '&#xe70f;',
		'icon-paragraph-center2': '&#xe710;',
		'icon-paragraph-right2': '&#xe711;',
		'icon-paragraph-justify2': '&#xe712;',
		'icon-indent-increase': '&#xe713;',
		'icon-indent-decrease': '&#xe714;',
		'icon-newtab': '&#xe715;',
		'icon-embed': '&#xe716;',
		'icon-code2': '&#xe717;',
		'icon-console': '&#xe718;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
