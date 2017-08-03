const request = require('supertest');
const mocha = require('mocha');
const express = require('express');
const proxyquire = require('proxyquire');

describe('Questions', () => {
    let server;
    before(() => {
        server = express();
        const router = require('../lib/questions');
        server.use(router);
    });

    it('/GET returns all questions JSON', (done) => {
        request(server)
            .get('/questions')
            // .expect( (err, res) => {
            //     console.log(err, res);
            // })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect([{question: "What's your name?"}], done);
    });
});
