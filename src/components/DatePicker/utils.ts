import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD'): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return format
    .replace('YYYY', year.toString())
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes);
}

export function parseDate(dateString: string): Date | null {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date;
}

export function isDateInRange(date: Date, minDate?: Date, maxDate?: Date): boolean {
  if (minDate && date < minDate) return false;
  if (maxDate && date > maxDate) return false;
  return true;
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number, weekStartsOn: number = 1): number {
  const firstDay = new Date(year, month, 1).getDay();
  return (firstDay - weekStartsOn + 7) % 7;
}

export function generateMonthDays(year: number, month: number, weekStartsOn: number = 1): Date[] {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month, weekStartsOn);
  const days: Date[] = [];

  // Previous month days
  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push(new Date(year, month - 1, prevMonthDays - i));
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  // Next month days
  const totalCells = 42; // 6 weeks * 7 days
  const nextMonthDays = totalCells - days.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
}

export function getMonthName(month: number, locale: string = 'en'): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[month]!;
}

export function getWeekdayName(day: number, locale: string = 'en', short: boolean = false): string {
  const weekdays = short
    ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[day]!;
}