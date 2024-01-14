import React from 'react';

const ReceiptFooter = ({sum}) => {
    return (
        <>
            <tfoot>
                <tr>
                    <td>Suma</td>
                    <td> - </td>
                    <td> - </td>
                    <td>
                        {sum}
                    </td>
                </tr>
            </tfoot>
        </>
    );
};

export default ReceiptFooter;