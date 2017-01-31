package com.iropke.common.address.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.iropke.common.address.dao.ZipCodeDao;
import com.iropke.common.address.entity.ZipCode;

@Service
public class ZipCodeService {

    @Autowired
    private ZipCodeDao zipCodeDao;

    /**
     * @param map
     * @param page
     * @return
     */
    @Transactional
    public List<ZipCode> search(HashMap<String, String> map, int page) {
        System.out.println("Service");
        return zipCodeDao.search(map, page);
    }
}
