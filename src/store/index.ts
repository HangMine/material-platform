import { createStore } from 'vuex';
import VuexORM from '@vuex-orm/core';
// import * as orms from './orms';
import * as models from '@/models';

console.log(models);
const database = new VuexORM.Database();
Object.values(models).forEach(Model => {
  database.register(Model);
});

export default createStore({
  plugins: [
    VuexORM.install(database),
  ],
});
