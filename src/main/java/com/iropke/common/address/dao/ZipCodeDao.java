package com.iropke.common.address.dao;

import java.util.HashMap;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.hibernate.type.CustomType;
import org.springframework.stereotype.Repository;

import com.iropke.common.address.entity.ZipCode;
import com.iropke.common.address.util.Const;
import com.iropke.common.hibernate.ArrayType;

/**
 * @author Arthur
 *
 */
@Repository
public class ZipCodeDao extends DaoBase {

    /**
     * @param map
     * @param page
     * @return
     */
    @SuppressWarnings("unchecked")
    public List<ZipCode> search(HashMap<String, String> map, int page) {

        String srchVal = map.get("srchVal");// 검색어 원본
        String[] searchArray = new String[] {srchVal};
        
        Integer offset = page * Const.ADMIN_LIST_SIZE; // 검색 시작값

        System.out.println("Dao" + searchArray[searchArray.length-1]);
      
        Criteria c = session().createCriteria(ZipCode.class);
        
        List<ZipCode> zipCodes = c.add(Restrictions.
                sqlRestriction("search_array @> ?", searchArray, new CustomType(new ArrayType())))
                .setMaxResults(Const.ADMIN_LIST_SIZE)
                .setFirstResult(offset).list();
        
        return zipCodes;

    }
}
