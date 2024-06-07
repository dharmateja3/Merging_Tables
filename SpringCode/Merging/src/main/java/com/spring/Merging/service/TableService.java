package com.spring.Merging.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.Merging.entity.Table1;
import com.spring.Merging.entity.Table2;
import com.spring.Merging.repository.Table1Repository;
import com.spring.Merging.repository.Table2Repository;


@Service
public class TableService {

    @Autowired
    private Table1Repository table1Repository;

    @Autowired
    private Table2Repository table2Repository;

    public List<Table1> getAllTable1Records() {
        return table1Repository.findAll();
    }

    public List<Table2> getAllTable2Records() {
        return table2Repository.findAll();
    }

}

