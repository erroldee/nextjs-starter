export class MongooseHelper {
    static serializeJSON = (jsonData) => {
        return JSON.parse(JSON.stringify(jsonData));
    };
}