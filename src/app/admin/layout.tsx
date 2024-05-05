import { Nav, NavLink } from "./_components/Nav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav>
                <NavLink href="/admin">Dashboard</NavLink>
                <NavLink href="/admin/produts">Produts</NavLink>
                <NavLink href="/admin/users">Customers</NavLink>
                <NavLink href="/admin/orders">Sales</NavLink>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}
