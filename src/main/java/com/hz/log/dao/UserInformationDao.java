package com.hz.log.dao;

import com.hz.log.bean.Tip;
import com.hz.log.bean.User;
import com.hz.log.imp.TipRowMapper;
import com.hz.log.imp.UserRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.Types;
import java.util.List;

/**
 * Created by Polo on 2017/7/31.
 */

@Repository
public class UserInformationDao {
    private static DataSource dataSource;

    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public JdbcTemplate getJdbcTemplate() {
        return new JdbcTemplate(dataSource);
    }

    public void saveModify(User user) {
        getJdbcTemplate().update("update user_information set user_name=?, password=?, email=? where id=?",
                new Object[]{user.getUserName(), user.getPassword(), user.getEmail()},
                new int[]{Types.VARCHAR, Types.VARCHAR, Types.VARCHAR, Types.INTEGER});
    }

    public void saveUser(User user) {
        getJdbcTemplate().update("INSERT INTO user_information (user_name, password, email, vip, created_time) VALUES (?, ?, ?, ?, ?);",
                new Object[]{user.getUserName(), user.getPassword(), user.getEmail(), user.isVIP(), user.getCreatedTime()},
                new int[]{Types.VARCHAR, Types.VARCHAR, Types.VARCHAR, Types.TINYINT, Types.TIMESTAMP});
    }

    public void saveVIP(boolean vip, int id) {
        getJdbcTemplate().update("update user_information set vip=? where id=?",
                new Object[]{vip, id},
            new int[]{Types.TINYINT, Types.INTEGER});
    }

    public void saveTip(Tip tip) {
        String tags = new String();
        if(tip.getTags().length <= 0)
            tags = "";
        else{
            String[] originTags = tip.getTags();
            StringBuffer sb = new StringBuffer(originTags[0]);
            for(int i=1; i<originTags.length; i++)
                sb.append(" " + originTags[i]);
            tags = sb.toString();
        }
        getJdbcTemplate().update("INSERT INTO tip (title, content, user_id, time, tags) VALUES (?, ?, ?, ?, ?);",
                new Object[]{tip.getTitle(), tip.getContent(), tip.getUserId(), tip.getTime(), tags},
                new int[]{Types.VARCHAR, Types.VARCHAR, Types.VARCHAR, Types.TIMESTAMP, Types.VARCHAR});

    }
    public User getUser(int id) {
        String selectOneRow = "select * from user_information where id = ?";
        List<User> list = getJdbcTemplate().query(selectOneRow, new Object[]{id}, new UserRowMapper());
        if(list.size() > 0) {
            return list.get(0);
        }

        return null;
    }
    public Tip getTip(int id) {
        String selectOneRow = "select * from tip where id = ?";
        List<Tip> list = getJdbcTemplate().query(selectOneRow, new Object[]{id}, new TipRowMapper());
        if(list.size() > 0) {
            return list.get(0);
        }

        return null;
    }

    public int userNameToId(String userName){

        String selectOneRow = "select * from user_information where user_name = ?";
        List<User> list = getJdbcTemplate().query(selectOneRow, new Object[]{userName}, new UserRowMapper());
        if(list.size() > 0) {
            return list.get(0).getId();
        }

        return -1;
    }

    public int lastTipId() {
        String selectOneRow = "select MAX(id) from tip";
        Integer id = getJdbcTemplate().queryForObject(selectOneRow, Integer.class);
        if(id.intValue() > 0) {
            return id.intValue();
        }

        return -1;
    }
}
