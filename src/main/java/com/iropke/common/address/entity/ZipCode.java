package com.iropke.common.address.entity;

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

    public String[] getSearch_array() {
        return search_array;
    }

    public void setSearch_array(String[] search_array) {
        this.search_array = search_array;
    }

}
