import connectToMongo from "./connectToMongo.helper";

const mongooseMiddleware = async () => {
    const {connection, models} = await connectToMongo();
    try {
        return {connection, models};
    } catch (e) {
        if (connection) {
            connection.close();
        }
    }
};

export default mongooseMiddleware;