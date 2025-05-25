import type { Route } from "./+types/home";
import { WMenu } from '../components/wmenu/wmenu';
import { EmployeeData } from '../components/employeeData/employeeData';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'New React Router App' },
        { name: 'description', content: 'Welcome to React Router!' },
    ];
}

export default function Home() {
    return (
        <>
            <WMenu />
            <EmployeeData />
        </>
    );
}
