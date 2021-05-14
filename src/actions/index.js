export const setAccounts = accounts => {
    return {
        type: 'SET_ACCOUNTS',
        payload: accounts
    }
};

export const setTransactions = transactions => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: transactions
    }
};

export const deleteAccount = accountId => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: accountId
    }
};

export const editAccount = (name, accountId) => {
    return {
        type: 'EDIT_ACCOUNT',
        payload: {
            name,
            accountId
        }
    }
};

export const deposit = (amount, accountId) => {
    return {
        type: 'DEPOSIT',
        payload: {
            amount,
            accountId
        }
    }
};

export const withdraw = (amount, accountId) => {
    return {
        type: 'WITHDRAW',
        payload: {
            amount,
            accountId
        }
    }
};

export const newTrans = (type, accountId, amount, name) => {
    return {
        type: 'TRANS_AMOUNT',
        payload: {
            type,
            accountId,
            amount,
            name
        }
    };
};