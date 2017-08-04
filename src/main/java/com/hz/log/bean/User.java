package com.hz.log.bean;

import java.sql.Timestamp;

/**
 * Created by Polo on 2017/7/31.
 */
public class User {
    private String userName;
    private String password;
    private String email;
    private boolean vip;
    private int id;
    private Timestamp createdTime;

    public User(){

    }

    public User(int id, String userName, String password, String email, boolean vip, Timestamp time){
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.vip = vip;
        this.createdTime = time;
    }

    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return this.id;
    }

    public void setUserName(String userName){
        this.userName = userName;
    }
    public String getUserName(){
        return this.userName;
    }

    public void setPassword(String password){
        this.password = password;
    }
    public String getPassword(){
        return this.password;
    }

    public void setEmail(String email){
        this.email = email;
    }
    public String getEmail(){
        return this.email;
    }

    public void setVIP(boolean vip){
        this.vip = vip;
    }
    public boolean isVIP(){
        return this.vip;
    }

    public void setCreatedTime(Timestamp CreatedTime){
        this.createdTime = CreatedTime;
    }
    public Timestamp getCreatedTime(){
        return this.createdTime;
    }
}
