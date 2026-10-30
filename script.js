document.getElementById('copy').addEventListener('click', async () => {
  const status = document.getElementById('status');
  try {
    await navigator.clipboard.writeText('abc123');
    status.textContent = '已複製 LINE ID：abc123';
  } catch {
    status.textContent = '請在 LINE 搜尋 ID：abc123';
  }
});
