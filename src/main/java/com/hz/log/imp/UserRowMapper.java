package com.hz.log.imp;

import com.hz.log.bean.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Polo on 2017/7/31.
 */
public class UserRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User(rs.getInt("id"), rs.getString("user_name"), rs.getString("password"),
                rs.getString("email"), rs.getBoolean("vip"), rs.getTimestamp("created_time"));
        return user;
    }
}
