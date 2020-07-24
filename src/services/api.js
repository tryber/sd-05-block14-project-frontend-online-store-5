export async function getCategories() {
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchResult = fetch(apiUrl).then((response) => response.json());
  return fetchResult;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiUrl;
  if (categoryId) apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  else if (query) apiUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const fetchResult = fetch(apiUrl).then((response) => response.json());
  return fetchResult;
}
