# 이롭게 주소 API 


## 소개
---
 
이롭게 소유의 주소 및 우편번호 찾기 API입니다.
 
 
## 사용방법
---
 
찾고자 하는 주소를 입력한 후 검색합니다.
검색 유형은 다음과 같습니다.
 

     - 도로명  + 건물번호 (테헤란로37길 7)
     - 법정동명  +  지번 (합정동 390-3)
     - 행정동명  + 지번 (잠실3동 47)
     - 읍면리  + 지번 (장산리 447-1)
     - 건물이름 (조이타워)


## 사용 공공 Data
---
 
공공 Data는 우체국 제공 Data를 사용합니다.
[Data 받기](https://www.epost.go.kr/search/zipcode/areacdAddressDown.jsp)
 
우체국 Data에 대한 분석링크 입니다.
[분석링크](https://docs.google.com/document/d/1g8qYv1fkfzZsEX0xNHLtVKaiS8QhRiOKOdzcqnNAR-k/edit)
 
 
## 업데이트 절차
---
 

 >우체국 Data는 매달 업데이트가 갱신이 됩니다.
 > 갱신되는 Data는 평균 35만 row입니다. 
 >현재 업데이트는 **선택적 업데이트**가 아니라
 >  **일괄삭제 일괄삽입** 방식으로 진행되고 있습니다.

  
다음 업데이트 절차 문서를 참고하세요
[업데이트 절차](https://docs.google.com/document/d/14eX122q6fGBw_STu94zXrxyTybiEv4kY9UzeX7FGGu8/edit)

_Shell script 파일들은  [shell 디렉토리](http://gitlab.iropke.com/arthur/Iropke-Address/tree/develop/shell)에 있습니다._