export default function changeTheme(theme: boolean) {
  if (theme) {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
    return;
  }

  // Will run if theme is false (light)
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
}
