package com.hz.log.imp;

import com.hz.log.bean.Tip;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Polo on 2017/7/31.
 */
public class TipRowMapper implements RowMapper {
    @Override
    public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
        Tip tip = new Tip(rs.getInt("id"), rs.getString("title"),
                rs.getString("content"), rs.getInt("user_id"), rs.getTimestamp("time"), rs.getString("tags"));
        return tip;
    }
}
