async function main() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main().catch(console.error); // Call the function and catch any unhandled errors
