package com.iropke.common.address.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Formula;
import org.hibernate.annotations.Type;

/**
 * @author Arthur
 *
 */
@Entity
@Table(name = "zipcode")
public class ZipCode {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idx;

    @Column(name = "zipcode")
    private String zipCode;

    @Column(name = "sido")
    private String sido;

    @Column(name = "sigungu")
    private String sigungu;

    @Column(name = "eupmyun")
    private String eupmyun;

    @Column(name = "road_name")
    private String roadName;

    @Column(name = "is_under")
    private char isUnder;

    @Column(name = "building_num1")
    private int buildingNum1;

    @Column(name = "building_num2")
    private int buildingNum2;

    @Column(name = "building_detail")
    private String buildingDetail;

    @Column(name = "bub_dong")
    private String bubDong;

    @Column(name = "ri")
    private String ri;

    @Column(name = "hang_dong")
    private String hangDong;

    @Column(name = "is_mountain")
    private char isMountain;

    @Column(name = "jibun1")
    private int jibun1;

    @Column(name = "jibun2")
    private int jibun2;

    @Column(name = "new_address")
    private String newAddress;

    @Column(name = "old_address")
    private String oldAddress;
    
    @Column(name = "search_array")
    @Type(type = "com.iropke.common.hibernate.ArrayType")
    private String[] search_array;

    @Formula(value = "COUNT(*) OVER()")
    private long count;

    public Integer getIdx() {
        return idx;
    }

    public void setIdx(Integer idx) {
        this.idx = idx;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getSido() {
        return sido;
    }

    public void setSido(String sido) {
        this.sido = sido;
    }

    public String getSigungu() {
        return sigungu;
    }

    public void setSigungu(String sigungu) {
        this.sigungu = sigungu;
    }

    public String getEupmyun() {
        return eupmyun;
    }

    public void setEupmyun(String eupmyun) {
        this.eupmyun = eupmyun;
    }

    public String getRoadName() {
        return roadName;
    }

    public void setRoadName(String roadName) {
        this.roadName = roadName;
    }

    public char getIsUnder() {
        return isUnder;
    }

    public void setIsUnder(char isUnder) {
        this.isUnder = isUnder;
    }

    public int getBuildingNum1() {
        return buildingNum1;
    }

    public void setBuildingNum1(int buildingNum1) {
        this.buildingNum1 = buildingNum1;
    }

    public int getBuildingNum2() {
        return buildingNum2;
    }

    public void setBuildingNum2(int buildingNum2) {
        this.buildingNum2 = buildingNum2;
    }

    public String getBuildingDetail() {
        return buildingDetail;
    }

    public void setBuildingDetail(String buildingDetail) {
        this.buildingDetail = buildingDetail;
    }

    public String getBubDong() {
        return bubDong;
    }

    public String getNewAddress() {
        return newAddress;
    }

    public void setNewAddress(String newAddress) {
        this.newAddress = newAddress;
    }

    public String getOldAddress() {
        return oldAddress;
    }

    public void setOldAddress(String oldAddress) {
        this.oldAddress = oldAddress;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }

    public void setBubDong(String bubDong) {
        this.bubDong = bubDong;
    }

    public String getRi() {
        return ri;
    }

    public void setRi(String ri) {
        this.ri = ri;
    }

    public String getHangDong() {
        return hangDong;
    }

    public void setHangDong(String hangDong) {
        this.hangDong = hangDong;
    }

    public char getIsMountain() {
        return isMountain;
    }

    public void setIsMountain(char isMountain) {
        this.isMountain = isMountain;
    }

    public int getJibun1() {
        return jibun1;
    }

    public void setJibun1(int jibun1) {
        this.jibun1 = jibun1;
    }

    public int getJibun2() {
        return jibun2;
    }

    public void setJibun2(int jibun2) {
        this.jibun2 = jibun2;
    }

    public String[] getSearch_array() {
        return search_array;
    }

    public void setSearch_array(String[] search_array) {
        this.search_array = search_array;
    }

    @Override
    public String toString() {
        return "ZipCode [idx=" + idx + ", zipCode=" + zipCode + ", sido=" + sido + ", sigungu=" + sigungu + ", eupmyun=" + eupmyun + ", roadName=" + roadName + ", isUnder="
                + isUnder + ", buildingNum1=" + buildingNum1 + ", buildingNum2=" + buildingNum2 + ", buildingDetail=" + buildingDetail + ", bubDong=" + bubDong + ", ri=" + ri
                + ", hangDong=" + hangDong + ", isMountain=" + isMountain + ", jibun1=" + jibun1 + ", jibun2=" + jibun2 + ", newAddress=" + newAddress + ", oldAddress="
                + oldAddress + ", search_array=" + Arrays.toString(search_array) + ", count=" + count + "]";
    }

  
}
