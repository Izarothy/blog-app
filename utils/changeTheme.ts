export default function changeTheme() {
  const theme = localStorage.getItem('blogTheme');

  if (theme === 'dark') {
    localStorage.setItem('blogTheme', 'light');
    document.documentElement.classList.remove('dark');
    return;
  }

  // Will run if current theme is false (light)
  localStorage.setItem('blogTheme', 'dark');
  document.documentElement.classList.add('dark');
}
