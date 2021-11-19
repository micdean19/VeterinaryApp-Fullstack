package com.p196.db.dao;

import java.util.List;
import java.util.Optional;

import com.p196.db.model.User;

public interface DAO<T>{

    List<T> list();

    void create(T t);

    Optional<T> get(int id);

    void update(T t, int id);

    void delete(int id);



}
