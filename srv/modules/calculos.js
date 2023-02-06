function calculateInches(req) {

}
function calculateInches(req) {

}
function calculateInches(req) {

}
module.exports = {
    async calculate(sql) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await pool.query(sql);
                const DBresponse = result.rows.map(row => {
                    let str = JSON.stringify(row)
                    let parsed = JSON.parse(str);
                    return parsed;
                })
                resolve(DBresponse);
            }

            catch (ex) {
                reject("We messed up! " + ex);
            }
        });
    }
};