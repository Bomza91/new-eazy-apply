import { createDbStore } from '../../utils/createDbStore'
import '../../types/Institution';

const createInstitutionsDb = () => {
    const dbStore = createDbStore('institutions');

    /**
     * @name add
     * @param {Omit<Institution, 'id'> | Omit<Institution, 'id'>[]} newValues
     * @return {Promise <Institution | Institution[]>} 
     */

    const add = async (newValues) => await dbStore.add(newValues);
    
     /**
     * @name update
     * @param {Partial<Institution> | Partial<Institution[]>} newValues
     * @return {Promise <Institution | Institution[]>} 
     */

    const update = async (newValues) => await dbStore.update(newValues)
  

     /**
     * @name remove
     * @param {string | string[]} query
     * @return {Promise<void>} 
     */

    const remove = async (query) =>  await dbStore.remove(query)
        


     /**
     * @name read
     * @param {string | string[]} query
     * @return {Promise<Institution | Institution[]>} 
     */

    const read = async (query) => await dbStore.read(query);

/**
 * 
 * @typedef {object} options
 * @property {number} [count]
 * @property {string} [sorting]
 * @property {boolean} [reverse]
 */

    /**
     * @name search
     * @param {(value: object) => boolean} query
     * @param {number} [options]
     * @return {Promise<Institution | Institution[]>} 
     */

    const search = async (query, options) => await dbStore.search(query, options);
        
     return{
         add,
         update,
         remove,
         read,
         search,
     }
 

};
export const institutions = createInstitutionsDb();
export default institutions;



