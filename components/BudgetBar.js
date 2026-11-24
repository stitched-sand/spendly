import { formatMoney } from "@/lib/helpers"

export default function BudgetBar({ category, spent, budget }) {
    const percent = Math.round((spent / budget) * 100)

    let status = "good";
    if(percent >= 100) status ="over";
    else if(percent >= 75) status = "close"

    return (
        <div className="budget">
            <div className="budget-label">
                <span>{category}</span>
                <span className="muted">
                    {formatMoney(spent)} of
                    {formatMoney(budget)}
                </span>
            </div>
            <div className="budget-track">
                <div className={`budget-fill ${status}`} style={{ width: `${Math.min(percent, 100)}%`}} />
            </div>
        </div>
    )
}