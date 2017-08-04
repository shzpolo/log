package com.hz.log.bean;

import java.sql.Timestamp;

/**
 * Created by Polo on 2017/7/31.
 */
public class Tip {
    private int id;
    private String tipTitle;
    private String tipContent;
    private int userId;
    private Timestamp time;
    private String[] tags;

    public Tip() {

    }

    public Tip(int id, String title, String content, int userId, Timestamp time, String tags) {
        this.id = id;
        this.tipTitle = title;
        this.tipContent = content;
        this.time = time;
        this.userId = userId;
        this.tags = tags.split(" ");
    }

    public void setId(int id){
        this.id = id;
    }
    public int getId(){
        return this.id;
    }

    public void setTitle(String title){
        this.tipTitle = title;
    }
    public String getTitle(){
        return this.tipTitle;
    }

    public void setContent(String content){
        this.tipContent = content;
    }
    public String getContent(){
        return this.tipContent;
    }

    public void setUserId(int userId){
        this.userId = userId;
    }
    public int getUserId(){
        return this.userId;
    }

    public void setTime(Timestamp time){
        this.time = time;
    }
    public Timestamp getTime(){
        return this.time;
    }

    public void setTags(String[] tags){
        this.tags = tags;
    }
    public void setTags(String tags){
        this.tags = tags.split(" ");
    }
    public String[] getTags(){
        return this.tags;
    }
}
