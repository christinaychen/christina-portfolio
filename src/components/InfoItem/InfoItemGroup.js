import React from 'react'
import '../../App.css'
import Columns from 'react-columns';

const InfoItemGroup = ({ show, numCols, children }) => {

    const showHideClassName = show ? "section-items display-block" : "section-items display-none";
    return (
        <div className={showHideClassName}>
            <Columns columns={numCols}>
                {children}
            </Columns>
        </div>
    );

}

export default InfoItemGroup;
