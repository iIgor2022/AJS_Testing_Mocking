import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test.each([
  [{ status: 'ok', level: 'healthy' }, 'Ваш текущий уровень: healthy'],
  [{ status: 'bad request', level: '' }, 'Информация об уровне временно недоступна'],
])('Testing getLevel function', (response, expected) => {
  fetchData.mockReturnValue(response);
  const result = getLevel(1);
  expect(result).toBe(expected);
});
