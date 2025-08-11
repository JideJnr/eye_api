import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 God Eyes API is running on http://localhost:${PORT}`);
});
