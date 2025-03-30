"use client"

export function setWhoami(whoami: string): boolean {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("whoami", whoami);
      return true;
    }
    console.error('LocalStorage is not available');
    return false;
  } catch (error) {
    console.error('Failed to store whoami:', error);
    return false;
  }
}