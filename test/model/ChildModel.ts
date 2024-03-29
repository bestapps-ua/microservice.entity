import EntitySQLModel from "../../src/model/entity/EntitySQLModel";
import IEntitySQLModelOptions from "../../src/interface/entity/sql/IEntitySQLModelOptions";
import MainModel from "./MainModel";
import Child from "../entity/Child";

let options: IEntitySQLModelOptions = {
    table: 'child',
    //@ts-ignore
    entity: Child,
    schemas: [
        {
            field: 'main',
            source: {
                id: 'main_id',
                model: MainModel,
            },
            isLazy: true,
        },
        {
            field: 'name'
        },
    ]
};

class ChildModel extends EntitySQLModel {

}

export default new ChildModel(options);
