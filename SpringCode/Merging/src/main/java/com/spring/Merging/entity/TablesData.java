package com.spring.Merging.entity;

import java.util.List;

public class TablesData {
	
    private List<Table1> table1Data;
    private List<Table2> table2Data;

    public TablesData(List<Table1> table1Data, List<Table2> table2Data) {
        this.setTable1Data(table1Data);
        this.setTable2Data(table2Data);
    }

	public List<Table1> getTable1Data() {
		return table1Data;
	}

	public void setTable1Data(List<Table1> table1Data) {
		this.table1Data = table1Data;
	}

	public List<Table2> getTable2Data() {
		return table2Data;
	}

	public void setTable2Data(List<Table2> table2Data) {
		this.table2Data = table2Data;
	}

}

