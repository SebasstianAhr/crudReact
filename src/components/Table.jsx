import React from 'react';
import Tablebody from './Tablebody';

const Table = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th className='th-actions-table'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <Tablebody/>
                    
                </tbody>
            </table>
        </div>
    );
}

export default Table;
