'use client'
import {AccountCard} from "@/components/Services/main/Wallet/Account";

export function AccountOverview() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <AccountCard
                bankName="Wema Bank"
                accountName="Emmanuel Williams"
                accountNumber="12345678900"
                balance={5842.32}
                availableBalance={5842.32}
            />
        </div>
    );
}