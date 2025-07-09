catch (error) {
  console.error('❌ AI Error:', error.toString());
  console.error(error); // Prints full error stack trace in logs
  res.status(500).json({ error: 'Failed to generate content' });
}
