var chet = 1;
			window.onload = function () { setTimeout(frout, 5000); }
			function frout() {
			chet++;
			if (chet>3) {chet=0;}
				switch(chet) {
				case 1:
					document.getElementById('img').src = "http://im3-tub.yandex.net/i?id=53419835-01";
					break;
				case 2:
					document.getElementById('img').src = "http://im5-tub.yandex.net/i?id=61220081-06";
					break;
				case 3:
					document.getElementById('img').src = "http://im3-tub.yandex.net/i?id=58652339-02";
					break;
				}
			setTimeout(frout, 5000);
			}