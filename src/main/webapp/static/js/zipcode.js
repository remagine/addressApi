$(document).ready(function() {

	// 검색버튼
	$('#btnZipSearch').click(function() {
		return search();
	});

	$('#keyword').keypress(function(key) {
		if (key.keyCode == 13) {
			return search();
		}
	});

	$(document).on('click', '.x-btn-page', function() {
		var pageNum = $(this).data('page-num');
		search(pageNum);
	});
});

/* 전남 -> 전라남도로 변경해서 반환 */
var doGetFullSidoName = function(str) {
	var fullSido = str;
	if (str.indexOf("서울시") > -1) {
		fullSido = str.replace(/서울시/gi ,"서울특별시");
	} else if (str.indexOf("부산시") > -1) {
		fullSido =  str.replace(/부산시/gi ,"부산광역시"); 
	} else if (str.indexOf("대전시") > -1) {
		fullSido = str.replace(/대전시/gi ,"대전광역시"); 
	} else if (str.indexOf("대구시") > -1) {
		fullSido = str.replace(/대구시/gi ,"대구광역시");
	} else if (str.indexOf("인천시") > -1) {
		fullSido = str.replace(/인천시/gi ,"인천광역시");
	} else if (str.indexOf("광주시") > -1) {
		fullSido = str.replace(/광주시/gi ,"광주광역시");
	} else if (str.indexOf("울산시") > -1) {
		fullSido = str.replace(/울산시/gi ,"울산광역시");
	} else if (str.indexOf("충북") > -1) {
		fullSido = str.replace(/충북/gi ,"충청북도");
	} else if (str.indexOf("충남") > -1) {
		fullSido = str.replace(/충남/gi ,"충청남도");
	} else if (str.indexOf("전북") > -1) {
		fullSido = str.replace(/전북/gi ,"전라북도");
	} else if (str.indexOf("전남") > -1) {
		fullSido = str.replace(/전남/gi ,"전라남도");
	} else if (str.indexOf("경북") > -1) {
		fullSido = str.replace(/경북/gi ,"경상북도");
	} else if (str.indexOf("경남") > -1) {
		fullSido = str.replace(/경남/gi ,"경상남도");
	} else if (str.indexOf("제주도") > -1) {
		fullSido = str.replace(/제주도/gi ,"제주특별자치도");
	} else if (str.indexOf("세종시") > -1) {
		fullSido = str.replace(/세종시/gi ,"세종특별자치시");
	}
	return fullSido;
};

var search = function(page) {
	page = page || 0;	

	var srchVal = $('#keyword').val();
	
	/* 판별 logic start */
	if (srchVal == "") {
		alert("검색어를 입력해 주세요");
		$('#keyword').focus();
		return false;
	}	
	
	srchVal = doGetFullSidoName(srchVal);
	console.log(srchVal);
	$.ajax({
		url : "/misc/zipcode/count/" + page,
		type : "GET",
		data : {
			'srchVal' : srchVal
		},
		success : function(response) {

			$('#zipCode_table').remove();
			$('#result').remove();
			$('#table_wrapper').html(response);
		}
	});
	return true;

}
