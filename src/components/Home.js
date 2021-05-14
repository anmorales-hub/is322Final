import React from "react";
import { connect } from "react-redux";
import { deleteAccount} from "../actions";

class Home extends React.Component {
    state = {
        currentPage: '/'
    };

    isActive(pageName) {
        return (pageName === this.props.currView ? 'nav-link active' : 'nav-link')
    }

    onPageClick(event, pageName) {
        event.preventDefault();
        this.props.whenVChange(pageName);
    }

    accountsSeg () {
        let accountList = this.props.accounts;

        return accountList.map(acct => {
            return (
                <div className="card" key={acct.id}>
                    <div className="cardMain">
                        <h3 className="cardID">Account ID: { acct._id }</h3>
                        <h4 className="cardName">Holder: { acct.name }</h4>
                        <h5 className="cardBalance">Balance: ${ acct.balance } </h5>
                        <div className="btnHolster">
                            <button type="button" className={this.isActive('Account')} onClick={(e) => this.onPageClick(e, 'Account')}>  View Account </button>
                            <button type="button" onClick={() => {this.props.deleteAccount(acct._id)}} className="accDelete"> Delete Account </button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const accList = this.accountsSeg();
        return (
            <div className="container">
                <h2> Accounts </h2>
                <div className="accountList">
                    { accList }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    };
};

export default connect(mapStateToProps, {deleteAccount}) (Home);