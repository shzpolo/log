package com.hz.log.controller;

import com.google.gson.Gson;
import com.hz.log.bean.User;
import com.hz.log.bean.Tip;
import com.hz.log.imp.UserServiceImp;
import com.hz.log.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.sql.Timestamp;

/**
 * Created by Polo on 2017/7/31.
 */

@Controller
public class IndexController extends BaseController {
    @Autowired
    private UserService userService;
    @Autowired
    private HttpSession session;

    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ModelAndView index() throws Exception {
        User user = (User)session.getAttribute("user");
        ModelAndView modelAndView;
        if(user == null) {
            modelAndView = new ModelAndView("welcome");
        }
        else {
            modelAndView = new ModelAndView("index");
        }
        return modelAndView;
    }

    @RequestMapping(value = "/login.html", method = RequestMethod.GET)
    public ModelAndView login() throws Exception {
        ModelAndView modelAndView;
        modelAndView = new ModelAndView("login");
        return modelAndView;
    }

    @RequestMapping(value = "/register.html", method = RequestMethod.GET)
    public ModelAndView register() throws Exception {
        ModelAndView modelAndView;
        modelAndView = new ModelAndView("register");
        return modelAndView;
    }
    @RequestMapping(value = "/index.html", method = RequestMethod.GET)
    public ModelAndView goIndex() throws Exception {
        if(session.isNew()) {
            return new ModelAndView("welcome");
        }
        else{
            return new ModelAndView("index");
        }
    }

    @RequestMapping(value = "/welcome.html", method = RequestMethod.GET)
    public ModelAndView logout() throws Exception {
        session.invalidate();
        ModelAndView modelAndView;
        modelAndView = new ModelAndView("welcome");
        return modelAndView;
    }

    @RequestMapping(value = "login", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String login(@RequestParam(value = "user_name", required = true) String userName,
                          @RequestParam(value = "password", required = true) String password) throws Exception {
        String resultJson = "{\"code\":0}";
        if(!userService.tryUserName(userName)) {
            int stateCode = userService.isPasswordCorrect(userName, password);
            resultJson = "{\"state\":" + stateCode + "}";
            if(stateCode == 0) {
                User user = userService.get(userName);
                session.setAttribute("user", user);
            }
        }
        else {
            resultJson = "{\"state\":1}";
        }
        return resultJson;
    }

    @RequestMapping(value = "register", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String register(@RequestParam(value = "user_name", required = true) String userName,
                           @RequestParam(value = "password", required = true) String password,
                           @RequestParam(value = "email", required = true) String email) throws Exception {
        String resultJson = "{\"code\":0}";

        if(userService.tryUserName(userName)) {
            resultJson = "{\"state\":0}";
            User newUser = new User(0, userName, password, email, false, new Timestamp(System.currentTimeMillis()));
            userService.appendNewUser(newUser);
            session.setAttribute("user", userService.get(newUser.getUserName()));
        }
        else
            resultJson = "{\"state\":1}";

        return resultJson;
    }

    @RequestMapping(value = "try", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String userNameTry(@RequestParam(value = "user_name", required = true) String userName) throws Exception {
        String resultJson = "{\"code\":0}";

        if(userService.tryUserName(userName)) {
            resultJson = "{\"state\":0}";
        }
        else
            resultJson = "{\"state\":1}";

        return resultJson;
    }

    @RequestMapping(value = "submit_tip", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String tipSave(@RequestParam(value = "title", required = true) String title,
                          @RequestParam(value = "content", required = true) String content,
                          @RequestParam(value = "tags", required = true) String tags) throws Exception {
        String resultJson = "{\"code\":0}";

        if(title.equals("")) {
            resultJson = "{\"state\":1}";
        }
        else if(content.equals("")){
            resultJson = "{\"state\":2}";
        }
        else{
            User user = (User)session.getAttribute("user");
            userService.updateTip(title, content, user.getId(), tags);
            resultJson = "{\"state\":0}";
        }

        return resultJson;
    }

    @RequestMapping(value = "read_tip", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String tipRead(@RequestParam(value = "number", required = true) int number) throws Exception {
        String resultJson = "{\"code\":0}";

        String Tip = userService.getLastNews(number);
        resultJson = "{\"tip\": \""+ Tip +"\"}";

        return resultJson;
    }

    @RequestMapping(value = "read_content", method = RequestMethod.GET, produces = "text/json;charset=utf-8")
    @ResponseBody
    public String tipReadContent(@RequestParam(value = "number", required = true) int number) throws Exception {
        String resultJson = "{\"code\":0}";

        String Tip = userService.readTipContent(number);
        resultJson = "{\"tip\": \""+ Tip +"\"}";

        return resultJson;
    }
}
