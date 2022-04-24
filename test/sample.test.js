const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/');
      // console.log(res.text);
    expect(res.statusCode).toEqual(200)
    expect(res.text).toMatch(/Hello world!/);
  })
})