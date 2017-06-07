#!/bin/sh

# 특정 폴더에 있는 파일들 중 *.txt 파일들을 인자로 넣는다. 
# ls 로 찾은 후 for 문을 각각 돌려야 한다. 
# 원본 파일은 ~/sql/zip_data 폴더에 넣는다.
# 그리고 awk를 통해 파일명을 추출해서 인자로 받는다. 

#sh파일 awk파일이 위치한 폴더이다
SQL="/home/arthur/sql/"
# 원본 데이터 18개가 들어갈 폴더이다
DIR="/home/arthur/sql/zip_data/"
# Enconding 변환 , 컬럼 변환이 된 파일이 들어갈 폴더이다.
TEMP="/home/arthur/sql/zip_data_tmp/"
# 완성된 csv 파일 저장폴더이다. 
CONVERT="/home/arthur/sql/zip_data_converted/"


echo $CONVERT
# ls 검색을 통해 파일 네임을 찾아낸다. 
target=`ls -l $DIR | awk '{print $9}'`

# 찾아낸 파일 네임을 변수에 담아 아래 로직을 실행한 후 파일에 하나씩 붙여넣는다. 
for i in `echo $target`
do
# 파일에서 필요없는 컬럼과 테이블 Header를 제거 한다. 
tail -n +2  $DIR$i | cut -d'|' -f 1,2,4,6,9,11,12,13,16,18-22,24 > $TEMP$i.'tmp'

#인코딩을 utf-8로 바꿔준다.
iconv -f 'CP949' -t 'utf-8' -o $TEMP$i.'convert' $TEMP$i.'tmp';

#변환에 사용된 파일은 삭제한다. 
rm $TEMP$i.'tmp';

# 해달 년,월로 데이터이름을 정해준다. 
cat $TEMP$i.'convert' >> $CONVERT"zipcode_"$(date +%Y)_$(date +%m).csv;

#역시 변환에 사용된 파일을 삭제한다
rm $TEMP$i.'convert';
done

# 만들어놓은 awk 파일을 통해 컬럼을 추가한다. 
cat $CONVERT"zipcode_"$(date +%Y)_$(date +%m).csv | $SQL"zipcode_maker_17_06_01.awk" > zipcode_$(date +%Y)_$(date +%m).dump
echo zipcode_$(date +%Y)_$(date +%m).dump ':: done!'
