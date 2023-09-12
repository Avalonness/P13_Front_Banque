import React from 'react';
import AccountComposant from "../../Composant/AccountList/accountlisst.composant"

function UserLayout() {


  return (
    <div>
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountComposant
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                description="Available Balance"
            />
            <AccountComposant
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                description="Available Balance"
            />
            <AccountComposant
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                description="Current Balance"
            />
        </main>
    </div>
  );
}

export default UserLayout;