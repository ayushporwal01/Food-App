global.fetch = jest.fn((data) => {
    return Promise.resolve ({
        json: () => {
            return Promise.resolve(data); 
        }
    })
}) 