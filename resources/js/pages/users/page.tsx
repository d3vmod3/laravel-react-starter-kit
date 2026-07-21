import { useEffect, useState } from 'react';
import type User from '../../types/user';
import { columns } from './columns';
import { DataTable } from './data-table';

export default function SamplePage() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('sample-users');

            if (!response.ok) {
                console.error('Failed to load users');

                return;
            }

            const result = await response.json();

            setData(result.users);
        };

        loadData();
    }, []);

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
