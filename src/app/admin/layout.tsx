import { Nav, NavLink } from "./_components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="lg:flex block">
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/products">Produts</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
                <NavLink href="/admin/orders">Sales</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </div>
    );
}
