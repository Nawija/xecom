"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav({ children }: { children: React.ReactNode }) {
    return (
        <nav className="bg-primary text-primary-foreground flex lg:flex-col justify-center lg:justify-start lg:pt-4 px-4 pr-0 lg:min-h-screen">
            {children}
        </nav>
    );
}

export function NavLink(
    props: Omit<React.ComponentProps<typeof Link>, "className">
) {
    const pathname = usePathname();
    return (
        <Link
            {...props}
            className={cn(
                "py-4 px-10 hover:bg-secondary hover:text-secondary-foreground rounded-l-lg mt-3 focus-visible:bg-secondary focus-visible:text-secondary-foreground transition-colors",
                pathname === props.href && "bg-background text-foreground "
            )}
        />
    );
}
