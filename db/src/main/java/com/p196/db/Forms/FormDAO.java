package com.p196.db.Forms;

import java.util.List;

public interface FormDAO<T> {
    List<T> list();
    void update(Integer userId, String role);

}
