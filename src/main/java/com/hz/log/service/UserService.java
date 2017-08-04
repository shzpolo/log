package com.hz.log.service;

import com.hz.log.bean.Tip;
import com.hz.log.bean.User;

/**
 * Created by Polo on 2017/7/31.
 */
public interface UserService {

    User get(String userName);
    void changeInfo(String userName, String newName, String password, String Email);
    void setVIP(String userName, boolean vip);

    String getLastNews(int number);
    String readTipContent(int id);
    void updateTip(String title, String content, int userId, String tags);

    boolean tryUserName(String new_userName);
    int isPasswordCorrect(String userName, String password);
    void appendNewUser(User user);
}
