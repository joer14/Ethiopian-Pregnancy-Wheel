﻿/* http://keith-wood.name/calendars.html
   Spanish localisation for calendars datepicker for jQuery.
   Traducido por Vester (xvester@gmail.com). */
(function($) {
	$.calendars.picker.regional['es'] = {
		renderer: $.calendars.picker.defaultRenderer,
		prevText: '&#x3c;Ant', prevStatus: '',
		prevJumpText: '&#x3c;&#x3c;', prevJumpStatus: '',
		nextText: 'Sig&#x3e;', nextStatus: '',
		nextJumpText: '&#x3e;&#x3e;', nextJumpStatus: '',
		currentText: 'Hoy', currentStatus: '',
		todayText: 'Hoy', todayStatus: '',
		clearText: 'Limpiar', clearStatus: '',
		closeText: 'Cerrar', closeStatus: '',
		yearStatus: '', monthStatus: '',
		weekText: 'Sm', weekStatus: '',
		dayStatus: 'DD, M d', defaultStatus: '',
		isRTL: false
	};
	$.calendars.picker.setDefaults($.calendars.picker.regional['es']);
})(jQuery);
