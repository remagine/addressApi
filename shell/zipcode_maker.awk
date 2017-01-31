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

	if( building_num1 >0 ){
		val = val","road_name" "building_num1;
	}

	if( building_num2 > 0 ) {
		val = val","road_name" "building_num1"-"building_num2;
	}

	if( length(building_detail) > 0 ) {
		val = val",\""building_detail"\"";
	}

	if( length(eupmyun) > 1) {
		val = val","eupmyun;
	}

	if( length(eupmyun) > 1 && length(ri) > 1) {
		val = val","eupmyun" "ri;
	}

	if( length(ri) > 1 ) {
		val = val","ri;
		if(length(ri) > 1 && jibun1 > 0){
		val = val","ri" "jibun1;
		}
		if(length(ri) > 1 && jibun2 > 0 ){
			val = val","ri" "jibun1"-"jibun2;
		}
	}

	if( length(bub_dong) > 1 ){
		val = val","bub_dong;
		if(length(bub_dong) > 1 && jibun1 > 0 ){
		val = val","bub_dong" "jibun1;
		}
		if(length(bub_dong) > 1 && jibun2 > 0){
		val = val","bub_dong" "jibun1"-"jibun2;	
		}
	}

	if( length(hang_dong) > 1 ){
		# 행정동명에 오타가 있다. (약 1만건) ","을 "."로 변경해야 했다. 
		gsub(",",".",hang_dong);
		# ""로 묶인 값들이 있다. 삭제해야 했다. 
		gsub("\"","",hang_dong);

		val = val","hang_dong;
		if(length(hang_dong) > 1 && jibun1 > 0 ){
		val = val","hang_dong" "jibun1;
		}
		if(length(hang_dong) > 1 && jibun2 > 0){
		val = val","hang_dong" "jibun1"-"jibun2;	
		}
	}

	# 시군구 검색 조건 추가해봄
	val = val","sigungu" "road_name;

	if( building_num1 >0 ){
		val = val","sigungu" "road_name" "building_num1;
	}

	if( building_num2 > 0 ) {
		val = val","sigungu" "road_name" "building_num1"-"building_num2;
	}

	if( length(building_detail) > 0 ) {
		val = val","road_name" \""building_detail"\"";
	}

	if( length(eupmyun) > 1) {
		val = val","sigungu" "eupmyun;
	}

	if( length(eupmyun) > 1 && length(ri) > 1) {
		val = val","sigungu" "eupmyun" "ri;
	}

	if( length(ri) > 1 ) {
		val = val","ri;
		if(length(ri) > 1 && jibun1 > 0){
		val = val","sigungu" "ri" "jibun1;
		}
		if(length(ri) > 1 && jibun2 > 0 ){
			val = val","sigungu" "ri" "jibun1"-"jibun2;
		}
	}

	if( length(bub_dong) > 1 ){
		val = val","sigungu" "bub_dong;
		if(length(bub_dong) > 1 && jibun1 > 0 ){
		val = val","sigungu" "bub_dong" "jibun1;
		}
		if(length(bub_dong) > 1 && jibun2 > 0){
		val = val","sigungu" "bub_dong" "jibun1"-"jibun2;	
		}
	}

	if( length(hang_dong) > 1 ){
		# 행정동명에 오타가 있다. (약 1만건) ","을 "."로 변경해야 했다. 
		gsub(",",".",hang_dong);
		# ""로 묶인 값들이 있다. 삭제해야 했다. 
		gsub("\"","",hang_dong);

		val = val","sigungu" "hang_dong;
		if(length(hang_dong) > 1 && jibun1 > 0 ){
		val = val","sigungu" "hang_dong" "jibun1;
		}
		if(length(hang_dong) > 1 && jibun2 > 0){
		val = val","sigungu" "hang_dong" "jibun1"-"jibun2;	
		}
	}

	var = "{"val"}";

	return var;
}

{
	print $1"|"$2"|"$3"|"$4"|"$5"|"$6"|"$7"|"$8"|"$9"|"$10"|"$11"|"$12"|"$13"|"$14"|"$15"|"newAddress($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)"|"oldAddress($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)"|"tolower(searchArray($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15))
}

