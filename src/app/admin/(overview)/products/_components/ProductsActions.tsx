"use client";

import {
    deleteProduct,
    toggleProductAvailability,
} from "@/app/admin/_actions/products";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTransition } from "react";

export function ActiveToggleDropdownItem({
    id,
    isAvailableForPurchase,
}: {
    id: string;
    isAvailableForPurchase: boolean;
}) {
    const [isPanding, startTransition] = useTransition();
    return (
        <DropdownMenuItem
            disabled={isPanding}
            onClick={() => {
                startTransition(
                    async () =>
                        await toggleProductAvailability(
                            id,
                            !isAvailableForPurchase
                        )
                );
            }}
        >
            {isAvailableForPurchase ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    );
}

export function DeleteDropdownItem({
    id,
    disabled,
}: {
    id: string;
    disabled: boolean;
}) {
    const [isPanding, startTransition] = useTransition();
    return (
        <DropdownMenuItem
            disabled={disabled || isPanding}
            onClick={() => {
                startTransition(async () => await deleteProduct(id));
            }}
        >
            Delete
        </DropdownMenuItem>
    );
}
