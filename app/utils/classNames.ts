// utils/classNames.ts

export default function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  