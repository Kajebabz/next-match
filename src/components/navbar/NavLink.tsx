'use client';

import useMessageStore from '@/hooks/useMessageStore';
import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { useShallow } from 'zustand/react/shallow';

type Props = {
    href: string;
    label: string;
}

export default function NavLink({ href, label }: Props) {
    const pathname = usePathname();
    const { unreadCount } = useMessageStore(useShallow(state => ({
        unreadCount: state.unreadCount
    })))

    return (
        <NavbarItem isActive={pathname === href} as={Link} href={href}>
            <span>{label}</span>
            {href === '/messages' && unreadCount > 0 && (
                <span className='ml-1'>({unreadCount})</span>
            )}
        </NavbarItem>
    )
}
