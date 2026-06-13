const fetchMock = (data) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
    }),
  );
};

export default fetchMock;
