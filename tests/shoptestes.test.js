const request = require('supertest');
const { app, servidor } = require('../app.js');

afterAll((done) => {
  servidor.close(done);
});


describe('Teste de rotas admin ', () => {
  it('deve mostrar todos os produtos', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  }),
    it('deve mostrar todos os produtos', async () => {
      const res = await request(app).get('/products');
      const resposta = { editing: false };
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('data');
    });
});
