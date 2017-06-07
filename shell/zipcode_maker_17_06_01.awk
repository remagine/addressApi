#!/usr/bin/gawk -f

BEGIN {
	FS = "|"
}

	
function newAddress(zipcode, sido, sigungu, eupmyun, road_name, is_under, building_num1, building_num2, building_detail, bub_dong, ri, hang_dong, is_mountain, jibun1, jibun2){
	new_address = "";

	new_address = new_address sido;

	if( length( sigungu ) > 1 ){
		new_address = new_address" "sigungu;		
	}

	if( length( eupmyun ) > 1 ){
		new_address = new_address" "eupmyun" ";		
	}

	if( length( road_name ) > 1){
	new_address = new_address" "road_name;
	}

	if( is_under == 2 ) {
		new_address = new_address" 공중";
	}
		if( is_under == 1 ) {
		new_address = new_address" 지하";	
	}

	new_address = new_address" "building_num1;

	if( building_num2 > 0) {
		new_address = new_address"-"building_num2;
	}

	if( length( building_detail ) > 0) {
		new_address = new_address" ("building_detail")";
	}

	return new_address;

}

function oldAddress(zipcode, sido, sigungu, eupmyun, road_name, is_under, building_num1, building_num2, building_detail, bub_dong, ri, hang_dong, is_mountain, jibun1, jibun2){
	old_address ="";

	old_address = old_address sido;

	if( length( sigungu ) > 1 ){
		old_address = old_address" "sigungu;		
	}

	if( length( eupmyun ) == 0 ){
		old_address = old_address" "bub_dong" "jibun1;
		if( jibun2 > 0 ){
			old_address = old_address"-"jibun2;
		} 
		if( length(building_detail) > 0 ){
			old_address = old_address" ("building_detail")";
		}
	} else {
		old_address = old_address" "eupmyun" "ri" "jibun1;
		if( jibun2 > 0 ){
			old_address = old_address"-"jibun2;
		} 
	}

	return old_address;

} 

function searchArray(zipcode, sido, sigungu, eupmyun, road_name, is_under, building_num1, building_num2, building_detail, bub_dong, ri, hang_dong, is_mountain, jibun1, jibun2){
	val = "";

	val = val road_name;

	val = val","zipcode;

	if( length(sido) > 0 ){
		val = val","sido;
	}
	
	if( length(sigungu) > 0 ){
		val = val","sigungu;
	}
	
	if( length(eupmyun) > 0 ){
		val = val","eupmyun;
	}
	
	if( building_num1 > 0){
		val = val","building_num1;
	}
	
	if( building_num2 > 0 ){
		val = val","building_num1"-"building_num2;
	}

	if( length(building_detail) > 0 ){
		val = val",\""building_detail"\"";
	}

	if( length(bub_dong) > 0 ){
		val = val","bub_dong;
	}
	
	if( length(ri) > 0 ){
		val = val","ri;	
	}

	if( length(hang_dong) > 0 ){
		# 행정동명에 오타가 있다. (약 1만건) ","을 "."로 변경해야 했다. 
		gsub(",",".",hang_dong);
		# ""로 묶인 값들이 있다. 삭제해야 했다. 
		gsub("\"","",hang_dong);

		val = val","hang_dong;
	}
	
	if( jibun1 > 0 ){
		val = val","jibun1;
	}
	
	if( jibun2 > 0 ){
		val = val","jibun1"-"jibun2;
	}

	var = "{"val"}";

	return var;
}

{
	print $1"|"newAddress($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)"|"oldAddress($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)"|"tolower(searchArray($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15))
}

