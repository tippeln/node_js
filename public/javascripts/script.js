// JavaScript Document

$(function() {
	$('ul.list li:odd').addClass("odd");
	$('table tbody tr:odd').addClass("odd");

	// 肝癌切り替え時に肝癌用のアップロードフォームに切り替える
	$('select[name="upload"]').on('change', function() {
		var $this = $(this);
		var liverCancer = '19';
		console.log($this.val())
		if($this.val() === liverCancer) {
			$('.except-liver-cancer').addClass('hidden');
			$('.liver-cancer').removeClass('hidden');

			$('.except-liver-cancer select[name="nendo"]').prop('disabled', true);
			$('.liver-cancer select[name="nendo"]').prop('disabled', false);
		}else {
			$('.except-liver-cancer').removeClass('hidden');
			$('.liver-cancer').addClass('hidden');

			$('.except-liver-cancer select[name="nendo"]').prop('disabled', false);
			$('.liver-cancer select[name="nendo"]').prop('disabled', true);
		}
	})

	$(window).on('load', function() {
		var upload = $('select[name="upload"]').val();
		var liverCancer = '19';
		if(upload === liverCancer) {
			$('.except-liver-cancer').addClass('hidden');
			$('.liver-cancer').removeClass('hidden');

			$('.except-liver-cancer select[name="nendo"]').prop('disabled', true);
			$('.liver-cancer select[name="nendo"]').prop('disabled', false);
		}else {
			$('.except-liver-cancer').removeClass('hidden');
			$('.liver-cancer').addClass('hidden');

			$('.except-liver-cancer select[name="nendo"]').prop('disabled', false);
			$('.liver-cancer select[name="nendo"]').prop('disabled', true);
		}
	})
});

