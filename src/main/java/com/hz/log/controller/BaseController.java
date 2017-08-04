package com.hz.log.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;

/**
 * Created by Polo on 2017/7/31.
 */
public class BaseController {
    @ModelAttribute
    public void populateModel(Model model) {
        model.addAttribute("Global_ViewRoot", "/WEB-INF/views");
    }
}
