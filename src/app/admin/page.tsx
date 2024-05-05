import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSalesData() {
    const data = await db.order.aggregate({
        _sum: { pricePaidInCents: true },
        _count: true,
    });
    return {
        amount: (data._sum.pricePaidInCents || 0) / 100,
        numberOfSales: data._count,
    };
}

async function getUserData() {
    const [userCount, orderCount] = await Promise.all([
        db.user.count(),
        db.order.aggregate({
            _sum: { pricePaidInCents: true },
        }),
    ]);
}

export default async function AminDashboard() {
    const salesData = await getSalesData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DashboardCard
                title="Sales"
                subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
                body={formatCurrency(salesData.amount)}
            />
            <DashboardCard
                title="Customers"
                subtitle={`${formatCurrency()} Average Value`}
                body={formatNumber(salesData.amount)}
            />
        </div>
    );
}

type DashboardCardProps = {
    title: String;
    subtitle: String;
    body: String;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent>{body}</CardContent>
        </Card>
    );
}