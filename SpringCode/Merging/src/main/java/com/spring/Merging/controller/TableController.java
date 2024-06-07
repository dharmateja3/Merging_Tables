package com.spring.Merging.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.Merging.entity.Table1;
import com.spring.Merging.entity.Table2;
import com.spring.Merging.entity.TablesData;
import com.spring.Merging.repository.Table1Repository;
import com.spring.Merging.repository.Table2Repository;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class TableController {

    @Autowired
    private Table1Repository table1Repository;

    @Autowired
    private Table2Repository table2Repository;


    @GetMapping("/tables")
    public TablesData getAllTablesData() {
        List<Table1> table1Data = table1Repository.findAll();
        List<Table2> table2Data = table2Repository.findAll();
        return new TablesData(table1Data, table2Data);
    }

    
    
}

