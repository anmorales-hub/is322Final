import React from 'react';

class Pages extends React.Component {

    isActive(pageName) {
        return (pageName === this.props.currView ? 'nav-link active' : 'nav-link')
    }

    onPageClick(event, pageName) {
        event.preventDefault();
        this.props.whenVChange(pageName);
    }

    render () {
        return (
            <div className='nav pages'>
                <div className='nav-item'>
                    <a className={this.isActive('Home')} onClick={(e) => this.onPageClick(e, 'Home')}>
                        Home
                    </a>
                </div>
                <div className='nav-item'>
                    <a className={this.isActive('Transactions')} onClick={(e) => this.onPageClick(e, 'Transactions')}>
                        Transactions
                    </a>
                </div>
            </div>
        )
    }
}

export default Pages;