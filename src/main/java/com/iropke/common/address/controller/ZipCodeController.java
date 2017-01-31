package com.iropke.common.address.controller;

import java.util.HashMap;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.iropke.common.address.entity.ZipCode;
import com.iropke.common.address.service.ZipCodeService;
import com.iropke.common.address.util.Paging;

/**
 * @author Arthur
 *
 */
@Controller
@RequestMapping("/misc/zipcode")
public class ZipCodeController {

    @Autowired
    private ZipCodeService zipCodeService;

    @RequestMapping(value = "/zipcode")
    public String zipcode() {
        return "/misc/zipcode/zipcode";
    }

    /**
     * @param model
     * @param page
     * @param srchVal
     * @param response
     * @return
     */
    @RequestMapping(value = "/zipcode/count/{page}", method = RequestMethod.GET)
    public String counts(Model model, @PathVariable int page, @RequestParam(value = "srchVal") String srchVal, HttpServletResponse response) {

        int totalCount = 0; // 검색된 결과 수
        HashMap<String, String> param = new HashMap<String, String>();
        // 검색조건 일괄 소문자 처리
        srchVal = srchVal.toLowerCase();
        param.put("srchVal", srchVal);

        System.out.println("controller ::: " + param.toString());

        List<ZipCode> zipCodes = zipCodeService.search(param, page);
        if (!zipCodes.isEmpty()) {
            totalCount = (int) zipCodes.get(0).getCount();
        }

        Paging paging = Paging.builder().totalCount(totalCount).currentPage(page).build();

        System.out.println("paging :" + paging.getLastPage() + "\n zipCodes ::" + zipCodes);

        model.addAttribute("zipCodes", zipCodes);
        model.addAttribute("totalCount", totalCount);
        model.addAttribute("paging", paging);
        model.addAttribute("pageUrl", "");

        return "/misc/zipcode/inc_zipcode_list";

    }

}