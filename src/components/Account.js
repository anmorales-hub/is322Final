import React from "react";
import { connect } from "react-redux";
import { deleteAccount, newTrans, deposit, withdraw } from "../actions";

class Account extends React.Component {
    state = {
        currentPage: '/'
    };
     whenDeposit = (event) => {
        let type = 'deposit';
        event.preventDefault();
        this.props.depositAcct(1, this.state.amount);
        this.props.newTrans(type, 1, this.state.amount, this.state.name);
        this.setState({amount: '', name: ''});
    };

    whenWithdraw = (event) => {
        let type = 'withdraw';
        event.preventDefault();
        this.props.withdrawAcct(1, this.state.amount);
        this.props.newTrans(type, 1, this.state.amount, this.state.name);
        this.setState({amount: '', name: ''});
    };

    transSeg () {
        let transList = this.props.transactions;
        let transactions = [];
        transList.forEach(transaction => {
            if (transaction.accountId === 2) {
                transactions.push(transaction)
            }
        });

        return transactions.map(trans => {
            return (
                <tr className="transMain">
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
        let hold = [];
        hold.push(this.props.accounts);

        return (

            <div className="container">
                <h2> Account </h2>
                <div className="form">
                    <h3> { hold.name } Info </h3>
                    <p> Current Balance: { hold.balance }</p>
                    <div>
                        <button > Edit Account </button>
                        <button type="button" onClick={() => {this.props.deleteAcct(2)}} className="accDelete"> Delete Account </button>
                    </div>
                </div>
                <div className="transTable">
                    <h3> Transactions </h3>
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
                <div className="new-trans">
                    <h3 className='money'> New Transaction </h3>
                    <div className="Form-edit">
                        <h4 className="id-name"> Enter Amount</h4>
                        <form>
                            <input placeholder="Enter Amount" id="amount"
                                   onChange={(e) => this.setState({amount: e.target.value})}/>
                            <input placeholder="Enter Description" id="reason"
                                   onChange={(e) => this.setState({name: e.target.value})}/>

                            <button type="button" onClick={this.whenDeposit} className="deposit"> Deposit Amount </button>
                            <button type="button" onClick={this.whenWithdraw} className="withdr"> Withdraw Amount </button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions
    };
};

export default connect(mapStateToProps, { deleteAccount, newTrans, deposit, withdraw }) (Account);