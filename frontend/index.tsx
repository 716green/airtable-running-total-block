import {initializeBlock, useBase, useRecords} from '@airtable/blocks/ui';
import React from 'react';

 function RecordList() {
    const base = useBase();
    const table = base.tables[0];
    const records = useRecords(table);

    let valueArray = []

     const addValues = (valuesToAdd: string[]): number => {
         let total = 0.00
         valuesToAdd.forEach((value: string): void => {
             total += parseFloat(value)
         })
         return total
     }

    const getRecords = () => {
        records.map((record) => {
            valueArray.push(record.getCellValue('Amount'))
        })
        return addValues(valueArray).toFixed(2)
    }
     

     return <div><strong>Current Balance: ${ getRecords() }</strong></div>

 }

initializeBlock(() => <RecordList />);
