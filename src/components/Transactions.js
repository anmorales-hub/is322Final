import React from "react";

import { connect } from "react-redux";

class Transactions extends React.Component {
    state = {
        currentPage: '/'
    };

    transactionTab () {
        let transList = this.props.transactions;

        return transList.map(trans => {
            return (
                <tr className="transTable">
                    <td className="tableID"> { trans._id }</td>
                    <td className="accountID"> { trans.accountId }</td>
                    <td className="type"> { trans.type } </td>
                    <td className="balance"> ${ trans.amount } </td>
                    <td className="name"> { trans.name } </td>
                </tr>
            );
        });
    }

    render() {
        const transList = this.transSeg();

        return (
            <div className="table-con">
                <h1> Transactions </h1>
                <table className="transList">
                    <tr>
                        <th className="tableID"> ID</th>
                        <th className="accountID"> Account ID</th>
                        <th className="type"> Type</th>
                        <th className="balance"> Amount</th>
                        <th className="name"> Note</th>
                    </tr>
                    { transList }
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions
    };
};
export default connect(mapStateToProps)(Transactions);