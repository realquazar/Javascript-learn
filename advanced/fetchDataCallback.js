function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = "Fetched data";
    callback(data);
  }, 2000);
}

fetchDataWithCallback((data) => {
  console.log(data); // Output: "Fetched data"
});
