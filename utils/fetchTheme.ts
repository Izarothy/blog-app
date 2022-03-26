export default function fetchTheme() {
  // Grab browser preferred if previous theme is not set
  if (
    !('blogTheme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    localStorage.setItem('blogTheme', 'dark');
    document.documentElement.classList.add('dark');
    return;
  }

  // Fetch from localstorage
  if (localStorage.blogTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    localStorage.setItem('blogTheme', 'light');
    document.documentElement.classList.remove('dark');
  }
}
