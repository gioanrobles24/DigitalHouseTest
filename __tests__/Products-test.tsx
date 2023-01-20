import 'react-native';

const getProductRequest = async () => {
  const response = fetch(
    'https://6222994f666291106a29f999.mockapi.io/api/v1/products',
    {
      method: 'GET',
    },
  ).then(res => res.json());
  return response;
};

it('get success all the products', async () => {
  const products = await getProductRequest(); // Run the function
  products.forEach((product: any) => {
    expect(product).toMatchSnapshot({
      id: expect.any(String),
    });
  });
});
