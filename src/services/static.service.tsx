import mongooseMiddleware from "../helpers/middleware.helper";
import {MongooseHelper} from "../helpers/mongoose.helper";

export class StaticService {
    static getSamples = async () => {
        const mongoConnection = await mongooseMiddleware();

        if (mongoConnection) {
            const {connection, models} = mongoConnection;

            const data = await models.Samples.find({});
            connection.close();

            return MongooseHelper.serializeJSON(data);
        } else {
            return [];
        }
    };

    static getSampleIds = async () => {
        const mongoConnection = await mongooseMiddleware();

        if (mongoConnection) {
            const {connection, models} = mongoConnection;

            const ids = await models.Samples.find({}, {id: 1});
            connection.close();

            return ids.map(data => {
                return data.id;
            });
        } else {
            return [];
        }
    };

    static getSampleInfo = async (id: number) => {
        const mongoConnection = await mongooseMiddleware();

        if (mongoConnection) {
            const {connection, models} = mongoConnection;

            const { title, date }: any = await models.Samples.findOne({ id });
            connection.close();

            return { id, title, date };
        } else {
            return { id: "", title: "", date: "" };
        }
    };
}