import saving from '../app.js';

jest.setTimeout(10000);

test('test app save', async () => {
  const data = await saving;
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
  
});


