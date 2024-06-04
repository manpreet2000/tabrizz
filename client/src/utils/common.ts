
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const backendUrl = 'https://backend.tabrizz.com';
// export const backendUrl = 'http://localhost:3000';
