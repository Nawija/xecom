import { ReactNode } from "react";

export function PageHeader({ children }: { children: ReactNode }) {
    return <h1 className="text-2xl font-medium">{children}</h1>;
}
