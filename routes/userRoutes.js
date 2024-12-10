import express, { Router } from 'express';
import { fetch } from '../controller/controller';


const route = express.Router();
route.get('/fetch',fetch)

export default route;


