package com.hz.log.imp;

import com.hz.log.bean.Tip;
import com.hz.log.bean.User;
import com.hz.log.dao.UserInformationDao;
import com.hz.log.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.sql.Timestamp;
import java.util.List;
/**
 * Created by Polo on 2017/7/31.
 */
@Service
public class UserServiceImp implements UserService {
    @Autowired
    private UserInformationDao dao;

    @Override
    public User get(String userName){
        int id = dao.userNameToId(userName);
        return dao.getUser(id);
    }

    @Override
    public void changeInfo(String userName, String newName, String password, String Email){
        int id = dao.userNameToId(userName);
        User new_user_info = dao.getUser(id);
        new_user_info.setEmail(Email);
        new_user_info.setUserName(newName);
        new_user_info.setPassword(password);
        dao.saveModify(new_user_info);
    }

    @Override
    public void setVIP(String userName, boolean vip){
        int id = dao.userNameToId(userName);
        //if(dao.isVIP(id)){}
        dao.saveVIP(vip, id);
    }

    @Override
    public String getLastNews(int number){
        int exist_tip_num = dao.lastTipId();
        StringBuffer res = new StringBuffer();
        if(exist_tip_num > number) {
            for(int i=0; i<number; i++) {
                try {
                    res.append("Title:" + dao.getTip(exist_tip_num - i).getTitle() +
                            " id:" + (exist_tip_num - i) + "  | ");
                } catch(Exception ie){
                    continue;
                }
            }
        }
        else {
            return "Sorry, there is no so many new tips.";
        }
        return res.toString();
    }

    @Override
    public String readTipContent(int id) {
        return dao.getTip(id).getContent();
    }

    @Override
    public void updateTip(String title, String content, int userId, String tags) {
        Timestamp time = new Timestamp(System.currentTimeMillis());
        Tip newTip = new Tip(0, title, content, userId, time, tags);
        dao.saveTip(newTip);
    }

    @Override
    public boolean tryUserName(String new_userName){
        return dao.userNameToId(new_userName) == -1;
    }

    @Override
    public int isPasswordCorrect(String userName, String password){
        int id = dao.userNameToId(userName);
        if(id == -1)
            return 1;//"user_name";
        User now_user = dao.getUser(id);
        if(password.equals(now_user.getPassword()))
            return 0;//"pass";
        else
            return 2;//"password";
    }

    @Override
    public void appendNewUser(User user) {
        dao.saveUser(user);
    }
}
