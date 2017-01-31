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

var Base = function() {

	this.frm = document.getElementById("zipschfrm");
	/* 주소판별용 변수 set */
	this.sido = "";
	this.sigungu = "";
	this.zipCode = "";
	this.eupmyun = "";
	this.roadName = "";
	this.bubDong = "";
	this.ri = "";
	this.etcName = "";
	this.buildingNum1 = "";
	this.buildingNum2 = "";
	this.jibun1 = "";
	this.jibun2 = "";

	/* 시, 시도구군 판별용 배열변수 */
	var codeTypeArr = new Array();
	var codeArr = new Array();

	codeArr[0] = "강릉시";

	codeArr[1] = "고성군";

	codeArr[2] = "동해시";

	codeArr[3] = "삼척시";

	codeArr[4] = "속초시";

	codeArr[5] = "양구군";

	codeArr[6] = "양양군";

	codeArr[7] = "영월군";

	codeArr[8] = "원주시";

	codeArr[9] = "인제군";

	codeArr[10] = "정선군";

	codeArr[11] = "철원군";

	codeArr[12] = "춘천시";

	codeArr[13] = "태백시";

	codeArr[14] = "평창군";

	codeArr[15] = "홍천군";

	codeArr[16] = "화천";

	codeArr[17] = "화천군";

	codeArr[18] = "횡성군";

	codeArr[19] = "평창군";

	codeArr[20] = "가평군";

	codeArr[21] = "계양구";

	codeArr[22] = "고양시";

	codeArr[23] = "고양시 덕양구";

	codeArr[24] = "고양시 일산구";

	codeArr[25] = "고양시 일산동구";

	codeArr[26] = "고양시 일산서구";

	codeArr[27] = "과천시";

	codeArr[28] = "광명시";

	codeArr[29] = "광주시";

	codeArr[30] = "구리시";

	codeArr[31] = "군포시";

	codeArr[32] = "김포시";

	codeArr[33] = "남양주시";

	codeArr[34] = "덕양구";

	codeArr[35] = "동두천시";

	codeArr[36] = "부천시 소사구";

	codeArr[37] = "부천시 오정구";

	codeArr[38] = "부천시 원미구";

	codeArr[39] = "성남시 분당구";

	codeArr[40] = "성남시 수정구";

	codeArr[41] = "성남시 중원구";

	codeArr[42] = "수원구 영통구";

	codeArr[43] = "수원구 영통동";

	codeArr[44] = "수원시";

	codeArr[45] = "수원시 권선구";

	codeArr[46] = "수원시 영통구";

	codeArr[47] = "수원시 장안구";

	codeArr[48] = "수원시 팔달구";

	codeArr[49] = "시흥시";

	codeArr[50] = "안산시";

	codeArr[51] = "안산시 단원구";

	codeArr[52] = "안산시 상록구";

	codeArr[53] = "안성시";

	codeArr[54] = "안양시 동안구";

	codeArr[55] = "안양시 만안구";

	codeArr[56] = "양주군";

	codeArr[57] = "양주시";

	codeArr[58] = "양평군";

	codeArr[59] = "여주군";

	codeArr[60] = "여주시";

	codeArr[61] = "연천군";

	codeArr[62] = "오산시";

	codeArr[63] = "용인시";

	codeArr[64] = "용인시 기흥구";

	codeArr[65] = "용인시 수지구";

	codeArr[66] = "용인시 처인구";

	codeArr[67] = "웅진군";

	codeArr[68] = "의왕시";

	codeArr[69] = "의정부시";

	codeArr[70] = "이천시";

	codeArr[71] = "파주군";

	codeArr[72] = "파주시";

	codeArr[73] = "평택시";

	codeArr[74] = "포천군";

	codeArr[75] = "포천시";

	codeArr[76] = "하남시";

	codeArr[77] = "화성시";

	codeArr[78] = "동두천시";

	codeArr[79] = "시흥시";

	codeArr[80] = "용인";

	codeArr[81] = "포천시";

	codeArr[82] = "포천시 영북면";

	codeArr[83] = "거제시";

	codeArr[84] = "거창군";

	codeArr[85] = "고성군";

	codeArr[86] = "김해시";

	codeArr[87] = "남해군";

	codeArr[88] = "마산시";

	codeArr[89] = "밀양시";

	codeArr[90] = "사천시";

	codeArr[91] = "산청군";

	codeArr[92] = "양산시";

	codeArr[93] = "의령군";

	codeArr[94] = "진주시";

	codeArr[95] = "진해시";

	codeArr[96] = "창녕군";

	codeArr[97] = "창원시";

	codeArr[98] = "창원시 마산합포구";

	codeArr[99] = "창원시 마산회원구";

	codeArr[100] = "창원시 성산구";

	codeArr[101] = "창원시 의창구";

	codeArr[102] = "창원시 진해구";

	codeArr[103] = "통영시";

	codeArr[104] = "하동군";

	codeArr[105] = "함안군";

	codeArr[106] = "함양군";

	codeArr[107] = "합천군";

	codeArr[108] = "경산시";

	codeArr[109] = "경주시";

	codeArr[110] = "고령군";

	codeArr[111] = "구미시";

	codeArr[112] = "군위군";

	codeArr[113] = "김천시";

	codeArr[114] = "문경시";

	codeArr[115] = "봉화군";

	codeArr[116] = "상주시";

	codeArr[117] = "성주군";

	codeArr[118] = "안동시";

	codeArr[119] = "영덕군";

	codeArr[120] = "영양군";

	codeArr[121] = "영주시";

	codeArr[122] = "영천시";

	codeArr[123] = "예천군";

	codeArr[124] = "울릉군";

	codeArr[125] = "울진군";

	codeArr[126] = "의성군";

	codeArr[127] = "청도군";

	codeArr[128] = "청송군";

	codeArr[129] = "칠곡군";

	codeArr[130] = "포항시";

	codeArr[131] = "포항시 남구";

	codeArr[132] = "포항시 북구";

	codeArr[133] = "안동시";

	codeArr[134] = "금암동";

	codeArr[135] = "마동";

	codeArr[136] = "중동";

	codeArr[137] = "광산구";

	codeArr[138] = "남구";

	codeArr[139] = "동구";

	codeArr[140] = "북구";

	codeArr[141] = "서구";

	codeArr[142] = "논산시";

	codeArr[143] = "채운면";

	codeArr[144] = "남구";

	codeArr[145] = "달서구";

	codeArr[146] = "달성군";

	codeArr[147] = "동구";

	codeArr[148] = "북구";

	codeArr[149] = "서구";

	codeArr[150] = "수성구";

	codeArr[151] = "중구";

	codeArr[152] = "대덕구";

	codeArr[153] = "동구";

	codeArr[154] = "서구";

	codeArr[155] = "유성구";

	codeArr[156] = "중구";

	codeArr[157] = "강서구";

	codeArr[158] = "금정구";

	codeArr[159] = "기장군";

	codeArr[160] = "남구";

	codeArr[161] = "동구";

	codeArr[162] = "동래구";

	codeArr[163] = "부산진구";

	codeArr[164] = "북구";

	codeArr[165] = "사상구";

	codeArr[166] = "사하구";

	codeArr[167] = "서구";

	codeArr[168] = "수영구";

	codeArr[169] = "연제구";

	codeArr[170] = "영도구";

	codeArr[171] = "울주군";

	codeArr[172] = "중구";

	codeArr[173] = "해운대구";

	codeArr[174] = "남구";

	codeArr[175] = "서귀포시";

	codeArr[176] = "서귀포시";

	codeArr[177] = "서귀포";

	codeArr[178] = "서귀포시";

	codeArr[179] = "강남구";

	codeArr[180] = "강동구";

	codeArr[181] = "강북구";

	codeArr[182] = "강서구";

	codeArr[183] = "관악구";

	codeArr[184] = "광진구";

	codeArr[185] = "구로구";

	codeArr[186] = "금천구";

	codeArr[187] = "노원구";

	codeArr[188] = "도봉구";

	codeArr[189] = "동대문구";

	codeArr[190] = "동작구";

	codeArr[191] = "마포구";

	codeArr[192] = "서대문구";

	codeArr[193] = "서초구";

	codeArr[194] = "성동구";

	codeArr[195] = "성북구";

	codeArr[196] = "송파구";

	codeArr[197] = "양천구";

	codeArr[198] = "영등포구";

	codeArr[199] = "용산구";

	codeArr[200] = "은평구";

	codeArr[201] = "종로구";

	codeArr[202] = "중구";

	codeArr[203] = "중랑구";

	codeArr[204] = "중원구";

	codeArr[205] = " ";

	codeArr[206] = "권선구";

	codeArr[207] = "영통구";

	codeArr[208] = "영통구";

	codeArr[209] = "장안구";

	codeArr[210] = "팔달구";

	codeArr[211] = "월등면";

	codeArr[212] = "대야동";

	codeArr[213] = "시흥시";

	codeArr[214] = "신천동";

	codeArr[215] = "은행동";

	codeArr[216] = "돌산읍";

	codeArr[217] = "여천군";

	codeArr[218] = "남구";

	codeArr[219] = "동구";

	codeArr[220] = "북구";

	codeArr[221] = "울주군";

	codeArr[222] = "중구";

	codeArr[223] = "강화군";

	codeArr[224] = "계양구";

	codeArr[225] = "남구";

	codeArr[226] = "남동구";

	codeArr[227] = "동구";

	codeArr[228] = "부평구";

	codeArr[229] = "서구";

	codeArr[230] = "연수구";

	codeArr[231] = "옹진군";

	codeArr[232] = "중구";

	codeArr[233] = "강진군";

	codeArr[234] = "고흥군";

	codeArr[235] = "곡성군";

	codeArr[236] = "광양시";

	codeArr[237] = "구례군";

	codeArr[238] = "나주시";

	codeArr[239] = "담양군";

	codeArr[240] = "목포시";

	codeArr[241] = "무안군";

	codeArr[242] = "보성군";

	codeArr[243] = "순천시";

	codeArr[244] = "신안군";

	codeArr[245] = "여수시";

	codeArr[246] = "영광군";

	codeArr[247] = "영암군";

	codeArr[248] = "완도군";

	codeArr[249] = "장성군";

	codeArr[250] = "장흥군";

	codeArr[251] = "진도군";

	codeArr[252] = "함평군";

	codeArr[253] = "해남군";

	codeArr[254] = "화순군";

	codeArr[255] = "장성군";

	codeArr[256] = "고창군";

	codeArr[257] = "군산시";

	codeArr[258] = "김제시";

	codeArr[259] = "남원시";

	codeArr[260] = "무주군";

	codeArr[261] = "부안군";

	codeArr[262] = "순창군";

	codeArr[263] = "완주군";

	codeArr[264] = "익산시";

	codeArr[265] = "임실군";

	codeArr[266] = "장수군";

	codeArr[267] = "전주시 덕진구";

	codeArr[268] = "전주시 완산구";

	codeArr[269] = "정읍시";

	codeArr[270] = "진안군";

	codeArr[271] = "남제주군";

	codeArr[272] = "북제주군";

	codeArr[273] = "서귀포시";

	codeArr[274] = "제주시";

	codeArr[275] = "흥덕구";

	codeArr[276] = "계룡시";

	codeArr[277] = "공주시";

	codeArr[278] = "금산군";

	codeArr[279] = "논산시";

	codeArr[280] = "당진군";

	codeArr[281] = "당진시";

	codeArr[282] = "보령시";

	codeArr[283] = "부여군";

	codeArr[284] = "서산시";

	codeArr[285] = "서천군";

	codeArr[286] = "아산시";

	codeArr[287] = "연기군";

	codeArr[288] = "예산군";

	codeArr[289] = "천안시";

	codeArr[290] = "천안시 동남구";

	codeArr[291] = "천안시 서북구";

	codeArr[292] = "청양군";

	codeArr[293] = "태안군";

	codeArr[294] = "홍성군";

	codeArr[295] = "괴산군";

	codeArr[296] = "단양군";

	codeArr[297] = "보은군";

	codeArr[298] = "영동군";

	codeArr[299] = "옥천군";

	codeArr[300] = "음성군";

	codeArr[301] = "제천시";

	codeArr[302] = "증평군";

	codeArr[303] = "진천군";

	codeArr[304] = "청원군";

	codeArr[305] = "청주시 상당구";

	codeArr[306] = "청주시 서원구";

	codeArr[307] = "청주시 청원구";

	codeArr[308] = "청주시 흥덕구";

	codeArr[309] = "충주시";

	codeArr[310] = "서천군";

	codeArr[311] = "가산면";

	codeArr[312] = "소흘읍";
	
	codeArr[313] = "안양시";
	
	codeArr[314] = "청주시";
	

	codeTypeArr[0] = "서울특별시";
	codeTypeArr[1] = "부산광역시";
	codeTypeArr[2] = "대전광역시";
	codeTypeArr[3] = "대구광역시";
	codeTypeArr[4] = "인천광역시";
	codeTypeArr[5] = "광주광역시";
	codeTypeArr[6] = "울산광역시";
	codeTypeArr[7] = "충청북도";
	codeTypeArr[8] = "충청남도";
	codeTypeArr[9] = "전라북도";
	codeTypeArr[10] = "전라남도";
	codeTypeArr[11] = "경상북도";
	codeTypeArr[12] = "경상남도";
	codeTypeArr[13] = "제주특별자치도";
	codeTypeArr[14] = "세종특별자치시";
	codeTypeArr[15] = "강원도";
	codeTypeArr[16] = "경기도";
	codeTypeArr[17] = "서울시";
	codeTypeArr[18] = "부산시";
	codeTypeArr[19] = "대전시";
	codeTypeArr[20] = "대구시";
	codeTypeArr[21] = "인천시";
	codeTypeArr[22] = "광주시";
	codeTypeArr[23] = "울산시";
	codeTypeArr[24] = "충북";
	codeTypeArr[25] = "충남";
	codeTypeArr[26] = "전북";
	codeTypeArr[27] = "전남";
	codeTypeArr[28] = "경북";
	codeTypeArr[29] = "경남";
	codeTypeArr[30] = "제주도";
	codeTypeArr[31] = "세종시";

	/* 5자리, 6자리 우편번호인지 판별 */
	this.fncCheckZipCd = function(srchVal) {
		var num = "1234567890-";
		var chkcnum = true;

		for (i = 0; i < srchVal.length; i++) {
			if (num.indexOf(srchVal.charAt(i)) < 0) {
				chkcnum = false;
			}
		}
		if (chkcnum && srchVal.length == 5) {
			this.zipCode = srchVal;
		} else {
			chkcnum = false;
		}
		return chkcnum;
	};

	/* 공백 및 특수문자 제거 */
	this.doValidJuso1 = function(str) {
		str = str.replace(/(^\s*)|(\s*$)/g, ""); // 앞뒤 공백 제거
		return str.split(/[%]/).join(""); // 특수문자 % 제거
	};

	/* 단순검색 방지 */
	this.doValidJuso2 = function(str) {
		var errMsg = "주소를 상세히 입력해 주십시오.";

		// 시도만 입력했을 경우 에러메시지 처리
		for (var i = 0; i < codeTypeArr.length; i++) {
			if (str == codeTypeArr[i]) {
				alert(errMsg);
				return false;
			}
		}
		// 시군구만 입력했을 경우 에러메시지 처리
		for (var i = 0; i < codeArr.length; i++) {
			if (str == codeArr[i]) {
				alert(errMsg);
				return false;
			}
		}
		return true;
	}

	/* 시도, 시군구 분별하기 위해 번지제거 */
	this.doCheckJuso = function(str) {
		var tmpStr = str;
		var charStr;
		var tmpLen;

		var regExp1 = /([0-9]|번지)$/;
		var regExp2 = /번지$/;
		var chkChar = /^([0-9]|-)$/;

		if (regExp1.test(str)) {
			tmpStr = str.split(regExp2).join("");
			tmpLen = tmpStr.length;

			for (var i = tmpLen - 1; i >= 0; i--) {
				charStr = tmpStr.charAt(i);

				if (!chkChar.test(charStr)) {
					if (charStr != " ") {
						tmpStr = this.doInsStr(tmpStr, i + 1, " ");
					}
					break;
				}
			}
		}
		return tmpStr;
	};

	/* 입력문자열로 주소 판별 (동가 입력시 마지막 글자 동,가 판별 ) */
	this.doChkStr = function(sText, validChars) {
		var flag = false;
		var tmpChar;

		for (var i = 0; i < validChars.length; i++) {
			tmpChar = validChars.charAt(i);

			if (sText.charAt(sText.length - 1) == tmpChar) {
				flag = true;
			}
		}

		return flag;
	};

	/* 숫자 chk */
	this.doCheckNumber = function(num) {
		var ValidChars = "0123456789";
		var IsNumber = true;
		var Char;

		for (i = 0; i < num.length && IsNumber == true; i++) {
			Char = num.charAt(i);
			if (ValidChars.indexOf(Char) == -1) {
				IsNumber = false;
			}
		}
		return IsNumber;
	};

	this.doInsStr = function(key, inx, str) {
		if (inx > 0) {
			return key.substring(0, inx) + str + key.substring(inx, key.length);
		} else {
			return str + key;
		}
	};

	/* 시도 가져오기 */
	this.doGetSido = function(str) {
		for (var i = 0; i < codeTypeArr.length; i++) {
			if (str == codeTypeArr[i]) {
				this.sido = this.doGetFullSidoName(str);
				return true;
			}
		}
		return false;
	};

	/* 전남 -> 전라남도로 변경해서 반환 */
	this.doGetFullSidoName = function(str) {
		var fullSido = str;
		if (str.indexOf("서울시") > -1) {
			fullSido = "서울특별시";
		} else if (str.indexOf("부산시") > -1) {
			fullSido = "부산광역시";
		} else if (str.indexOf("대전시") > -1) {
			fullSido = "대전광역시";
		} else if (str.indexOf("대구시") > -1) {
			fullSido = "대구광역시";
		} else if (str.indexOf("인천시") > -1) {
			fullSido = "인천광역시";
		} else if (str.indexOf("광주시") > -1) {
			fullSido = "광주광역시";
		} else if (str.indexOf("울산시") > -1) {
			fullSido = "울산광역시";
		} else if (str.indexOf("충북") > -1) {
			fullSido = "충청북도";
		} else if (str.indexOf("충남") > -1) {
			fullSido = "충청남도";
		} else if (str.indexOf("전북") > -1) {
			fullSido = "전라북도";
		} else if (str.indexOf("전남") > -1) {
			fullSido = "전라남도";
		} else if (str.indexOf("경북") > -1) {
			fullSido = "경상북도";
		} else if (str.indexOf("경남") > -1) {
			fullSido = "경상남도";
		} else if (str.indexOf("제주도") > -1) {
			fullSido = "제주특별자치도";
		} else if (str.indexOf("세종시") > -1) {
			fullSido = "세종특별자치시";
		}
		return fullSido;
	};

	/* 시군구 가져오기 */
	this.doGetSgg = function(str) {
		for (var i = 0; i < codeArr.length; i++) {
			if (str == codeArr[i]) {
				this.sigungu = codeArr[i];
				return true;
			}
		}
		return false;
	};
}

var search = function(page) {
	page = page || 0;
	var moBase = new Base();

	var srchVal = moBase.frm.querySelector('#keyword').value;
	srchVal = moBase.doValidJuso1(srchVal); // 특수문자 공백제거
	if (!moBase.doValidJuso2(srchVal)) {
		return false;
	} // 단순검색 방지

	var chkZipCd = moBase.fncCheckZipCd(srchVal);

	/* 검색어가 우편번호로 이루어지지 않았을 경우 */
	if (chkZipCd) {
		// 우편번호 검색
		moBase.frm.zipCode.value = moBase.zipCode;
		return true;
	}

	/* 판별 logic start */
	if (srchVal == "") {
		alert("검색어를 입력해 주세요");
		moBase.frm.querySelector('#keyword').focus();
		return false;
	}
	if (srchVal.length <= 2) {
		alert("검색어를 2글자이상으로 입력해 주십시오");
		return false;
	}

	$.ajax({
		url : "/misc/zipcode/zipcode/count/" + page,
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
