const request = require('supertest');
const { app, servidor } = require('../app.js');

afterAll((done) => {
  servidor.close(done);
});

describe('Teste de rotas admin ', () => {
  it('deve mostrar todos os produtos', async () => {
    const res = await request(app).get('/admin/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
  }),
    it('deve apresentar formulário add ', async () => {
      const res = await request(app).get('/admin/add-product');
      const resposta = { editing: false };
      expect(res.statusCode).toEqual(200);
      expect(res.body).toMatchObject(resposta);
    }),
    it('deve receber o produto criado ', async () => {
      const res = await request(app).post('/admin/add-product');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty(produto);
    });
});
