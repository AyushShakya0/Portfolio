import { create } from 'zustand'

const useThemeStore = create((set) => {
    // Check localStorage for saved theme preference
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : 'light';
    const initialTheme = savedTheme || 'light';
    
    // Apply initial theme to document
    if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-theme', initialTheme);
    }

    return {
        theme: initialTheme,
        toggleTheme: () => set((state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            return { theme: newTheme };
        })
    };
});

export default useThemeStore;
